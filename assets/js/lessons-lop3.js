// ============================================================
//  TVKN — DỮ LIỆU BÀI HỌC LỚP 3 (SGK Kết nối tri thức)
//  Nạp SAU lessons.js. Đổ dữ liệu vào window.TVKN_LESSONS.lessons
// ============================================================
Object.assign(window.TVKN_LESSONS.lessons, {
  'lop3-bai-1': {
    grade: 3, no: 1, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Ôn tập các số đến 1000',
    desc: 'Đọc, viết, phân tích và so sánh các số trong phạm vi 1000.',
    icon: '🔢',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Cùng ôn lại các số đến <b>1000</b>: hàng trăm, hàng chục, hàng đơn vị nhé!',
    steps: ['Cấu tạo số', 'Viết thành tổng', 'So sánh', 'Tia số'],
    blocks: [
      { type: 'read-cards', title: '📖 Viết số thành tổng', sub: 'Mỗi số có ba chữ số bằng tổng các trăm, chục, đơn vị. Bấm 🔊 Nghe nhé!', cards: [
        { num: 385, sum: '385 = 300 + 80 + 5', say: 'ba trăm tám mươi lăm' },
        { num: 504, sum: '504 = 500 + 0 + 4', say: 'năm trăm linh tư' },
        { num: 720, sum: '720 = 700 + 20 + 0', say: 'bảy trăm hai mươi' }
      ] },
      { type: 'mcq', title: '🔎 Cấu tạo & so sánh số', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Số gồm 5 trăm, 0 chục và 4 đơn vị là số nào?', options: [54, 504, 540, 5004], correct: 504, ok: '5 trăm là 500, thêm 4 đơn vị thành 504.' },
        { q: 'Số nào lớn hơn: 505 hay 550?', options: [505, 550], correct: 550, ok: '550 có 5 chục, 505 có 0 chục nên 550 lớn hơn.' },
        { q: 'Số lớn nhất trong các số: 531, 513, 315, 351?', options: [531, 513, 315, 351], correct: 531, ok: 'So hàng trăm trước, 5 trăm lớn nhất, rồi 3 chục lớn hơn 1 chục.' }
      ] },
      { type: 'sequence', title: '✏️ Tia số & dãy số', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: 'a) Đếm thêm 1:', slots: [210, 211, { blank: 212 }, 213, { blank: 214 }] },
        { label: 'b) Đếm bớt 1 (đếm lùi):', slots: [1000, 999, { blank: 998 }, { blank: 997 }, 996] }
      ] }
    ],
    ai: { chips: [
      { q: 'Hàng trăm là gì?', a: 'Số có ba chữ số gồm hàng trăm, hàng chục, hàng đơn vị. Ví dụ 385: 3 trăm, 8 chục, 5 đơn vị nên 385 = 300 + 80 + 5 nhé! 🐢' },
      { q: 'So sánh số ba chữ số thế nào?', a: 'Em so hàng trăm trước, bằng nhau thì so hàng chục, rồi hàng đơn vị nhé!' },
      { q: 'Đọc số 504 thế nào?', a: 'Số 504 đọc là năm trăm linh tư, vì hàng chục là 0 nên có chữ linh em nhé!' }
    ], fallback: 'Câu hỏi hay đó! Rùa Toán gợi ý: em tách số thành trăm - chục - đơn vị để dễ hiểu hơn. 🐢' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '385 = 300 + 80 + ?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 5 }, { l: 'C', v: 8 }, { l: 'D', v: 85 }], correct: 5, hint: 'Hàng đơn vị của 385 là chữ số nào?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền sau của 599 là số nào?', correct: 600, hint: 'Thêm 1 đơn vị vào 599.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '720 lớn hơn 702. Đúng hay sai?', correct: true, hint: 'So hàng chục: 2 chục so với 0 chục.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào lớn nhất?', options: [{ l: 'A', v: 531 }, { l: 'B', v: 513 }, { l: 'C', v: 315 }, { l: 'D', v: 351 }], correct: 531, hint: 'So hàng trăm trước.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 310, 311, __, 313', correct: 312, hint: 'Đếm thêm 1.' }
    ]
  },

  'lop3-bai-2': {
    grade: 3, no: 2, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Ôn tập phép cộng, phép trừ trong phạm vi 1000',
    desc: 'Tính nhẩm tròn chục, tròn trăm; đặt tính rồi tính; tìm tổng và hiệu.',
    icon: '➕',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Cộng, trừ trong phạm vi <b>1000</b> thật dễ khi em đặt tính thẳng hàng nhé!',
    steps: ['Tính nhẩm', 'Đặt tính', 'Thành phần', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '⚡ Tính nhẩm siêu tốc', sub: 'Phép tính với số tròn chục, tròn trăm. Bấm 🔊 Nghe nhé!', cards: [
        { num: 90, sum: '50 + 40 = 90', say: 'năm mươi cộng bốn mươi bằng chín mươi' },
        { num: 900, sum: '500 + 400 = 900', say: 'năm trăm cộng bốn trăm bằng chín trăm' },
        { num: 700, sum: '1000 - 300 = 700', say: 'một nghìn trừ ba trăm bằng bảy trăm' }
      ] },
      { type: 'mcq', title: '🧮 Đặt tính rồi tính', sub: 'Tính kết quả rồi chọn đáp án đúng nhé!', questions: [
        { q: '326 + 58 = ?', options: [374, 384, 386, 484], correct: 384, ok: '6 + 8 = 14, viết 4 nhớ 1; 2 + 5 + 1 = 8; còn 3 trăm nên được 384.' },
        { q: '965 - 549 = ?', options: [416, 426, 414, 524], correct: 416, ok: '5 trừ 9 không được, mượn 1; kết quả là 416.' },
        { q: '48 + 52 = ?', options: [90, 100, 110, 96], correct: 100, ok: '8 + 2 = 10, viết 0 nhớ 1; 4 + 5 + 1 = 10 nên được 100.' }
      ] },
      { type: 'sequence', title: '✏️ Chuỗi phép tính', sub: 'Tính lần lượt rồi điền kết quả nhé!', hint: '305 cộng 105, rồi lấy kết quả trừ 205.', rows: [
        { label: 'a) 305 + 105 = ?, rồi - 205 = ?', slots: [305, { blank: 410 }, { blank: 205 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Đặt tính thế nào cho đúng?', a: 'Em viết các số thẳng hàng: đơn vị thẳng đơn vị, chục thẳng chục, trăm thẳng trăm, rồi tính từ phải sang trái nhé! 🐢' },
      { q: 'Nhớ trong phép cộng là gì?', a: 'Khi tổng một hàng từ 10 trở lên, em viết chữ số đơn vị và nhớ 1 sang hàng bên trái. Ví dụ 48 + 52: 8 + 2 = 10, viết 0 nhớ 1.' },
      { q: 'Trừ có mượn là sao?', a: 'Khi số ở trên nhỏ hơn số ở dưới, em mượn 1 chục (hay 1 trăm) của hàng bên trái để trừ được nhé!' }
    ], fallback: 'Rùa Toán mách nhỏ: em đặt tính thẳng hàng và tính từ hàng đơn vị trước nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '50 + 40 = ?', correct: 90, hint: '5 chục cộng 4 chục.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '500 + 400 = ?', options: [{ l: 'A', v: 800 }, { l: 'B', v: 900 }, { l: 'C', v: 1000 }, { l: 'D', v: 90 }], correct: 900, hint: '5 trăm cộng 4 trăm.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Con trâu nặng 650 kg, con nghé nặng 150 kg. Cả hai nặng bao nhiêu ki-lô-gam?', correct: 800, hint: 'Lấy 650 + 150.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Khối Ba có 142 em, khối Bốn ít hơn khối Ba 18 em. Khối Bốn có bao nhiêu em?', correct: 124, hint: 'Lấy 142 - 18.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1000 - 300 = 700. Đúng hay sai?', correct: true, hint: '10 trăm bớt 3 trăm còn 7 trăm.' }
    ]
  },

  'lop3-bai-3': {
    grade: 3, no: 3, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Tìm thành phần trong phép cộng, phép trừ',
    desc: 'Tìm số hạng, số bị trừ, số trừ chưa biết trong phép tính.',
    icon: '🔍',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung',
    banner: 'Tìm số còn ẩn trong phép tính bằng các <b>quy tắc</b> dễ nhớ nhé!',
    steps: ['Quy tắc', 'Điền số ?', 'Tình huống', 'Giải toán'],
    blocks: [
      { type: 'info', title: '📌 Ba quy tắc tìm ẩn số', sub: 'Học thuộc ba quy tắc này em sẽ tìm được số chưa biết!', html: '<b>1. Tìm số hạng:</b> lấy <i>tổng trừ đi số hạng kia</i>.<br>Ví dụ: ? + 20 = 35 → 35 - 20 = 15.<br><br><b>2. Tìm số bị trừ:</b> lấy <i>hiệu cộng với số trừ</i>.<br>Ví dụ: ? - 12 = 25 → 25 + 12 = 37.<br><br><b>3. Tìm số trừ:</b> lấy <i>số bị trừ trừ đi hiệu</i>.<br>Ví dụ: 51 - ? = 18 → 51 - 18 = 33.' },
      { type: 'mcq', title: '🧮 Máy tính điền số ?', sub: 'Tìm số thích hợp ở dấu ? rồi chọn đáp án nhé!', questions: [
        { q: '? + 20 = 35. Số ? là bao nhiêu?', options: [15, 25, 55, 20], correct: 15, ok: 'Lấy 35 - 20 = 15.' },
        { q: '14 + ? = 28. Số ? là bao nhiêu?', options: [12, 14, 42, 16], correct: 14, ok: 'Lấy 28 - 14 = 14.' },
        { q: 'Biết số trừ là 36, hiệu là 25. Số bị trừ là bao nhiêu?', options: [11, 51, 61, 41], correct: 61, ok: 'Số bị trừ = hiệu + số trừ = 25 + 36 = 61.' }
      ] },
      { type: 'mcq', title: '🍎 Tình huống thực tế', sub: 'Đọc kĩ tình huống rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Túi có 14 quả táo gồm 10 quả xanh và một số quả đỏ. Có mấy quả táo đỏ?', options: [4, 6, 24, 10], correct: 4, ok: 'Lấy 14 - 10 = 4 quả táo đỏ.' },
        { q: 'Việt có một số bi, cho bạn 5 viên thì còn 3 viên. Lúc đầu Việt có mấy viên?', options: [2, 8, 15, 5], correct: 8, ok: 'Lấy 3 + 5 = 8 viên bi.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Tìm số hạng thế nào?', a: 'Muốn tìm một số hạng, em lấy tổng trừ đi số hạng kia. Ví dụ ? + 20 = 35 thì ? = 35 - 20 = 15 nhé! 🐢' },
      { q: 'Tìm số bị trừ ra sao?', a: 'Muốn tìm số bị trừ, em lấy hiệu cộng với số trừ. Ví dụ ? - 12 = 25 thì ? = 25 + 12 = 37.' },
      { q: 'Tìm số trừ thế nào?', a: 'Muốn tìm số trừ, em lấy số bị trừ trừ đi hiệu. Ví dụ 51 - ? = 18 thì ? = 51 - 18 = 33 nhé!' }
    ], fallback: 'Rùa Toán gợi ý: em xác định số nào là tổng, số hạng, số bị trừ, số trừ, hiệu rồi áp dụng quy tắc nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '? + 20 = 35. Số ? là bao nhiêu?', correct: 15, hint: 'Lấy 35 - 20.' },
      { type: 'fill_blank', label: 'Điền số', q: '? - 12 = 25. Số ? là bao nhiêu?', correct: 37, hint: 'Lấy 25 + 12.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số trừ là 36, hiệu là 25. Số bị trừ là?', options: [{ l: 'A', v: 51 }, { l: 'B', v: 11 }, { l: 'C', v: 61 }, { l: 'D', v: 71 }], correct: 61, hint: 'Hiệu cộng số trừ.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đàn vịt có 64 con, một số con bơi xuống ao, còn 24 con trên bờ. Có mấy con đã xuống ao?', correct: 40, hint: 'Lấy 64 - 24.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Trong 51 - ? = 18 thì ? = 33. Đúng hay sai?', correct: true, hint: 'Lấy 51 - 18.' }
    ]
  },

  'lop3-bai-4': {
    grade: 3, no: 4, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Ôn tập bảng nhân 2, 5; bảng chia 2, 5',
    desc: 'Củng cố bảng nhân, bảng chia 2 và 5; đếm thêm, đếm bớt; so sánh.',
    icon: '✖️',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Ôn lại bảng nhân, bảng chia <b>2 và 5</b> qua trò chơi hái bưởi nhé!',
    steps: ['Bảng nhân chia', 'Đếm thêm 2', 'So sánh', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '📖 Bảng nhân 2 và 5', sub: 'Đọc và ghi nhớ các phép tính. Bấm 🔊 Nghe nhé!', cards: [
        { num: 12, sum: '2 × 6 = 12', say: 'hai nhân sáu bằng mười hai' },
        { num: 10, sum: '5 × 2 = 10', say: 'năm nhân hai bằng mười' },
        { num: 4, sum: '20 : 5 = 4', say: 'hai mươi chia năm bằng bốn' }
      ] },
      { type: 'sequence', title: '✏️ Tia số bước nhảy 2', sub: 'Điền số theo quy luật đếm thêm 2 hoặc bớt 2 nhé!', rows: [
        { label: 'a) Đếm thêm 2:', slots: [2, 4, 6, { blank: 8 }, { blank: 10 }, 12, { blank: 14 }] },
        { label: 'b) Đếm bớt 2:', slots: [20, 18, 16, { blank: 14 }, { blank: 12 }, 10] }
      ] },
      { type: 'mcq', title: '🍊 Hái bưởi & so sánh', sub: 'Tính kết quả rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Quả bưởi 50 : 5 thuộc sọt số mấy?', options: [10, 5, 4, 2], correct: 10, ok: '50 : 5 = 10 nên bỏ vào sọt số 10.' },
        { q: 'So sánh 40 : 5 với 7. Dấu nào đúng?', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 1, ok: '40 : 5 = 8 mà 8 lớn hơn 7 nên dùng dấu >.' },
        { q: 'So sánh 5 × 2 với 50 : 5. Dấu nào đúng?', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 3, ok: '5 × 2 = 10 và 50 : 5 = 10 nên bằng nhau, dùng dấu =.' }
      ] }
    ],
    ai: { chips: [
      { q: '5 × 2 và 2 × 5 có bằng nhau không?', a: 'Có em nhé! 5 × 2 = 10 và 2 × 5 = 10, đổi chỗ hai thừa số thì tích không đổi. 🐢' },
      { q: 'Chia cho 5 thế nào?', a: 'Em nghĩ tới bảng nhân 5: 50 : 5 hỏi 5 nhân mấy bằng 50, đó là 10 nên 50 : 5 = 10 nhé!' },
      { q: 'Đếm thêm 2 là gì?', a: 'Là cộng thêm 2 vào số trước: 2, 4, 6, 8, 10... chính là bảng nhân 2 đó em! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: phép chia là phép nhân ngược, em nhớ bảng nhân thì làm được phép chia nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '2 × 6 = ?', correct: 12, hint: 'Đếm thêm 2 sáu lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '20 : 5 = ?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 4 }, { l: 'C', v: 5 }, { l: 'D', v: 10 }], correct: 4, hint: '5 nhân mấy bằng 20?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Có 18 học sinh, mỗi bàn ngồi 2 bạn. Có bao nhiêu bàn?', correct: 9, hint: 'Lấy 18 : 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Chia đều 50 kg gạo vào 5 túi. Mỗi túi có bao nhiêu ki-lô-gam?', correct: 10, hint: 'Lấy 50 : 5.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '5 × 2 = 2 × 5. Đúng hay sai?', correct: true, hint: 'Tính cả hai vế xem có bằng nhau không.' }
    ]
  },

  'lop3-bai-5': {
    grade: 3, no: 5, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Bảng nhân 3, bảng chia 3',
    desc: 'Lập và ghi nhớ bảng nhân 3, bảng chia 3; đếm thêm, đếm bớt 3.',
    icon: '3️⃣',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Xe xích lô có <b>3 bánh</b> giúp em hiểu bảng nhân 3 thật vui nhé!',
    steps: ['Lập bảng nhân', 'Bước nhảy 3', 'Ong tìm mật', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '🚲 Bảng nhân 3 từ xe xích lô', sub: 'Mỗi xe 3 bánh, thêm xe là thêm 3 bánh. Bấm 🔊 Nghe nhé!', cards: [
        { num: 12, sum: '3 + 3 + 3 + 3 = 12 nên 3 × 4 = 12', say: 'ba nhân bốn bằng mười hai' },
        { num: 18, sum: '3 × 6 = 18', say: 'ba nhân sáu bằng mười tám' },
        { num: 5, sum: '15 : 3 = 5', say: 'mười lăm chia ba bằng năm' }
      ] },
      { type: 'sequence', title: '✏️ Bước nhảy 3', sub: 'Điền số theo quy luật thêm 3 hoặc bớt 3 nhé!', rows: [
        { label: 'a) Dãy tiến (thêm 3):', slots: [3, 6, 9, { blank: 12 }, { blank: 15 }, 18] },
        { label: 'b) Dãy lùi (bớt 3):', slots: [30, 27, 24, { blank: 21 }, { blank: 18 }, 15] }
      ] },
      { type: 'mcq', title: '🐝 Ong tìm mật', sub: 'Tính phép chia rồi chọn cánh hoa đúng nhé!', questions: [
        { q: 'Chú ong mang phép tính 27 : 3 đậu vào cánh hoa số mấy?', options: [6, 7, 8, 9], correct: 9, ok: '27 : 3 = 9 vì 3 × 9 = 27.' },
        { q: '24 : 3 = ?', options: [6, 7, 8, 9], correct: 8, ok: '3 × 8 = 24 nên 24 : 3 = 8.' },
        { q: '12 : 3 = ?', options: [3, 4, 6, 9], correct: 4, ok: '3 × 4 = 12 nên 12 : 3 = 4.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Bảng nhân 3 lập thế nào?', a: 'Em cộng thêm 3 mỗi lần: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Đó chính là bảng nhân 3 đó! 🐢' },
      { q: '15 : 3 tính sao?', a: 'Em nghĩ 3 nhân mấy bằng 15, đó là 5 nên 15 : 3 = 5 nhé!' },
      { q: 'Nhân và chia liên quan gì nhau?', a: 'Từ 3 × 5 = 15 em suy ra ngay 15 : 3 = 5 và 15 : 5 = 3. Chúng là phép tính ngược của nhau! 🐢' }
    ], fallback: 'Rùa Toán mách: gặp phép chia 3, em nhớ lại bảng nhân 3 là tìm được đáp án nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '3 × 6 = ?', correct: 18, hint: 'Đếm thêm 3 sáu lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '27 : 3 = ?', options: [{ l: 'A', v: 6 }, { l: 'B', v: 7 }, { l: 'C', v: 8 }, { l: 'D', v: 9 }], correct: 9, hint: '3 nhân mấy bằng 27?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mỗi bàn cờ vua có 3 người, có 6 bàn. Tất cả có bao nhiêu người?', correct: 18, hint: 'Lấy 3 × 6.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Chia đều 30 que tính vào 3 bó. Mỗi bó có bao nhiêu que?', correct: 10, hint: 'Lấy 30 : 3.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '15 : 3 = 5. Đúng hay sai?', correct: true, hint: '3 × 5 có bằng 15 không?' }
    ]
  },

  'lop3-bai-6': {
    grade: 3, no: 6, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Bảng nhân 4, bảng chia 4',
    desc: 'Lập và ghi nhớ bảng nhân 4, bảng chia 4; so sánh kết quả; giải toán.',
    icon: '4️⃣',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Chong chóng <b>4 cánh</b> giúp em ghi nhớ bảng nhân 4 nhé!',
    steps: ['Lập bảng nhân', 'Bước nhảy 4', 'Toa tàu', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '🌀 Bảng nhân 4 từ chong chóng', sub: 'Mỗi chong chóng 4 cánh. Bấm 🔊 Nghe nhé!', cards: [
        { num: 20, sum: '4 + 4 + 4 + 4 + 4 = 20 nên 4 × 5 = 20', say: 'bốn nhân năm bằng hai mươi' },
        { num: 24, sum: '4 × 6 = 24', say: 'bốn nhân sáu bằng hai mươi tư' },
        { num: 6, sum: '24 : 4 = 6', say: 'hai mươi tư chia bốn bằng sáu' }
      ] },
      { type: 'sequence', title: '✏️ Bước nhảy 4', sub: 'Điền số theo quy luật thêm 4 hoặc bớt 4 nhé!', rows: [
        { label: 'a) Dãy tiến (thêm 4):', slots: [4, 8, 12, { blank: 16 }, { blank: 20 }, 24] },
        { label: 'b) Dãy lùi (bớt 4):', slots: [40, 36, 32, { blank: 28 }, { blank: 24 }, 20] }
      ] },
      { type: 'mcq', title: '🚂 Toa tàu lớn nhất', sub: 'Tính kết quả các toa rồi chọn đáp án nhé!', questions: [
        { q: 'Toa nào có kết quả lớn nhất: 8:4, 16:4, 40:4, 24:4?', options: [{ val: 1, label: '8 : 4' }, { val: 2, label: '16 : 4' }, { val: 3, label: '40 : 4' }, { val: 4, label: '24 : 4' }], correct: 3, ok: '40 : 4 = 10 là lớn nhất (các toa kia bằng 2, 4, 6).' },
        { q: 'Chuỗi: 4 × 5 rồi : 4. Kết quả cuối là bao nhiêu?', options: [4, 5, 20, 9], correct: 5, ok: '4 × 5 = 20, rồi 20 : 4 = 5.' },
        { q: '32 : 4 = ?', options: [6, 7, 8, 9], correct: 8, ok: '4 × 8 = 32 nên 32 : 4 = 8.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Bảng nhân 4 lập thế nào?', a: 'Em cộng thêm 4 mỗi lần: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 nhé! 🐢' },
      { q: '24 : 4 tính sao?', a: 'Em nghĩ 4 nhân mấy bằng 24, đó là 6 nên 24 : 4 = 6 nhé!' },
      { q: 'Mỗi ô tô có mấy bánh?', a: 'Mỗi ô tô con có 4 bánh xe. Có 8 xe thì có 4 × 8 = 32 bánh xe đó em! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: gặp phép chia 4, em nhớ bảng nhân 4 là ra ngay nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '4 × 6 = ?', correct: 24, hint: 'Đếm thêm 4 sáu lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '40 : 4 = ?', options: [{ l: 'A', v: 4 }, { l: 'B', v: 8 }, { l: 'C', v: 10 }, { l: 'D', v: 14 }], correct: 10, hint: '4 nhân mấy bằng 40?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mỗi ô tô có 4 bánh, có 8 ô tô. Tất cả có bao nhiêu bánh xe?', correct: 32, hint: 'Lấy 4 × 8.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Có 24 chiếc bánh, xếp mỗi hộp 4 chiếc. Cần bao nhiêu hộp?', correct: 6, hint: 'Lấy 24 : 4.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '4 × 7 = 28. Đúng hay sai?', correct: true, hint: 'Đếm thêm 4 bảy lần.' }
    ]
  },

  'lop3-bai-7': {
    grade: 3, no: 7, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Ôn tập hình học và đo lường',
    desc: 'Nhận diện hình khối, đường gấp khúc, khối lượng, dung tích, xem giờ.',
    icon: '📐',
    topic: '📐 Chủ đề 3: Hình học và đo lường',
    banner: 'Ôn lại <b>hình khối</b>, độ dài đường gấp khúc và cách xem giờ nhé!',
    steps: ['Hình khối', 'Đường gấp khúc', 'Đo lường', 'Xem giờ'],
    blocks: [
      { type: 'info', title: '🧊 Nhận diện hình khối', sub: 'Mỗi đồ vật quanh ta có dạng một hình khối quen thuộc.', html: '<b>Khối lập phương</b>: khối ru-bích 🧩<br><b>Khối hộp chữ nhật</b>: bể cá 🐠<br><b>Khối trụ</b>: rô-bốt hút bụi 🤖<br><b>Khối cầu</b>: quả địa cầu 🌐' },
      { type: 'mcq', title: '🔎 Khối nào đây?', sub: 'Chọn tên hình khối đúng với đồ vật nhé!', questions: [
        { q: 'Quả địa cầu có dạng hình khối nào?', options: [{ val: 1, label: 'Khối lập phương' }, { val: 2, label: 'Khối cầu' }, { val: 3, label: 'Khối trụ' }, { val: 4, label: 'Khối hộp chữ nhật' }], correct: 2, ok: 'Quả địa cầu tròn đều nên có dạng khối cầu.' },
        { q: 'Khối ru-bích có dạng hình khối nào?', options: [{ val: 1, label: 'Khối lập phương' }, { val: 2, label: 'Khối cầu' }, { val: 3, label: 'Khối trụ' }], correct: 1, ok: 'Ru-bích có 6 mặt vuông bằng nhau nên là khối lập phương.' }
      ] },
      { type: 'mcq', title: '🐌 Đo lường & đường gấp khúc', sub: 'Tính rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Đường gấp khúc ABCD có AB = 125 cm, BC = 380 cm, CD = 300 cm. Độ dài đường gấp khúc là?', options: [705, 805, 815, 800], correct: 805, ok: '125 + 380 + 300 = 805 cm.' },
        { q: 'Hai can dầu chứa 5 l và 15 l. Tổng dung tích là bao nhiêu lít?', options: [10, 20, 25, 15], correct: 20, ok: '5 + 15 = 20 lít.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đường gấp khúc tính độ dài thế nào?', a: 'Em cộng độ dài tất cả các đoạn thẳng tạo nên đường gấp khúc đó. Ví dụ AB + BC + CD nhé! 🐢' },
      { q: '7 giờ tối là mấy giờ?', a: 'Buổi tối 7 giờ chính là 19 giờ theo đồng hồ 24 giờ đó em! Lấy 7 + 12 = 19.' },
      { q: 'Khối trụ trông thế nào?', a: 'Khối trụ có hai mặt tròn ở hai đầu, như lon nước hay con lăn vậy đó! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: với hình khối em nhìn các mặt, với đường gấp khúc em cộng các đoạn nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Đường gấp khúc có ba đoạn 125 cm, 380 cm, 300 cm. Tổng độ dài là bao nhiêu xăng-ti-mét?', correct: 805, hint: 'Cộng cả ba đoạn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bể cá có dạng hình khối nào?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 4, hint: 'Khối hộp chữ nhật là phương án D.' },
      { type: 'fill_blank', label: 'Điền số', q: '7 giờ tối là mấy giờ (theo đồng hồ 24 giờ)?', correct: 19, hint: 'Lấy 7 + 12.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Can 5 l và can 15 l. Cả hai can chứa bao nhiêu lít?', correct: 20, hint: 'Lấy 5 + 15.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Quả địa cầu có dạng khối cầu. Đúng hay sai?', correct: true, hint: 'Quả địa cầu tròn đều.' }
    ]
  },

  'lop3-bai-8': {
    grade: 3, no: 8, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Luyện tập chung',
    desc: 'Ôn so sánh số, đặt tính, đặc tính số 0 và số 1, nhân chia trong bảng.',
    icon: '🎯',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Cùng <b>luyện tập chung</b>: so sánh số, tính toán và đặc tính số 0, số 1 nhé!',
    steps: ['So sánh số', 'Đặt tính', 'Số 0 và 1', 'Đường đua'],
    blocks: [
      { type: 'info', title: '✨ Đặc tính số 0 và số 1', sub: 'Ghi nhớ những quy tắc đặc biệt này nhé!', html: '<b>Số 1:</b> Số nào nhân với 1 hoặc chia cho 1 cũng bằng chính số đó.<br>Ví dụ: 7 × 1 = 7; 7 : 1 = 7.<br><br><b>Số 0:</b> Số 0 nhân với số nào cũng bằng 0; số 0 chia cho số nào khác 0 cũng bằng 0.<br>Ví dụ: 0 × 9 = 0; 0 : 9 = 0.' },
      { type: 'mcq', title: '🐻 So sánh & cấu tạo số', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Cân nặng: Gấu trắng 250 kg, Hổ 167 kg, Báo 86 kg, Sư tử 155 kg. Con nào nhẹ nhất?', options: [{ val: 1, label: 'Gấu trắng' }, { val: 2, label: 'Hổ' }, { val: 3, label: 'Báo' }, { val: 4, label: 'Sư tử' }], correct: 3, ok: '86 là số bé nhất nên Báo nhẹ nhất.' },
        { q: '356 = 300 + ? + 6. Số ở chỗ trống là?', options: [5, 50, 56, 500], correct: 50, ok: 'Hàng chục của 356 là 5 chục, tức 50.' }
      ] },
      { type: 'mcq', title: '🏁 Đường đua toán học', sub: 'Tính đúng để xe chạy tiếp nhé!', questions: [
        { q: 'Trạm 3 × 7 cho kết quả là?', options: [18, 21, 24, 27], correct: 21, ok: '3 × 7 = 21.' },
        { q: 'Chuỗi: 2 × 6, rồi : 3, rồi × 0. Kết quả cuối là?', options: [0, 4, 12, 6], correct: 0, ok: '2 × 6 = 12; 12 : 3 = 4; 4 × 0 = 0. Nhân với 0 luôn bằng 0!' },
        { q: '20 : 5 = ?', options: [2, 4, 5, 10], correct: 4, ok: '5 × 4 = 20 nên 20 : 5 = 4.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Số nào nhân với 0?', a: 'Số 0 nhân với số nào cũng bằng 0 em nhé. Ví dụ 4 × 0 = 0, 9 × 0 = 0! 🐢' },
      { q: 'Nhân với 1 thì sao?', a: 'Số nào nhân với 1 cũng bằng chính nó: 7 × 1 = 7, 25 × 1 = 25 đó em!' },
      { q: 'Sắp xếp số từ bé đến lớn thế nào?', a: 'Em so sánh hàng trăm trước, rồi hàng chục, hàng đơn vị, rồi xếp số nhỏ đứng trước nhé! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: nhớ đặc tính số 0 và số 1, em sẽ tính nhẩm rất nhanh! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '5 × 8 = ? (8 bạn, mỗi bạn góp 5 quyển vở)', correct: 40, hint: 'Đếm thêm 5 tám lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Con nào nặng nhất: Gấu trắng 250 kg, Hổ 167 kg, Báo 86 kg, Sư tử 155 kg?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 1, hint: '250 là số lớn nhất, đó là phương án A (Gấu trắng).' },
      { type: 'true_false', label: 'Đúng / Sai', q: '0 × 7 = 0. Đúng hay sai?', correct: true, hint: 'Số 0 nhân với số nào cũng bằng 0.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đường gấp khúc gồm 4 đoạn, mỗi đoạn 3 cm. Độ dài đường gấp khúc là bao nhiêu xăng-ti-mét?', correct: 12, hint: 'Lấy 3 × 4.' },
      { type: 'fill_blank', label: 'Điền số', q: '14 : 2 = ?', correct: 7, hint: '2 nhân mấy bằng 14?' }
    ]
  },

  'lop3-bai-9': {
    grade: 3, no: 9, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Bảng nhân 6, bảng chia 6',
    desc: 'Lập và ghi nhớ bảng nhân 6, bảng chia 6; bước nhảy 6; giải toán.',
    icon: '6️⃣',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Con bọ rùa <b>6 chấm</b> dẫn em vào bảng nhân 6 nhé!',
    steps: ['Lập bảng nhân', 'Bước nhảy 6', 'Toa xe', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '🐞 Bảng nhân 6 từ bọ rùa', sub: 'Mỗi con bọ rùa 6 chấm. Bấm 🔊 Nghe nhé!', cards: [
        { num: 24, sum: '6 + 6 + 6 + 6 = 24 nên 6 × 4 = 24', say: 'sáu nhân bốn bằng hai mươi tư' },
        { num: 30, sum: '6 × 5 = 30', say: 'sáu nhân năm bằng ba mươi' },
        { num: 2, sum: '12 : 6 = 2', say: 'mười hai chia sáu bằng hai' }
      ] },
      { type: 'sequence', title: '✏️ Bước nhảy 6', sub: 'Điền số theo quy luật thêm 6 hoặc bớt 6 nhé!', rows: [
        { label: 'a) Dãy tiến (thêm 6):', slots: [6, 12, 18, { blank: 24 }, { blank: 30 }, 36] },
        { label: 'b) Dãy lùi (bớt 6):', slots: [60, 54, 48, { blank: 42 }, { blank: 36 }, 30] }
      ] },
      { type: 'mcq', title: '🚚 Toa xe vận tải', sub: 'Tính rồi nối các phép tính cùng kết quả nhé!', questions: [
        { q: 'Kiện hàng 5 × 6 nên đặt lên xe nào có cùng kết quả?', options: [{ val: 1, label: '6 × 1' }, { val: 2, label: '6 × 3' }, { val: 3, label: '6 × 5' }, { val: 4, label: '12 : 6' }], correct: 3, ok: '5 × 6 = 30 và 6 × 5 = 30 nên bằng nhau.' },
        { q: 'Chuỗi: 6 × 4, rồi : 3, rồi : 2. Kết quả cuối là?', options: [4, 8, 24, 6], correct: 4, ok: '6 × 4 = 24; 24 : 3 = 8; 8 : 2 = 4.' },
        { q: '48 : 6 = ?', options: [6, 7, 8, 9], correct: 8, ok: '6 × 8 = 48 nên 48 : 6 = 8.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Bảng nhân 6 lập thế nào?', a: 'Em cộng thêm 6 mỗi lần: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60 nhé! 🐢' },
      { q: '12 : 6 tính sao?', a: 'Em nghĩ 6 nhân mấy bằng 12, đó là 2 nên 12 : 6 = 2 nhé!' },
      { q: 'Mỗi hộp bút có mấy chiếc?', a: 'Mỗi hộp 6 chiếc bút màu. Có 4 hộp thì 6 × 4 = 24 chiếc đó em! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: gặp phép chia 6, em nhớ bảng nhân 6 là ra ngay nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '6 × 5 = ?', correct: 30, hint: 'Đếm thêm 6 năm lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '48 : 6 = ?', options: [{ l: 'A', v: 6 }, { l: 'B', v: 7 }, { l: 'C', v: 8 }, { l: 'D', v: 9 }], correct: 8, hint: '6 nhân mấy bằng 48?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mỗi hộp có 6 bút màu, có 4 hộp. Tất cả có bao nhiêu bút?', correct: 24, hint: 'Lấy 6 × 4.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Cưa thanh gỗ dài 60 cm thành 6 đoạn bằng nhau. Mỗi đoạn dài bao nhiêu xăng-ti-mét?', correct: 10, hint: 'Lấy 60 : 6.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '6 × 3 = 18. Đúng hay sai?', correct: true, hint: 'Đếm thêm 6 ba lần.' }
    ]
  },

  'lop3-bai-10': {
    grade: 3, no: 10, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Bảng nhân 7, bảng chia 7',
    desc: 'Lập và ghi nhớ bảng nhân 7, bảng chia 7; bước nhảy 7; giải toán.',
    icon: '7️⃣',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Một tuần có <b>7 ngày</b>, cùng học bảng nhân 7 nhé!',
    steps: ['Lập bảng nhân', 'Bước nhảy 7', 'Quả bóng', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '🤝 Bảng nhân 7 từ trò kéo co', sub: 'Mỗi đội 7 bạn. Bấm 🔊 Nghe nhé!', cards: [
        { num: 14, sum: '7 + 7 = 14 nên 7 × 2 = 14', say: 'bảy nhân hai bằng mười bốn' },
        { num: 42, sum: '7 × 6 = 42', say: 'bảy nhân sáu bằng bốn mươi hai' },
        { num: 7, sum: '49 : 7 = 7', say: 'bốn mươi chín chia bảy bằng bảy' }
      ] },
      { type: 'sequence', title: '✏️ Bước nhảy 7', sub: 'Điền số theo quy luật thêm 7 hoặc bớt 7 nhé!', rows: [
        { label: 'a) Dãy tiến (thêm 7):', slots: [7, 14, 21, { blank: 28 }, 35, 42, { blank: 49 }] },
        { label: 'b) Dãy lùi (bớt 7):', slots: [70, 63, 56, { blank: 49 }, { blank: 42 }, 35] }
      ] },
      { type: 'mcq', title: '⚽ Quả bóng & so sánh', sub: 'Tính kết quả rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Quả bóng nào có kết quả bé hơn 28?', options: [{ val: 1, label: '7 × 6' }, { val: 2, label: '49 : 7' }, { val: 3, label: '7 × 9' }, { val: 4, label: '7 × 4' }], correct: 2, ok: '49 : 7 = 7 bé hơn 28. Còn 7×6=42, 7×9=63, 7×4=28 đều không bé hơn 28.' },
        { q: 'So sánh 7 × 5 với 7 × 4. Dấu nào đúng?', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 1, ok: '7 × 5 = 35 lớn hơn 7 × 4 = 28 nên dùng dấu >.' },
        { q: 'So sánh 42 : 7 với 42 : 6. Dấu nào đúng?', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 2, ok: '42 : 7 = 6 bé hơn 42 : 6 = 7 nên dùng dấu <.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Bảng nhân 7 lập thế nào?', a: 'Em cộng thêm 7 mỗi lần: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70 nhé! 🐢' },
      { q: '49 : 7 tính sao?', a: 'Em nghĩ 7 nhân mấy bằng 49, đó là 7 nên 49 : 7 = 7 nhé!' },
      { q: 'Một tuần có mấy ngày?', a: 'Một tuần lễ có 7 ngày. Vậy 4 tuần có 7 × 4 = 28 ngày đó em! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: gặp phép chia 7, em nhớ bảng nhân 7 là tìm được đáp án nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '7 × 6 = ?', correct: 42, hint: 'Đếm thêm 7 sáu lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '49 : 7 = ?', options: [{ l: 'A', v: 6 }, { l: 'B', v: 7 }, { l: 'C', v: 8 }, { l: 'D', v: 9 }], correct: 7, hint: '7 nhân mấy bằng 49?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mỗi tuần có 7 ngày. Hỏi 4 tuần có bao nhiêu ngày?', correct: 28, hint: 'Lấy 7 × 4.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Có 42 cái cốc, xếp đều vào 7 hộp. Mỗi hộp có bao nhiêu cái cốc?', correct: 6, hint: 'Lấy 42 : 7.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '7 × 5 lớn hơn 7 × 4. Đúng hay sai?', correct: true, hint: '35 so với 28.' }
    ]
  },

  'lop3-bai-11': {
    grade: 3, no: 11, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Bảng nhân 8, bảng chia 8',
    desc: 'Lập và ghi nhớ bảng nhân 8, bảng chia 8; bước nhảy 8; giải toán.',
    icon: '8️⃣',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Con bạch tuộc có <b>8 chân</b> giúp em nhớ bảng nhân 8 nhé!',
    steps: ['Lập bảng nhân', 'Bước nhảy 8', 'So sánh', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '🐙 Bảng nhân 8', sub: 'Mỗi con bạch tuộc 8 chân. Bấm 🔊 Nghe nhé!', cards: [
        { num: 16, sum: '8 + 8 = 16 nên 8 × 2 = 16', say: 'tám nhân hai bằng mười sáu' },
        { num: 32, sum: '8 × 4 = 32', say: 'tám nhân bốn bằng ba mươi hai' },
        { num: 7, sum: '56 : 8 = 7', say: 'năm mươi sáu chia tám bằng bảy' }
      ] },
      { type: 'sequence', title: '✏️ Bước nhảy 8', sub: 'Điền số theo quy luật thêm 8 hoặc bớt 8 nhé!', rows: [
        { label: 'a) Dãy tiến (thêm 8):', slots: [8, 16, 24, { blank: 32 }, { blank: 40 }, 48] },
        { label: 'b) Dãy lùi (bớt 8):', slots: [80, 72, 64, { blank: 56 }, { blank: 48 }, 40] }
      ] },
      { type: 'mcq', title: '🔎 Tính & so sánh', sub: 'Tính kết quả rồi chọn đáp án đúng nhé!', questions: [
        { q: '8 × 5 = ?', options: [32, 40, 45, 48], correct: 40, ok: '8 × 5 = 40 (đếm thêm 8 năm lần).' },
        { q: 'So sánh 8 × 5 với 8 × 4. Dấu nào đúng?', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 1, ok: '8 × 5 = 40 lớn hơn 8 × 4 = 32 nên dùng dấu >.' },
        { q: '64 : 8 = ?', options: [6, 7, 8, 9], correct: 8, ok: '8 × 8 = 64 nên 64 : 8 = 8.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Bảng nhân 8 lập thế nào?', a: 'Em cộng thêm 8 mỗi lần: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 nhé! 🐢' },
      { q: '56 : 8 tính sao?', a: 'Em nghĩ 8 nhân mấy bằng 56, đó là 7 nên 56 : 8 = 7 nhé!' },
      { q: 'Mẹo nhớ bảng nhân 8?', a: 'Bảng nhân 8 gấp đôi bảng nhân 4 đó em: 4 × 3 = 12 thì 8 × 3 = 24! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: gặp phép chia 8, em nhớ bảng nhân 8 là ra ngay nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '8 × 4 = ?', correct: 32, hint: 'Đếm thêm 8 bốn lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '56 : 8 = ?', options: [{ l: 'A', v: 6 }, { l: 'B', v: 7 }, { l: 'C', v: 8 }, { l: 'D', v: 9 }], correct: 7, hint: '8 nhân mấy bằng 56?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mỗi rổ có 8 quả trứng, có 5 rổ. Tất cả có bao nhiêu quả trứng?', correct: 40, hint: 'Lấy 8 × 5.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Có 48 chiếc kẹo, chia đều vào 8 túi. Mỗi túi có bao nhiêu chiếc?', correct: 6, hint: 'Lấy 48 : 8.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '8 × 8 = 64. Đúng hay sai?', correct: true, hint: 'Đếm thêm 8 tám lần.' }
    ]
  },

  'lop3-bai-12': {
    grade: 3, no: 12, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Bảng nhân 9, bảng chia 9',
    desc: 'Lập và ghi nhớ bảng nhân 9, bảng chia 9; bước nhảy 9; giải toán.',
    icon: '9️⃣',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Mỗi đội múa rồng có <b>9 người</b>, cùng học bảng nhân 9 nhé!',
    steps: ['Lập bảng nhân', 'Bước nhảy 9', 'Lọc kết quả', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '🐉 Bảng nhân 9 từ đội múa rồng', sub: 'Mỗi đội 9 người. Bấm 🔊 Nghe nhé!', cards: [
        { num: 18, sum: '9 + 9 = 18 nên 9 × 2 = 18', say: 'chín nhân hai bằng mười tám' },
        { num: 36, sum: '9 × 4 = 36', say: 'chín nhân bốn bằng ba mươi sáu' },
        { num: 5, sum: '45 : 9 = 5', say: 'bốn mươi lăm chia chín bằng năm' }
      ] },
      { type: 'sequence', title: '✏️ Bước nhảy 9', sub: 'Điền số theo quy luật thêm 9 hoặc bớt 9 nhé!', rows: [
        { label: 'a) Dãy tiến (thêm 9):', slots: [9, 18, 27, { blank: 36 }, 45, { blank: 54 }] },
        { label: 'b) Dãy lùi (bớt 9):', slots: [90, 81, 72, { blank: 63 }, { blank: 54 }, 45] }
      ] },
      { type: 'mcq', title: '🍉 Lọc kết quả dưa hấu', sub: 'Tính rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Bông hoa nào có kết quả lớn hơn 10?', options: [{ val: 1, label: '54 : 9' }, { val: 2, label: '45 : 9' }, { val: 3, label: '9 × 5' }, { val: 4, label: '90 : 9' }], correct: 3, ok: '9 × 5 = 45 lớn hơn 10. Còn 54:9=6, 45:9=5, 90:9=10 đều không lớn hơn 10.' },
        { q: 'Dùng ma trận: 4 × 3 = ?', options: [7, 12, 16, 9], correct: 12, ok: 'Dóng cột 4 và hàng 3 gặp nhau ở 12.' },
        { q: '54 : 9 = ?', options: [5, 6, 7, 8], correct: 6, ok: '9 × 6 = 54 nên 54 : 9 = 6.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Bảng nhân 9 lập thế nào?', a: 'Em cộng thêm 9 mỗi lần: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90 nhé! 🐢' },
      { q: 'Mẹo nhớ bảng nhân 9?', a: 'Các kết quả bảng nhân 9 có tổng hai chữ số luôn bằng 9: 18 (1+8), 27 (2+7), 36 (3+6)... thú vị chưa em! 🐢' },
      { q: '45 : 9 tính sao?', a: 'Em nghĩ 9 nhân mấy bằng 45, đó là 5 nên 45 : 9 = 5 nhé!' }
    ], fallback: 'Rùa Toán gợi ý: gặp phép chia 9, em nhớ bảng nhân 9 là ra ngay nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '9 × 4 = ?', correct: 36, hint: 'Đếm thêm 9 bốn lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '45 : 9 = ?', options: [{ l: 'A', v: 4 }, { l: 'B', v: 5 }, { l: 'C', v: 6 }, { l: 'D', v: 9 }], correct: 5, hint: '9 nhân mấy bằng 45?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mỗi túi có 9 quả cam, có 4 túi. Tất cả có bao nhiêu quả cam?', correct: 36, hint: 'Lấy 9 × 4.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Chia đều 45 lít nước mắm vào 9 can. Mỗi can có bao nhiêu lít?', correct: 5, hint: 'Lấy 45 : 9.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '9 × 0 = 0. Đúng hay sai?', correct: true, hint: 'Số nào nhân với 0 cũng bằng 0.' }
    ]
  },

  'lop3-bai-13': {
    grade: 3, no: 13, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Tìm thành phần trong phép nhân, phép chia',
    desc: 'Tìm thừa số, số bị chia, số chia chưa biết trong phép tính.',
    icon: '🔍',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Tìm số còn ẩn trong phép <b>nhân</b> và phép <b>chia</b> bằng quy tắc nhé!',
    steps: ['Quy tắc', 'Điền số ?', 'Tình huống', 'Giải toán'],
    blocks: [
      { type: 'info', title: '📌 Ba quy tắc tìm ẩn số', sub: 'Học thuộc ba quy tắc này em sẽ tìm được số chưa biết!', html: '<b>1. Tìm thừa số:</b> lấy <i>tích chia cho thừa số kia</i>.<br>Ví dụ: ? × 7 = 63 → 63 : 7 = 9.<br><br><b>2. Tìm số bị chia:</b> lấy <i>thương nhân với số chia</i>.<br>Ví dụ: ? : 8 = 6 → 6 × 8 = 48.<br><br><b>3. Tìm số chia:</b> lấy <i>số bị chia chia cho thương</i>.<br>Ví dụ: 35 : ? = 5 → 35 : 5 = 7.' },
      { type: 'mcq', title: '🧮 Máy tính điền số ?', sub: 'Tìm số ở dấu ? rồi chọn đáp án nhé!', questions: [
        { q: '? × 7 = 63. Số ? là bao nhiêu?', options: [7, 8, 9, 56], correct: 9, ok: 'Lấy 63 : 7 = 9.' },
        { q: '? : 8 = 6. Số ? là bao nhiêu?', options: [14, 48, 2, 56], correct: 48, ok: 'Lấy 6 × 8 = 48.' },
        { q: '35 : ? = 5. Số ? là bao nhiêu?', options: [5, 6, 7, 30], correct: 7, ok: 'Lấy 35 : 5 = 7.' }
      ] },
      { type: 'mcq', title: '🌸 Tình huống thực tế', sub: 'Đọc kĩ tình huống rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Ba ca nước giống nhau chứa tất cả 6 lít. Mỗi ca chứa bao nhiêu lít?', options: [2, 3, 6, 18], correct: 2, ok: 'Lấy 6 : 3 = 2 lít mỗi ca.' },
        { q: '3 lọ hoa, mỗi lọ 5 bông. Có tất cả bao nhiêu bông hoa?', options: [8, 15, 35, 53], correct: 15, ok: 'Lấy 5 × 3 = 15 bông.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Tìm thừa số thế nào?', a: 'Muốn tìm một thừa số, em lấy tích chia cho thừa số kia. Ví dụ ? × 7 = 63 thì ? = 63 : 7 = 9 nhé! 🐢' },
      { q: 'Tìm số bị chia ra sao?', a: 'Muốn tìm số bị chia, em lấy thương nhân với số chia. Ví dụ ? : 8 = 6 thì ? = 6 × 8 = 48.' },
      { q: 'Tìm số chia thế nào?', a: 'Muốn tìm số chia, em lấy số bị chia chia cho thương. Ví dụ 35 : ? = 5 thì ? = 35 : 5 = 7 nhé!' }
    ], fallback: 'Rùa Toán gợi ý: em xác định đâu là tích, thừa số, số bị chia, số chia, thương rồi áp dụng quy tắc nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '? × 7 = 63. Số ? là bao nhiêu?', correct: 9, hint: 'Lấy 63 : 7.' },
      { type: 'fill_blank', label: 'Điền số', q: '? : 8 = 6. Số ? là bao nhiêu?', correct: 48, hint: 'Lấy 6 × 8.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '35 : ? = 5. Số ? là bao nhiêu?', options: [{ l: 'A', v: 5 }, { l: 'B', v: 6 }, { l: 'C', v: 7 }, { l: 'D', v: 8 }], correct: 7, hint: 'Lấy 35 : 5.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Có 30 người ngồi đều trong 5 ca-bin cáp treo. Mỗi ca-bin có bao nhiêu người?', correct: 6, hint: 'Lấy 30 : 5.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Có 35 quả cam, xếp mỗi đĩa 5 quả. Cần bao nhiêu đĩa?', correct: 7, hint: 'Lấy 35 : 5.' }
    ]
  },

  'lop3-bai-14': {
    grade: 3, no: 14, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Một phần mấy',
    desc: 'Nhận biết một phần hai, một phần ba... của hình và của một nhóm đồ vật.',
    icon: '🍕',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Chia một vật thành các phần <b>bằng nhau</b> để hiểu một phần mấy nhé!',
    steps: ['Chia hình', 'Đọc viết', 'Đúng hay sai', 'Tính số phần'],
    blocks: [
      { type: 'info', title: '🍰 Một phần mấy là gì?', sub: 'Khi chia một vật thành các phần bằng nhau, mỗi phần là một phần mấy.', html: 'Chia một hình thành <b>2 phần bằng nhau</b>, lấy 1 phần là <b>một phần hai</b> (1/2).<br>Chia thành <b>3 phần bằng nhau</b>, mỗi phần là <b>một phần ba</b> (1/3).<br>Chia thành <b>4 phần bằng nhau</b>, mỗi phần là <b>một phần tư</b> (1/4).<br><br>Lưu ý: các phần phải <i>bằng nhau</i> thì mới đúng nhé!' },
      { type: 'mcq', title: '🍕 Đọc & viết một phần mấy', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Chia bánh thành 5 phần bằng nhau, lấy 1 phần. Đó là một phần mấy?', options: [{ val: 1, label: 'Một phần hai' }, { val: 2, label: 'Một phần ba' }, { val: 3, label: 'Một phần năm' }, { val: 4, label: 'Một phần tư' }], correct: 3, ok: 'Chia 5 phần bằng nhau, mỗi phần là một phần năm (1/5).' },
        { q: 'Để có một phần ba, ta chia hình thành mấy phần bằng nhau?', options: [2, 3, 4, 6], correct: 3, ok: 'Một phần ba nghĩa là chia thành 3 phần bằng nhau.' }
      ] },
      { type: 'mcq', title: '🐸 Tìm một phần mấy của nhóm', sub: 'Lấy tổng số chia cho mẫu số nhé!', questions: [
        { q: 'Một phần hai của 6 quả táo là mấy quả?', options: [2, 3, 4, 6], correct: 3, ok: 'Lấy 6 : 2 = 3 quả.' },
        { q: 'Một phần ba của 12 quả cam là mấy quả?', options: [3, 4, 6, 12], correct: 4, ok: 'Lấy 12 : 3 = 4 quả.' },
        { q: 'Một phần sáu của 18 con ếch là mấy con?', options: [2, 3, 6, 9], correct: 3, ok: 'Lấy 18 : 6 = 3 con.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Tìm một phần mấy của một nhóm thế nào?', a: 'Em lấy tổng số chia cho mẫu số. Ví dụ một phần ba của 12 quả cam là 12 : 3 = 4 quả nhé! 🐢' },
      { q: 'Vì sao các phần phải bằng nhau?', a: 'Vì chỉ khi các phần bằng nhau thì mỗi phần mới đúng là một phần mấy. Nếu chia lệch thì không đúng đâu em!' },
      { q: 'Một phần chín của 18 là bao nhiêu?', a: 'Em lấy 18 : 9 = 2. Vậy một phần chín của 18 con ếch là 2 con đó! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: muốn tìm một phần mấy của một nhóm, em lấy tổng số chia cho mẫu số nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Một phần hai của 6 quả táo là mấy quả?', correct: 3, hint: 'Lấy 6 : 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Một phần ba của 12 quả cam là mấy quả?', correct: 4, hint: 'Lấy 12 : 3.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Một phần chín của 18 con ếch là mấy con?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 6 }, { l: 'D', v: 9 }], correct: 2, hint: 'Lấy 18 : 9.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Chia hình thành 4 phần bằng nhau, mỗi phần là một phần tư. Đúng hay sai?', correct: true, hint: 'Chia 4 phần bằng nhau.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Một phần năm của 15 cây xà lách là mấy cây?', correct: 3, hint: 'Lấy 15 : 5.' }
    ]
  },

  'lop3-bai-15': {
    grade: 3, no: 15, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Luyện tập chung',
    desc: 'Ôn nhân chia trong bảng, tìm thành phần chưa biết, một phần mấy, giải toán.',
    icon: '🎯',
    topic: '✖️ Chủ đề 2: Phép nhân, phép chia trong bảng',
    banner: 'Cùng <b>luyện tập chung</b> các bảng nhân, bảng chia đã học nhé!',
    steps: ['Tính nhẩm', 'Lọc kết quả', 'Tìm ẩn số', 'Giải toán'],
    blocks: [
      { type: 'read-cards', title: '⚡ Siêu tính nhẩm', sub: 'Đọc và ghi nhớ các phép tính. Bấm 🔊 Nghe nhé!', cards: [
        { num: 18, sum: '6 × 3 = 18', say: 'sáu nhân ba bằng mười tám' },
        { num: 35, sum: '7 × 5 = 35', say: 'bảy nhân năm bằng ba mươi lăm' },
        { num: 56, sum: '8 × 7 = 56', say: 'tám nhân bảy bằng năm mươi sáu' }
      ] },
      { type: 'mcq', title: '🦏 Lọc kết quả & tìm ẩn số', sub: 'Tính rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Chú tê giác nào có kết quả bé hơn 8?', options: [{ val: 1, label: '49 : 7' }, { val: 2, label: '54 : 6' }, { val: 3, label: '72 : 9' }, { val: 4, label: '40 : 5' }], correct: 1, ok: '49 : 7 = 7 bé hơn 8. Còn 54 : 6 = 9, 72 : 9 = 8 và 40 : 5 = 8 đều không bé hơn 8.' },
        { q: '? × 7 = 63. Số ? là bao nhiêu?', options: [7, 8, 9, 56], correct: 9, ok: 'Lấy 63 : 7 = 9.' },
        { q: '35 : ? = 5. Số ? là bao nhiêu?', options: [5, 6, 7, 30], correct: 7, ok: 'Lấy 35 : 5 = 7.' }
      ] },
      { type: 'mcq', title: '🎂 Giải toán & một phần mấy', sub: 'Đọc kĩ rồi chọn đáp án nhé!', questions: [
        { q: 'Việt xếp ly vào 5 bàn, mỗi bàn 6 cái. Có tất cả bao nhiêu cái ly?', options: [11, 30, 36, 25], correct: 30, ok: 'Lấy 6 × 5 = 30 cái ly.' },
        { q: 'Có 45 bông hoa, cắm mỗi lọ 9 bông. Cần bao nhiêu lọ?', options: [4, 5, 6, 9], correct: 5, ok: 'Lấy 45 : 9 = 5 lọ.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Tìm thừa số chưa biết thế nào?', a: 'Em lấy tích chia cho thừa số kia. Ví dụ ? × 7 = 63 thì ? = 63 : 7 = 9 nhé! 🐢' },
      { q: 'Một phần sáu của 18 là bao nhiêu?', a: 'Em lấy 18 : 6 = 3. Vậy một phần sáu của 18 con ếch là 3 con đó! 🐢' },
      { q: 'Làm sao tính nhẩm nhanh?', a: 'Em học thuộc các bảng nhân từ 2 đến 9, rồi phép chia chính là phép nhân ngược lại nhé!' }
    ], fallback: 'Rùa Toán gợi ý: nhớ kĩ các bảng nhân chia và quy tắc tìm ẩn số là em làm tốt hết! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: '8 × 7 = ?', correct: 56, hint: 'Đếm thêm 8 bảy lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '? : 8 = 6. Số ? là bao nhiêu?', options: [{ l: 'A', v: 14 }, { l: 'B', v: 2 }, { l: 'C', v: 48 }, { l: 'D', v: 56 }], correct: 48, hint: 'Lấy 6 × 8.' },
      { type: 'fill_blank', label: 'Điền số', q: '5 bàn, mỗi bàn 6 cái ly. Có tất cả bao nhiêu cái ly?', correct: 30, hint: 'Lấy 6 × 5.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Một phần sáu của 18 con ếch là mấy con?', correct: 3, hint: 'Lấy 18 : 6.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '49 : 7 bé hơn 8. Đúng hay sai?', correct: true, hint: '49 : 7 = 7.' }
    ]
  },

  'lop3-bai-16': {
    grade: 3, no: 16, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Điểm ở giữa, trung điểm của đoạn thẳng',
    desc: 'Nhận biết điểm ở giữa hai điểm và trung điểm của đoạn thẳng.',
    icon: '📍',
    topic: '📐 Chủ đề 3: Hình học và đo lường',
    banner: 'Trung điểm chia đoạn thẳng thành <b>hai phần bằng nhau</b> nhé!',
    steps: ['Khái niệm', 'Đúng hay sai', 'Gập dây', 'Cào cào nhảy'],
    blocks: [
      { type: 'info', title: '📍 Điểm ở giữa và trung điểm', sub: 'Phân biệt hai khái niệm quan trọng này nhé!', html: '<b>Điểm ở giữa:</b> Ba điểm A, B, C thẳng hàng và B nằm giữa A và C thì B là điểm ở giữa.<br><br><b>Trung điểm:</b> Nếu điểm M nằm giữa A, B và <i>MA = MB</i> (hai đoạn bằng nhau) thì M là trung điểm của đoạn thẳng AB.<br><br>Trung điểm chia đoạn thẳng thành <b>hai phần bằng nhau</b>!' },
      { type: 'mcq', title: '✅ Đúng hay sai', sub: 'Cho AM = MB = 3 cm, BN = 3 cm, NC = 2 cm. Chọn đáp án đúng nhé!', questions: [
        { q: 'M là trung điểm của đoạn thẳng AB. Đúng hay sai?', options: [{ val: 1, label: 'Đúng' }, { val: 2, label: 'Sai' }], correct: 1, ok: 'Vì AM = MB = 3 cm nên M là trung điểm của AB. Đúng!' },
        { q: 'N là trung điểm của đoạn thẳng BC. Đúng hay sai?', options: [{ val: 1, label: 'Đúng' }, { val: 2, label: 'Sai' }], correct: 2, ok: 'Vì BN = 3 cm khác NC = 2 cm nên N không phải trung điểm. Sai!' }
      ] },
      { type: 'mcq', title: '🪢 Gập dây & cào cào nhảy', sub: 'Tính rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Đoạn dây dài 20 cm, gập đôi để tìm trung điểm. Trung điểm chia dây thành hai đoạn, mỗi đoạn dài bao nhiêu?', options: [5, 10, 15, 20], correct: 10, ok: 'Lấy 20 : 2 = 10 cm mỗi đoạn.' },
        { q: 'Đoạn thẳng AB chia thành 8 bước nhảy bằng nhau. Cào cào cần nhảy mấy bước để tới trung điểm?', options: [2, 4, 6, 8], correct: 4, ok: 'Lấy 8 : 2 = 4 bước thì tới trung điểm.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Trung điểm là gì?', a: 'Trung điểm là điểm nằm giữa và chia đoạn thẳng thành hai phần bằng nhau. Ví dụ M là trung điểm AB khi MA = MB nhé! 🐢' },
      { q: 'Điểm ở giữa khác trung điểm thế nào?', a: 'Điểm ở giữa chỉ cần nằm giữa hai điểm. Còn trung điểm vừa nằm giữa vừa chia thành hai đoạn bằng nhau đó em!' },
      { q: 'Làm sao tìm trung điểm không cần thước?', a: 'Em gập đôi đoạn dây hay tờ giấy lại, nếp gập chính là trung điểm nhé! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: trung điểm luôn chia đoạn thẳng thành hai phần bằng nhau, em nhớ kiểm tra hai đoạn có bằng nhau không nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Đoạn thẳng AB dài 20 cm. Trung điểm chia mỗi đoạn dài bao nhiêu xăng-ti-mét?', correct: 10, hint: 'Lấy 20 : 2.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Nếu AM = MB thì M là trung điểm của AB. Đúng hay sai?', correct: true, hint: 'Hai đoạn bằng nhau và M nằm giữa.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Đoạn AB có 8 bước bằng nhau. Tới trung điểm cần mấy bước?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 4 }, { l: 'C', v: 6 }, { l: 'D', v: 8 }], correct: 4, hint: 'Lấy 8 : 2.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Cho BN = 3 cm, NC = 2 cm. N là trung điểm của BC. Đúng hay sai?', correct: false, hint: 'Hai đoạn có bằng nhau không?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đoạn thẳng dài 16 cm. Trung điểm chia mỗi đoạn dài bao nhiêu xăng-ti-mét?', correct: 8, hint: 'Lấy 16 : 2.' }
    ]
  },

  'lop3-bai-17': {
    grade: 3, no: 17, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Hình tròn. Tâm, bán kính, đường kính',
    desc: 'Nhận biết tâm, bán kính, đường kính; đường kính dài gấp đôi bán kính.',
    icon: '⭕',
    topic: '📐 Chủ đề 3: Hình học và đo lường',
    banner: 'Đường kính của hình tròn dài <b>gấp đôi</b> bán kính nhé!',
    steps: ['Thành phần', 'Quan hệ 2 lần', 'Truy tìm', 'Giải toán'],
    blocks: [
      { type: 'info', title: '⭕ Thành phần của hình tròn', sub: 'Nhận biết tâm, bán kính, đường kính nhé!', html: '<b>Tâm O:</b> điểm chính giữa hình tròn.<br><b>Bán kính:</b> đoạn thẳng nối tâm O với một điểm trên đường tròn (ví dụ OM).<br><b>Đường kính:</b> đoạn thẳng đi qua tâm O và nối hai điểm trên đường tròn (ví dụ AB).<br><br>Quan trọng: Tâm O là trung điểm của đường kính. <b>Đường kính dài gấp 2 lần bán kính</b>.' },
      { type: 'mcq', title: '🔁 Quan hệ bán kính - đường kính', sub: 'Đường kính = 2 × bán kính. Chọn đáp án nhé!', questions: [
        { q: 'Bán kính hình tròn là 5 cm. Đường kính dài bao nhiêu?', options: [5, 10, 15, 25], correct: 10, ok: 'Đường kính = 2 × 5 = 10 cm.' },
        { q: 'Đường kính hình tròn là 14 cm. Bán kính dài bao nhiêu?', options: [5, 7, 14, 28], correct: 7, ok: 'Bán kính = 14 : 2 = 7 cm.' }
      ] },
      { type: 'mcq', title: '🦗 Hành trình bọ ngựa', sub: 'Mỗi bông hoa có bán kính 7 cm. Tính rồi chọn đáp án nhé!', questions: [
        { q: 'Hành trình ABCD dài bằng 6 lần bán kính 7 cm. Quãng đường là bao nhiêu?', options: [13, 42, 49, 36], correct: 42, ok: 'Lấy 7 × 6 = 42 cm.' },
        { q: 'Hình tròn tâm I, đoạn AB đi qua tâm I. AB được gọi là gì?', options: [{ val: 1, label: 'Bán kính' }, { val: 2, label: 'Đường kính' }, { val: 3, label: 'Tâm' }], correct: 2, ok: 'Đoạn đi qua tâm và nối hai điểm trên đường tròn là đường kính.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Bán kính là gì?', a: 'Bán kính là đoạn thẳng nối từ tâm O đến một điểm trên đường tròn đó em! 🐢' },
      { q: 'Đường kính dài gấp mấy lần bán kính?', a: 'Đường kính dài gấp 2 lần bán kính. Ví dụ bán kính 5 cm thì đường kính 10 cm nhé!' },
      { q: 'Tâm O nằm ở đâu?', a: 'Tâm O là điểm chính giữa hình tròn và là trung điểm của đường kính đó em! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: nhớ công thức đường kính = 2 × bán kính là em làm được hết bài về hình tròn! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Bán kính 5 cm thì đường kính dài bao nhiêu xăng-ti-mét?', correct: 10, hint: 'Lấy 2 × 5.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đường kính 14 cm thì bán kính dài bao nhiêu xăng-ti-mét?', correct: 7, hint: 'Lấy 14 : 2.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Đoạn thẳng đi qua tâm và nối hai điểm trên đường tròn gọi là gì?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 2, hint: 'Đường kính là phương án B.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Tâm O là trung điểm của đường kính. Đúng hay sai?', correct: true, hint: 'Tâm nằm chính giữa đường kính.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hành trình dài bằng 6 lần bán kính 7 cm. Quãng đường là bao nhiêu xăng-ti-mét?', correct: 42, hint: 'Lấy 7 × 6.' }
    ]
  },

  'lop3-bai-18': {
    grade: 3, no: 18, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Luyện tập về hình tròn',
    desc: 'Vẽ hình tròn bằng com pa; luyện tập bán kính, đường kính.',
    icon: '🧭',
    topic: '📐 Chủ đề 3: Hình học và đo lường',
    banner: 'Dùng <b>com pa</b> vẽ hình tròn và luyện tập bán kính, đường kính nhé!',
    steps: ['Vẽ com pa', 'Quan hệ 2 lần', 'Nhận diện', 'Giải toán'],
    blocks: [
      { type: 'info', title: '🧭 Vẽ hình tròn bằng com pa', sub: 'Ba bước vẽ hình tròn đẹp nhé!', html: '<b>Bước 1:</b> Đặt đầu nhọn com pa vào điểm chính giữa (tâm O).<br><b>Bước 2:</b> Mở com pa rộng bằng độ dài bán kính muốn vẽ.<br><b>Bước 3:</b> Xoay com pa một vòng tròn 360 độ để vẽ thành hình tròn.<br><br>Nhớ: đường kính luôn dài gấp 2 lần bán kính nhé!' },
      { type: 'mcq', title: '🔁 Luyện bán kính - đường kính', sub: 'Đường kính = 2 × bán kính. Chọn đáp án nhé!', questions: [
        { q: 'Bán kính 4 cm thì đường kính dài bao nhiêu?', options: [2, 6, 8, 16], correct: 8, ok: 'Đường kính = 2 × 4 = 8 cm.' },
        { q: 'Đường kính 12 cm thì bán kính dài bao nhiêu?', options: [4, 6, 12, 24], correct: 6, ok: 'Bán kính = 12 : 2 = 6 cm.' },
        { q: 'Bán kính 10 cm thì đường kính dài bao nhiêu?', options: [5, 10, 15, 20], correct: 20, ok: 'Đường kính = 2 × 10 = 20 cm.' }
      ] },
      { type: 'sequence', title: '✏️ Bảng bán kính & đường kính', sub: 'Đường kính gấp đôi bán kính, điền số còn thiếu nhé!', hint: 'Mỗi đường kính bằng bán kính nhân 2.', rows: [
        { label: 'Bán kính:', slots: [2, 3, { blank: 4 }, 5] },
        { label: 'Đường kính:', slots: [4, 6, 8, { blank: 10 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Vẽ hình tròn bằng com pa thế nào?', a: 'Em đặt đầu nhọn vào tâm, mở com pa bằng bán kính rồi xoay một vòng nhé! 🐢' },
      { q: 'Bán kính 6 cm thì đường kính bao nhiêu?', a: 'Đường kính = 2 × 6 = 12 cm đó em!' },
      { q: 'Đường kính 20 cm thì bán kính bao nhiêu?', a: 'Bán kính = 20 : 2 = 10 cm nhé! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: cứ nhớ đường kính = 2 × bán kính, bán kính = đường kính : 2 là làm được hết! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Bán kính 4 cm thì đường kính dài bao nhiêu xăng-ti-mét?', correct: 8, hint: 'Lấy 2 × 4.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đường kính 12 cm thì bán kính dài bao nhiêu xăng-ti-mét?', correct: 6, hint: 'Lấy 12 : 2.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bán kính 10 cm thì đường kính là?', options: [{ l: 'A', v: 5 }, { l: 'B', v: 10 }, { l: 'C', v: 15 }, { l: 'D', v: 20 }], correct: 20, hint: 'Lấy 2 × 10.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Khi vẽ com pa, đầu nhọn đặt vào tâm hình tròn. Đúng hay sai?', correct: true, hint: 'Đầu nhọn cố định ở tâm.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đường kính 18 cm thì bán kính dài bao nhiêu xăng-ti-mét?', correct: 9, hint: 'Lấy 18 : 2.' }
    ]
  },

  'lop3-bai-19': {
    grade: 3, no: 19, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông',
    desc: 'Nhận biết đỉnh, cạnh, góc của các hình; phân biệt hình chữ nhật, hình vuông.',
    icon: '🔺',
    topic: '📐 Chủ đề 3: Hình học và đo lường',
    banner: 'Hình tam giác có <b>3 cạnh</b>, hình tứ giác có <b>4 cạnh</b> nhé!',
    steps: ['Đỉnh cạnh góc', 'Chữ nhật vuông', 'Phân loại', 'Giải toán'],
    blocks: [
      { type: 'info', title: '🔺 Đỉnh, cạnh, góc', sub: 'Đếm số đỉnh, cạnh, góc của mỗi hình nhé!', html: '<b>Hình tam giác ABC:</b> có 3 đỉnh (A, B, C), 3 cạnh (AB, BC, CA) và 3 góc.<br><br><b>Hình tứ giác MNPQ:</b> có 4 đỉnh, 4 cạnh (MN, NP, PQ, QM) và 4 góc.<br><br><b>Hình chữ nhật:</b> có 4 góc vuông, hai cạnh dài bằng nhau và hai cạnh ngắn bằng nhau.<br><b>Hình vuông:</b> có 4 góc vuông và 4 cạnh bằng nhau.' },
      { type: 'mcq', title: '🔎 Nhận diện hình', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Hình tam giác có mấy cạnh?', options: [3, 4, 5, 6], correct: 3, ok: 'Hình tam giác có 3 đỉnh, 3 cạnh và 3 góc.' },
        { q: 'Hình nào có 4 cạnh bằng nhau và 4 góc vuông?', options: [{ val: 1, label: 'Hình tam giác' }, { val: 2, label: 'Hình chữ nhật' }, { val: 3, label: 'Hình vuông' }, { val: 4, label: 'Hình tròn' }], correct: 3, ok: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.' },
        { q: 'Hình tứ giác có mấy góc?', options: [3, 4, 5, 6], correct: 4, ok: 'Hình tứ giác có 4 góc.' }
      ] },
      { type: 'mcq', title: '🗺️ Ứng dụng thực tế', sub: 'Nhà các bạn ở 4 đỉnh hình chữ nhật có cạnh 13 dm và 20 dm. Chọn đáp án nhé!', questions: [
        { q: 'Hình chữ nhật có hai cạnh dài 20 dm và hai cạnh ngắn 13 dm. Cạnh dài hơn là bao nhiêu đề-xi-mét?', options: [13, 20, 33, 7], correct: 20, ok: 'Cạnh dài là 20 dm, cạnh ngắn là 13 dm.' },
        { q: 'Hình chữ nhật ABCD có AB = 20 dm thì cạnh DC đối diện dài bao nhiêu?', options: [13, 20, 33, 40], correct: 20, ok: 'Hai cạnh dài của hình chữ nhật bằng nhau nên DC = AB = 20 dm.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Hình tam giác có gì?', a: 'Hình tam giác có 3 đỉnh, 3 cạnh và 3 góc đó em! 🐢' },
      { q: 'Hình chữ nhật khác hình vuông thế nào?', a: 'Cả hai đều có 4 góc vuông. Hình vuông có 4 cạnh bằng nhau, còn hình chữ nhật có hai cạnh dài và hai cạnh ngắn nhé!' },
      { q: 'Hình tứ giác là gì?', a: 'Hình tứ giác là hình có 4 đỉnh, 4 cạnh và 4 góc. Hình chữ nhật và hình vuông cũng là hình tứ giác đó! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: em đếm số cạnh và xem các góc, cạnh có bằng nhau không để nhận ra từng hình nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Hình tam giác có mấy cạnh?', correct: 3, hint: 'Đếm các cạnh của tam giác.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình tứ giác có mấy đỉnh?', correct: 4, hint: 'Tứ giác có 4 góc, 4 đỉnh.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình nào có 4 cạnh bằng nhau và 4 góc vuông?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 3, hint: 'Hình vuông là phương án C.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hình chữ nhật có 4 góc vuông. Đúng hay sai?', correct: true, hint: 'Quan sát các góc của hình chữ nhật.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình chữ nhật có cạnh dài 20 dm. Cạnh dài đối diện cũng bằng bao nhiêu đề-xi-mét?', correct: 20, hint: 'Hai cạnh dài bằng nhau.' }
    ]
  },

  'lop3-bai-20': {
    grade: 3, no: 20, theme: 'orange', mascot: '🦊', avatar: '🦊',
    title: 'Luyện tập hình tam giác, tứ giác, chữ nhật, vuông',
    desc: 'Luyện tập phân loại hình, đo cạnh, ghép hình và xếp que tính.',
    icon: '📏',
    topic: '📐 Chủ đề 3: Hình học và đo lường',
    banner: 'Luyện tập <b>phân loại</b>, đo cạnh và xếp hình từ que tính nhé!',
    steps: ['Phân loại', 'Đo cạnh', 'Ghép hình', 'Que tính'],
    blocks: [
      { type: 'info', title: '📐 Ôn lại đặc điểm các hình', sub: 'Ghi nhớ để phân loại cho đúng nhé!', html: '<b>Hình vuông:</b> 4 cạnh bằng nhau, 4 góc vuông.<br><b>Hình chữ nhật:</b> 2 cạnh dài bằng nhau, 2 cạnh ngắn bằng nhau, 4 góc vuông.<br><b>Hình tam giác:</b> 3 cạnh, 3 góc.<br><b>Hình tứ giác:</b> 4 cạnh, 4 góc (hình chữ nhật và hình vuông cũng là tứ giác).' },
      { type: 'mcq', title: '🔎 Phân loại & đo cạnh', sub: 'Quan sát rồi chọn đáp án đúng nhé!', questions: [
        { q: 'Hình vuông trên lưới ô vuông có cạnh dài 3 ô (mỗi ô 1 cm). Cạnh hình vuông dài bao nhiêu?', options: [3, 4, 6, 9], correct: 3, ok: 'Đếm được 3 ô nên cạnh dài 3 cm.' },
        { q: 'Hình có 2 cạnh dài và 2 cạnh ngắn, 4 góc vuông là hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình chữ nhật' }, { val: 3, label: 'Hình tam giác' }], correct: 2, ok: 'Đó là hình chữ nhật.' }
      ] },
      { type: 'mcq', title: '🪵 Xếp que tính & ghép hình', sub: 'Đọc kĩ rồi chọn đáp án nhé!', questions: [
        { q: 'Cần ít nhất mấy que tính để xếp thành một hình tam giác?', options: [2, 3, 4, 5], correct: 3, ok: 'Hình tam giác có 3 cạnh nên cần 3 que tính.' },
        { q: 'Cắt một hình tứ giác bằng một đường thẳng qua hai đỉnh có thể tạo ra mấy hình tam giác?', options: [1, 2, 3, 4], correct: 2, ok: 'Đường chéo chia tứ giác thành 2 hình tam giác.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Cần mấy que xếp hình tam giác?', a: 'Hình tam giác có 3 cạnh nên cần 3 que tính bằng nhau đó em! 🐢' },
      { q: 'Làm sao đo cạnh trên lưới ô vuông?', a: 'Em đếm số ô vuông dọc theo cạnh, mỗi ô là 1 cm nhé!' },
      { q: 'Đường chéo tứ giác tạo ra hình gì?', a: 'Một đường chéo chia hình tứ giác thành 2 hình tam giác đó em! 🐢' }
    ], fallback: 'Rùa Toán gợi ý: em nhớ đặc điểm số cạnh, số góc của mỗi hình để phân loại và ghép hình cho đúng nhé! 🐢' },
    quiz: [
      { type: 'fill_blank', label: 'Điền số', q: 'Cần ít nhất mấy que tính để xếp một hình tam giác?', correct: 3, hint: 'Tam giác có 3 cạnh.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hình vuông có cạnh dài 3 ô trên lưới (mỗi ô 1 cm). Cạnh dài bao nhiêu xăng-ti-mét?', correct: 3, hint: 'Đếm số ô.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình có 2 cạnh dài, 2 cạnh ngắn và 4 góc vuông là hình gì?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 2, hint: 'Hình chữ nhật là phương án B.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hình vuông cũng là một hình tứ giác. Đúng hay sai?', correct: true, hint: 'Hình vuông có 4 cạnh, 4 góc.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Một đường chéo chia hình tứ giác thành mấy hình tam giác?', correct: 2, hint: 'Đường chéo nối hai đỉnh đối nhau.' }
    ]
  }
});
