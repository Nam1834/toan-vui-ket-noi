-- ============================================================
--  TOÁN VUI KẾT NỐI — SEED TÀI KHOẢN DEMO CHO KỊCH BẢN HỘI ĐỒNG
-- ------------------------------------------------------------
--  Tạo sẵn 4 tài khoản ĐĂNG NHẬP ĐƯỢC + liên kết phụ huynh–con:
--    • HS A (lớp 5)   hsa@toanvui-demo.local
--    • HS B (lớp 5)   hsb@toanvui-demo.local
--    • PH A (parent)  pha@toanvui-demo.local   -> đã liên kết HS A
--    • PH B (parent)  phb@toanvui-demo.local   -> đã liên kết HS B
--  MẬT KHẨU TẤT CẢ:  Demo@123456
--
--  Cách dùng: Supabase → SQL Editor → dán cả file → Run.
--  Chạy lại nhiều lần được (tự xoá bản cũ cùng email trước khi tạo).
--  ⚠️ CHỈ chạy trên project demo. Xoá nhanh: xem cuối file.
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

-- 1) Dọn bản cũ (để chạy lại không lỗi trùng email). Xoá auth.users sẽ
--    cascade sang profiles / progress / parent_links.
delete from auth.users where email in (
  'hsa@toanvui-demo.local','hsb@toanvui-demo.local',
  'pha@toanvui-demo.local','phb@toanvui-demo.local'
);

-- 2) Hàm tạm tạo 1 tài khoản (trigger handle_new_user tự tạo profiles + progress).
create or replace function pg_temp.mk_demo_user(
  p_email text, p_name text, p_avatar text, p_grade int, p_role text
) returns uuid
language plpgsql
set search_path = public, extensions, auth
as $fn$
declare v_id uuid := gen_random_uuid();
begin
  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, created_at, updated_at,
    raw_app_meta_data, raw_user_meta_data,
    confirmation_token, recovery_token, email_change_token_new, email_change
  ) values (
    '00000000-0000-0000-0000-000000000000', v_id, 'authenticated', 'authenticated',
    p_email, crypt('Demo@123456', gen_salt('bf')),
    now(), now(), now(),
    '{"provider":"email","providers":["email"]}',
    jsonb_build_object('name', p_name, 'avatar', p_avatar, 'grade', p_grade, 'role', p_role, 'demo', true),
    '', '', '', ''
  );

  -- Tạo identity email để đăng nhập mật khẩu (bọc an toàn theo phiên bản Supabase).
  begin
    insert into auth.identities (
      id, provider_id, user_id, identity_data, provider,
      last_sign_in_at, created_at, updated_at
    ) values (
      gen_random_uuid(), v_id::text, v_id,
      jsonb_build_object('sub', v_id::text, 'email', p_email),
      'email', now(), now(), now()
    );
  exception when others then
    raise notice 'Bỏ qua auth.identities (phiên bản khác): %', sqlerrm;
  end;

  return v_id;
end $fn$;

-- 3) Tạo 4 tài khoản + liên kết phụ huynh–con.
do $$
declare a uuid; b uuid; pa uuid; pb uuid;
begin
  a  := pg_temp.mk_demo_user('hsa@toanvui-demo.local', 'Học sinh A', '🦁', 5, 'student');
  b  := pg_temp.mk_demo_user('hsb@toanvui-demo.local', 'Học sinh B', '🐯', 5, 'student');
  pa := pg_temp.mk_demo_user('pha@toanvui-demo.local', 'Phụ huynh A', '👩', null, 'parent');
  pb := pg_temp.mk_demo_user('phb@toanvui-demo.local', 'Phụ huynh B', '👨', null, 'parent');

  insert into public.parent_links(parent_id, child_id) values (pa, a) on conflict do nothing;
  insert into public.parent_links(parent_id, child_id) values (pb, b) on conflict do nothing;

  raise notice '✅ Đã tạo: HS A=%, HS B=%, PH A=%, PH B=% (mật khẩu: Demo@123456)', a, b, pa, pb;
end $$;

-- 4) Kiểm tra nhanh (tuỳ chọn):
--    select email, (raw_user_meta_data->>'name') as ten from auth.users
--      where email like '%@toanvui-demo.local' order by email;
--    select p.name, pl.* from public.parent_links pl join public.profiles p on p.id=pl.child_id;

-- ------------------------------------------------------------
--  XOÁ các tài khoản demo này khi xong:
--  delete from auth.users where email in (
--    'hsa@toanvui-demo.local','hsb@toanvui-demo.local',
--    'pha@toanvui-demo.local','phb@toanvui-demo.local');
-- ------------------------------------------------------------
