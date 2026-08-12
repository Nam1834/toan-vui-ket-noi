// ============================================================
//  TVKN — BỘ SINH CÂU HỎI TRÒ CHƠI THEO LỚP (dùng chung 5 game)
//  Nạp SAU auth.js. Mỗi game gọi:
//     TVKN_GAME.loadGrade();                       // đọc lớp của em đang đăng nhập
//     TVKN_GAME.makeQuestion(skill, minG, maxG);   // sinh 1 câu hỏi hợp lớp
//
//  Trả về { text, answer, options } — answer & options đều là CHUỖI
//  (để hỗ trợ cả phân số "3/4" và số thập phân "12,5").
//
//  Độ khó bám theo chương trình từng lớp:
//   • Lớp 1: cộng/trừ trong phạm vi 20
//   • Lớp 2: cộng/trừ phạm vi 100; nhân/chia bảng 2,3,4,5
//   • Lớp 3: cộng/trừ phạm vi 1000; nhân/chia trong & ngoài bảng
//   • Lớp 4: số lớn (nghìn); nhân/chia nhiều chữ số; phân số cùng mẫu
//   • Lớp 5: số thập phân (+ − ×); tỉ số phần trăm; phân số cùng mẫu
//
//  skill (trọng tâm mỗi game): 'cong' | 'tru' | 'nhan' | 'chia' | 'logic'
//  minG/maxG: kẹp lớp về đúng tầm game hỗ trợ (theo data-grades ở tro-choi.html)
// ============================================================
window.TVKN_GAME = (function () {
  'use strict';

  var _grade = 1; // lớp mặc định khi chưa đọc được hồ sơ

  // ---------- Tiện ích ----------
  function rnd(min, max) { if (max < min) max = min; return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = rnd(0, i); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  // Định dạng số thập phân kiểu Việt Nam (dấu phẩy): 12.5 -> "12,5"
  function vn(n) { return (Math.round(n * 10) / 10).toFixed(1).replace('.', ','); }
  // Số thập phân 1 chữ số lẻ, LUÔN có phần lẻ khác 0 (tránh hiện "10,0")
  function dec1(intMin, intMax) { return rnd(intMin, intMax) + rnd(1, 9) / 10; }

  // ---------- Bộ tạo đáp án nhiễu ----------
  // Số nguyên: 3 đáp án sai gần đúng, khoảng cách co giãn theo độ lớn
  function intOptions(ans) {
    var spread = Math.max(2, Math.round(Math.abs(ans) * 0.12));
    var seen = {}; seen[ans] = true; var opts = [String(ans)];
    var guard = 0;
    while (opts.length < 4 && guard < 80) {
      guard++;
      var c = ans + rnd(1, spread) * (Math.random() < 0.5 ? -1 : 1);
      if (c >= 0 && !seen[c]) { seen[c] = true; opts.push(String(c)); }
    }
    var n = 1;
    while (opts.length < 4) { var c2 = ans + n; if (!seen[c2]) { seen[c2] = true; opts.push(String(c2)); } n++; }
    return shuffle(opts);
  }

  // Số thập phân (1 chữ số phần thập phân)
  function decOptions(ans) {
    var key = vn(ans); var seen = {}; seen[key] = true; var opts = [key];
    var guard = 0;
    while (opts.length < 4 && guard < 80) {
      guard++;
      var c = Math.round((ans + rnd(1, 9) * (Math.random() < 0.5 ? -1 : 1) / 10) * 10) / 10;
      if (c < 0) continue;
      var k = vn(c); if (!seen[k]) { seen[k] = true; opts.push(k); }
    }
    var n = 1;
    while (opts.length < 4) { var k2 = vn(ans + n / 10); if (!seen[k2]) { seen[k2] = true; opts.push(k2); } n++; }
    return { answer: key, options: shuffle(opts) };
  }

  // Phân số cùng mẫu d (giữ nguyên, không rút gọn — đúng bài "cùng mẫu số")
  function fracOptions(num, d) {
    var key = num + '/' + d; var seen = {}; seen[key] = true; var opts = [key];
    var guard = 0;
    while (opts.length < 4 && guard < 80) {
      guard++;
      var nn = num + rnd(1, d) * (Math.random() < 0.5 ? -1 : 1);
      if (nn < 0 || nn > d) continue;
      var k = nn + '/' + d; if (!seen[k]) { seen[k] = true; opts.push(k); }
    }
    var e = 1;
    while (opts.length < 4) { var nn2 = (num + e) % (d + 1); var k2 = nn2 + '/' + d; if (!seen[k2]) { seen[k2] = true; opts.push(k2); } e++; }
    return { answer: key, options: shuffle(opts) };
  }

  // ---------- Gói kết quả ----------
  function qInt(op, a, b, ans) {
    return { text: a + ' ' + op + ' ' + b + ' = ?', answer: String(ans), options: intOptions(ans) };
  }
  function qDec(op, aStr, bStr, ansNum) {
    var o = decOptions(ansNum);
    return { text: aStr + ' ' + op + ' ' + bStr + ' = ?', answer: o.answer, options: o.options };
  }

  // ---------- Câu hỏi phân số cùng mẫu ----------
  function genFrac(denoms) {
    var d = pick(denoms);
    var num1, num2, ans, op;
    if (Math.random() < 0.5) {
      op = '+';
      num1 = rnd(1, d - 1);
      num2 = rnd(1, Math.max(1, d - num1)); // tổng ≤ d (phân số ≤ 1)
      ans = num1 + num2;
    } else {
      op = '−';
      num1 = rnd(2, d);          // số bị trừ lớn hơn
      num2 = rnd(1, num1 - 1);
      ans = num1 - num2;
    }
    var o = fracOptions(ans, d);
    return { text: num1 + '/' + d + ' ' + op + ' ' + num2 + '/' + d + ' = ?', answer: o.answer, options: o.options };
  }

  // ---------- Câu hỏi tỉ số phần trăm (lớp 5) ----------
  function genPct() {
    var p = pick([10, 20, 25, 50]);
    var k = rnd(2, 20);
    var base = (100 / p) * k; // đảm bảo chia hết
    var ans = base * p / 100; // = k
    return { text: p + '% của ' + base + ' = ?', answer: String(ans), options: intOptions(ans) };
  }

  // ---------- Sinh câu hỏi theo (lớp, phép tính) ----------
  function gen(g, op) {
    var a, b, q;
    if (g <= 1) {
      if (op === '-') { a = rnd(2, 20); b = rnd(1, a); return qInt('−', a, b, a - b); }
      a = rnd(1, 14); b = rnd(1, 20 - a); return qInt('+', a, b, a + b);
    }
    if (g === 2) {
      if (op === '×') { a = pick([2, 3, 4, 5]); b = rnd(2, 9); return qInt('×', a, b, a * b); }
      if (op === '÷') { b = pick([2, 3, 4, 5]); q = rnd(2, 9); return qInt(':', b * q, b, q); }
      if (op === '-') { a = rnd(20, 99); b = rnd(1, a); return qInt('−', a, b, a - b); }
      a = rnd(11, 79); b = rnd(1, 99 - a); return qInt('+', a, b, a + b);
    }
    if (g === 3) {
      if (op === '×') {
        if (Math.random() < 0.5) { a = rnd(2, 9); b = rnd(2, 9); }
        else { a = rnd(11, 49); b = rnd(2, 9); }
        return qInt('×', a, b, a * b);
      }
      if (op === '÷') { b = rnd(2, 9); q = rnd(2, 20); return qInt(':', b * q, b, q); }
      if (op === '-') { a = rnd(101, 999); b = rnd(1, a); return qInt('−', a, b, a - b); }
      a = rnd(100, 899); b = rnd(10, 999 - a); return qInt('+', a, b, a + b);
    }
    if (g === 4) {
      if (op === 'frac') return genFrac([3, 4, 5, 6, 8]);
      if (op === '×') {
        if (Math.random() < 0.5) { a = rnd(101, 999); b = rnd(2, 9); }
        else { a = rnd(12, 99); b = rnd(11, 99); }
        return qInt('×', a, b, a * b);
      }
      if (op === '÷') { b = rnd(11, 30); q = rnd(2, 9); return qInt(':', b * q, b, q); }
      if (op === '-') { a = rnd(2000, 9999); b = rnd(100, a - 1); return qInt('−', a, b, a - b); }
      a = rnd(1000, 4999); b = rnd(1000, 4999); return qInt('+', a, b, a + b);
    }
    // g === 5
    if (op === 'frac') return genFrac([3, 4, 5, 6, 8, 10]);
    if (op === 'pct') return genPct();
    if (op === '×') { var d = dec1(1, 20); b = rnd(2, 9); return qDec('×', vn(d), b, Math.round(d * b * 10) / 10); }
    if (op === '÷') { b = rnd(2, 9); q = rnd(11, 99); return qInt(':', b * q, b, q); }
    if (op === '-') {
      var ai = rnd(3, 30), bi = rnd(1, ai - 1);
      var x = ai + rnd(1, 9) / 10, y = bi + rnd(1, 9) / 10; // ai > bi ⇒ x > y
      return qDec('−', vn(x), vn(y), Math.round((x - y) * 10) / 10);
    }
    var u = dec1(1, 20), v = dec1(1, 20);
    return qDec('+', vn(u), vn(v), Math.round((u + v) * 10) / 10);
  }

  // ---------- Chọn phép tính theo kỹ năng trọng tâm của game ----------
  function primaryOp(skill) {
    return skill === 'tru' ? '-'
      : skill === 'nhan' ? '×'
      : skill === 'chia' ? '÷'
      : skill === 'cong' ? '+'
      : null; // 'logic' → trộn đều
  }
  function allowedOps(g) {
    if (g <= 1) return ['+', '-'];
    if (g === 2 || g === 3) return ['+', '-', '×', '÷'];
    if (g === 4) return ['+', '-', '×', '÷', 'frac'];
    return ['+', '-', '×', '÷', 'frac', 'pct']; // lớp 5
  }
  function chooseOp(skill, g) {
    var allowed = allowedOps(g);
    var p = primaryOp(skill);
    if (p && allowed.indexOf(p) >= 0 && Math.random() < 0.55) return p; // ưu tiên kỹ năng trọng tâm
    return allowed[rnd(0, allowed.length - 1)];
  }

  // ---------- API công khai ----------
  // Kẹp lớp của học sinh về đúng tầm game hỗ trợ rồi sinh 1 câu hỏi
  function makeQuestion(skill, minG, maxG) {
    var g = _grade;
    if (minG) g = Math.max(g, minG);
    if (maxG) g = Math.min(g, maxG);
    if (g < 1) g = 1; if (g > 5) g = 5;
    return gen(g, chooseOp(skill, g));
  }

  // Đọc lớp từ hồ sơ đang đăng nhập (bất đồng bộ). Gọi khi trang tải xong.
  function loadGrade() {
    try {
      if (window.TVKN && TVKN.getProfile) {
        return TVKN.getProfile().then(function (p) {
          if (p && p.grade) { var n = Number(p.grade); if (n >= 1 && n <= 5) _grade = n; }
          return _grade;
        }).catch(function () { return _grade; });
      }
    } catch (e) {}
    return Promise.resolve(_grade);
  }

  function setGrade(g) { var n = Number(g); if (n >= 1 && n <= 5) _grade = n; }
  function getGrade() { return _grade; }

  return { makeQuestion: makeQuestion, loadGrade: loadGrade, setGrade: setGrade, getGrade: getGrade };
})();
