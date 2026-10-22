begin isolation level repeatable read;
create function pg_temp.check_true(ok boolean,label text) returns void language plpgsql as $$begin if ok is distinct from true then raise exception 'FAIL: %',label;end if;end$$;
create function pg_temp.gateway(actor_id text,op text,data jsonb default '{}'::jsonb) returns jsonb language plpgsql as $$declare b text;k text;begin
 select gateway_secret into k from app_private.access_config where singleton;
 b:=jsonb_build_object('actor',jsonb_build_object('id',actor_id),'operation',op,'data',data,'timestamp',extract(epoch from clock_timestamp()),'nonce',gen_random_uuid())::text;
 return public.site_access_gateway(b,encode(extensions.hmac(convert_to(b,'UTF8'),convert_to(k,'UTF8'),'sha256'),'hex'));
end$$;
insert into app_private.site_members(site_user_id,state,role) values('sync-fixture-one','approved','member'),('sync-fixture-two','approved','member'),('sync-fixture-pending','pending','member');
select pg_temp.check_true(pg_temp.gateway('sync-fixture-one','progress_profile')->'user'->>'id'='chatgpt:sync-fixture-one','ChatGPT identity creates a stable progress account without an Auth user');
select pg_temp.gateway('sync-fixture-one','progress_push','{"accountId":"chatgpt:sync-fixture-one","events":[{"id":"event-a","at":1,"type":"answer","target":"science-q0","correct":true},{"id":"event-b","at":2,"type":"answer","target":"exam2-memory-q0","examId":"exam2","correct":false}]}');
select pg_temp.check_true(jsonb_array_length(pg_temp.gateway('sync-fixture-one','progress_read','{"accountId":"chatgpt:sync-fixture-one"}')->'events')=2,'second device reads both exams for the same ChatGPT identity');
select pg_temp.check_true(jsonb_array_length(pg_temp.gateway('sync-fixture-two','progress_read','{"accountId":"chatgpt:sync-fixture-two","site_user_id":"sync-fixture-one"}')->'events')=0,'other ChatGPT account cannot read the first account');
select pg_temp.gateway('sync-fixture-one','progress_push','{"accountId":"chatgpt:sync-fixture-one","events":[{"id":"event-a","at":1,"type":"answer","target":"science-q0","correct":false}]}');
select pg_temp.check_true((select count(*)=2 and bool_and(case when event_id='event-a' then (payload->>'correct')::boolean else true end) from app_private.site_study_events where site_user_id='sync-fixture-one'),'replayed event IDs are immutable and not double counted');
do $$begin
 begin perform pg_temp.gateway('sync-fixture-two','progress_read','{"accountId":"chatgpt:sync-fixture-one"}');raise exception 'FAIL cross-account read';exception when unique_violation then null;end;
 begin perform pg_temp.gateway('sync-fixture-two','progress_push','{"accountId":"chatgpt:sync-fixture-one","events":[]}');raise exception 'FAIL stale account upload';exception when unique_violation then null;end;
 begin perform pg_temp.gateway('sync-fixture-pending','progress_profile');raise exception 'FAIL pending profile';exception when insufficient_privilege then null;end;
 begin perform pg_temp.gateway('sync-fixture-pending','progress_push','{"accountId":"chatgpt:sync-fixture-pending","events":[]}');raise exception 'FAIL pending push';exception when insufficient_privilege then null;end;
 begin perform pg_temp.gateway('sync-fixture-one','progress_push','{"accountId":"chatgpt:sync-fixture-one","events":[{"type":"answer"}]}');raise exception 'FAIL malformed event';exception when invalid_parameter_value then null;end;
end$$;
-- Keyset pagination across a full page and an exact 500-event boundary.
insert into app_private.site_study_events(site_user_id,event_id,payload) select 'sync-fixture-one','page-'||lpad(n::text,4,'0'),jsonb_build_object('id','page-'||lpad(n::text,4,'0'),'at',n,'type','lastLesson','target','science') from generate_series(1,501)n;
do $$declare p jsonb;q jsonb;begin
 p:=pg_temp.gateway('sync-fixture-one','progress_read','{"accountId":"chatgpt:sync-fixture-one"}');perform pg_temp.check_true(jsonb_array_length(p->'events')=500 and p->>'nextCursor' is not null,'first cursor page has 500 events');
 q:=pg_temp.gateway('sync-fixture-one','progress_read',jsonb_build_object('accountId','chatgpt:sync-fixture-one','after',p->>'nextCursor'));perform pg_temp.check_true(jsonb_array_length(q->'events')=3 and q->>'nextCursor' is null,'remaining page includes all events once');
end$$;
update app_private.site_members set state='revoked' where site_user_id='sync-fixture-one';
do $$begin
 begin perform pg_temp.gateway('sync-fixture-one','progress_read','{"accountId":"chatgpt:sync-fixture-one"}');raise exception 'FAIL revoked read';exception when insufficient_privilege then null;end;
 begin perform pg_temp.gateway('sync-fixture-one','progress_push','{"accountId":"chatgpt:sync-fixture-one","events":[]}');raise exception 'FAIL revoked push';exception when insufficient_privilege then null;end;
end$$;
update app_private.site_members set state='approved' where site_user_id='sync-fixture-one';
select pg_temp.check_true(jsonb_array_length(pg_temp.gateway('sync-fixture-one','progress_read','{"accountId":"chatgpt:sync-fixture-one"}')->'events')=500,'restore preserves saved progress');
-- Browser roles have no direct path to private records, even with guessed keys.
set local role anon;
do $$begin begin perform 1 from app_private.site_study_events;raise exception 'FAIL anon table read';exception when insufficient_privilege then null;end;end$$;
reset role;
set local role authenticated;
do $$begin
 begin perform 1 from app_private.site_study_events;raise exception 'FAIL authenticated table read';exception when insufficient_privilege then null;end;
 begin insert into app_private.site_study_events(site_user_id,event_id,payload) values('sync-fixture-two','forged','{}');raise exception 'FAIL browser table write';exception when insufficient_privilege then null;end;
end$$;
reset role;
-- Previously linked accounts keep their namespace and late legacy writes remain visible.
do $$declare u uuid:=gen_random_uuid();p jsonb;m record;c text;seen integer;expected integer;begin
 insert into auth.users(id,email,email_confirmed_at,created_at,updated_at,raw_app_meta_data,raw_user_meta_data,aud,role) values(u,'sync-fixture-legacy@example.invalid',now(),now(),now(),'{}','{}','authenticated','authenticated');
 insert into app_private.site_members(site_user_id,state,supabase_user_id) values('sync-fixture-legacy','approved',u);
 perform pg_temp.check_true(pg_temp.gateway('sync-fixture-legacy','progress_profile')->'user'->>'id'=u::text,'verified legacy local namespace retained');
 insert into public.study_events(user_id,event_id,payload) values(u,'legacy-late','{"id":"legacy-late","at":1,"type":"lastLesson","target":"science"}');
 p:=pg_temp.gateway('sync-fixture-legacy','progress_read',jsonb_build_object('accountId',u::text));
 perform pg_temp.check_true(jsonb_array_length(p->'events')=1 and p->'events'->0->>'event_id'='legacy-late','late write from an older open tab is readable');
 for m in select site_user_id,supabase_user_id from app_private.site_members where supabase_user_id is not null loop
  perform pg_temp.check_true(pg_temp.gateway(m.site_user_id,'progress_profile')->'user'->>'id'=m.supabase_user_id::text,'all existing verified local namespaces retained');
  select count(*) into expected from (select event_id from public.study_events where user_id=m.supabase_user_id union select event_id from app_private.site_study_events where site_user_id=m.site_user_id)x;
  c:='';seen:=0;
  loop
   p:=pg_temp.gateway(m.site_user_id,'progress_read',jsonb_build_object('accountId',m.supabase_user_id::text,'after',c));seen:=seen+jsonb_array_length(p->'events');c:=p->>'nextCursor';exit when c is null;
  end loop;
  perform pg_temp.check_true(seen=expected,'all linked progress remains readable including late legacy writes');
 end loop;
end$$;
-- Every existing linked event was preserved in the new store, with identical payload.
select pg_temp.check_true(not exists(select 1 from app_private.site_study_events s join app_private.site_members m on m.site_user_id=s.site_user_id join public.study_events e on e.user_id=m.supabase_user_id and e.event_id=s.event_id where s.payload<>e.payload),'copied cloud events preserved exactly');
rollback;
select 'PASS: ChatGPT sync ownership, two-device retrieval, separate exams, immutable retries, account-switch guards, pagination, live approval/revocation, browser-role denial, and existing cloud-event preservation; fixtures rolled back.' as result;
