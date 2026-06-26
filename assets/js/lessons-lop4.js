// ============================================================
//  TVKN — DỮ LIỆU BÀI HỌC LỚP 4 (SGK Kết nối tri thức)
//  Nạp SAU lessons.js. Engine suy thứ tự theo (grade, no).
// ============================================================
Object.assign(window.TVKN_LESSONS.lessons, {

  'lop4-bai-1': {
    grade: 4, no: 1, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Ôn tập các số đến 100 000',
    desc: 'Đọc, viết, phân tích và so sánh số có nhiều chữ số.',
    icon: '🔢',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Cùng Cú Mèo ôn lại các số lớn: hàng nghìn, hàng chục nghìn nhé!',
    steps: ['Cấu tạo số', 'So sánh', 'Luyện tập'],
    blocks: [
      { type: 'read-cards', title: '📖 Phân tích số', sub: 'Mỗi số bằng tổng giá trị các hàng. Bấm 🔊 Nghe nhé!', cards: [
        { num: 35280, sum: '35 280 = 30 000 + 5 000 + 200 + 80', say: 'ba mươi lăm nghìn hai trăm tám mươi' },
        { num: 65237, sum: '65 237 = 60 000 + 5 000 + 200 + 30 + 7', say: 'sáu mươi lăm nghìn hai trăm ba mươi bảy' },
        { num: 8888, sum: '8 888 = 8 000 + 800 + 80 + 8', say: 'tám nghìn tám trăm tám mươi tám' }
      ] },
      { type: 'mcq', title: '🔎 So sánh số', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Trong hai số 68 534 và 68 499, số nào lớn hơn?', options: [68534, 68499], correct: 68534, ok: 'So hàng trăm: 5 trăm lớn hơn 4 trăm.' },
        { q: 'Làm tròn 12 967 đến hàng nghìn được số nào?', options: [13000, 12000], correct: 13000, ok: 'Chữ số hàng trăm là 9, lớn hơn 5 nên làm tròn lên 13 000.' }
      ] },
      { type: 'sequence', title: '✏️ Dãy số và hàng xóm', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: 'Đếm thêm 1 000:', slots: [10000, 11000, { blank: 12000 }, { blank: 13000 }] },
        { label: 'Số liền trước và liền sau của 80 000:', slots: [{ blank: 79999 }, 80000, { blank: 80001 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Phân tích số là gì?', a: 'Là tách số thành tổng các hàng. Ví dụ 35 280 = 30 000 + 5 000 + 200 + 80 nhé! 🦉' },
      { q: 'So sánh số lớn thế nào?', a: 'Em so từ hàng cao nhất xuống. Số nào có chữ số ở hàng cao lớn hơn thì lớn hơn.' },
      { q: 'Làm tròn số là gì?', a: 'Xem chữ số ngay sau hàng cần làm tròn: nếu từ 5 trở lên thì làm tròn lên, bé hơn 5 thì làm tròn xuống.' }
    ], fallback: 'Câu hỏi hay! Cú Mèo gợi ý: em phân tích số theo từng hàng để dễ hiểu. 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền sau của 9 999 là số nào?', correct: 10000, hint: 'Thêm 1 đơn vị.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong hai số 45 600 và 45 060, số nào lớn hơn?', options: [{ l: 'A', v: 45600 }, { l: 'B', v: 45060 }, { l: 'C', v: 40560 }, { l: 'D', v: 46500 }], correct: 45600, hint: 'So hàng trăm: 6 trăm lớn hơn 0 trăm.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '45 600 lớn hơn 45 060. Đúng hay sai?', correct: true, hint: 'So hàng trăm.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Làm tròn 12 967 đến hàng nghìn được số nào?', correct: 13000, hint: 'Hàng trăm là 9, làm tròn lên.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số gồm 8 nghìn, 8 trăm, 8 chục và 8 đơn vị là số nào?', correct: 8888, hint: 'Viết lần lượt theo các hàng.' }
    ]
  },

  'lop4-bai-2': {
    grade: 4, no: 2, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Ôn tập các phép tính trong phạm vi 100 000',
    desc: 'Tính nhẩm, đặt tính và thứ tự thực hiện phép tính.',
    icon: '➗',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Cộng, trừ, nhân, chia với số lớn — Cú Mèo giúp em đây!',
    steps: ['Tính nhẩm', 'Đặt tính', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Thứ tự thực hiện phép tính', sub: 'Ghi nhớ quy tắc vàng nhé!', html: '<ul style="line-height:1.9"><li>Trong ngoặc làm <b>trước</b>.</li><li>Nhân, chia làm <b>trước</b>; cộng, trừ làm <b>sau</b>.</li><li>Nếu chỉ có cộng trừ (hoặc chỉ nhân chia) thì làm từ <b>trái sang phải</b>.</li></ul>' },
      { type: 'mcq', title: '⚡ Tính nhẩm', sub: 'Cộng trừ các số tròn nghìn thật nhanh!', questions: [
        { q: '8 000 + 7 000 = ?', options: [15000, 14000, 13000], correct: 15000, ok: '8 + 7 = 15, thêm ba số 0.' },
        { q: '16 000 − 9 000 = ?', options: [7000, 8000, 6000], correct: 7000, ok: '16 − 9 = 7, thêm ba số 0.' },
        { q: '80 000 : 2 = ?', options: [40000, 4000, 20000], correct: 40000, ok: '8 : 2 = 4, giữ bốn số 0.' }
      ] },
      { type: 'sequence', title: '✏️ Đếm thêm tròn nghìn', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Đếm thêm 5 000:', slots: [5000, 10000, { blank: 15000 }, { blank: 20000 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Tính nhẩm số tròn nghìn?', a: 'Em tính phần đầu rồi thêm các số 0 vào sau. Ví dụ 8 000 + 7 000 = 15 000 nhé! 🦉' },
      { q: 'Đặt tính là gì?', a: 'Viết các số thẳng cột theo hàng rồi tính từ phải sang trái, nhớ số nhớ nhé.' },
      { q: 'Phép nào làm trước?', a: 'Trong ngoặc trước, rồi nhân chia, cuối cùng cộng trừ.' }
    ], fallback: 'Cú Mèo gợi ý: em đặt tính thẳng cột và tính từ hàng đơn vị nhé. 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '8 254 + 6 392 = ?', correct: 14646, hint: 'Cộng từ hàng đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: '36 073 − 847 = ?', correct: 35226, hint: 'Trừ từ hàng đơn vị, nhớ mượn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '5 071 × 9 = ?', options: [{ l: 'A', v: 45639 }, { l: 'B', v: 45539 }, { l: 'C', v: 46639 }, { l: 'D', v: 45630 }], correct: 45639, hint: 'Nhân từng hàng với 9.' },
      { type: 'fill_blank', label: 'Điền số', q: '56 472 : 8 = ?', correct: 7059, hint: 'Chia lần lượt từ trái sang.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '80 000 : 2 = 40 000. Đúng hay sai?', correct: true, hint: '8 : 2 = 4.' }
    ]
  },

  'lop4-bai-3': {
    grade: 4, no: 3, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Số chẵn, số lẻ',
    desc: 'Nhận biết số chẵn, số lẻ qua chữ số tận cùng.',
    icon: '🔵',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Số tận cùng 0, 2, 4, 6, 8 là số chẵn nhé!',
    steps: ['Nhận biết', 'Dãy số', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Dấu hiệu chẵn, lẻ', sub: 'Nhìn chữ số tận cùng là biết ngay!', html: '<ul style="line-height:1.9"><li><b>Số chẵn</b>: tận cùng là 0, 2, 4, 6, 8 (chia hết cho 2).</li><li><b>Số lẻ</b>: tận cùng là 1, 3, 5, 7, 9 (không chia hết cho 2).</li></ul>' },
      { type: 'mcq', title: '🗂️ Phân loại nhanh', sub: 'Số này chẵn hay lẻ?', questions: [
        { q: 'Số 194 là số chẵn hay số lẻ?', options: [{ val: 'chan', label: 'Số chẵn' }, { val: 'le', label: 'Số lẻ' }], correct: 'chan', ok: 'Tận cùng là 4 nên là số chẵn.' },
        { q: 'Số 315 là số chẵn hay số lẻ?', options: [{ val: 'chan', label: 'Số chẵn' }, { val: 'le', label: 'Số lẻ' }], correct: 'le', ok: 'Tận cùng là 5 nên là số lẻ.' }
      ] },
      { type: 'sequence', title: '🏠 Dãy số nhà', sub: 'Hai số chẵn (hoặc lẻ) liên tiếp hơn kém nhau 2. Điền tiếp nhé!', rows: [
        { label: 'Số nhà chẵn:', slots: [116, 118, { blank: 120 }, { blank: 122 }, { blank: 124 }] },
        { label: 'Số nhà lẻ:', slots: [117, 119, { blank: 121 }, { blank: 123 }, { blank: 125 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Làm sao biết số chẵn?', a: 'Em nhìn chữ số cuối cùng: nếu là 0, 2, 4, 6, 8 thì là số chẵn nhé! 🦉' },
      { q: 'Số lẻ là gì?', a: 'Là số không chia hết cho 2, tận cùng là 1, 3, 5, 7 hoặc 9.' },
      { q: 'Hai số chẵn liên tiếp?', a: 'Chúng hơn kém nhau 2 đơn vị, ví dụ 116 và 118.' }
    ], fallback: 'Cú Mèo nhắc: chỉ cần nhìn chữ số tận cùng là biết chẵn hay lẻ nhé! 🦉' },
    quiz: [
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số 108 là số chẵn. Đúng hay sai?', correct: true, hint: 'Tận cùng là 8.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số 71 là số lẻ. Đúng hay sai?', correct: true, hint: 'Tận cùng là 1.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào dưới đây là số chẵn?', options: [{ l: 'A', v: 649 }, { l: 'B', v: 315 }, { l: 'C', v: 194 }, { l: 'D', v: 71 }], correct: 194, hint: 'Tìm số tận cùng là 0, 2, 4, 6, 8.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hai số chẵn liên tiếp hơn kém nhau mấy đơn vị?', correct: 2, hint: 'Ví dụ 116 và 118.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Từ 10 đến 20 có bao nhiêu số lẻ?', options: [{ l: 'A', v: 4 }, { l: 'B', v: 5 }, { l: 'C', v: 6 }, { l: 'D', v: 10 }], correct: 5, hint: 'Đó là 11, 13, 15, 17, 19.' }
    ]
  },

  'lop4-bai-4': {
    grade: 4, no: 4, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Biểu thức chứa chữ',
    desc: 'Dùng chữ thay cho số và tính giá trị biểu thức.',
    icon: '🔤',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Chữ a, b, m thay cho số chưa biết — thú vị lắm đây!',
    steps: ['Khái niệm', 'Tính giá trị', 'Hình học'],
    blocks: [
      { type: 'info', title: '💡 Biểu thức chứa chữ', sub: 'Mỗi lần thay chữ bằng số, ta được một giá trị.', html: '<p style="line-height:1.9">Nam gấp 2 thuyền, Mai gấp <b>a</b> thuyền. Tổng là <b>2 + a</b>.</p><ul style="line-height:1.9"><li>Nếu a = 4 thì 2 + a = 2 + 4 = <b>6</b>.</li><li>Nếu a = 12 thì 2 + a = 2 + 12 = <b>14</b>.</li></ul>' },
      { type: 'mcq', title: '🧮 Tính giá trị', sub: 'Thay chữ bằng số rồi tính nhé!', questions: [
        { q: 'Với a = 4, giá trị của 2 + a là?', options: [6, 8, 2], correct: 6, ok: '2 + 4 = 6.' },
        { q: 'Với b = 15, giá trị của 40 − b là?', options: [25, 55, 30], correct: 25, ok: '40 − 15 = 25.' },
        { q: 'Với m = 5, giá trị của 125 : m là?', options: [25, 20, 30], correct: 25, ok: '125 : 5 = 25.' }
      ] },
      { type: 'mcq', title: '📐 Chu vi hình vuông', sub: 'Chu vi hình vuông cạnh a là P = a × 4.', questions: [
        { q: 'Hình vuông cạnh a = 5 cm, chu vi P = a × 4 là?', options: [20, 9, 25], correct: 20, ok: '5 × 4 = 20 cm.' },
        { q: 'Hình vuông cạnh a = 9 cm, chu vi là?', options: [36, 18, 40], correct: 36, ok: '9 × 4 = 36 cm.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Biểu thức chứa chữ là gì?', a: 'Là biểu thức có chữ thay cho số chưa biết, ví dụ 2 + a. Thay a bằng số sẽ tính được giá trị nhé! 🦉' },
      { q: 'Tính giá trị thế nào?', a: 'Em thay chữ bằng số đề cho rồi tính như bình thường.' },
      { q: 'Chu vi hình vuông?', a: 'P = a × 4, với a là độ dài một cạnh.' }
    ], fallback: 'Cú Mèo gợi ý: thay chữ bằng số rồi tính nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Với a = 12, giá trị của 2 + a là?', correct: 14, hint: '2 + 12.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Với b = 27, giá trị của (b + 4) × 3 là?', correct: 93, hint: 'Tính trong ngoặc trước: 31 × 3.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình vuông cạnh a = 7 cm. Chu vi P = a × 4 là?', options: [{ l: 'A', v: 28 }, { l: 'B', v: 14 }, { l: 'C', v: 21 }, { l: 'D', v: 11 }], correct: 28, hint: '7 × 4.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Với a = 10 và b = 6, giá trị của a + b là?', correct: 16, hint: '10 + 6.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Với m = 5, biểu thức 125 : m có giá trị là 25. Đúng hay sai?', correct: true, hint: '125 : 5 = 25.' }
    ]
  },

  'lop4-bai-5': {
    grade: 4, no: 5, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Giải bài toán có ba bước tính',
    desc: 'Phân tích bài toán thành ba bước nhỏ rồi giải.',
    icon: '📝',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Bài toán khó chia thành ba bước nhỏ là dễ ngay!',
    steps: ['Quy trình', 'Tính tiền', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Bài toán trồng cây', sub: 'Giải theo ba bước nhé!', html: '<ul style="line-height:1.9"><li>Đội Một: 60 cây.</li><li>Bước 1 — Đội Hai = 60 + 20 = <b>80</b> cây.</li><li>Bước 2 — Đội Ba = 80 − 10 = <b>70</b> cây.</li><li>Bước 3 — Tổng = 60 + 80 + 70 = <b>210</b> cây.</li></ul>' },
      { type: 'sequence', title: '✏️ Điền kết quả từng bước', sub: 'Làm lần lượt từng bước nhé!', rows: [
        { label: 'Đội Hai = 60 + 20 =', slots: [{ blank: 80 }] },
        { label: 'Đội Ba = 80 − 10 =', slots: [{ blank: 70 }] },
        { label: 'Tổng = 60 + 80 + 70 =', slots: [{ blank: 210 }] }
      ] },
      { type: 'mcq', title: '🛒 Mua sắm', sub: 'Tính tiền văn phòng phẩm nhé!', questions: [
        { q: '5 quyển vở, mỗi quyển 8 000 đồng, hết bao nhiêu tiền?', options: [40000, 13000, 45000], correct: 40000, ok: '5 × 8 000 = 40 000 đồng.' },
        { q: '2 hộp bút chì màu, mỗi hộp 25 000 đồng, hết bao nhiêu?', options: [50000, 27000, 45000], correct: 50000, ok: '2 × 25 000 = 50 000 đồng.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Giải toán ba bước thế nào?', a: 'Em tìm dữ kiện chưa biết theo từng bước, mỗi bước một phép tính, rồi mới tính kết quả cuối nhé! 🦉' },
      { q: '"Nhiều hơn" làm phép gì?', a: 'Nhiều hơn thì làm phép cộng, ít hơn thì làm phép trừ.' },
      { q: 'Tính tiền nhiều món?', a: 'Tính tiền từng loại trước rồi cộng lại.' }
    ], fallback: 'Cú Mèo gợi ý: em viết rõ từng bước tính, đừng vội tính ngay kết quả cuối nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Đội Một 60 cây, Đội Hai nhiều hơn 20 cây. Đội Hai có mấy cây?', correct: 80, hint: '60 + 20.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đội Hai 80 cây, Đội Ba ít hơn 10 cây. Đội Ba có mấy cây?', correct: 70, hint: '80 − 10.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Tổng số cây ba đội: 60 + 80 + 70 = ?', correct: 210, hint: 'Cộng cả ba số.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '5 quyển vở, mỗi quyển 8 000 đồng, hết bao nhiêu tiền?', options: [{ l: 'A', v: 40000 }, { l: 'B', v: 13000 }, { l: 'C', v: 45000 }, { l: 'D', v: 4000 }], correct: 40000, hint: '5 × 8 000.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Thùng 120 lít, bán lần một 30 lít, lần hai gấp đôi (60 lít) thì còn lại 30 lít. Đúng hay sai?', correct: true, hint: '120 − 30 − 60 = 30.' }
    ]
  },

  'lop4-bai-6': {
    grade: 4, no: 6, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Luyện tập chung',
    desc: 'Ôn số chẵn lẻ, làm tròn, biểu thức và giải toán.',
    icon: '🎯',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Tổng kết Chủ đề 1 — Cú Mèo cùng em luyện tập nhé!',
    steps: ['Số học', 'Biểu thức', 'Luyện tập'],
    blocks: [
      { type: 'mcq', title: '🔵 Chẵn hay lẻ', sub: 'Nhìn chữ số tận cùng nhé!', questions: [
        { q: 'Số 65 237 là số chẵn hay số lẻ?', options: [{ val: 'chan', label: 'Số chẵn' }, { val: 'le', label: 'Số lẻ' }], correct: 'le', ok: 'Tận cùng là 7 nên là số lẻ.' },
        { q: 'Số 59 872 là số chẵn hay số lẻ?', options: [{ val: 'chan', label: 'Số chẵn' }, { val: 'le', label: 'Số lẻ' }], correct: 'chan', ok: 'Tận cùng là 2 nên là số chẵn.' }
      ] },
      { type: 'mcq', title: '🔁 Làm tròn và biểu thức', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Làm tròn 63 794 đến hàng nghìn?', options: [64000, 63000, 64800], correct: 64000, ok: 'Hàng trăm là 7, làm tròn lên 64 000.' },
        { q: 'Với a = 200, b = 100, giá trị của a + b − 135 là?', options: [165, 135, 300], correct: 165, ok: '200 + 100 − 135 = 165.' }
      ] },
      { type: 'sequence', title: '✏️ Đếm thêm 1', sub: 'Điền số liền sau nhé!', rows: [
        { label: 'Đếm thêm 1:', slots: [9998, 9999, { blank: 10000 }, { blank: 10001 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Số lẻ bé nhất hai chữ số?', a: 'Là số 11 đó — vừa lẻ, vừa có hai chữ số và bé nhất! 🦉' },
      { q: 'Làm tròn đến hàng nghìn?', a: 'Xem chữ số hàng trăm: từ 5 trở lên thì làm tròn lên.' },
      { q: 'Tính giá trị biểu thức?', a: 'Thay chữ bằng số rồi tính theo đúng thứ tự phép tính.' }
    ], fallback: 'Cú Mèo gợi ý: làm chậm từng phần, kiểm tra lại kết quả nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào dưới đây là số lẻ?', options: [{ l: 'A', v: 63794 }, { l: 'B', v: 59872 }, { l: 'C', v: 66053 }, { l: 'D', v: 12348 }], correct: 66053, hint: 'Tìm số tận cùng là 1, 3, 5, 7, 9.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Làm tròn 59 872 đến hàng nghìn được số nào?', correct: 60000, hint: 'Hàng trăm là 8, làm tròn lên.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số lẻ bé nhất có hai chữ số là 11. Đúng hay sai?', correct: true, hint: 'Vừa lẻ vừa nhỏ nhất.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Với c = 400, m = 5, n = 3: giá trị của c + m × n là?', correct: 415, hint: 'Nhân trước: 400 + 15.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền trước của 10 000 là?', correct: 9999, hint: 'Bớt 1 đơn vị.' }
    ]
  },

  'lop4-bai-7': {
    grade: 4, no: 7, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Đo góc, đơn vị đo góc',
    desc: 'Làm quen đơn vị độ và đọc số đo góc.',
    icon: '📐',
    topic: '📐 Chủ đề 2: Góc và đơn vị đo góc',
    banner: 'Đơn vị đo góc là độ, ký hiệu là dấu tròn nhỏ trên cao nhé!',
    steps: ['Đơn vị độ', 'Đọc số đo', 'Đồng hồ'],
    blocks: [
      { type: 'info', title: '💡 Đơn vị đo góc', sub: 'Ghi nhớ các mốc quen thuộc!', html: '<ul style="line-height:1.9"><li>Đơn vị đo góc là <b>độ</b>, ký hiệu °. Một độ viết là 1°.</li><li>Góc vuông = <b>90°</b>; góc bẹt = <b>180°</b>.</li><li>Thước đo góc có vạch chia từ 0 đến 180.</li></ul>' },
      { type: 'mcq', title: '🔎 Đọc số đo góc', sub: 'Chọn số đo đúng nhé!', questions: [
        { q: 'Góc vuông có số đo bao nhiêu độ?', options: [90, 60, 120], correct: 90, ok: 'Góc vuông luôn bằng 90°.' },
        { q: 'Góc bẹt có số đo bao nhiêu độ?', options: [180, 90, 60], correct: 180, ok: 'Góc bẹt bằng hai góc vuông, tức 180°.' }
      ] },
      { type: 'mcq', title: '🕐 Góc trên đồng hồ', sub: 'Hai kim tạo thành góc bao nhiêu độ?', questions: [
        { q: 'Lúc 3 giờ, hai kim đồng hồ tạo thành góc bao nhiêu độ?', options: [90, 180, 60], correct: 90, ok: 'Đó là một góc vuông.' },
        { q: 'Lúc 6 giờ, hai kim đồng hồ tạo thành góc bao nhiêu độ?', options: [180, 90, 60], correct: 180, ok: 'Hai kim thẳng hàng tạo góc bẹt 180°.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đơn vị đo góc là gì?', a: 'Là độ, viết bằng dấu ° nhỏ trên cao. Ví dụ 60° đọc là sáu mươi độ nhé! 🦉' },
      { q: 'Góc vuông bao nhiêu độ?', a: 'Góc vuông luôn bằng 90°.' },
      { q: 'Đo góc bằng gì?', a: 'Em dùng thước đo góc, đặt tâm thước trùng đỉnh góc rồi đọc số đo.' }
    ], fallback: 'Cú Mèo nhắc: góc vuông 90°, góc bẹt 180° nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Góc vuông có số đo bao nhiêu độ?', correct: 90, hint: 'Mốc quen thuộc nhất.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Góc bẹt có số đo bao nhiêu độ?', correct: 180, hint: 'Bằng hai góc vuông.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Lúc 4 giờ, hai kim đồng hồ tạo thành góc bao nhiêu độ?', options: [{ l: 'A', v: 120 }, { l: 'B', v: 90 }, { l: 'C', v: 60 }, { l: 'D', v: 180 }], correct: 120, hint: 'Mỗi giờ ứng với 30°, 4 × 30 = 120°.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Lúc 2 giờ, hai kim đồng hồ tạo thành góc 60°. Đúng hay sai?', correct: true, hint: '2 × 30 = 60°.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Đơn vị đo góc là gì?', options: [{ l: 'A', v: 'do' }, { l: 'B', v: 'cm' }, { l: 'C', v: 'kg' }, { l: 'D', v: 'l' }], correct: 'do', hint: 'Ký hiệu là dấu ° nhỏ.' }
    ]
  },

  'lop4-bai-8': {
    grade: 4, no: 8, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Góc nhọn, góc tù, góc bẹt',
    desc: 'Phân loại góc bằng cách so sánh với góc vuông.',
    icon: '📐',
    topic: '📐 Chủ đề 2: Góc và đơn vị đo góc',
    banner: 'Nhọn bé hơn vuông, tù lớn hơn vuông, bẹt bằng hai vuông!',
    steps: ['Định nghĩa', 'Phân loại', 'Đồng hồ'],
    blocks: [
      { type: 'info', title: '💡 Ba loại góc mới', sub: 'So sánh với góc vuông 90° nhé!', html: '<ul style="line-height:1.9"><li><b>Góc nhọn</b>: bé hơn góc vuong (< 90°).</li><li><b>Góc tù</b>: lớn hơn góc vuông (> 90° và < 180°).</li><li><b>Góc bẹt</b>: bằng hai góc vuông (= 180°).</li></ul>' },
      { type: 'mcq', title: '🗂️ Phân loại góc', sub: 'Góc này là góc gì?', questions: [
        { q: 'Góc 60° là góc gì?', options: [{ val: 'nhon', label: 'Góc nhọn' }, { val: 'tu', label: 'Góc tù' }, { val: 'bet', label: 'Góc bẹt' }], correct: 'nhon', ok: '60° bé hơn 90° nên là góc nhọn.' },
        { q: 'Góc 120° là góc gì?', options: [{ val: 'nhon', label: 'Góc nhọn' }, { val: 'tu', label: 'Góc tù' }, { val: 'bet', label: 'Góc bẹt' }], correct: 'tu', ok: '120° lớn hơn 90° nên là góc tù.' },
        { q: 'Góc 180° là góc gì?', options: [{ val: 'nhon', label: 'Góc nhọn' }, { val: 'tu', label: 'Góc tù' }, { val: 'bet', label: 'Góc bẹt' }], correct: 'bet', ok: '180° là góc bẹt.' }
      ] },
      { type: 'mcq', title: '🕐 Góc đồng hồ', sub: 'Xác định loại góc nhé!', questions: [
        { q: 'Lúc 9 giờ, hai kim tạo thành góc gì?', options: [{ val: 'vuong', label: 'Góc vuông' }, { val: 'tu', label: 'Góc tù' }, { val: 'bet', label: 'Góc bẹt' }], correct: 'vuong', ok: '9 giờ là góc vuông 90°.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Góc nhọn là gì?', a: 'Là góc bé hơn góc vuông, tức nhỏ hơn 90° đó! 🦉' },
      { q: 'Góc tù là gì?', a: 'Là góc lớn hơn góc vuông nhưng nhỏ hơn góc bẹt (giữa 90° và 180°).' },
      { q: 'Góc bẹt bằng mấy vuông?', a: 'Góc bẹt bằng hai góc vuông, tức 180°.' }
    ], fallback: 'Cú Mèo gợi ý: em so góc với góc vuông 90° để phân loại nhé! 🦉' },
    quiz: [
      { type: 'true_false', label: 'Đúng / Sai', q: 'Góc nhọn bé hơn góc vuông. Đúng hay sai?', correct: true, hint: 'Nhỏ hơn 90°.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Góc tù lớn hơn góc vuông. Đúng hay sai?', correct: true, hint: 'Lớn hơn 90°.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Góc có số đo 100° là góc gì?', options: [{ l: 'A', v: 'tu' }, { l: 'B', v: 'nhon' }, { l: 'C', v: 'vuong' }, { l: 'D', v: 'bet' }], correct: 'tu', hint: '100° lớn hơn 90°.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Góc bẹt bằng mấy góc vuông?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 1 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 2, hint: '180 : 90 = 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Góc bẹt có số đo bao nhiêu độ?', correct: 180, hint: 'Hai góc vuông.' }
    ]
  },

  'lop4-bai-9': {
    grade: 4, no: 9, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Luyện tập chung',
    desc: 'Ôn tập đo góc và nhận diện các loại góc.',
    icon: '🎯',
    topic: '📐 Chủ đề 2: Góc và đơn vị đo góc',
    banner: 'Tổng kết về góc — Cú Mèo cùng em luyện tập nhé!',
    steps: ['Số đo góc', 'So sánh', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Nhớ lại các loại góc', sub: 'Bảng tổng kết nhanh!', html: '<ul style="line-height:1.9"><li>Góc nhọn < 90°.</li><li>Góc vuông = 90°.</li><li>Góc tù > 90° (và < 180°).</li><li>Góc bẹt = 180°.</li></ul>' },
      { type: 'mcq', title: '🔎 Phân loại góc', sub: 'Góc này là góc gì?', questions: [
        { q: 'Góc 45° là góc gì?', options: [{ val: 'nhon', label: 'Góc nhọn' }, { val: 'tu', label: 'Góc tù' }, { val: 'bet', label: 'Góc bẹt' }], correct: 'nhon', ok: '45° bé hơn 90°.' },
        { q: 'Góc 150° là góc gì?', options: [{ val: 'nhon', label: 'Góc nhọn' }, { val: 'tu', label: 'Góc tù' }, { val: 'bet', label: 'Góc bẹt' }], correct: 'tu', ok: '150° lớn hơn 90° và nhỏ hơn 180°.' }
      ] },
      { type: 'mcq', title: '⚖️ So sánh góc', sub: 'Chọn góc lớn hơn nhé!', questions: [
        { q: 'Góc nào lớn hơn: 90° hay 120°?', options: [120, 90], correct: 120, ok: '120° lớn hơn 90°.' }
      ] }
    ],
    ai: { chips: [
      { q: 'So sánh hai góc thế nào?', a: 'Em so số đo của chúng: góc có số đo lớn hơn thì lớn hơn nhé! 🦉' },
      { q: 'Đo góc bằng dụng cụ gì?', a: 'Bằng thước đo góc, đặt tâm thước trùng đỉnh góc.' },
      { q: 'Góc 90° gọi là gì?', a: 'Đó là góc vuông.' }
    ], fallback: 'Cú Mèo gợi ý: nhớ bốn loại góc nhọn, vuông, tù, bẹt nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Góc 45° là góc gì?', options: [{ l: 'A', v: 'nhon' }, { l: 'B', v: 'tu' }, { l: 'C', v: 'vuong' }, { l: 'D', v: 'bet' }], correct: 'nhon', hint: 'Bé hơn 90°.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Góc 150° là góc gì?', options: [{ l: 'A', v: 'tu' }, { l: 'B', v: 'nhon' }, { l: 'C', v: 'vuong' }, { l: 'D', v: 'bet' }], correct: 'tu', hint: 'Lớn hơn 90°, nhỏ hơn 180°.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Góc vuông bằng bao nhiêu độ?', correct: 90, hint: 'Mốc cơ bản.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Góc 90° là góc vuông. Đúng hay sai?', correct: true, hint: 'Đúng định nghĩa.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong các góc 60°, 90°, 120°, 180°, góc nào lớn nhất?', options: [{ l: 'A', v: 180 }, { l: 'B', v: 120 }, { l: 'C', v: 90 }, { l: 'D', v: 60 }], correct: 180, hint: 'Đó là góc bẹt.' }
    ]
  },

  'lop4-bai-10': {
    grade: 4, no: 10, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Số có sáu chữ số. Số 1 000 000',
    desc: 'Đọc, viết số có sáu chữ số và làm quen số một triệu.',
    icon: '🔢',
    topic: '🔢 Chủ đề 3: Số có nhiều chữ số',
    banner: 'Hàng trăm nghìn và số một triệu thật là lớn đúng không nào!',
    steps: ['Đọc viết số', 'Một triệu', 'Luyện tập'],
    blocks: [
      { type: 'read-cards', title: '📖 Phân tích số sáu chữ số', sub: 'Bấm 🔊 Nghe để đọc theo nhé!', cards: [
        { num: 226372, sum: '226 372 = 200 000 + 20 000 + 6 000 + 300 + 70 + 2', say: 'hai trăm hai mươi sáu nghìn ba trăm bảy mươi hai' },
        { num: 300475, sum: '300 475 = 300 000 + 400 + 70 + 5', say: 'ba trăm nghìn bốn trăm bảy mươi lăm' },
        { num: 1000000, word: 'một triệu', say: 'một triệu' }
      ] },
      { type: 'mcq', title: '🔎 Một triệu', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Số liền sau của 999 999 là số nào?', options: [1000000, 100000, 999998], correct: 1000000, ok: 'Thêm 1 đơn vị được một triệu.' }
      ] },
      { type: 'sequence', title: '✏️ Bậc thang trăm nghìn', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Đếm thêm 100 000:', slots: [100000, 200000, { blank: 300000 }, { blank: 400000 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Số một triệu viết thế nào?', a: 'Là số 1 theo sau bởi sáu số 0: 1 000 000. Nó là số liền sau của 999 999 nhé! 🦉' },
      { q: 'Số sáu chữ số có những hàng nào?', a: 'Có hàng trăm nghìn, chục nghìn, nghìn, trăm, chục, đơn vị.' },
      { q: 'Đọc số lớn thế nào?', a: 'Em tách thành nhóm ba chữ số rồi đọc lần lượt từ trái sang nhé.' }
    ], fallback: 'Cú Mèo gợi ý: tách số thành nhóm ba chữ số cho dễ đọc nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền sau của 999 999 là?', correct: 1000000, hint: 'Thêm 1 đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Một triệu viết là số nào? (viết liền các chữ số)', correct: 1000000, hint: 'Số 1 và sáu số 0.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '882 936 = 800 000 + 80 000 + 2 000 + 900 + ? + 6. Số còn thiếu là?', options: [{ l: 'A', v: 30 }, { l: 'B', v: 300 }, { l: 'C', v: 3 }, { l: 'D', v: 90 }], correct: 30, hint: 'Đó là giá trị hàng chục.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 000 000 gồm 10 khối 100 000. Đúng hay sai?', correct: true, hint: '10 × 100 000 = 1 000 000.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số gồm 3 trăm nghìn, 4 trăm, 7 chục và 5 đơn vị là?', correct: 300475, hint: 'Các hàng nghìn và chục nghìn là 0.' }
    ]
  },

  'lop4-bai-11': {
    grade: 4, no: 11, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Hàng và lớp',
    desc: 'Nhóm các hàng thành lớp đơn vị, lớp nghìn, lớp triệu.',
    icon: '🗂️',
    topic: '🔢 Chủ đề 3: Số có nhiều chữ số',
    banner: 'Ba hàng liên tiếp gộp thành một lớp cho dễ đọc nhé!',
    steps: ['Lớp đơn vị, nghìn', 'Lớp triệu', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Hàng và lớp', sub: 'Ghi nhớ cách nhóm nhé!', html: '<ul style="line-height:1.9"><li><b>Lớp đơn vị</b>: hàng đơn vị, chục, trăm.</li><li><b>Lớp nghìn</b>: hàng nghìn, chục nghìn, trăm nghìn.</li><li><b>Lớp triệu</b>: hàng triệu, chục triệu, trăm triệu.</li></ul>' },
      { type: 'mcq', title: '🔎 Giá trị chữ số', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Trong số 362 820, chữ số 2 ở hàng nghìn có giá trị là?', options: [2000, 20, 200], correct: 2000, ok: 'Chữ số 2 ở hàng nghìn có giá trị 2 000.' },
        { q: 'Số 377 931 có chữ số ở hàng trăm nghìn là số nào?', options: [3, 7, 9], correct: 3, ok: 'Chữ số đầu tiên 3 ở hàng trăm nghìn.' }
      ] },
      { type: 'sequence', title: '✏️ Bậc thang triệu', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Đếm thêm 1 000 000:', slots: [2000000, 3000000, { blank: 4000000 }, { blank: 5000000 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Lớp là gì?', a: 'Là nhóm ba hàng liền nhau. Ví dụ lớp nghìn gồm hàng nghìn, chục nghìn, trăm nghìn nhé! 🦉' },
      { q: 'Lớp triệu gồm hàng nào?', a: 'Gồm hàng triệu, chục triệu, trăm triệu.' },
      { q: 'Giá trị chữ số phụ thuộc gì?', a: 'Phụ thuộc vào vị trí (hàng) của nó trong số.' }
    ], fallback: 'Cú Mèo gợi ý: nhóm ba chữ số một lớp để đọc số lớn dễ hơn nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Lớp đơn vị gồm các hàng nào?', options: [{ l: 'A', v: 'a' }, { l: 'B', v: 'b' }, { l: 'C', v: 'c' }, { l: 'D', v: 'd' }], correct: 'a', hint: 'A là đơn vị, chục, trăm.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Trong số 362 820, chữ số 2 ở hàng nghìn có giá trị là?', correct: 2000, hint: 'Hàng nghìn.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mười triệu viết là số nào?', correct: 10000000, hint: 'Số 1 và bảy số 0.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Lớp nghìn gồm hàng nghìn, chục nghìn và trăm nghìn. Đúng hay sai?', correct: true, hint: 'Đúng định nghĩa lớp nghìn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số 109 140 903 có chữ số ở hàng trăm triệu là?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 0 }, { l: 'C', v: 9 }, { l: 'D', v: 3 }], correct: 1, hint: 'Chữ số đầu tiên.' }
    ]
  },

  'lop4-bai-12': {
    grade: 4, no: 12, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Các số trong phạm vi lớp triệu',
    desc: 'Đọc, viết và phân tích số có đến chín chữ số.',
    icon: '🔢',
    topic: '🔢 Chủ đề 3: Số có nhiều chữ số',
    banner: 'Số dân các nước lên đến hàng trăm triệu — cùng khám phá nhé!',
    steps: ['Đọc số', 'Phân tích', 'Luyện tập'],
    blocks: [
      { type: 'read-cards', title: '📖 Phân tích số lớp triệu', sub: 'Bấm 🔊 Nghe để đọc theo nhé!', cards: [
        { num: 109140903, sum: '109 140 903 = 100 000 000 + 9 000 000 + 100 000 + 40 000 + 900 + 3', say: 'một trăm linh chín triệu một trăm bốn mươi nghìn chín trăm linh ba' },
        { num: 97338579, word: 'số dân Việt Nam năm 2020', say: 'chín mươi bảy triệu ba trăm ba mươi tám nghìn năm trăm bảy mươi chín' }
      ] },
      { type: 'mcq', title: '🔎 Xác định hàng', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Trong số 372 100 425, chữ số ở hàng triệu là số nào?', options: [2, 3, 7], correct: 2, ok: 'Nhóm triệu là 372, chữ số hàng triệu là 2.' }
      ] },
      { type: 'sequence', title: '✏️ Bậc thang trăm triệu', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Đếm thêm 100 000 000:', slots: [600000000, 700000000, { blank: 800000000 }, { blank: 900000000 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Số chín chữ số đọc thế nào?', a: 'Em tách thành ba lớp (triệu, nghìn, đơn vị) rồi đọc từng lớp từ trái sang nhé! 🦉' },
      { q: 'Một trăm triệu viết sao?', a: 'Là 100 000 000 — số 1 và tám số 0.' },
      { q: 'Phân tích số lớn?', a: 'Tách thành tổng giá trị các hàng, ví dụ 109 140 903 = 100 000 000 + 9 000 000 + ...' }
    ], fallback: 'Cú Mèo gợi ý: tách số thành ba lớp để đọc cho rõ nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '109 140 903 = 100 000 000 + ? + 100 000 + 40 000 + 900 + 3. Số còn thiếu là?', correct: 9000000, hint: 'Giá trị hàng triệu.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số 126 476 461 có mấy chữ số?', options: [{ l: 'A', v: 9 }, { l: 'B', v: 8 }, { l: 'C', v: 7 }, { l: 'D', v: 10 }], correct: 9, hint: 'Đếm từng chữ số.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số 273 523 615 đọc bắt đầu là "hai trăm bảy mươi ba triệu". Đúng hay sai?', correct: true, hint: 'Nhóm triệu là 273.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Một trăm triệu viết là số nào?', correct: 100000000, hint: 'Số 1 và tám số 0.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong 372 100 425, chữ số ở hàng triệu là?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 7 }, { l: 'D', v: 1 }], correct: 2, hint: 'Nhóm triệu là 372.' }
    ]
  },

  'lop4-bai-13': {
    grade: 4, no: 13, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Làm tròn số đến hàng trăm nghìn',
    desc: 'Quy tắc làm tròn dựa vào chữ số hàng chục nghìn.',
    icon: '🔁',
    topic: '🔢 Chủ đề 3: Số có nhiều chữ số',
    banner: 'Xét chữ số hàng chục nghìn để làm tròn lên hay xuống nhé!',
    steps: ['Quy tắc', 'Ứng dụng', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Quy tắc làm tròn', sub: 'Làm tròn đến hàng trăm nghìn.', html: '<ul style="line-height:1.9"><li>Xét chữ số ở <b>hàng chục nghìn</b>.</li><li>Nếu <b>bé hơn 5</b> thì làm tròn xuống.</li><li>Nếu <b>từ 5 trở lên</b> thì làm tròn lên.</li></ul>' },
      { type: 'mcq', title: '🔎 Làm tròn số', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: 'Làm tròn 2 712 615 đến hàng trăm nghìn?', options: [2700000, 2800000, 2710000], correct: 2700000, ok: 'Hàng chục nghìn là 1, bé hơn 5 nên làm tròn xuống.' },
        { q: 'Làm tròn 2 890 000 đến hàng trăm nghìn?', options: [2900000, 2800000, 3000000], correct: 2900000, ok: 'Hàng chục nghìn là 9, làm tròn lên.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Làm tròn đến trăm nghìn?', a: 'Em xem chữ số hàng chục nghìn: từ 5 trở lên thì làm tròn lên, bé hơn 5 thì làm tròn xuống nhé! 🦉' },
      { q: 'Làm tròn xuống là gì?', a: 'Giữ nguyên hàng trăm nghìn, các hàng sau thành 0.' },
      { q: 'Làm tròn lên là gì?', a: 'Tăng hàng trăm nghìn thêm 1, các hàng sau thành 0.' }
    ], fallback: 'Cú Mèo gợi ý: nhìn chữ số hàng chục nghìn rồi quyết định nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Làm tròn 18 490 000 đến hàng trăm nghìn?', options: [{ l: 'A', v: 18500000 }, { l: 'B', v: 18400000 }, { l: 'C', v: 18000000 }, { l: 'D', v: 19000000 }], correct: 18500000, hint: 'Hàng chục nghìn là 9, làm tròn lên.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Làm tròn 2 125 000 đến hàng trăm nghìn?', correct: 2100000, hint: 'Hàng chục nghìn là 2, làm tròn xuống.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Làm tròn 250 001 đến hàng trăm nghìn được 300 000. Đúng hay sai?', correct: true, hint: 'Hàng chục nghìn là 5, làm tròn lên.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào làm tròn đến hàng trăm nghìn thì được 200 000?', options: [{ l: 'A', v: 149000 }, { l: 'B', v: 190001 }, { l: 'C', v: 250001 }, { l: 'D', v: 284910 }], correct: 190001, hint: 'Hàng chục nghìn phải là 9 và làm tròn lên thành 200 000.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Làm tròn 3 365 200 đến hàng trăm nghìn?', correct: 3400000, hint: 'Hàng chục nghìn là 6, làm tròn lên.' }
    ]
  },

  'lop4-bai-14': {
    grade: 4, no: 14, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'So sánh các số có nhiều chữ số',
    desc: 'Quy tắc so sánh và sắp xếp thứ tự số lớn.',
    icon: '⚖️',
    topic: '🔢 Chủ đề 3: Số có nhiều chữ số',
    banner: 'Số nào nhiều chữ số hơn thì lớn hơn — quy tắc dễ nhớ!',
    steps: ['Quy tắc', 'So sánh', 'Lập số'],
    blocks: [
      { type: 'info', title: '💡 Hai quy tắc so sánh', sub: 'Ghi nhớ nhé!', html: '<ul style="line-height:1.9"><li><b>Quy tắc 1</b>: Số nào có nhiều chữ số hơn thì lớn hơn.</li><li><b>Quy tắc 2</b>: Cùng số chữ số thì so từng cặp chữ số từ trái sang phải.</li></ul>' },
      { type: 'mcq', title: '🔎 So sánh số', sub: 'Chọn số lớn hơn nhé!', questions: [
        { q: 'Số nào lớn hơn: 200 000 000 hay 99 999 999?', options: [200000000, 99999999], correct: 200000000, ok: 'Số 200 000 000 có 9 chữ số, nhiều hơn nên lớn hơn.' },
        { q: 'Số nào lớn hơn: 230 000 000 hay 108 000 000?', options: [230000000, 108000000], correct: 230000000, ok: 'Hàng trăm triệu: 2 lớn hơn 1.' }
      ] },
      { type: 'sequence', title: '✏️ Đếm thêm 10 triệu', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Đếm thêm 10 000 000:', slots: [80000000, 90000000, { blank: 100000000 }, { blank: 110000000 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'So sánh số lớn thế nào?', a: 'Đầu tiên đếm số chữ số: số nào nhiều chữ số hơn thì lớn hơn. Nếu bằng nhau thì so từng hàng từ trái sang nhé! 🦉' },
      { q: 'Số bé nhất chín chữ số?', a: 'Là 100 000 000 — không thể bắt đầu bằng 0.' },
      { q: 'Sắp xếp số thế nào?', a: 'Em so sánh từng cặp rồi xếp theo thứ tự từ bé đến lớn hoặc ngược lại.' }
    ], fallback: 'Cú Mèo gợi ý: đếm số chữ số trước, rồi mới so từng hàng nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào lớn nhất?', options: [{ l: 'A', v: 200000000 }, { l: 'B', v: 99999999 }, { l: 'C', v: 100000000 }, { l: 'D', v: 98000000 }], correct: 200000000, hint: 'So số chữ số trước.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '230 000 000 lớn hơn 108 000 000. Đúng hay sai?', correct: true, hint: 'So hàng trăm triệu.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số bé nhất có chín chữ số là?', correct: 100000000, hint: 'Bắt đầu bằng 1, theo sau là tám số 0.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '3 405 000 và (3 000 000 + 400 000 + 5 000), dấu nào đúng?', options: [{ l: 'A', v: '=' }, { l: 'B', v: '>' }, { l: 'C', v: '<' }, { l: 'D', v: 'kh' }], correct: '=', hint: 'Tổng bên phải cũng bằng 3 405 000.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Nhà bác Ba 950 000 000 đồng, chú Sáu 1 000 000 000 đồng. Số nào lớn hơn? (viết số)', correct: 1000000000, hint: 'Số có 10 chữ số lớn hơn.' }
    ]
  },

  'lop4-bai-15': {
    grade: 4, no: 15, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Làm quen với dãy số tự nhiên',
    desc: 'Đặc điểm của dãy số tự nhiên, số liền trước, liền sau.',
    icon: '🔢',
    topic: '🔢 Chủ đề 3: Số có nhiều chữ số',
    banner: 'Số tự nhiên bé nhất là 0, và không có số lớn nhất đâu nhé!',
    steps: ['Đặc điểm', 'Liền trước, sau', 'Quy luật'],
    blocks: [
      { type: 'info', title: '💡 Dãy số tự nhiên', sub: 'Các số 0, 1, 2, 3, 4, ...', html: '<ul style="line-height:1.9"><li>Số tự nhiên bé nhất là <b>0</b>.</li><li><b>Không có</b> số tự nhiên lớn nhất.</li><li>Hai số tự nhiên liên tiếp hơn kém nhau <b>1</b> đơn vị.</li></ul>' },
      { type: 'sequence', title: '✏️ Quy luật dãy số', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Cách đều 1:', slots: [1969, 1970, 1971, 1972, { blank: 1973 }, { blank: 1974 }] },
        { label: 'Dãy số chẵn:', slots: [2, 4, 6, 8, { blank: 10 }, { blank: 12 }] },
        { label: 'Cách đều 5:', slots: [5, 10, 15, 20, 25, { blank: 30 }, { blank: 35 }] }
      ] },
      { type: 'mcq', title: '🔎 Số tự nhiên', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Số tự nhiên bé nhất là số nào?', options: [0, 1, 10], correct: 0, ok: 'Số 0 là số tự nhiên bé nhất.' },
        { q: 'Số 0 có số liền trước trong dãy số tự nhiên không?', options: [{ val: 'khong', label: 'Không có' }, { val: 'co', label: 'Có, là -1' }], correct: 'khong', ok: 'Số 0 không có số liền trước trong số tự nhiên.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Số tự nhiên là gì?', a: 'Là các số 0, 1, 2, 3, 4, ... sắp xếp từ bé đến lớn nhé! 🦉' },
      { q: 'Có số lớn nhất không?', a: 'Không có đâu — vì luôn cộng thêm 1 được số lớn hơn.' },
      { q: 'Số liền sau là gì?', a: 'Là số lớn hơn số đã cho 1 đơn vị.' }
    ], fallback: 'Cú Mèo nhắc: số tự nhiên bé nhất là 0 và không có số lớn nhất nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Số tự nhiên bé nhất là?', correct: 0, hint: 'Bắt đầu dãy số.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Không có số tự nhiên lớn nhất. Đúng hay sai?', correct: true, hint: 'Luôn cộng thêm 1 được.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền sau của 99 là?', correct: 100, hint: 'Thêm 1 đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền trước của 200 là?', correct: 199, hint: 'Bớt 1 đơn vị.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong ba số liên tiếp 98, ?, 100, số ở giữa là?', options: [{ l: 'A', v: 99 }, { l: 'B', v: 97 }, { l: 'C', v: 101 }, { l: 'D', v: 96 }], correct: 99, hint: 'Giữa 98 và 100.' }
    ]
  },

  'lop4-bai-16': {
    grade: 4, no: 16, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Luyện tập chung',
    desc: 'Ôn hàng, lớp, so sánh, làm tròn số lớn.',
    icon: '🎯',
    topic: '🔢 Chủ đề 3: Số có nhiều chữ số',
    banner: 'Tổng kết Chủ đề 3 — luyện tập với số lớn nào!',
    steps: ['Hàng lớp', 'Dãy số', 'Làm tròn'],
    blocks: [
      { type: 'mcq', title: '🔎 Giá trị chữ số', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Trong số 182 729 119, chữ số 7 có giá trị là?', options: [700000, 70000, 7000], correct: 700000, ok: 'Chữ số 7 ở hàng trăm nghìn, giá trị 700 000.' }
      ] },
      { type: 'sequence', title: '✏️ Dãy số nhảy bậc', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Đếm thêm 100 000:', slots: [2400000, 2500000, { blank: 2600000 }, { blank: 2700000 }] }
      ] },
      { type: 'mcq', title: '🔁 Làm tròn', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: 'Làm tròn 1 387 000 đến hàng trăm nghìn?', options: [1400000, 1300000, 1390000], correct: 1400000, ok: 'Hàng chục nghìn là 8, làm tròn lên.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Giá trị chữ số là gì?', a: 'Là giá trị của chữ số theo hàng nó đứng. Ví dụ 7 ở hàng trăm nghìn thì giá trị là 700 000 nhé! 🦉' },
      { q: 'Dãy số nhảy bậc?', a: 'Là dãy mà mỗi số hơn số trước cùng một khoảng, ví dụ thêm 100 000.' },
      { q: 'Ôn làm tròn?', a: 'Xem chữ số ngay sau hàng cần làm tròn để quyết định lên hay xuống.' }
    ], fallback: 'Cú Mèo gợi ý: làm chậm, xác định hàng và lớp trước nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Trong số 182 729 119, chữ số 7 có giá trị là?', correct: 700000, hint: 'Hàng trăm nghìn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Làm tròn 417 999 đến hàng trăm nghìn?', options: [{ l: 'A', v: 400000 }, { l: 'B', v: 500000 }, { l: 'C', v: 420000 }, { l: 'D', v: 418000 }], correct: 400000, hint: 'Hàng chục nghìn là 1, làm tròn xuống.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Dãy 8 000 000; 9 000 000; ?; 11 000 000 (đếm thêm 1 triệu). Số còn thiếu?', correct: 10000000, hint: '9 triệu thêm 1 triệu.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số 6 800 287 có chữ số 6 ở hàng triệu. Đúng hay sai?', correct: true, hint: 'Nhóm triệu là 6.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Làm tròn 1 387 000 đến hàng trăm nghìn?', correct: 1400000, hint: 'Hàng chục nghìn là 8.' }
    ]
  },

  'lop4-bai-17': {
    grade: 4, no: 17, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Yến, tạ, tấn',
    desc: 'Đơn vị đo khối lượng lớn và cách quy đổi.',
    icon: '⚖️',
    topic: '⚖️ Chủ đề 4: Một số đơn vị đo đại lượng',
    banner: 'Yến, tạ, tấn dùng để cân những vật thật nặng nhé!',
    steps: ['Đơn vị', 'Quy đổi', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Yến, tạ, tấn', sub: 'Mối quan hệ giữa các đơn vị.', html: '<ul style="line-height:1.9"><li>1 yến = <b>10 kg</b>.</li><li>1 tạ = 10 yến = <b>100 kg</b>.</li><li>1 tấn = 10 tạ = <b>1 000 kg</b>.</li></ul>' },
      { type: 'sequence', title: '✏️ Quy đổi đơn vị', sub: 'Điền số kg tương ứng nhé!', rows: [
        { label: '1 yến = ? kg', slots: [{ blank: 10 }] },
        { label: '1 tạ = ? kg', slots: [{ blank: 100 }] },
        { label: '1 tấn = ? kg', slots: [{ blank: 1000 }] }
      ] },
      { type: 'mcq', title: '🧮 Tính với đơn vị', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '45 tấn − 18 tấn = ? tấn', options: [27, 37, 26], correct: 27, ok: '45 − 18 = 27.' },
        { q: '17 tạ + 36 tạ = ? tạ', options: [53, 43, 63], correct: 53, ok: '17 + 36 = 53.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đổi yến sang kg?', a: '1 yến = 10 kg, nên em nhân số yến với 10 nhé! 🦉' },
      { q: '1 tấn bằng bao nhiêu kg?', a: '1 tấn = 1 000 kg.' },
      { q: 'Đổi 4 yến 5 kg?', a: '4 yến = 40 kg, cộng 5 kg nữa là 45 kg.' }
    ], fallback: 'Cú Mèo gợi ý: nhớ 1 yến = 10 kg, 1 tạ = 100 kg, 1 tấn = 1 000 kg nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '2 yến = ? kg', correct: 20, hint: '2 × 10.' },
      { type: 'fill_blank', label: 'Điền số', q: '300 kg = ? tạ', correct: 3, hint: '300 : 100.' },
      { type: 'fill_blank', label: 'Điền số', q: '2 000 kg = ? tấn', correct: 2, hint: '2 000 : 1 000.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '4 yến 5 kg = ? kg', options: [{ l: 'A', v: 45 }, { l: 'B', v: 9 }, { l: 'C', v: 405 }, { l: 'D', v: 450 }], correct: 45, hint: '40 kg + 5 kg.' },
      { type: 'fill_blank', label: 'Điền số', q: '45 tấn − 18 tấn = ? (tấn)', correct: 27, hint: '45 − 18.' }
    ]
  },

  'lop4-bai-18': {
    grade: 4, no: 18, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Đề-xi-mét vuông, mét vuông, mi-li-mét vuông',
    desc: 'Đơn vị đo diện tích và cách quy đổi.',
    icon: '🟦',
    topic: '⚖️ Chủ đề 4: Một số đơn vị đo đại lượng',
    banner: 'Đo diện tích từ nhỏ xíu đến lớn rộng đều có đơn vị riêng!',
    steps: ['Đơn vị', 'Quy đổi', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Đơn vị diện tích', sub: 'Mỗi đơn vị gấp 100 lần đơn vị nhỏ hơn liền kề.', html: '<ul style="line-height:1.9"><li>1 cm² = <b>100 mm²</b>.</li><li>1 dm² = <b>100 cm²</b>.</li><li>1 m² = <b>100 dm²</b>.</li></ul>' },
      { type: 'sequence', title: '✏️ Quy đổi diện tích', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: '1 dm² = ? cm²', slots: [{ blank: 100 }] },
        { label: '1 m² = ? dm²', slots: [{ blank: 100 }] },
        { label: '1 cm² = ? mm²', slots: [{ blank: 100 }] }
      ] },
      { type: 'mcq', title: '🧮 Đổi số đo phức hợp', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '1 m² 50 dm² = ? dm²', options: [150, 60, 1050], correct: 150, ok: '1 m² = 100 dm², cộng 50 dm² = 150 dm².' },
        { q: '1 cm² 30 mm² = ? mm²', options: [130, 40, 1030], correct: 130, ok: '1 cm² = 100 mm², cộng 30 mm² = 130 mm².' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đổi m² sang dm²?', a: '1 m² = 100 dm², nên em nhân với 100 nhé! 🦉' },
      { q: 'Diện tích hình vuông?', a: 'Bằng cạnh nhân cạnh. Ví dụ cạnh 3 dm thì diện tích 3 × 3 = 9 dm².' },
      { q: '1 cm² bằng bao nhiêu mm²?', a: '1 cm² = 100 mm².' }
    ], fallback: 'Cú Mèo gợi ý: mỗi bậc đơn vị diện tích gấp 100 lần nhau nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '1 m² = ? dm²', correct: 100, hint: 'Gấp 100 lần.' },
      { type: 'fill_blank', label: 'Điền số', q: '1 m² 50 dm² = ? dm²', correct: 150, hint: '100 + 50.' },
      { type: 'fill_blank', label: 'Điền số', q: '1 cm² 30 mm² = ? mm²', correct: 130, hint: '100 + 30.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Diện tích hình vuông cạnh 3 dm là? (dm²)', options: [{ l: 'A', v: 9 }, { l: 'B', v: 12 }, { l: 'C', v: 6 }, { l: 'D', v: 3 }], correct: 9, hint: '3 × 3.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 dm² = 100 cm². Đúng hay sai?', correct: true, hint: 'Gấp 100 lần.' }
    ]
  },

  'lop4-bai-19': {
    grade: 4, no: 19, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Giây, thế kỉ',
    desc: 'Đơn vị đo thời gian từ rất nhỏ đến rất lớn.',
    icon: '⏱️',
    topic: '⚖️ Chủ đề 4: Một số đơn vị đo đại lượng',
    banner: 'Giây thì ngắn lắm, còn thế kỉ dài tới 100 năm cơ đấy!',
    steps: ['Đơn vị', 'Quy đổi', 'Thế kỉ'],
    blocks: [
      { type: 'info', title: '💡 Giây và thế kỉ', sub: 'Ghi nhớ các mốc nhé!', html: '<ul style="line-height:1.9"><li>1 phút = <b>60 giây</b>.</li><li>1 thế kỉ = <b>100 năm</b>.</li><li>Năm 1901 đến 2000 là thế kỉ XX; năm 2001 đến 2100 là thế kỉ XXI.</li></ul>' },
      { type: 'sequence', title: '✏️ Quy đổi thời gian', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: '1 phút = ? giây', slots: [{ blank: 60 }] },
        { label: '1 thế kỉ = ? năm', slots: [{ blank: 100 }] },
        { label: '180 giây = ? phút', slots: [{ blank: 3 }] }
      ] },
      { type: 'mcq', title: '📜 Xác định thế kỉ', sub: 'Năm này thuộc thế kỉ nào?', questions: [
        { q: 'Năm 1228 thuộc thế kỉ thứ mấy?', options: [{ val: 13, label: 'Thế kỉ XIII (13)' }, { val: 12, label: 'Thế kỉ XII (12)' }, { val: 14, label: 'Thế kỉ XIV (14)' }], correct: 13, ok: 'Năm 1228 thuộc thế kỉ XIII.' }
      ] }
    ],
    ai: { chips: [
      { q: '1 phút bao nhiêu giây?', a: '1 phút = 60 giây nhé! 🦉' },
      { q: 'Xác định thế kỉ thế nào?', a: 'Năm chia cho 100 rồi làm tròn lên. Ví dụ năm 1228 thuộc thế kỉ XIII (13).' },
      { q: 'Thế kỉ XXI là gì?', a: 'Là từ năm 2001 đến năm 2100.' }
    ], fallback: 'Cú Mèo gợi ý: 1 phút 60 giây, 1 thế kỉ 100 năm nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '1 phút = ? giây', correct: 60, hint: 'Mốc cơ bản.' },
      { type: 'fill_blank', label: 'Điền số', q: '4 thế kỉ = ? năm', correct: 400, hint: '4 × 100.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Năm 1228 thuộc thế kỉ thứ mấy? (viết số)', options: [{ l: 'A', v: 13 }, { l: 'B', v: 12 }, { l: 'C', v: 14 }, { l: 'D', v: 11 }], correct: 13, hint: 'Từ 1201 đến 1300 là thế kỉ XIII.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Năm 2025 thuộc thế kỉ XXI. Đúng hay sai?', correct: true, hint: 'Từ 2001 đến 2100.' },
      { type: 'fill_blank', label: 'Điền số', q: '180 giây = ? phút', correct: 3, hint: '180 : 60.' }
    ]
  },

  'lop4-bai-20': {
    grade: 4, no: 20, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Thực hành sử dụng đơn vị đo đại lượng',
    desc: 'Vận dụng khối lượng, diện tích, thời gian, tiền tệ.',
    icon: '🧪',
    topic: '⚖️ Chủ đề 4: Một số đơn vị đo đại lượng',
    banner: 'Cùng dùng các đơn vị đo vào tình huống thực tế nhé!',
    steps: ['Khối lượng', 'Thời gian', 'Tiền tệ'],
    blocks: [
      { type: 'info', title: '💡 Quy đổi nhanh', sub: 'Nhớ lại trước khi thực hành.', html: '<ul style="line-height:1.9"><li>1 tấn = 1 000 kg; 1 tạ = 100 kg; 1 yến = 10 kg.</li><li>1 phút = 60 giây.</li></ul>' },
      { type: 'sequence', title: '✏️ Đổi sang ki-lô-gam', sub: 'Điền số kg nhé!', rows: [
        { label: '1 tấn = ? kg', slots: [{ blank: 1000 }] },
        { label: '1 tạ = ? kg', slots: [{ blank: 100 }] }
      ] },
      { type: 'mcq', title: '⏱️ Tốc độ lọc nước', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Chai A: 250 giây, B: 4 phút (240 giây), C: 3 phút 50 giây (230 giây). Chai nào lọc nhanh nhất?', options: [{ val: 'C', label: 'Chai C' }, { val: 'B', label: 'Chai B' }, { val: 'A', label: 'Chai A' }], correct: 'C', ok: 'Chai C chỉ 230 giây, ít nhất nên nhanh nhất.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đổi tấn sang kg?', a: '1 tấn = 1 000 kg, nên em nhân số tấn với 1 000 nhé! 🦉' },
      { q: 'So sánh thời gian thế nào?', a: 'Đổi tất cả về cùng đơn vị (giây) rồi mới so sánh.' },
      { q: 'Tính tổng tiền?', a: 'Em cộng giá tiền các món lại với nhau.' }
    ], fallback: 'Cú Mèo gợi ý: đổi về cùng đơn vị trước khi so sánh nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '1 tấn 3 tạ = ? kg', correct: 1300, hint: '1 000 + 300.' },
      { type: 'fill_blank', label: 'Điền số', q: '1 tấn 200 kg = ? kg', correct: 1200, hint: '1 000 + 200.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Chai A: 250 giây, B: 4 phút, C: 3 phút 50 giây. Chai nào lọc nhanh nhất?', options: [{ l: 'A', v: 'C' }, { l: 'B', v: 'B' }, { l: 'C', v: 'A' }, { l: 'D', v: 'bang' }], correct: 'C', hint: 'B = 240 giây, C = 230 giây.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '4 phút = 240 giây. Đúng hay sai?', correct: true, hint: '4 × 60.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Ba bộ dây đèn giá 30 000, 34 000 và 36 000 đồng. Tổng tiền là?', correct: 100000, hint: 'Cộng cả ba.' }
    ]
  },

  'lop4-bai-21': {
    grade: 4, no: 21, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Luyện tập chung',
    desc: 'Ôn khối lượng, diện tích, thời gian và tiền tệ.',
    icon: '🎯',
    topic: '⚖️ Chủ đề 4: Một số đơn vị đo đại lượng',
    banner: 'Tổng kết Chủ đề 4 — vận dụng vào đời sống nào!',
    steps: ['Tiền tệ', 'Thời gian', 'Khối lượng'],
    blocks: [
      { type: 'mcq', title: '🎡 Chi phí vui chơi', sub: 'Tính tiền vé nhé!', questions: [
        { q: 'Phi tiêu 15 000 đồng/vé, gia đình 4 người trả bao nhiêu?', options: [60000, 19000, 45000], correct: 60000, ok: '15 000 × 4 = 60 000 đồng.' }
      ] },
      { type: 'sequence', title: '✏️ Đổi sang ki-lô-gam', sub: 'Điền số kg nhé!', rows: [
        { label: '1 tấn = ? kg', slots: [{ blank: 1000 }] },
        { label: '1 tạ = ? kg', slots: [{ blank: 100 }] },
        { label: '1 yến = ? kg', slots: [{ blank: 10 }] }
      ] },
      { type: 'mcq', title: '⏱️ Thời gian chạy', sub: 'Đổi phút sang giây nhé!', questions: [
        { q: '2 phút 30 giây = ? giây', options: [150, 230, 90], correct: 150, ok: '2 phút = 120 giây, cộng 30 = 150 giây.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Tính tiền nhiều vé?', a: 'Em nhân giá một vé với số người nhé! 🦉' },
      { q: 'Đổi 2 phút 30 giây?', a: '2 phút = 120 giây, cộng 30 giây nữa là 150 giây.' },
      { q: 'Năm 1864 thế kỉ nào?', a: 'Từ 1801 đến 1900 là thế kỉ XIX (19).' }
    ], fallback: 'Cú Mèo gợi ý: đổi về cùng đơn vị rồi tính nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Phi tiêu 15 000 đồng/vé, gia đình 4 người trả?', options: [{ l: 'A', v: 60000 }, { l: 'B', v: 19000 }, { l: 'C', v: 45000 }, { l: 'D', v: 30000 }], correct: 60000, hint: '15 000 × 4.' },
      { type: 'fill_blank', label: 'Điền số', q: '2 phút 30 giây = ? giây', correct: 150, hint: '120 + 30.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Chạy 2 vòng, mỗi vòng 150 giây, hết ? giây', correct: 300, hint: '150 × 2.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Năm 1864 thuộc thế kỉ thứ mấy?', options: [{ l: 'A', v: 19 }, { l: 'B', v: 18 }, { l: 'C', v: 20 }, { l: 'D', v: 17 }], correct: 19, hint: 'Từ 1801 đến 1900.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hổ nặng 4 tạ = ? kg', correct: 400, hint: '4 × 100.' }
    ]
  },

  'lop4-bai-22': {
    grade: 4, no: 22, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Phép cộng các số có nhiều chữ số',
    desc: 'Đặt tính và cộng số lớn, có nhớ và không nhớ.',
    icon: '➕',
    topic: '➕ Chủ đề 5: Phép cộng và phép trừ',
    banner: 'Cộng các số lớn thật dễ khi đặt tính thẳng cột nhé!',
    steps: ['Quy tắc', 'Đặt tính', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Quy tắc cộng', sub: 'Đặt tính thẳng cột.', html: '<ul style="line-height:1.9"><li>Viết các số thẳng cột theo hàng.</li><li>Cộng <b>từ phải sang trái</b> (đơn vị trước).</li><li>Khi tổng một hàng từ 10 trở lên thì <b>nhớ 1</b> sang hàng tiếp theo.</li></ul>' },
      { type: 'mcq', title: '🧮 Cộng số lớn', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '3 246 + 4 721 = ?', options: [7967, 7867, 8967], correct: 7967, ok: 'Cộng từng hàng: 7 967.' },
        { q: '139 820 + 240 134 = ?', options: [379954, 369954, 379854], correct: 379954, ok: 'Tổng là 379 954.' }
      ] },
      { type: 'sequence', title: '✏️ Cào cào nhảy', sub: 'Dãy số cách đều 20. Điền tiếp nhé!', rows: [
        { label: 'Đếm thêm 20:', slots: [43250, 43270, 43290, { blank: 43310 }, { blank: 43330 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Cộng có nhớ là gì?', a: 'Khi tổng một hàng từ 10 trở lên, em viết chữ số đơn vị và nhớ 1 sang hàng tiếp theo nhé! 🦉' },
      { q: 'Đặt tính thế nào?', a: 'Viết các số thẳng cột theo hàng rồi cộng từ phải sang trái.' },
      { q: 'Cộng từ hàng nào?', a: 'Từ hàng đơn vị (bên phải) trước.' }
    ], fallback: 'Cú Mèo gợi ý: đặt thẳng cột và cộng từ hàng đơn vị nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '3 246 + 4 721 = ?', correct: 7967, hint: 'Cộng từng hàng.' },
      { type: 'fill_blank', label: 'Điền số', q: '139 820 + 240 134 = ?', correct: 379954, hint: 'Cộng từ hàng đơn vị.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '327 456 + 190 835 = ?', options: [{ l: 'A', v: 518291 }, { l: 'B', v: 517291 }, { l: 'C', v: 518191 }, { l: 'D', v: 528291 }], correct: 518291, hint: 'Nhớ khi cộng có nhớ.' },
      { type: 'fill_blank', label: 'Điền số', q: '47 282 + 2 514 = ?', correct: 49796, hint: 'Cộng thẳng cột.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '5 839 + 712 = 6 551. Đúng hay sai?', correct: true, hint: 'Cộng lại để kiểm tra.' }
    ]
  },

  'lop4-bai-23': {
    grade: 4, no: 23, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Phép trừ các số có nhiều chữ số',
    desc: 'Đặt tính và trừ số lớn, có nhớ và không nhớ.',
    icon: '➖',
    topic: '➕ Chủ đề 5: Phép cộng và phép trừ',
    banner: 'Trừ số lớn nhớ mượn 1 trả 1 cho đúng nhé!',
    steps: ['Quy tắc', 'Đặt tính', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Quy tắc trừ', sub: 'Đặt tính thẳng cột.', html: '<ul style="line-height:1.9"><li>Viết số trừ dưới số bị trừ, thẳng cột theo hàng.</li><li>Trừ <b>từ phải sang trái</b>.</li><li>Khi hàng trên bé hơn hàng dưới thì <b>mượn 1</b> ở hàng bên trái.</li></ul>' },
      { type: 'mcq', title: '🧮 Trừ số lớn', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '36 724 − 3 291 = ?', options: [33433, 33533, 32433], correct: 33433, ok: 'Hiệu là 33 433.' },
        { q: '637 891 − 412 520 = ?', options: [225371, 235371, 225271], correct: 225371, ok: 'Hiệu là 225 371.' }
      ] },
      { type: 'sequence', title: '✏️ Đếm bớt 1 000', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: 'Đếm bớt 1 000:', slots: [50000, 49000, 48000, { blank: 47000 }, { blank: 46000 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Trừ có nhớ là gì?', a: 'Khi chữ số trên bé hơn chữ số dưới, em mượn 1 ở hàng bên trái rồi trả lại 1 vào số trừ hàng đó nhé! 🦉' },
      { q: 'Trừ từ hàng nào?', a: 'Từ hàng đơn vị (bên phải) trước.' },
      { q: 'Kiểm tra phép trừ?', a: 'Lấy hiệu cộng với số trừ, nếu bằng số bị trừ là đúng.' }
    ], fallback: 'Cú Mèo gợi ý: đặt thẳng cột, trừ từ phải sang và nhớ mượn nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '36 724 − 3 291 = ?', correct: 33433, hint: 'Trừ từ hàng đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: '637 891 − 412 520 = ?', correct: 225371, hint: 'Trừ thẳng cột.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '648 390 − 382 547 = ?', options: [{ l: 'A', v: 265843 }, { l: 'B', v: 266843 }, { l: 'C', v: 265743 }, { l: 'D', v: 264843 }], correct: 265843, hint: 'Nhớ mượn khi cần.' },
      { type: 'fill_blank', label: 'Điền số', q: '895 332 − 282 429 = ?', correct: 612903, hint: 'Trừ từ phải sang.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '438 589 − 235 072 = 203 517. Đúng hay sai?', correct: true, hint: 'Cộng lại để kiểm tra.' }
    ]
  },

  'lop4-bai-24': {
    grade: 4, no: 24, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Tính chất giao hoán và kết hợp của phép cộng',
    desc: 'Dùng hai tính chất để tính nhanh tổng nhiều số.',
    icon: '🔄',
    topic: '➕ Chủ đề 5: Phép cộng và phép trừ',
    banner: 'Đổi chỗ và nhóm số khéo léo là tính nhanh ngay!',
    steps: ['Giao hoán', 'Kết hợp', 'Tính nhanh'],
    blocks: [
      { type: 'info', title: '💡 Hai tính chất', sub: 'Ghi nhớ công thức nhé!', html: '<ul style="line-height:1.9"><li><b>Giao hoán</b>: a + b = b + a.</li><li><b>Kết hợp</b>: (a + b) + c = a + (b + c).</li><li>Nhờ đó ta nhóm các số thành tổng tròn chục, tròn trăm để tính nhanh.</li></ul>' },
      { type: 'mcq', title: '🧮 Tính nhanh', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '45 000 + 75 000 + 25 000 = ?', options: [145000, 140000, 150000], correct: 145000, ok: 'Nhóm 75 000 + 25 000 = 100 000, cộng 45 000 = 145 000.' },
        { q: '30 + 192 + 70 = ?', options: [292, 282, 302], correct: 292, ok: 'Nhóm 30 + 70 = 100, cộng 192 = 292.' }
      ] },
      { type: 'sequence', title: '✏️ Ghép số tròn', sub: 'Điền kết quả nhé!', rows: [
        { label: '182 + 218 =', slots: [{ blank: 400 }] },
        { label: '30 + 70 =', slots: [{ blank: 100 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Tính chất giao hoán?', a: 'Khi đổi chỗ các số hạng thì tổng không thay đổi: a + b = b + a nhé! 🦉' },
      { q: 'Tính chất kết hợp?', a: 'Ta có thể nhóm các số khác nhau mà tổng vẫn bằng: (a + b) + c = a + (b + c).' },
      { q: 'Tính nhanh thế nào?', a: 'Em tìm các số cộng lại thành số tròn chục, tròn trăm để dễ tính.' }
    ], fallback: 'Cú Mèo gợi ý: nhóm các số thành tổng tròn để tính nhanh nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Tính nhanh: 30 + 192 + 70 = ?', correct: 292, hint: 'Nhóm 30 + 70 trước.' },
      { type: 'fill_blank', label: 'Điền số', q: '182 + 75 + 218 = ?', correct: 475, hint: 'Nhóm 182 + 218 = 400.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '746 + ? = 487 + 746. Số cần điền là?', options: [{ l: 'A', v: 487 }, { l: 'B', v: 746 }, { l: 'C', v: 233 }, { l: 'D', v: 1233 }], correct: 487, hint: 'Tính chất giao hoán.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '(45 000 + 75 000) + 25 000 = 45 000 + (75 000 + 25 000). Đúng hay sai?', correct: true, hint: 'Tính chất kết hợp.' },
      { type: 'fill_blank', label: 'Điền số', q: '20 000 + 15 000 = 15 000 + ?', correct: 20000, hint: 'Tính chất giao hoán.' }
    ]
  },

  'lop4-bai-25': {
    grade: 4, no: 25, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Tìm hai số biết tổng và hiệu',
    desc: 'Giải dạng toán tổng - hiệu bằng sơ đồ đoạn thẳng.',
    icon: '📊',
    topic: '➕ Chủ đề 5: Phép cộng và phép trừ',
    banner: 'Biết tổng và hiệu là tìm được cả hai số ngay nhé!',
    steps: ['Công thức', 'Thực hành', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Công thức tổng - hiệu', sub: 'Ghi nhớ hai công thức nhé!', html: '<ul style="line-height:1.9"><li>Số bé = (Tổng − Hiệu) : 2.</li><li>Số lớn = (Tổng + Hiệu) : 2.</li><li>Hoặc: Số lớn = Số bé + Hiệu.</li></ul>' },
      { type: 'mcq', title: '🍬 Bài toán cái kẹo', sub: 'Mai và Mi có 25 cái kẹo, Mai hơn Mi 5 cái.', questions: [
        { q: 'Số kẹo của Mi (số bé) = (25 − 5) : 2 = ?', options: [10, 15, 20], correct: 10, ok: '(25 − 5) : 2 = 10.' },
        { q: 'Số kẹo của Mai (số lớn) = (25 + 5) : 2 = ?', options: [15, 10, 20], correct: 15, ok: '(25 + 5) : 2 = 15.' }
      ] },
      { type: 'sequence', title: '✏️ Tiền tiết kiệm', sub: 'Tổng 80, hiệu 10. Điền kết quả nhé!', rows: [
        { label: 'Số bé = (80 − 10) : 2 =', slots: [{ blank: 35 }] },
        { label: 'Số lớn = (80 + 10) : 2 =', slots: [{ blank: 45 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Tìm số bé thế nào?', a: 'Số bé = (Tổng − Hiệu) : 2 nhé! 🦉' },
      { q: 'Tìm số lớn thế nào?', a: 'Số lớn = (Tổng + Hiệu) : 2, hoặc lấy số bé cộng hiệu.' },
      { q: 'Bài hình chữ nhật?', a: 'Em tính nửa chu vi làm Tổng trước, rồi mới áp dụng công thức nhé.' }
    ], fallback: 'Cú Mèo gợi ý: nhớ Số bé = (Tổng − Hiệu) : 2 nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Tổng 25, hiệu 5. Số bé = (25 − 5) : 2 = ?', correct: 10, hint: '20 : 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Tổng 25, hiệu 5. Số lớn = (25 + 5) : 2 = ?', correct: 15, hint: '30 : 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Trứng: tổng 80 quả, gà hơn vịt 10 quả. Số trứng gà = (80 + 10) : 2 = ?', correct: 45, hint: '90 : 2.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Tổng tuổi Mai và Mi là 15, Mai hơn Mi 3 tuổi. Tuổi Mi là?', options: [{ l: 'A', v: 6 }, { l: 'B', v: 9 }, { l: 'C', v: 3 }, { l: 'D', v: 12 }], correct: 6, hint: '(15 − 3) : 2.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hai số lẻ liên tiếp có tổng 20 là 9 và 11. Đúng hay sai?', correct: true, hint: '9 + 11 = 20.' }
    ]
  },

  'lop4-bai-26': {
    grade: 4, no: 26, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Luyện tập chung',
    desc: 'Ôn cộng, trừ, tính nhanh và toán tổng - hiệu.',
    icon: '🎯',
    topic: '➕ Chủ đề 5: Phép cộng và phép trừ',
    banner: 'Tổng kết Chủ đề 5 — luyện cộng trừ và tính nhanh nào!',
    steps: ['Tính nhẩm', 'Tính nhanh', 'Tổng - hiệu'],
    blocks: [
      { type: 'mcq', title: '⚡ Tính nhẩm theo lớp', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '1 000 000 + 600 000 − 200 000 = ?', options: [1400000, 1200000, 1600000], correct: 1400000, ok: '1 600 000 − 200 000 = 1 400 000.' }
      ] },
      { type: 'mcq', title: '💰 Tổng - hiệu', sub: 'Mai và Mi tiết kiệm 80 000 đồng, Mai hơn 10 000.', questions: [
        { q: 'Số tiền của Mai (số lớn) = (80 000 + 10 000) : 2 = ?', options: [45000, 35000, 40000], correct: 45000, ok: '(90 000) : 2 = 45 000.' }
      ] },
      { type: 'sequence', title: '✏️ Tính nhanh', sub: 'Điền kết quả nhé!', rows: [
        { label: '85 600 − 5 600 =', slots: [{ blank: 80000 }] },
        { label: '80 000 + 2 500 =', slots: [{ blank: 82500 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Tính nhẩm theo lớp?', a: 'Em tính phần đầu rồi giữ các số 0. Ví dụ 1 600 000 − 200 000 = 1 400 000 nhé! 🦉' },
      { q: 'Tính nhanh dãy số?', a: 'Nhóm các số thành tổng tròn hoặc trừ số bằng nhau trước.' },
      { q: 'Ôn tổng - hiệu?', a: 'Số lớn = (Tổng + Hiệu) : 2; Số bé = (Tổng − Hiệu) : 2.' }
    ], fallback: 'Cú Mèo gợi ý: nhóm số khéo léo để tính nhanh nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '1 000 000 + 600 000 − 200 000 = ?', correct: 1400000, hint: 'Tính từ trái sang.' },
      { type: 'fill_blank', label: 'Điền số', q: '85 600 + 2 500 − 5 600 = ?', correct: 82500, hint: 'Nhóm 85 600 − 5 600 trước.' },
      { type: 'fill_blank', label: 'Điền số', q: '999 999 999 + 1 = ?', correct: 1000000000, hint: 'Thêm 1 đơn vị.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mai và Mi tiết kiệm 80 000 đồng, Mai hơn 10 000. Mi có bao nhiêu?', options: [{ l: 'A', v: 35000 }, { l: 'B', v: 45000 }, { l: 'C', v: 40000 }, { l: 'D', v: 30000 }], correct: 35000, hint: '(80 000 − 10 000) : 2.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '80 000 + 40 000 = 120 000. Đúng hay sai?', correct: true, hint: '8 + 4 = 12.' }
    ]
  },

  'lop4-bai-27': {
    grade: 4, no: 27, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Hai đường thẳng vuông góc',
    desc: 'Nhận biết hai đường thẳng vuông góc và dùng ê ke.',
    icon: '📐',
    topic: '📐 Chủ đề 6: Đường thẳng vuông góc, song song',
    banner: 'Hai đường thẳng vuông góc tạo thành bốn góc vuông nhé!',
    steps: ['Khái niệm', 'Kiểm tra', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Hai đường thẳng vuông góc', sub: 'Ghi nhớ đặc điểm nhé!', html: '<ul style="line-height:1.9"><li>Hai đường thẳng vuông góc cắt nhau tạo thành <b>bốn góc vuông</b> chung một đỉnh.</li><li>Dùng <b>ê ke</b> để kiểm tra hoặc vẽ góc vuông.</li></ul>' },
      { type: 'mcq', title: '🔎 Nhận biết', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Hai đường thẳng vuông góc tạo thành góc bao nhiêu độ?', options: [90, 180, 60], correct: 90, ok: 'Đó là góc vuông 90°.' },
        { q: 'Công cụ dùng để kiểm tra góc vuông là?', options: [{ val: 'eke', label: 'Ê ke' }, { val: 'compa', label: 'Compa' }, { val: 'thuocday', label: 'Thước dây' }], correct: 'eke', ok: 'Ê ke có một góc vuông để kiểm tra.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Vuông góc là gì?', a: 'Hai đường thẳng cắt nhau tạo thành góc vuông 90° thì vuông góc với nhau nhé! 🦉' },
      { q: 'Dùng gì kiểm tra?', a: 'Em dùng ê ke, áp góc vuông của ê ke vào đỉnh góc.' },
      { q: 'Hình chữ nhật?', a: 'Hình chữ nhật có bốn góc vuông, các cạnh kề vuông góc với nhau.' }
    ], fallback: 'Cú Mèo gợi ý: vuông góc nghĩa là tạo thành góc 90° nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Hai đường thẳng vuông góc tạo thành góc bao nhiêu độ?', correct: 90, hint: 'Góc vuông.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hai đường thẳng vuông góc tạo thành mấy góc vuông?', options: [{ l: 'A', v: 4 }, { l: 'B', v: 2 }, { l: 'C', v: 1 }, { l: 'D', v: 3 }], correct: 4, hint: 'Cắt nhau tạo bốn góc.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Ê ke dùng để kiểm tra góc vuông. Đúng hay sai?', correct: true, hint: 'Ê ke có một góc vuông.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình chữ nhật có mấy góc vuông?', options: [{ l: 'A', v: 4 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 1 }], correct: 4, hint: 'Bốn góc đều vuông.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hai đường thẳng vuông góc thì cắt nhau. Đúng hay sai?', correct: true, hint: 'Chúng giao nhau tại một điểm.' }
    ]
  },

  'lop4-bai-28': {
    grade: 4, no: 28, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Thực hành vẽ hai đường thẳng vuông góc',
    desc: 'Dùng ê ke vẽ đường vuông góc và làm dự án diều.',
    icon: '✏️',
    topic: '📐 Chủ đề 6: Đường thẳng vuông góc, song song',
    banner: 'Cùng vẽ đường vuông góc và làm khung diều thật đẹp nào!',
    steps: ['Cách vẽ', 'Dự án diều', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Cách vẽ bằng ê ke', sub: 'Hai bước đơn giản.', html: '<ul style="line-height:1.9"><li>Bước 1: Đặt một cạnh góc vuông của ê ke trùng đường thẳng AB, cạnh kia đi qua điểm H.</li><li>Bước 2: Vạch theo cạnh góc vuông thứ hai, được đường CD vuông góc với AB.</li></ul>' },
      { type: 'mcq', title: '🪁 Dự án làm diều', sub: 'AB dài 20 cm, H là trung điểm.', questions: [
        { q: 'HA = ? cm', options: [10, 20, 5], correct: 10, ok: '20 : 2 = 10 cm.' },
        { q: 'HC = 6 cm, HD = 18 cm thì CD = HC + HD = ? cm', options: [24, 12, 18], correct: 24, ok: '6 + 18 = 24 cm.' }
      ] },
      { type: 'sequence', title: '✏️ Tính độ dài', sub: 'Điền kết quả nhé!', rows: [
        { label: 'AB = 20 cm, H là trung điểm: HA =', slots: [{ blank: 10 }] },
        { label: 'CD = HC + HD = 6 + 18 =', slots: [{ blank: 24 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Trung điểm là gì?', a: 'Là điểm chia đoạn thẳng thành hai phần bằng nhau nhé! 🦉' },
      { q: 'Vẽ vuông góc bằng gì?', a: 'Em dùng ê ke, đặt một cạnh góc vuông trùng đường thẳng cho trước.' },
      { q: 'Khung diều ra sao?', a: 'Nối các điểm A, C, B, D để tạo khung xương diều.' }
    ], fallback: 'Cú Mèo gợi ý: đặt ê ke đúng rồi vạch theo cạnh góc vuông nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Đoạn AB dài 20 cm, H là trung điểm. HA = ? cm', correct: 10, hint: '20 : 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'HC = 6 cm, HD = 18 cm. Đoạn CD = HC + HD = ? cm', correct: 24, hint: '6 + 18.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Công cụ dùng để vẽ hai đường thẳng vuông góc?', options: [{ l: 'A', v: 'eke' }, { l: 'B', v: 'compa' }, { l: 'C', v: 'butchi' }, { l: 'D', v: 'tay' }], correct: 'eke', hint: 'Có sẵn góc vuông.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Trung điểm chia đoạn thẳng thành hai phần bằng nhau. Đúng hay sai?', correct: true, hint: 'Đúng định nghĩa.' },
      { type: 'fill_blank', label: 'Điền số', q: 'AB = 20 cm, lấy trung điểm H thì HB = ? cm', correct: 10, hint: 'Bằng HA.' }
    ]
  },

  'lop4-bai-29': {
    grade: 4, no: 29, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Hai đường thẳng song song',
    desc: 'Nhận biết hai đường thẳng song song không cắt nhau.',
    icon: '🛤️',
    topic: '📐 Chủ đề 6: Đường thẳng vuông góc, song song',
    banner: 'Hai đường ray tàu hỏa là hình ảnh đường thẳng song song!',
    steps: ['Khái niệm', 'Nhận diện', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Hai đường thẳng song song', sub: 'Đặc điểm cốt lõi.', html: '<ul style="line-height:1.9"><li>Hai đường thẳng song song <b>không bao giờ cắt nhau</b>.</li><li>Hai cạnh đối diện của hình chữ nhật khi kéo dài thì song song với nhau.</li></ul>' },
      { type: 'mcq', title: '🔎 Nhận diện', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Hai đường thẳng song song có cắt nhau không?', options: [{ val: 'khong', label: 'Không bao giờ cắt nhau' }, { val: 'co', label: 'Có cắt nhau' }, { val: 'vuong', label: 'Cắt nhau vuông góc' }], correct: 'khong', ok: 'Chúng không bao giờ cắt nhau.' },
        { q: 'Trong hình chữ nhật ABCD, cạnh AB song song với cạnh nào?', options: [{ val: 'DC', label: 'Cạnh DC' }, { val: 'AD', label: 'Cạnh AD' }, { val: 'BC', label: 'Cạnh BC' }], correct: 'DC', ok: 'AB và DC là hai cạnh đối diện song song.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Song song là gì?', a: 'Hai đường thẳng song song luôn cách đều nhau và không bao giờ cắt nhau nhé! 🦉' },
      { q: 'Ví dụ thực tế?', a: 'Hai đường ray tàu hỏa là hình ảnh hai đường thẳng song song.' },
      { q: 'Hình chữ nhật?', a: 'Có hai cặp cạnh đối diện song song với nhau.' }
    ], fallback: 'Cú Mèo gợi ý: song song nghĩa là không bao giờ cắt nhau nhé! 🦉' },
    quiz: [
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hai đường thẳng song song không bao giờ cắt nhau. Đúng hay sai?', correct: true, hint: 'Đặc điểm cốt lõi.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong hình chữ nhật ABCD, cạnh AB song song với cạnh nào?', options: [{ l: 'A', v: 'DC' }, { l: 'B', v: 'AD' }, { l: 'C', v: 'AC' }, { l: 'D', v: 'BD' }], correct: 'DC', hint: 'Hai cạnh đối diện.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Chữ cái nào vừa có nét song song vừa có nét vuông góc?', options: [{ l: 'A', v: 'E' }, { l: 'B', v: 'V' }, { l: 'C', v: 'I' }, { l: 'D', v: 'X' }], correct: 'E', hint: 'Chữ có ba nét ngang và một nét dọc.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Đường ray tàu hỏa là hình ảnh hai đường thẳng song song. Đúng hay sai?', correct: true, hint: 'Hai ray cách đều nhau.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình nào có các cặp cạnh song song?', options: [{ l: 'A', v: 'cn' }, { l: 'B', v: 'tron' }, { l: 'C', v: 'tg' }, { l: 'D', v: 'diem' }], correct: 'cn', hint: 'Hình chữ nhật.' }
    ]
  },

  'lop4-bai-30': {
    grade: 4, no: 30, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Thực hành vẽ hai đường thẳng song song',
    desc: 'Vẽ đường song song và làm bộ đồ chơi ghép hình.',
    icon: '✏️',
    topic: '📐 Chủ đề 6: Đường thẳng vuông góc, song song',
    banner: 'Vẽ đường song song qua hai bước rồi sáng tạo ghép hình nào!',
    steps: ['Cách vẽ', 'Ghép hình', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Cách vẽ đường song song', sub: 'Qua đường vuông góc trung gian.', html: '<ul style="line-height:1.9"><li>Bước 1: Vẽ đường MN đi qua H và <b>vuông góc</b> với AB.</li><li>Bước 2: Vẽ đường CD đi qua H và <b>vuông góc</b> với MN. Khi đó CD song song với AB.</li></ul>' },
      { type: 'mcq', title: '🏃 Bản thiết kế đường chạy', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'MP = 10 cm, HK và NQ song song với MP và đều dài 10 cm. HK = ? cm', options: [10, 20, 5], correct: 10, ok: 'Các đoạn song song đều dài 10 cm.' },
        { q: 'MN = 2 cm, H là trung điểm. MH = ? cm', options: [1, 2, 4], correct: 1, ok: '2 : 2 = 1 cm.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Vẽ song song thế nào?', a: 'Em vẽ qua hai bước: vẽ một đường vuông góc trung gian, rồi vẽ tiếp đường vuông góc với nó nhé! 🦉' },
      { q: 'Hai đường cùng vuông góc?', a: 'Hai đường cùng vuông góc với một đường thứ ba thì song song với nhau.' },
      { q: 'Ghép hình mấy mảnh?', a: 'Hình vuông được cắt thành 6 mảnh để ghép thành con vật, đồ vật.' }
    ], fallback: 'Cú Mèo gợi ý: vẽ song song qua đường vuông góc trung gian nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'HK và NQ song song với MP và đều dài 10 cm thì HK = ? cm', correct: 10, hint: 'Bằng MP.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đoạn MN dài 2 cm, H là trung điểm. MH = ? cm', correct: 1, hint: '2 : 2.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Để vẽ đường thẳng song song, ta vẽ qua mấy bước (dùng đường vuông góc trung gian)?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 1 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 2, hint: 'Hai bước.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song với nhau. Đúng hay sai?', correct: true, hint: 'Đó là cách vẽ song song.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình vuông được cắt thành mấy mảnh trong bộ đồ chơi ghép hình?', correct: 6, hint: 'Sáu mảnh.' }
    ]
  },

  'lop4-bai-31': {
    grade: 4, no: 31, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Hình bình hành, hình thoi',
    desc: 'Nhận biết đặc điểm của hình bình hành và hình thoi.',
    icon: '🔷',
    topic: '📐 Chủ đề 6: Đường thẳng vuông góc, song song',
    banner: 'Hình bình hành và hình thoi có những nét rất đặc biệt nhé!',
    steps: ['Hình bình hành', 'Hình thoi', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Đặc điểm hai hình', sub: 'Ghi nhớ nhé!', html: '<ul style="line-height:1.9"><li><b>Hình bình hành</b>: có hai cặp cạnh đối diện song song và bằng nhau.</li><li><b>Hình thoi</b>: có hai cặp cạnh đối diện song song và <b>bốn cạnh bằng nhau</b>.</li></ul>' },
      { type: 'mcq', title: '🔎 Nhận biết', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Hình thoi có mấy cạnh bằng nhau?', options: [4, 2, 3], correct: 4, ok: 'Hình thoi có bốn cạnh bằng nhau.' },
        { q: 'Hình bình hành có mấy cặp cạnh đối diện song song?', options: [2, 1, 4], correct: 2, ok: 'Có hai cặp cạnh đối diện song song.' }
      ] },
      { type: 'mcq', title: '📏 Tính chất cạnh', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Hình bình hành ABCD có AB = DC. Nếu AB = 6 cm thì DC = ? cm', options: [6, 12, 3], correct: 6, ok: 'Hai cạnh đối diện bằng nhau nên DC = 6 cm.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Hình thoi là gì?', a: 'Là hình có bốn cạnh bằng nhau và hai cặp cạnh đối song song nhé! 🦉' },
      { q: 'Hình bình hành là gì?', a: 'Là hình có hai cặp cạnh đối diện song song và bằng nhau.' },
      { q: 'Đường chéo hình thoi?', a: 'Hai đường chéo của hình thoi vuông góc với nhau.' }
    ], fallback: 'Cú Mèo gợi ý: hình thoi có bốn cạnh bằng nhau nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình thoi có mấy cạnh bằng nhau?', options: [{ l: 'A', v: 4 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 6 }], correct: 4, hint: 'Bốn cạnh.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình bình hành có mấy cặp cạnh đối diện song song?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 1 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 2, hint: 'Hai cặp.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình thoi ABCD có cạnh AB = 5 cm. Cạnh BC = ? cm', correct: 5, hint: 'Bốn cạnh bằng nhau.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hình thoi có hai đường chéo vuông góc với nhau. Đúng hay sai?', correct: true, hint: 'Đặc điểm hình thoi.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình bình hành ABCD có AB = 6 cm thì cạnh DC = ? cm', correct: 6, hint: 'Cạnh đối diện bằng nhau.' }
    ]
  },

  'lop4-bai-32': {
    grade: 4, no: 32, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Luyện tập chung',
    desc: 'Ôn vuông góc, song song, hình bình hành, hình thoi.',
    icon: '🎯',
    topic: '📐 Chủ đề 6: Đường thẳng vuông góc, song song',
    banner: 'Tổng kết Chủ đề 6 — ôn lại hình học thật vui nào!',
    steps: ['Góc đồng hồ', 'Nhận hình', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Nhớ lại', sub: 'Bảng tổng kết nhanh.', html: '<ul style="line-height:1.9"><li>Vuông góc: tạo góc 90°.</li><li>Song song: không cắt nhau.</li><li>Hình thoi: bốn cạnh bằng nhau.</li><li>Hình bình hành: hai cặp cạnh đối song song và bằng nhau.</li></ul>' },
      { type: 'mcq', title: '🕐 Góc trên đồng hồ', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Lúc mấy giờ hai kim đồng hồ tạo thành góc vuông?', options: [{ val: 3, label: '3 giờ' }, { val: 2, label: '2 giờ' }, { val: 1, label: '1 giờ' }], correct: 3, ok: 'Lúc 3 giờ hai kim tạo góc vuông 90°.' }
      ] },
      { type: 'mcq', title: '🔎 Nhận hình', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Hình nào có 4 cạnh bằng nhau?', options: [{ val: 'thoi', label: 'Hình thoi' }, { val: 'bh', label: 'Hình bình hành' }, { val: 'cn', label: 'Hình chữ nhật' }], correct: 'thoi', ok: 'Hình thoi có bốn cạnh bằng nhau.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Lúc nào kim vuông góc?', a: 'Lúc 3 giờ và 9 giờ, hai kim đồng hồ tạo thành góc vuông nhé! 🦉' },
      { q: 'Phân biệt thoi và bình hành?', a: 'Cả hai có cạnh đối song song, nhưng hình thoi có bốn cạnh bằng nhau.' },
      { q: 'Cách nhận song song?', a: 'Hai đường thẳng song song khi không bao giờ cắt nhau.' }
    ], fallback: 'Cú Mèo gợi ý: nhớ đặc điểm từng hình để phân loại nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Lúc mấy giờ hai kim đồng hồ tạo thành góc vuông?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 2 }, { l: 'C', v: 1 }, { l: 'D', v: 5 }], correct: 3, hint: '3 giờ.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Lúc 9 giờ, hai kim đồng hồ tạo thành góc vuông. Đúng hay sai?', correct: true, hint: '9 giờ cũng là góc vuông.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình nào có 4 cạnh bằng nhau?', options: [{ l: 'A', v: 'thoi' }, { l: 'B', v: 'bh' }, { l: 'C', v: 'tg' }, { l: 'D', v: 'cn' }], correct: 'thoi', hint: 'Hình thoi.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình bình hành có mấy cặp cạnh đối diện song song?', correct: 2, hint: 'Hai cặp.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hai đường thẳng song song thì không cắt nhau. Đúng hay sai?', correct: true, hint: 'Đặc điểm song song.' }
    ]
  },

  'lop4-bai-33': {
    grade: 4, no: 33, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Ôn tập các số đến lớp triệu',
    desc: 'Đọc, viết, so sánh và phân tích số lớn.',
    icon: '🔢',
    topic: '🎓 Chủ đề 7: Ôn tập học kì 1',
    banner: 'Mở đầu ôn tập học kì 1 — củng cố số lớn nào!',
    steps: ['Đọc số', 'Hàng lớp', 'So sánh'],
    blocks: [
      { type: 'read-cards', title: '📖 Đọc số dân', sub: 'Bấm 🔊 Nghe để đọc theo nhé!', cards: [
        { num: 8807523, sum: '8 807 523 = 8 000 000 + 800 000 + 7 000 + 500 + 20 + 3', say: 'tám triệu tám trăm linh bảy nghìn năm trăm hai mươi ba' },
        { num: 14002598, word: 'số dân TP. Hồ Chí Minh', say: 'mười bốn triệu không trăm linh hai nghìn năm trăm chín mươi tám' }
      ] },
      { type: 'mcq', title: '🗂️ Hàng và lớp', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Số 517 906 384 — các chữ số thuộc lớp triệu là nhóm nào?', options: [{ val: '517', label: '5, 1, 7' }, { val: '906', label: '9, 0, 6' }, { val: '384', label: '3, 8, 4' }], correct: '517', ok: 'Nhóm triệu là 517.' }
      ] },
      { type: 'mcq', title: '⚖️ So sánh du lịch', sub: 'Lượt khách đến Việt Nam năm 2019.', questions: [
        { q: 'Nước nào có lượt khách nhiều nhất: Campuchia 227 900, Lào 98 500, Thái Lan 509 800, Malaysia 606 200?', options: [{ val: 'mal', label: 'Malaysia' }, { val: 'thai', label: 'Thái Lan' }, { val: 'cam', label: 'Campuchia' }, { val: 'lao', label: 'Lào' }], correct: 'mal', ok: 'Malaysia 606 200 là nhiều nhất.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đọc số chín chữ số?', a: 'Em tách thành ba lớp triệu - nghìn - đơn vị rồi đọc từng lớp nhé! 🦉' },
      { q: 'Giá trị chữ số?', a: 'Cùng một chữ số nhưng ở hàng cao hơn thì giá trị lớn hơn.' },
      { q: 'So sánh số lớn?', a: 'So số chữ số trước, rồi so từng hàng từ trái sang.' }
    ], fallback: 'Cú Mèo gợi ý: tách số thành lớp để đọc và so sánh nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số 517 906 384 — các chữ số thuộc lớp triệu là nhóm nào?', options: [{ l: 'A', v: '517' }, { l: 'B', v: '906' }, { l: 'C', v: '384' }, { l: 'D', v: '000' }], correct: '517', hint: 'Ba chữ số đầu.' },
      { type: 'fill_blank', label: 'Điền số', q: '3 000 000 + 700 000 + 5 000 + ? = 3 705 090. Số còn thiếu là?', correct: 90, hint: 'Giá trị hàng chục.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Lượt khách nhiều nhất đến Việt Nam: Campuchia 227 900, Lào 98 500, Thái Lan 509 800, Malaysia 606 200?', options: [{ l: 'A', v: 'mal' }, { l: 'B', v: 'thai' }, { l: 'C', v: 'cam' }, { l: 'D', v: 'lao' }], correct: 'mal', hint: 'Số lớn nhất là 606 200.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Chữ số 4 trong số 4 297 603 có giá trị là?', correct: 4000000, hint: 'Hàng triệu.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số 14 002 598 đọc bắt đầu là "mười bốn triệu". Đúng hay sai?', correct: true, hint: 'Nhóm triệu là 14.' }
    ]
  },

  'lop4-bai-34': {
    grade: 4, no: 34, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Ôn tập phép cộng, phép trừ',
    desc: 'Ôn tính nhẩm, đặt tính và giải toán cộng trừ.',
    icon: '➕',
    topic: '🎓 Chủ đề 7: Ôn tập học kì 1',
    banner: 'Cùng ôn lại cộng trừ số lớn cho thật thành thạo nhé!',
    steps: ['Tính nhẩm', 'Đặt tính', 'Giải toán'],
    blocks: [
      { type: 'mcq', title: '⚡ Tính nhẩm', sub: 'Cộng trừ số tròn nghìn nhé!', questions: [
        { q: '70 000 + 60 000 = ?', options: [130000, 120000, 140000], correct: 130000, ok: '7 + 6 = 13, thêm bốn số 0.' },
        { q: '160 000 − 90 000 = ?', options: [70000, 80000, 60000], correct: 70000, ok: '16 − 9 = 7, thêm bốn số 0.' }
      ] },
      { type: 'mcq', title: '🧮 Đặt tính', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '9 658 + 6 290 = ?', options: [15948, 15848, 16948], correct: 15948, ok: 'Tổng là 15 948.' }
      ] },
      { type: 'sequence', title: '✏️ Tính và điền', sub: 'Điền kết quả nhé!', rows: [
        { label: '14 709 − 5 234 =', slots: [{ blank: 9475 }] },
        { label: '245 489 + 32 601 =', slots: [{ blank: 278090 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Tính nhẩm số tròn nghìn?', a: 'Em tính phần đầu rồi thêm các số 0. Ví dụ 70 000 + 60 000 = 130 000 nhé! 🦉' },
      { q: 'Giải toán quãng đường?', a: 'Lấy quãng dài trừ quãng ngắn để tìm phần còn lại.' },
      { q: 'Kiểm tra phép cộng?', a: 'Lấy tổng trừ một số hạng, nếu ra số hạng kia là đúng.' }
    ], fallback: 'Cú Mèo gợi ý: đặt tính thẳng cột và tính từ hàng đơn vị nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '70 000 + 60 000 = ?', correct: 130000, hint: '7 + 6 = 13.' },
      { type: 'fill_blank', label: 'Điền số', q: '9 658 + 6 290 = ?', correct: 15948, hint: 'Cộng thẳng cột.' },
      { type: 'fill_blank', label: 'Điền số', q: '159 570 − 81 625 = ?', correct: 77945, hint: 'Trừ từ hàng đơn vị.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hà Nội–Đà Nẵng 791 km, Đồng Hới–Đà Nẵng 253 km. Hà Nội–Đồng Hới = ?', options: [{ l: 'A', v: 538 }, { l: 'B', v: 544 }, { l: 'C', v: 1044 }, { l: 'D', v: 528 }], correct: 538, hint: '791 − 253.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '800 693 − 750 148 = 50 545. Đúng hay sai?', correct: true, hint: 'Cộng lại để kiểm tra.' }
    ]
  },

  'lop4-bai-35': {
    grade: 4, no: 35, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Ôn tập hình học',
    desc: 'Ôn các loại góc, vuông góc, song song và hình đặc biệt.',
    icon: '📐',
    topic: '🎓 Chủ đề 7: Ôn tập học kì 1',
    banner: 'Ôn lại toàn bộ hình học học kì 1 cùng Cú Mèo nhé!',
    steps: ['Góc', 'Đường thẳng', 'Hình'],
    blocks: [
      { type: 'info', title: '💡 Nhớ lại hình học', sub: 'Bảng tổng kết nhanh.', html: '<ul style="line-height:1.9"><li>Góc nhọn < 90°, vuông = 90°, tù > 90°, bẹt = 180°.</li><li>Hình bình hành: cạnh đối song song và bằng nhau.</li><li>Hình thoi: bốn cạnh bằng nhau.</li></ul>' },
      { type: 'mcq', title: '🔎 Phân loại góc', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Góc 110° là góc gì?', options: [{ val: 'tu', label: 'Góc tù' }, { val: 'nhon', label: 'Góc nhọn' }, { val: 'vuong', label: 'Góc vuông' }], correct: 'tu', ok: '110° lớn hơn 90°, nhỏ hơn 180°.' }
      ] },
      { type: 'mcq', title: '📏 Tính chất cạnh', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Hình bình hành ABCD có hai cặp cạnh đối diện như thế nào?', options: [{ val: 'bang', label: 'Song song và bằng nhau' }, { val: 'vuong', label: 'Vuông góc nhau' }, { val: 'khac', label: 'Khác nhau hết' }], correct: 'bang', ok: 'Hai cặp cạnh đối diện song song và bằng nhau.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Phân loại góc?', a: 'So với góc vuông 90°: bé hơn là nhọn, lớn hơn là tù, bằng 180° là bẹt nhé! 🦉' },
      { q: 'Cạnh hình thoi?', a: 'Hình thoi có bốn cạnh bằng nhau, biết một cạnh là biết hết.' },
      { q: 'Cạnh hình bình hành?', a: 'Hai cặp cạnh đối diện bằng nhau.' }
    ], fallback: 'Cú Mèo gợi ý: nhớ đặc điểm góc và các hình để làm bài nhé! 🦉' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Góc 110° là góc gì?', options: [{ l: 'A', v: 'tu' }, { l: 'B', v: 'nhon' }, { l: 'C', v: 'vuong' }, { l: 'D', v: 'bet' }], correct: 'tu', hint: 'Lớn hơn 90°.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình thoi có một cạnh dài 7 cm. Các cạnh còn lại đều dài ? cm', correct: 7, hint: 'Bốn cạnh bằng nhau.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hình bình hành có hai cặp cạnh đối diện bằng nhau. Đúng hay sai?', correct: true, hint: 'Đặc điểm hình bình hành.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Lúc mấy giờ hai kim đồng hồ tạo thành góc tù?', options: [{ l: 'A', v: 5 }, { l: 'B', v: 3 }, { l: 'C', v: 6 }, { l: 'D', v: 12 }], correct: 5, hint: '5 giờ ứng với 150°.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình bình hành ABCD có AB = 8 cm thì cạnh DC = ? cm', correct: 8, hint: 'Cạnh đối diện bằng nhau.' }
    ]
  },

  'lop4-bai-36': {
    grade: 4, no: 36, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Ôn tập đo lường',
    desc: 'Ôn đơn vị khối lượng, diện tích và thời gian.',
    icon: '⚖️',
    topic: '🎓 Chủ đề 7: Ôn tập học kì 1',
    banner: 'Ôn lại các đơn vị đo đại lượng cho thật vững nhé!',
    steps: ['Khối lượng', 'Diện tích', 'Thời gian'],
    blocks: [
      { type: 'info', title: '💡 Bảng quy đổi', sub: 'Nhớ lại các mối quan hệ nhé!', html: '<ul style="line-height:1.9"><li>1 tấn = 1 000 kg; 1 tạ = 100 kg; 1 yến = 10 kg.</li><li>1 m² = 100 dm²; 1 dm² = 100 cm²; 1 cm² = 100 mm².</li><li>1 phút = 60 giây; 1 thế kỉ = 100 năm.</li></ul>' },
      { type: 'sequence', title: '✏️ Quy đổi', sub: 'Điền số còn thiếu nhé!', rows: [
        { label: '1 tấn = ? kg', slots: [{ blank: 1000 }] },
        { label: '1 m² = ? dm²', slots: [{ blank: 100 }] },
        { label: '1 phút = ? giây', slots: [{ blank: 60 }] }
      ] },
      { type: 'mcq', title: '🧮 Tính với đơn vị', sub: 'Chọn kết quả đúng nhé!', questions: [
        { q: '5 yến + 7 yến = ? yến', options: [12, 35, 2], correct: 12, ok: '5 + 7 = 12 yến.' },
        { q: '3 tạ × 5 = ? tạ', options: [15, 8, 35], correct: 15, ok: '3 × 5 = 15 tạ.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đổi m² sang dm²?', a: '1 m² = 100 dm², nên em nhân với 100 nhé! 🦉' },
      { q: 'Tính diện tích hình chữ nhật?', a: 'Bằng chiều dài nhân chiều rộng.' },
      { q: 'Đổi 1 phút 30 giây?', a: '1 phút = 60 giây, cộng 30 giây nữa là 90 giây.' }
    ], fallback: 'Cú Mèo gợi ý: nhớ bảng quy đổi rồi tính cho chính xác nhé! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '5 yến + 7 yến = ? yến', correct: 12, hint: '5 + 7.' },
      { type: 'fill_blank', label: 'Điền số', q: '43 tấn − 25 tấn = ? tấn', correct: 18, hint: '43 − 25.' },
      { type: 'fill_blank', label: 'Điền số', q: '3 m² = ? dm²', correct: 300, hint: '3 × 100.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mảnh đất hình chữ nhật dài 15 m, rộng 9 m. Diện tích = ? (m²)', options: [{ l: 'A', v: 135 }, { l: 'B', v: 90 }, { l: 'C', v: 144 }, { l: 'D', v: 225 }], correct: 135, hint: '15 × 9.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 phút 30 giây = 90 giây. Đúng hay sai?', correct: true, hint: '60 + 30.' }
    ]
  },

  'lop4-bai-37': {
    grade: 4, no: 37, theme: 'purple', mascot: '🦉', avatar: '🦉',
    title: 'Ôn tập chung',
    desc: 'Tổng hợp số, phép tính, đo lường và hình học học kì 1.',
    icon: '🏆',
    topic: '🎓 Chủ đề 7: Ôn tập học kì 1',
    banner: 'Bài cuối học kì 1 — tổng kết tất cả kiến thức nào!',
    steps: ['Số lớn', 'Phép tính', 'Tổng - hiệu'],
    blocks: [
      { type: 'read-cards', title: '📖 Đọc số bảy chữ số', sub: 'Bấm 🔊 Nghe để đọc theo nhé!', cards: [
        { num: 1621494, sum: '1 621 494 = 1 000 000 + 600 000 + 20 000 + 1 000 + 400 + 90 + 4', say: 'một triệu sáu trăm hai mươi mốt nghìn bốn trăm chín mươi tư' },
        { num: 2760053, sum: '2 760 053 = 2 000 000 + 700 000 + 60 000 + 50 + 3', say: 'hai triệu bảy trăm sáu mươi nghìn không trăm năm mươi ba' }
      ] },
      { type: 'mcq', title: '🌳 Toán tổng - hiệu', sub: 'Tổng 760 cây, ổi hơn chuối 40 cây.', questions: [
        { q: 'Số cây ổi (số lớn) = (760 + 40) : 2 = ?', options: [400, 360, 380], correct: 400, ok: '(800) : 2 = 400 cây.' }
      ] },
      { type: 'sequence', title: '✏️ Tính kết quả', sub: 'Điền kết quả nhé!', rows: [
        { label: 'Số cây ổi = (760 + 40) : 2 =', slots: [{ blank: 400 }] },
        { label: 'Số cây chuối = (760 − 40) : 2 =', slots: [{ blank: 360 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Ôn toán tổng - hiệu?', a: 'Số lớn = (Tổng + Hiệu) : 2; Số bé = (Tổng − Hiệu) : 2 nhé! 🦉' },
      { q: 'Đọc số bảy chữ số?', a: 'Em tách thành lớp triệu, lớp nghìn, lớp đơn vị rồi đọc từng lớp.' },
      { q: 'Đổi tạ sang yến?', a: '1 tạ = 10 yến, nên em nhân số tạ với 10.' }
    ], fallback: 'Cú Mèo gợi ý: ôn kỹ từng phần, kiểm tra lại kết quả nhé! Chúc em thi tốt! 🦉' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Tổng 760 cây, ổi hơn chuối 40 cây. Số cây ổi = (760 + 40) : 2 = ?', correct: 400, hint: '800 : 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số cây chuối = (760 − 40) : 2 = ?', correct: 360, hint: '720 : 2.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '6 tạ + 2 tạ = 8 tạ. Đổi ra yến là?', options: [{ l: 'A', v: 80 }, { l: 'B', v: 8 }, { l: 'C', v: 800 }, { l: 'D', v: 75 }], correct: 80, hint: '8 tạ × 10.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 m² = 100 dm². Đúng hay sai?', correct: true, hint: 'Gấp 100 lần.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Trong số 4 297 603, chữ số 4 có giá trị là?', correct: 4000000, hint: 'Hàng triệu.' }
    ]
  }

});
