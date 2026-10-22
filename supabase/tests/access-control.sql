-- Runs against the actual schema. All fixture users, sessions, requests, invites,
-- settings changes and progress are rolled back. No emails are sent.
begin isolation level repeatable read;
create temp table progress_before as select count(*) n,md5(string_agg(user_id::text||event_id||payload::text,'' order by user_id,event_id)) hash from public.study_events;
create function pg_temp.check_true(value boolean,description text) returns void language plpgsql as $$begin if value is distinct from true then raise exception 'FAILED: %',description;end if;end$$;
create function pg_temp.gateway(actor text,operation text,data jsonb default '{}'::jsonb) returns jsonb language plpgsql security definer set search_path='' as $$
declare body text;secret text;
begin
 select gateway_secret into secret from app_private.access_config;
 body:=jsonb_build_object('actor',jsonb_build_object('id',actor,'name',actor,'email',actor||'@example.invalid'),'operation',operation,'data',data,'timestamp',extract(epoch from clock_timestamp()),'nonce',gen_random_uuid())::text;
 return public.site_access_gateway(body,encode(extensions.hmac(convert_to(body,'UTF8'),convert_to(secret,'UTF8'),'sha256'),'hex'));
end$$;
insert into auth.users(id,email,email_confirmed_at,created_at,updated_at,raw_app_meta_data,raw_user_meta_data,aud,role) values
 ('11111111-1111-4111-8111-111111111111','access-fixture-one@example.invalid',now(),now(),now(),'{}','{}','authenticated','authenticated'),
 ('22222222-2222-4222-8222-222222222222','access-fixture-two@example.invalid',now(),now(),now(),'{}','{}','authenticated','authenticated'),
 ('33333333-3333-4333-8333-333333333333','access-fixture-unverified@example.invalid',null,now(),now(),'{}','{}','authenticated','authenticated');
insert into auth.sessions(id,user_id,created_at,updated_at) values('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','11111111-1111-4111-8111-111111111111',now(),now());
insert into app_private.site_members(site_user_id,state,role) values('fixture-admin','approved','admin');
update app_private.access_config set enforced=true;
do $$declare section text;begin foreach section in array array['pending','approved','restricted','invitations','history'] loop perform pg_temp.check_true(jsonb_typeof(pg_temp.gateway('fixture-admin','admin_list',jsonb_build_object('kind',section))->'items')='array','admin list: '||section);end loop;end$$;
select pg_temp.check_true(pg_temp.gateway('fixture-one','status')->>'state'='unrequested','new authenticated visitor is not autoapproved');
select pg_temp.check_true(pg_temp.gateway('fixture-one','request','{"message":"Please approve"}')->>'state'='pending','request creates pending state');
select pg_temp.gateway('fixture-one','request','{"message":"Duplicate"}');
select pg_temp.check_true((select count(*)=1 from app_private.access_history where actor_id='fixture-one' and action='request_submitted'),'duplicate pending request creates no duplicate history');
select pg_temp.check_true((select message='Please approve' from app_private.site_members where site_user_id='fixture-one'),'duplicate does not overwrite original request');
do $$begin
 begin perform pg_temp.gateway('fixture-one','admin_action','{"action":"approve","target_id":"fixture-one"}');raise exception 'Self approval succeeded';exception when insufficient_privilege then null;end;
 begin perform pg_temp.gateway('fixture-one','admin_list','{"kind":"pending"}');raise exception 'Member read admin list';exception when insufficient_privilege then null;end;
 begin perform public.site_access_gateway('{"actor":{"id":"fixture-admin"}}',null);raise exception 'Null signature accepted';exception when sqlstate '28000' then null;end;
 begin perform public.site_access_gateway('{"actor":{"id":"fixture-admin"}}',repeat('0',64));raise exception 'Forged signature accepted';exception when sqlstate '28000' then null;end;
end$$;
select pg_temp.gateway('fixture-admin','admin_action','{"action":"approve","target_id":"fixture-one"}');
select pg_temp.check_true(pg_temp.gateway('fixture-one','status')->>'state'='approved','admin grants approval');
select pg_temp.gateway('fixture-one','link','{"auth_user_id":"11111111-1111-4111-8111-111111111111"}');
select set_config('request.jwt.claims','{"sub":"11111111-1111-4111-8111-111111111111","session_id":"aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa","role":"authenticated"}',true);
set local role authenticated;
insert into public.study_events(user_id,event_id,payload) values('11111111-1111-4111-8111-111111111111','fixture-event','{"id":"fixture-event","type":"answer","target":"science-q0","correct":true}');
select pg_temp.check_true((select count(*)=1 from public.study_events),'approved user sees own progress, not existing owner progress');
do $$begin
 begin insert into public.study_events(user_id,event_id,payload) values('22222222-2222-4222-8222-222222222222','cross-owner','{"id":"cross-owner","type":"answer"}');raise exception 'Cross-owner insert succeeded';exception when insufficient_privilege then null;end;
 begin update app_private.site_members set state='approved';raise exception 'Direct self approval succeeded';exception when insufficient_privilege then null;end;
 begin perform 1 from app_private.access_history;raise exception 'Audit data leaked';exception when insufficient_privilege then null;end;
 begin perform 1 from app_private.access_invitations;raise exception 'Invitations leaked';exception when insufficient_privilege then null;end;
 begin perform public.site_access_gateway('{}',null);raise exception 'Authenticated RPC succeeded';exception when insufficient_privilege then null;end;
end$$;
reset role;
select pg_temp.gateway('fixture-admin','admin_action','{"action":"revoke","target_id":"fixture-one"}');
select pg_temp.check_true(pg_temp.gateway('fixture-one','request')->>'state'='revoked','revoked user cannot rerequest');
set local role authenticated;
select pg_temp.check_true((select count(*)=0 from public.study_events),'revocation hides previously readable progress');
do $$begin begin insert into public.study_events(user_id,event_id,payload) values('11111111-1111-4111-8111-111111111111','blocked','{"id":"blocked","type":"answer"}');raise exception 'Revoked insert succeeded';exception when insufficient_privilege then null;end;end$$;
reset role;
select pg_temp.gateway('fixture-admin','admin_action','{"action":"restore","target_id":"fixture-one"}');
set local role authenticated;
select pg_temp.check_true((select count(*)=1 from public.study_events),'restoring keeps original fixture progress');
reset role;
select pg_temp.gateway('fixture-two','request');select pg_temp.gateway('fixture-admin','admin_action','{"action":"reject","target_id":"fixture-two"}');
select pg_temp.check_true(pg_temp.gateway('fixture-two','request')->>'state'='rejected','rejection closes request and prevents rerequest');
select pg_temp.gateway('fixture-admin','admin_action','{"action":"invite","email":" ACCESS-FIXTURE-TWO@example.invalid "}');
select pg_temp.check_true(pg_temp.gateway('fixture-two','link','{"auth_user_id":"22222222-2222-4222-8222-222222222222"}')->>'state'='rejected','invitation cannot bypass a rejection');
select pg_temp.gateway('fixture-three','status');
do $$begin begin perform pg_temp.gateway('fixture-three','link','{"auth_user_id":"33333333-3333-4333-8333-333333333333"}');raise exception 'Unverified email accepted';exception when invalid_parameter_value then null;end;end$$;
select pg_temp.check_true(pg_temp.gateway('fixture-four','link','{"auth_user_id":"22222222-2222-4222-8222-222222222222"}')->>'state'='approved','verified matching invited email is approved');
select pg_temp.check_true((select count(*)=1 from app_private.access_history where action='invitation_claimed' and actor_id='fixture-four'),'invite claim is recorded');
do $$begin begin perform pg_temp.gateway('fixture-five','link','{"auth_user_id":"22222222-2222-4222-8222-222222222222"}');raise exception 'Invitation/account claimed twice';exception when unique_violation then null;end;end$$;
select pg_temp.gateway('fixture-admin','admin_action','{"action":"invite","email":"access-fixture-unverified@example.invalid"}');
select pg_temp.check_true(pg_temp.gateway('fixture-six','status')->>'state'='unrequested','matching a display email never claims an invitation');
-- A valid signature is consumed once; altering timestamp/body invalidates it.
create temp table signed_request as select b.body,encode(extensions.hmac(convert_to(b.body,'UTF8'),convert_to(c.gateway_secret,'UTF8'),'sha256'),'hex') signature from app_private.access_config c cross join lateral (select jsonb_build_object('actor',jsonb_build_object('id','fixture-wire'),'operation','status','timestamp',extract(epoch from clock_timestamp()),'nonce',gen_random_uuid())::text body)b;
grant select on signed_request to anon;
set local role anon;
select public.site_access_gateway(body,signature) from signed_request;
do $$begin
 begin perform public.site_access_gateway(body,signature) from signed_request;raise exception 'Replayed signature accepted';exception when sqlstate '28000' then null;end;
 begin perform 1 from public.study_events;raise exception 'Anonymous progress read succeeded';exception when insufficient_privilege then null;end;
 begin perform 1 from app_private.site_members;raise exception 'Anonymous member read succeeded';exception when insufficient_privilege then null;end;
end$$;
reset role;
-- Sessions past not_after cannot use direct Data API progress either.
update auth.sessions set not_after=now()-interval '1 minute' where id='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
set local role authenticated;
select pg_temp.check_true((select count(*)=0 from public.study_events),'expired session denies direct progress access');
reset role;
-- Ended sessions cannot use direct Data API progress either.
delete from auth.sessions where id='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
set local role authenticated;
select pg_temp.check_true((select count(*)=0 from public.study_events),'ended session denies direct progress access');
reset role;
select pg_temp.check_true((select hash from progress_before)=(select md5(string_agg(user_id::text||event_id||payload::text,'' order by user_id,event_id)) from public.study_events where event_id<>'fixture-event'),'all existing progress bytes remain intact');
select 'PASS: request/duplicate/approval/rejection/revoke/restore, direct API/RLS attacks, verified invitations, replay, session validity and original progress preservation' as result;
rollback;
