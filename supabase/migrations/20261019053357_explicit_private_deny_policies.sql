-- These tables are intentionally server-only. Explicit deny policies also make
-- that intention clear to advisors; table grants remain revoked.
create policy server_only on app_private.access_config to anon,authenticated using(false) with check(false);
create policy server_only on app_private.site_members to anon,authenticated using(false) with check(false);
create policy server_only on app_private.access_invitations to anon,authenticated using(false) with check(false);
create policy server_only on app_private.access_history to anon,authenticated using(false) with check(false);
create policy server_only on app_private.access_nonces to anon,authenticated using(false) with check(false);
