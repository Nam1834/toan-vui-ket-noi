-- ============================================================
--  TOÁN VUI KẾT NỐI — CHAT PHỤ HUYNH ↔ CON (1-1)
--  Dùng chung KHUNG CHAT NỔI (chat.js) như chat lớp, nhưng kênh RIÊNG
--  theo quan hệ parent_links (KHÔNG cần lớp học).
--
--  ⚠️ CHẠY SAU: supabase-parent.sql (cần bảng parent_links).
--  Idempotent — chạy lại an toàn. (Supabase → SQL Editor → Run)
--  Sau khi chạy: bảng family_messages tự được thêm vào realtime.
-- ============================================================

-- ---------- 1. BẢNG TIN NHẮN GIA ĐÌNH ----------
--  1 cuộc trò chuyện = 1 cặp (parent_id, child_id). sender_id là người gửi (PH hoặc con).
create table if not exists public.family_messages (
  id          bigint generated always as identity primary key,
  parent_id   uuid not null references auth.users(id) on delete cascade,
  child_id    uuid not null references auth.users(id) on delete cascade,
  sender_id   uuid not null references auth.users(id) on delete cascade,
  body        text not null check (char_length(btrim(body)) between 1 and 2000),
  created_at  timestamptz not null default now()
);
alter table public.family_messages enable row level security;
alter table public.family_messages replica identity full;   -- realtime kèm dữ liệu dòng

create index if not exists fam_msg_pair_idx   on public.family_messages(parent_id, child_id, id);
create index if not exists fam_msg_parent_idx on public.family_messages(parent_id, id);
create index if not exists fam_msg_child_idx  on public.family_messages(child_id, id);

-- ---------- 2. HÀM KIỂM TRA QUYỀN (security definer → tránh đệ quy RLS) ----------
--  Được phép xem/gửi trong cặp (parent,child) khi: mình là 1 trong 2 & cặp có liên kết thật.
create or replace function public.can_family_chat(p_parent uuid, p_child uuid)
returns boolean language sql security definer stable set search_path = public
as $$
  select auth.uid() in (p_parent, p_child)
     and exists (select 1 from public.parent_links l
                  where l.parent_id = p_parent and l.child_id = p_child);
$$;

-- ---------- 3. RLS ----------
drop policy if exists "fam_select" on public.family_messages;
create policy "fam_select" on public.family_messages for select
  using ( public.can_family_chat(parent_id, child_id) );

drop policy if exists "fam_insert" on public.family_messages;
create policy "fam_insert" on public.family_messages for insert
  with check ( sender_id = auth.uid() and public.can_family_chat(parent_id, child_id) );

drop policy if exists "fam_delete" on public.family_messages;
create policy "fam_delete" on public.family_messages for delete
  using ( sender_id = auth.uid() );

-- ---------- 4. RPC: DANH SÁCH LUỒNG GIA ĐÌNH của người đang đăng nhập ----------
--  • Nếu là PHỤ HUYNH → liệt kê các CON.
--  • Nếu là CON       → liệt kê các PHỤ HUYNH đã liên kết.
--  Trả kèm parent_id/child_id để client biết gửi vào cặp nào.
create or replace function public.list_family_threads()
returns table(peer_id uuid, peer_name text, peer_avatar text, parent_id uuid, child_id uuid, i_am text)
language sql security definer stable set search_path = public
as $$
  select p.id, p.name, p.avatar, l.parent_id, l.child_id, 'parent'::text
    from public.parent_links l
    join public.profiles p on p.id = l.child_id
   where l.parent_id = auth.uid()
  union all
  select p.id, p.name, p.avatar, l.parent_id, l.child_id, 'child'::text
    from public.parent_links l
    join public.profiles p on p.id = l.parent_id
   where l.child_id = auth.uid();
$$;

-- ---------- 5. QUYỀN ----------
grant select, insert, delete on public.family_messages to authenticated;
revoke execute on function public.can_family_chat(uuid, uuid) from public;
revoke execute on function public.list_family_threads()       from public;
grant  execute on function public.can_family_chat(uuid, uuid) to authenticated;
grant  execute on function public.list_family_threads()       to authenticated;

-- ---------- 6. BẬT REALTIME cho family_messages (idempotent) ----------
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
     where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'family_messages'
  ) then
    alter publication supabase_realtime add table public.family_messages;
  end if;
end $$;

-- Xong! Kiểm tra nhanh (đăng nhập PH hoặc HS):
--   select * from public.list_family_threads();
