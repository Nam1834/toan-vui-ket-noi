// ============================================================
//  CẤU HÌNH SUPABASE  —  TOÁN VUI KẾT NỐI
// ------------------------------------------------------------
//  Bước 1: Vào https://supabase.com → New project (miễn phí).
//  Bước 2: Trong project → Settings → API:
//            • "Project URL"        → dán vào SUPABASE_URL
//            • "anon public" key     → dán vào SUPABASE_ANON_KEY
//  Lưu ý: anon key là KHÓA CÔNG KHAI, an toàn để ở frontend.
//         TUYỆT ĐỐI KHÔNG dán "service_role" key vào đây.
// ============================================================

const SUPABASE_URL      = 'https://yadfuviwwwoqtclorjeb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_zoVnqntIaLOAGKtZ7mP2YQ_FTUQIYwm';

// Tự nhận biết đã cấu hình hay chưa
const TVKN_CONFIGURED =
  !SUPABASE_URL.includes('YOUR-PROJECT') && !SUPABASE_ANON_KEY.includes('YOUR_');

// Tạo client (cần thẻ <script> supabase-js đứng TRƯỚC file này)
let sb = null;
if (TVKN_CONFIGURED && window.supabase) {
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else if (!TVKN_CONFIGURED) {
  console.warn('[TVKN] Chưa cấu hình Supabase — hãy điền URL + anon key vào supabase-config.js');
}
