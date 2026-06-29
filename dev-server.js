// ============================================================
//  SERVER DEV CHO LOCAL  —  TOÁN VUI KẾT NỐI
// ------------------------------------------------------------
//  CHỈ dùng khi chạy thử ở máy (KHÔNG deploy — đã loại trong .vercelignore).
//  Phục vụ web tĩnh + chạy hàm /api/ai-tutor giống Vercel, KHÔNG cần đăng nhập.
//
//  Cách chạy:   node dev-server.js
//  Rồi mở:      http://localhost:3000/ai-gia-su
// ============================================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

// Nạp .env (để api/ai-tutor.js đọc được GEMINI_API_KEY)
try {
  for (const line of fs.readFileSync(path.join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
    const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch { /* không có .env cũng được */ }

const aiTutor = require('./api/ai-tutor.js');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.ico': 'image/x-icon', '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

  // ---- API: /api/ai-tutor ----
  if (urlPath === '/api/ai-tutor') {
    let raw = '';
    req.on('data', c => { raw += c; });
    req.on('end', () => {
      try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }
      const adapter = {
        statusCode: 200,
        status(c) { this.statusCode = c; return this; },
        json(obj) {
          res.writeHead(this.statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify(obj));
        },
      };
      Promise.resolve(aiTutor(req, adapter)).catch(err => {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: String(err && err.message || err) }));
      });
    });
    return;
  }

  // ---- File tĩnh (hỗ trợ cleanUrls: /ai-gia-su -> ai-gia-su.html) ----
  let rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  let file = path.join(ROOT, rel);
  if (!fs.existsSync(file) && !path.extname(file)) file += '.html';

  // Chặn truy cập ra ngoài thư mục dự án
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }

  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('404 — Không tìm thấy: ' + rel); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('Toán Vui Kết Nối — server dev đang chạy:');
  console.log('  →  http://localhost:' + PORT + '/');
  console.log('  →  http://localhost:' + PORT + '/ai-gia-su   (Gia sư AI)');
  console.log('Model AI:', process.env.GEMINI_MODEL || 'gemini-2.5-flash',
    '| Key:', process.env.GEMINI_API_KEY ? 'đã nạp ✔' : 'CHƯA CÓ ✘');
  console.log('Dừng server: Ctrl + C');
});
