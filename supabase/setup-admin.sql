-- Privileged setup only. Run in Supabase SQL Editor / a trusted DB connection.
-- The Site must remain owner-only until this succeeds. Visit the staged site
-- with the known owner ChatGPT account first, then independently verify the
-- recorded site identity and the existing, email-confirmed Supabase account.
-- Replace both placeholders. Never expose this as a browser-callable RPC.
do $bootstrap$
declare
 owner_site_id text := '<VERIFIED_SITE_SCOPED_CHATGPT_ID>';
 owner_auth_id uuid := '<VERIFIED_EXISTING_SUPABASE_USER_UUID>';
begin
 if exists(select 1 from app_private.site_members where role='admin' and site_user_id<>owner_site_id) then raise exception 'Another administrator already exists'; end if;
 if not exists(select 1 from app_private.site_members m join auth.users u on lower(m.contact_email)=lower(u.email) where m.site_user_id=owner_site_id and u.id=owner_auth_id and u.email_confirmed_at is not null) then raise exception 'Owner identity verification failed'; end if;
 update app_private.site_members set role='admin',state='approved',approved_at=coalesce(approved_at,now()),supabase_user_id=owner_auth_id,updated_at=now() where site_user_id=owner_site_id;
 insert into app_private.access_history(action,actor_id,target_id) select 'admin_bootstrapped',owner_site_id,owner_site_id where not exists(select 1 from app_private.access_history where action='admin_bootstrapped');
end
$bootstrap$;
-- After verifying /admin and the existing progress account, enable separately:
-- update app_private.access_config set enforced=true where singleton;
