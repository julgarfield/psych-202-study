# PSYCH 202 progress sync

Supabase project: `psych-202-study` (`eukxeqdiccfdbtdxfcja`).

## Applied settings

- Site URL changed from `http://localhost:3000` to `https://psych-202-exam-one-study.juliangarfield.chatgpt.site`.
- Authentication redirect allowlist includes that exact live URL. A temporary `http://127.0.0.1:8765` test redirect was added during QA and removed afterward.
- The browser uses the project's public publishable key and bundled official Supabase JavaScript SDK 2.117.2. No service-role key or database password is in the source.
- The app offers email magic-link authentication. The dashboard confirms Email enabled, new-user signup allowed, and email confirmation required; these existing settings were preserved. Email delivery settings and other providers were left as configured in the project.
- Applied both SQL migrations in this directory. `study_events` has forced RLS, owner-only SELECT/INSERT, and no client UPDATE/DELETE permission. Events are immutable and deduplicated by `(user_id, event_id)`.
- Revoked browser-role execution of the pre-existing security-definer `rls_auto_enable()` function; its event trigger remains active. The subsequent security advisor returned no findings.

## Progress and recovery

The original `psych202-exam1-v1` value is never changed or deleted. Before migration, its raw value is copied to `psych202-exam1-v1:untouched-backup`. New progress uses a separate guest store and a separate cache for each account. The guest store is claimed only by the first signed-in account; later account switches do not import it into another account.

New attempts have unique event IDs. Devices pull and merge before inserting missing events, so an empty device cannot erase cloud data. Replays do not double-count attempts. Legacy exports contain aggregate counts rather than individual attempt IDs, so overlapping legacy counts are merged conservatively by maximum rather than summed. Their latest answer and flashcard schedule are retained by recorded time. Version-2 exports include the complete event ledger.

Export progress regularly for recovery. Import accepts the original version-1 JSON and new version-2 exports, merges them, and preserves a pre-import backup. The Original progress backup button downloads the untouched legacy value.

## Verification limits

Actual Postgres transaction tests verified own-user visibility, cross-user insert rejection, immutable rows, and denied anonymous reads. Fixture users and rows were rolled back. Tests of the application sync code used two independent device stores and a deterministic Supabase API test double, covering concurrent writes, replay, an empty device, offline recovery, and account switching during a pending request.

Real email-link completion and a physical laptop-to-phone round trip remain unverified. Supabase dashboard sign-in alone does not sign in to the study site. On each device, use **Sign in to sync laptop & phone**, open the email link in that device's browser, and wait for **Saved to your account**.

## Offline use

The downloaded HTML contains the lessons, questions, cards, notes, figures, diagrams, and interactive labs. It saves locally and supports export/import. Authentication, cloud sync, assigned videos, and external links require an internet connection. Moving progress between the offline file and the live site uses export/import.
