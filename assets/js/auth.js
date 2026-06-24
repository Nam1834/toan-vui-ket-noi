// ============================================================
//  TVKN — Thư viện Auth + dữ liệu dùng chung (Supabase)
//  Cần nạp trước: supabase-js (CDN) → supabase-config.js → auth.js
// ============================================================
window.TVKN = (function () {

  function ensure() {
    if (!sb) { throw new Error('Supabase chưa cấu hình (xem supabase-config.js)'); }
  }

  // ---------- ĐĂNG KÝ ----------
  // info = { email, password, name, avatar, grade }
  async function signUp(info) {
    ensure();
    const { data, error } = await sb.auth.signUp({
      email: info.email,
      password: info.password,
      options: { data: { name: info.name, avatar: info.avatar || '👧', grade: info.grade || 1 } }
    });
    if (error) throw error;
    return data;
  }

  // ---------- ĐĂNG NHẬP ----------
  async function signIn(email, password) {
    ensure();
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    // cập nhật last_login
    if (data.user) {
      await sb.from('profiles').update({ last_login: new Date().toISOString() }).eq('id', data.user.id);
    }
    return data;
  }

  // ---------- ĐĂNG XUẤT ----------
  async function signOut() {
    if (sb) await sb.auth.signOut();
    window.location.replace('dang-nhap.html');
  }

  // ---------- LẤY USER HIỆN TẠI ----------
  async function getUser() {
    ensure();
    const { data } = await sb.auth.getUser();
    return data ? data.user : null;
  }

  // ---------- LẤY HỒ SƠ ----------
  async function getProfile() {
    ensure();
    const user = await getUser();
    if (!user) return null;
    const { data } = await sb.from('profiles').select('*').eq('id', user.id).single();
    return data;
  }

  // ---------- CHẶN TRANG: chưa đăng nhập → về trang đăng nhập ----------
  // Trả về profile nếu đã đăng nhập.
  async function requireAuth() {
    if (!sb) { window.location.replace('dang-nhap.html'); return null; }
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { window.location.replace('dang-nhap.html'); return null; }
    return await getProfile();
  }

  // ---------- ÁP DỤNG TÊN/AVATAR người đăng nhập lên giao diện ----------
  function applyToDOM(profile) {
    if (!profile) return;
    const FULL = 'Nguyễn Minh Anh', SHORT = 'Minh Anh';
    const name = profile.name, short = profile.name;
    try {
      const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      const nodes = []; let n;
      while ((n = w.nextNode())) nodes.push(n);
      nodes.forEach(function (nd) {
        if (nd.nodeValue.indexOf('Minh Anh') >= 0) {
          nd.nodeValue = nd.nodeValue.split(FULL).join(name).split(SHORT).join(short);
        }
      });
    } catch (e) {}
    if (profile.avatar) {
      document.querySelectorAll('.avatar,.student-avatar,.profile-avatar,.pf-avatar,.profile-pic,.user-avatar')
        .forEach(function (el) {
          const t = (el.textContent || '').trim();
          if (t.length <= 4 && t !== '') el.textContent = profile.avatar;
        });
    }
  }

  // ---------- Đổ dữ liệu thật vào các phần tử [data-bind] ----------
  // Hỗ trợ key: name, avatar, grade, xp, level, streak, coins
  function bindCommon(profile, progress) {
    const map = {
      name:   profile ? profile.name : '',
      avatar: profile ? profile.avatar : '👧',
      grade:  profile ? profile.grade : 1,
      xp:     progress ? progress.xp : 0,
      level:  progress ? progress.level : 1,
      streak: progress ? progress.streak_days : 0,
      coins:  progress ? progress.coins : 0
    };
    document.querySelectorAll('[data-bind]').forEach(function (el) {
      const k = el.getAttribute('data-bind');
      if (k in map && map[k] != null) el.textContent = map[k];
    });
  }

  // ---------- TRANG HỌC: BẮT BUỘC đăng nhập ----------
  // Chưa đăng nhập → tự chuyển về trang đăng nhập. Đã login → áp tên/avatar/tiến độ thật.
  async function guardPage() {
    const profile = await requireAuth();   // requireAuth tự chuyển về dang-nhap.html nếu chưa login
    if (!profile) return null;
    applyToDOM(profile);
    let progress = null;
    try { progress = await getProgress(); } catch (e) {}
    bindCommon(profile, progress);
    return { profile: profile, progress: progress };
  }

  // ---------- TRANG CÔNG KHAI (trang chủ): KHÔNG bắt buộc đăng nhập ----------
  // Đã login → áp tên/avatar/tiến độ thật và trả về { profile, progress }.
  // Khách     → trả về null và KHÔNG chuyển trang (để trang tự hiện giao diện khách).
  async function applyProfile() {
    if (!sb) return null;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return null;
    const profile = await getProfile();
    applyToDOM(profile);
    let progress = null;
    try { progress = await getProgress(); } catch (e) {}
    bindCommon(profile, progress);
    return { profile: profile, progress: progress };
  }

  // ---------- Kiểm tra nhanh: đã đăng nhập chưa? (không chuyển trang) ----------
  async function isLoggedIn() {
    if (!sb) return false;
    const { data: { session } } = await sb.auth.getSession();
    return !!session;
  }

  // ---------- Chặn trang ADMIN: chỉ role='admin' mới vào ----------
  async function requireAdmin() {
    if (!sb) { window.location.replace('dang-nhap.html'); return null; }
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { window.location.replace('dang-nhap.html'); return null; }
    const profile = await getProfile();
    if (!profile || profile.role !== 'admin') {
      alert('⛔ Trang quản trị chỉ dành cho quản trị viên.');
      window.location.replace('index.html');
      return null;
    }
    return profile;
  }

  // ---------- TIẾN ĐỘ ----------
  async function getProgress() {
    ensure();
    const user = await getUser();
    if (!user) return null;
    const { data } = await sb.from('progress').select('*').eq('user_id', user.id).single();
    return data;
  }

  // Cộng XP (+ xu) + ghi nhật ký hoạt động
  async function addXp(amount, activityText, coins) {
    ensure();
    const user = await getUser();
    if (!user) return;
    const prog = await getProgress();
    const newXp = (prog ? prog.xp : 0) + (amount || 0);
    const newCoins = (prog ? prog.coins : 0) + (coins || 0);
    await sb.from('progress').update({
      xp: newXp,
      coins: newCoins,
      level: Math.floor(newXp / 1000) + 1,
      updated_at: new Date().toISOString()
    }).eq('user_id', user.id);
    if (activityText) {
      await sb.from('activity_log').insert({ user_id: user.id, text: activityText, xp_delta: amount || 0 });
    }
    return newXp;
  }

  // Tăng chuỗi ngày học (gọi khi học sinh hoạt động trong ngày)
  async function bumpStreak() {
    ensure();
    const user = await getUser();
    if (!user) return 0;
    const prog = await getProgress();
    const today = new Date().toISOString().slice(0, 10);
    let streak = 1;
    if (prog && prog.last_active) {
      if (prog.last_active === today) return prog.streak_days;       // đã tính hôm nay
      const diff = Math.round((new Date(today) - new Date(prog.last_active)) / 86400000);
      streak = diff === 1 ? (prog.streak_days || 0) + 1 : 1;          // liền ngày: +1, đứt: reset
    }
    await sb.from('progress').update({ streak_days: streak, last_active: today }).eq('user_id', user.id);
    return streak;
  }

  // Lưu trạng thái 1 bài học
  async function setLesson(lessonId, status, score) {
    ensure();
    const user = await getUser();
    if (!user) return;
    await sb.from('lesson_progress').upsert(
      { user_id: user.id, lesson_id: lessonId, status: status, best_score: score || 0, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,lesson_id' }
    );
  }

  // ---------- HUY HIỆU: danh mục + điều kiện tự động ----------
  const BADGES = [
    { id: 'be-dem-so',        name: 'Bé Đếm Số',          icon: '🔢', desc: 'Hoàn thành bài học đầu tiên',     cond: function (s) { return s.completedLessons >= 1; } },
    { id: 'cham-hoc',         name: 'Chăm Học',           icon: '📘', desc: 'Hoàn thành 3 bài học',            cond: function (s) { return s.completedLessons >= 3; } },
    { id: 'sieng-nang',       name: 'Siêng Năng',         icon: '📚', desc: 'Hoàn thành 6 bài học',            cond: function (s) { return s.completedLessons >= 6; } },
    { id: 'hoan-thanh-chang', name: 'Hoàn Thành Chặng',   icon: '🎓', desc: 'Hoàn thành 10 bài học',           cond: function (s) { return s.completedLessons >= 10; } },
    { id: 'cham-chi-7',       name: 'Chăm Chỉ 7 Ngày',    icon: '🔥', desc: 'Học liên tục 7 ngày',             cond: function (s) { return s.streak >= 7; } },
    { id: 'cham-chi-14',      name: 'Chăm Chỉ 14 Ngày',   icon: '🔥', desc: 'Học liên tục 14 ngày',            cond: function (s) { return s.streak >= 14; } },
    { id: 'cham-chi-30',      name: 'Siêu Kiên Trì',      icon: '👑', desc: 'Học liên tục 30 ngày',            cond: function (s) { return s.streak >= 30; } },
    { id: 'suu-tam-xp',       name: 'Nhà Sưu Tầm XP',     icon: '⭐', desc: 'Đạt 500 XP',                      cond: function (s) { return s.xp >= 500; } },
    { id: 'cao-thu-toan',     name: 'Cao Thủ Toán',       icon: '🏆', desc: 'Đạt 1000 XP',                     cond: function (s) { return s.xp >= 1000; } },
    { id: 'game-thu',         name: 'Game Thủ',           icon: '🎮', desc: 'Hoàn thành 1 trò chơi',           cond: function (s) { return s.gamesWon >= 1; } },
    { id: 'cao-thu-game',     name: 'Cao Thủ Game',       icon: '🕹️', desc: 'Hoàn thành 10 lượt chơi',         cond: function (s) { return s.gamesWon >= 10; } }
  ];

  // Kiểm tra & trao huy hiệu mới đạt được (gọi sau khi học/chơi xong)
  async function checkBadges() {
    ensure();
    const user = await getUser();
    if (!user) return [];
    const prog = await getProgress();
    const lessons = await getLessons();
    const completedLessons = lessons.filter(function (l) { return l.status === 'completed'; }).length;
    var gamesWon = 0;
    try {
      const r = await sb.from('activity_log').select('*', { count: 'exact', head: true }).eq('user_id', user.id).like('text', '🎮%');
      gamesWon = r.count || 0;
    } catch (e) {}
    const stats = { completedLessons: completedLessons, streak: prog ? prog.streak_days : 0, xp: prog ? prog.xp : 0, gamesWon: gamesWon };
    const have = new Set((await getBadges()).map(function (b) { return b.badge_id; }));
    const newly = BADGES.filter(function (b) { return !have.has(b.id) && b.cond(stats); });
    if (newly.length) {
      await sb.from('user_badges').upsert(newly.map(function (b) { return { user_id: user.id, badge_id: b.id }; }), { onConflict: 'user_id,badge_id' });
    }
    return newly; // [{id,name,icon,desc}]
  }

  // Ghi 1 lượt chơi game thắng (cộng XP + xu, log có dấu 🎮, kiểm huy hiệu)
  async function recordGameWin(gameName, xpReward, coinReward) {
    ensure();
    await bumpStreak();
    await addXp(xpReward || 0, '🎮 ' + gameName + ' — hoàn thành', coinReward || 0);
    return await checkBadges();
  }

  // ---------- LỊCH SỬ HOẠT ĐỘNG ----------
  async function getActivity(limit) {
    ensure();
    const user = await getUser();
    if (!user) return [];
    const { data } = await sb.from('activity_log')
      .select('text,xp_delta,created_at').eq('user_id', user.id)
      .order('created_at', { ascending: false }).limit(limit || 10);
    return data || [];
  }

  // ---------- TIẾN ĐỘ TẤT CẢ BÀI ----------
  async function getLessons() {
    ensure();
    const user = await getUser();
    if (!user) return [];
    const { data } = await sb.from('lesson_progress')
      .select('lesson_id,status,best_score').eq('user_id', user.id);
    return data || [];
  }

  // ---------- HUY HIỆU ĐÃ MỞ ----------
  async function getBadges() {
    ensure();
    const user = await getUser();
    if (!user) return [];
    const { data } = await sb.from('user_badges')
      .select('badge_id,unlocked_at').eq('user_id', user.id);
    return data || [];
  }

  // ---------- BẢNG XẾP HẠNG (mọi người) ----------
  async function getLeaderboard(limit) {
    ensure();
    const { data } = await sb.from('leaderboard').select('*').order('xp', { ascending: false }).limit(limit || 20);
    return data || [];
  }

  // ---------- HẠNG CỦA TÔI (đếm số người XP cao hơn) ----------
  async function getMyRank() {
    ensure();
    const prog = await getProgress();
    const myXp = prog ? prog.xp : 0;
    const { count } = await sb.from('leaderboard').select('*', { count: 'exact', head: true }).gt('xp', myXp);
    return (count || 0) + 1;
  }

  // ---------- SO SÁNH COHORT (lâu vs mới) ----------
  async function getCohortStats() {
    ensure();
    const { data } = await sb.from('cohort_stats').select('*');
    return data || [];
  }

  // ---------- SỐ LIỆU NỀN TẢNG (công khai, cho trang chủ) ----------
  async function platformStats() {
    ensure();
    const { data } = await sb.from('platform_stats').select('*');
    return (data && data[0]) ? data[0] : null;
  }

  // ---------- ADMIN: tổng quan dashboard ----------
  async function adminOverview() {
    ensure();
    const { data, error } = await sb.rpc('admin_overview');
    if (error) throw error;
    return data;
  }

  // ---------- ADMIN: danh sách người dùng ----------
  async function adminUsers() {
    ensure();
    const { data, error } = await sb.rpc('admin_user_list');
    if (error) throw error;
    return data || [];
  }

  return {
    configured: typeof TVKN_CONFIGURED !== 'undefined' ? TVKN_CONFIGURED : false,
    signUp, signIn, signOut, getUser, getProfile,
    requireAuth, applyToDOM, guardPage, applyProfile, isLoggedIn, requireAdmin, bindCommon,
    getProgress, addXp, bumpStreak, setLesson,
    getActivity, getLessons, getBadges, getLeaderboard, getMyRank, getCohortStats,
    adminOverview, adminUsers,
    checkBadges, recordGameWin, platformStats, badges: BADGES
  };
})();
