-- ============================================================
--  TOÁN VUI KẾT NỐI — THỐNG KÊ ADMIN (RPC bảo mật)
--  Chạy SAU supabase-roles.sql (cần hàm is_admin()).
--  SQL Editor → Run.
-- ============================================================

-- 1) Tổng quan dashboard — chỉ admin gọi được
create or replace function public.admin_overview()
returns json
language plpgsql security definer set search_path = public
as $$
declare result json;
begin
  if not public.is_admin() then
    raise exception 'Không có quyền (chỉ admin).';
  end if;
  select json_build_object(
    'students',          (select count(*) from public.profiles where role = 'student'),
    'admins',            (select count(*) from public.profiles where role = 'admin'),
    'total_users',       (select count(*) from public.profiles),
    'total_xp',          (select coalesce(sum(xp), 0) from public.progress),
    'xp_today',          (select coalesce(sum(xp_delta), 0) from public.activity_log where created_at::date = current_date),
    'active_today',      (select count(distinct user_id) from public.activity_log where created_at::date = current_date),
    'lessons_completed', (select count(*) from public.lesson_progress where status = 'completed'),
    'activities_total',  (select count(*) from public.activity_log)
  ) into result;
  return result;
end;
$$;

-- 2) Danh sách người dùng (kèm tiến độ) — chỉ admin
create or replace function public.admin_user_list()
returns table (
  name text, email text, role text, grade int,
  xp int, level int, streak_days int,
  created_at timestamptz, last_login timestamptz
)
language plpgsql security definer set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'Không có quyền (chỉ admin).';
  end if;
  return query
    select p.name, u.email::text, p.role, p.grade,
           coalesce(pr.xp,0), coalesce(pr.level,1), coalesce(pr.streak_days,0),
           p.created_at, p.last_login
    from public.profiles p
    join auth.users u on u.id = p.id
    left join public.progress pr on pr.user_id = p.id
    order by coalesce(pr.xp,0) desc;
end;
$$;

-- Cho phép gọi (bên trong đã chặn non-admin)
grant execute on function public.admin_overview() to authenticated;
grant execute on function public.admin_user_list() to authenticated;

-- (View cohort_stats so sánh 'lâu vs mới' đã tạo ở supabase-schema.sql)
