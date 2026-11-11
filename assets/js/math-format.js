/* ============================================================
 *  TVKN_MATH — Định dạng Toán cho câu trả lời của "Thỏ Toán"
 * ------------------------------------------------------------
 *  Chuyển văn bản AI (markdown nhẹ + ký hiệu Toán) sang HTML đẹp:
 *   - Phân số:   \frac{a}{b}, a/b           -> a kẻ ngang b
 *   - Hỗn số:    n \frac{a}{b},  n a/b      -> phần nguyên + phân số
 *   - Ký hiệu:   \times ×, \div ÷, \cdot ·, \le ≤, \ge ≥, \neq ≠, \pm ±
 *   - **đậm**, xuống dòng
 *  Dùng chung cho ai-gia-su.html và hoc-bai.html để format luôn thống nhất.
 * ============================================================ */
(function (w) {
  'use strict';

  function escapeHtml(str) {
    var d = document.createElement('div');
    d.textContent = (str == null ? '' : String(str));
    return d.innerHTML;
  }

  function fracHTML(n, d) {
    return '<span class="frac">' +
      '<span class="frac-n">' + String(n).trim() + '</span>' +
      '<span class="frac-d">' + String(d).trim() + '</span>' +
      '</span>';
  }

  // Áp cho chuỗi ĐÃ escape HTML. Không tạo thẻ nguy hiểm.
  function formatMath(s) {
    // 1) Ký hiệu LaTeX thường gặp -> ký tự Toán
    s = s
      .replace(/\\times\b/g, '×')
      .replace(/\\div\b/g, '÷')
      .replace(/\\cdot\b/g, '·')
      .replace(/\\pm\b/g, '±')
      .replace(/\\geq?\b/g, '≥')
      .replace(/\\leq?\b/g, '≤')
      .replace(/\\neq\b/g, '≠');

    // 2) \frac{a}{b} / \dfrac / \tfrac  (kèm hỗn số: n\frac{a}{b})
    s = s.replace(/(\d+)?\s*\\[dt]?frac\s*\{\s*([^{}]+?)\s*\}\s*\{\s*([^{}]+?)\s*\}/g,
      function (_, whole, n, d) {
        var f = fracHTML(n, d);
        return whole ? '<span class="mixed-whole">' + whole + '</span>' + f : f;
      });

    // 3) Dọn các dấu phân cách LaTeX còn sót: \( \) \[ \] và $
    s = s.replace(/\\[()\[\]]/g, '').replace(/\$/g, '');

    // 4) Hỗn số dạng thường: "n a/b"  (vd 2 1/3) — chạy TRƯỚC phân số thường
    s = s.replace(/(^|[\s(>])(\d+)\s+(\d+)\/(\d+)(?![\/\d])/g,
      function (_, pre, whole, n, d) {
        return pre + '<span class="mixed-whole">' + whole + '</span>' + fracHTML(n, d);
      });

    // 5) Phân số dạng thường: "a/b" (không đụng ngày tháng 8/11/2026 nhờ lookahead)
    s = s.replace(/(^|[^\d\/])(\d+)\/(\d+)(?![\/\d])/g,
      function (_, pre, n, d) {
        return pre + fracHTML(n, d);
      });

    return s;
  }

  // Văn bản AI (markdown nhẹ) -> HTML an toàn, có format Toán
  function renderRich(text) {
    var s = escapeHtml(text);
    s = s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');   // **đậm**
    s = formatMath(s);                               // phân số / hỗn số / ký hiệu
    s = s.replace(/\n/g, '<br>');                    // xuống dòng (cuối cùng)
    return s;
  }

  w.TVKN_MATH = { escapeHtml: escapeHtml, formatMath: formatMath, renderRich: renderRich };

  // Tiêm CSS phân số/hỗn số MỘT LẦN -> MỌI trang nạp file này hiển thị GIỐNG NHAU
  // (phần nguyên to, căn giữa cạnh phân số kẻ ngang — kiểu sách giáo khoa).
  (function injectMathCss() {
    try {
      if (document.getElementById('tvkn-math-css')) return;
      var st = document.createElement('style');
      st.id = 'tvkn-math-css';
      st.textContent =
        '.frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1;margin:0 .14em;font-size:.95em}' +
        '.frac-n{display:block;padding:0 .35em}' +
        '.frac-d{display:block;padding:2px .35em 0;border-top:2px solid currentColor}' +
        '.mixed-whole{display:inline-block;vertical-align:middle;margin-right:.08em;font-weight:700;font-size:1.5em;line-height:1}';
      (document.head || document.documentElement).appendChild(st);
    } catch (e) {}
  })();
})(window);
