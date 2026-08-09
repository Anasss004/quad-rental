-- =====================================================================
-- Phase 5 (Feature 11) — Client self-service cancellation
-- Lets a client cancel their OWN booking via the unique link in their
-- confirmation email, without giving anonymous users any read/update
-- access to the reservations table directly (RLS still fully blocks that).
-- Run once in Supabase SQL Editor.
-- =====================================================================

create or replace function cancel_reservation(token uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  affected int;
begin
  update reservations
  set status = 'cancelled'
  where cancel_token = token
    and status <> 'cancelled';

  get diagnostics affected = row_count;
  return affected > 0;
end;
$$;

-- Anonymous visitors may call this function (and only this function —
-- they still cannot SELECT/UPDATE the table directly), and only ever
-- affects the single row matching their unique token.
grant execute on function cancel_reservation(uuid) to anon;
