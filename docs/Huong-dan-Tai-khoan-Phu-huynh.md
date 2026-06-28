# Hướng dẫn sử dụng — Tài khoản Phụ huynh

Tính năng cho phép **phụ huynh có tài khoản riêng** để **theo dõi việc học thật của con** (chỉ xem, không sửa). Phụ huynh và con liên kết với nhau bằng **mã liên kết**.

> Tóm tắt: Con có 1 **mã** trong Hồ sơ → đưa mã cho bố/mẹ → bố/mẹ đăng ký tài khoản phụ huynh và **nhập mã** → từ đó xem được tiến độ của con.

---

## 1. Cài đặt (làm 1 lần — dành cho người quản trị/kỹ thuật)

Tính năng cần chạy 1 file SQL trong Supabase:

1. Vào **Supabase Dashboard → SQL Editor → New query**.
2. Dán **toàn bộ** nội dung file `sql/supabase-parent.sql`.
3. Bấm **Run**.

> File này chạy **sau** `supabase-schema.sql` và `supabase-roles.sql` (đã chạy từ trước). File an toàn chạy lại nhiều lần (idempotent). Khi chạy, hệ thống cũng **tự cấp mã** cho các học sinh đã đăng ký trước đó.

Không cần cài thêm gì khác. Việc gửi email xác nhận (nếu có) là tuỳ chọn bật/tắt trong **Supabase → Authentication → Email → "Confirm email"** — không bắt buộc cho tính năng này.

---

## 2. Phụ huynh tạo tài khoản

1. Mở trang **Đăng ký**.
2. Ở đầu form chọn **👨‍👩‍👧 Phụ huynh** (mặc định là "Học sinh").
   - Khi chọn Phụ huynh: form **ẩn** phần chọn nhân vật và chọn Lớp (phụ huynh không cần).
3. Nhập **Họ tên**, **Email**, **Mật khẩu** (≥ 6 ký tự) → bấm **Đăng ký**.
4. Đăng nhập xong, hệ thống tự đưa vào **Trang Phụ huynh** (trang riêng, không phải giao diện học của con).

> Lần đầu chưa liên kết con nào, trang sẽ hiện ô **"Nhập mã của con để liên kết"**.

---

## 3. Con lấy mã liên kết (phía học sinh)

1. Con **đăng nhập** bằng tài khoản học sinh của mình.
2. Vào **Hồ sơ** (👤).
3. Tìm khối **"👨‍👩‍👧 Mã phụ huynh"** — hiển thị một mã dạng `ANH-4F2A`.
4. Bấm **📋 Sao chép** rồi đưa mã đó cho bố/mẹ (nhắn tin, đọc trực tiếp...).

**Đổi mã:** Bấm **🔄 Đổi mã** để tạo mã mới (ví dụ khi muốn cấp mã khác). Phụ huynh **đã liên kết trước đó vẫn xem được** — mã chỉ dùng để **tạo** liên kết, không dùng để duy trì.

---

## 4. Phụ huynh liên kết con

1. Ở **Trang Phụ huynh**, tại ô **"Liên kết với con"**, nhập **mã của con** (ví dụ `ANH-4F2A`).
2. Bấm **Liên kết**.
3. Thành công → trang hiển thị ngay **dữ liệu thật của con**.

**Nhiều con:** Lặp lại bước trên với mã của từng con. Khi có từ 2 con trở lên, đầu trang xuất hiện ô **"👶 Đang xem:"** để **chọn con** cần xem.

**Gỡ liên kết:** Bấm nút **"Gỡ"** cạnh ô chọn con để bỏ theo dõi con đang chọn.

---

## 5. Phụ huynh xem được gì

Sau khi liên kết, với mỗi con phụ huynh thấy **dữ liệu thật**:

- **Tổng quan học tập:** số bài đã hoàn thành / tổng bài (theo lớp của con), tổng điểm XP, số huy hiệu, số ngày học liên tiếp, xu thưởng, số lượt chơi trò chơi.
- **Hoạt động gần đây:** các việc con vừa làm (học bài, chơi game...) kèm điểm XP nhận được.
- Tên, avatar, lớp, ngày tham gia của con.

> Lưu ý: phần **biểu đồ tiến bộ** và **điểm mạnh / cần cải thiện** hiện đang là dữ liệu minh hoạ (sẽ thay bằng số liệu thật ở bản cập nhật sau).

---

## 6. Bảo mật & quyền riêng tư

- Phụ huynh **chỉ XEM** dữ liệu của con — **không thể sửa/xoá** bất cứ thứ gì (điểm, tiến độ, hồ sơ...).
- Phụ huynh **chỉ thấy con đã liên kết** với mình; **không** xem được học sinh khác.
- Một con có thể có **nhiều phụ huynh** (vd cả bố và mẹ); một phụ huynh xem được **nhiều con**.
- Con vẫn đăng nhập, học, nhận XP và lên **bảng xếp hạng** bình thường (phụ huynh **không** xuất hiện trên bảng xếp hạng).

---

## 7. Xử lý sự cố thường gặp

| Tình huống | Cách xử lý |
|-----------|-----------|
| Nhập mã báo **"Mã không đúng"** | Kiểm tra lại mã (đúng định dạng `CHU-XXXX`), gõ đủ cả phần sau dấu gạch. Mã không phân biệt hoa/thường. |
| Đăng ký phụ huynh nhưng vào nhầm giao diện học sinh | Đảm bảo đã **chọn "Phụ huynh"** lúc đăng ký. Nếu lỡ tạo nhầm tài khoản học sinh thì tạo lại tài khoản mới và chọn đúng. |
| Con không thấy khối "Mã phụ huynh" trong Hồ sơ | Cần đã chạy `sql/supabase-parent.sql`. Mã chỉ hiện cho **tài khoản học sinh**. |
| Liên kết xong nhưng số liệu = 0 | Bình thường nếu con **chưa học/chơi** gì; số liệu cập nhật khi con bắt đầu học. |
| Phụ huynh muốn ngừng theo dõi 1 con | Bấm **"Gỡ"** ở thanh chọn con. |

---

## 8. Ghi chú kỹ thuật (cho người phát triển)

- Vai trò (role): `student` | `parent` | `admin`. Admin **chỉ** xác định qua bảng `admin_emails` (client không tự nhận admin).
- Liên kết lưu ở bảng `parent_links (parent_id, child_id)`; mã ở cột `profiles.link_code`.
- Quyền đọc dữ liệu con dùng RLS `parent_read_*` (chỉ `SELECT`) + hàm `is_parent_of()`. Các RPC: `link_child`, `unlink_child`, `list_children`, `regenerate_link_code` (chỉ tài khoản đã đăng nhập đúng vai trò gọi được).
- Trang phụ huynh (`phu-huynh.html`) là **trang riêng**, không nằm trong shell học sinh.
- Phân luồng sau đăng nhập: `admin → admin.html`, `parent → phu-huynh.html`, còn lại `→ index.html`.

---

*Tài liệu cho Phase 1 (cốt lõi). Phase 2 dự kiến: báo cáo tuần, điểm mạnh/yếu theo chủ đề và biểu đồ tiến bộ tính từ dữ liệu thật.*
