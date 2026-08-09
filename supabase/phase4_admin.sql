-- =====================================================================
-- Phase 4 (Feature 9) — Owner blackout dates
-- Run once in Supabase SQL Editor.
-- =====================================================================

create table if not exists blackout_dates (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  blackout_date date not null unique,
  reason text
);

alter table blackout_dates enable row level security;

-- Anyone can read blackout dates (needed so the public booking form can
-- disable those days) — no personal data is in this table.
create policy "Public can read blackout dates"
  on blackout_dates
  for select
  to anon, authenticated
  using (true);

-- Only the logged-in owner can add/remove blackout dates.
create policy "Authenticated can insert blackout dates"
  on blackout_dates
  for insert
  to authenticated
  with check (true);

create policy "Authenticated can delete blackout dates"
  on blackout_dates
  for delete
  to authenticated
  using (true);
