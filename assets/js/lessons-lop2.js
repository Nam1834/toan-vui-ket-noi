// ============================================================
//  TVKN — DỮ LIỆU BÀI HỌC LỚP 2 (SGK Kết nối tri thức)
//  Nạp SAU lessons.js. Đổ dữ liệu vào window.TVKN_LESSONS.lessons
// ============================================================
Object.assign(window.TVKN_LESSONS.lessons, {

  'lop2-bai-1': {
    grade: 2, no: 1, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Ôn tập các số đến 100',
    desc: 'Đọc, viết và phân tích các số đến 100 thành chục và đơn vị.',
    icon: '🔢',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung (các số đến 100)',
    banner: 'Cùng ôn lại cách đọc, viết và phân tích các số đến 100 thành <b>chục</b> và <b>đơn vị</b> nhé!',
    steps: ['Cấu tạo số', 'Viết thành tổng', 'So sánh', 'Tia số'],
    blocks: [
      { type: 'build-number', title: '🔍 Khám phá cấu tạo số', sub: 'Bấm <b>+</b> / <b>−</b> để thay đổi số bó chục và số que lẻ. Mỗi bó 🟩 là 1 chục (10 que), mỗi que 🟫 là 1 đơn vị.', initChuc: 3, initDvi: 5 },
      { type: 'read-cards', title: '📖 Viết số thành tổng', sub: 'Mỗi số có hai chữ số đều bằng <b>số chục cộng số đơn vị</b>. Bấm 🔊 Nghe để luyện đọc nhé!', cards: [ { num: 35, sum: '35 = 30 + 5', word: '"ba mươi lăm"', say: 'ba mươi lăm' }, { num: 67, sum: '67 = 60 + 7', word: '"sáu mươi bảy"', say: 'sáu mươi bảy' }, { num: 84, sum: '84 = 80 + 4', word: '"tám mươi tư"', say: 'tám mươi tư' }, { num: 50, sum: '50 = 50 + 0', word: '"năm mươi"', say: 'năm mươi' }, { num: 72, sum: '72 = 70 + 2', word: '"bảy mươi hai"', say: 'bảy mươi hai' }, { num: 96, sum: '96 = 90 + 6', word: '"chín mươi sáu"', say: 'chín mươi sáu' } ] },
      { type: 'mcq', title: '🥕 Tìm cà rốt cho thỏ & so sánh số', sub: 'Em hãy đọc kĩ yêu cầu rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Chú thỏ cần củ cà rốt ghi số gồm <b>5 chục và 4 đơn vị</b>. Đó là số nào?', img: '🐰 ➜ 🥕 ?', options: [45, 54, 540, 9], correct: 54, ok: '5 chục là 50, thêm 4 đơn vị thành 54.' }, { q: 'Câu 2: Bông hoa nào ghi số <b>lớn hơn 60</b>?', img: '🌸 58 &nbsp; 🌼 60 &nbsp; 🌺 72 &nbsp; 🌷 49', options: [58, 60, 72, 49], correct: 72, ok: '72 lớn hơn 60 (vì 7 chục lớn hơn 6 chục).' }, { q: 'Câu 3: Có mấy chục quả cà chua (mỗi hàng 10 quả)?', img: '🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅<br>🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅<br>🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅', imgStyle: 'font-size:20px;line-height:1.4', options: [{ val: 2, label: '2 chục' }, { val: 3, label: '3 chục' }, { val: 4, label: '4 chục' }, { val: 30, label: '30 chục' }], correct: 3, ok: 'Có 3 hàng, mỗi hàng 1 chục → 3 chục = 30 quả.' } ] },
      { type: 'sequence', title: '✏️ Tia số & số hàng xóm', sub: 'Điền số còn thiếu cho đúng thứ tự, rồi bấm Kiểm tra nhé!', hint: '💡 Còn vài ô chưa đúng (ô đỏ). Đếm thêm 1 đơn vị mỗi bước và thử lại nhé!', rows: [ { label: 'a) Tia số đếm thêm 1 (đếm xuôi):', slots: [40, 41, { blank: 42 }, 43, { blank: 44 }, 45] }, { label: 'b) Số liền trước & số liền sau của <b>70</b>:', slots: [{ blank: 69 }, 70, { blank: 71 }] } ] }
    ],
    ai: { chips: [ { q: 'Chục và đơn vị là gì?', a: 'Số có hai chữ số gồm hàng chục và hàng đơn vị em ạ. Ví dụ số 35: chữ số 3 là 3 chục (30), chữ số 5 là 5 đơn vị. Gộp lại thành 35! 🦊' }, { q: 'Viết 67 thành tổng thế nào?', a: 'Số 67 có 6 chục và 7 đơn vị, nên 67 = 60 + 7 nhé! Em thử với 84: 84 = 80 + 4. ✏️' }, { q: 'Số liền sau là gì?', a: 'Số liền sau là số đứng ngay sau, lớn hơn 1 đơn vị. Số liền sau của 70 là 71, số liền trước là 69 nhé! ➡️' } ], fallback: 'Câu hỏi hay đó! Thỏ Toán gợi ý: em hãy tách số thành chục và đơn vị để dễ hiểu hơn. 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số gồm 7 chục và 2 đơn vị là số nào?', img: '7️⃣ chục · 2️⃣ đơn vị', options: [{ l: 'A', v: 27 }, { l: 'B', v: 72 }, { l: 'C', v: 720 }, { l: 'D', v: 92 }], correct: 72, hint: '7 chục là 70, thêm 2 đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 40, 41, 42, __, 44', correct: 43, hint: 'Đếm thêm 1 đơn vị sau 42.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '85 lớn hơn 78. Đúng hay sai?', correct: true, hint: 'So sánh hàng chục trước: 8 chục so với 7 chục.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '60 + 7 = ?', img: '6️⃣0️⃣ ➕ 7️⃣', options: [{ l: 'A', v: 13 }, { l: 'B', v: 67 }, { l: 'C', v: 76 }, { l: 'D', v: 607 }], correct: 67, hint: 'Gộp số chục và số đơn vị lại.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào lớn nhất?', img: '54   45   50   49', options: [{ l: 'A', v: 54 }, { l: 'B', v: 45 }, { l: 'C', v: 50 }, { l: 'D', v: 49 }], correct: 54, hint: 'So sánh hàng chục trước, rồi hàng đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền trước của 70 là số nào?', correct: 69, hint: 'Số liền trước nhỏ hơn 1 đơn vị.' }
    ]
  },

  'lop2-bai-2': {
    grade: 2, no: 2, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Tia số. Số liền trước, số liền sau',
    desc: 'Nhận biết vị trí số trên tia số, tìm số liền trước và số liền sau.',
    icon: '📏',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung (các số đến 100)',
    banner: 'Trên tia số, số bên trái <b>bé hơn</b>, số bên phải <b>lớn hơn</b>. Cùng tìm số liền trước, số liền sau nhé!',
    steps: ['Tia số', 'Hàng xóm', 'Biểu thức', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Ghi nhớ', sub: 'Đọc kĩ rồi áp dụng vào các bài tập bên dưới nhé!', html: 'Trên <b>tia số</b>, các số xếp theo thứ tự lớn dần từ trái sang phải.<br>• <b>Số liền trước</b> = số đó <b>trừ 1</b> (ví dụ: liền trước của 60 là 59).<br>• <b>Số liền sau</b> = số đó <b>cộng 1</b> (ví dụ: liền sau của 60 là 61).' },
      { type: 'sequence', title: '✏️ Điền số còn thiếu trên tia số', sub: 'Đếm thêm 1 đơn vị mỗi bước rồi điền vào ô trống nhé!', hint: '💡 Ô đỏ là chưa đúng. Hãy đếm thêm 1 từ số bên trái.', rows: [ { label: 'a) Tia số từ 0 đến 5:', slots: [0, 1, { blank: 2 }, 3, { blank: 4 }, 5] }, { label: 'b) Tia số từ 10 đến 15:', slots: [10, { blank: 11 }, 12, { blank: 13 }, 14, 15] }, { label: 'c) Số liền trước & liền sau của <b>60</b>:', slots: [{ blank: 59 }, 60, { blank: 61 }] } ] },
      { type: 'mcq', title: '🚂 Toa tàu thứ tự & hàng xóm', sub: 'Chọn đáp án đúng cho mỗi câu nhé!', questions: [ { q: 'Câu 1: Toa liền sau toa số <b>50</b> là toa nào?', img: '🚂 ... 49 · 50 · ?', options: [49, 51, 60, 52], correct: 51, ok: 'Số liền sau của 50 là 51 (50 + 1).' }, { q: 'Câu 2: Số liền trước của <b>16</b> là số nào?', img: '? · 16 · 17', options: [14, 15, 17, 18], correct: 15, ok: 'Số liền trước của 16 là 15 (16 − 1).' }, { q: 'Câu 3: Toa nằm <b>giữa</b> toa 49 và toa 51 là toa nào?', img: '49 · ? · 51', options: [48, 50, 52, 49], correct: 50, ok: 'Giữa 49 và 51 là số 50.' } ] },
      { type: 'read-cards', title: '🎈 Bong bóng biểu thức trên tia số', sub: 'Mỗi quả bóng mang một biểu thức, kết quả là vạch số trên tia số. Bấm 🔊 Nghe nhé!', cards: [ { num: 11, sum: '10 + 1 = 11', say: 'mười một' }, { num: 12, sum: '10 + 2 = 12', say: 'mười hai' }, { num: 15, sum: '10 + 5 = 15', say: 'mười lăm' }, { num: 17, sum: '10 + 7 = 17', say: 'mười bảy' } ] }
    ],
    ai: { chips: [ { q: 'Số liền trước tìm thế nào?', a: 'Em lấy số đó trừ đi 1 là ra số liền trước. Ví dụ liền trước của 80 là 79 nhé! ⬅️' }, { q: 'Vì sao bên phải lớn hơn?', a: 'Trên tia số, càng đi sang phải thì số càng lớn, càng sang trái thì số càng bé. Như 12 đứng bên phải 11 nên 12 lớn hơn! 📏' }, { q: '10 + 7 trên tia số là vạch nào?', a: '10 cộng 7 bằng 17, nên quả bóng 10 + 7 sẽ đậu ở vạch số 17 đó em! 🎈' } ], fallback: 'Em hãy tưởng tượng các số xếp thành một hàng trên tia số: liền trước thì lùi 1 bước, liền sau thì tiến 1 bước nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số liền sau của 50 là số nào?', img: '50 · ?', options: [{ l: 'A', v: 49 }, { l: 'B', v: 51 }, { l: 'C', v: 52 }, { l: 'D', v: 60 }], correct: 51, hint: 'Số liền sau cộng thêm 1 đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số liền trước của 80 là số nào?', correct: 79, hint: 'Lấy 80 trừ 1.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số liền sau của 99 là 100. Đúng hay sai?', correct: true, hint: '99 cộng 1 bằng bao nhiêu?' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '10 + 7 = ?', img: '🎈 10 + 7', options: [{ l: 'A', v: 17 }, { l: 'B', v: 70 }, { l: 'C', v: 16 }, { l: 'D', v: 18 }], correct: 17, hint: 'Mười thêm bảy.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 10, 11, 12, __, 14', correct: 13, hint: 'Đếm thêm 1 sau 12.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào bé hơn 30?', img: '28   31   35   40', options: [{ l: 'A', v: 28 }, { l: 'B', v: 31 }, { l: 'C', v: 35 }, { l: 'D', v: 40 }], correct: 28, hint: 'So sánh hàng chục trước.' }
    ]
  },

  'lop2-bai-3': {
    grade: 2, no: 3, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Các thành phần của phép cộng, phép trừ',
    desc: 'Gọi tên số hạng, tổng, số bị trừ, số trừ và hiệu.',
    icon: '🧮',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung (các số đến 100)',
    banner: 'Mỗi phép tính đều có tên gọi cho từng số. Cùng học tên các <b>thành phần</b> của phép cộng và phép trừ nhé!',
    steps: ['Tên gọi', 'Nhận diện', 'Tính thành phần'],
    blocks: [
      { type: 'info', title: '💡 Tên gọi các thành phần', sub: 'Ghi nhớ thật kĩ nhé!', html: 'Phép cộng: <b>Số hạng + Số hạng = Tổng</b>.<br>Ví dụ: 6 + 3 = 9 → 6 và 3 là <b>số hạng</b>, 9 là <b>tổng</b>.<br><br>Phép trừ: <b>Số bị trừ − Số trừ = Hiệu</b>.<br>Ví dụ: 12 − 2 = 10 → 12 là <b>số bị trừ</b>, 2 là <b>số trừ</b>, 10 là <b>hiệu</b>.' },
      { type: 'read-cards', title: '📖 Đọc phép tính và tên gọi', sub: 'Bấm 🔊 Nghe để luyện đọc nhé!', cards: [ { num: 9, sum: '6 + 3 = 9', word: '6 và 3 là số hạng, 9 là tổng', say: 'sáu cộng ba bằng chín' }, { num: 10, sum: '12 − 2 = 10', word: '12 là số bị trừ, 2 là số trừ, 10 là hiệu', say: 'mười hai trừ hai bằng mười' }, { num: 8, sum: '5 + 3 = 8', word: '5 và 3 là số hạng, 8 là tổng', say: 'năm cộng ba bằng tám' } ] },
      { type: 'mcq', title: '🐟 Tìm thành phần còn thiếu', sub: 'Đọc kĩ yêu cầu rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Số hạng thứ nhất là 6, số hạng thứ hai là 3. <b>Tổng</b> là bao nhiêu?', img: '6 + 3 = ?', options: [9, 3, 18, 63], correct: 9, ok: 'Tổng = 6 + 3 = 9.' }, { q: 'Câu 2: Số bị trừ là 15, số trừ là 3. <b>Hiệu</b> là bao nhiêu?', img: '15 − 3 = ?', options: [12, 18, 5, 3], correct: 12, ok: 'Hiệu = 15 − 3 = 12.' }, { q: 'Câu 3: Tìm số hạng còn thiếu: __ + 4 = 10', img: '? + 4 = 10', options: [6, 14, 4, 40], correct: 6, ok: '6 + 4 = 10, nên số hạng còn thiếu là 6.' } ] }
    ],
    ai: { chips: [ { q: 'Số hạng là gì?', a: 'Số hạng là các số được đem cộng với nhau. Trong 6 + 3 = 9 thì 6 và 3 là số hạng, còn 9 là tổng nhé! 🧮' }, { q: 'Hiệu là gì?', a: 'Hiệu là kết quả của phép trừ. Trong 12 − 2 = 10 thì 10 là hiệu, 12 là số bị trừ, 2 là số trừ! ➖' }, { q: 'Số bị trừ và số trừ khác nhau sao?', a: 'Số bị trừ đứng trước (số lớn ban đầu), số trừ đứng sau (số bớt đi). Ví dụ 15 − 3: 15 là số bị trừ, 3 là số trừ. ✏️' } ], fallback: 'Em nhớ: cộng thì có Số hạng và Tổng; trừ thì có Số bị trừ, Số trừ và Hiệu nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Tổng của 6 và 3 là bao nhiêu?', img: '6 ➕ 3', options: [{ l: 'A', v: 9 }, { l: 'B', v: 3 }, { l: 'C', v: 63 }, { l: 'D', v: 18 }], correct: 9, hint: 'Cộng hai số hạng lại.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hiệu của 15 và 3 là bao nhiêu? (15 − 3)', correct: 12, hint: 'Lấy số bị trừ trừ số trừ.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Trong phép tính 12 − 2 = 10, số 12 gọi là số bị trừ. Đúng hay sai?', correct: true, hint: 'Số bị trừ đứng trước dấu trừ.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Tìm số hạng còn thiếu: __ + 4 = 10', img: '? + 4 = 10', options: [{ l: 'A', v: 6 }, { l: 'B', v: 14 }, { l: 'C', v: 4 }, { l: 'D', v: 40 }], correct: 6, hint: '10 bớt 4 còn mấy?' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số bị trừ − 5 = 4. Số bị trừ là số nào?', correct: 9, hint: 'Lấy hiệu cộng số trừ: 4 + 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Tổng của hai số hạng 20 và 30 là?', img: '20 ➕ 30', options: [{ l: 'A', v: 50 }, { l: 'B', v: 10 }, { l: 'C', v: 23 }, { l: 'D', v: 60 }], correct: 50, hint: '2 chục cộng 3 chục.' }
    ]
  },

  'lop2-bai-4': {
    grade: 2, no: 4, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Hơn, kém nhau bao nhiêu',
    desc: 'Tìm phần hơn, phần kém giữa hai số bằng phép trừ.',
    icon: '⚖️',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung (các số đến 100)',
    banner: 'Muốn biết hai số <b>hơn, kém nhau bao nhiêu</b>, em lấy <b>số lớn trừ số bé</b> nhé!',
    steps: ['Quy tắc', 'Tình huống', 'Phép trừ'],
    blocks: [
      { type: 'info', title: '💡 Cách tìm phần hơn, phần kém', sub: 'Đọc kĩ nhé!', html: 'Để biết số này <b>hơn</b> (hoặc <b>kém</b>) số kia bao nhiêu, em lấy <b>số lớn − số bé</b>.<br>Ví dụ: có 10 con gà và 7 con vịt → gà hơn vịt: 10 − 7 = 3 (con).<br>Cũng nói: vịt <b>kém</b> gà 3 con.' },
      { type: 'mcq', title: '🐔 Tìm phần hơn, phần kém', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Có 10 con gà và 7 con vịt. Số gà <b>hơn</b> số vịt bao nhiêu con?', img: '🐔×10 &nbsp; 🦆×7', options: [3, 17, 2, 4], correct: 3, ok: '10 − 7 = 3 con.' }, { q: 'Câu 2: Mai 7 tuổi, bố 38 tuổi. Bố <b>hơn</b> Mai bao nhiêu tuổi?', img: '👧 7 · 👨 38', options: [31, 45, 30, 21], correct: 31, ok: '38 − 7 = 31 tuổi.' }, { q: 'Câu 3: Băng giấy đỏ dài 12 cm, băng vàng dài 8 cm. Băng đỏ <b>dài hơn</b> băng vàng mấy cm?', img: '🟥 12 cm · 🟨 8 cm', options: [4, 20, 5, 3], correct: 4, ok: '12 − 8 = 4 cm.' } ] },
      { type: 'read-cards', title: '➖ Phép trừ tìm phần chênh lệch', sub: 'Bấm 🔊 Nghe để luyện đọc nhé!', cards: [ { num: 3, sum: '10 − 7 = 3', word: 'gà hơn vịt 3 con', say: 'mười trừ bảy bằng ba' }, { num: 5, sum: '59 − 54 = 5', word: 'Robot A cao hơn Robot B 5 cm', say: 'năm mươi chín trừ năm mươi tư bằng năm' }, { num: 4, sum: '10 − 6 = 4', word: 'Mai gấp nhiều hơn Nam 4 thuyền', say: 'mười trừ sáu bằng bốn' } ] }
    ],
    ai: { chips: [ { q: 'Hơn kém nhau bao nhiêu tính sao?', a: 'Em lấy số lớn trừ đi số bé là ra phần hơn kém nhé! Ví dụ 10 và 7: 10 − 7 = 3. ⚖️' }, { q: '"Hơn" và "kém" khác nhau không?', a: 'Cùng một phép trừ thôi em! Gà hơn vịt 3 con thì cũng có nghĩa vịt kém gà 3 con. 🐔🦆' }, { q: 'Bố hơn Mai bao nhiêu tuổi?', a: 'Bố 38 tuổi, Mai 7 tuổi, lấy 38 − 7 = 31. Vậy bố hơn Mai 31 tuổi! 👨👧' } ], fallback: 'Gặp bài hơn kém, em cứ lấy số lớn trừ số bé là tìm được phần chênh lệch nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có 8 quả táo và 5 quả cam. Táo hơn cam mấy quả?', img: '🍎×8 · 🍊×5', options: [{ l: 'A', v: 3 }, { l: 'B', v: 13 }, { l: 'C', v: 2 }, { l: 'D', v: 4 }], correct: 3, hint: 'Lấy 8 trừ 5.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Robot A cao 59 cm, Robot B cao 54 cm. Robot A cao hơn Robot B __ cm.', correct: 5, hint: 'Lấy 59 trừ 54.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số gà hơn số vịt 3 con thì số vịt kém số gà 3 con. Đúng hay sai?', correct: true, hint: 'Hơn và kém cùng một phép trừ.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Lan có 20 nhãn vở, Hà có 12 nhãn vở. Lan nhiều hơn Hà mấy nhãn?', img: '20  ·  12', options: [{ l: 'A', v: 8 }, { l: 'B', v: 32 }, { l: 'C', v: 7 }, { l: 'D', v: 9 }], correct: 8, hint: 'Lấy 20 trừ 12.' },
      { type: 'fill_blank', label: 'Điền số', q: '9 − 6 = ?', correct: 3, hint: 'Đếm lùi từ 9 sáu bước.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mai gấp 10 thuyền, Nam gấp 6 thuyền. Nam kém Mai mấy thuyền?', img: '⛵ 10 · 6', options: [{ l: 'A', v: 4 }, { l: 'B', v: 16 }, { l: 'C', v: 3 }, { l: 'D', v: 5 }], correct: 4, hint: 'Lấy 10 trừ 6.' }
    ]
  },

  'lop2-bai-5': {
    grade: 2, no: 5, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100',
    desc: 'Cộng, trừ không nhớ các số trong phạm vi 100 và tính nhẩm tròn chục.',
    icon: '➕',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung (các số đến 100)',
    banner: 'Cùng ôn lại cách <b>cộng, trừ không nhớ</b> và tính nhẩm với các số <b>tròn chục</b> nhé!',
    steps: ['Tròn chục', 'Đặt tính', 'Đếm thêm'],
    blocks: [
      { type: 'read-cards', title: '🔟 Tính nhẩm tròn chục', sub: 'Cộng, trừ các số tròn chục thật nhanh. Bấm 🔊 Nghe nhé!', cards: [ { num: 100, sum: '60 + 40 = 100', word: '6 chục + 4 chục = 10 chục', say: 'một trăm' }, { num: 80, sum: '100 − 20 = 80', say: 'tám mươi' }, { num: 50, sum: '100 − 50 = 50', say: 'năm mươi' }, { num: 90, sum: '50 + 40 = 90', say: 'chín mươi' } ] },
      { type: 'sequence', title: '✏️ Đếm thêm theo quy luật', sub: 'Điền số còn thiếu cho đúng quy luật rồi bấm Kiểm tra nhé!', hint: '💡 Ô đỏ chưa đúng. Hãy đếm thêm đúng số mỗi bước.', rows: [ { label: 'a) Đếm thêm 10:', slots: [20, 30, { blank: 40 }, 50, { blank: 60 }, 70] }, { label: 'b) Đếm thêm 5:', slots: [50, 55, { blank: 60 }, 65, { blank: 70 }, 75] } ] },
      { type: 'mcq', title: '🏖️ Đặt tính & phân loại kết quả', sub: 'Chọn đáp án đúng cho mỗi câu nhé!', questions: [ { q: 'Câu 1: 42 + 35 = ?', img: '42 ➕ 35', options: [77, 7, 87, 12], correct: 77, ok: '2 + 5 = 7 (đơn vị); 4 + 3 = 7 (chục) → 77.' }, { q: 'Câu 2: 96 − 62 = ?', img: '96 ➖ 62', options: [34, 158, 44, 30], correct: 34, ok: '6 − 2 = 4 (đơn vị); 9 − 6 = 3 (chục) → 34.' }, { q: 'Câu 3: Phép tính nào có kết quả <b>lớn hơn 50</b>?', img: '32 + 20 &nbsp; 70 − 30', options: [{ val: 52, label: '32 + 20 = 52' }, { val: 40, label: '70 − 30 = 40' }], correct: 52, ok: '32 + 20 = 52, lớn hơn 50.' } ] }
    ],
    ai: { chips: [ { q: '60 + 40 sao bằng 100?', a: '6 chục cộng 4 chục bằng 10 chục, mà 10 chục chính là 100 đó em! 🔟' }, { q: 'Cộng không nhớ là gì?', a: 'Là khi cộng từng hàng mà tổng mỗi hàng không quá 9, không phải nhớ sang hàng bên. Ví dụ 42 + 35 = 77 nhé! ➕' }, { q: '96 − 62 tính thế nào?', a: 'Em trừ hàng đơn vị: 6 − 2 = 4; rồi hàng chục: 9 − 6 = 3. Ghép lại được 34! ✏️' } ], fallback: 'Khi đặt tính, em nhớ viết thẳng cột: đơn vị dưới đơn vị, chục dưới chục, rồi tính từ phải sang trái nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '42 + 35 = ?', img: '42 ➕ 35', options: [{ l: 'A', v: 77 }, { l: 'B', v: 7 }, { l: 'C', v: 87 }, { l: 'D', v: 17 }], correct: 77, hint: 'Cộng hàng đơn vị rồi hàng chục.' },
      { type: 'fill_blank', label: 'Điền số', q: '96 − 62 = ?', correct: 34, hint: 'Trừ hàng đơn vị trước.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '40 + 20 bằng 20 + 40. Đúng hay sai?', correct: true, hint: 'Đổi chỗ hai số hạng, tổng không đổi.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '100 − 50 = ?', img: '100 ➖ 50', options: [{ l: 'A', v: 50 }, { l: 'B', v: 150 }, { l: 'C', v: 5 }, { l: 'D', v: 55 }], correct: 50, hint: '10 chục bớt 5 chục.' },
      { type: 'fill_blank', label: 'Điền số', q: '35 + 4 = ?', correct: 39, hint: 'Cộng vào hàng đơn vị: 5 + 4.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '70 − 30 = ?', img: '70 ➖ 30', options: [{ l: 'A', v: 40 }, { l: 'B', v: 100 }, { l: 'C', v: 30 }, { l: 'D', v: 400 }], correct: 40, hint: '7 chục bớt 3 chục.' }
    ]
  },

  'lop2-bai-6': {
    grade: 2, no: 6, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Luyện tập chung',
    desc: 'Ôn tập cấu tạo số, tia số, so sánh và tính toán trong phạm vi 100.',
    icon: '🎯',
    topic: '🔢 Chủ đề 1: Ôn tập và bổ sung (các số đến 100)',
    banner: 'Cùng <b>luyện tập chung</b> tất cả những gì đã học về số và phép tính đến 100 nhé!',
    steps: ['Viết thành tổng', 'Tia số', 'So sánh & tính'],
    blocks: [
      { type: 'read-cards', title: '📖 Viết số thành tổng', sub: 'Phân tích mỗi số thành số chục cộng số đơn vị. Bấm 🔊 Nghe nhé!', cards: [ { num: 27, sum: '27 = 20 + 7', say: 'hai mươi bảy' }, { num: 56, sum: '56 = 50 + 6', say: 'năm mươi sáu' }, { num: 95, sum: '95 = 90 + 5', say: 'chín mươi lăm' }, { num: 84, sum: '84 = 80 + 4', say: 'tám mươi tư' } ] },
      { type: 'sequence', title: '✏️ Tia số khuyết & hàng xóm', sub: 'Điền số còn thiếu cho đúng thứ tự nhé!', hint: '💡 Ô đỏ chưa đúng. Đếm thêm 1 đơn vị mỗi bước.', rows: [ { label: 'a) Dãy số 15 đến 20:', slots: [15, 16, { blank: 17 }, 18, { blank: 19 }, 20] }, { label: 'b) Dãy số 40 đến 45:', slots: [40, { blank: 41 }, 42, 43, { blank: 44 }, 45] }, { label: 'c) Số liền trước & liền sau của <b>59</b>:', slots: [{ blank: 58 }, 59, { blank: 60 }] } ] },
      { type: 'mcq', title: '🏎️ So sánh & tính toán', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Các xe đua mang số 24, 37, 45, 42, 48. Tính tổng số <b>lớn nhất</b> và số <b>bé nhất</b>.', img: '🏎️ 24 · 37 · 45 · 42 · 48', options: [72, 24, 12, 84], correct: 72, ok: 'Lớn nhất 48, bé nhất 24 → 48 + 24 = 72.' }, { q: 'Câu 2: 34 + 5 = ?', img: '34 ➕ 5', options: [39, 41, 38, 30], correct: 39, ok: '4 + 5 = 9 (đơn vị), giữ nguyên 3 chục → 39.' }, { q: 'Câu 3: Lớp 2A trồng 29 cây, lớp 2B trồng 25 cây. 2A trồng <b>nhiều hơn</b> 2B mấy cây?', img: '2A: 29 · 2B: 25', options: [4, 54, 3, 5], correct: 4, ok: '29 − 25 = 4 cây.' } ] }
    ],
    ai: { chips: [ { q: 'Số bé nhất có hai chữ số là số nào?', a: 'Là số 10 đó em! Vì số có hai chữ số nhỏ nhất phải bắt đầu từ 1 chục. 🔢' }, { q: 'Số lớn nhất có hai chữ số?', a: 'Là số 99 nhé! Cả hàng chục và hàng đơn vị đều là 9. ✨' }, { q: 'Tìm số lớn nhất trong dãy thế nào?', a: 'Em so sánh hàng chục trước, số nào nhiều chục hơn thì lớn hơn. Bằng nhau thì so hàng đơn vị. Như 48 lớn hơn 45! 🏎️' } ], fallback: 'Luyện tập chung gồm nhiều dạng: viết thành tổng, tia số, so sánh và tính toán. Em làm từ từ từng câu nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '32 + 6 = ?', img: '32 ➕ 6', options: [{ l: 'A', v: 38 }, { l: 'B', v: 92 }, { l: 'C', v: 26 }, { l: 'D', v: 35 }], correct: 38, hint: 'Cộng vào hàng đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: '47 − 22 = ?', correct: 25, hint: 'Trừ hàng đơn vị rồi hàng chục.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '45 lớn hơn 42. Đúng hay sai?', correct: true, hint: 'Cùng 4 chục, so hàng đơn vị.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số bé nhất có hai chữ số là số nào?', img: '?', options: [{ l: 'A', v: 10 }, { l: 'B', v: 11 }, { l: 'C', v: 1 }, { l: 'D', v: 99 }], correct: 10, hint: 'Bắt đầu từ 1 chục, 0 đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Số lớn nhất có hai chữ số là số nào?', correct: 99, hint: 'Cả hai chữ số đều là 9.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '48 + 24 = ?', img: '48 ➕ 24', options: [{ l: 'A', v: 72 }, { l: 'B', v: 24 }, { l: 'C', v: 62 }, { l: 'D', v: 84 }], correct: 72, hint: '8 + 4 = 12, nhớ 1 sang hàng chục.' }
    ]
  },

  'lop2-bai-7': {
    grade: 2, no: 7, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Phép cộng (qua 10) trong phạm vi 20',
    desc: 'Cộng qua 10 bằng cách làm tròn 10 rồi cộng tiếp.',
    icon: '➕',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: 'Mẹo cộng <b>qua 10</b>: tách một số để <b>làm tròn 10</b> trước, rồi cộng phần còn lại nhé!',
    steps: ['Làm tròn 10', 'Tính nhẩm', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Mẹo "Làm cho tròn 10"', sub: 'Đọc kĩ ví dụ nhé!', html: 'Khi cộng qua 10, em tách một số để <b>làm tròn 10</b> trước.<br>Ví dụ: 9 + 5 → tách 5 = 1 + 4.<br>9 + <b>1</b> = 10, rồi 10 + <b>4</b> = <b>14</b>. Vậy 9 + 5 = 14!' },
      { type: 'read-cards', title: '📖 Cộng qua 10 từng bước', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 14, sum: '9 + 5 = 14', word: '9 + 1 = 10, rồi 10 + 4 = 14', say: 'mười bốn' }, { num: 13, sum: '8 + 5 = 13', word: '8 + 2 = 10, rồi 10 + 3 = 13', say: 'mười ba' }, { num: 15, sum: '9 + 6 = 15', word: '9 + 1 = 10, rồi 10 + 5 = 15', say: 'mười lăm' }, { num: 13, sum: '7 + 6 = 13', word: '7 + 3 = 10, rồi 10 + 3 = 13', say: 'mười ba' } ] },
      { type: 'mcq', title: '🐱 Tính nhẩm nhanh', sub: 'Chọn kết quả đúng cho mỗi phép tính nhé!', questions: [ { q: 'Câu 1: 9 + 4 = ?', img: '9 ➕ 4', options: [13, 12, 14, 11], correct: 13, ok: '9 + 1 = 10, rồi 10 + 3 = 13.' }, { q: 'Câu 2: 8 + 6 = ?', img: '8 ➕ 6', options: [14, 13, 15, 12], correct: 14, ok: '8 + 2 = 10, rồi 10 + 4 = 14.' }, { q: 'Câu 3: 9 + 5 + 3 = ?', img: '9 ➕ 5 ➕ 3', options: [17, 16, 18, 15], correct: 17, ok: '9 + 5 = 14, rồi 14 + 3 = 17.' } ] }
    ],
    ai: { chips: [ { q: 'Cộng qua 10 là sao?', a: 'Là phép cộng có kết quả lớn hơn 10 em ạ. Em làm tròn 10 trước cho dễ: 9 + 5 = 9 + 1 + 4 = 10 + 4 = 14! ➕' }, { q: '8 + 6 nhẩm thế nào?', a: 'Em tách 6 = 2 + 4. 8 + 2 = 10, rồi 10 + 4 = 14. Vậy 8 + 6 = 14 nhé! 🐱' }, { q: 'Vì sao phải làm tròn 10?', a: 'Vì cộng với 10 rất dễ, chỉ cần thêm số lẻ vào sau số 1. Làm tròn 10 giúp em tính nhanh hơn! ✨' } ], fallback: 'Gặp phép cộng qua 10, em hãy tách một số để được tròn 10 trước, rồi cộng phần còn lại nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '9 + 5 = ?', img: '9 ➕ 5', options: [{ l: 'A', v: 14 }, { l: 'B', v: 13 }, { l: 'C', v: 15 }, { l: 'D', v: 12 }], correct: 14, hint: '9 + 1 = 10, rồi cộng phần còn lại.' },
      { type: 'fill_blank', label: 'Điền số', q: '8 + 5 = ?', correct: 13, hint: 'Làm tròn 10 từ số 8.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '9 + 4 = 13. Đúng hay sai?', correct: true, hint: '9 + 1 = 10, rồi 10 + 3.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '7 + 6 = ?', img: '7 ➕ 6', options: [{ l: 'A', v: 13 }, { l: 'B', v: 14 }, { l: 'C', v: 12 }, { l: 'D', v: 11 }], correct: 13, hint: '7 + 3 = 10, rồi cộng 3.' },
      { type: 'fill_blank', label: 'Điền số', q: '9 + 1 + 4 = ?', correct: 14, hint: 'Tính từ trái sang phải.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '6 + 8 = ?', img: '6 ➕ 8', options: [{ l: 'A', v: 14 }, { l: 'B', v: 12 }, { l: 'C', v: 15 }, { l: 'D', v: 13 }], correct: 14, hint: '6 + 4 = 10, rồi cộng 4.' }
    ]
  },

  'lop2-bai-8': {
    grade: 2, no: 8, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Bảng cộng (qua 10)',
    desc: 'Học thuộc và vận dụng bảng cộng qua 10 trong phạm vi 20.',
    icon: '🔢',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: 'Cùng học thuộc <b>bảng cộng qua 10</b> để tính nhẩm thật nhanh nhé!',
    steps: ['Đổi chỗ số hạng', 'Bảng cộng', 'Tính nhẩm'],
    blocks: [
      { type: 'info', title: '💡 Mẹo nhỏ', sub: 'Ghi nhớ để nhẩm nhanh nhé!', html: '<b>Đổi chỗ hai số hạng, tổng không đổi:</b> 9 + 3 = 3 + 9 = 12.<br>Nhờ vậy em chỉ cần nhớ một nửa bảng cộng thôi!<br>Mẹo làm tròn 10: 8 + 9 → 8 + 2 + 7 = 10 + 7 = 17.' },
      { type: 'read-cards', title: '📖 Bảng cộng qua 10', sub: 'Đọc và ghi nhớ các kết quả. Bấm 🔊 Nghe nhé!', cards: [ { num: 17, sum: '8 + 9 = 17', say: 'mười bảy' }, { num: 12, sum: '9 + 3 = 12', say: 'mười hai' }, { num: 13, sum: '7 + 6 = 13', say: 'mười ba' }, { num: 15, sum: '8 + 7 = 15', say: 'mười lăm' } ] },
      { type: 'mcq', title: '🐻 Tìm tổ cho gấu & cá cho mèo', sub: 'Tính nhẩm rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 8 + 9 = ?', img: '🐻 8 ➕ 9', options: [17, 16, 18, 15], correct: 17, ok: '8 + 2 = 10, rồi 10 + 7 = 17.' }, { q: 'Câu 2: 6 + 8 = ?', img: '🐱 6 ➕ 8', options: [14, 13, 15, 12], correct: 14, ok: '6 + 4 = 10, rồi 10 + 4 = 14.' }, { q: 'Câu 3: 8 + 6 = 14, rồi 14 − 4 = ?', img: '8 ➕ 6 ➖ 4', options: [10, 18, 9, 11], correct: 10, ok: '14 − 4 = 10.' }, { q: 'Câu 4: 5 + 9 = ?', img: '5 ➕ 9', options: [14, 13, 15, 12], correct: 14, ok: '9 + 1 = 10, rồi 10 + 4 = 14.' } ] }
    ],
    ai: { chips: [ { q: 'Vì sao 9 + 3 = 3 + 9?', a: 'Vì khi đổi chỗ hai số hạng thì tổng không đổi em ạ. Cả hai đều bằng 12! 🔢' }, { q: '8 + 9 nhẩm sao cho nhanh?', a: 'Em làm tròn 10: 8 + 2 = 10, còn lại 7 nữa, nên 8 + 9 = 17. Hoặc nhớ luôn từ bảng cộng nhé! 🐻' }, { q: 'Có cần học thuộc bảng cộng không?', a: 'Nên thuộc em ạ! Thuộc bảng cộng giúp em tính nhẩm nhanh, làm bài đỡ mất thời gian. Cố lên nhé! ✨' } ], fallback: 'Em ôn bảng cộng qua 10 mỗi ngày một chút, vài hôm là thuộc làu thôi! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '8 + 9 = ?', img: '8 ➕ 9', options: [{ l: 'A', v: 17 }, { l: 'B', v: 16 }, { l: 'C', v: 18 }, { l: 'D', v: 15 }], correct: 17, hint: 'Làm tròn 10 từ số 8.' },
      { type: 'fill_blank', label: 'Điền số', q: '6 + 8 = ?', correct: 14, hint: '6 + 4 = 10, rồi cộng 4.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '9 + 3 bằng 3 + 9. Đúng hay sai?', correct: true, hint: 'Đổi chỗ số hạng, tổng không đổi.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '7 + 7 = ?', img: '7 ➕ 7', options: [{ l: 'A', v: 14 }, { l: 'B', v: 13 }, { l: 'C', v: 15 }, { l: 'D', v: 12 }], correct: 14, hint: '7 + 3 = 10, rồi cộng 4.' },
      { type: 'fill_blank', label: 'Điền số', q: '7 + 8 = ?', correct: 15, hint: '7 + 3 = 10, rồi cộng 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Cabin một có 7 người, cabin hai có 8 người. Cả hai cabin có bao nhiêu người?', img: '🚠 7 + 8', options: [{ l: 'A', v: 15 }, { l: 'B', v: 14 }, { l: 'C', v: 16 }, { l: 'D', v: 13 }], correct: 15, hint: '7 + 8 = ?' }
    ]
  },

  'lop2-bai-9': {
    grade: 2, no: 9, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Bài toán về thêm, bớt một số đơn vị',
    desc: 'Nhận biết "thêm" làm tính cộng, "bớt" làm tính trừ và giải bài toán có lời văn.',
    icon: '📝',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: '<b>Thêm</b> thì làm tính <b>cộng</b>, <b>bớt</b> (bán, bay đi, xuống xe...) thì làm tính <b>trừ</b> nhé!',
    steps: ['Từ khóa', 'Tình huống', 'Phép tính'],
    blocks: [
      { type: 'info', title: '💡 Nhận biết "thêm" và "bớt"', sub: 'Đọc kĩ các từ khóa nhé!', html: 'Các từ <b>thêm, thêm vào, có tất cả</b> → làm tính <b>cộng</b>.<br>Các từ <b>bớt, bán, bay đi, xuống xe, còn lại</b> → làm tính <b>trừ</b>.<br>Ví dụ: có 8 quả trứng, thêm 2 quả → 8 + 2 = 10 quả.' },
      { type: 'mcq', title: '🥚 Tình huống thêm, bớt', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Khay có 8 quả trứng, <b>thêm</b> 2 quả nữa. Có tất cả mấy quả?', img: '🥚×8 ➕ 🥚×2', options: [10, 6, 12, 9], correct: 10, ok: 'Thêm thì cộng: 8 + 2 = 10 quả.' }, { q: 'Câu 2: Cành có 10 con chim, 3 con <b>bay đi</b>. Còn lại mấy con?', img: '🐦×10 → bay 3', options: [7, 13, 6, 8], correct: 7, ok: 'Bay đi thì trừ: 10 − 3 = 7 con.' }, { q: 'Câu 3: Lọ có 9 bông hoa, cắm <b>thêm</b> 6 bông. Có tất cả mấy bông?', img: '🌼×9 ➕ 🌼×6', options: [15, 3, 16, 14], correct: 15, ok: 'Thêm thì cộng: 9 + 6 = 15 bông.' } ] },
      { type: 'read-cards', title: '🔢 Phép tính của bài toán', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 15, sum: '9 + 6 = 15', word: 'thêm thì làm tính cộng', say: 'mười lăm' }, { num: 10, sum: '15 − 5 = 10', word: 'bán đi thì làm tính trừ', say: 'mười' }, { num: 11, sum: '14 − 3 = 11', word: '3 bạn xuống xe thì trừ', say: 'mười một' } ] }
    ],
    ai: { chips: [ { q: 'Khi nào làm tính cộng?', a: 'Khi đề có từ "thêm", "thêm vào", "có tất cả" thì em làm tính cộng nhé! Ví dụ thêm 2 quả thì cộng 2. ➕' }, { q: 'Khi nào làm tính trừ?', a: 'Khi đề có từ "bớt", "bán", "bay đi", "xuống xe", "còn lại" thì làm tính trừ em ạ! ➖' }, { q: '15 con lợn bán 5 con còn mấy?', a: 'Bán đi thì trừ: 15 − 5 = 10. Vậy còn lại 10 con lợn nhé! 🐷' } ], fallback: 'Em đọc kĩ đề, tìm từ khóa "thêm" hay "bớt" để biết làm tính cộng hay trừ nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Khay có 8 quả trứng, thêm 2 quả. Có tất cả mấy quả?', img: '🥚 8 + 2', options: [{ l: 'A', v: 10 }, { l: 'B', v: 6 }, { l: 'C', v: 12 }, { l: 'D', v: 9 }], correct: 10, hint: 'Thêm thì cộng.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Cành có 10 con chim, 3 con bay đi. Còn lại mấy con?', correct: 7, hint: 'Bay đi thì trừ: 10 − 3.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Bài toán "bán đi 5 con" thì làm tính trừ. Đúng hay sai?', correct: true, hint: 'Bán đi là bớt đi.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có 9 chiếc thuyền, 4 chiếc đi ra thêm. Có tất cả mấy chiếc?', img: '⛵ 9 + 4', options: [{ l: 'A', v: 13 }, { l: 'B', v: 5 }, { l: 'C', v: 14 }, { l: 'D', v: 12 }], correct: 13, hint: 'Thêm thì cộng: 9 + 4.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Chuồng có 15 con lợn, bán 5 con. Còn lại mấy con?', correct: 10, hint: 'Bán đi thì trừ: 15 − 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Xe buýt có 14 bạn, 3 bạn xuống xe. Còn lại mấy bạn?', img: '🚌 14 − 3', options: [{ l: 'A', v: 11 }, { l: 'B', v: 17 }, { l: 'C', v: 10 }, { l: 'D', v: 12 }], correct: 11, hint: 'Xuống xe thì trừ.' }
    ]
  },

  'lop2-bai-10': {
    grade: 2, no: 10, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Luyện tập chung',
    desc: 'Ôn tập phép cộng qua 10, chuỗi tính và giải toán trong phạm vi 20.',
    icon: '🎯',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: 'Cùng <b>luyện tập chung</b> các phép cộng qua 10 và giải toán nhé!',
    steps: ['Bảng cộng', 'Tìm nhà', 'Chuỗi tính'],
    blocks: [
      { type: 'read-cards', title: '📖 Tính nhẩm nhanh', sub: 'Ôn lại các phép cộng qua 10. Bấm 🔊 Nghe nhé!', cards: [ { num: 11, sum: '2 + 9 = 11', say: 'mười một' }, { num: 13, sum: '4 + 9 = 13', say: 'mười ba' }, { num: 12, sum: '5 + 7 = 12', say: 'mười hai' }, { num: 14, sum: '9 + 5 = 14', say: 'mười bốn' } ] },
      { type: 'mcq', title: '🔌 Nối quạt với ổ cắm & toa tàu', sub: 'Tính nhẩm rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 9 + 5 = ?', img: '🌀 9 ➕ 5', options: [14, 13, 15, 12], correct: 14, ok: '9 + 1 = 10, rồi 10 + 4 = 14.' }, { q: 'Câu 2: 7 + 5 = ?', img: '🌀 7 ➕ 5', options: [12, 11, 13, 10], correct: 12, ok: '7 + 3 = 10, rồi 10 + 2 = 12.' }, { q: 'Câu 3: Toa tàu nào có kết quả <b>lớn nhất</b>?', img: '8+6 · 7+6 · 9+3 · 6+9', options: [14, 13, 12, 15], correct: 15, ok: '6 + 9 = 15 là lớn nhất.' } ] },
      { type: 'mcq', title: '🦆 Chuỗi tính & giải toán', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 8 + 5 = 13, rồi 13 − 3 = ?', img: '8 ➕ 5 ➖ 3', options: [10, 16, 11, 9], correct: 10, ok: '13 − 3 = 10.' }, { q: 'Câu 2: Sân có 6 bạn, thêm 3 bạn chạy đến. Có tất cả mấy bạn?', img: '🏀 6 + 3', options: [9, 3, 8, 10], correct: 9, ok: '6 + 3 = 9 bạn.' }, { q: 'Câu 3: Hồ có 15 con cá sấu, 3 con bò lên bờ. Còn mấy con dưới nước?', img: '🐊 15 − 3', options: [12, 18, 11, 13], correct: 12, ok: '15 − 3 = 12 con.' } ] }
    ],
    ai: { chips: [ { q: 'Chuỗi tính làm thế nào?', a: 'Em tính lần lượt từ trái sang phải nhé! Ví dụ 8 + 5 − 3: tính 8 + 5 = 13 trước, rồi 13 − 3 = 10. ➡️' }, { q: 'Làm sao tìm kết quả lớn nhất?', a: 'Em tính kết quả của từng phép rồi so sánh. Như 6 + 9 = 15 lớn hơn 8 + 6 = 14, nên 6 + 9 lớn nhất! 🚂' }, { q: '6 + 3 bằng mấy?', a: '6 + 3 = 9 đó em! Đây là phép cộng không qua 10 nên tính rất nhanh. 🏀' } ], fallback: 'Luyện tập chung có nhiều dạng, em cứ bình tĩnh tính từng phép một là làm được hết! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '4 + 9 = ?', img: '4 ➕ 9', options: [{ l: 'A', v: 13 }, { l: 'B', v: 12 }, { l: 'C', v: 14 }, { l: 'D', v: 11 }], correct: 13, hint: '9 + 1 = 10, rồi cộng 3.' },
      { type: 'fill_blank', label: 'Điền số', q: '5 + 7 = ?', correct: 12, hint: '7 + 3 = 10, rồi cộng 2.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '6 + 9 = 15. Đúng hay sai?', correct: true, hint: '6 + 4 = 10, rồi cộng 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Phép tính nào có kết quả lớn nhất?', img: '8+6 · 7+6 · 9+3 · 6+9', options: [{ l: 'A', v: 14 }, { l: 'B', v: 13 }, { l: 'C', v: 12 }, { l: 'D', v: 15 }], correct: 15, hint: 'Tính từng phép rồi so sánh.' },
      { type: 'fill_blank', label: 'Điền số', q: '8 + 5 − 3 = ?', correct: 10, hint: 'Tính 8 + 5 trước.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hồ có 15 con cá sấu, 3 con bò lên bờ. Còn mấy con dưới nước?', img: '🐊 15 − 3', options: [{ l: 'A', v: 12 }, { l: 'B', v: 18 }, { l: 'C', v: 11 }, { l: 'D', v: 13 }], correct: 12, hint: 'Bò lên bờ thì trừ.' }
    ]
  },

  'lop2-bai-11': {
    grade: 2, no: 11, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Phép trừ (qua 10) trong phạm vi 20',
    desc: 'Trừ qua 10 bằng cách tách số để về 10 rồi trừ tiếp.',
    icon: '➖',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: 'Mẹo trừ <b>qua 10</b>: tách số bị trừ thành <b>10 và phần lẻ</b>, lấy 10 trừ trước rồi cộng phần lẻ nhé!',
    steps: ['Tách số', 'Tính nhẩm', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '💡 Mẹo "Tách để tròn 10"', sub: 'Đọc kĩ ví dụ nhé!', html: 'Khi trừ qua 10, em tách số bị trừ thành <b>10 và phần lẻ</b>.<br>Ví dụ: 11 − 5 → tách 11 = 10 + 1.<br>Lấy 10 − 5 = 5, rồi 5 + 1 = <b>6</b>. Vậy 11 − 5 = 6!' },
      { type: 'read-cards', title: '📖 Trừ qua 10 từng bước', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 6, sum: '11 − 5 = 6', word: '11 = 10 + 1; 10 − 5 = 5; 5 + 1 = 6', say: 'sáu' }, { num: 8, sum: '13 − 5 = 8', word: '13 = 10 + 3; 10 − 5 = 5; 5 + 3 = 8', say: 'tám' }, { num: 7, sum: '12 − 5 = 7', word: '12 = 10 + 2; 10 − 5 = 5; 5 + 2 = 7', say: 'bảy' } ] },
      { type: 'mcq', title: '🐰 Tìm chuồng cho thỏ', sub: 'Tính nhẩm rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 11 − 8 = ?', img: '🐰 11 ➖ 8', options: [3, 4, 2, 5], correct: 3, ok: '11 = 10 + 1; 10 − 8 = 2; 2 + 1 = 3.' }, { q: 'Câu 2: 12 − 5 = ?', img: '🐰 12 ➖ 5', options: [7, 8, 6, 5], correct: 7, ok: '12 = 10 + 2; 10 − 5 = 5; 5 + 2 = 7.' }, { q: 'Câu 3: Mai có 13 tờ giấy, đã dùng 5 tờ. Còn lại mấy tờ?', img: '📄 13 − 5', options: [8, 18, 7, 9], correct: 8, ok: '13 − 5 = 8 tờ.' } ] }
    ],
    ai: { chips: [ { q: 'Trừ qua 10 là sao?', a: 'Là phép trừ mà số bị trừ lớn hơn 10 em ạ. Em tách thành 10 và phần lẻ: 11 − 5 = (10 − 5) + 1 = 5 + 1 = 6! ➖' }, { q: '13 − 5 nhẩm thế nào?', a: 'Em tách 13 = 10 + 3. Lấy 10 − 5 = 5, rồi 5 + 3 = 8. Vậy 13 − 5 = 8 nhé! ✨' }, { q: 'Có cách nào khác không?', a: 'Có em ạ! Em cũng có thể đếm lùi: 11 − 5 thì đếm lùi 5 bước từ 11: 10, 9, 8, 7, 6. Kết quả là 6! 🔢' } ], fallback: 'Gặp phép trừ qua 10, em hãy tách số bị trừ thành 10 và phần lẻ để tính cho dễ nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '11 − 5 = ?', img: '11 ➖ 5', options: [{ l: 'A', v: 6 }, { l: 'B', v: 5 }, { l: 'C', v: 7 }, { l: 'D', v: 4 }], correct: 6, hint: '10 − 5 = 5, rồi cộng 1.' },
      { type: 'fill_blank', label: 'Điền số', q: '13 − 5 = ?', correct: 8, hint: '10 − 5 = 5, rồi cộng 3.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '11 − 8 = 3. Đúng hay sai?', correct: true, hint: '10 − 8 = 2, rồi cộng 1.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '12 − 4 = ?', img: '12 ➖ 4', options: [{ l: 'A', v: 8 }, { l: 'B', v: 9 }, { l: 'C', v: 7 }, { l: 'D', v: 6 }], correct: 8, hint: '10 − 4 = 6, rồi cộng 2.' },
      { type: 'fill_blank', label: 'Điền số', q: '13 − 6 = ?', correct: 7, hint: '10 − 6 = 4, rồi cộng 3.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mai có 13 tờ giấy, dùng 5 tờ. Còn lại mấy tờ?', img: '📄 13 − 5', options: [{ l: 'A', v: 8 }, { l: 'B', v: 18 }, { l: 'C', v: 7 }, { l: 'D', v: 9 }], correct: 8, hint: 'Đã dùng thì trừ đi.' }
    ]
  },

  'lop2-bai-12': {
    grade: 2, no: 12, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Bảng trừ (qua 10)',
    desc: 'Học thuộc và vận dụng bảng trừ qua 10 trong phạm vi 20.',
    icon: '🔢',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: 'Cùng học thuộc <b>bảng trừ qua 10</b> để tính nhẩm thật nhanh nhé!',
    steps: ['Bảng trừ', 'So sánh', 'Ứng dụng'],
    blocks: [
      { type: 'read-cards', title: '📖 Bảng trừ qua 10', sub: 'Đọc và ghi nhớ các kết quả. Bấm 🔊 Nghe nhé!', cards: [ { num: 8, sum: '13 − 5 = 8', say: 'tám' }, { num: 9, sum: '13 − 4 = 9', say: 'chín' }, { num: 7, sum: '15 − 8 = 7', say: 'bảy' }, { num: 6, sum: '11 − 5 = 6', say: 'sáu' } ] },
      { type: 'mcq', title: '🏮 Đèn ông sao & hòm thư kết quả', sub: 'Tính nhẩm rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Đèn nào có kết quả <b>bé nhất</b>?', img: '13−4 · 15−7 · 12−8 · 11−5', options: [9, 8, 4, 6], correct: 4, ok: '12 − 8 = 4 là bé nhất.' }, { q: 'Câu 2: 16 − 9 = ?', img: '✉️ 16 ➖ 9', options: [7, 8, 6, 5], correct: 7, ok: '16 = 10 + 6; 10 − 9 = 1; 1 + 6 = 7.' }, { q: 'Câu 3: 11 − 4 = ?', img: '✉️ 11 ➖ 4', options: [7, 6, 8, 5], correct: 7, ok: '11 = 10 + 1; 10 − 4 = 6; 6 + 1 = 7.' } ] },
      { type: 'mcq', title: '🏀 So sánh & đội bóng nhí', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 14 − 6 = ?', img: '14 ➖ 6', options: [8, 7, 9, 6], correct: 8, ok: '14 = 10 + 4; 10 − 6 = 4; 4 + 4 = 8.' }, { q: 'Câu 2: Có 12 bạn và 9 quả bóng, mỗi bạn lấy 1 quả. Mấy bạn <b>không có</b> bóng?', img: '🧒×12 · 🏀×9', options: [3, 21, 2, 4], correct: 3, ok: '12 − 9 = 3 bạn.' } ] }
    ],
    ai: { chips: [ { q: '16 − 9 nhẩm thế nào?', a: 'Em tách 16 = 10 + 6. Lấy 10 − 9 = 1, rồi 1 + 6 = 7. Vậy 16 − 9 = 7 nhé! ➖' }, { q: 'Làm sao tìm kết quả bé nhất?', a: 'Em tính từng phép rồi so sánh. Như 12 − 8 = 4 nhỏ hơn 13 − 4 = 9, nên 12 − 8 bé nhất! 🏮' }, { q: '12 bạn 9 bóng thì sao?', a: 'Mỗi bạn lấy 1 bóng, có 9 bóng nên 9 bạn có bóng. 12 − 9 = 3 bạn không có bóng nhé! 🏀' } ], fallback: 'Em ôn bảng trừ qua 10 mỗi ngày, kết hợp mẹo tách số để tính nhanh nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '13 − 5 = ?', img: '13 ➖ 5', options: [{ l: 'A', v: 8 }, { l: 'B', v: 7 }, { l: 'C', v: 9 }, { l: 'D', v: 6 }], correct: 8, hint: '10 − 5 = 5, rồi cộng 3.' },
      { type: 'fill_blank', label: 'Điền số', q: '15 − 8 = ?', correct: 7, hint: '10 − 8 = 2, rồi cộng 5.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '14 − 6 lớn hơn 7. Đúng hay sai?', correct: true, hint: '14 − 6 = 8, so với 7.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Phép tính nào có kết quả bé nhất?', img: '13−4 · 15−7 · 12−8 · 11−5', options: [{ l: 'A', v: 9 }, { l: 'B', v: 8 }, { l: 'C', v: 4 }, { l: 'D', v: 6 }], correct: 4, hint: 'Tính từng phép rồi so sánh.' },
      { type: 'fill_blank', label: 'Điền số', q: '16 − 9 = ?', correct: 7, hint: '10 − 9 = 1, rồi cộng 6.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có 12 bạn và 9 quả bóng. Mấy bạn không có bóng?', img: '🧒 12 − 🏀 9', options: [{ l: 'A', v: 3 }, { l: 'B', v: 21 }, { l: 'C', v: 2 }, { l: 'D', v: 4 }], correct: 3, hint: 'Lấy số bạn trừ số bóng.' }
    ]
  },

  'lop2-bai-13': {
    grade: 2, no: 13, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Bài toán về nhiều hơn, ít hơn một số đơn vị',
    desc: 'Giải bài toán "nhiều hơn" làm tính cộng, "ít hơn" làm tính trừ.',
    icon: '📝',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: '<b>Nhiều hơn</b> thì làm tính <b>cộng</b>, <b>ít hơn</b> thì làm tính <b>trừ</b> nhé!',
    steps: ['Từ khóa', 'Tình huống', 'Phép tính'],
    blocks: [
      { type: 'info', title: '💡 "Nhiều hơn" và "ít hơn"', sub: 'Đọc kĩ nhé!', html: 'Tìm số <b>nhiều hơn</b>: lấy số đã biết <b>cộng</b> phần nhiều hơn.<br>Tìm số <b>ít hơn</b>: lấy số đã biết <b>trừ</b> phần ít hơn.<br>Ví dụ: nam có 9 bạn, nữ nhiều hơn nam 2 bạn → nữ = 9 + 2 = 11 bạn.' },
      { type: 'mcq', title: '🌸 Tình huống nhiều hơn, ít hơn', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Có 9 bạn nam, số bạn nữ <b>nhiều hơn</b> nam 2 bạn. Có mấy bạn nữ?', img: '👦×9 · 👧 nhiều hơn 2', options: [11, 7, 12, 10], correct: 11, ok: 'Nhiều hơn thì cộng: 9 + 2 = 11 bạn.' }, { q: 'Câu 2: Mai gấp 8 thuyền, Nam gấp <b>ít hơn</b> Mai 2 chiếc. Nam gấp mấy chiếc?', img: '⛵ Mai 8 · Nam ít hơn 2', options: [6, 10, 5, 7], correct: 6, ok: 'Ít hơn thì trừ: 8 − 2 = 6 chiếc.' }, { q: 'Câu 3: Tàu một có 20 thùng, tàu hai <b>nhiều hơn</b> tàu một 8 thùng. Tàu hai có mấy thùng?', img: '🚢 20 · nhiều hơn 8', options: [28, 12, 27, 18], correct: 28, ok: 'Nhiều hơn thì cộng: 20 + 8 = 28 thùng.' } ] },
      { type: 'read-cards', title: '🔢 Phép tính của bài toán', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 11, sum: '9 + 2 = 11', word: 'nhiều hơn thì làm tính cộng', say: 'mười một' }, { num: 6, sum: '9 − 3 = 6', word: 'ít hơn thì làm tính trừ', say: 'sáu' }, { num: 7, sum: '11 − 4 = 7', word: 'đội Hai ít hơn đội Một 4 người', say: 'bảy' } ] }
    ],
    ai: { chips: [ { q: 'Khi nào "nhiều hơn" làm tính cộng?', a: 'Khi đề hỏi tìm số nhiều hơn, em lấy số đã biết cộng thêm phần nhiều hơn. Ví dụ nhiều hơn 2 thì cộng 2! ➕' }, { q: 'Khi nào "ít hơn" làm tính trừ?', a: 'Khi đề hỏi tìm số ít hơn, em lấy số đã biết trừ đi phần ít hơn. Ví dụ ít hơn 3 thì trừ 3! ➖' }, { q: 'Thôn Hạ ít hơn Thôn Thượng 3 tiết mục?', a: 'Thôn Thượng 9 tiết mục, Thôn Hạ ít hơn 3 nên 9 − 3 = 6 tiết mục nhé! 🎭' } ], fallback: 'Em nhớ: "nhiều hơn" thì cộng, "ít hơn" thì trừ. Đọc kĩ đề để chọn đúng phép tính nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có 9 bạn nam, nữ nhiều hơn nam 2 bạn. Có mấy bạn nữ?', img: '👦 9 · 👧 +2', options: [{ l: 'A', v: 11 }, { l: 'B', v: 7 }, { l: 'C', v: 12 }, { l: 'D', v: 10 }], correct: 11, hint: 'Nhiều hơn thì cộng.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Thôn Thượng có 9 tiết mục, Thôn Hạ ít hơn 3. Thôn Hạ có mấy tiết mục?', correct: 6, hint: 'Ít hơn thì trừ: 9 − 3.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Tìm số "nhiều hơn" thì làm tính cộng. Đúng hay sai?', correct: true, hint: 'Nhiều hơn nghĩa là thêm vào.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Tàu một có 20 thùng, tàu hai nhiều hơn 8 thùng. Tàu hai có mấy thùng?', img: '🚢 20 + 8', options: [{ l: 'A', v: 28 }, { l: 'B', v: 12 }, { l: 'C', v: 27 }, { l: 'D', v: 18 }], correct: 28, hint: 'Nhiều hơn thì cộng.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đội Một có 11 người, đội Hai ít hơn 4 người. Đội Hai có mấy người?', correct: 7, hint: 'Ít hơn thì trừ: 11 − 4.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có 14 con gà, số vịt nhiều hơn gà 5 con. Có mấy con vịt?', img: '🐔 14 · 🦆 +5', options: [{ l: 'A', v: 19 }, { l: 'B', v: 9 }, { l: 'C', v: 18 }, { l: 'D', v: 20 }], correct: 19, hint: 'Nhiều hơn thì cộng: 14 + 5.' }
    ]
  },

  'lop2-bai-14': {
    grade: 2, no: 14, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Luyện tập chung',
    desc: 'Ôn tập cộng, trừ qua 10, chuỗi tính và giải toán trong phạm vi 20.',
    icon: '🎯',
    topic: '🧮 Chủ đề 2: Phép cộng, phép trừ (qua 10) trong phạm vi 20',
    banner: 'Cùng <b>luyện tập chung</b> cả phép cộng và phép trừ qua 10 nhé!',
    steps: ['Tính nhẩm', 'Tìm nhà', 'Chuỗi & giải toán'],
    blocks: [
      { type: 'read-cards', title: '📖 Tính nhẩm nhanh', sub: 'Ôn lại cộng, trừ qua 10. Bấm 🔊 Nghe nhé!', cards: [ { num: 14, sum: '8 + 6 = 14', say: 'mười bốn' }, { num: 3, sum: '11 − 8 = 3', say: 'ba' }, { num: 8, sum: '14 − 6 = 8', say: 'tám' }, { num: 9, sum: '17 − 8 = 9', say: 'chín' } ] },
      { type: 'mcq', title: '🐦 Chim tìm nhà & min - max', sub: 'Tính nhẩm rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 8 + 5 = ?', img: '🐦 8 ➕ 5', options: [13, 12, 14, 11], correct: 13, ok: '8 + 2 = 10, rồi 10 + 3 = 13.' }, { q: 'Câu 2: 14 − 5 = ?', img: '🐦 14 ➖ 5', options: [9, 8, 10, 7], correct: 9, ok: '14 = 10 + 4; 10 − 5 = 5; 5 + 4 = 9.' }, { q: 'Câu 3: Phép tính nào có kết quả <b>bé nhất</b>?', img: '15−9 · 13−8 · 12−5', options: [6, 5, 7, 8], correct: 5, ok: '13 − 8 = 5 là bé nhất.' } ] },
      { type: 'mcq', title: '⭐ Chuỗi tính & giải toán', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 9 + 7 − 8 = ?', img: '9 ➕ 7 ➖ 8', options: [8, 10, 7, 9], correct: 8, ok: '9 + 7 = 16, rồi 16 − 8 = 8.' }, { q: 'Câu 2: Giá sách có 9 quyển sách và 8 quyển vở. Có tất cả mấy quyển?', img: '📚 9 + 8', options: [17, 1, 16, 18], correct: 17, ok: '9 + 8 = 17 quyển.' }, { q: 'Câu 3: Nam vẽ 11 bức tranh, Mai vẽ <b>ít hơn</b> Nam 3 bức. Mai vẽ mấy bức?', img: '🎨 11 − 3', options: [8, 14, 7, 9], correct: 8, ok: '11 − 3 = 8 bức.' } ] }
    ],
    ai: { chips: [ { q: 'Tính chuỗi 9 + 7 − 8 sao?', a: 'Em tính lần lượt: 9 + 7 = 16 trước, rồi 16 − 8 = 8. Vậy kết quả là 8 nhé! ⭐' }, { q: 'Làm sao tìm phép tính bé nhất?', a: 'Em tính kết quả từng phép rồi so sánh. Như 13 − 8 = 5 nhỏ nhất trong nhóm! 🔍' }, { q: 'Bài "ít hơn" làm tính gì?', a: 'Tìm số ít hơn thì làm tính trừ em ạ! Mai vẽ ít hơn Nam 3 bức: 11 − 3 = 8 bức. 🎨' } ], fallback: 'Luyện tập chung gồm cả cộng, trừ và giải toán. Em làm chậm rãi từng câu là ổn! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '8 + 6 = ?', img: '8 ➕ 6', options: [{ l: 'A', v: 14 }, { l: 'B', v: 13 }, { l: 'C', v: 15 }, { l: 'D', v: 12 }], correct: 14, hint: '8 + 2 = 10, rồi cộng 4.' },
      { type: 'fill_blank', label: 'Điền số', q: '11 − 8 = ?', correct: 3, hint: '10 − 8 = 2, rồi cộng 1.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '15 − 8 lớn hơn 6. Đúng hay sai?', correct: true, hint: '15 − 8 = 7, so với 6.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '16 − 8 + 5 = ?', img: '16 ➖ 8 ➕ 5', options: [{ l: 'A', v: 13 }, { l: 'B', v: 3 }, { l: 'C', v: 12 }, { l: 'D', v: 14 }], correct: 13, hint: '16 − 8 = 8, rồi cộng 5.' },
      { type: 'fill_blank', label: 'Điền số', q: '9 + 7 − 8 = ?', correct: 8, hint: 'Tính 9 + 7 trước.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Phép tính nào có kết quả bé nhất?', img: '15−9 · 13−8 · 12−5', options: [{ l: 'A', v: 6 }, { l: 'B', v: 5 }, { l: 'C', v: 7 }, { l: 'D', v: 8 }], correct: 5, hint: 'Tính từng phép rồi so sánh.' }
    ]
  },

  'lop2-bai-15': {
    grade: 2, no: 15, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Ki-lô-gam',
    desc: 'Làm quen với đơn vị đo khối lượng ki-lô-gam (kg) và tính toán với kg.',
    icon: '⚖️',
    topic: '⚖️ Chủ đề 3: Làm quen với khối lượng, dung tích',
    banner: 'Ki-lô-gam là đơn vị đo <b>khối lượng</b>, viết tắt là <b>kg</b>. Cùng cân và tính toán với kg nhé!',
    steps: ['Đơn vị kg', 'Đọc cân', 'Tính toán'],
    blocks: [
      { type: 'info', title: '💡 Ki-lô-gam (kg)', sub: 'Ghi nhớ nhé!', html: '<b>Ki-lô-gam</b> là đơn vị đo khối lượng, viết tắt là <b>kg</b>.<br>Ta dùng <b>cân</b> để đo khối lượng. Vật nặng hơn làm đĩa cân đi xuống.<br>Khi tính toán với kg, em nhớ viết đơn vị kg sau kết quả: 5 kg + 4 kg = 9 kg.' },
      { type: 'mcq', title: '🛒 Đọc và so sánh khối lượng', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Vật nào <b>nặng nhất</b>?', img: 'bí ngô 2 kg · đường 1 kg · mít 3 kg · gạo 10 kg', options: [2, 1, 3, 10], correct: 10, ok: 'Túi gạo 10 kg nặng nhất.' }, { q: 'Câu 2: Vật nào <b>nhẹ nhất</b>?', img: 'bí ngô 2 kg · đường 1 kg · mít 3 kg · bột mì 5 kg', options: [2, 1, 3, 5], correct: 1, ok: 'Lọ đường 1 kg nhẹ nhất.' }, { q: 'Câu 3: Robot A nặng 32 kg, Robot B nặng <b>hơn</b> A 2 kg. Robot B nặng mấy kg?', img: '🤖 A 32 · B hơn 2', options: [34, 30, 33, 36], correct: 34, ok: '32 + 2 = 34 kg.' } ] },
      { type: 'read-cards', title: '🔢 Tính toán với ki-lô-gam', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 9, sum: '5 kg + 4 kg = 9 kg', say: 'chín ki lô gam' }, { num: 35, sum: '12 kg + 23 kg = 35 kg', say: 'ba mươi lăm ki lô gam' }, { num: 12, sum: '42 kg − 30 kg = 12 kg', say: 'mười hai ki lô gam' } ] }
    ],
    ai: { chips: [ { q: 'Ki-lô-gam viết tắt là gì?', a: 'Ki-lô-gam viết tắt là kg em ạ! Ví dụ: túi gạo nặng 5 kg. ⚖️' }, { q: 'Làm sao biết vật nào nặng hơn?', a: 'Em đặt hai vật lên cân đĩa: vật nào nặng hơn thì đĩa bên đó đi xuống. Hoặc so sánh số kg, số lớn hơn thì nặng hơn! 🛒' }, { q: 'Tính kg có cần viết đơn vị không?', a: 'Có em nhé! Kết quả phải kèm đơn vị kg. Ví dụ 5 kg + 4 kg = 9 kg, không quên chữ kg! ✏️' } ], fallback: 'Em nhớ ki-lô-gam là đơn vị đo khối lượng, viết tắt kg, và luôn viết đơn vị sau kết quả nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '5 kg + 4 kg = ?', img: '5 kg ➕ 4 kg', options: [{ l: 'A', v: 9 }, { l: 'B', v: 1 }, { l: 'C', v: 8 }, { l: 'D', v: 10 }], correct: 9, hint: 'Cộng hai số rồi kèm kg.' },
      { type: 'fill_blank', label: 'Điền số', q: '12 kg + 23 kg = __ kg', correct: 35, hint: 'Cộng hàng đơn vị rồi hàng chục.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Ki-lô-gam viết tắt là kg. Đúng hay sai?', correct: true, hint: 'Nhớ lại phần ghi nhớ.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '42 kg − 30 kg = ?', img: '42 kg ➖ 30 kg', options: [{ l: 'A', v: 12 }, { l: 'B', v: 72 }, { l: 'C', v: 10 }, { l: 'D', v: 22 }], correct: 12, hint: 'Trừ hàng chục.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Hai bao thóc nặng 30 kg và 50 kg. Cả hai bao nặng __ kg.', correct: 80, hint: '3 chục cộng 5 chục.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Robot A nặng 32 kg, Robot B nặng hơn A 2 kg. Robot B nặng mấy kg?', img: '🤖 32 + 2', options: [{ l: 'A', v: 34 }, { l: 'B', v: 30 }, { l: 'C', v: 33 }, { l: 'D', v: 36 }], correct: 34, hint: 'Nặng hơn thì cộng.' }
    ]
  },

  'lop2-bai-16': {
    grade: 2, no: 16, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Lít',
    desc: 'Làm quen với đơn vị đo dung tích lít (l) và tính toán với lít.',
    icon: '🥤',
    topic: '⚖️ Chủ đề 3: Làm quen với khối lượng, dung tích',
    banner: 'Lít là đơn vị đo <b>dung tích</b> (sức chứa), viết tắt là <b>l</b>. Cùng đong nước và tính toán với lít nhé!',
    steps: ['Đơn vị lít', 'Tính toán', 'Giải toán'],
    blocks: [
      { type: 'info', title: '💡 Lít (l)', sub: 'Ghi nhớ nhé!', html: '<b>Lít</b> là đơn vị đo dung tích (sức chứa của vật), viết tắt là <b>l</b>.<br>Ca 1 lít, chai 1 lít đều chứa được 1 lít nước.<br>Khi tính toán với lít, em nhớ viết đơn vị l sau kết quả: 1 l + 1 l = 2 l.' },
      { type: 'read-cards', title: '🔢 Tính toán với lít', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 2, sum: '1 l + 1 l = 2 l', say: 'hai lít' }, { num: 9, sum: '5 l + 4 l = 9 l', say: 'chín lít' }, { num: 32, sum: '12 l + 20 l = 32 l', say: 'ba mươi hai lít' }, { num: 9, sum: '19 l − 10 l = 9 l', say: 'chín lít' } ] },
      { type: 'mcq', title: '💧 Đong nước & giải toán', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 5 l + 4 l = ?', img: '5 l ➕ 4 l', options: [9, 1, 8, 10], correct: 9, ok: '5 + 4 = 9, nên 5 l + 4 l = 9 l.' }, { q: 'Câu 2: Can 15 l rót ra xô 5 l. Trong can còn mấy lít?', img: '🛢️ 15 l − 5 l', options: [10, 20, 5, 15], correct: 10, ok: '15 − 5 = 10 l.' }, { q: 'Câu 3: Can 15 l nước mắm, mẹ rót 7 l ra chai. Còn lại mấy lít?', img: '🛢️ 15 l − 7 l', options: [8, 22, 7, 9], correct: 8, ok: '15 − 7 = 8 l.' } ] }
    ],
    ai: { chips: [ { q: 'Lít viết tắt là gì?', a: 'Lít viết tắt là chữ l em ạ! Ví dụ: chai nước 1 l. 🥤' }, { q: 'Dung tích là gì?', a: 'Dung tích là sức chứa của một vật, tức là vật đó đựng được bao nhiêu nước. Bình lớn có dung tích nhiều hơn cốc nhỏ! 💧' }, { q: 'Can 15 l rót 7 l còn mấy?', a: 'Em làm tính trừ: 15 − 7 = 8. Vậy trong can còn 8 l nước nhé! 🛢️' } ], fallback: 'Em nhớ lít là đơn vị đo dung tích, viết tắt l, và luôn viết đơn vị sau kết quả nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '5 l + 4 l = ?', img: '5 l ➕ 4 l', options: [{ l: 'A', v: 9 }, { l: 'B', v: 1 }, { l: 'C', v: 8 }, { l: 'D', v: 10 }], correct: 9, hint: 'Cộng hai số rồi kèm l.' },
      { type: 'fill_blank', label: 'Điền số', q: '12 l + 20 l = __ l', correct: 32, hint: 'Cộng hàng chục.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Lít viết tắt là l. Đúng hay sai?', correct: true, hint: 'Nhớ lại phần ghi nhớ.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '19 l − 10 l = ?', img: '19 l ➖ 10 l', options: [{ l: 'A', v: 9 }, { l: 'B', v: 29 }, { l: 'C', v: 8 }, { l: 'D', v: 10 }], correct: 9, hint: 'Bớt đi 1 chục.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Can 15 l, rót ra 7 l. Trong can còn __ l.', correct: 8, hint: 'Lấy 15 trừ 7.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Can 3 l và can 5 l. Cả hai can có mấy lít?', img: '🛢️ 3 l + 5 l', options: [{ l: 'A', v: 8 }, { l: 'B', v: 2 }, { l: 'C', v: 7 }, { l: 'D', v: 15 }], correct: 8, hint: 'Cộng hai số.' }
    ]
  },

  'lop2-bai-17': {
    grade: 2, no: 17, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít',
    desc: 'Đọc số đo trên cân, so sánh khối lượng và dung tích trong thực tế.',
    icon: '🧪',
    topic: '⚖️ Chủ đề 3: Làm quen với khối lượng, dung tích',
    banner: 'Cùng <b>thực hành</b> đọc cân nặng (kg) và đong nước (lít) qua các tình huống thật vui nhé!',
    steps: ['Đọc cân', 'Sức khỏe', 'Đong nước'],
    blocks: [
      { type: 'info', title: '💡 Thực hành đo lường', sub: 'Đọc kĩ nhé!', html: 'Em đọc số trên <b>cân</b> để biết vật nặng bao nhiêu <b>kg</b>.<br>Em đếm số <b>cốc</b> (hoặc ca 1 lít) để biết bình chứa được bao nhiêu nước.<br>So sánh: số kg (hoặc lít) lớn hơn thì nặng hơn (hoặc nhiều nước hơn).' },
      { type: 'mcq', title: '⚖️ Bảng cân nặng sức khỏe', sub: 'Mai 23 kg, Nam 25 kg, Việt 24 kg, Rô-bốt 20 kg. Đọc kĩ rồi chọn đáp án nhé!', questions: [ { q: 'Câu 1: Bạn nào <b>nặng nhất</b>?', img: 'Mai 23 · Nam 25 · Việt 24 · Rô-bốt 20', options: [23, 25, 24, 20], correct: 25, ok: 'Nam 25 kg nặng nhất.' }, { q: 'Câu 2: Bạn (hoặc rô-bốt) nào <b>nhẹ nhất</b>?', img: 'Mai 23 · Nam 25 · Việt 24 · Rô-bốt 20', options: [23, 25, 24, 20], correct: 20, ok: 'Rô-bốt 20 kg nhẹ nhất.' }, { q: 'Câu 3: Túi gạo nặng 2 kg, túi muối nặng 1 kg. Gạo nặng <b>hơn</b> muối mấy kg?', img: 'gạo 2 kg · muối 1 kg', options: [1, 3, 2, 0], correct: 1, ok: '2 − 1 = 1 kg.' } ] },
      { type: 'mcq', title: '💧 Đong nước bằng cốc và ca', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Bình A rót được 9 cốc, bình B rót được 7 cốc. Bình A nhiều hơn bình B mấy cốc?', img: 'A 9 cốc · B 7 cốc', options: [2, 16, 3, 1], correct: 2, ok: '9 − 7 = 2 cốc.' }, { q: 'Câu 2: Xô vàng đổ 3 ca (mỗi ca 1 l), xô đỏ đổ 5 ca. Cả hai xô có mấy lít?', img: '🪣 3 l + 5 l', options: [8, 2, 7, 15], correct: 8, ok: '3 + 5 = 8 l.' } ] }
    ],
    ai: { chips: [ { q: 'Làm sao đọc cân nặng?', a: 'Em nhìn kim cân chỉ vào số nào thì vật nặng bấy nhiêu kg. Ví dụ kim chỉ số 2 thì vật nặng 2 kg! ⚖️' }, { q: 'So sánh nước bằng cách nào?', a: 'Em đếm số cốc mỗi bình rót được. Bình rót được nhiều cốc hơn thì chứa nhiều nước hơn nhé! 💧' }, { q: 'Bạn nào nặng nhất trong bảng?', a: 'Em so sánh các số kg: Nam 25 kg là lớn nhất nên Nam nặng nhất! Rô-bốt 20 kg nhẹ nhất. 🤖' } ], fallback: 'Em quan sát số trên cân, đếm số cốc nước, rồi so sánh các số là làm được hết nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mai 23 kg, Nam 25 kg, Việt 24 kg, Rô-bốt 20 kg. Ai nặng nhất?', img: '23 · 25 · 24 · 20', options: [{ l: 'A', v: 23 }, { l: 'B', v: 25 }, { l: 'C', v: 24 }, { l: 'D', v: 20 }], correct: 25, hint: 'Số kg lớn nhất.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Trong các cân nặng 23, 25, 24, 20 kg, số kg nhỏ nhất là?', correct: 20, hint: 'Số kg bé nhất.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Con vịt trên cân chỉ số 2 nghĩa là con vịt nặng 2 kg. Đúng hay sai?', correct: true, hint: 'Kim cân chỉ số nào là cân nặng đó.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bình A rót 9 cốc, bình B rót 7 cốc. A nhiều hơn B mấy cốc?', img: 'A 9 · B 7', options: [{ l: 'A', v: 2 }, { l: 'B', v: 16 }, { l: 'C', v: 3 }, { l: 'D', v: 1 }], correct: 2, hint: 'Lấy 9 trừ 7.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Xô vàng 3 ca, xô đỏ 5 ca (mỗi ca 1 l). Cả hai xô có __ l.', correct: 8, hint: 'Cộng 3 và 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Túi gạo 2 kg nặng hơn túi muối 1 kg mấy kg?', img: '2 kg − 1 kg', options: [{ l: 'A', v: 1 }, { l: 'B', v: 3 }, { l: 'C', v: 2 }, { l: 'D', v: 0 }], correct: 1, hint: 'Lấy 2 trừ 1.' }
    ]
  },

  'lop2-bai-18': {
    grade: 2, no: 18, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Luyện tập chung',
    desc: 'Ôn tập tính toán với kg, lít và giải bài toán về khối lượng, dung tích.',
    icon: '🎯',
    topic: '⚖️ Chủ đề 3: Làm quen với khối lượng, dung tích',
    banner: 'Cùng <b>luyện tập chung</b> các phép tính với <b>kg</b> và <b>lít</b> nhé!',
    steps: ['Tính kg & lít', 'Cân thăng bằng', 'Gom hàng'],
    blocks: [
      { type: 'read-cards', title: '📖 Tính toán với kg và lít', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 60, sum: '40 kg + 20 kg = 60 kg', say: 'sáu mươi ki lô gam' }, { num: 20, sum: '60 kg − 40 kg = 20 kg', say: 'hai mươi ki lô gam' }, { num: 56, sum: '25 kg + 31 kg = 56 kg', say: 'năm mươi sáu ki lô gam' }, { num: 28, sum: '25 l + 3 l = 28 l', say: 'hai mươi tám lít' } ] },
      { type: 'mcq', title: '⚖️ Cân thăng bằng & trạm xăng', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 1 con thỏ nặng bằng 2 con gà. 1 con chó nặng bằng 2 con thỏ. Vậy 1 con chó nặng bằng mấy con gà?', img: '🐶 = 🐰🐰 ; 🐰 = 🐔🐔', options: [4, 2, 3, 6], correct: 4, ok: '1 chó = 2 thỏ = 2 × 2 = 4 con gà.' }, { q: 'Câu 2: Ô tô mua 25 l xăng, xe máy mua 3 l. Cả hai mua mấy lít?', img: '⛽ 25 l + 3 l', options: [28, 22, 27, 29], correct: 28, ok: '25 + 3 = 28 l.' }, { q: 'Câu 3: 56 kg − 31 kg = ?', img: '56 kg ➖ 31 kg', options: [25, 87, 24, 26], correct: 25, ok: '6 − 1 = 5 (đơn vị); 5 − 3 = 2 (chục) → 25 kg.' } ] },
      { type: 'mcq', title: '🛒 Gom túi gạo đúng cân', sub: 'Có các túi gạo 2 kg, 4 kg, 6 kg, 3 kg, 7 kg. Chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Chọn 2 túi để được đúng <b>13 kg</b>. Túi 6 kg và túi 7 kg cộng lại bằng mấy?', img: '6 kg + 7 kg', options: [13, 9, 12, 14], correct: 13, ok: '6 + 7 = 13 kg.' }, { q: 'Câu 2: Chọn túi 2 kg, 4 kg và 3 kg. Tổng là mấy kg?', img: '2 kg + 4 kg + 3 kg', options: [9, 6, 8, 10], correct: 9, ok: '2 + 4 + 3 = 9 kg.' } ] }
    ],
    ai: { chips: [ { q: 'Cân thăng bằng bắc cầu là gì?', a: 'Là khi 1 chó = 2 thỏ, mà 1 thỏ = 2 gà, thì em thay mỗi thỏ bằng 2 gà: 1 chó = 2 × 2 = 4 gà nhé! ⚖️' }, { q: 'Tính 56 − 31 thế nào?', a: 'Em trừ hàng đơn vị: 6 − 1 = 5; rồi hàng chục: 5 − 3 = 2. Ghép lại 25 kg! ✏️' }, { q: 'Làm sao chọn túi đúng cân?', a: 'Em thử cộng các túi lại xem có bằng mục tiêu không. Như 6 kg + 7 kg = 13 kg đúng yêu cầu! 🛒' } ], fallback: 'Em nhớ tính kg với kg, lít với lít, và luôn viết đơn vị sau kết quả nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '40 kg + 20 kg = ?', img: '40 kg ➕ 20 kg', options: [{ l: 'A', v: 60 }, { l: 'B', v: 20 }, { l: 'C', v: 50 }, { l: 'D', v: 80 }], correct: 60, hint: '4 chục cộng 2 chục.' },
      { type: 'fill_blank', label: 'Điền số', q: '56 kg − 31 kg = __ kg', correct: 25, hint: 'Trừ hàng đơn vị rồi hàng chục.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 con chó nặng bằng 2 con thỏ, 1 con thỏ nặng bằng 2 con gà. Vậy 1 con chó nặng bằng 4 con gà. Đúng hay sai?', correct: true, hint: '2 thỏ = 2 × 2 con gà.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '25 l + 3 l = ?', img: '25 l ➕ 3 l', options: [{ l: 'A', v: 28 }, { l: 'B', v: 22 }, { l: 'C', v: 27 }, { l: 'D', v: 29 }], correct: 28, hint: 'Cộng vào hàng đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Túi 6 kg và túi 7 kg cộng lại nặng __ kg.', correct: 13, hint: '6 + 7 = ?' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '60 kg − 40 kg = ?', img: '60 kg ➖ 40 kg', options: [{ l: 'A', v: 20 }, { l: 'B', v: 100 }, { l: 'C', v: 10 }, { l: 'D', v: 30 }], correct: 20, hint: '6 chục bớt 4 chục.' }
    ]
  },

  'lop2-bai-19': {
    grade: 2, no: 19, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Phép cộng (có nhớ) số có hai chữ số với số có một chữ số',
    desc: 'Cộng có nhớ: khi đơn vị quá 10 thì nhớ 1 sang hàng chục.',
    icon: '➕',
    topic: '🧮 Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100',
    banner: 'Khi cộng hàng đơn vị mà <b>quá 10</b>, em viết số đơn vị và <b>nhớ 1</b> sang hàng chục nhé!',
    steps: ['Cách "nhớ 1"', 'Đọc kết quả', 'Tính toán'],
    blocks: [
      { type: 'info', title: '💡 Quy trình cộng có nhớ', sub: 'Đọc kĩ ví dụ 35 + 7 nhé!', html: 'Ví dụ: <b>35 + 7</b>.<br>Bước 1 (hàng đơn vị): 5 + 7 = 12, <b>viết 2 nhớ 1</b>.<br>Bước 2 (hàng chục): 3 <b>thêm 1</b> (nhớ) = 4, viết 4.<br>Kết quả: 35 + 7 = <b>42</b>.' },
      { type: 'read-cards', title: '📖 Cộng có nhớ từng bước', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 42, sum: '35 + 7 = 42', word: '5 + 7 = 12, viết 2 nhớ 1; 3 thêm 1 = 4', say: 'bốn mươi hai' }, { num: 31, sum: '28 + 3 = 31', word: '8 + 3 = 11, viết 1 nhớ 1; 2 thêm 1 = 3', say: 'ba mươi mốt' }, { num: 87, sum: '78 + 9 = 87', word: '8 + 9 = 17, viết 7 nhớ 1; 7 thêm 1 = 8', say: 'tám mươi bảy' } ] },
      { type: 'mcq', title: '🚂 Toa tàu & những chiếc chum', sub: 'Tính toán rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 12 + 8 = ?', img: '🚂 12 ➕ 8', options: [20, 10, 21, 19], correct: 20, ok: '2 + 8 = 10, viết 0 nhớ 1; 1 thêm 1 = 2 → 20.' }, { q: 'Câu 2: 65 + 5 = ?', img: '🚂 65 ➕ 5', options: [70, 60, 71, 75], correct: 70, ok: '5 + 5 = 10, viết 0 nhớ 1; 6 thêm 1 = 7 → 70.' }, { q: 'Câu 3: Chum nào đựng nhiều nhất (kết quả <b>lớn nhất</b>)?', img: '59+9 · 61+9 · 57+4', options: [68, 70, 61, 72], correct: 70, ok: '61 + 9 = 70 là lớn nhất.' } ] },
      { type: 'mcq', title: '🐚 Giải toán thực tế', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Trên bàn có 18 vỏ ốc trắng và 5 vỏ ốc xanh. Có tất cả mấy vỏ ốc?', img: '🐚 18 + 5', options: [23, 13, 22, 24], correct: 23, ok: '18 + 5 = 23 vỏ ốc.' }, { q: 'Câu 2: Buổi sáng thu 87 bao thóc, buổi chiều nhiều hơn buổi sáng 6 bao. Buổi chiều thu mấy bao?', img: '🌾 87 + 6', options: [93, 81, 92, 94], correct: 93, ok: '87 + 6 = 93 bao.' } ] }
    ],
    ai: { chips: [ { q: '"Nhớ 1" nghĩa là gì?', a: 'Khi cộng hàng đơn vị mà được số lớn hơn 9 (ví dụ 5 + 7 = 12), em viết 2 ở hàng đơn vị và nhớ 1 chục sang cộng vào hàng chục! ➕' }, { q: '35 + 7 tính thế nào?', a: 'Bước 1: 5 + 7 = 12, viết 2 nhớ 1. Bước 2: 3 thêm 1 = 4. Kết quả 42 nhé! ✏️' }, { q: 'Sao 65 + 5 = 70?', a: '5 + 5 = 10, viết 0 nhớ 1; rồi 6 thêm 1 = 7. Ghép lại được 70 đó em! 🚂' } ], fallback: 'Em nhớ: cộng hàng đơn vị trước, nếu quá 10 thì nhớ 1 sang hàng chục rồi cộng tiếp nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '35 + 7 = ?', img: '35 ➕ 7', options: [{ l: 'A', v: 42 }, { l: 'B', v: 32 }, { l: 'C', v: 41 }, { l: 'D', v: 43 }], correct: 42, hint: '5 + 7 = 12, viết 2 nhớ 1.' },
      { type: 'fill_blank', label: 'Điền số', q: '28 + 3 = ?', correct: 31, hint: '8 + 3 = 11, nhớ 1.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '78 + 9 = 87. Đúng hay sai?', correct: true, hint: '8 + 9 = 17, viết 7 nhớ 1.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '65 + 5 = ?', img: '65 ➕ 5', options: [{ l: 'A', v: 70 }, { l: 'B', v: 60 }, { l: 'C', v: 71 }, { l: 'D', v: 75 }], correct: 70, hint: '5 + 5 = 10, nhớ 1.' },
      { type: 'fill_blank', label: 'Điền số', q: '18 + 5 = ?', correct: 23, hint: '8 + 5 = 13, nhớ 1.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Buổi sáng 87 bao thóc, buổi chiều nhiều hơn 6 bao. Buổi chiều mấy bao?', img: '🌾 87 + 6', options: [{ l: 'A', v: 93 }, { l: 'B', v: 81 }, { l: 'C', v: 92 }, { l: 'D', v: 94 }], correct: 93, hint: 'Nhiều hơn thì cộng.' }
    ]
  },

  'lop2-bai-20': {
    grade: 2, no: 20, theme: 'blue', mascot: '🐼', avatar: '🐼',
    title: 'Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số',
    desc: 'Cộng có nhớ hai số có hai chữ số trong phạm vi 100.',
    icon: '➕',
    topic: '🧮 Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100',
    banner: 'Cộng hai số có hai chữ số: tính <b>hàng đơn vị trước</b>, nếu quá 10 thì <b>nhớ 1</b> sang hàng chục nhé!',
    steps: ['Cách "nhớ 1"', 'Đọc kết quả', 'Tính & ứng dụng'],
    blocks: [
      { type: 'info', title: '💡 Quy trình cộng có nhớ', sub: 'Đọc kĩ ví dụ 36 + 17 nhé!', html: 'Ví dụ: <b>36 + 17</b>.<br>Bước 1 (hàng đơn vị): 6 + 7 = 13, <b>viết 3 nhớ 1</b>.<br>Bước 2 (hàng chục): 3 + 1 = 4, <b>thêm 1</b> (nhớ) = 5, viết 5.<br>Kết quả: 36 + 17 = <b>53</b>.' },
      { type: 'read-cards', title: '📖 Cộng có nhớ từng bước', sub: 'Bấm 🔊 Nghe để luyện đọc kết quả nhé!', cards: [ { num: 53, sum: '36 + 17 = 53', word: '6 + 7 = 13, viết 3 nhớ 1; 3 + 1 = 4, thêm 1 = 5', say: 'năm mươi ba' }, { num: 90, sum: '74 + 16 = 90', word: '4 + 6 = 10, viết 0 nhớ 1; 7 + 1 = 8, thêm 1 = 9', say: 'chín mươi' }, { num: 50, sum: '15 + 35 = 50', word: '5 + 5 = 10, viết 0 nhớ 1; 1 + 3 = 4, thêm 1 = 5', say: 'năm mươi' } ] },
      { type: 'mcq', title: '🚁 Drone vận chuyển & con tàu', sub: 'Tính toán rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: 15 kg + 35 kg = ?', img: '🚁 15 kg ➕ 35 kg', options: [50, 40, 51, 60], correct: 50, ok: '5 + 5 = 10, nhớ 1; 1 + 3 = 4 thêm 1 = 5 → 50 kg.' }, { q: 'Câu 2: 76 kg + 17 kg = ?', img: '🚁 76 kg ➕ 17 kg', options: [93, 83, 92, 94], correct: 93, ok: '6 + 7 = 13, nhớ 1; 7 + 1 = 8 thêm 1 = 9 → 93 kg.' }, { q: 'Câu 3: Con tàu ghi phép tính đúng là tàu nào?', img: '23 + 18 = ?', options: [41, 31, 40, 42], correct: 41, ok: '23 + 18 = 41, vậy tàu ghi 41 là đúng.' } ] },
      { type: 'mcq', title: '🐜 Đường đi của kiến & cừu', sub: 'Đọc kĩ rồi chọn đáp án đúng nhé!', questions: [ { q: 'Câu 1: Kiến đi quãng đường 37 cm rồi 54 cm. Tổng quãng đường là?', img: '🐜 37 cm + 54 cm', options: [91, 81, 90, 92], correct: 91, ok: '37 + 54 = 91 cm.' }, { q: 'Câu 2: Đường đỏ dài 48 cm + 32 cm. Đường đỏ dài mấy cm?', img: '🟥 48 cm + 32 cm', options: [80, 70, 81, 90], correct: 80, ok: '48 + 32 = 80 cm.' }, { q: 'Câu 3: 45 + 27 + 19 = ?', img: '45 ➕ 27 ➕ 19', options: [91, 81, 90, 92], correct: 91, ok: '45 + 27 = 72, rồi 72 + 19 = 91.' } ] }
    ],
    ai: { chips: [ { q: '36 + 17 tính thế nào?', a: 'Bước 1: 6 + 7 = 13, viết 3 nhớ 1. Bước 2: 3 + 1 = 4, thêm 1 nhớ = 5. Kết quả 53 nhé! ➕' }, { q: 'Sao 74 + 16 = 90?', a: '4 + 6 = 10, viết 0 nhớ 1; 7 + 1 = 8, thêm 1 = 9. Ghép lại được 90 đó em! ✏️' }, { q: '45 + 27 + 19 cộng sao?', a: 'Em cộng lần lượt: 45 + 27 = 72 trước, rồi 72 + 19 = 91. Đổi chỗ thứ tự thì tổng vẫn bằng 91! 🐑' } ], fallback: 'Cộng hai số có hai chữ số: tính hàng đơn vị trước, nếu quá 10 thì nhớ 1 sang hàng chục nhé! 🦊' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '36 + 17 = ?', img: '36 ➕ 17', options: [{ l: 'A', v: 53 }, { l: 'B', v: 43 }, { l: 'C', v: 52 }, { l: 'D', v: 54 }], correct: 53, hint: '6 + 7 = 13, nhớ 1.' },
      { type: 'fill_blank', label: 'Điền số', q: '74 + 16 = ?', correct: 90, hint: '4 + 6 = 10, nhớ 1.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '23 + 18 = 41. Đúng hay sai?', correct: true, hint: '3 + 8 = 11, viết 1 nhớ 1.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '15 kg + 35 kg = ?', img: '15 kg ➕ 35 kg', options: [{ l: 'A', v: 50 }, { l: 'B', v: 40 }, { l: 'C', v: 51 }, { l: 'D', v: 60 }], correct: 50, hint: '5 + 5 = 10, nhớ 1.' },
      { type: 'fill_blank', label: 'Điền số', q: '37 cm + 54 cm = __ cm', correct: 91, hint: '7 + 4 = 11, nhớ 1.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '48 + 32 = ?', img: '48 ➕ 32', options: [{ l: 'A', v: 80 }, { l: 'B', v: 70 }, { l: 'C', v: 81 }, { l: 'D', v: 90 }], correct: 80, hint: '8 + 2 = 10, nhớ 1.' }
    ]
  }

});
