-- ============================================================
--  TOÁN VUI KẾT NỐI — TIN NHẮN / KHUNG CHAT LỚP HỌC
--  • Chat LỚP  : cả lớp cùng gửi & xem   (recipient_id = NULL)
--  • Chat RIÊNG: 1-1 giữa GIÁO VIÊN ↔ HỌC SINH trong lớp (cả hai mở được)
--  Phân quyền hoàn toàn bằng RLS + hàm security definer (giống teacher/parent).
--
--  ⚠️ CHẠY FILE NÀY SAU supabase-teacher.sql (cần bảng classes + class_members).
--  Idempotent — chạy lại an toàn. (Supabase → SQL Editor → Run)
--
--  Sau khi chạy: Supabase → Database → Replication (hoặc Realtime) đảm bảo
--  bảng public.messages đã nằm trong publication supabase_realtime (file này tự thêm).
-- ============================================================

-- ---------- 1. BẢNG TIN NHẮN ----------
create table if not exists public.messages (
  id            bigint generated always as identity primary key,
  class_id      uuid not null references public.classes(id)   on delete cascade,
  sender_id     uuid not null references auth.users(id)       on delete cascade,
  recipient_id  uuid          references auth.users(id)       on delete cascade,  -- NULL = chat cả lớp
  body          text not null check (char_length(btrim(body)) between 1 and 2000),
  created_at    timestamptz not null default now()
);
alter table public.messages enable row level security;
-- Để realtime gửi kèm dữ liệu dòng khi UPDATE/DELETE
alter table public.messages replica identity full;

create index if not exists messages_class_created_idx on public.messages(class_id, id);
create index if not exists messages_dm_idx            on public.messages(class_id, recipient_id, id);
create index if not exists messages_sender_idx        on public.messages(sender_id);

-- ---------- 2. HÀM KIỂM TRA QUYỀN (security definer → tránh đệ quy RLS) ----------
-- Người dùng hiện tại có thuộc lớp không? (là GV của lớp HOẶC HS đã được duyệt)
create or replace function public.can_access_class(p_class uuid)
returns boolean language sql security definer stable set search_path = public
as $$
  select exists (select 1 from public.classes c
                  where c.id = p_class and c.teacher_id = auth.uid())
      or exists (select 1 from public.class_members m
                  where m.class_id = p_class and m.student_id = auth.uid()
                    and m.status = 'approved');
$$;

-- Người dùng hiện tại có được PHÉP GỬI tin (class hoặc riêng) trong lớp này không?
--  • recipient NULL  → chat cả lớp: chỉ cần thuộc lớp.
--  • recipient set   → chat riêng : GV ↔ HS-đã-duyệt (không HS ↔ HS, không tự nhắn mình).
create or replace function public.can_post_message(p_class uuid, p_recipient uuid)
returns boolean language plpgsql security definer stable set search_path = public
as $$
declare me uuid := auth.uid(); me_teacher boolean; me_member boolean;
begin
  if me is null then return false; end if;
  select exists (select 1 from public.classes c
                  where c.id = p_class and c.teacher_id = me) into me_teacher;
  select exists (select 1 from public.class_members m
                  where m.class_id = p_class and m.student_id = me
                    and m.status = 'approved') into me_member;
  if not (me_teacher or me_member) then return false; end if;
  if p_recipient is null then return true; end if;     -- chat cả lớp
  if p_recipient = me   then return false; end if;     -- không tự nhắn mình
  if me_teacher then
    -- GV nhắn riêng: người nhận phải là HS đã duyệt trong lớp
    return exists (select 1 from public.class_members m
                    where m.class_id = p_class and m.student_id = p_recipient
                      and m.status = 'approved');
  else
    -- HS nhắn riêng: chỉ được nhắn GV của lớp
    return exists (select 1 from public.classes c
                    where c.id = p_class and c.teacher_id = p_recipient);
  end if;
end $$;

-- ---------- 3. RLS ----------
-- ĐỌC: tin cả lớp → ai thuộc lớp đều đọc; tin riêng → chỉ người gửi & người nhận.
drop policy if exists "messages_select" on public.messages;
create policy "messages_select" on public.messages for select using (
  case when recipient_id is null
       then public.can_access_class(class_id)
       else auth.uid() in (sender_id, recipient_id)
  end
);

-- GHI: phải là chính mình gửi + được phép gửi theo quan hệ lớp.
drop policy if exists "messages_insert" on public.messages;
create policy "messages_insert" on public.messages for insert with check (
  sender_id = auth.uid() and public.can_post_message(class_id, recipient_id)
);

-- XÓA: người gửi gỡ tin của mình; GV gỡ được tin trong lớp mình (kiểm duyệt).
drop policy if exists "messages_delete" on public.messages;
create policy "messages_delete" on public.messages for delete using (
  sender_id = auth.uid()
  or exists (select 1 from public.classes c where c.id = class_id and c.teacher_id = auth.uid())
);

-- ---------- 4. RPC: DANH BẠ LỚP (tên + avatar) để hiển thị tên người gửi ----------
--  HS không đọc được profiles của bạn cùng lớp qua RLS → cần RPC này (chỉ trả name/avatar).
--  Chỉ người THUỘC lớp mới gọi được; KHÔNG lộ cột nhạy cảm (vd link_code).
create or replace function public.class_roster(p_class uuid)
returns table(id uuid, name text, avatar text, is_teacher boolean)
language sql security definer stable set search_path = public
as $$
  select p.id, p.name, p.avatar, (p.id = c.teacher_id) as is_teacher
    from public.classes c
    join public.profiles p
      on p.id = c.teacher_id
      or p.id in (select m.student_id from public.class_members m
                   where m.class_id = c.id and m.status = 'approved')
   where c.id = p_class
     and public.can_access_class(p_class)
   order by is_teacher desc, p.name;
$$;

-- ---------- 5. Bổ sung teacher_id vào danh sách lớp của HỌC SINH ----------
--  (để HS biết id giáo viên mà nhắn riêng). Đổi kiểu trả về → phải DROP trước.
drop function if exists public.list_my_classes_student();
create or replace function public.list_my_classes_student()
returns table(class_id uuid, class_name text, teacher_id uuid, teacher_name text, status text, joined_at timestamptz)
language sql security definer stable set search_path = public
as $$
  select c.id, c.name, c.teacher_id, t.name, m.status, m.joined_at
    from public.class_members m
    join public.classes  c on c.id = m.class_id
    left join public.profiles t on t.id = c.teacher_id
   where m.student_id = auth.uid()
   order by m.joined_at desc;
$$;

-- ---------- 5b. HARDENING: list_class_students KHÔNG trả link_code ----------
--  (đặt ở đây vì file này chạy SAU teacher.sql; đổi kiểu trả về nên phải DROP trước.)
drop function if exists public.list_class_students(uuid);
create or replace function public.list_class_students(p_class uuid)
returns table(id uuid, name text, avatar text, grade int, role text, created_at timestamptz, last_login timestamptz)
language sql security definer stable set search_path = public
as $$
  select p.id, p.name, p.avatar, p.grade, p.role, p.created_at, p.last_login
    from public.profiles p
    join public.class_members m on m.student_id = p.id
    join public.classes c       on c.id = m.class_id
   where m.class_id = p_class and c.teacher_id = auth.uid()
     and m.status = 'approved'
   order by p.name;
$$;
revoke execute on function public.list_class_students(uuid) from public;
grant  execute on function public.list_class_students(uuid) to authenticated;

-- ---------- 6. QUYỀN ----------
grant select, insert, delete on public.messages to authenticated;

revoke execute on function public.can_access_class(uuid)          from public;
revoke execute on function public.can_post_message(uuid, uuid)    from public;
revoke execute on function public.class_roster(uuid)              from public;
revoke execute on function public.list_my_classes_student()       from public;
grant  execute on function public.can_access_class(uuid)          to authenticated;
grant  execute on function public.can_post_message(uuid, uuid)    to authenticated;
grant  execute on function public.class_roster(uuid)              to authenticated;
grant  execute on function public.list_my_classes_student()       to authenticated;

-- ---------- 7. BẬT REALTIME cho bảng messages (idempotent) ----------
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
     where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'messages'
  ) then
    alter publication supabase_realtime add table public.messages;
  end if;
end $$;

-- Xong! Kiểm tra nhanh:
--   (GV) select public.class_roster('<class_id>');
--   (HS) select * from public.list_my_classes_student();
