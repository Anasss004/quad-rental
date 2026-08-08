-- =====================================================================
-- QuadRando — Supabase schema (Feature 1)
-- Run this whole file once in Supabase: SQL Editor > New query > Run
-- =====================================================================

-- Reservations table
create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  client_name text not null,
  phone text not null,
  email text,
  res_date date not null,
  start_time time not null,
  duration_hours numeric not null,
  quads_count int not null default 1,
  message text,
  status text not null default 'pending'
    check (status in ('pending', 'confirmed', 'cancelled')),
  cancel_token uuid not null default gen_random_uuid()
);

-- Enable Row Level Security — no data is readable/writable
-- until an explicit policy below allows it.
alter table reservations enable row level security;

-- Anyone (including anonymous website visitors) can create a booking request.
create policy "Public can insert reservations"
  on reservations
  for insert
  to anon
  with check (true);

-- Only a logged-in (authenticated) user — the owner — can read the list.
create policy "Authenticated can read reservations"
  on reservations
  for select
  to authenticated
  using (true);

-- Only a logged-in user can update a reservation's status.
create policy "Authenticated can update reservations"
  on reservations
  for update
  to authenticated
  using (true)
  with check (true);

-- Only a logged-in user can delete a reservation.
create policy "Authenticated can delete reservations"
  on reservations
  for delete
  to authenticated
  using (true);

-- Helpful index for the admin calendar query (ordered by date/time).
create index if not exists reservations_res_date_idx
  on reservations (res_date, start_time);
