-- ============================================================
--  TOÁN VUI KẾT NỐI — TÀI KHOẢN PHỤ HUYNH (liên kết con bằng MÃ)
--  Chạy SAU: supabase-schema.sql, supabase-roles.sql.
--  Idempotent — chạy lại an toàn. (Supabase → SQL Editor → Run)
-- ============================================================

-- ---------- 1. MÃ LIÊN KẾT cho học sinh ----------
alter table public.profiles add column if not exists link_code text unique;

-- Sinh mã dễ đọc dạng "ANH-4F2A" (6 ký tự từ tên + 4 ký tự ngẫu nhiên)
create or replace function public.gen_link_code(p_name text)
returns text language plpgsql as $$
declare base text; rnd text;
begin
  base := upper(regexp_replace(split_part(coalesce(p_name,'HS'),' ',-1),'[^A-Za-z]','','g'));
  if base = '' then base := 'HS'; end if;
  rnd  := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 4));
  return left(base,6) || '-' || rnd;
end $$;

-- ---------- 2. Trigger ĐĂNG KÝ (thay bản ở supabase-roles.sql): thêm role 'parent' + gán mã cho học sinh ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
declare v_role text; v_code text;
begin
  -- Role: admin theo danh sách email; parent theo metadata; còn lại student.
  -- ⚠️ admin CHỈ qua admin_emails — không bao giờ nhận từ client.
  if exists (select 1 from public.admin_emails a where lower(a.email) = lower(new.email)) then
    v_role := 'admin';
  elsif new.raw_user_meta_data->>'role' = 'parent' then
    v_role := 'parent';
  else
    v_role := 'student';
  end if;

  -- Chỉ học sinh mới có mã liên kết
  if v_role = 'student' then
    v_code := public.gen_link_code(new.raw_user_meta_data->>'name');
  else
    v_code := null;
  end if;

  insert into public.profiles (id, name, avatar, grade, role, link_code)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', case when v_role='parent' then 'Phụ huynh' else 'Học sinh' end),
    coalesce(new.raw_user_meta_data->>'avatar', case when v_role='parent' then '👩' else '👧' end),
    coalesce((new.raw_user_meta_data->>'grade')::int, 1),
    v_role,
    v_code
  );
  insert into public.progress (user_id) values (new.id);
  return new;
end;
$$;

-- Gán mã cho các HỌC SINH đã đăng ký TRƯỚC khi có tính năng này (chưa có mã)
update public.profiles
   set link_code = public.gen_link_code(name)
 where role = 'student' and link_code is null;

-- ---------- 3. BẢNG LIÊN KẾT Phụ huynh ↔ Con ----------
create table if not exists public.parent_links (
  parent_id  uuid references auth.users(id) on delete cascade,
  child_id   uuid references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (parent_id, child_id)
);
alter table public.parent_links enable row level security;

-- Phụ huynh chỉ thấy liên kết của chính mình
drop policy if exists "own_links_select" on public.parent_links;
create policy "own_links_select" on public.parent_links for select
  using (auth.uid() = parent_id);

-- ---------- 4. Hàm kiểm tra quan hệ (security definer → tránh đệ quy RLS) ----------
create or replace function public.is_parent_of(c uuid)
returns boolean language sql security definer stable set search_path = public
as $$
  select exists (select 1 from public.parent_links
                 where parent_id = auth.uid() and child_id = c);
$$;

-- ---------- 5. RPC: liên kết / huỷ liên kết / đổi mã ----------
-- Phụ huynh nhập MÃ của con để liên kết (security definer để đọc được hồ sơ con qua mã)
create or replace function public.link_child(p_code text)
returns json language plpgsql security definer set search_path = public
as $$
declare v_child uuid; v_name text;
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  if coalesce((select role from public.profiles where id = auth.uid()), '') <> 'parent' then
    raise exception 'Chỉ tài khoản phụ huynh mới liên kết được con.';
  end if;
  select id, name into v_child, v_name
    from public.profiles
   where link_code = upper(trim(p_code)) and role = 'student';
  if v_child is null then
    raise exception 'Mã không đúng.';
  end if;
  insert into public.parent_links(parent_id, child_id)
    values (auth.uid(), v_child)
    on conflict do nothing;
  return json_build_object('ok', true, 'child_id', v_child, 'name', v_name);
end $$;

-- Huỷ liên kết 1 con
create or replace function public.unlink_child(p_child uuid)
returns void language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  delete from public.parent_links
   where parent_id = auth.uid() and child_id = p_child;
end $$;

-- Danh sách con (hồ sơ) của phụ huynh đang đăng nhập
create or replace function public.list_children()
returns setof public.profiles
language sql security definer stable set search_path = public
as $$
  select p.* from public.profiles p
   join public.parent_links l on l.child_id = p.id
  where l.parent_id = auth.uid()
  order by p.name;
$$;

-- Học sinh tự ĐỔI mã (thu hồi: phụ huynh muốn liên kết mới phải xin mã mới)
create or replace function public.regenerate_link_code()
returns text language plpgsql security definer set search_path = public
as $$
declare v_code text;
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  if coalesce((select role from public.profiles where id = auth.uid()), '') <> 'student' then
    raise exception 'Chỉ học sinh mới có mã liên kết.';
  end if;
  v_code := public.gen_link_code((select name from public.profiles where id = auth.uid()));
  update public.profiles set link_code = v_code where id = auth.uid();
  return v_code;
end $$;

-- Quyền gọi RPC: thu hồi khỏi PUBLIC (gồm anon) rồi chỉ cấp cho người ĐÃ đăng nhập.
revoke execute on function public.link_child(text)          from public;
revoke execute on function public.unlink_child(uuid)        from public;
revoke execute on function public.list_children()           from public;
revoke execute on function public.regenerate_link_code()    from public;
grant  execute on function public.link_child(text)          to authenticated;
grant  execute on function public.unlink_child(uuid)        to authenticated;
grant  execute on function public.list_children()           to authenticated;
grant  execute on function public.regenerate_link_code()    to authenticated;

-- ---------- 6. RLS: cho PHỤ HUYNH ĐỌC (chỉ SELECT) dữ liệu con ----------
-- KHÔNG thêm insert/update/delete → phụ huynh tuyệt đối không sửa dữ liệu con.
-- Policy "của chính mình" (auth.uid()=user_id) ở các file trước GIỮ NGUYÊN; đây là policy BỔ SUNG (Postgres OR).
drop policy if exists "parent_read_child_profile" on public.profiles;
create policy "parent_read_child_profile" on public.profiles for select
  using ( public.is_parent_of(id) );

drop policy if exists "parent_read_child_progress" on public.progress;
create policy "parent_read_child_progress" on public.progress for select
  using ( public.is_parent_of(user_id) );

drop policy if exists "parent_read_child_lessons" on public.lesson_progress;
create policy "parent_read_child_lessons" on public.lesson_progress for select
  using ( public.is_parent_of(user_id) );

drop policy if exists "parent_read_child_badges" on public.user_badges;
create policy "parent_read_child_badges" on public.user_badges for select
  using ( public.is_parent_of(user_id) );

drop policy if exists "parent_read_child_activity" on public.activity_log;
create policy "parent_read_child_activity" on public.activity_log for select
  using ( public.is_parent_of(user_id) );

-- Xong! Kiểm tra nhanh:
--   select id, name, role, link_code from public.profiles;        -- HS có mã, PH/admin = null
--   select public.list_children();                                -- (khi đăng nhập bằng tài khoản phụ huynh)
