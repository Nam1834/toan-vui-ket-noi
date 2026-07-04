-- ============================================================
--  TOÁN VUI KẾT NỐI — THÊM 50 HỌC SINH VÀO LỚP CỦA CÔ THƯƠNG
--  Dùng cho bản DEMO. Chạy: Supabase → SQL Editor → Run.
--  • Tự tìm giáo viên tên "Thương" và lớp của cô.
--  • Thêm 50 học sinh (ưu tiên HS demo & đúng khối lớp) ở trạng
--    thái 'approved' (đã vào lớp — giáo viên xem được tiến độ ngay).
--  Chạy lại an toàn: chỉ thêm HS chưa có trong lớp, không trùng.
-- ============================================================

do $$
declare
  v_teacher   uuid;
  v_class     uuid;
  v_class_nm  text;
  v_grade     int;     -- khối lớp suy ra từ tên lớp (nếu có), để ưu tiên HS cùng khối
  v_added     int := 0;
  r           record;
begin
  -- 1) Tìm giáo viên tên Thương
  select id into v_teacher
    from public.profiles
   where role = 'teacher' and (name ilike '%thương%' or name ilike '%thuong%')
   order by created_at
   limit 1;
  if v_teacher is null then
    raise exception 'Không tìm thấy giáo viên tên Thương (role=teacher).';
  end if;

  -- 2) Lấy lớp của cô: nếu nhiều lớp, ưu tiên lớp có tên chứa "lớp 1", else lớp cũ nhất
  select id, name into v_class, v_class_nm
    from public.classes
   where teacher_id = v_teacher
   order by (case when name ilike '%lớp 1%' or name ilike '%lop 1%' then 0 else 1 end), created_at
   limit 1;
  if v_class is null then
    raise exception 'Cô Thương chưa có lớp nào — hãy tạo lớp trước.';
  end if;

  -- Suy ra khối lớp từ tên (bắt số đầu tiên 1..5), để ưu tiên HS cùng khối
  v_grade := nullif(substring(v_class_nm from '([1-5])'), '')::int;

  -- 3) Thêm 50 học sinh chưa ở trong lớp này
  for r in
    select p.id
      from public.profiles p
     where p.role = 'student'
       and not exists (
         select 1 from public.class_members m
          where m.class_id = v_class and m.student_id = p.id)
     order by
       -- ưu tiên: (a) học sinh demo, (b) đúng khối lớp, (c) ngẫu nhiên
       (case when exists (select 1 from auth.users u
                           where u.id = p.id and u.email like '%@toanvui-demo.local')
             then 0 else 1 end),
       (case when v_grade is not null and p.grade = v_grade then 0 else 1 end),
       random()
     limit 50
  loop
    insert into public.class_members(class_id, student_id, status)
      values (v_class, r.id, 'approved')
      on conflict do nothing;
    v_added := v_added + 1;
  end loop;

  raise notice 'Đã thêm % học sinh vào lớp "%" (khối ưu tiên: %).',
               v_added, v_class_nm, coalesce(v_grade::text, 'không xác định');
end $$;

-- Kiểm tra sĩ số lớp sau khi chạy (thay tên nếu cần):
--   select c.name, count(m.*) filter (where m.status='approved') as si_so
--     from public.classes c
--     join public.profiles t on t.id = c.teacher_id
--     left join public.class_members m on m.class_id = c.id
--    where t.name ilike '%thương%'
--    group by c.name;
