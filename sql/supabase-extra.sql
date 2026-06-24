-- ============================================================
--  TOÁN VUI KẾT NỐI — Số liệu nền tảng công khai (trang chủ)
--  Chạy: SQL Editor → Run. (Chạy sau supabase-schema.sql)
-- ============================================================

create or replace view public.platform_stats as
  select
    (select count(*) from public.profiles where role = 'student')                 as students,
    (select count(*) from public.lesson_progress where status = 'completed')       as lessons_completed,
    (select coalesce(sum(xp), 0) from public.progress)                             as total_xp;

grant select on public.platform_stats to anon, authenticated;
