-- Stage safely: the existing progress policies remain active until the owner is
-- explicitly bootstrapped and access_config.enforced is enabled by a DB operator.
create schema if not exists app_private;
revoke all on schema app_private from public;
grant usage on schema app_private to anon, authenticated;
create table app_private.access_config (
 singleton boolean primary key default true check(singleton),
 gateway_secret text check (length(gateway_secret)>=64),
 enforced boolean not null default false
);
insert into app_private.access_config(singleton) values(true);
create table app_private.site_members (
 site_user_id text primary key check(length(site_user_id) between 1 and 200),
 display_name text not null default '' check(length(display_name)<=200),
 contact_email text not null default '' check(length(contact_email)<=320),
 supabase_user_id uuid unique references auth.users(id),
 state text not null default 'unrequested' check(state in ('unrequested','pending','approved','rejected','revoked')),
 role text not null default 'member' check(role in ('member','admin')),
 message text not null default '' check(length(message)<=500),
 requested_at timestamptz,
 approved_at timestamptz,
 updated_at timestamptz not null default now(),
 check(role<>'admin' or state='approved')
);
create index site_members_state_idx on app_private.site_members(state,requested_at);
create table app_private.access_invitations (
 id uuid primary key default gen_random_uuid(),
 email text not null unique check(email=lower(btrim(email)) and length(email) between 3 and 320),
 created_by text not null references app_private.site_members(site_user_id),
 created_at timestamptz not null default now(),
 expires_at timestamptz not null default now()+interval '30 days',
 consumed_by text references app_private.site_members(site_user_id),
 consumed_at timestamptz,
 cancelled_at timestamptz
);
create table app_private.access_history (
 id bigint generated always as identity primary key,
 action text not null check(action in ('request_submitted','request_approved','request_rejected','invitation_created','invitation_cancelled','invitation_claimed','access_revoked','access_restored','admin_bootstrapped')),
 actor_id text not null,
 target_id text,
 email text,
 created_at timestamptz not null default now()
);
create table app_private.access_nonces(nonce uuid primary key,created_at timestamptz not null default now());
create index access_nonces_time_idx on app_private.access_nonces(created_at);
-- No browser role receives table privileges, including on the audit trail.
alter table app_private.access_config enable row level security;
alter table app_private.site_members enable row level security;
alter table app_private.access_invitations enable row level security;
alter table app_private.access_history enable row level security;
alter table app_private.access_nonces enable row level security;
revoke all on all tables in schema app_private from public,anon,authenticated;
revoke all on all sequences in schema app_private from public,anon,authenticated;

-- Authorization is live DB state, never user_metadata or a stale JWT role claim.
-- The auth.uid/session helpers are used only with a Supabase-verified JWT by RLS.
create function app_private.progress_allowed() returns boolean
language sql stable security definer set search_path='' as $$
 select (select auth.uid()) is not null and (
  not coalesce((select enforced from app_private.access_config where singleton),true)
  or exists (
   select 1 from app_private.site_members m
   join auth.sessions s on s.user_id=m.supabase_user_id
   where m.supabase_user_id=(select auth.uid()) and m.state='approved'
   and s.id::text=(select auth.jwt()->>'session_id')
  )
 )
$$;
revoke all on function app_private.progress_allowed() from public,anon;
grant execute on function app_private.progress_allowed() to authenticated;
-- RESTRICTIVE composes with the immutable owner-only policies already in place.
create policy study_events_require_approval on public.study_events as restrictive
 for all to authenticated using ((select app_private.progress_allowed()))
 with check ((select app_private.progress_allowed()));

-- The only write gateway accepts an HMAC-authenticated request from this Site's
-- Worker. Its private implementation cannot be invoked through the Data API.
-- The browser never holds the gateway secret. There is no service-role key.
create function app_private.access_gateway(body text, signature text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare
 p jsonb; actor text; op text; data jsonb; name text; email text;
 secret text; enabled boolean; stamp numeric; uid uuid;
 m app_private.site_members%rowtype; target app_private.site_members%rowtype;
 inv app_private.access_invitations%rowtype; verified_email text;
 changed integer; action text; dest text; page_kind text; start_at integer;
 items jsonb; total bigint; result jsonb;
begin
 select gateway_secret,enforced into secret,enabled from app_private.access_config where singleton;
 if secret is null or signature is null or body is null or signature !~ '^[0-9a-f]{64}$' or octet_length(body)>8192
    or encode(extensions.hmac(convert_to(body,'UTF8'),convert_to(secret,'UTF8'),'sha256'),'hex')<>signature then
  raise exception 'Invalid gateway authentication' using errcode='28000';
 end if;
 p:=body::jsonb; actor:=p->'actor'->>'id'; op:=p->>'operation'; data:=coalesce(p->'data','{}'::jsonb);
 stamp:=(p->>'timestamp')::numeric;
 if stamp is null or abs(extract(epoch from clock_timestamp())-stamp)>60 or actor is null or length(actor) not between 1 and 200 then
  raise exception 'Invalid gateway request' using errcode='22023';
 end if;
 insert into app_private.access_nonces(nonce) values((p->>'nonce')::uuid) on conflict do nothing;
 get diagnostics changed=row_count;
 if changed<>1 then raise exception 'Replayed gateway request' using errcode='28000'; end if;
 delete from app_private.access_nonces where created_at<now()-interval '5 minutes';
 -- Serialize same-actor requests, invitation claims and access decisions.
 perform pg_advisory_xact_lock(hashtextextended('psych202-access',0));
 name:=left(coalesce(p->'actor'->>'name',''),200); email:=left(coalesce(p->'actor'->>'email',''),320);
 insert into app_private.site_members(site_user_id,display_name,contact_email) values(actor,name,email)
 on conflict(site_user_id) do update set display_name=case when excluded.display_name<>'' then excluded.display_name else site_members.display_name end,
 contact_email=case when excluded.contact_email<>'' then excluded.contact_email else site_members.contact_email end;
 select * into m from app_private.site_members where site_user_id=actor for update;
 if op='request' then
  if m.state='unrequested' then
   if length(coalesce(data->>'message',''))>500 then raise exception 'Message too long' using errcode='22023'; end if;
   update app_private.site_members set state='pending',message=btrim(coalesce(data->>'message','')),requested_at=now(),updated_at=now() where site_user_id=actor;
   insert into app_private.access_history(action,actor_id,target_id) values('request_submitted',actor,actor);
  end if;
 elsif op='link' then
  uid:=(data->>'auth_user_id')::uuid;
  -- Worker independently calls Supabase /auth/v1/user with the real access token;
  -- check confirmation again in auth.users, never a user-editable metadata field.
  select lower(btrim(u.email)) into verified_email from auth.users u where u.id=uid and u.email_confirmed_at is not null and not coalesce(u.is_anonymous,false);
  if verified_email is null then raise exception 'Verified email required' using errcode='22023'; end if;
  if m.state in ('revoked','rejected') then return jsonb_build_object('state',m.state,'role',m.role,'enforced',enabled,'id',actor); end if;
  if m.supabase_user_id is not null and m.supabase_user_id<>uid then raise exception 'A different progress account is already linked' using errcode='23505'; end if;
  if exists(select 1 from app_private.site_members where supabase_user_id=uid and site_user_id<>actor) then raise exception 'Progress account is already linked' using errcode='23505'; end if;
  update app_private.site_members set supabase_user_id=uid,contact_email=verified_email,updated_at=now() where site_user_id=actor;
  select * into inv from app_private.access_invitations where access_invitations.email=verified_email and consumed_at is null and cancelled_at is null and expires_at>now() for update;
  if found and m.state in ('unrequested','pending') then
   update app_private.site_members set state='approved',approved_at=now(),updated_at=now() where site_user_id=actor;
   update app_private.access_invitations set consumed_by=actor,consumed_at=now() where id=inv.id;
   insert into app_private.access_history(action,actor_id,target_id,email) values('invitation_claimed',actor,actor,verified_email);
  end if;
 elsif op in ('admin_list','admin_action') then
  if m.role<>'admin' or m.state<>'approved' then raise exception 'Administrator required' using errcode='42501'; end if;
  if op='admin_list' then
   page_kind:=data->>'kind'; start_at:=greatest(0,least(coalesce((data->>'offset')::integer,0),1000000));
   if page_kind in ('pending','approved','restricted') then
    select count(*) into total from app_private.site_members x where (page_kind='restricted' and x.state in ('rejected','revoked')) or x.state=page_kind;
    select coalesce(jsonb_agg(to_jsonb(x)),'[]'::jsonb) into items from (
     select site_user_id,display_name,contact_email,state,role,message,requested_at,approved_at,updated_at
     from app_private.site_members where (page_kind='restricted' and state in ('rejected','revoked')) or state=page_kind
     order by updated_at desc,site_user_id limit 25 offset start_at
    )x;
   elsif page_kind='invitations' then
    select count(*) into total from app_private.access_invitations;
    select coalesce(jsonb_agg(to_jsonb(x)),'[]'::jsonb) into items from (select id,email,created_at,expires_at,consumed_at,cancelled_at,created_by from app_private.access_invitations order by created_at desc,id limit 25 offset start_at)x;
   elsif page_kind='history' then
    select count(*) into total from app_private.access_history;
    select coalesce(jsonb_agg(to_jsonb(x)),'[]'::jsonb) into items from (
     select h.id,h.action,h.actor_id,h.target_id,h.email,h.created_at,a.display_name as actor_name,a.contact_email as actor_email,t.display_name as target_name,t.contact_email as target_email
     from app_private.access_history h left join app_private.site_members a on a.site_user_id=h.actor_id left join app_private.site_members t on t.site_user_id=h.target_id order by h.id desc limit 25 offset start_at
    )x;
   else raise exception 'Invalid list' using errcode='22023'; end if;
   return jsonb_build_object('items',items,'total',total,'offset',start_at);
  end if;
  action:=data->>'action'; dest:=data->>'target_id';
  if action='invite' then
   verified_email:=lower(btrim(data->>'email'));
   if verified_email is null or length(verified_email)>320 or verified_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' then raise exception 'Valid email required' using errcode='22023'; end if;
   select * into inv from app_private.access_invitations where access_invitations.email=verified_email for update;
   if not found or inv.cancelled_at is not null or inv.consumed_at is not null or inv.expires_at<=now() then
    insert into app_private.access_invitations(email,created_by) values(verified_email,actor)
    on conflict on constraint access_invitations_email_key do update set created_by=actor,created_at=now(),expires_at=now()+interval '30 days',consumed_by=null,consumed_at=null,cancelled_at=null;
    insert into app_private.access_history(action,actor_id,email) values('invitation_created',actor,verified_email);
   end if;
  elsif action='cancel_invite' then
   update app_private.access_invitations set cancelled_at=now() where id=(data->>'invitation_id')::uuid and consumed_at is null and cancelled_at is null returning * into inv;
   if found then insert into app_private.access_history(action,actor_id,email) values('invitation_cancelled',actor,inv.email); end if;
  elsif action in ('approve','reject','revoke','restore') then
   select * into target from app_private.site_members where site_user_id=dest for update;
   if not found or target.role='admin' then raise exception 'Invalid target' using errcode='22023'; end if;
   if (action in ('approve','reject') and target.state<>'pending') or (action='revoke' and target.state<>'approved') or (action='restore' and target.state not in ('revoked','rejected')) then raise exception 'Status changed; refresh the list' using errcode='40001'; end if;
   update app_private.site_members set state=case when action in ('approve','restore') then 'approved' when action='reject' then 'rejected' else 'revoked' end,
    approved_at=case when action in ('approve','restore') then now() else approved_at end,updated_at=now() where site_user_id=dest;
   insert into app_private.access_history(action,actor_id,target_id) values(case action when 'approve' then 'request_approved' when 'reject' then 'request_rejected' when 'revoke' then 'access_revoked' else 'access_restored' end,actor,dest);
  else raise exception 'Invalid action' using errcode='22023'; end if;
  return jsonb_build_object('ok',true);
 elsif op<>'status' then raise exception 'Invalid operation' using errcode='22023';
 end if;
 select * into m from app_private.site_members where site_user_id=actor;
 return jsonb_build_object('id',actor,'name',m.display_name,'email',m.contact_email,'state',m.state,'role',m.role,'requested_at',m.requested_at,'enforced',enabled,'linked',m.supabase_user_id is not null);
end
$$;
revoke all on function app_private.access_gateway(text,text) from public;
grant execute on function app_private.access_gateway(text,text) to anon;
create function public.site_access_gateway(body text,signature text) returns jsonb
language sql security invoker set search_path='' as $$ select app_private.access_gateway(body,signature) $$;
revoke all on function public.site_access_gateway(text,text) from public,authenticated;
grant execute on function public.site_access_gateway(text,text) to anon;
comment on function public.site_access_gateway(text,text) is 'Server-to-server only: HMAC signature, timestamp and one-use nonce are mandatory. No browser secret or user-metadata authorization.';
notify pgrst,'reload schema';
