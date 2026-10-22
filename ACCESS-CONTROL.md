# PSYCH 202 access control

The deployed site keeps the existing ChatGPT sign-in and Supabase email-link progress sign-in. They are separate identities. ChatGPT's **site-scoped ID** controls membership. A verified Supabase user ID is linked to that membership for progress and email invitations. Display names, request messages and user-editable metadata never grant permissions.

## Current rollout

The access tables and restrictive progress policy have been applied. The existing owner was independently identified while hosting was still owner-only, approved as the sole admin, and linked to the existing email-confirmed progress account. All **820 original progress events** were retained. Enforcement was enabled only after the admin dashboard opened successfully. The public entry page is opened only after these checks, as authorized by the owner. Public entry does not grant access to study content.

Open **Manage access** in the study site, or `/admin`. Only an approved admin can load the dashboard or its APIs. No further admin setup or environment-variable entry is needed for this deployed project.

## Files and architecture

- `site/` contains the existing application, lessons, images and offline source, moved from `dist/`. Study-content files are otherwise retained. `site/sync.js` now verifies the progress-account link before adopting a signed-in session. `site/access-monitor.js` adds the admin link, ChatGPT sign-out, and periodic/focus checks.
- `worker/index.js` authenticates the Sites-provided identity and authorizes every protected HTML, script, image and download request. It also handles `/api/access/*` and `/api/admin/*`. Unknown URLs have no static fallback. The request/dashboard shell contains no study material.
- `worker/access.js` and `worker/access.css` implement the responsive request screen and paginated admin dashboard.
- `scripts/build-access.mjs` embeds study assets inside one Worker module. Generated `dist/` contains only that module and hosting metadata, with no independently served static study assets. The build uses Node only and adds no runtime packages or paid services.
- `.openai/hosting.json` preserves the Site ID and switches from static hosting to the Worker. `.env.example` documents runtime key names without values.
- `supabase/setup-admin.sql` is a privileged, parameterized-by-editing operator script, not an API. `supabase/tests/access-control.sql` contains rolled-back real-database security tests. `tests/access-worker.test.mjs` tests HTTP authorization and the email-verification boundary.

## Database migrations

These new migrations are applied, with local filenames matching the remote migration history:

1. `20261019052755_invite_only_access.sql`: private membership, invitation, audit, configuration and one-use nonce tables; signed server gateway; restrictive progress policy. Initial enforcement defaults to false for safe owner setup.
2. `20261019053357_explicit_private_deny_policies.sql`: explicit deny policies on server-only tables, in addition to revoked browser table privileges.
3. `20261019053913_live_session_expiry_check.sql`: requires an active, unexpired Supabase session for protected direct progress access.
4. `20261019055244_qualify_invitation_list_columns.sql`: qualifies the invitation-list query to avoid a PL/pgSQL variable/column ambiguity discovered during live dashboard QA. All five admin list sections now have database tests.

The two earlier progress migrations were renamed locally to their already-applied remote version/name. Their SQL was not changed. Do not reapply existing migrations manually. Use the linked project's migration history before applying future migrations.

All membership tables live in the non-exposed `app_private` schema. Browser roles have no table grants. The public gateway is an invoker wrapper around a narrow private definer function, with a locked search path and explicit execution grants. It requires a server-held HMAC signature over the exact payload, a timestamp within 60 seconds, and a unique nonce. Administrative actions then independently check the actor's live admin role. A global transaction lock serializes membership mutations and invitation claims. No service-role key is used in the browser or Worker.

Existing immutable `study_events` records, primary keys, ownership checks, and no-update/no-delete permissions remain. The new restrictive RLS policy adds approval and session checks to both SELECT and INSERT. It uses live database state rather than JWT role metadata. There are no other content endpoints, public storage buckets, views, or Edge Functions in this project that expose study data.

## Operating the dashboard

- **Pending requests:** inspect the name, available email, timestamp and optional message. Approve or reject. Duplicate pending submissions return the existing request without creating a second record or overwriting the original message.
- **Approved users:** revoke with confirmation. The next protected request and direct database operation recheck current state. Existing saved progress is kept.
- **Invitations:** create a normalized-email preapproval valid for 30 days. This does **not** send email. The visitor signs in with ChatGPT, then uses the existing Supabase email-link flow to verify the invited address. The Worker validates the token with Supabase Auth, and SQL checks `auth.users.email_confirmed_at` before matching. Entering an email address or changing metadata cannot claim an invitation. An invitation can be consumed once, and a progress account can be bound to only one ChatGPT site identity. Pending unused preapprovals can be cancelled. If someone signs into an incompatible progress account, they receive a recoverable error and can choose a different progress account without being trapped in an access-page redirect loop.
- **Rejected & revoked:** neither state can submit a new request or use an invitation to override that decision for the same site identity. Use **Restore access** for an explicit new approval. There is no public role-promotion operation, and the dashboard cannot revoke an admin.
- **Access history:** records requests, approvals, rejections, invitation creation/cancellation/claiming, revocations, restorations and privileged admin bootstrap. Administrative records identify the acting administrator and time.

A change takes effect on the next authorization check. An already open page also checks every 20 seconds and on focus/visibility, then removes the protected page and redirects if denied or verification fails. Requests already in flight at revocation may finish.

## Initial setup on another environment

1. Keep hosting owner-only. Apply migrations in order through the normal Supabase migration workflow, with enforcement still false. Check the remote migration list first. Preserve the existing progress migrations and rows.
2. Set the runtime variables below. Generate a random secret with at least 32 bytes of entropy. Store the identical secret in `app_private.access_config.gateway_secret` through privileged parameterized admin tooling and in Sites secret storage. Never commit it, put it in browser code, or pass it as a command-line argument. A privileged operator is required for both settings.
3. Build and deploy the Worker while the host remains owner-only. Visit it using the independently verified owner ChatGPT account. Inspect that account's row in `app_private.site_members` through a privileged database connection. This ID is site-scoped and must not be assumed to equal a hosting workspace/account ID.
4. Independently identify the owner's **existing**, email-confirmed Supabase account. Replace both placeholders in `supabase/setup-admin.sql` with those verified IDs and execute it via the SQL editor/trusted DB connection. It verifies the recorded contact email against that confirmed account, rejects an unexpected existing admin, and preserves progress. Never make the first registered user admin automatically.
5. Open `/admin` as the owner and confirm access. Check the existing sync account's sessions and progress. Only then set `app_private.access_config.enforced=true` through privileged SQL. Verify owner access again.
6. After all checks, allow the hosting entry page for other visitors. The Worker still requires ChatGPT identity and approved membership for study content. Do not open entry while enforcement is false.

For this project those setup steps have already been performed. Site-scoped owner identity was obtained from the trusted Worker while the hosting allowlist contained only the owner. The owner was not selected by registration order.

## Environment and deployment

Sites runtime settings hold:

- `ACCESS_GATEWAY_SECRET` — secret, identical to the private database configuration value.
- `SUPABASE_URL` — the existing project endpoint.
- `SUPABASE_PUBLISHABLE_KEY` — the existing public key, which grants no approval itself.

No service-role key, database password, new OAuth provider or replacement auth system is required. Browser Supabase public configuration remains intentionally public.

Run `node scripts/build-offline.mjs`, `node scripts/build-access.mjs`, and `node scripts/validate-access-artifact.mjs`. Publish the exact pushed source and corresponding Worker archive through Sites. Changes to environment variables require deploying a saved version to apply the environment revision. Protect every future route in the same Worker and add RLS checks to any future database paths.

If recovery is needed, keep the protected Worker in place and restore the owner's membership through privileged SQL. Before ever disabling enforcement or restoring a historical static version, restrict hosting to the owner again. Never deploy the historical static app while public entry is enabled. Secret rotation must update both the private DB value and the Sites runtime secret, then redeploy; a mismatch fails closed.

## Verification

Commands available without installing dependencies:

```sh
node --test tests/*.test.mjs
node scripts/audit-content.mjs
node scripts/audit-exam2.mjs
node scripts/test-exam-separation.mjs
node scripts/test-sync.mjs
node scripts/build-offline.mjs
node scripts/build-access.mjs
node scripts/validate-access-artifact.mjs
```

Run `supabase/tests/access-control.sql` on a trusted connection to test the actual schema. The file wraps fixture users, sessions, memberships, invitations and events in a transaction that rolls back. It tests unauthenticated denial, nonapproval, request duplication, admin approval/rejection, non-admin admin/API attempts, direct role changes, owner isolation, revoke/restore, invitation verification and reuse, HMAC forgery/replay, session validity and byte preservation of existing progress. No actual verification emails are sent by these SQL tests.

The existing app has no TypeScript or lint configuration. JavaScript syntax, build validation, content audits and progress/sync regressions were checked. The live owner dashboard, all admin list sections, and study navigation were checked in the browser. Anonymous and forged identity-header HTTP probes did not retrieve protected content; dispatch stripped caller-supplied identity headers even when using platform service access.

## Limits and follow-up checks

- Authorized users can copy content or download the offline edition. Revoking online access cannot retract files or information already downloaded. Offline studying and progress export/import remain available to preserve existing functionality.
- Automated anonymous probes after opening entry received Cloudflare error 1010 before reaching the Worker. Backend anonymous/spoofed-header checks succeeded using supported platform service access, without supplying a visitor identity. A normal second-user browser check remains part of acceptance testing.
- The full real-world flow using a second person's ChatGPT account, receiving a verification email, and syncing between two physical devices has not been completed in this session. Database transaction tests and token-verification HTTP tests cover the authorization rules, but do not replace that final user acceptance check.
- The Supabase advisor reports **Leaked Password Protection Disabled**. The site retains its existing email-link flow rather than changing password settings. See the [Supabase remediation guidance](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection). No remaining database-policy advisor findings were reported after explicit server-only deny policies were added.
- Gateway trust depends on the Sites Dispatch identity-header boundary. Do not deploy the Worker directly behind an arbitrary proxy that passes untrusted `oai-authenticated-user-*` headers.
- There is no email notification service or custom bot/CAPTCHA service. Requests are one per authenticated identity, messages are limited to 500 characters, JSON input is bounded, invitations are admin-only, and authentication retains provider rate limits. This is not a substitute for monitoring abuse if the audience grows substantially.

The design follows the current [Supabase RLS guidance](https://supabase.com/docs/guides/database/postgres/row-level-security) and validates invitation proof through [server-side user lookup](https://supabase.com/docs/reference/javascript/auth-getuser). Passing these checks is not a claim of exhaustive security review.
