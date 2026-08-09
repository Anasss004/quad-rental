-- =====================================================================
-- Phase 8 (Feature 17) — Deposit payment tracking
-- Run once in Supabase SQL Editor.
-- =====================================================================

alter table reservations
  add column if not exists deposit_paid boolean not null default false;

alter table reservations
  add column if not exists deposit_amount numeric;
