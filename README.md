# 🐰 Toán Vui Kết Nối

Web học toán cho học sinh tiểu học — **HTML tĩnh + [Supabase](https://supabase.com)** (đăng nhập, lưu tiến độ, XP, huy hiệu, bảng xếp hạng). Triển khai trên **Vercel**.

## Cấu trúc

```
.
├── index.html              # Trang chủ ( / )
├── bai-1.html … bai-10.html # 10 bài học
├── lam-bai-tap.html        # Luyện tập (chấm điểm, lưu tiến độ)
├── trang-lop.html          # Danh sách bài + mở khóa theo tiến độ
├── ho-so.html, huy-hieu.html, bang-xep-hang.html, thu-thach.html
├── tro-choi.html + các game (ban-bong, dua-xe, kho-bau, rung-chuong, xay-lau-dai)
├── dang-nhap.html, dang-ky.html
├── admin.html              # Trang quản trị ( /admin — BẮT BUỘC đăng nhập + role admin )
├── assets/js/              # auth.js, supabase-config.js (dùng chung)
├── sql/                    # Lược đồ & RPC Supabase (chạy trong SQL Editor)
├── docs/                   # Tài liệu thiết kế (không deploy)
└── vercel.json             # cleanUrls: URL gọn (/bai-1, /admin …)
```

## Đăng nhập

- **Học sinh:** không bắt buộc đăng nhập — vẫn học/chơi được ở chế độ khách; đăng nhập để lưu tiến độ.
- **Phụ huynh:** đăng ký tài khoản phụ huynh → liên kết con bằng mã → trang riêng `/phu-huynh` (chỉ xem).
- **Giáo viên:** đăng ký tài khoản giáo viên → tạo lớp (nhận **mã lớp**) → HS nhập mã ở Hồ sơ để vào lớp → trang riêng `/giao-vien` theo dõi tiến độ cả lớp (chỉ xem).
- **Quản trị (`/admin`):** bắt buộc đăng nhập bằng tài khoản có `role = 'admin'`.

## Cấu hình Supabase

1. Tạo project tại [supabase.com](https://supabase.com).
2. Điền `SUPABASE_URL` + `anon key` vào `assets/js/supabase-config.js`.
3. Mở SQL Editor, chạy lần lượt các file trong `sql/`:
   `supabase-schema.sql` → `supabase-roles.sql` → `supabase-extra.sql` → `supabase-admin-stats.sql` → `supabase-parent.sql` → `supabase-study-time.sql` → `supabase-teacher.sql`.
   ⚠️ `supabase-teacher.sql` chạy **cuối cùng** (định nghĩa lại `handle_new_user` gộp cả role `teacher`).
4. Thêm email admin trong `sql/supabase-roles.sql` (bảng `admin_emails`).
