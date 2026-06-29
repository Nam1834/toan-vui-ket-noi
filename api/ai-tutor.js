// ============================================================
//  GIA SƯ AI "THỎ TOÁN"  —  TOÁN VUI KẾT NỐI
// ------------------------------------------------------------
//  Vercel Serverless Function (chạy trên máy chủ, KHÔNG lộ key).
//  Dùng Google Gemini (có bậc MIỄN PHÍ).
//
//  CÁCH BẬT (làm 1 lần):
//   1) Lấy API key miễn phí tại  https://aistudio.google.com/apikey
//   2) Vercel → Project → Settings → Environment Variables:
//        • Name : GEMINI_API_KEY     Value: <key vừa lấy>
//        • (tuỳ chọn) GEMINI_MODEL   Value: gemini-2.5-flash
//   3) Redeploy lại project.
//
//  Frontend gọi:  POST /api/ai-tutor
//    - Hỏi bài:  { grade, topic, history:[{role:'user'|'model', text}] }
//    - Đọc ảnh:  { action:'ocr', grade, image:'data:image/png;base64,...' }
//  Trả về:        { text: '...' }   hoặc   { error: '...' }
// ============================================================

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

// ---- "Tính cách" & quy tắc sư phạm của Thỏ Toán ----
function buildSystemPrompt(grade, topic, context) {
  const parts = [
    'Bạn là "Thỏ Toán" — một gia sư AI thân thiện, kiên nhẫn, dành cho HỌC SINH TIỂU HỌC Việt Nam (chương trình SGK Kết nối tri thức với cuộc sống).',
    grade ? `Học sinh đang học LỚP ${grade}.` : '',
    topic ? `Bài học hiện tại: ${topic}.` : '',
    '',
    'VĂN PHONG (BẮT BUỘC bám đúng):',
    '- Xưng là "Thỏ", gọi học sinh là "em". Giọng ấm áp, khích lệ, vui vẻ.',
    '- Câu NGẮN, dễ hiểu, đúng lứa tuổi tiểu học. Dùng emoji nhẹ nhàng (🐰 ✨ 🎯 ➕ 🍎), KHÔNG lạm dụng.',
    '- Trình bày TỪNG BƯỚC rõ ràng, có thể đánh số bước. Luôn mời em tự làm trước.',
    'Ví dụ giọng Thỏ: "Đừng lo nhé! Thỏ sẽ gợi ý từng bước cho em 🐰. Em thử đọc lại đề xem cho biết gì nào?"',
    '',
    'NGUYÊN TẮC BẮT BUỘC:',
    '1. Mặc định là "gia sư đồng hành": HƯỚNG DẪN TỪNG BƯỚC, đặt câu hỏi gợi mở, KHÔNG đưa đáp án cuối ngay. Để em tự suy nghĩ trước.',
    '2. NGOẠI LỆ BẮT BUỘC: khi em YÊU CẦU XEM ĐÁP ÁN / lời giải đầy đủ (ví dụ bấm nút "Xem đáp án", hoặc nói "cho em xem đáp án"), em PHẢI trình bày LỜI GIẢI CHI TIẾT TỪNG BƯỚC kèm ĐÁP ÁN CUỐI CÙNG ngay lập tức. TUYỆT ĐỐI không từ chối, không bắt em tự làm lại, không hỏi vòng lại. (Sau khi giải xong có thể mời em làm thử một ví dụ tương tự.)',
    '3. Khi em trả lời sai, nhẹ nhàng chỉ chỗ chưa đúng và gợi ý lại — không chê bai.',
    '4. Bám sát kiến thức Toán tiểu học theo chương trình; KHÔNG dạy vượt quá lớp của em.',
    '5. Nếu câu hỏi không phải về Toán/học tập, nhẹ nhàng mời em quay lại bài học.',
    '6. Tuyệt đối phù hợp với trẻ em: không nội dung nhạy cảm, không hỏi thông tin cá nhân.',
  ];
  if (context && context.trim()) {
    parts.push(
      '',
      'HỌC LIỆU CHUẨN CỦA BÀI EM ĐANG HỌC — hãy BÁM SÁT nội dung, ví dụ và VĂN PHONG trong phần dưới đây khi trả lời:',
      '"""',
      context.trim(),
      '"""'
    );
  }
  return parts.filter(Boolean).join('\n');
}

async function callGemini(body) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return { ok: false, status: 500, error: 'Chưa cấu hình GEMINI_API_KEY trên máy chủ.' };
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`;
  let resp;
  try {
    resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (e) {
    return { ok: false, status: 502, error: 'Không kết nối được tới máy chủ AI.' };
  }
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    const msg = (data && data.error && data.error.message) || `Lỗi AI (${resp.status}).`;
    return { ok: false, status: resp.status, error: msg };
  }
  const text = (data.candidates && data.candidates[0] &&
    data.candidates[0].content && data.candidates[0].content.parts || [])
    .map(p => p.text || '').join('').trim();
  if (!text) {
    return { ok: false, status: 502, error: 'AI chưa trả lời được, em thử lại nhé.' };
  }
  return { ok: true, text };
}

// Tách "data:image/png;base64,XXXX" → { mime_type, data }
function parseDataUrl(dataUrl) {
  const m = /^data:([^;]+);base64,(.+)$/.exec(dataUrl || '');
  if (!m) return null;
  return { mime_type: m[1], data: m[2] };
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Chỉ hỗ trợ POST.' });
    return;
  }

  // Vercel thường tự parse JSON; phòng trường hợp body là chuỗi.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const grade = body.grade ? String(body.grade) : '';
  const topic = body.topic ? String(body.topic) : '';

  // ====== CHẾ ĐỘ 1: ĐỌC ĐỀ TRONG ẢNH (OCR) ======
  if (body.action === 'ocr') {
    const img = parseDataUrl(body.image);
    if (!img) {
      res.status(400).json({ error: 'Ảnh không hợp lệ.' });
      return;
    }
    const result = await callGemini({
      contents: [{
        role: 'user',
        parts: [
          { text: 'Đọc đề bài toán trong ảnh này. CHỈ chép lại nguyên văn nội dung đề bằng tiếng Việt, KHÔNG giải, KHÔNG thêm lời bình. Nếu có nhiều bài, chép tất cả.' },
          { inline_data: { mime_type: img.mime_type, data: img.data } },
        ],
      }],
      generationConfig: { temperature: 0.1, maxOutputTokens: 512 },
    });
    if (!result.ok) { res.status(result.status).json({ error: result.error }); return; }
    res.status(200).json({ text: result.text });
    return;
  }

  // ====== CHẾ ĐỘ 2: HỎI BÀI (hội thoại nhiều lượt) ======
  const history = Array.isArray(body.history) ? body.history : [];
  const contents = history
    .filter(m => m && typeof m.text === 'string' && m.text.trim())
    .map(m => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

  if (contents.length === 0) {
    res.status(400).json({ error: 'Chưa có câu hỏi.' });
    return;
  }

  const context = typeof body.context === 'string' ? body.context : '';
  const result = await callGemini({
    system_instruction: { parts: [{ text: buildSystemPrompt(grade, topic, context) }] },
    contents,
    generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
  });
  if (!result.ok) { res.status(result.status).json({ error: result.error }); return; }
  res.status(200).json({ text: result.text });
};
