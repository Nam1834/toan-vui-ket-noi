-- ============================================================
--  TOÁN VUI KẾT NỐI — THEO DÕI THỜI GIAN HỌC (study time)
--  Chạy SAU: supabase-schema.sql, supabase-roles.sql, supabase-parent.sql
--  (cần hàm public.is_parent_of từ supabase-parent.sql cho RLS phụ huynh).
--  Idempotent — chạy lại an toàn. (Supabase → SQL Editor → Run)
-- ============================================================

-- ---------- 1. BẢNG THỜI GIAN HỌC (gộp theo NGÀY, 1 dòng/người/ngày) ----------
create table if not exists public.study_time (
  user_id uuid references auth.users(id) on delete cascade,
  day     date not null,
  seconds int  default 0,
  primary key (user_id, day)
);
alter table public.study_time enable row level security;

-- Học sinh đọc thời gian học CỦA MÌNH
drop policy if exists "own_study_select" on public.study_time;
create policy "own_study_select" on public.study_time for select
  using (auth.uid() = user_id);

-- Phụ huynh đọc thời gian học CỦA CON (chỉ SELECT — không sửa)
drop policy if exists "parent_read_child_study" on public.study_time;
create policy "parent_read_child_study" on public.study_time for select
  using ( public.is_parent_of(user_id) );

-- ⚠️ KHÔNG có policy insert/update/delete: việc ghi đi qua RPC add_study_time (security definer)
--    để client không tự bịa số liệu tuỳ ý qua REST.

-- ---------- 2. RPC: cộng dồn số giây học của HÔM NAY (hoặc ngày client gửi) ----------
create or replace function public.add_study_time(p_seconds int, p_day date default null)
returns void language plpgsql security definer set search_path = public
as $$
declare v_day date; v_sec int;
begin
  if auth.uid() is null then return; end if;
  v_sec := coalesce(p_seconds, 0);
  if v_sec <= 0 then return; end if;
  if v_sec > 3600 then v_sec := 3600; end if;        -- chặn ghi bất thường: tối đa 1 giờ mỗi lần
  v_day := coalesce(p_day, current_date);
  if v_day > current_date + 1 or v_day < current_date - 7 then
    v_day := current_date;                            -- ngày vô lý → quy về hôm nay
  end if;
  insert into public.study_time(user_id, day, seconds)
    values (auth.uid(), v_day, v_sec)
  on conflict (user_id, day)
    do update set seconds = public.study_time.seconds + excluded.seconds;
end $$;

-- Quyền gọi RPC: thu hồi khỏi PUBLIC (gồm anon) rồi chỉ cấp cho người ĐÃ đăng nhập.
revoke execute on function public.add_study_time(int, date) from public;
grant  execute on function public.add_study_time(int, date) to authenticated;

-- Xong! Kiểm tra nhanh:
--   select * from public.study_time where user_id = auth.uid();      -- (khi đã đăng nhập)
