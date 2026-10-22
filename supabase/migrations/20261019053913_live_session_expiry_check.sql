create or replace function app_private.progress_allowed() returns boolean
language sql stable security definer set search_path='' as $$
 select (select auth.uid()) is not null and (
  not coalesce((select enforced from app_private.access_config where singleton),true)
  or exists (
   select 1 from app_private.site_members m
   join auth.sessions s on s.user_id=m.supabase_user_id
   where m.supabase_user_id=(select auth.uid()) and m.state='approved'
   and s.id::text=(select auth.jwt()->>'session_id')
   and (s.not_after is null or s.not_after>now())
  )
 )
$$;
revoke all on function app_private.progress_allowed() from public,anon;
grant execute on function app_private.progress_allowed() to authenticated;
