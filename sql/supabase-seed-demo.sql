-- ============================================================
--  TOÁN VUI KẾT NỐI — SEED DỮ LIỆU DEMO (chỉ dùng cho bản demo!)
--  Tạo ~790 tài khoản trông như người thật để số liệu trang chủ /
--  trang admin hiển thị phong phú.
--
--  ⚠️ CHỈ CHẠY TRÊN PROJECT DEMO. KHÔNG chạy trên production thật.
--  Cách dùng: Supabase → SQL Editor → dán cả file → Run.
--  Mọi account demo có email dạng @toanvui-demo.local để dễ xoá
--  (xem sql/supabase-seed-demo-cleanup.sql).
--
--  Chạy lại nhiều lần sẽ lỗi trùng email → hãy chạy cleanup trước khi seed lại.
-- ============================================================

-- pgcrypto để băm mật khẩu (Supabase thường có sẵn ở schema extensions)
create extension if not exists pgcrypto with schema extensions;

-- ---------- Hàm phụ tạm thời: tạo 1 tài khoản demo ----------
create or replace function pg_temp.seed_demo_user(
  p_name text, p_avatar text, p_grade int, p_role text,
  p_created timestamptz, p_email text
) returns void
language plpgsql
set search_path = public, extensions, auth
as $fn$
declare
  v_id  uuid := gen_random_uuid();
  v_xp  int;
begin
  -- Chèn vào auth.users → trigger handle_new_user() tự tạo profiles + progress
  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, created_at, updated_at,
    raw_app_meta_data, raw_user_meta_data,
    confirmation_token, recovery_token, email_change_token_new, email_change
  ) values (
    '00000000-0000-0000-0000-000000000000', v_id, 'authenticated', 'authenticated',
    p_email, crypt('Demo@123456', gen_salt('bf')),
    p_created, p_created, p_created,
    '{"provider":"email","providers":["email"]}',
    jsonb_build_object('name', p_name, 'avatar', p_avatar, 'grade', p_grade, 'demo', true),
    '', '', '', ''
  );

  -- Chỉnh lại mốc thời gian + gán đúng vai trò (postgres bỏ qua lock_role)
  update public.profiles
     set created_at = p_created,
         last_login = p_created + (random() * (now() - p_created)),
         role       = p_role
   where id = v_id;

  -- Tiến độ "trông thật" — chỉ cho học sinh
  if p_role = 'student' then
    v_xp := 80 + floor(random() * 8200)::int;

    update public.progress
       set xp          = v_xp,
           coins       = floor(v_xp / 12)::int,
           level       = least(30, 1 + floor(v_xp / 300)::int),
           streak_days = floor(random() * 40)::int,
           last_active = current_date - floor(random() * 6)::int,
           updated_at  = p_created + (random() * (now() - p_created))
     where user_id = v_id;

    -- Một số bài đã hoàn thành (0–15 bài)
    insert into public.lesson_progress (user_id, lesson_id, status, best_score, updated_at)
    select v_id, 'bai-' || g, 'completed', 60 + floor(random() * 41)::int,
           p_created + (random() * (now() - p_created))
    from generate_series(1, floor(random() * 16)::int) g
    on conflict (user_id, lesson_id) do nothing;

    -- ~16% học sinh có hoạt động HÔM NAY (để "hoạt động hôm nay" / "XP hôm nay" > 0)
    if random() < 0.16 then
      insert into public.activity_log (user_id, text, xp_delta, created_at)
      values (v_id, 'Hoàn thành bài luyện tập', 10 + floor(random() * 40)::int,
              now() - (random() * 10 || ' hours')::interval);
    end if;

    -- Vài hoạt động cũ (0–3 dòng)
    insert into public.activity_log (user_id, text, xp_delta, created_at)
    select v_id,
           (array['Mở khóa huy hiệu', 'Hoàn thành bài học', 'Thắng 1 ván game', 'Đạt chuỗi ngày mới'])
             [1 + floor(random() * 4)::int],
           5 + floor(random() * 45)::int,
           p_created + (random() * (now() - p_created))
    from generate_series(1, floor(random() * 4)::int);
  end if;
end;
$fn$;

-- ---------- Vòng lặp sinh dữ liệu ----------
do $$
declare
  ho      text[] := array['Nguyễn','Trần','Lê','Phạm','Hoàng','Huỳnh','Phan','Vũ','Võ','Đặng',
                          'Bùi','Đỗ','Hồ','Ngô','Dương','Lý','Đinh','Tô','Cao','Mai'];
  dem_nam text[] := array['Văn','Hữu','Đức','Minh','Quang','Thành','Xuân','Bá','Ngọc','Gia',
                          'Tuấn','Nhật','Đăng','Hoàng','Trọng'];
  dem_nu  text[] := array['Thị','Ngọc','Thu','Thanh','Kim','Hồng','Mỹ','Diệu','Phương','Quỳnh',
                          'Bảo','Gia','Hà','Khánh','Yến'];
  ten_nam text[] := array['An','Bình','Cường','Dũng','Huy','Khoa','Long','Minh','Nam','Phúc',
                          'Quân','Sơn','Tài','Thắng','Việt','Bảo','Đạt','Kiên','Lâm','Tuấn'];
  ten_nu  text[] := array['An','Chi','Dung','Hà','Hân','Hoa','Lan','Linh','Mai','Ngân',
                          'Nhi','Oanh','Phương','Quyên','Thảo','Trang','Vy','Yến','Ánh','Châu'];
  av_nam  text[] := array['👦','🧒','🧑','👨‍🎓','🦸'];
  av_nu   text[] := array['👧','🧒','🧚','👩‍🎓','🦸‍♀️'];

  n_students int := 783;   -- ⬅️ số học sinh (lẻ, không tròn) — TẤT CẢ đều role student
  n_teachers int := 0;     -- ⬅️ không tạo giáo viên
  n_parents  int := 0;     -- ⬅️ không tạo phụ huynh

  i        int;
  is_nu    boolean;
  v_name   text;
  v_av     text;
  v_grade  int;
  v_created timestamptz;
begin
  -- HỌC SINH ------------------------------------------------
  for i in 1..n_students loop
    is_nu := random() < 0.5;
    if is_nu then
      v_name := ho[1 + floor(random() * array_length(ho,1))::int] || ' '
             || dem_nu[1 + floor(random() * array_length(dem_nu,1))::int] || ' '
             || ten_nu[1 + floor(random() * array_length(ten_nu,1))::int];
      v_av := av_nu[1 + floor(random() * array_length(av_nu,1))::int];
    else
      v_name := ho[1 + floor(random() * array_length(ho,1))::int] || ' '
             || dem_nam[1 + floor(random() * array_length(dem_nam,1))::int] || ' '
             || ten_nam[1 + floor(random() * array_length(ten_nam,1))::int];
      v_av := av_nam[1 + floor(random() * array_length(av_nam,1))::int];
    end if;
    v_grade   := 1 + floor(random() * 5)::int;
    v_created := now() - (random() * 180 || ' days')::interval
                       - (random() * 24  || ' hours')::interval;
    perform pg_temp.seed_demo_user(v_name, v_av, v_grade, 'student', v_created,
                                   'hs' || i || '@toanvui-demo.local');
  end loop;

  -- GIÁO VIÊN -----------------------------------------------
  for i in 1..n_teachers loop
    is_nu  := random() < 0.6;
    v_name := (case when is_nu then 'Cô ' else 'Thầy ' end)
           || ho[1 + floor(random() * array_length(ho,1))::int] || ' '
           || (case when is_nu then ten_nu[1 + floor(random() * array_length(ten_nu,1))::int]
                              else ten_nam[1 + floor(random() * array_length(ten_nam,1))::int] end);
    v_av := case when is_nu then '👩‍🏫' else '👨‍🏫' end;
    v_created := now() - (random() * 300 || ' days')::interval;
    perform pg_temp.seed_demo_user(v_name, v_av, 0, 'teacher', v_created,
                                   'gv' || i || '@toanvui-demo.local');
  end loop;

  -- PHỤ HUYNH -----------------------------------------------
  for i in 1..n_parents loop
    is_nu  := random() < 0.5;
    v_name := (case when is_nu then 'Chị ' else 'Anh ' end)
           || ho[1 + floor(random() * array_length(ho,1))::int] || ' '
           || (case when is_nu then ten_nu[1 + floor(random() * array_length(ten_nu,1))::int]
                              else ten_nam[1 + floor(random() * array_length(ten_nam,1))::int] end);
    v_av := case when is_nu then '👩' else '👨' end;
    v_created := now() - (random() * 250 || ' days')::interval;
    perform pg_temp.seed_demo_user(v_name, v_av, 0, 'parent', v_created,
                                   'ph' || i || '@toanvui-demo.local');
  end loop;

  raise notice 'Seed DEMO xong: % học sinh, % giáo viên, % phụ huynh.',
               n_students, n_teachers, n_parents;
end $$;

-- Dọn hàm tạm
drop function if exists pg_temp.seed_demo_user(text, text, int, text, timestamptz, text);

-- ---------- Lượt chơi mỗi game (số lẻ, trông thật) ----------
insert into public.game_plays (game, plays) values
  ('Đua xe Toán học',      4213),
  ('Kho báu phép tính',    3187),
  ('Bắn bóng số học',      2956),
  ('Rung chuông vàng',     5074),
  ('Xây lâu đài Toán học', 1892)
on conflict (game) do update set plays = excluded.plays, updated_at = now();

-- Kiểm tra nhanh sau khi chạy:
--   select role, count(*) from public.profiles group by role;
--   select * from public.platform_stats;
