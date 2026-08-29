-- ============================================================
--  TOÁN VUI KẾT NỐI — XOÁ DỮ LIỆU DEMO
--  Xoá toàn bộ tài khoản do supabase-seed-demo.sql tạo ra.
--  Nhận diện qua email @toanvui-demo.local.
--  Cách dùng: Supabase → SQL Editor → dán cả file → Run.
-- ============================================================

-- Xoá auth.users demo → CASCADE tự xoá profiles / progress /
-- lesson_progress / activity_log / user_badges liên quan.
delete from auth.users
where email like '%@toanvui-demo.local';

-- (Tuỳ chọn) trả lượt chơi các game về 0 — bỏ dấu -- để bật:
-- update public.game_plays set plays = 0, updated_at = now();

-- Kiểm tra: phải trả về 0
--   select count(*) from public.profiles p
--   join auth.users u on u.id = p.id
--   where u.email like '%@toanvui-demo.local';
