-- ============================================================
--  TOÁN VUI KẾT NỐI — HỆ THỐNG PHÂN QUYỀN (RBAC)
--  Role chỉ gồm: 'student' | 'admin'
--  Admin xác định bằng DANH SÁCH EMAIL (nguồn sự thật duy nhất).
--  Chạy 1 lần: Supabase → SQL Editor → Run.  (Idempotent — chạy lại an toàn.)
-- ============================================================

-- ---------- 1. Chuẩn hóa role: mặc định 'student' ----------
alter table public.profiles alter column role set default 'student';
update public.profiles set role = 'student' where role is null;

-- ---------- 2. DANH SÁCH EMAIL ADMIN (nguồn sự thật) ----------
create table if not exists public.admin_emails (
  email     text primary key,
  added_at  timestamptz default now()
);
-- Bật RLS và KHÔNG cấp policy nào => client (anon/authenticated) không đọc/sửa được.
-- Chỉ chỉnh qua SQL Editor (postgres) hoặc service_role.
alter table public.admin_emails enable row level security;

-- ---------- 3. Hàm kiểm tra admin (tránh đệ quy RLS) ----------
create or replace function public.is_admin()
returns boolean
language sql security definer stable set search_path = public
as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- ---------- 4. Trigger ĐĂNG KÝ: tự gán role theo danh sách ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
declare v_role text;
begin
  select case
           when exists (select 1 from public.admin_emails a where lower(a.email) = lower(new.email))
           then 'admin' else 'student'
         end
    into v_role;

  insert into public.profiles (id, name, avatar, grade, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', 'Học sinh'),
    coalesce(new.raw_user_meta_data->>'avatar', '👧'),
    coalesce((new.raw_user_meta_data->>'grade')::int, 1),
    v_role
  );
  insert into public.progress (user_id) values (new.id);
  return new;
end;
$$;
-- Tạo trigger gọi hàm trên (định nghĩa DUY NHẤT ở đây để tránh trùng với schema).
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- 5. Khóa cột role: client KHÔNG tự đổi quyền ----------
create or replace function public.lock_role()
returns trigger
language plpgsql
as $$
begin
  if NEW.role is distinct from OLD.role
     and current_user not in ('postgres', 'service_role', 'supabase_admin') then
    NEW.role := OLD.role;        -- huỷ thay đổi role đến từ client
  end if;
  return NEW;
end;
$$;
drop trigger if exists trg_lock_role on public.profiles;
create trigger trg_lock_role
  before update on public.profiles
  for each row execute function public.lock_role();

-- ---------- 6. Cho ADMIN xem mọi hồ sơ (phục vụ trang quản trị) ----------
drop policy if exists "admin_read_all_profiles" on public.profiles;
create policy "admin_read_all_profiles" on public.profiles
  for select using (public.is_admin());

-- ---------- 7. Hàm đồng bộ role theo danh sách (cho user đã đăng ký trước) ----------
create or replace function public.sync_admin_roles()
returns void
language plpgsql security definer set search_path = public
as $$
begin
  update public.profiles p set role = 'admin'
   where p.role <> 'admin'
     and exists (select 1 from public.admin_emails a
                 join auth.users u on lower(u.email) = lower(a.email)
                 where u.id = p.id);
  update public.profiles p set role = 'student'
   where p.role = 'admin'
     and not exists (select 1 from public.admin_emails a
                     join auth.users u on lower(u.email) = lower(a.email)
                     where u.id = p.id);
end;
$$;
revoke execute on function public.sync_admin_roles() from anon, authenticated;

-- ============================================================
--  CÁCH THÊM ADMIN  (chỉ cần sửa danh sách — không vọc role từng người)
-- ============================================================
insert into public.admin_emails (email) values ('admin@tvkn.vn')   -- ⬅️ ĐỔI EMAIL ADMIN Ở ĐÂY
  on conflict do nothing;

-- Áp dụng cho cả tài khoản đã đăng ký từ trước:
select public.sync_admin_roles();

-- Kiểm tra danh sách admin hiện tại:
-- select p.name, u.email, p.role
-- from public.profiles p join auth.users u on u.id = p.id
-- where p.role = 'admin';
