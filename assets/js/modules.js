// ============================================================
//  TVKN — ENGINE MODULE BÀI HỌC (data-driven)
//  Mỗi "loại module" là 1 renderer: nhận dữ liệu (block) → trả { html, init }.
//  hoc-bai.html chèn html rồi gọi init(rootEl) để gắn tương tác.
//  Dùng chung cho MỌI bài, MỌI lớp — thêm bài = thêm dữ liệu trong lessons.js.
// ============================================================
window.TVKN_UI = (function () {

  // ---------- Bảng màu chủ đạo theo lớp ----------
  const THEMES = {
    green:  { theme: '#6BCB77', soft: '#D4F4DD' },
    orange: { theme: '#FF9F43', soft: '#FFEBD6' },
    blue:   { theme: '#4F8CFF', soft: '#E2EDFF' },
    purple: { theme: '#9B72FF', soft: '#ECE4FF' },
    pink:   { theme: '#FF6B9D', soft: '#FFE1EC' }
  };
  function applyTheme(name) {
    const t = THEMES[name] || THEMES.green;
    const r = document.documentElement.style;
    r.setProperty('--theme', t.theme);
    r.setProperty('--theme-soft', t.soft);
  }

  // ---------- Đọc số 0..100 thành chữ tiếng Việt (đủ dùng tiểu học) ----------
  const ONES = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
  const TENS = ['', 'mười', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];
  function readNumber(n) {
    n = +n;
    if (n === 0) return 'không';
    if (n === 100) return 'một trăm';
    if (n < 10) return ONES[n];
    const c = Math.floor(n / 10), d = n % 10;
    let s = TENS[c];
    if (d === 0) return s;
    if (d === 1 && c > 1) return s + ' mốt';
    if (d === 5 && c >= 1) return s + ' lăm';
    return s + ' ' + ONES[d];
  }

  // ---------- Phát âm (Web Speech API) ----------
  // Ưu tiên dùng hàm đọc chuẩn ở auth.js (TVKN.speak) — đã vá lỗi giọng & lỗi "nuốt câu".
  function speak(text) {
    try {
      if (window.TVKN && typeof TVKN.speak === 'function') { TVKN.speak(text); return; }
      if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        synth.cancel();
        const u = new SpeechSynthesisUtterance(String(text));
        u.lang = 'vi-VN'; u.rate = 0.85;
        window.__tvknUtter = u;
        setTimeout(function () { try { synth.resume(); synth.speak(u); } catch (e) {} }, 60);
      }
    } catch (e) { /* trình duyệt không hỗ trợ */ }
  }

  // ---------- Cộng XP hiển thị trên header ----------
  function addXp(n) {
    const el = document.getElementById('xpVal');
    if (el) el.textContent = (parseInt(el.textContent, 10) || 0) + n;
  }

  // ---------- Pháo giấy ----------
  function celebrate(e) {
    if (e && e.preventDefault) e.preventDefault();
    const colors = ['#4F8CFF', '#FFD93D', '#6BCB77', '#FF9F43', '#FF6B9D', '#9B72FF'];
    const x = (e && e.clientX) ? e.clientX : window.innerWidth / 2;
    const y = (e && e.clientY) ? e.clientY : 200;
    for (let i = 0; i < 26; i++) {
      const c = document.createElement('div'); c.className = 'confetti';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.left = x + 'px'; c.style.top = y + 'px';
      document.body.appendChild(c);
      const a = Math.random() * Math.PI * 2, v = 100 + Math.random() * 200;
      c.animate(
        [{ transform: 'translate(0,0)', opacity: 1 },
         { transform: `translate(${Math.cos(a) * v}px,${Math.sin(a) * v + 300}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }],
        { duration: 1400, easing: 'cubic-bezier(.25,.46,.45,.94)' }
      ).onfinish = () => c.remove();
    }
  }

  function esc(s) { return ('' + (s == null ? '' : s)).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c])); }

  return { applyTheme, readNumber, speak, addXp, celebrate, esc, THEMES };
})();

// ============================================================
//  CÁC LOẠI MODULE — mỗi hàm nhận (block, uid) → { html, init }
//  uid: chuỗi định danh duy nhất cho block (tránh trùng id giữa các block)
// ============================================================
window.TVKN_MODULES = (function () {
  const U = window.TVKN_UI;

  function wrap(block, inner, extraClass) {
    return `<div class="block ${extraClass || ''}">
      ${block.title ? `<h2 class="block-title">${block.title}</h2>` : ''}
      ${block.sub ? `<p class="block-sub">${block.sub}</p>` : ''}
      ${inner}
    </div>`;
  }

  // ---------- 1) KHÁM PHÁ: bấm số → hiện đúng bấy nhiêu vật ----------
  function exploreTiles(block, uid) {
    const max = block.max != null ? block.max : 5;
    let tiles = '';
    for (let i = 0; i <= max; i++) tiles += `<button class="num-tile" data-n="${i}">${i}</button>`;
    const inner = `
      <div class="objects" id="${uid}-objs">${block.obj ? block.obj.repeat(3) : ''}</div>
      <div class="num-detail" id="${uid}-detail">👆 Em hãy bấm vào một con số bên dưới nhé!</div>
      <div class="num-row" id="${uid}-row">${tiles}</div>`;
    return {
      html: wrap(block, inner),
      init(root) {
        const row = root.querySelector(`#${uid}-row`);
        const objs = root.querySelector(`#${uid}-objs`);
        const detail = root.querySelector(`#${uid}-detail`);
        row.addEventListener('click', e => {
          const t = e.target.closest('.num-tile'); if (!t) return;
          row.querySelectorAll('.num-tile').forEach(x => x.classList.remove('active'));
          t.classList.add('active');
          const n = +t.dataset.n;
          objs.textContent = n === 0 ? (block.objEmpty || '∅') : (block.obj || '🔵').repeat(n);
          objs.style.fontSize = n === 0 ? '60px' : '46px';
          if (n === 0) {
            detail.innerHTML = `<span>${block.zeroText || 'Trống không — không có vật nào.'}</span>` +
              `<span>Số <b style="font-size:24px;color:var(--blue)">0</b> đọc là "không".</span>`;
          } else {
            detail.innerHTML = `<span>Có <b style="font-size:24px;color:var(--blue)">${n}</b> ${block.unit || 'vật'} — đọc là "${U.readNumber(n)}".</span>`;
          }
          U.speak(U.readNumber(n));
        });
      }
    };
  }

  // ---------- 2) CẤU TẠO SỐ: stepper chục / đơn vị ----------
  function buildNumber(block, uid) {
    const initC = block.initChuc != null ? block.initChuc : 3;
    const initD = block.initDvi != null ? block.initDvi : 5;
    const inner = `
      <div class="build-controls">
        <div class="stepper">
          <div class="stepper-label">🟩 Số chục</div>
          <div class="stepper-row">
            <button class="stepper-btn" data-k="chuc" data-d="-1">−</button>
            <span class="stepper-val" id="${uid}-chuc">${initC}</span>
            <button class="stepper-btn" data-k="chuc" data-d="1">+</button>
          </div>
        </div>
        <div class="stepper">
          <div class="stepper-label">🟫 Số đơn vị</div>
          <div class="stepper-row">
            <button class="stepper-btn" data-k="dvi" data-d="-1">−</button>
            <span class="stepper-val" id="${uid}-dvi">${initD}</span>
            <button class="stepper-btn" data-k="dvi" data-d="1">+</button>
          </div>
        </div>
      </div>
      <div class="build-view">
        <div class="sticks" id="${uid}-sticks"></div>
        <div class="build-num" id="${uid}-num"></div>
        <div class="build-sum" id="${uid}-sum"></div>
        <div class="build-read" id="${uid}-read"></div>
      </div>`;
    return {
      html: wrap(block, inner),
      init(root) {
        let chuc = initC, dvi = initD;
        function render() {
          root.querySelector(`#${uid}-chuc`).textContent = chuc;
          root.querySelector(`#${uid}-dvi`).textContent = dvi;
          const n = chuc * 10 + dvi;
          root.querySelector(`#${uid}-num`).textContent = n;
          root.querySelector(`#${uid}-sticks`).textContent =
            (chuc ? '🟩'.repeat(chuc) : '') + (dvi ? ' ' + '🟫'.repeat(dvi) : '') || '∅';
          const sum = root.querySelector(`#${uid}-sum`);
          if (chuc === 0 && dvi === 0) sum.textContent = 'Không có chục, không có đơn vị → số 0.';
          else sum.innerHTML = `<b>${n}</b> = ${chuc * 10} + ${dvi} (gồm <b>${chuc}</b> chục và <b>${dvi}</b> đơn vị)`;
          root.querySelector(`#${uid}-read`).textContent = `Đọc là: "${U.readNumber(n)}".`;
        }
        root.querySelectorAll('.stepper-btn').forEach(b => {
          b.addEventListener('click', () => {
            const d = +b.dataset.d;
            if (b.dataset.k === 'chuc') chuc = Math.min(9, Math.max(0, chuc + d));
            else dvi = Math.min(9, Math.max(0, dvi + d));
            render();
          });
        });
        render();
      }
    };
  }

  // ---------- 3) THẺ ĐỌC SỐ (linh hoạt: đọc số / viết thành tổng) ----------
  function readCards(block, uid) {
    const cards = (block.cards || []).map((cd, i) => `
      <div class="read-card">
        <div class="read-num">${U.esc(cd.num)}</div>
        ${cd.sum ? `<div class="read-sum">${U.esc(cd.sum)}</div>` : ''}
        ${cd.word ? `<div class="read-word">${U.esc(cd.word)}</div>` : ''}
        ${cd.objs ? `<div class="read-objs">${cd.objs}</div>` : ''}
        <button class="listen-btn" data-say="${U.esc(cd.say || cd.word || cd.num)}">🔊 Nghe</button>
      </div>`).join('');
    const inner = `<div class="read-grid">${cards}</div><div class="feedback" id="${uid}-fb"></div>`;
    return {
      html: wrap(block, inner),
      init(root) {
        const grid = root.querySelector('.read-grid');
        grid.addEventListener('click', e => {
          const b = e.target.closest('.listen-btn'); if (!b) return;
          const say = b.dataset.say;
          U.speak(say);
          const fb = root.querySelector(`#${uid}-fb`);
          fb.className = 'feedback ok show';
          fb.innerHTML = `🔊 Đọc là "<b>${U.esc(say)}</b>". Em đọc to theo nhé!`;
          U.celebrate(e);
        });
      }
    };
  }

  // ---------- 4) TRẮC NGHIỆM (nhiều câu) ----------
  function mcq(block, uid) {
    const qs = (block.questions || []).map((q, qi) => {
      const opts = q.options.map(o => {
        const val = (typeof o === 'object') ? o.val : o;
        const lbl = (typeof o === 'object' && o.label != null) ? o.label : val;
        return `<button class="opt" data-val="${U.esc(val)}">${U.esc(lbl)}</button>`;
      }).join('');
      return `
        <p style="font-weight:700;margin:${qi ? '22px' : '0'} 0 8px">${q.q}</p>
        ${q.img ? `<div class="objects"${q.imgStyle ? ` style="${q.imgStyle}"` : ''}>${q.img}</div>` : ''}
        <div class="options" data-qi="${qi}">${opts}</div>
        <div class="feedback" id="${uid}-fb${qi}"></div>`;
    }).join('');
    return {
      html: wrap(block, qs),
      init(root) {
        (block.questions || []).forEach((q, qi) => {
          const opts = root.querySelectorAll(`.options[data-qi="${qi}"] .opt`);
          let solved = false;
          opts.forEach(opt => opt.addEventListener('click', e => {
            const fb = root.querySelector(`#${uid}-fb${qi}`);
            opts.forEach(o => o.classList.remove('wrong'));
            if (('' + opt.dataset.val) === ('' + q.correct)) {
              opts.forEach(o => o.classList.remove('correct'));
              opt.classList.add('correct');
              fb.className = 'feedback ok show';
              fb.innerHTML = `🎉 Chính xác! ${q.ok || ''} <b>+5 XP</b>`;
              if (!solved) { U.addXp(5); solved = true; }
              U.celebrate(e);
            } else {
              opt.classList.add('wrong');
              fb.className = 'feedback no show';
              fb.textContent = q.no || '💡 Chưa đúng rồi. Em đọc lại và thử lại nhé!';
            }
          }));
        });
      }
    };
  }

  // ---------- 5) DÃY SỐ / TIA SỐ / HÀNG XÓM (điền ô trống) ----------
  // block.rows = [{ label, slots: [ số | {blank: đáp_án} ] }]
  function sequence(block, uid) {
    const rows = (block.rows || []).map((row, ri) => {
      const cells = row.slots.map((s, si) => {
        if (s != null && typeof s === 'object' && 'blank' in s) {
          return `<input type="number" inputmode="numeric" class="seq-input" data-ans="${s.blank}" id="${uid}-i${ri}_${si}">`;
        }
        return `<div class="seq-cell">${U.esc(s)}</div>`;
      }).join('');
      return `${row.label ? `<p class="seq-label"${ri ? ' style="margin-top:14px"' : ''}>${row.label}</p>` : ''}
        <div class="seq-row">${cells}</div>`;
    }).join('');
    const inner = `${rows}
      <button class="btn btn-primary btn-block" style="margin-top:10px" id="${uid}-check">✅ Kiểm tra</button>
      <div class="feedback" id="${uid}-fb"></div>`;
    return {
      html: wrap(block, inner, 'warmup'),
      init(root) {
        root.querySelector(`#${uid}-check`).addEventListener('click', () => {
          const inputs = root.querySelectorAll('.seq-input');
          let allRight = true, answered = false;
          inputs.forEach(inp => {
            inp.classList.remove('right', 'wrongi');
            if (inp.value === '') { allRight = false; return; }
            answered = true;
            if (+inp.value === +inp.dataset.ans) inp.classList.add('right');
            else { inp.classList.add('wrongi'); allRight = false; }
          });
          const fb = root.querySelector(`#${uid}-fb`);
          if (allRight && answered) {
            fb.className = 'feedback ok show';
            fb.innerHTML = `🎉 Tuyệt vời! Em đã điền đúng hết! <b>+10 XP</b>`;
            U.addXp(10); U.celebrate();
          } else if (!answered) {
            fb.className = 'feedback no show';
            fb.textContent = '💡 Em hãy điền số vào các ô trống trước nhé!';
          } else {
            fb.className = 'feedback no show';
            fb.textContent = block.hint || '💡 Còn vài ô chưa đúng (ô đỏ). Em xem lại thứ tự và thử lại nhé!';
          }
        });
      }
    };
  }

  // ---------- 6) INFO: khối nội dung tĩnh (giải thích, ví dụ) ----------
  function info(block, uid) {
    return { html: wrap(block, block.html || ''), init() {} };
  }

  const REGISTRY = {
    'explore-tiles': exploreTiles,
    'build-number': buildNumber,
    'read-cards': readCards,
    'mcq': mcq,
    'sequence': sequence,
    'info': info
  };

  function render(block, uid) {
    const fn = REGISTRY[block.type];
    if (!fn) return { html: `<div class="block"><p class="block-sub">⚠️ Loại module chưa hỗ trợ: ${U.esc(block.type)}</p></div>`, init() {} };
    return fn(block, uid);
  }

  return { render, REGISTRY };
})();
