-- ============================================================
-- TOÁN VUI KẾT NỐI — Lược đồ cơ sở dữ liệu (Supabase / PostgreSQL)
-- Cách dùng: Supabase Dashboard → SQL Editor → dán toàn bộ file này → Run
-- ============================================================

-- ---------- 1. BẢNG HỒ SƠ (gắn với auth.users của Supabase) ----------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  name        text not null,
  avatar      text default '👧',
  grade       int  default 1,
  role        text default 'student',          -- student | parent | teacher | admin
  created_at  timestamptz default now(),        -- mốc "đã dùng lâu vs mới"
  last_login  timestamptz default now()
);

-- ---------- 2. TIẾN ĐỘ TỔNG (1-1 với user) ----------
create table if not exists public.progress (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  xp           int  default 0,
  coins        int  default 0,
  level        int  default 1,
  streak_days  int  default 0,
  last_active  date,
  updated_at   timestamptz default now()
);

-- ---------- 3. TIẾN ĐỘ TỪNG BÀI ----------
create table if not exists public.lesson_progress (
  id          bigint generated always as identity primary key,
  user_id     uuid references auth.users(id) on delete cascade,
  lesson_id   text not null,                    -- 'bai-1', 'bai-2', ...
  status      text default 'not_started',       -- not_started | in_progress | completed
  best_score  int  default 0,
  updated_at  timestamptz default now(),
  unique (user_id, lesson_id)
);

-- ---------- 4. HUY HIỆU ĐÃ MỞ ----------
create table if not exists public.user_badges (
  id          bigint generated always as identity primary key,
  user_id     uuid references auth.users(id) on delete cascade,
  badge_id    text not null,
  unlocked_at timestamptz default now(),
  unique (user_id, badge_id)
);

-- ---------- 5. NHẬT KÝ HOẠT ĐỘNG ----------
create table if not exists public.activity_log (
  id          bigint generated always as identity primary key,
  user_id     uuid references auth.users(id) on delete cascade,
  text        text not null,
  xp_delta    int  default 0,
  created_at  timestamptz default now()
);

-- ============================================================
-- 6. TỰ TẠO hồ sơ + tiến độ khi có người ĐĂNG KÝ
-- ============================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name, avatar, grade)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', 'Học sinh'),
    coalesce(new.raw_user_meta_data->>'avatar', '👧'),
    coalesce((new.raw_user_meta_data->>'grade')::int, 1)
  );
  insert into public.progress (user_id) values (new.id);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 7. ROW LEVEL SECURITY — mỗi người chỉ thấy/sửa dữ liệu của mình
-- ============================================================
alter table public.profiles        enable row level security;
alter table public.progress        enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.user_badges     enable row level security;
alter table public.activity_log    enable row level security;

-- profiles
drop policy if exists "own_profile_select" on public.profiles;
create policy "own_profile_select" on public.profiles for select using (auth.uid() = id);
drop policy if exists "own_profile_update" on public.profiles;
create policy "own_profile_update" on public.profiles for update using (auth.uid() = id);

-- progress
drop policy if exists "own_progress_all" on public.progress;
create policy "own_progress_all" on public.progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- lesson_progress
drop policy if exists "own_lessons_all" on public.lesson_progress;
create policy "own_lessons_all" on public.lesson_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- user_badges
drop policy if exists "own_badges_all" on public.user_badges;
create policy "own_badges_all" on public.user_badges for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- activity_log
drop policy if exists "own_activity_all" on public.activity_log;
create policy "own_activity_all" on public.activity_log for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================
-- 8. BẢNG XẾP HẠNG CÔNG KHAI (view bỏ qua RLS, chỉ lộ thông tin an toàn)
-- ============================================================
create or replace view public.leaderboard as
  select p.name, p.avatar, p.grade, pr.xp, pr.streak_days,
         row_number() over (order by pr.xp desc) as rank
  from public.profiles p
  join public.progress pr on pr.user_id = p.id;

grant select on public.leaderboard to anon, authenticated;

-- ============================================================
-- 9. SO SÁNH NGƯỜI DÙNG LÂU vs MỚI (cohort)
--    "Mới" = đăng ký <= 7 ngày; "Lâu" = > 7 ngày
-- ============================================================
create or replace view public.cohort_stats as
  select
    case when p.created_at > now() - interval '7 days' then 'Mới' else 'Đã dùng lâu' end as cohort,
    count(*)                              as so_nguoi,
    round(avg(pr.xp))                     as xp_trung_binh,
    round(avg(pr.streak_days), 1)         as chuoi_trung_binh,
    round(avg(pr.level), 1)               as level_trung_binh
  from public.profiles p
  join public.progress pr on pr.user_id = p.id
  group by 1;

grant select on public.cohort_stats to anon, authenticated;

-- Xong! Kiểm tra: Dashboard → Table editor sẽ thấy 5 bảng + 2 view.
