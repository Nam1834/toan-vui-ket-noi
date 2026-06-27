// ============================================================
//  TVKN — DỮ LIỆU BÀI HỌC (lõi)
//  File này chỉ khai báo khung + METADATA từng LỚP.
//  Nội dung bài học nằm ở các file riêng theo lớp:
//    lessons-lop1.js, lessons-lop2.js, ... (nạp SAU file này).
//  Mỗi file lớp gọi: Object.assign(TVKN_LESSONS.lessons, { '<id>': {...} })
//  Engine tự suy ra thứ tự bài theo (grade, no) — không cần liệt kê id thủ công.
//  THÊM BÀI = thêm 1 mục vào file lớp tương ứng (không tạo file HTML).
// ============================================================
window.TVKN_LESSONS = {

  // Metadata từng LỚP (banner trang danh sách bài)
  grades: {
    1: { title: '🐣 Hành trình Toán Lớp 1', tag: '📘 SGK Kết nối tri thức với cuộc sống', intro: 'Cùng Gà Con làm quen với các con số nhé! Mỗi ngày một bài, em sẽ giỏi Toán lúc nào không hay.', mascot: '🐣', theme: 'green' },
    2: { title: '🐼 Hành trình Toán Lớp 2', tag: '📙 SGK Kết nối tri thức với cuộc sống', intro: 'Cùng Gấu Panda ôn tập các số đến 100, phép cộng trừ và nhiều điều thú vị nhé!', mascot: '🐼', theme: 'blue' },
    3: { title: '🦊 Hành trình Toán Lớp 3', tag: '📗 SGK Kết nối tri thức với cuộc sống', intro: 'Cùng Cáo Con khám phá các số đến 1000, nhân chia và hình học nhé!', mascot: '🦊', theme: 'orange' },
    4: { title: '🐰 Hành trình Toán Lớp 4', tag: '📘 SGK Kết nối tri thức với cuộc sống', intro: 'Cùng Thỏ chinh phục số lớn, phân số và các phép tính nâng cao nhé!', mascot: '🐰', theme: 'purple' },
    5: { title: '🦁 Hành trình Toán Lớp 5', tag: '📕 SGK Kết nối tri thức với cuộc sống', intro: 'Cùng Sư Tử chinh phục số thập phân, tỉ số phần trăm và hình học nhé!', mascot: '🦁', theme: 'pink' }
  },

  // Nội dung bài — các file lessons-lopN.js sẽ đổ vào đây
  lessons: {}
};
