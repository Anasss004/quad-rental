-- =====================================================================
-- QuadRando / Elta Quad — Phase 3 (Feature 5)
-- Public availability view: exposes ONLY date/time/duration so the
-- booking form can show "already booked" slots, without exposing any
-- client's name, phone, or email to the public.
-- Run this once in Supabase: SQL Editor > New query > Run
-- =====================================================================

create or replace view public_availability as
select
  res_date,
  start_time,
  duration_hours
from reservations
where status in ('pending', 'confirmed');

-- The view is owned by the same role that creates it (your Supabase
-- postgres role), which is able to read the underlying table regardless
-- of the reservations RLS policies. We then grant read access on the
-- VIEW ONLY (never the base table) to anonymous visitors.
revoke all on public_availability from public;
grant select on public_availability to anon;
grant select on public_availability to authenticated;
