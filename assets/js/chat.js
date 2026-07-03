/* ============================================================
   TVKN CHAT — KHUNG CHAT NỔI dùng chung (Học sinh + Giáo viên)
   • Chat LỚP  : cả lớp cùng gửi & xem.
   • Chat RIÊNG: 1-1 giữa GV ↔ HS trong lớp (cả hai mở được).
   Cần nạp TRƯỚC: supabase-js (CDN) → supabase-config.js → auth.js
   Dùng: chỉ cần <script src="assets/js/chat.js"></script> (tự mount 1 lần).
   Gắn ở CỬA SỔ TRÊN CÙNG (app.html cho HS, giao-vien.html cho GV) — KHÔNG gắn trong iframe con.
   ============================================================ */
(function () {
  if (window.__tvknChatMounted) return;      // tránh mount 2 lần
  // Không mount trong iframe con (shell học sinh) — chỉ ở cửa sổ trên cùng
  try { if (window.self !== window.top) return; } catch (e) { return; }
  window.__tvknChatMounted = true;

  var T = window.TVKN;
  if (!T || !T.configured || !T.chatFetch) return;   // chưa cấu hình Supabase / thiếu hàm chat

  var esc = function (t) {
    return (t == null ? '' : String(t)).replace(/[<>&"]/g, function (c) {
      return c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '&' ? '&amp;' : '&quot;';
    });
  };
  var fmtTime = function (iso) {
    try {
      var d = new Date(iso), now = new Date();
      var hm = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
      if (d.toDateString() === now.toDateString()) return hm;
      return d.toLocaleDateString('vi-VN') + ' ' + hm;
    } catch (e) { return ''; }
  };

  // ---------- Trạng thái ----------
  var me = null;                 // uid hiện tại
  var myName = 'Tôi';
  var role = null;               // 'teacher' | 'student'
  var threads = [];              // [{key,kind:'class'|'dm',classId,peerId,title,avatar,className}]
  var pendingClasses = [];       // (HS) tên các lớp đã xin vào nhưng CHỜ giáo viên duyệt
  var rosterByClass = {};        // classId → { uid: {name,avatar,is_teacher} }
  var channels = {};             // classId → realtime channel
  var unread = {};               // threadKey → số tin chưa đọc
  var active = null;             // thread đang mở
  var shownIds = {};             // id tin đã hiển thị ở luồng đang mở (chống trùng)

  var elRoot, elFab, elDot, elPanel, elBody, elTitle, elBack, elInput, elSend;

  function tkey(kind, classId, peerId) { return kind + ':' + classId + (peerId ? ':' + peerId : ''); }
  function nameOf(classId, uid) {
    var r = rosterByClass[classId]; var p = r && r[uid];
    return p ? p.name : (uid === me ? myName : 'Thành viên');
  }
  function avatarOf(classId, uid) {
    var r = rosterByClass[classId]; var p = r && r[uid];
    return p ? (p.avatar || '🙂') : '🙂';
  }

  // ---------- CSS ----------
  function injectCss() {
    if (document.getElementById('tvkn-chat-css')) return;
    var css = ''
      + '.tvkn-fab{position:fixed;right:20px;bottom:20px;z-index:9998;width:60px;height:60px;border-radius:50%;'
      + 'border:none;cursor:pointer;background:linear-gradient(135deg,#4F8CFF,#9B72FF);color:#fff;font-size:27px;'
      + 'box-shadow:0 10px 26px rgba(79,140,255,.45);transition:transform .2s}'
      + '.tvkn-fab:hover{transform:translateY(-3px) scale(1.05)}'
      + '.tvkn-dot{position:absolute;top:6px;right:6px;min-width:18px;height:18px;padding:0 4px;border-radius:9px;'
      + 'background:#FF6B9D;color:#fff;font-size:11px;font-weight:800;display:none;align-items:center;justify-content:center;'
      + 'border:2px solid #fff;line-height:1}'
      + '.tvkn-panel{position:fixed;right:20px;bottom:92px;z-index:9998;width:360px;max-width:calc(100vw - 32px);'
      + 'height:520px;max-height:calc(100vh - 130px);background:#fff;border-radius:20px;overflow:hidden;display:none;'
      + 'flex-direction:column;box-shadow:0 20px 50px rgba(45,55,72,.28);font-family:inherit}'
      + '.tvkn-panel.open{display:flex}'
      + '.tvkn-head{flex:0 0 auto;height:56px;display:flex;align-items:center;gap:10px;padding:0 14px;color:#fff;'
      + 'background:linear-gradient(135deg,#4F8CFF,#9B72FF)}'
      + '.tvkn-head b{font-size:16px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
      + '.tvkn-iconbtn{background:rgba(255,255,255,.22);border:none;color:#fff;width:34px;height:34px;border-radius:10px;'
      + 'cursor:pointer;font-size:17px;flex:0 0 auto}'
      + '.tvkn-iconbtn:hover{background:rgba(255,255,255,.35)}'
      + '.tvkn-body{flex:1 1 auto;overflow-y:auto;background:#F4F8FF;padding:12px}'
      + '.tvkn-search{width:100%;border:2px solid #E8ECF4;border-radius:12px;padding:9px 12px;font-family:inherit;'
      + 'font-size:14px;outline:none;margin-bottom:10px;background:#fff}'
      + '.tvkn-search:focus{border-color:#4F8CFF}'
      + '.tvkn-tlist{display:flex;flex-direction:column;gap:8px}'
      + '.tvkn-trow{display:flex;align-items:center;gap:11px;padding:12px;background:#fff;border-radius:14px;cursor:pointer;'
      + 'box-shadow:0 3px 10px rgba(79,140,255,.08);transition:transform .12s}'
      + '.tvkn-trow:hover{transform:translateY(-2px)}'
      + '.tvkn-tav{width:40px;height:40px;border-radius:12px;background:#E5EFFF;display:flex;align-items:center;'
      + 'justify-content:center;font-size:22px;flex:0 0 auto}'
      + '.tvkn-tname{font-weight:700;font-size:14.5px;color:#2D3748}'
      + '.tvkn-tsub{font-size:12px;color:#6B7280}'
      + '.tvkn-tbadge{margin-left:auto;min-width:20px;height:20px;padding:0 6px;border-radius:10px;background:#FF6B9D;'
      + 'color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center}'
      + '.tvkn-ghead{font-size:12px;font-weight:800;color:#9B72FF;text-transform:uppercase;letter-spacing:.4px;'
      + 'margin:6px 2px 0}'
      + '.tvkn-msg{margin-bottom:12px;display:flex;flex-direction:column;max-width:82%}'
      + '.tvkn-msg.me{margin-left:auto;align-items:flex-end}'
      + '.tvkn-sender{font-size:11.5px;font-weight:700;color:#6B7280;margin:0 4px 3px}'
      + '.tvkn-bub{padding:9px 13px;border-radius:15px;font-size:14.5px;line-height:1.45;word-break:break-word;'
      + 'background:#fff;color:#2D3748;box-shadow:0 2px 6px rgba(45,55,72,.06);border-bottom-left-radius:5px}'
      + '.tvkn-msg.me .tvkn-bub{background:linear-gradient(135deg,#4F8CFF,#9B72FF);color:#fff;'
      + 'border-bottom-left-radius:15px;border-bottom-right-radius:5px}'
      + '.tvkn-time{font-size:10.5px;color:#9AA3B2;margin:3px 4px 0}'
      + '.tvkn-empty{text-align:center;color:#6B7280;font-size:14px;padding:26px 12px}'
      + '.tvkn-foot{flex:0 0 auto;display:flex;gap:8px;padding:10px;border-top:1px solid #EEF2F9;background:#fff}'
      + '.tvkn-foot input{flex:1;border:2px solid #E8ECF4;border-radius:14px;padding:10px 14px;font-family:inherit;'
      + 'font-size:14.5px;outline:none}'
      + '.tvkn-foot input:focus{border-color:#4F8CFF}'
      + '.tvkn-sendbtn{border:none;background:linear-gradient(135deg,#4F8CFF,#9B72FF);color:#fff;border-radius:14px;'
      + 'width:46px;font-size:19px;cursor:pointer;flex:0 0 auto}'
      + '.tvkn-sendbtn:disabled{opacity:.5;cursor:default}'
      // Mobile: có thanh tab dưới (shell HS) → nâng nút chat lên trên tab
      + '@media(max-width:1024px){.tvkn-fab{bottom:78px}.tvkn-panel{bottom:150px;max-height:calc(100vh - 190px)}}'
      + '@media(max-width:480px){.tvkn-panel{right:10px;left:10px;width:auto}.tvkn-fab{right:14px}}';
    var st = document.createElement('style');
    st.id = 'tvkn-chat-css';
    st.textContent = css;
    (document.head || document.documentElement).appendChild(st);
  }

  // ---------- DOM ----------
  function buildDom() {
    injectCss();
    elRoot = document.createElement('div');
    elRoot.innerHTML =
      '<button class="tvkn-fab" title="Tin nhắn lớp học">💬<span class="tvkn-dot"></span></button>' +
      '<div class="tvkn-panel">' +
        '<div class="tvkn-head">' +
          '<button class="tvkn-iconbtn" data-act="back" style="display:none">‹</button>' +
          '<b class="tvkn-title">💬 Tin nhắn</b>' +
          '<button class="tvkn-iconbtn" data-act="close" style="margin-left:auto">✕</button>' +
        '</div>' +
        '<div class="tvkn-body"></div>' +
        '<div class="tvkn-foot" style="display:none">' +
          '<input class="tvkn-input" type="text" maxlength="2000" placeholder="Nhập tin nhắn...">' +
          '<button class="tvkn-sendbtn" title="Gửi">➤</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(elRoot);
    elFab   = elRoot.querySelector('.tvkn-fab');
    elDot   = elRoot.querySelector('.tvkn-dot');
    elPanel = elRoot.querySelector('.tvkn-panel');
    elBody  = elRoot.querySelector('.tvkn-body');
    elTitle = elRoot.querySelector('.tvkn-title');
    elBack  = elRoot.querySelector('[data-act="back"]');
    elInput = elRoot.querySelector('.tvkn-input');
    elSend  = elRoot.querySelector('.tvkn-sendbtn');

    elFab.addEventListener('click', togglePanel);
    elRoot.querySelector('[data-act="close"]').addEventListener('click', function () { openPanel(false); });
    elBack.addEventListener('click', showList);
    elSend.addEventListener('click', doSend);
    elInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') doSend(); });
    elBody.addEventListener('click', function (e) {
      var row = e.target.closest ? e.target.closest('[data-tkey]') : null;
      if (!row) return;
      var th = threads.filter(function (t) { return t.key === row.getAttribute('data-tkey'); })[0];
      if (th) openThread(th);
    });
  }

  // ---------- Danh sách luồng ----------
  function totalUnread() {
    var n = 0; for (var k in unread) n += unread[k] || 0; return n;
  }
  function refreshDot() {
    var n = totalUnread();
    elDot.textContent = n > 99 ? '99+' : n;
    elDot.style.display = n > 0 ? 'flex' : 'none';
  }
  function foot(show) { elRoot.querySelector('.tvkn-foot').style.display = show ? 'flex' : 'none'; }

  var listFilter = '';   // từ khoá tìm kiếm ở màn danh sách (lọc theo tên lớp / tên HS)

  function showList() {
    active = null;
    elBack.style.display = 'none';
    elTitle.textContent = '💬 Tin nhắn';
    foot(false);
    if (!threads.length) {
      var msg;
      if (role === 'teacher') {
        msg = 'Chưa có lớp học nào để trò chuyện.<br>Hãy tạo lớp ở trang Giáo viên.';
      } else if (pendingClasses.length) {
        msg = '⏳ Em đã gửi yêu cầu vào lớp <b>' + esc(pendingClasses.join(', ')) + '</b>.<br>' +
              'Chờ cô/thầy duyệt là chat được nhé!';
      } else {
        msg = 'Chưa có lớp học nào để trò chuyện.<br>Nhập mã lớp ở Hồ sơ để tham gia lớp nhé!';
      }
      elBody.innerHTML = '<div class="tvkn-empty">' + msg + '</div>';
      return;
    }
    // Thanh tìm kiếm chỉ hiện khi danh sách đủ dài (lớp đông HS)
    var showSearch = threads.length > 6;
    elBody.innerHTML =
      (showSearch ? '<input class="tvkn-search" type="text" placeholder="🔍 Tìm theo tên lớp hoặc tên học sinh...">' : '') +
      '<div class="tvkn-tlist"></div>';
    if (showSearch) {
      var si = elBody.querySelector('.tvkn-search');
      si.value = listFilter;
      si.addEventListener('input', function () { listFilter = this.value; renderRows(); });
    } else {
      listFilter = '';
    }
    renderRows();
  }

  // Vẽ các dòng luồng (gom theo lớp), có áp bộ lọc theo tên lớp / tên HS.
  function renderRows() {
    var cont = elBody.querySelector('.tvkn-tlist'); if (!cont) return;
    var q = (listFilter || '').trim().toLowerCase();
    var match = threads.filter(function (t) {
      if (!q) return true;
      return (t.title || '').toLowerCase().indexOf(q) >= 0 ||
             (t.className || '').toLowerCase().indexOf(q) >= 0;
    });
    if (!match.length) {
      cont.innerHTML = '<div class="tvkn-empty">Không tìm thấy lớp/học sinh nào khớp “' + esc(listFilter) + '”.</div>';
      return;
    }
    var byClass = {}, order = [];
    match.forEach(function (t) {
      if (!byClass[t.classId]) { byClass[t.classId] = []; order.push(t.classId); }
      byClass[t.classId].push(t);
    });
    var html = '';
    order.forEach(function (cid) {
      var arr = byClass[cid];
      var cname = arr[0].className || 'Lớp';
      html += '<div class="tvkn-ghead">' + esc(cname) + '</div>';
      arr.forEach(function (t) {
        var u = unread[t.key] || 0;
        html += '<div class="tvkn-trow" data-tkey="' + esc(t.key) + '">' +
          '<div class="tvkn-tav">' + esc(t.avatar) + '</div>' +
          '<div style="min-width:0"><div class="tvkn-tname">' + esc(t.title) + '</div>' +
          '<div class="tvkn-tsub">' + (t.kind === 'class' ? 'Cả lớp cùng xem' : 'Trò chuyện riêng') + '</div></div>' +
          (u ? '<span class="tvkn-tbadge">' + (u > 99 ? '99+' : u) + '</span>' : '') +
          '</div>';
      });
    });
    cont.innerHTML = html;
  }

  // ---------- Mở 1 luồng ----------
  function renderMsg(row) {
    if (shownIds[row.id]) return null;
    shownIds[row.id] = true;
    var mine = row.sender_id === me;
    var wrap = document.createElement('div');
    wrap.className = 'tvkn-msg' + (mine ? ' me' : '');
    var senderLine = '';
    // Chat lớp: hiện tên người gửi (trừ mình); chat riêng: không cần.
    if (!mine && active && active.kind === 'class') {
      senderLine = '<div class="tvkn-sender">' + esc(avatarOf(row.class_id, row.sender_id) + ' ' + nameOf(row.class_id, row.sender_id)) + '</div>';
    }
    wrap.innerHTML = senderLine +
      '<div class="tvkn-bub">' + esc(row.body) + '</div>' +
      '<div class="tvkn-time">' + fmtTime(row.created_at) + '</div>';
    return wrap;
  }
  function scrollBottom() { elBody.scrollTop = elBody.scrollHeight; }

  async function openThread(th) {
    active = th;
    unread[th.key] = 0; refreshDot();
    elBack.style.display = '';
    elTitle.textContent = th.avatar + ' ' + th.title;
    foot(true);
    elBody.innerHTML = '<div class="tvkn-empty">Đang tải…</div>';
    // Đảm bảo có danh bạ lớp để hiện tên (chat lớp)
    if (!rosterByClass[th.classId]) await loadRoster(th.classId);
    var rows = await T.chatFetch({ classId: th.classId, recipientId: th.kind === 'class' ? null : th.peerId, me: me });
    shownIds = {};                 // reset ngay trước khi vẽ để chống trùng chuẩn theo lô vừa tải
    elBody.innerHTML = '';
    if (!rows.length) {
      elBody.innerHTML = '<div class="tvkn-empty">Chưa có tin nhắn. Hãy gửi lời chào 👋</div>';
    } else {
      rows.forEach(function (r) { var el = renderMsg(r); if (el) elBody.appendChild(el); });
      scrollBottom();
    }
    elInput.focus();
  }

  async function doSend() {
    if (!active) return;
    var body = (elInput.value || '').trim();
    if (!body) return;
    elSend.disabled = true;
    var recip = active.kind === 'class' ? null : active.peerId;
    try {
      var row = await T.chatSend({ classId: active.classId, recipientId: recip, body: body, me: me });
      elInput.value = '';
      if (row) {                        // hiện ngay (realtime sẽ bị chống trùng theo id)
        // xoá ô "chưa có tin"
        var em = elBody.querySelector('.tvkn-empty'); if (em) em.remove();
        var el = renderMsg(row); if (el) { elBody.appendChild(el); scrollBottom(); }
      }
    } catch (e) {
      alert('Không gửi được: ' + ((e && e.message) || e));
    }
    elSend.disabled = false;
    elInput.focus();
  }

  // ---------- Realtime ----------
  function onIncoming(row) {
    // Xác định luồng của tin
    var key;
    if (row.recipient_id == null) {
      key = tkey('class', row.class_id);
    } else {
      var peer = row.sender_id === me ? row.recipient_id : row.sender_id;
      key = tkey('dm', row.class_id, peer);
    }
    if (active && active.key === key) {
      var el = renderMsg(row);
      if (el) {
        var em = elBody.querySelector('.tvkn-empty'); if (em) em.remove();
        var nearBottom = elBody.scrollHeight - elBody.scrollTop - elBody.clientHeight < 80;
        elBody.appendChild(el);
        if (nearBottom || row.sender_id === me) scrollBottom();
      }
    } else if (row.sender_id !== me) {   // tin của người khác ở luồng khác → đếm chưa đọc
      // chỉ đếm nếu luồng này tồn tại trong danh sách của mình
      var exists = threads.some(function (t) { return t.key === key; });
      if (exists) {
        unread[key] = (unread[key] || 0) + 1;
        refreshDot();
        if (!active && elPanel.classList.contains('open')) showList();  // đang xem danh sách → cập nhật badge
      }
    }
  }

  async function loadRoster(classId) {
    var list = await T.classRoster(classId);
    var map = {};
    list.forEach(function (p) { map[p.id] = { name: p.name, avatar: p.avatar, is_teacher: p.is_teacher }; });
    rosterByClass[classId] = map;
    return map;
  }

  // ---------- Dựng danh sách luồng ----------
  async function buildThreads() {
    threads = [];
    pendingClasses = [];
    if (role === 'teacher') {
      var classes = await T.listMyClasses();               // [{id,name,...}]
      for (var i = 0; i < classes.length; i++) {
        var c = classes[i];
        var map = await loadRoster(c.id);
        threads.push({ key: tkey('class', c.id), kind: 'class', classId: c.id, peerId: null,
                       title: 'Chat cả lớp', avatar: '🏫', className: c.name });
        Object.keys(map).forEach(function (uid) {
          var p = map[uid];
          if (p.is_teacher) return;                          // bỏ chính GV
          threads.push({ key: tkey('dm', c.id, uid), kind: 'dm', classId: c.id, peerId: uid,
                         title: p.name || 'Học sinh', avatar: p.avatar || '👧', className: c.name });
        });
      }
    } else {  // student
      var rows = await T.listMyClassesStudent();             // [{class_id,class_name,teacher_id,teacher_name,status}]
      var approved = rows.filter(function (r) { return r.status === 'approved'; });
      // Lớp đã xin vào nhưng CHỜ duyệt → để hiện thông báo chờ (không tạo luồng chat).
      pendingClasses = rows.filter(function (r) { return r.status !== 'approved'; })
                           .map(function (r) { return r.class_name || 'Lớp'; });
      for (var j = 0; j < approved.length; j++) {
        var r = approved[j];
        await loadRoster(r.class_id);
        threads.push({ key: tkey('class', r.class_id), kind: 'class', classId: r.class_id, peerId: null,
                       title: 'Chat cả lớp', avatar: '🏫', className: r.class_name });
        if (r.teacher_id) {
          threads.push({ key: tkey('dm', r.class_id, r.teacher_id), kind: 'dm', classId: r.class_id, peerId: r.teacher_id,
                         title: r.teacher_name || 'Giáo viên', avatar: '👩‍🏫', className: r.class_name });
        }
      }
    }
    // Đăng ký realtime cho mỗi lớp (1 lần/lớp)
    var seen = {};
    threads.forEach(function (t) {
      if (seen[t.classId]) return; seen[t.classId] = true;
      if (!channels[t.classId]) channels[t.classId] = T.chatSubscribe(t.classId, onIncoming);
    });
  }

  // ---------- Đóng/mở ----------
  var built = false, building = false;
  function openPanel(open) {
    elPanel.classList.toggle('open', open);
  }
  async function togglePanel() {
    var willOpen = !elPanel.classList.contains('open');
    openPanel(willOpen);
    if (!willOpen) return;
    if (!built && !building) {
      building = true;
      elBody.innerHTML = '<div class="tvkn-empty">Đang tải…</div>';
      try { await buildThreads(); built = true; } catch (e) { console.warn('chat build:', e); }
      building = false;
    }
    showList();
  }

  // ---------- Khởi động ----------
  (async function init() {
    var profile;
    try { profile = await T.getProfile(); } catch (e) { return; }
    if (!profile) return;                                   // chưa đăng nhập → không hiện chat
    role = profile.role;
    if (role !== 'teacher' && role !== 'student') return;   // phụ huynh/admin: không dùng chat lớp
    me = profile.id; myName = profile.name || 'Tôi';
    buildDom();
    refreshDot();
    // Nạp trước danh sách luồng + realtime để đếm tin mới ngay cả khi chưa mở panel
    try { await buildThreads(); built = true; } catch (e) { console.warn('chat init:', e); }
  })();

  window.addEventListener('beforeunload', function () {
    for (var cid in channels) T.chatUnsubscribe(channels[cid]);
  });

  // ---------- API công khai (để trang khác mở thẳng 1 cuộc trò chuyện) ----------
  async function ensureBuilt() {
    if (!elRoot) return false;                 // widget chưa dựng (chưa đăng nhập / sai vai trò)
    if (!built && !building) {
      building = true;
      try { await buildThreads(); built = true; } catch (e) { console.warn('chat build:', e); }
      building = false;
    }
    return built;
  }
  async function openByKey(key) {
    if (!(await ensureBuilt())) return;
    var th = threads.filter(function (t) { return t.key === key; })[0];
    if (!th) return;
    openPanel(true);
    openThread(th);
  }
  window.TVKNChat = {
    openClass: function (classId) { return openByKey(tkey('class', classId)); },
    openDM:    function (classId, peerId) { return openByKey(tkey('dm', classId, peerId)); },
    open:      function () { openPanel(true); showList(); }
  };
})();
