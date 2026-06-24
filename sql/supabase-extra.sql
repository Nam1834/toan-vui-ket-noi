-- ============================================================
--  TOÁN VUI KẾT NỐI — Số liệu nền tảng công khai (trang chủ)
--  Chạy: SQL Editor → Run. (Chạy sau supabase-schema.sql)
-- ============================================================

create or replace view public.platform_stats as
  select
    (select count(*) from public.profiles where role = 'student')                  as students,
    (select count(*) from public.lesson_progress lp
       join public.profiles p on p.id = lp.user_id
       where lp.status = 'completed' and p.role = 'student')                        as lessons_completed,
    (select coalesce(sum(pr.xp), 0) from public.progress pr
       join public.profiles p on p.id = pr.user_id
       where p.role = 'student')                                                    as total_xp;

grant select on public.platform_stats to anon, authenticated;

-- ============================================================
--  LƯỢT CHƠI MỖI GAME (toàn hệ thống) — bảng đếm + RPC tăng nguyên tử
--  Mỗi lần hoàn thành 1 ván game, client gọi RPC bump_game_play() để +1.
--  Trang chủ (kể cả khách) đọc được số lượt; client KHÔNG tự sửa được số.
-- ============================================================
create table if not exists public.game_plays (
  game       text primary key,
  plays      bigint      default 0,
  updated_at timestamptz default now()
);

alter table public.game_plays enable row level security;

-- Ai cũng XEM được (phục vụ trang chủ công khai)
drop policy if exists "game_plays_read" on public.game_plays;
create policy "game_plays_read" on public.game_plays for select using (true);
-- (KHÔNG cấp policy insert/update → client không tự ghi; chỉ tăng qua RPC bên dưới)

-- Tăng lượt chơi 1 cách nguyên tử (gọi khi hoàn thành 1 ván game)
create or replace function public.bump_game_play(p_game text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if p_game is null or length(trim(p_game)) = 0 then return; end if;
  insert into public.game_plays (game, plays, updated_at)
    values (trim(p_game), 1, now())
  on conflict (game) do update
    set plays = public.game_plays.plays + 1, updated_at = now();
end;
$$;
grant execute on function public.bump_game_play(text) to authenticated;
