// ============================================================
//  SHELL — header dùng chung KHÔNG tải lại (app.html + iframe)
//  • Trong iframe: ẩn header/footer riêng của trang con; link "trong shell"
//    để iframe tự đi (header đứng yên), link "ngoài shell" (bài học, trò chơi,
//    đăng nhập, admin...) mở toàn màn hình ở cửa sổ trên cùng.
//  • Mở thẳng 1 trang dashboard ở top → tự bọc vào app.html (vào shell).
//  GIỮ ĐỒNG BỘ danh sách SHELL_PAGES này với app.html.
// ============================================================
(function tvknShell() {
  var SHELL_PAGES = ['trang-lop', 'ho-so', 'huy-hieu', 'bang-xep-hang', 'thu-thach', 'tro-choi', 'phu-huynh', 'ai-gia-su'];
  function fileOf(p) { return ((p || '').split('?')[0].split('#')[0].split('/').pop() || '').replace(/\.html$/, ''); }
  var framed = false;
  try { framed = (window.self !== window.top); } catch (e) { framed = true; }
  var here = fileOf(location.pathname) || 'index';

  if (framed) {
    // Lưới an toàn: trang full-screen (bài học, trò chơi, đăng nhập, admin, kết quả...)
    // lỡ bị nạp trong iframe (vd nút game dùng onclick=location.href) → đẩy ra toàn màn hình.
    if (SHELL_PAGES.indexOf(here) < 0) {
      try { window.top.location.href = location.href; } catch (e) { window.location.href = location.href; }
      return;
    }
    // Ẩn header + thanh điều hướng riêng của trang con (shell đã có header chung)
    function hideChrome() {
      if (document.getElementById('tvkn-framed-css')) return;
      var st = document.createElement('style');
      st.id = 'tvkn-framed-css';
      st.textContent = '.header,.footer-nav{display:none!important}';
      (document.head || document.documentElement).appendChild(st);
      document.documentElement.classList.add('tvkn-framed');
    }
    if (document.head) hideChrome(); else document.addEventListener('DOMContentLoaded', hideChrome);

    // Bắt click link: ngoài shell → mở toàn màn hình; trong shell → để iframe tự đi
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      var raw = a.getAttribute('href') || '';
      if (!raw || raw.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(raw)) return;
      var url; try { url = new URL(raw, location.href); } catch (err) { return; }
      if (url.origin !== location.origin) return;             // khác site → để mặc định
      if (SHELL_PAGES.indexOf(fileOf(url.pathname)) < 0) {     // ngoài shell → mở toàn màn hình
        e.preventDefault();
        try { window.top.location.href = url.href; } catch (err2) { window.location.href = url.href; }
      }
      // trang trong shell → không can thiệp, iframe tự điều hướng (header đứng yên)
    }, true);
  } else if (SHELL_PAGES.indexOf(here) >= 0) {
    // Mở thẳng trang dashboard ở top → bọc vào shell để có header chung
    var extra = location.search ? ('&' + location.search.slice(1)) : '';
    location.replace('app.html?page=' + here + extra);
  }
})();

// ============================================================
//  TVKN — Thư viện Auth + dữ liệu dùng chung (Supabase)
//  Cần nạp trước: supabase-js (CDN) → supabase-config.js → auth.js
// ============================================================
window.TVKN = (function () {

  // Chuyển hướng ở cửa sổ TRÊN CÙNG (thoát khỏi iframe shell nếu đang ở trong)
  function topGo(url) {
    try { (window.top || window).location.replace(url); }
    catch (e) { window.location.replace(url); }
  }

  function ensure() {
    if (!sb) { throw new Error('Supabase chưa cấu hình (xem supabase-config.js)'); }
  }

  // ---------- CACHE CHỈ SỐ (xp, huy hiệu, streak...) để VẼ NGAY, tránh nháy 0 ----------
  // Mọi trang nạp auth.js sẽ tự vẽ giá trị lần trước ngay khi tải, rồi đồng bộ dữ liệu thật sau.
  const BIND_CACHE_KEY = 'tvkn_bind_cache';
  function paintCachedBindings() {
    try {
      const c = JSON.parse(localStorage.getItem(BIND_CACHE_KEY) || 'null');
      if (!c) return;
      document.querySelectorAll('[data-bind]').forEach(function (el) {
        const k = el.getAttribute('data-bind');
        if (k in c && c[k] != null) el.textContent = c[k];
      });
    } catch (e) {}
  }
  // Cache mọi chỉ số hiển thị qua [data-bind] để VẼ NGAY ở mọi trang.
  // Lưu ý: trang danh sách bài (trang-lop) đã BỎ data-bind cho completed/total/percent
  // và tự dùng cache grade-aware riêng → ở đây cache cả nhóm này vẫn an toàn,
  // vì các trang còn lại (ho-so/index/phu-huynh) đều tính cùng một nguồn (renderProfile).
  const BIND_STABLE = ['name', 'avatar', 'grade', 'xp', 'level', 'streak', 'coins', 'badges', 'completed', 'total', 'percent', 'nextxp'];
  function saveBindCache(map) {
    try {
      const prev = JSON.parse(localStorage.getItem(BIND_CACHE_KEY) || '{}') || {};
      BIND_STABLE.forEach(function (k) { if (map[k] != null) prev[k] = map[k]; });
      localStorage.setItem(BIND_CACHE_KEY, JSON.stringify(prev));
    } catch (e) {}
  }
  function clearBindCache() {
    try {
      Object.keys(localStorage).forEach(function (k) { if (k.indexOf('tvkn_') === 0) localStorage.removeItem(k); });
    } catch (e) {}
  }
  // Vẽ ngay khi DOM sẵn sàng (trước khi mạng trả về)
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paintCachedBindings);
  else paintCachedBindings();

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
    clearBindCache();   // xóa cache chỉ số để người dùng sau không thấy dữ liệu cũ
    if (sb) await sb.auth.signOut();
    topGo('dang-nhap.html');   // thoát hẳn shell về trang đăng nhập toàn màn hình
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
    if (!sb) { topGo('dang-nhap.html'); return null; }
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { topGo('dang-nhap.html'); return null; }
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
      document.querySelectorAll('.avatar,.student-avatar,.profile-avatar,.pf-avatar,.profile-pic,.user-avatar,.hdr-avatar')
        .forEach(function (el) {
          const t = (el.textContent || '').trim();
          if (t.length <= 4 && t !== '') el.textContent = profile.avatar;
        });
    }
  }

  // Tổng số bài của một LỚP (động). Ưu tiên đếm THẬT từ dữ liệu bài (TVKN_LESSONS)
  // nếu trang có nạp; nếu không (ho-so/index/phu-huynh) thì dùng bảng dự phòng theo lớp.
  const LESSONS_PER_GRADE = { 1: 10, 2: 20, 3: 20, 4: 37, 5: 20 };
  function gradeLessonIds(grade) {
    try {
      if (window.TVKN_LESSONS && TVKN_LESSONS.lessons) {
        const g = Number(grade);
        const ids = Object.keys(TVKN_LESSONS.lessons).filter(function (k) {
          return Number(TVKN_LESSONS.lessons[k].grade) === g;
        });
        if (ids.length) return ids;
      }
    } catch (e) {}
    return null;   // trang này không nạp dữ liệu bài
  }
  function totalLessons(grade) {
    const ids = gradeLessonIds(grade);
    return ids ? ids.length : (LESSONS_PER_GRADE[Number(grade)] || 10);
  }

  // ---------- Đổ dữ liệu thật vào các phần tử [data-bind] ----------
  // Khóa hỗ trợ: name, avatar, grade, xp, level, streak, coins,
  //              badges (số huy hiệu), completed (bài đã xong), total (tổng bài),
  //              percent (% tiến độ, kèm dấu %), nextxp (XP còn thiếu để lên cấp)
  function bindCommon(profile, progress, extra) {
    extra = extra || {};
    const map = {
      name:   profile ? profile.name : '',
      avatar: profile ? profile.avatar : '👧',
      grade:  profile ? profile.grade : 1,
      xp:     progress ? progress.xp : 0,
      level:  progress ? progress.level : 1,
      streak: progress ? progress.streak_days : 0,
      coins:  progress ? progress.coins : 0,
      badges:    extra.badgeCount,
      completed: extra.completed,
      total:     extra.total,
      percent:   (extra.percent != null ? extra.percent + '%' : null),
      nextxp:    extra.nextXp
    };
    document.querySelectorAll('[data-bind]').forEach(function (el) {
      const k = el.getAttribute('data-bind');
      if (k in map && map[k] != null) el.textContent = map[k];
    });
    saveBindCache(map);   // lưu để lần sau vẽ ngay, tránh nháy 0
  }

  // ---------- Dựng toàn bộ hồ sơ + chỉ số thật, đổ lên giao diện ----------
  // Trả về { profile, progress, lessons, badges, stats }.
  async function renderProfile(profile) {
    applyToDOM(profile);
    let progress = null, lessons = [], badges = [];
    // Gọi SONG SONG 3 truy vấn (thay vì nối tiếp) để giảm độ trễ đồng bộ
    try {
      const r = await Promise.all([
        getProgress().catch(function () { return null; }),
        getLessons().catch(function () { return []; }),
        getBadges().catch(function () { return []; })
      ]);
      progress = r[0]; lessons = r[1] || []; badges = r[2] || [];
    } catch (e) {}
    const grade = profile ? (profile.grade || 1) : 1;
    const gradeIds = gradeLessonIds(grade);   // null nếu trang không nạp dữ liệu bài
    const total = totalLessons(grade);
    const completed = (lessons || []).filter(function (l) {
      if (l.status !== 'completed') return false;
      return gradeIds ? (gradeIds.indexOf(l.lesson_id) >= 0) : true;   // lọc đúng lớp nếu biết
    }).length;
    const xp = progress ? (progress.xp || 0) : 0;
    const level = progress ? (progress.level || 1) : 1;
    const stats = {
      badgeCount: (badges || []).length,
      completed:  Math.min(completed, total),
      total:      total,
      percent:    total ? Math.min(100, Math.round(completed / total * 100)) : 0,
      nextXp:     Math.max(0, level * 1000 - xp)   // XP còn thiếu để lên cấp tiếp theo
    };
    bindCommon(profile, progress, stats);
    return { profile: profile, progress: progress, lessons: lessons, badges: badges, stats: stats };
  }

  // ---------- TRANG HỌC: BẮT BUỘC đăng nhập ----------
  // Chưa đăng nhập → tự chuyển về trang đăng nhập. Đã login → áp dữ liệu thật.
  async function guardPage() {
    const profile = await requireAuth();   // requireAuth tự chuyển về dang-nhap.html nếu chưa login
    if (!profile) return null;
    return await renderProfile(profile);
  }

  // ---------- TRANG CÔNG KHAI (trang chủ): KHÔNG bắt buộc đăng nhập ----------
  // Đã login → áp dữ liệu thật và trả về { profile, ... }.
  // Khách     → trả về null và KHÔNG chuyển trang (để trang tự hiện giao diện khách).
  async function applyProfile() {
    if (!sb) return null;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return null;
    const profile = await getProfile();
    return await renderProfile(profile);
  }

  // ---------- Kiểm tra nhanh: đã đăng nhập chưa? (không chuyển trang) ----------
  async function isLoggedIn() {
    if (!sb) return false;
    const { data: { session } } = await sb.auth.getSession();
    return !!session;
  }

  // ---------- Thanh mời đăng nhập khi đang HỌC THỬ ----------
  function showTrialBanner() {
    if (document.getElementById('tvkn-trial')) return;
    var bar = document.createElement('div');
    bar.id = 'tvkn-trial';
    bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9998;background:linear-gradient(135deg,#FF9F43,#FFD93D);color:#3a2a00;padding:11px 16px;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;font-family:inherit;font-weight:600;font-size:14px;box-shadow:0 -6px 20px rgba(0,0,0,.15)';
    bar.innerHTML = '🎁 Em đang <b>học thử miễn phí</b> — đăng nhập để lưu tiến độ &amp; mở khoá tất cả bài học!' +
      '<a href="dang-nhap.html" style="background:#fff;color:#FF7A00;padding:7px 16px;border-radius:999px;font-weight:800;text-decoration:none">Đăng nhập</a>' +
      '<a href="dang-ky.html" style="background:#2D3748;color:#fff;padding:7px 16px;border-radius:999px;font-weight:800;text-decoration:none">Đăng ký miễn phí</a>';
    document.body.appendChild(bar);
  }

  // ---------- TRANG HỌC THỬ: khách xem được (không lưu); đăng nhập thì áp dữ liệu thật ----------
  async function trialPage() {
    if (!sb) { showTrialBanner(); return null; }
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { showTrialBanner(); return null; }   // khách → chế độ học thử
    const profile = await getProfile();
    return await renderProfile(profile);
  }

  // ---------- Chặn trang ADMIN: chỉ role='admin' mới vào ----------
  async function requireAdmin() {
    if (!sb) { topGo('dang-nhap.html'); return null; }
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { topGo('dang-nhap.html'); return null; }
    const profile = await getProfile();
    if (!profile || profile.role !== 'admin') {
      alert('⛔ Trang quản trị chỉ dành cho quản trị viên.');
      topGo('index.html');
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
    const _d = new Date();   // mốc "ngày" theo GIỜ ĐỊA PHƯƠNG (tránh lệch múi giờ do UTC)
    const today = _d.getFullYear() + '-' + String(_d.getMonth() + 1).padStart(2, '0') + '-' + String(_d.getDate()).padStart(2, '0');
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
    { id: 'cao-thu-game',     name: 'Cao Thủ Game',       icon: '🕹️', desc: 'Hoàn thành 10 lượt chơi',         cond: function (s) { return s.gamesWon >= 10; } },
    { id: 'nha-thu-thach',    name: 'Nhà Thử Thách',      icon: '🎯', desc: 'Hoàn thành thử thách đầu tiên',    cond: function (s) { return s.challengesDone >= 1; } },
    { id: 'chien-binh-tt',    name: 'Chiến Binh Thử Thách', icon: '🏵️', desc: 'Hoàn thành 10 thử thách',         cond: function (s) { return s.challengesDone >= 10; } }
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
    var challengesDone = 0;
    try {
      const rc = await sb.from('activity_log').select('*', { count: 'exact', head: true }).eq('user_id', user.id).like('text', '🎯%');
      challengesDone = rc.count || 0;
    } catch (e) {}
    const stats = { completedLessons: completedLessons, streak: prog ? prog.streak_days : 0, xp: prog ? prog.xp : 0, gamesWon: gamesWon, challengesDone: challengesDone };
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
    try { await sb.rpc('bump_game_play', { p_game: gameName }); } catch (e) {}   // +1 lượt chơi toàn hệ thống
    return await checkBadges();
  }

  // ---------- LƯỢT CHƠI MỖI GAME (toàn hệ thống, công khai) ----------
  // Trả về object { '<tên game>': số_lượt }
  async function gamePlays() {
    if (!sb) return {};
    const { data } = await sb.from('game_plays').select('game, plays');
    const map = {};
    (data || []).forEach(function (r) { map[r.game] = r.plays; });
    return map;
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

  // ---------- CHUÔNG THÔNG BÁO: dropdown hoạt động gần đây (dùng chung mọi trang) ----------
  function timeAgo(iso) {
    try {
      var d = new Date(iso), s = Math.floor((new Date() - d) / 1000);
      if (s < 60) return 'vừa xong';
      if (s < 3600) return Math.floor(s / 60) + ' phút trước';
      if (s < 86400) return Math.floor(s / 3600) + ' giờ trước';
      if (s < 604800) return Math.floor(s / 86400) + ' ngày trước';
      return d.toLocaleDateString('vi-VN');
    } catch (e) { return ''; }
  }

  function initBell() {
    var bells = Array.prototype.slice.call(document.querySelectorAll('.icon-btn, .notif, [title="Thông báo"]')).filter(function (b) {
      return (b.getAttribute('title') || '').indexOf('Thông báo') >= 0 || (b.textContent || '').indexOf('🔔') >= 0;
    });
    if (!bells.length || document.getElementById('tvkn-notif')) return;   // không có chuông / đã khởi tạo

    var panel = document.createElement('div');
    panel.id = 'tvkn-notif';
    panel.style.cssText = 'position:fixed;z-index:9999;width:300px;max-height:60vh;overflow:auto;background:#fff;border-radius:16px;box-shadow:0 16px 40px rgba(0,0,0,.18);display:none;font-family:inherit;color:#2D3748';
    document.body.appendChild(panel);
    var open = false;
    function hide() { open = false; panel.style.display = 'none'; }
    function esc(t) { return (t || '').replace(/[<>&]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]; }); }
    function row(it) {
      var xp = it.xp_delta ? ('<span style="color:#6BCB77;font-weight:700;white-space:nowrap"> +' + it.xp_delta + ' XP</span>') : '';
      return '<div style="padding:11px 14px;border-bottom:1px solid #EEF2F9">' +
             '<div style="font-size:14px;font-weight:600">' + esc(it.text) + xp + '</div>' +
             '<div style="font-size:12px;color:#9AA3B2;margin-top:3px">' + timeAgo(it.created_at) + '</div></div>';
    }
    function head() { return '<div style="padding:13px 14px;font-weight:800;border-bottom:1px solid #EEF2F9">🔔 Thông báo</div>'; }
    function note(t) { return '<div style="padding:16px 14px;color:#6B7280;font-size:14px">' + t + '</div>'; }
    async function load() {
      panel.innerHTML = head() + note('Đang tải…');
      var body;
      try {
        var logged = false;
        if (sb) { var s = await sb.auth.getSession(); logged = !!s.data.session; }
        if (!logged) body = note('Hãy đăng nhập để xem thông báo của em nhé!');
        else {
          var items = await getActivity(12);
          body = items.length ? items.map(row).join('') : note('📭 Chưa có hoạt động nào.');
        }
      } catch (e) { body = note('Không tải được thông báo.'); }
      panel.innerHTML = head() + body;
    }
    bells.forEach(function (bell) {
      bell.style.cursor = 'pointer';
      bell.addEventListener('click', function (e) {
        e.stopPropagation();
        if (open) { hide(); return; }
        var r = bell.getBoundingClientRect();
        panel.style.top = (r.bottom + 8) + 'px';
        panel.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
        panel.style.left = 'auto';
        panel.style.display = 'block';
        open = true;
        load();
      });
    });
    document.addEventListener('click', function (e) {
      if (open && !panel.contains(e.target) && !bells.some(function (b) { return b.contains(e.target); })) hide();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initBell);
  else initBell();

  // ---------- THỐNG KÊ LƯỢT CHƠI GAME (đếm thật từ nhật ký 🎮) ----------
  // Trả về { played: số lượt thắng game, favorite: tên game chơi nhiều nhất }
  async function getGameStats() {
    ensure();
    const user = await getUser();
    if (!user) return { played: 0, favorite: null };
    const { data } = await sb.from('activity_log')
      .select('text').eq('user_id', user.id).like('text', '🎮%');
    const rows = data || [];
    const counts = {};
    rows.forEach(function (r) {
      // text dạng: '🎮 <Tên game> — hoàn thành'
      var name = (r.text || '').replace(/^🎮\s*/, '').split(' — ')[0].trim();
      if (name) counts[name] = (counts[name] || 0) + 1;
    });
    var fav = null, max = 0;
    Object.keys(counts).forEach(function (k) { if (counts[k] > max) { max = counts[k]; fav = k; } });
    return { played: rows.length, favorite: fav };
  }

  return {
    configured: typeof TVKN_CONFIGURED !== 'undefined' ? TVKN_CONFIGURED : false,
    signUp, signIn, signOut, getUser, getProfile,
    requireAuth, applyToDOM, guardPage, applyProfile, isLoggedIn, requireAdmin, bindCommon,
    getProgress, addXp, bumpStreak, setLesson,
    getActivity, getLessons, getBadges, getLeaderboard, getMyRank, getCohortStats,
    adminOverview, adminUsers,
    checkBadges, recordGameWin, platformStats, badges: BADGES, initBell, trialPage, getGameStats, gamePlays
  };
})();
