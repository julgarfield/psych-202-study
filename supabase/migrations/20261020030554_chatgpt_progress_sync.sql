-- Progress ownership is the trusted Sites ChatGPT identity. Browser roles have no
-- direct access. The existing signed gateway checks identity, nonce and live approval.
create table app_private.site_study_events (
 site_user_id text not null references app_private.site_members(site_user_id),
 event_id text not null check(length(event_id) between 1 and 159),
 payload jsonb not null check(jsonb_typeof(payload)='object' and payload->>'id'=event_id and payload->>'type' in ('legacy','answer','card','lesson','video','diagram','lastLesson','exam') and octet_length(payload::text)<=2000000),
 created_at timestamptz not null default now(),
 primary key(site_user_id,event_id)
);
alter table app_private.site_study_events enable row level security;
alter table app_private.site_study_events force row level security;
revoke all on app_private.site_study_events from public,anon,authenticated;
create policy site_study_events_deny_browser on app_private.site_study_events for all to anon,authenticated using(false) with check(false);
-- Copy only accounts whose ownership was previously verified and uniquely linked.
-- Keep original records; reads also include late writes from an older open tab.
insert into app_private.site_study_events(site_user_id,event_id,payload,created_at)
 select m.site_user_id,e.event_id,e.payload,e.created_at from public.study_events e
 join app_private.site_members m on m.supabase_user_id=e.user_id
 on conflict do nothing;

-- Qualify email to avoid the PL/pgSQL local display-email variable.
create or replace function app_private.access_gateway(body text, signature text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare
 p jsonb; actor text; op text; data jsonb; name text; email text;
 secret text; enabled boolean; stamp numeric; uid uuid;
 m app_private.site_members%rowtype; target app_private.site_members%rowtype;
 inv app_private.access_invitations%rowtype; verified_email text;
 changed integer; action text; dest text; page_kind text; start_at integer;
 items jsonb; total bigint; result jsonb; storage_id text; cursor_id text; event jsonb; page_count integer;
begin
 select gateway_secret,enforced into secret,enabled from app_private.access_config where singleton;
 if secret is null or signature is null or body is null or signature !~ '^[0-9a-f]{64}$' or octet_length(body)>3145728
    or encode(extensions.hmac(convert_to(body,'UTF8'),convert_to(secret,'UTF8'),'sha256'),'hex')<>signature then
  raise exception 'Invalid gateway authentication' using errcode='28000';
 end if;
 p:=body::jsonb; actor:=p->'actor'->>'id'; op:=p->>'operation'; data:=coalesce(p->'data','{}'::jsonb);
 if op not in ('progress_profile','progress_read','progress_push') and octet_length(body)>8192 then raise exception 'Request too large' using errcode='22023'; end if;
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
 if op in ('progress_profile','progress_read','progress_push') then
  if m.state<>'approved' then raise exception 'Study access required' using errcode='42501'; end if;
  -- Reuse the old local-storage namespace for previously verified linked accounts.
  -- The ID is an expected-account check, never a client-selected database owner.
  storage_id:=coalesce(m.supabase_user_id::text,'chatgpt:'||actor);
  if op='progress_profile' then
   return jsonb_build_object('user',jsonb_build_object('id',storage_id,'name',m.display_name,'email',m.contact_email,'provider','chatgpt'));
  end if;
  if (data->>'accountId') is distinct from storage_id then raise exception 'ChatGPT account changed' using errcode='23505'; end if;
  if op='progress_read' then
   cursor_id:=coalesce(data->>'after','');
   if length(cursor_id)>159 then raise exception 'Invalid cursor' using errcode='22023'; end if;
   select coalesce(jsonb_agg(jsonb_build_object('event_id',x.event_id,'payload',x.payload) order by x.event_id),'[]'::jsonb),count(*),max(x.event_id)
   into items,page_count,cursor_id from (
    select distinct on (e.event_id) e.event_id,e.payload from (
     select a.event_id,a.payload,0 as priority from app_private.site_study_events a where a.site_user_id=actor
     union all
     select b.event_id,b.payload,1 as priority from public.study_events b where b.user_id=m.supabase_user_id
    ) e where e.event_id>cursor_id order by e.event_id,e.priority limit 500
   )x;
   return jsonb_build_object('accountId',storage_id,'events',items,'nextCursor',case when page_count=500 then cursor_id else null end);
  end if;
  if jsonb_typeof(data->'events') is distinct from 'array' then raise exception 'Events array required' using errcode='22023'; end if;
  if jsonb_array_length(data->'events')>100 then raise exception 'Too many events' using errcode='22023'; end if;
  for event in select value from jsonb_array_elements(data->'events') loop
   if jsonb_typeof(event) is distinct from 'object'
    or jsonb_typeof(event->'id') is distinct from 'string'
    or length(event->>'id') not between 1 and 159
    or coalesce(event->>'type','') not in ('legacy','answer','card','lesson','video','diagram','lastLesson','exam')
    or octet_length(event::text)>2000000 then raise exception 'Invalid progress event' using errcode='22023'; end if;
   insert into app_private.site_study_events(site_user_id,event_id,payload) values(actor,event->>'id',event) on conflict do nothing;
  end loop;
  return jsonb_build_object('accountId',storage_id,'ok',true);
 elsif op='request' then
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
    select coalesce(jsonb_agg(to_jsonb(x)),'[]'::jsonb) into items from (select i.id,i.email,i.created_at,i.expires_at,i.consumed_at,i.cancelled_at,i.created_by from app_private.access_invitations i order by i.created_at desc,i.id limit 25 offset start_at)x;
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

notify pgrst,'reload schema';
