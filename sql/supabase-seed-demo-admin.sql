-- ============================================================
--  TOÁN VUI KẾT NỐI — TẠO TÀI KHOẢN ADMIN TẠM (chụp Bảng quản trị)
-- ------------------------------------------------------------
--  Email:    admin-demo@toanvui-demo.local
--  Mật khẩu: Demo@123456
--  ⚠️ TẠM THỜI — xong việc thì chạy khối "XOÁ" ở cuối file.
--  Cách dùng: Supabase → SQL Editor → dán cả file → Run.
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

-- 1) Đưa email vào danh sách admin TRƯỚC (để trigger tự gán role = admin).
insert into public.admin_emails (email) values ('admin-demo@toanvui-demo.local')
  on conflict do nothing;

-- 2) Dọn bản cũ cùng email (chạy lại được).
delete from auth.users where email = 'admin-demo@toanvui-demo.local';

-- 3) Tạo tài khoản admin.
do $$
declare v_id uuid := gen_random_uuid();
begin
  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, created_at, updated_at,
    raw_app_meta_data, raw_user_meta_data,
    confirmation_token, recovery_token, email_change_token_new, email_change
  ) values (
    '00000000-0000-0000-0000-000000000000', v_id, 'authenticated', 'authenticated',
    'admin-demo@toanvui-demo.local', crypt('Demo@123456', gen_salt('bf')),
    now(), now(), now(),
    '{"provider":"email","providers":["email"]}',
    jsonb_build_object('name', 'Quản trị Demo', 'avatar', '🛡️', 'demo', true),
    '', '', '', ''
  );

  begin
    insert into auth.identities (
      id, provider_id, user_id, identity_data, provider,
      last_sign_in_at, created_at, updated_at
    ) values (
      gen_random_uuid(), v_id::text, v_id,
      jsonb_build_object('sub', v_id::text, 'email', 'admin-demo@toanvui-demo.local'),
      'email', now(), now(), now()
    );
  exception when others then
    raise notice 'Bỏ qua auth.identities: %', sqlerrm;
  end;

  -- Đảm bảo role = admin (phòng khi trigger chạy trước khi email vào admin_emails).
  update public.profiles set role = 'admin' where id = v_id;

  raise notice '✅ Admin demo: admin-demo@toanvui-demo.local / Demo@123456 (id=%)', v_id;
end $$;

-- ------------------------------------------------------------
--  🔴 XOÁ TÀI KHOẢN ADMIN TẠM KHI XONG (chạy riêng 2 dòng này):
--  delete from auth.users   where email = 'admin-demo@toanvui-demo.local';
--  delete from public.admin_emails where email = 'admin-demo@toanvui-demo.local';
-- ------------------------------------------------------------
