-- Keep the existing RLS event trigger active while removing browser-role RPC grants.
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
