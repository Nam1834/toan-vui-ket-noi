// ============================================================
//  ĐỌC TO GIỌNG TIẾNG VIỆT (Cloud TTS)  —  TOÁN VUI KẾT NỐI
// ------------------------------------------------------------
//  Vercel Serverless Function. Proxy tới Google Translate TTS
//  để CÓ GIỌNG vi-VN CHUẨN trên MỌI thiết bị — kể cả máy KHÔNG
//  cài giọng tiếng Việt (Web Speech API sẽ đọc sai/méo trên
//  các máy đó vì phải mượn giọng ngoại).
//
//  Vì sao proxy qua máy chủ thay vì gọi thẳng từ trình duyệt?
//   - Tránh khác biệt CORS/Referrer giữa các thiết bị (ổn định hơn).
//   - Đặt cache để đỡ tốn lượt gọi (cùng chữ → cùng file).
//
//  Frontend gọi:  GET /api/tts?q=<chữ cần đọc>&tl=vi
//  Trả về:        audio/mpeg (mp3)  hoặc  JSON { error }
//
//  KHÔNG cần API key. Endpoint tw-ob của Google là công khai
//  (không chính thức) — nếu Google đổi/chặn thì frontend tự
//  fallback về Web Speech API của trình duyệt.
// ============================================================

const MAX_LEN = 200; // giới hạn của endpoint tw-ob (mỗi lần ~200 ký tự)

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Chỉ hỗ trợ GET.' });
    return;
  }

  const q = (req.query && req.query.q ? String(req.query.q) : '').trim();
  const tl = (req.query && req.query.tl ? String(req.query.tl) : 'vi').trim() || 'vi';

  if (!q) { res.status(400).json({ error: 'Thiếu nội dung cần đọc.' }); return; }
  if (q.length > MAX_LEN) { res.status(400).json({ error: 'Nội dung quá dài.' }); return; }

  const url = 'https://translate.google.com/translate_tts'
    + '?ie=UTF-8&client=tw-ob&total=1&idx=0'
    + '&tl=' + encodeURIComponent(tl)
    + '&textlen=' + q.length
    + '&q=' + encodeURIComponent(q);

  let upstream;
  try {
    upstream = await fetch(url, {
      headers: {
        // Bắt buộc có User-Agent, nếu không Google trả 403.
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        'Referer': 'https://translate.google.com/',
        'Accept': 'audio/mpeg, */*',
      },
    });
  } catch (e) {
    res.status(502).json({ error: 'Không kết nối được dịch vụ đọc.' });
    return;
  }

  if (!upstream.ok) {
    res.status(502).json({ error: 'Dịch vụ đọc trả lỗi (' + upstream.status + ').' });
    return;
  }

  let buf;
  try {
    buf = Buffer.from(await upstream.arrayBuffer());
  } catch (e) {
    res.status(502).json({ error: 'Không đọc được âm thanh.' });
    return;
  }

  res.setHeader('Content-Type', 'audio/mpeg');
  // Cùng một câu luôn ra cùng file → cache mạnh để đỡ tốn lượt gọi.
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.status(200).send(buf);
};
