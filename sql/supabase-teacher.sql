-- ============================================================
--  TOÁN VUI KẾT NỐI — TÀI KHOẢN GIÁO VIÊN (quản lý LỚP bằng MÃ LỚP)
--  Mô hình giống Phụ huynh, NHƯNG 1 giáo viên ↔ NHIỀU học sinh (cả lớp).
--  • Giáo viên TẠO lớp → nhận MÃ LỚP (vd LOP3A-2K7), đọc cho cả lớp.
--  • Học sinh nhập mã lớp ở Hồ sơ để THAM GIA lớp (1 lần).
--  • Giáo viên CHỈ ĐỌC tiến độ học sinh (RLS chỉ SELECT) — không sửa được dữ liệu HS.
--
--  ⚠️ CHẠY FILE NÀY CUỐI CÙNG — SAU:
--     supabase-schema.sql → supabase-roles.sql → supabase-extra.sql
--     → supabase-admin-stats.sql → supabase-parent.sql → supabase-study-time.sql
--     (vì file này định nghĩa lại handle_new_user để gộp cả role 'teacher').
--  Idempotent — chạy lại an toàn. (Supabase → SQL Editor → Run)
-- ============================================================

-- ---------- 1. Trigger ĐĂNG KÝ (GỘP admin/parent/teacher/student) ----------
--  Thay bản ở supabase-parent.sql: bổ sung nhánh role='teacher'.
--  ⚠️ admin CHỈ qua admin_emails — không bao giờ nhận từ client.
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
declare v_role text; v_code text;
begin
  if exists (select 1 from public.admin_emails a where lower(a.email) = lower(new.email)) then
    v_role := 'admin';
  elsif new.raw_user_meta_data->>'role' = 'parent' then
    v_role := 'parent';
  elsif new.raw_user_meta_data->>'role' = 'teacher' then
    v_role := 'teacher';
  else
    v_role := 'student';
  end if;

  -- Chỉ HỌC SINH mới có mã liên kết phụ huynh
  if v_role = 'student' then
    v_code := public.gen_link_code(new.raw_user_meta_data->>'name');
  else
    v_code := null;
  end if;

  insert into public.profiles (id, name, avatar, grade, role, link_code)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name',
             case v_role when 'parent' then 'Phụ huynh' when 'teacher' then 'Giáo viên' else 'Học sinh' end),
    coalesce(new.raw_user_meta_data->>'avatar',
             case v_role when 'parent' then '👩' when 'teacher' then '👩‍🏫' else '👧' end),
    coalesce((new.raw_user_meta_data->>'grade')::int, 1),
    v_role,
    v_code
  );
  insert into public.progress (user_id) values (new.id);
  return new;
end;
$$;

-- ---------- 2. Sinh MÃ LỚP dễ đọc: "LOP3A-2K7" (gốc từ tên lớp + 4 ký tự ngẫu nhiên) ----------
create or replace function public.gen_class_code(p_name text)
returns text language plpgsql as $$
declare base text; rnd text;
begin
  base := upper(regexp_replace(coalesce(p_name,'LOP'),'[^A-Za-z0-9]','','g'));
  if base = '' then base := 'LOP'; end if;
  rnd  := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 4));
  return left(base,8) || '-' || rnd;
end $$;

-- ---------- 3. BẢNG LỚP HỌC ----------
create table if not exists public.classes (
  id          uuid primary key default gen_random_uuid(),
  teacher_id  uuid references auth.users(id) on delete cascade,
  name        text not null,
  class_code  text unique not null,
  created_at  timestamptz default now()
);
alter table public.classes enable row level security;

-- Giáo viên chỉ thấy lớp của CHÍNH MÌNH (ghi đều qua RPC security definer bên dưới).
drop policy if exists "own_classes_select" on public.classes;
create policy "own_classes_select" on public.classes for select
  using (auth.uid() = teacher_id);

-- ---------- 4. BẢNG THÀNH VIÊN LỚP (Học sinh ↔ Lớp) ----------
--  status: 'pending' = HS đã xin vào, chờ giáo viên DUYỆT; 'approved' = đã vào lớp.
--  Giáo viên chỉ ĐỌC được dữ liệu HS khi status = 'approved' (xem is_teacher_of).
create table if not exists public.class_members (
  class_id   uuid references public.classes(id) on delete cascade,
  student_id uuid references auth.users(id) on delete cascade,
  status     text not null default 'approved',   -- join_class ghi 'pending' cho lượt mới
  joined_at  timestamptz default now(),
  primary key (class_id, student_id)
);
-- Idempotent: nếu bảng đã tạo từ bản trước (chưa có cột status) thì bổ sung.
--  default 'approved' để KHÔNG khoá nhầm thành viên cũ; lượt join MỚI luôn là 'pending'.
alter table public.class_members add column if not exists status text not null default 'approved';
alter table public.class_members enable row level security;

-- Học sinh thấy liên kết lớp của chính mình
drop policy if exists "member_self_select" on public.class_members;
create policy "member_self_select" on public.class_members for select
  using (auth.uid() = student_id);

-- Giáo viên thấy thành viên các lớp do mình tạo
drop policy if exists "member_teacher_select" on public.class_members;
create policy "member_teacher_select" on public.class_members for select
  using (exists (select 1 from public.classes c
                 where c.id = class_id and c.teacher_id = auth.uid()));

-- ---------- 5. Hàm kiểm tra quan hệ (security definer → tránh đệ quy RLS) ----------
create or replace function public.is_teacher_of(s uuid)
returns boolean language sql security definer stable set search_path = public
as $$
  select exists (
    select 1 from public.class_members m
      join public.classes c on c.id = m.class_id
     where c.teacher_id = auth.uid() and m.student_id = s
       and m.status = 'approved'        -- chỉ HS đã được DUYỆT mới lộ dữ liệu cho giáo viên
  );
$$;

-- ---------- 6. RPC: TẠO LỚP (chỉ giáo viên) ----------
create or replace function public.create_class(p_name text)
returns json language plpgsql security definer set search_path = public
as $$
declare v_code text; v_id uuid; i int := 0;
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  if coalesce((select role from public.profiles where id = auth.uid()), '') <> 'teacher' then
    raise exception 'Chỉ tài khoản giáo viên mới tạo được lớp.';
  end if;
  if coalesce(trim(p_name),'') = '' then raise exception 'Tên lớp không được để trống.'; end if;

  -- Sinh mã, thử lại nếu trùng (rất hiếm)
  loop
    v_code := public.gen_class_code(p_name);
    exit when not exists (select 1 from public.classes where class_code = v_code);
    i := i + 1; exit when i > 5;
  end loop;

  insert into public.classes(teacher_id, name, class_code)
    values (auth.uid(), trim(p_name), v_code)
    returning id into v_id;

  return json_build_object('ok', true, 'id', v_id, 'name', trim(p_name), 'class_code', v_code);
end $$;

-- ---------- 7. RPC: HỌC SINH THAM GIA LỚP bằng mã ----------
create or replace function public.join_class(p_code text)
returns json language plpgsql security definer set search_path = public
as $$
declare v_class uuid; v_name text;
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  if coalesce((select role from public.profiles where id = auth.uid()), '') <> 'student' then
    raise exception 'Chỉ học sinh mới tham gia lớp được.';
  end if;
  select id, name into v_class, v_name
    from public.classes where class_code = upper(trim(p_code));
  if v_class is null then raise exception 'Mã lớp không đúng.'; end if;
  -- Lượt tham gia MỚI luôn ở trạng thái 'pending' → chờ giáo viên duyệt.
  -- Nếu đã có liên kết (đang chờ hoặc đã vào) thì giữ nguyên, không hạ cấp.
  insert into public.class_members(class_id, student_id, status)
    values (v_class, auth.uid(), 'pending')
    on conflict do nothing;
  return json_build_object('ok', true, 'class_id', v_class, 'class_name', v_name);
end $$;

-- ---------- 8. RPC: DANH SÁCH LỚP của giáo viên (kèm sĩ số + số chờ duyệt) ----------
-- DROP trước: bản cũ trả về thiếu cột pending_count → đổi kiểu trả về cần xoá hàm cũ.
drop function if exists public.list_my_classes();
create or replace function public.list_my_classes()
returns table(id uuid, name text, class_code text, student_count bigint, pending_count bigint, created_at timestamptz)
language sql security definer stable set search_path = public
as $$
  select c.id, c.name, c.class_code,
         (select count(*) from public.class_members m where m.class_id = c.id and m.status = 'approved') as student_count,
         (select count(*) from public.class_members m where m.class_id = c.id and m.status = 'pending')  as pending_count,
         c.created_at
    from public.classes c
   where c.teacher_id = auth.uid()
   order by c.created_at;
$$;

-- ---------- 9. RPC: DANH SÁCH HỌC SINH ĐÃ DUYỆT trong 1 lớp (chỉ giáo viên sở hữu lớp) ----------
create or replace function public.list_class_students(p_class uuid)
returns setof public.profiles
language sql security definer stable set search_path = public
as $$
  select p.*
    from public.profiles p
    join public.class_members m on m.student_id = p.id
    join public.classes c       on c.id = m.class_id
   where m.class_id = p_class and c.teacher_id = auth.uid()
     and m.status = 'approved'
   order by p.name;
$$;

-- ---------- 9b. RPC: DANH SÁCH YÊU CẦU CHỜ DUYỆT của 1 lớp ----------
create or replace function public.list_pending_requests(p_class uuid)
returns table(student_id uuid, name text, avatar text, grade int, joined_at timestamptz)
language sql security definer stable set search_path = public
as $$
  select m.student_id, p.name, p.avatar, p.grade, m.joined_at
    from public.class_members m
    join public.profiles p on p.id = m.student_id
    join public.classes c  on c.id = m.class_id
   where m.class_id = p_class and c.teacher_id = auth.uid()
     and m.status = 'pending'
   order by m.joined_at;
$$;

-- ---------- 9c. RPC: GIÁO VIÊN DUYỆT 1 học sinh vào lớp ----------
create or replace function public.approve_student(p_class uuid, p_student uuid)
returns void language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  if not exists (select 1 from public.classes where id = p_class and teacher_id = auth.uid()) then
    raise exception 'Không có quyền với lớp này.';
  end if;
  update public.class_members set status = 'approved'
   where class_id = p_class and student_id = p_student and status = 'pending';
end $$;

-- ---------- 10. RPC: GỠ học sinh khỏi lớp (chỉ giáo viên sở hữu lớp) ----------
create or replace function public.remove_student(p_class uuid, p_student uuid)
returns void language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  if not exists (select 1 from public.classes where id = p_class and teacher_id = auth.uid()) then
    raise exception 'Không có quyền với lớp này.';
  end if;
  delete from public.class_members where class_id = p_class and student_id = p_student;
end $$;

-- ---------- 11. RPC: XÓA LỚP (chỉ giáo viên sở hữu lớp) ----------
create or replace function public.delete_class(p_class uuid)
returns void language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  delete from public.classes where id = p_class and teacher_id = auth.uid();
end $$;

-- ---------- 11b. RPC: HỌC SINH xem các lớp của mình (kèm trạng thái + tên giáo viên) ----------
create or replace function public.list_my_classes_student()
returns table(class_id uuid, class_name text, teacher_name text, status text, joined_at timestamptz)
language sql security definer stable set search_path = public
as $$
  select c.id, c.name, t.name, m.status, m.joined_at
    from public.class_members m
    join public.classes  c on c.id = m.class_id
    left join public.profiles t on t.id = c.teacher_id
   where m.student_id = auth.uid()
   order by m.joined_at desc;
$$;

-- ---------- 11c. RPC: HỌC SINH tự rời lớp (hoặc huỷ yêu cầu đang chờ) ----------
create or replace function public.leave_class(p_class uuid)
returns void language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Cần đăng nhập.'; end if;
  delete from public.class_members where class_id = p_class and student_id = auth.uid();
end $$;

-- Quyền gọi RPC: thu hồi khỏi PUBLIC (gồm anon) rồi chỉ cấp cho người ĐÃ đăng nhập.
revoke execute on function public.create_class(text)            from public;
revoke execute on function public.join_class(text)              from public;
revoke execute on function public.list_my_classes()             from public;
revoke execute on function public.list_class_students(uuid)     from public;
revoke execute on function public.list_pending_requests(uuid)   from public;
revoke execute on function public.approve_student(uuid, uuid)   from public;
revoke execute on function public.remove_student(uuid, uuid)    from public;
revoke execute on function public.delete_class(uuid)            from public;
revoke execute on function public.list_my_classes_student()     from public;
revoke execute on function public.leave_class(uuid)             from public;
grant  execute on function public.create_class(text)            to authenticated;
grant  execute on function public.join_class(text)              to authenticated;
grant  execute on function public.list_my_classes()             to authenticated;
grant  execute on function public.list_class_students(uuid)     to authenticated;
grant  execute on function public.list_pending_requests(uuid)   to authenticated;
grant  execute on function public.approve_student(uuid, uuid)   to authenticated;
grant  execute on function public.remove_student(uuid, uuid)    to authenticated;
grant  execute on function public.delete_class(uuid)            to authenticated;
grant  execute on function public.list_my_classes_student()     to authenticated;
grant  execute on function public.leave_class(uuid)             to authenticated;

-- ---------- 12. RLS: cho GIÁO VIÊN ĐỌC (chỉ SELECT) dữ liệu học sinh trong lớp ----------
--  KHÔNG thêm insert/update/delete → giáo viên tuyệt đối không sửa dữ liệu HS.
--  Đây là policy BỔ SUNG (Postgres OR) bên cạnh policy "của chính mình" + "phụ huynh".
drop policy if exists "teacher_read_student_profile" on public.profiles;
create policy "teacher_read_student_profile" on public.profiles for select
  using ( public.is_teacher_of(id) );

drop policy if exists "teacher_read_student_progress" on public.progress;
create policy "teacher_read_student_progress" on public.progress for select
  using ( public.is_teacher_of(user_id) );

drop policy if exists "teacher_read_student_lessons" on public.lesson_progress;
create policy "teacher_read_student_lessons" on public.lesson_progress for select
  using ( public.is_teacher_of(user_id) );

drop policy if exists "teacher_read_student_badges" on public.user_badges;
create policy "teacher_read_student_badges" on public.user_badges for select
  using ( public.is_teacher_of(user_id) );

drop policy if exists "teacher_read_student_activity" on public.activity_log;
create policy "teacher_read_student_activity" on public.activity_log for select
  using ( public.is_teacher_of(user_id) );

drop policy if exists "teacher_read_student_study" on public.study_time;
create policy "teacher_read_student_study" on public.study_time for select
  using ( public.is_teacher_of(user_id) );

-- Xong! Kiểm tra nhanh (khi đăng nhập tài khoản giáo viên):
--   select public.create_class('Lớp 3A');     -- tạo lớp, nhận mã
--   select * from public.list_my_classes();   -- danh sách lớp + sĩ số
--   (HS đăng nhập rồi: select public.join_class('LOP3A-XXXX'); )
