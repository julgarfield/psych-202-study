create table public.study_events (
 user_id uuid not null references auth.users(id) on delete cascade,
 event_id text not null check (length(event_id) between 1 and 159),
 payload jsonb not null check (jsonb_typeof(payload) = 'object' and payload->>'id' = event_id and payload->>'type' in ('legacy','answer','card','lesson','video','diagram','lastLesson','exam') and octet_length(payload::text) <= 2000000),
 created_at timestamptz not null default now(),
 primary key (user_id,event_id)
);
alter table public.study_events enable row level security;
alter table public.study_events force row level security;
revoke all on public.study_events from anon, authenticated;
grant select, insert on public.study_events to authenticated;
create policy study_events_read_own on public.study_events for select to authenticated using ((select auth.uid()) = user_id);
create policy study_events_insert_own on public.study_events for insert to authenticated with check ((select auth.uid()) = user_id);
comment on table public.study_events is 'Immutable PSYCH 202 progress events. Clients union event IDs; no overwrite or public read.';
