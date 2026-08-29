// ============================================================
//  TVKN — DỮ LIỆU BÀI HỌC LỚP 5 (SGK Kết nối tri thức)
//  Nạp SAU lessons.js. Đổ vào window.TVKN_LESSONS.lessons.
// ============================================================
Object.assign(window.TVKN_LESSONS.lessons, {

  'lop5-bai-1': {
    grade: 5, no: 1, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Ôn tập số tự nhiên',
    desc: 'Ôn đọc, viết, giá trị chữ số, so sánh và làm tròn số tự nhiên.',
    icon: '🔢',
    topic: '🔢 Chủ đề: Ôn tập số tự nhiên & phân số',
    banner: 'Cùng Đại Bàng ôn lại các số tự nhiên thật lớn trước khi vào hành trình mới nhé!',
    steps: ['Hàng và lớp', 'So sánh', 'Làm tròn'],
    blocks: [
      { type: 'info', title: '📘 Hàng, lớp và giá trị chữ số', sub: 'Cùng nhớ lại nhé!', html: '<p>Trong số <b>3 041 975</b>, mỗi chữ số có một giá trị tùy theo hàng của nó.</p><p>Chữ số <b>4</b> nằm ở hàng <b>chục nghìn</b> nên có giá trị là <b>40 000</b>.</p><p>Làm tròn giúp ta nói số gọn hơn, ví dụ 2 545 000 làm tròn đến hàng chục nghìn được <b>2 550 000</b>.</p>' },
      { type: 'mcq', title: '🔎 Giá trị và làm tròn', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Trong số 3 041 975, chữ số 4 có giá trị bao nhiêu?', options: [4, 40, 4000, 40000], correct: 40000, ok: 'Chữ số 4 ở hàng chục nghìn nên có giá trị 40 000.' },
        { q: 'Làm tròn 2 545 000 đến hàng chục nghìn được số nào?', options: [2540000, 2550000, 2500000, 2600000], correct: 2550000, ok: 'Chữ số hàng nghìn là 5 nên làm tròn lên thành 2 550 000.' },
        { q: 'Ba số chẵn liên tiếp: 2 028, ?, 2 032. Số ở giữa là?', options: [2029, 2030, 2031, 2026], correct: 2030, ok: '2 028 và 2 032 cách nhau 4, số ở giữa là 2 030.' }
      ] },
      { type: 'sequence', title: '✏️ Dãy số chẵn', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: 'Đếm thêm 2 (số chẵn liên tiếp):', slots: [2026, 2028, { blank: 2030 }, { blank: 2032 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Giá trị chữ số là gì?', a: 'Giá trị của một chữ số phụ thuộc vào hàng của nó. Vd số 4 ở hàng chục nghìn thì giá trị là 40 000 nhé! 🦅' },
      { q: 'Làm tròn số thế nào?', a: 'Em nhìn chữ số ngay sau hàng cần làm tròn: nếu nhỏ hơn 5 thì giữ nguyên, nếu từ 5 trở lên thì tăng thêm 1 đơn vị.' },
      { q: 'Số chẵn là số nào?', a: 'Số chẵn là số chia hết cho 2, tận cùng bằng 0, 2, 4, 6, 8 em nhé!' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em viết số theo từng hàng để dễ đọc và so sánh nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số liền sau của 999 999 là số nào?', options: [{ l: 'A', v: 1000000 }, { l: 'B', v: 999998 }, { l: 'C', v: 990000 }, { l: 'D', v: 1000001 }], correct: 1000000, hint: 'Thêm 1 đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Làm tròn 986 đến hàng chục được số nào?', correct: 990, hint: 'Chữ số hàng đơn vị là 6, lớn hơn 5.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Trong số 25 000, chữ số 2 có giá trị 20 000. Đúng hay sai?', correct: true, hint: 'Chữ số 2 ở hàng chục nghìn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào lớn nhất?', options: [{ l: 'A', v: 8848 }, { l: 'B', v: 986 }, { l: 'C', v: 25000 }, { l: 'D', v: 1500 }], correct: 25000, hint: 'Số có nhiều chữ số hơn thì lớn hơn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào dưới đây là số chẵn?', options: [{ l: 'A', v: 2030 }, { l: 'B', v: 999 }, { l: 'C', v: 2031 }, { l: 'D', v: 777 }], correct: 2030, hint: 'Số chẵn tận cùng bằng 0, 2, 4, 6, 8.' }
    ]
  },

  'lop5-bai-2': {
    grade: 5, no: 2, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Ôn tập các phép tính với số tự nhiên',
    desc: 'Cộng, trừ, nhân, chia số tự nhiên và tính bằng cách thuận tiện.',
    icon: '➗',
    topic: '🔢 Chủ đề: Ôn tập số tự nhiên & phân số',
    banner: 'Ôn lại bốn phép tính và mẹo tính nhanh cùng Đại Bàng nào!',
    steps: ['Bốn phép tính', 'Tính chất', 'Thuận tiện'],
    blocks: [
      { type: 'info', title: '📘 Tính chất phép tính', sub: 'Mẹo tính nhanh!', html: '<p><b>Giao hoán:</b> 483 + 5 109 = 5 109 + 483.</p><p><b>Phân phối:</b> 2 × (75 + 25) = 2 × 75 + 2 × 25.</p><p>Khi tính thuận tiện, em tìm các cặp số tròn chục, tròn trăm: 400 + 600 = 1 000.</p>' },
      { type: 'mcq', title: '🔎 Thực hiện phép tính', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '7 318 + 3 191 = ?', options: [10509, 10500, 10519, 11509], correct: 10509, ok: 'Cộng từ hàng đơn vị: 7 318 + 3 191 = 10 509.' },
        { q: '172 × 4 = ?', options: [688, 648, 668, 868], correct: 688, ok: '172 × 4 = 688.' },
        { q: '4 488 : 34 = ?', options: [132, 142, 122, 134], correct: 132, ok: '34 × 132 = 4 488 nên thương là 132.' }
      ] },
      { type: 'sequence', title: '✏️ Phân tích số thành tổng', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: '1 730 539 = 1 000 000 + ? + 30 000 + 500 + 30 + 9', slots: [1000000, { blank: 700000 }, 30000, 500, 30, 9] }
      ] }
    ],
    ai: { chips: [
      { q: 'Tính bằng cách thuận tiện là gì?', a: 'Là nhóm các số tạo thành số tròn chục, tròn trăm để tính cho nhanh, vd 720 + 280 = 1 000 nhé! 🦅' },
      { q: 'Tính chất giao hoán?', a: 'Đổi chỗ các số hạng (hoặc thừa số) thì tổng (hoặc tích) không đổi: a + b = b + a.' },
      { q: 'Trung bình cộng tính sao?', a: 'Lấy tổng các số rồi chia cho số lượng số. Vd trung bình của 6 và 10 là (6 + 10) : 2 = 8.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em đặt tính thẳng hàng và nhớ thứ tự nhân chia trước, cộng trừ sau nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '83 500 − 28 150 = ?', options: [{ l: 'A', v: 55350 }, { l: 'B', v: 55250 }, { l: 'C', v: 54350 }, { l: 'D', v: 56350 }], correct: 55350, hint: 'Trừ từ hàng đơn vị, nhớ mượn khi cần.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Trung bình cộng của 6 và 10 là?', correct: 8, hint: '(6 + 10) chia cho 2.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '483 + 5 109 = 5 109 + 483. Đúng hay sai?', correct: true, hint: 'Đây là tính chất giao hoán.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bác Ba chia 525 kg gạo vào các túi 15 kg. Có bao nhiêu túi?', options: [{ l: 'A', v: 35 }, { l: 'B', v: 25 }, { l: 'C', v: 45 }, { l: 'D', v: 30 }], correct: 35, hint: '525 : 15.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '2 × (75 + 25) = ?', options: [{ l: 'A', v: 200 }, { l: 'B', v: 150 }, { l: 'C', v: 100 }, { l: 'D', v: 250 }], correct: 200, hint: 'Tính trong ngoặc trước: 75 + 25 = 100.' }
    ]
  },

  'lop5-bai-3': {
    grade: 5, no: 3, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Thành phần của phép cộng, phép trừ',
    desc: 'Gọi tên số hạng, tổng, số bị trừ, số trừ và hiệu.',
    icon: '➕',
    topic: '🔢 Chủ đề: Ôn tập số tự nhiên & phân số',
    banner: 'Cùng gọi đúng tên các thành phần trong phép cộng và phép trừ nào!',
    steps: ['Phép cộng', 'Phép trừ', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '📘 Tên gọi các thành phần', sub: 'Ghi nhớ nhé!', html: '<p>Trong phép cộng <b>6 + 3 = 9</b>: số 6 và số 3 là <b>số hạng</b>, số 9 là <b>tổng</b>.</p><p>Trong phép trừ <b>12 − 2 = 10</b>: số 12 là <b>số bị trừ</b>, số 2 là <b>số trừ</b>, số 10 là <b>hiệu</b>.</p>' },
      { type: 'mcq', title: '🔎 Gọi tên đúng', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Trong phép tính 6 + 3 = 9, số 9 được gọi là gì?', options: [{ val: 1, label: 'Số hạng' }, { val: 2, label: 'Tổng' }, { val: 3, label: 'Hiệu' }], correct: 2, ok: 'Kết quả của phép cộng gọi là tổng.' },
        { q: 'Trong phép tính 12 − 2 = 10, số 12 được gọi là gì?', options: [{ val: 1, label: 'Số bị trừ' }, { val: 2, label: 'Số trừ' }, { val: 3, label: 'Hiệu' }], correct: 1, ok: 'Số đứng trước dấu trừ là số bị trừ.' },
        { q: 'Bến xe có 5 xe, thêm 4 xe nữa. Tổng số xe là?', options: [9, 8, 10, 1], correct: 9, ok: '5 + 4 = 9 xe.' }
      ] },
      { type: 'sequence', title: '✏️ Tổng tăng dần', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: 'Cộng thêm 2 mỗi lần:', slots: [5, 7, { blank: 9 }, { blank: 11 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Số hạng là gì?', a: 'Số hạng là các số đem cộng với nhau. Trong 6 + 3 = 9 thì 6 và 3 là số hạng nhé! 🦅' },
      { q: 'Phân biệt số bị trừ và số trừ?', a: 'Số bị trừ đứng trước (số bị bớt đi), số trừ đứng sau dấu trừ. Vd 12 − 2 thì 12 là số bị trừ.' },
      { q: 'Hiệu là gì?', a: 'Hiệu là kết quả của phép trừ. Vd 12 − 2 = 10 thì 10 là hiệu.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em nhớ số bị bớt đi luôn đứng trước trong phép trừ nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hiệu của phép tính 12 − 2 là?', options: [{ l: 'A', v: 10 }, { l: 'B', v: 14 }, { l: 'C', v: 9 }, { l: 'D', v: 11 }], correct: 10, hint: '12 bớt đi 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Tổng của 5 và 4 là?', correct: 9, hint: 'Cộng hai số hạng lại.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Trong phép trừ, số bị trừ luôn đứng trước số trừ. Đúng hay sai?', correct: true, hint: 'Số bị bớt đi đứng trước.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '8 − 3 = ?', options: [{ l: 'A', v: 5 }, { l: 'B', v: 4 }, { l: 'C', v: 6 }, { l: 'D', v: 11 }], correct: 5, hint: '8 bớt đi 3.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số bị trừ là 12, số trừ là 5, hiệu bằng?', options: [{ l: 'A', v: 7 }, { l: 'B', v: 6 }, { l: 'C', v: 8 }, { l: 'D', v: 17 }], correct: 7, hint: '12 − 5.' }
    ]
  },

  'lop5-bai-4': {
    grade: 5, no: 4, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Phân số thập phân',
    desc: 'Nhận biết phân số thập phân và đưa phân số về phân số thập phân.',
    icon: '🔟',
    topic: '➗ Chủ đề: Phân số',
    banner: 'Khám phá những phân số đặc biệt có mẫu số là 10, 100, 1000 nhé!',
    steps: ['Nhận biết', 'Biến đổi', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '📘 Phân số thập phân là gì?', sub: 'Cùng nhớ nhé!', html: '<p>Các phân số có mẫu số là <b>10, 100, 1 000, ...</b> được gọi là <b>phân số thập phân</b>.</p><p>Có thể đưa một phân số về phân số thập phân: <b>3/5 = (3 × 2)/(5 × 2) = 6/10</b>.</p>' },
      { type: 'mcq', title: '🔎 Nhận biết và biến đổi', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Phân số nào là phân số thập phân?', options: [{ val: 1, label: '7/10' }, { val: 2, label: '9/20' }, { val: 3, label: '3/4' }, { val: 4, label: '2/5' }], correct: 1, ok: '7/10 có mẫu số là 10 nên là phân số thập phân.' },
        { q: 'Tô màu 57 ô trên 100 ô được phân số nào?', options: [{ val: 1, label: '57/100' }, { val: 2, label: '57/10' }, { val: 3, label: '5/100' }, { val: 4, label: '57/1000' }], correct: 1, ok: '57 phần trên 100 phần là 57/100.' },
        { q: 'Đưa 3/5 về phân số thập phân: 3/5 = …/10. Tử số cần điền là?', options: [6, 3, 5, 9], correct: 6, ok: 'Nhân cả tử và mẫu với 2: 3/5 = 6/10.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Phân số thập phân là gì?', a: 'Là phân số có mẫu số là 10, 100, 1 000, ... vd 7/10 hay 57/100 nhé! 🦅' },
      { q: 'Làm sao đưa về phân số thập phân?', a: 'Em nhân (hoặc chia) cả tử và mẫu cho cùng một số để mẫu thành 10, 100... Vd 3/5 = 6/10.' },
      { q: '9/20 có phải phân số thập phân không?', a: 'Không nha, vì mẫu số 20 không phải là 10, 100, 1 000... 🦅' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em nhớ các cặp số nhân ra 10 (2×5), ra 100 (4×25) để biến đổi cho nhanh nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Đưa 3/5 về …/10 thì tử số là số nào?', options: [{ l: 'A', v: 6 }, { l: 'B', v: 5 }, { l: 'C', v: 3 }, { l: 'D', v: 10 }], correct: 6, hint: 'Nhân cả tử và mẫu với 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mẫu số của phân số thập phân 7/10 là?', correct: 10, hint: 'Số nằm dưới gạch ngang.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '9/20 là phân số thập phân. Đúng hay sai?', correct: false, hint: 'Mẫu số phải là 10, 100, 1 000...' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Tô 3 dải trên 10 dải được phân số có tử số là?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 10 }, { l: 'C', v: 30 }, { l: 'D', v: 7 }], correct: 3, hint: '3 phần trên 10 phần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '1/2 = …/10 thì tử số là?', options: [{ l: 'A', v: 5 }, { l: 'B', v: 2 }, { l: 'C', v: 10 }, { l: 'D', v: 1 }], correct: 5, hint: 'Nhân cả tử và mẫu với 5.' }
    ]
  },

  'lop5-bai-5': {
    grade: 5, no: 5, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Ôn tập các phép tính với phân số',
    desc: 'Cộng, trừ, nhân, chia phân số và so sánh phân số.',
    icon: '➗',
    topic: '➗ Chủ đề: Phân số',
    banner: 'Cùng luyện lại bốn phép tính với phân số thật chắc nhé!',
    steps: ['Nhân chia', 'So sánh', 'Vận dụng'],
    blocks: [
      { type: 'info', title: '📘 Nhân, chia phân số', sub: 'Nhớ quy tắc nhé!', html: '<p><b>Nhân:</b> lấy tử nhân tử, mẫu nhân mẫu rồi rút gọn. Vd 5/8 × 8/15 = 40/120 = 1/3.</p><p><b>Chia:</b> nhân với phân số đảo ngược. Vd 12/7 : 8/7 = 12/7 × 7/8 = 3/2.</p>' },
      { type: 'mcq', title: '🔎 Tính và so sánh', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '5/8 × 8/15 = ? (rút gọn)', options: [{ val: 1, label: '1/3' }, { val: 2, label: '1/2' }, { val: 3, label: '2/3' }, { val: 4, label: '5/15' }], correct: 1, ok: '40/120 rút gọn được 1/3.' },
        { q: '12/7 : 8/7 = ?', options: [{ val: 1, label: '3/2' }, { val: 2, label: '2/3' }, { val: 3, label: '12/8' }, { val: 4, label: '7/8' }], correct: 1, ok: 'Nhân đảo ngược: 12/7 × 7/8 = 12/8 = 3/2.' },
        { q: 'Ai chạy được đoạn dài hơn: bạn được 3/5 hay bạn được 7/10 quãng đường?', options: [{ val: 1, label: '3/5' }, { val: 2, label: '7/10' }], correct: 2, ok: '3/5 = 6/10 < 7/10 nên 7/10 dài hơn.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Chia phân số làm sao?', a: 'Em giữ nguyên phân số thứ nhất, nhân với phân số thứ hai đảo ngược (lật tử mẫu) nhé! 🦅' },
      { q: 'So sánh phân số khác mẫu?', a: 'Em quy đồng mẫu số rồi so sánh tử số. Vd 3/5 = 6/10 nên 3/5 < 7/10.' },
      { q: 'Rút gọn phân số thế nào?', a: 'Em chia cả tử và mẫu cho cùng một số đến khi không chia được nữa, vd 40/120 = 1/3.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: với nhân chia phân số, em rút gọn ngay trong khi tính cho nhẹ nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '1/4 + 2/4 = a/4. Tử số a bằng?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 6 }, { l: 'C', v: 2 }, { l: 'D', v: 8 }], correct: 3, hint: 'Cùng mẫu thì cộng tử số.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Lớp 5B quyên góp bằng 7/8 của 96 quyển sách. 96 × 7/8 bằng bao nhiêu quyển?', correct: 84, hint: '96 : 8 = 12, rồi nhân 7.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '7/10 lớn hơn 3/5. Đúng hay sai?', correct: true, hint: 'Đưa về cùng mẫu: 3/5 = 6/10.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '1/3 + 1/3 + 1/3 = ?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 3 }, { l: 'C', v: 0 }, { l: 'D', v: 9 }], correct: 1, hint: '3/3 bằng mấy?' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '2/3 của 96 là bao nhiêu?', options: [{ l: 'A', v: 64 }, { l: 'B', v: 32 }, { l: 'C', v: 48 }, { l: 'D', v: 30 }], correct: 64, hint: '96 : 3 rồi nhân 2.' }
    ]
  },

  'lop5-bai-6': {
    grade: 5, no: 6, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Cộng, trừ hai phân số khác mẫu số',
    desc: 'Quy đồng mẫu số rồi cộng hoặc trừ hai phân số.',
    icon: '➕',
    topic: '➗ Chủ đề: Phân số',
    banner: 'Muốn cộng trừ phân số khác mẫu, hãy quy đồng mẫu số trước nhé!',
    steps: ['Quy đồng', 'Cộng trừ', 'Vận dụng'],
    blocks: [
      { type: 'info', title: '📘 Quy đồng rồi tính', sub: 'Quy tắc vàng!', html: '<p>Muốn cộng (hoặc trừ) hai phân số khác mẫu số, ta <b>quy đồng mẫu số</b> rồi cộng (hoặc trừ).</p><p>Vd: 1/5 + 1/2 = 2/10 + 5/10 = <b>7/10</b>.</p><p>1/2 − 1/5 = 5/10 − 2/10 = <b>3/10</b>.</p>' },
      { type: 'mcq', title: '🔎 Cộng và trừ', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '1/5 + 1/2 = ?', options: [{ val: 1, label: '7/10' }, { val: 2, label: '2/7' }, { val: 3, label: '1/10' }, { val: 4, label: '2/10' }], correct: 1, ok: '2/10 + 5/10 = 7/10.' },
        { q: '1/2 − 1/5 = ?', options: [{ val: 1, label: '3/10' }, { val: 2, label: '1/3' }, { val: 3, label: '2/10' }, { val: 4, label: '4/10' }], correct: 1, ok: '5/10 − 2/10 = 3/10.' },
        { q: '1/2 + 2/5 = ?', options: [{ val: 1, label: '9/10' }, { val: 2, label: '3/7' }, { val: 3, label: '2/7' }, { val: 4, label: '1' }], correct: 1, ok: '5/10 + 4/10 = 9/10.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Quy đồng mẫu số là gì?', a: 'Là đưa hai phân số về cùng một mẫu số để dễ cộng trừ. Vd 1/5 và 1/2 quy đồng thành 2/10 và 5/10 nhé! 🦅' },
      { q: 'Mẫu số chung lấy thế nào?', a: 'Cách an toàn là lấy tích hai mẫu số. Vd mẫu chung của 5 và 2 là 10.' },
      { q: 'Cộng xong có cần rút gọn không?', a: 'Có nha, nếu kết quả chưa tối giản thì em rút gọn cho gọn đẹp.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: quy đồng xong em chỉ cộng hoặc trừ phần tử số, giữ nguyên mẫu nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Quy đồng 1/5 và 1/2 thì mẫu số chung là?', options: [{ l: 'A', v: 10 }, { l: 'B', v: 7 }, { l: 'C', v: 5 }, { l: 'D', v: 2 }], correct: 10, hint: 'Lấy tích hai mẫu số.' },
      { type: 'fill_blank', label: 'Điền số', q: '1/2 + 1/2 = ? (kết quả là số tự nhiên)', correct: 1, hint: '2/2 bằng mấy?' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1/5 + 1/2 = 7/10. Đúng hay sai?', correct: true, hint: '2/10 + 5/10.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Chia đều 5 chiếc bánh cho 6 người, mỗi người được a/6 chiếc. Tử số a là?', options: [{ l: 'A', v: 5 }, { l: 'B', v: 6 }, { l: 'C', v: 1 }, { l: 'D', v: 30 }], correct: 5, hint: '5 chiếc chia 6 người là 5/6.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '1/2 + 2/5 = 9/10. Tử số của kết quả là?', options: [{ l: 'A', v: 9 }, { l: 'B', v: 3 }, { l: 'C', v: 7 }, { l: 'D', v: 10 }], correct: 9, hint: '5/10 + 4/10.' }
    ]
  },

  'lop5-bai-7': {
    grade: 5, no: 7, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Hỗn số',
    desc: 'Nhận biết hỗn số, đổi hỗn số ra phân số và ngược lại.',
    icon: '🔢',
    topic: '➗ Chủ đề: Phân số',
    banner: 'Hỗn số gồm phần nguyên và phần phân số bé hơn 1, cùng tìm hiểu nhé!',
    steps: ['Nhận biết', 'Đổi hỗn số', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '📘 Hỗn số là gì?', sub: 'Ghi nhớ nhé!', html: '<p>Hỗn số gồm <b>phần nguyên</b> và <b>phần phân số</b> (phần phân số luôn bé hơn 1). Vd 1 và 1/4 viết gọn là <b>1 1/4</b>.</p><p>Đổi hỗn số ra phân số: 2 7/10 = (2 × 10 + 7)/10 = <b>27/10</b>.</p><p>Đổi phân số ra hỗn số: 31/10 = <b>3 1/10</b>.</p>' },
      { type: 'mcq', title: '🔎 Hỗn số và phân số', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Chia đều 5 chiếc bánh cho 4 bạn, mỗi bạn được mấy chiếc?', options: [{ val: 1, label: '1 1/4' }, { val: 2, label: '1 1/2' }, { val: 3, label: '2 1/4' }, { val: 4, label: '1 1/5' }], correct: 1, ok: '5/4 = 1 1/4 chiếc bánh.' },
        { q: 'Đổi hỗn số 2 7/10 ra phân số?', options: [{ val: 1, label: '27/10' }, { val: 2, label: '9/10' }, { val: 3, label: '14/10' }, { val: 4, label: '72/10' }], correct: 1, ok: '(2 × 10 + 7)/10 = 27/10.' },
        { q: 'Đổi 31/10 ra hỗn số?', options: [{ val: 1, label: '3 1/10' }, { val: 2, label: '1 3/10' }, { val: 3, label: '31 1/10' }, { val: 4, label: '3 10/1' }], correct: 1, ok: '31 : 10 = 3 dư 1 nên là 3 1/10.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Hỗn số gồm những gì?', a: 'Gồm phần nguyên và phần phân số, trong đó phần phân số luôn bé hơn 1 nhé! 🦅' },
      { q: 'Đổi hỗn số ra phân số?', a: 'Lấy phần nguyên nhân mẫu rồi cộng tử, giữ nguyên mẫu. Vd 2 7/10 = 27/10.' },
      { q: 'Đổi phân số ra hỗn số?', a: 'Lấy tử chia mẫu: thương là phần nguyên, số dư là tử mới. Vd 31/10 = 3 1/10.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: phần phân số của hỗn số luôn phải bé hơn 1, không được viết 1 5/4 nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Đổi hỗn số 2 7/10 ra phân số thì tử số là?', options: [{ l: 'A', v: 27 }, { l: 'B', v: 9 }, { l: 'C', v: 72 }, { l: 'D', v: 17 }], correct: 27, hint: '2 × 10 + 7.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Phần nguyên của hỗn số 1 1/4 là?', correct: 1, hint: 'Số đứng trước phần phân số.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Phần phân số của hỗn số luôn bé hơn 1. Đúng hay sai?', correct: true, hint: 'Đây là quy tắc của hỗn số.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Đổi 31/10 ra hỗn số thì phần nguyên là?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 1 }, { l: 'C', v: 31 }, { l: 'D', v: 10 }], correct: 3, hint: '31 : 10 = 3 dư 1.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hỗn số 1 1/4 có mẫu số của phần phân số là?', options: [{ l: 'A', v: 4 }, { l: 'B', v: 1 }, { l: 'C', v: 5 }, { l: 'D', v: 14 }], correct: 4, hint: 'Số dưới gạch ngang của 1/4.' }
    ]
  },

  'lop5-bai-8': {
    grade: 5, no: 8, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Ôn tập hình học và đo lường',
    desc: 'Đổi đơn vị đo, nhận biết góc và tính diện tích hình chữ nhật.',
    icon: '📐',
    topic: '📐 Chủ đề: Ôn tập hình học, đo lường & luyện tập',
    banner: 'Ôn lại đơn vị đo, các loại góc và cách tính diện tích nhé!',
    steps: ['Đổi đơn vị', 'Góc', 'Diện tích'],
    blocks: [
      { type: 'info', title: '📘 Đơn vị đo và diện tích', sub: 'Nhớ lại nhé!', html: '<p><b>Khối lượng:</b> 1 tấn = 10 tạ = 100 yến = 1 000 kg.</p><p><b>Thời gian:</b> 1 thế kỷ = 100 năm, 1 giờ = 60 phút.</p><p><b>Diện tích hình chữ nhật</b> = dài × rộng. Vd 12 m × 7 m = 84 m².</p>' },
      { type: 'mcq', title: '🔎 Đổi đơn vị và tính', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '2 tấn = ? kg', options: [2000, 200, 20, 20000], correct: 2000, ok: '1 tấn = 1 000 kg nên 2 tấn = 2 000 kg.' },
        { q: '5 giờ = ? phút', options: [300, 50, 500, 250], correct: 300, ok: '1 giờ = 60 phút nên 5 giờ = 300 phút.' },
        { q: 'Mảnh đất hình chữ nhật 12 m × 7 m có diện tích bao nhiêu m²?', options: [84, 38, 76, 19], correct: 84, ok: '12 × 7 = 84 m².' }
      ] },
      { type: 'sequence', title: '✏️ Đổi giờ ra phút', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: 'Số phút của 1, 2, 3, 4 giờ:', slots: [60, 120, { blank: 180 }, { blank: 240 }] }
      ] }
    ],
    ai: { chips: [
      { q: '1 tấn bằng bao nhiêu kg?', a: '1 tấn = 1 000 kg em nhé! Còn 1 tạ = 100 kg, 1 yến = 10 kg. 🦅' },
      { q: 'Diện tích hình chữ nhật tính sao?', a: 'Em lấy chiều dài nhân chiều rộng (cùng đơn vị). Vd 12 m × 7 m = 84 m².' },
      { q: 'Các loại góc?', a: 'Góc nhọn bé hơn góc vuông (90 độ), góc vuông đúng 90 độ, góc tù lớn hơn góc vuông.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: khi đổi đơn vị, em nhớ đơn vị lớn đổi ra đơn vị bé thì nhân nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mảnh đất 84 m² chia đều thành 7 ô. Mỗi ô bao nhiêu m²?', options: [{ l: 'A', v: 12 }, { l: 'B', v: 7 }, { l: 'C', v: 84 }, { l: 'D', v: 14 }], correct: 12, hint: '84 : 7.' },
      { type: 'fill_blank', label: 'Điền số', q: '1 thế kỷ bằng bao nhiêu năm?', correct: 100, hint: 'Một trăm năm.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '2 tấn = 2 000 kg. Đúng hay sai?', correct: true, hint: '1 tấn = 1 000 kg.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '3 yến = ? kg', options: [{ l: 'A', v: 30 }, { l: 'B', v: 3 }, { l: 'C', v: 300 }, { l: 'D', v: 13 }], correct: 30, hint: '1 yến = 10 kg.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình chữ nhật dài 12 m, rộng 7 m có diện tích?', options: [{ l: 'A', v: 84 }, { l: 'B', v: 19 }, { l: 'C', v: 38 }, { l: 'D', v: 76 }], correct: 84, hint: 'Dài nhân rộng.' }
    ]
  },

  'lop5-bai-9': {
    grade: 5, no: 9, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Luyện tập chung',
    desc: 'Ôn tổng hợp số tự nhiên, phân số, hỗn số và giải toán thực tế.',
    icon: '🧮',
    topic: '📐 Chủ đề: Ôn tập hình học, đo lường & luyện tập',
    banner: 'Tổng hợp kiến thức đã học để luyện tập thật chắc nào!',
    steps: ['Giá trị số', 'Phép tính', 'Giải toán'],
    blocks: [
      { type: 'info', title: '📘 Ôn tập tổng hợp', sub: 'Cùng nhớ lại nhé!', html: '<p>Trong số <b>960 730</b>, chữ số 6 ở hàng chục nghìn có giá trị <b>60 000</b>.</p><p>Đổi phân số ra hỗn số: 143/100 = <b>1 43/100</b>.</p><p>So sánh phân số khác mẫu, em quy đồng về cùng mẫu (vd mẫu 36) rồi so tử số.</p>' },
      { type: 'mcq', title: '🔎 Luyện tập', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Trong số 960 730, chữ số 6 có giá trị bao nhiêu?', options: [6, 60, 6000, 60000], correct: 60000, ok: 'Chữ số 6 ở hàng chục nghìn nên có giá trị 60 000.' },
        { q: 'Đổi 143/100 ra hỗn số?', options: [{ val: 1, label: '1 43/100' }, { val: 2, label: '14 3/100' }, { val: 3, label: '143 1/100' }, { val: 4, label: '1 4/100' }], correct: 1, ok: '143 : 100 = 1 dư 43 nên là 1 43/100.' },
        { q: 'Phân số nào bé nhất: 2/3, 11/12, 7/9, 23/36?', options: [{ val: 1, label: '23/36' }, { val: 2, label: '2/3' }, { val: 3, label: '7/9' }, { val: 4, label: '11/12' }], correct: 1, ok: 'Quy đồng về mẫu 36: 24/36, 33/36, 28/36, 23/36 nên 23/36 bé nhất.' }
      ] }
    ],
    ai: { chips: [
      { q: 'So sánh nhiều phân số thế nào?', a: 'Em quy đồng tất cả về cùng một mẫu rồi so sánh các tử số với nhau nhé! 🦅' },
      { q: 'Tính trung bình nhiều số?', a: 'Lấy tổng tất cả rồi chia cho số lượng số. Vd 6 xe nhỏ và 9 xe lớn thì tính tổng học sinh chia 15 xe.' },
      { q: 'Đổi phân số ra hỗn số?', a: 'Lấy tử chia mẫu: thương là phần nguyên, số dư là tử mới. Vd 143/100 = 1 43/100.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: với bài giải, em đọc kỹ đề và làm từng bước một nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '415 076 + 92 380 = ?', options: [{ l: 'A', v: 507456 }, { l: 'B', v: 507356 }, { l: 'C', v: 517456 }, { l: 'D', v: 506456 }], correct: 507456, hint: 'Đặt tính thẳng hàng rồi cộng.' },
      { type: 'fill_blank', label: 'Điền số', q: '39 872 : 56 = ?', correct: 712, hint: '56 × 712 = 39 872.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Trong số 960 730, chữ số 6 có giá trị 60 000. Đúng hay sai?', correct: true, hint: 'Chữ số 6 ở hàng chục nghìn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Nam mua 2 bút bi 4 500 đồng/chiếc và 7 quyển vở 7 000 đồng/quyển, hết bao nhiêu tiền?', options: [{ l: 'A', v: 58000 }, { l: 'B', v: 49000 }, { l: 'C', v: 53000 }, { l: 'D', v: 60000 }], correct: 58000, hint: '2 × 4 500 + 7 × 7 000.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '6 xe nhỏ chở 35 học sinh và 9 xe lớn chở 40 học sinh. Tổng số học sinh là?', options: [{ l: 'A', v: 570 }, { l: 'B', v: 560 }, { l: 'C', v: 580 }, { l: 'D', v: 500 }], correct: 570, hint: '6 × 35 + 9 × 40.' }
    ]
  },

  'lop5-bai-10': {
    grade: 5, no: 10, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Khái niệm số thập phân',
    desc: 'Nhận biết số thập phân, phần nguyên, phần thập phân và các hàng.',
    icon: '🔢',
    topic: '🔢 Chủ đề: Số thập phân',
    banner: 'Bắt đầu hành trình với số thập phân và dấu phẩy thần kỳ nào!',
    steps: ['Nhận biết', 'Cấu tạo', 'Đọc viết'],
    blocks: [
      { type: 'info', title: '📘 Số thập phân', sub: 'Cùng tìm hiểu nhé!', html: '<p>Số thập phân gồm <b>phần nguyên</b> và <b>phần thập phân</b>, ngăn cách bởi <b>dấu phẩy</b>. Vd 9,17 có phần nguyên 9 và phần thập phân 17.</p><p>118 cm = 1,18 m. Phân số thập phân 1675/1000 viết là <b>1,675</b>.</p><p>Sau dấu phẩy lần lượt là hàng phần mười, phần trăm, phần nghìn.</p>' },
      { type: 'mcq', title: '🔎 Đọc và viết số thập phân', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Tô 3 dải và 8 ô (trên 100 ô) viết thành số thập phân nào?', options: [{ val: 1, label: '0,38' }, { val: 2, label: '3,8' }, { val: 3, label: '0,038' }, { val: 4, label: '38' }], correct: 1, ok: '3/10 + 8/100 = 0,38.' },
        { q: 'Phân số thập phân 1675/1000 viết là số thập phân nào?', options: [{ val: 1, label: '1,675' }, { val: 2, label: '16,75' }, { val: 3, label: '0,1675' }, { val: 4, label: '167,5' }], correct: 1, ok: 'Mẫu là 1 000 nên có 3 chữ số phần thập phân: 1,675.' },
        { q: 'Trong số 325,431, chữ số ở hàng phần mười là?', options: [4, 3, 1, 5], correct: 4, ok: 'Chữ số ngay sau dấu phẩy là hàng phần mười: số 4.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Số thập phân là gì?', a: 'Là số có phần nguyên và phần thập phân, ngăn cách bởi dấu phẩy, vd 1,18 nhé! 🦅' },
      { q: 'Phần nào là phần thập phân?', a: 'Là phần đứng sau dấu phẩy. Vd 9,17 thì 17 là phần thập phân.' },
      { q: 'Các hàng sau dấu phẩy?', a: 'Lần lượt là hàng phần mười, phần trăm, phần nghìn em nhé.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em đọc phần nguyên trước, rồi đọc phẩy, rồi đọc phần thập phân nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Phần nguyên của số 9,17 là?', options: [{ l: 'A', v: 9 }, { l: 'B', v: 17 }, { l: 'C', v: 1 }, { l: 'D', v: 7 }], correct: 9, hint: 'Phần trước dấu phẩy.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Trong số 325,431, chữ số hàng phần mười là số nào?', correct: 4, hint: 'Ngay sau dấu phẩy.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '118 cm = 1,18 m. Đúng hay sai?', correct: true, hint: '1 m = 100 cm.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '0,3 = …/10. Tử số là?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 10 }, { l: 'C', v: 30 }, { l: 'D', v: 1 }], correct: 3, hint: '0,3 là ba phần mười.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số bốn trăm mười lăm phẩy hai viết là 415,2. Chữ số phần thập phân là?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 4 }, { l: 'C', v: 5 }, { l: 'D', v: 1 }], correct: 2, hint: 'Phần sau dấu phẩy.' }
    ]
  },

  'lop5-bai-11': {
    grade: 5, no: 11, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'So sánh các số thập phân',
    desc: 'So sánh số thập phân theo phần nguyên rồi đến từng hàng phần thập phân.',
    icon: '⚖️',
    topic: '🔢 Chủ đề: Số thập phân',
    banner: 'So sánh phần nguyên trước, nếu bằng nhau mới so phần thập phân nhé!',
    steps: ['Quy tắc', 'Sắp xếp', 'Vận dụng'],
    blocks: [
      { type: 'info', title: '📘 Cách so sánh', sub: 'Quy tắc quan trọng!', html: '<p>So sánh hai số thập phân: <b>so phần nguyên trước</b>; nếu phần nguyên bằng nhau thì so từng hàng phần thập phân từ trái sang.</p><p>Vd 3,5 > 2,75 vì 3 > 2.</p><p>Thêm hoặc bớt chữ số 0 ở tận cùng bên phải phần thập phân thì giá trị không đổi: 0,7 = 0,70.</p>' },
      { type: 'mcq', title: '🔎 So sánh số thập phân', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Số nào lớn hơn: 3,5 hay 2,75?', options: [{ val: 1, label: '3,5' }, { val: 2, label: '2,75' }], correct: 1, ok: 'Phần nguyên 3 > 2 nên 3,5 > 2,75.' },
        { q: 'Số nào lớn hơn: 2,75 hay 2,29?', options: [{ val: 1, label: '2,75' }, { val: 2, label: '2,29' }], correct: 1, ok: 'Phần nguyên bằng nhau, hàng phần mười 7 > 2 nên 2,75 lớn hơn.' },
        { q: 'Số nào lớn nhất: 3,604; 2,875; 2,857; 3,106?', options: [{ val: 1, label: '3,604' }, { val: 2, label: '3,106' }, { val: 3, label: '2,875' }, { val: 4, label: '2,857' }], correct: 1, ok: 'Phần nguyên 3 lớn hơn 2; trong hai số phần nguyên 3 thì 3,604 > 3,106.' }
      ] }
    ],
    ai: { chips: [
      { q: 'So sánh số thập phân thế nào?', a: 'So phần nguyên trước, nếu bằng nhau thì so từng hàng phần thập phân từ trái sang phải nhé! 🦅' },
      { q: 'Thêm số 0 sau cùng có đổi giá trị không?', a: 'Không nha! 0,7 = 0,70 = 0,700, giá trị vẫn như nhau.' },
      { q: 'Sắp xếp tăng dần là sao?', a: 'Là xếp từ số bé nhất đến số lớn nhất em nhé.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: nếu khó so, em thêm số 0 cho hai số có cùng số chữ số phần thập phân rồi so nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '0,7 bằng mấy phần mười?', options: [{ l: 'A', v: 7 }, { l: 'B', v: 70 }, { l: 'C', v: 0 }, { l: 'D', v: 1 }], correct: 7, hint: '0,7 = 7/10.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền chữ số vào ô trống để 13,7 = 13,7? (hai số bằng nhau).', correct: 0, hint: 'Thêm số 0 ở tận cùng không đổi giá trị.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '3,5 > 2,75. Đúng hay sai?', correct: true, hint: 'So phần nguyên trước.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Ba bạn nặng 31,9 / 32,5 / 34,7 kg. Số kg lớn nhất có phần nguyên là?', options: [{ l: 'A', v: 34 }, { l: 'B', v: 32 }, { l: 'C', v: 31 }, { l: 'D', v: 35 }], correct: 34, hint: 'So phần nguyên để tìm số lớn nhất.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Rút gọn 13,0500 thành dạng gọn nhất 13,05 thì phần thập phân có mấy chữ số?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 4 }, { l: 'C', v: 3 }, { l: 'D', v: 1 }], correct: 2, hint: 'Bỏ các số 0 thừa ở tận cùng.' }
    ]
  },

  'lop5-bai-12': {
    grade: 5, no: 12, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Viết số đo đại lượng dưới dạng số thập phân',
    desc: 'Đổi số đo có hai đơn vị thành số thập phân qua bước hỗn số.',
    icon: '📏',
    topic: '🔢 Chủ đề: Số thập phân',
    banner: 'Biến số đo hai đơn vị thành số thập phân thật gọn gàng nhé!',
    steps: ['Độ dài', 'Khối lượng', 'Diện tích'],
    blocks: [
      { type: 'info', title: '📘 Đổi ra số thập phân', sub: 'Qua bước hỗn số!', html: '<p>2 m 15 cm = 2 15/100 m = <b>2,15 m</b>.</p><p>1 kg 250 g = 1 250/1000 kg = <b>1,25 kg</b>.</p><p>5 m² 9 dm² = 5 9/100 m² = <b>5,09 m²</b> (vì 1 m² = 100 dm²).</p>' },
      { type: 'mcq', title: '🔎 Viết dưới dạng số thập phân', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '2 m 15 cm = ? m', options: [{ val: 1, label: '2,15' }, { val: 2, label: '2,015' }, { val: 3, label: '21,5' }, { val: 4, label: '2,5' }], correct: 1, ok: '15 cm = 15/100 m nên 2 m 15 cm = 2,15 m.' },
        { q: '1 kg 250 g = ? kg', options: [{ val: 1, label: '1,25' }, { val: 2, label: '1,025' }, { val: 3, label: '12,5' }, { val: 4, label: '1,5' }], correct: 1, ok: '250 g = 250/1000 kg = 0,25 kg nên 1 kg 250 g = 1,25 kg.' },
        { q: '5 m² 9 dm² = ? m²', options: [{ val: 1, label: '5,09' }, { val: 2, label: '5,9' }, { val: 3, label: '0,59' }, { val: 4, label: '59' }], correct: 1, ok: '1 m² = 100 dm² nên 9 dm² = 9/100 m², được 5,09 m².' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đổi 2 m 15 cm ra mét?', a: 'Vì 1 m = 100 cm nên 15 cm = 0,15 m, được 2,15 m nhé! 🦅' },
      { q: 'Đổi khối lượng dùng mẫu số bao nhiêu?', a: 'Vì 1 kg = 1 000 g nên mẫu số là 1 000. Vd 250 g = 0,25 kg.' },
      { q: 'Đổi diện tích thì mẫu số là?', a: 'Vì 1 m² = 100 dm² nên mẫu số là 100. Vd 9 dm² = 0,09 m².' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em xác định 1 đơn vị lớn bằng bao nhiêu đơn vị bé để chọn mẫu số đúng nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '2 m 15 cm = a,bc m. Phần nguyên a bằng?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 15 }, { l: 'C', v: 21 }, { l: 'D', v: 5 }], correct: 2, hint: 'Số mét nguyên.' },
      { type: 'fill_blank', label: 'Điền số', q: '1 m bằng bao nhiêu cm?', correct: 100, hint: 'Một trăm xăng-ti-mét.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 kg 250 g = 1,25 kg. Đúng hay sai?', correct: true, hint: '250 g = 0,25 kg.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '2 m 15 cm đổi ra cm là?', options: [{ l: 'A', v: 215 }, { l: 'B', v: 2015 }, { l: 'C', v: 2150 }, { l: 'D', v: 25 }], correct: 215, hint: '2 m = 200 cm, cộng 15 cm.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '518 ml = 0,518 l. Vậy 1 l bằng bao nhiêu ml?', options: [{ l: 'A', v: 1000 }, { l: 'B', v: 100 }, { l: 'C', v: 10 }, { l: 'D', v: 500 }], correct: 1000, hint: 'Mẫu số là 1 000.' }
    ]
  },

  'lop5-bai-13': {
    grade: 5, no: 13, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Làm tròn số thập phân',
    desc: 'Làm tròn số thập phân đến số tự nhiên, hàng phần mười, phần trăm.',
    icon: '🎯',
    topic: '🔢 Chủ đề: Số thập phân',
    banner: 'Nhìn chữ số ngay sau hàng cần làm tròn để quyết định nhé!',
    steps: ['Quy tắc 5', 'Làm tròn', 'Vận dụng'],
    blocks: [
      { type: 'info', title: '📘 Quy tắc làm tròn', sub: 'Ghi nhớ nhé!', html: '<p>Muốn làm tròn, em nhìn <b>chữ số ngay sau hàng cần làm tròn</b>:</p><p>- Nếu chữ số đó <b>bé hơn 5</b>: giữ nguyên (làm tròn xuống).</p><p>- Nếu chữ số đó <b>từ 5 trở lên</b>: tăng thêm 1 đơn vị (làm tròn lên).</p><p>Vd 31,2 làm tròn đến số tự nhiên được 31; 31,75 được 32.</p>' },
      { type: 'mcq', title: '🔎 Làm tròn số', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Làm tròn 31,2 đến số tự nhiên gần nhất?', options: [31, 32, 30, 33], correct: 31, ok: 'Chữ số phần mười là 2 (bé hơn 5) nên giữ nguyên 31.' },
        { q: 'Làm tròn 31,75 đến số tự nhiên gần nhất?', options: [32, 31, 33, 30], correct: 32, ok: 'Chữ số phần mười là 7 (lớn hơn 5) nên tăng lên 32.' },
        { q: 'Làm tròn 137,8 đến số tự nhiên gần nhất?', options: [138, 137, 140, 130], correct: 138, ok: 'Chữ số phần mười là 8 nên làm tròn lên 138.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Làm tròn dựa vào đâu?', a: 'Dựa vào chữ số ngay sau hàng cần làm tròn: bé hơn 5 thì giữ, từ 5 trở lên thì tăng 1 nhé! 🦅' },
      { q: 'Làm tròn 2,52 ra số tự nhiên?', a: 'Chữ số phần mười là 5 nên làm tròn lên, được 3.' },
      { q: 'Làm tròn xuống là gì?', a: 'Là giữ nguyên hàng cần làm tròn khi chữ số phía sau bé hơn 5.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em khoanh tròn chữ số ngay sau hàng cần làm tròn để dễ quyết định nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Làm tròn 31,2 kg đến số tự nhiên gần nhất?', options: [{ l: 'A', v: 31 }, { l: 'B', v: 32 }, { l: 'C', v: 30 }, { l: 'D', v: 33 }], correct: 31, hint: 'Chữ số phần mười là 2.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Làm tròn 6,3 đến số tự nhiên gần nhất được số nào?', correct: 6, hint: 'Phần mười là 3, bé hơn 5.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Làm tròn 139,7 đến số tự nhiên gần nhất được 140. Đúng hay sai?', correct: true, hint: 'Phần mười là 7, lớn hơn 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Làm tròn 2,52 đến số tự nhiên gần nhất?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 2 }, { l: 'C', v: 4 }, { l: 'D', v: 25 }], correct: 3, hint: 'Phần mười là 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Làm tròn 31,75 đến số tự nhiên gần nhất?', options: [{ l: 'A', v: 32 }, { l: 'B', v: 31 }, { l: 'C', v: 33 }, { l: 'D', v: 30 }], correct: 32, hint: 'Phần mười là 7.' }
    ]
  },

  'lop5-bai-14': {
    grade: 5, no: 14, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Luyện tập chung',
    desc: 'Ôn cấu tạo, đổi đơn vị, làm tròn và so sánh số thập phân.',
    icon: '🧮',
    topic: '🔢 Chủ đề: Số thập phân',
    banner: 'Tổng hợp kiến thức về số thập phân để luyện tập nào!',
    steps: ['Cấu tạo', 'Đổi đơn vị', 'So sánh'],
    blocks: [
      { type: 'info', title: '📘 Ôn tập số thập phân', sub: 'Nhớ lại nhé!', html: '<p>Số gồm 3 chục, 7 đơn vị, 3 phần mười, 6 phần trăm, 4 phần nghìn viết là <b>37,364</b>.</p><p>Số thập phân bé hơn 1 có phần nguyên là 0, vd 0,157.</p><p>3 m 45 cm = 345 cm. Khi so sánh, em so phần nguyên trước.</p>' },
      { type: 'mcq', title: '🔎 Luyện tập tổng hợp', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Số gồm 3 chục, 7 đơn vị, 3 phần mười, 6 phần trăm, 4 phần nghìn viết là?', options: [{ val: 1, label: '37,364' }, { val: 2, label: '37,634' }, { val: 3, label: '3,7364' }, { val: 4, label: '373,64' }], correct: 1, ok: 'Phần nguyên 37, phần thập phân 364, được 37,364.' },
        { q: 'Số nào bé hơn 1?', options: [{ val: 1, label: '0,571' }, { val: 2, label: '1,57' }, { val: 3, label: '5,71' }, { val: 4, label: '7,15' }], correct: 1, ok: 'Số có phần nguyên 0 thì bé hơn 1: 0,571.' },
        { q: 'Số nào bé nhất: 3,527; 3,571; 2,752; 3,275?', options: [{ val: 1, label: '2,752' }, { val: 2, label: '3,275' }, { val: 3, label: '3,527' }, { val: 4, label: '3,571' }], correct: 1, ok: 'Phần nguyên 2 bé hơn 3 nên 2,752 bé nhất.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Viết số từ các hàng thế nào?', a: 'Em ghép phần nguyên và phần thập phân theo đúng hàng, đặt dấu phẩy ở giữa nhé! 🦅' },
      { q: 'Số bé hơn 1 nhận biết sao?', a: 'Số bé hơn 1 có phần nguyên là 0, vd 0,571.' },
      { q: 'Đổi 3 m 45 cm ra cm?', a: '3 m = 300 cm, cộng 45 cm là 345 cm em nhé.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: em viết rõ từng hàng rồi đặt dấu phẩy cho đúng vị trí nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số gồm 3 chục và 7 đơn vị thì phần nguyên là?', options: [{ l: 'A', v: 37 }, { l: 'B', v: 3 }, { l: 'C', v: 7 }, { l: 'D', v: 30 }], correct: 37, hint: '3 chục + 7 đơn vị.' },
      { type: 'fill_blank', label: 'Điền số', q: '3 m 45 cm = ? cm', correct: 345, hint: '3 m = 300 cm.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '0,157 bé hơn 1. Đúng hay sai?', correct: true, hint: 'Phần nguyên bằng 0.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số bé nhất trong 3,527; 2,752; 3,275 có phần nguyên là?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 5 }, { l: 'D', v: 7 }], correct: 2, hint: 'So phần nguyên để tìm số bé nhất.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '518 ml = 0,518 l. Vậy 1 l bằng bao nhiêu ml?', options: [{ l: 'A', v: 1000 }, { l: 'B', v: 100 }, { l: 'C', v: 500 }, { l: 'D', v: 10 }], correct: 1000, hint: 'Mẫu số là 1 000.' }
    ]
  },

  'lop5-bai-15': {
    grade: 5, no: 15, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Ki-lô-mét vuông. Héc-ta',
    desc: 'Nhận biết và đổi các đơn vị đo diện tích lớn km², ha.',
    icon: '🗺️',
    topic: '📐 Chủ đề: Đo diện tích',
    banner: 'Khám phá những đơn vị đo diện tích thật lớn dùng cho đất đai nào!',
    steps: ['km²', 'ha', 'Vận dụng'],
    blocks: [
      { type: 'info', title: '📘 km² và ha', sub: 'Đơn vị diện tích lớn!', html: '<p><b>1 km²</b> là diện tích hình vuông cạnh 1 km: 1 km² = <b>1 000 000 m²</b>.</p><p><b>1 ha</b> (héc-ta) là diện tích hình vuông cạnh 100 m: 1 ha = <b>10 000 m²</b>.</p><p>Mối quan hệ: <b>1 km² = 100 ha</b>.</p>' },
      { type: 'mcq', title: '🔎 Đổi đơn vị diện tích lớn', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '1 km² = ? m²', options: [1000000, 10000, 100000, 1000], correct: 1000000, ok: '1 km² = 1 000 000 m².' },
        { q: '1 ha = ? m²', options: [10000, 1000, 100000, 100], correct: 10000, ok: '1 ha = 10 000 m².' },
        { q: 'Ba mảnh đất 7 km × 3 km; 5 km × 5 km; 6 km × 4 km. Mảnh nào lớn nhất (km²)?', options: [25, 21, 24, 30], correct: 25, ok: 'Diện tích lần lượt 21, 25, 24 km² nên 25 km² lớn nhất.' }
      ] },
      { type: 'sequence', title: '✏️ Đổi km² ra ha', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: 'Số ha của 1, 2, 3, 4 km²:', slots: [100, 200, { blank: 300 }, { blank: 400 }] }
      ] }
    ],
    ai: { chips: [
      { q: '1 km² bằng bao nhiêu m²?', a: '1 km² = 1 000 000 m² (một triệu mét vuông) em nhé! 🦅' },
      { q: 'Héc-ta là gì?', a: 'Là diện tích hình vuông cạnh 100 m: 1 ha = 10 000 m², thường dùng đo ruộng, rừng.' },
      { q: '1 km² bằng bao nhiêu ha?', a: '1 km² = 100 ha em nhé.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: km² và ha là đơn vị lớn, hai đơn vị này cách nhau 100 lần nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '1 km² = ? ha', options: [{ l: 'A', v: 100 }, { l: 'B', v: 1000 }, { l: 'C', v: 10 }, { l: 'D', v: 10000 }], correct: 100, hint: 'Một km² bằng một trăm héc-ta.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Mảnh đất hình vuông cạnh 200 m có diện tích bao nhiêu m²?', correct: 40000, hint: '200 × 200.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 ha = 10 000 m². Đúng hay sai?', correct: true, hint: 'Hình vuông cạnh 100 m.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '40 000 m² = ? ha', options: [{ l: 'A', v: 4 }, { l: 'B', v: 40 }, { l: 'C', v: 400 }, { l: 'D', v: 14 }], correct: 4, hint: 'Chia cho 10 000.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mảnh đất 5 km × 5 km có diện tích bao nhiêu km²?', options: [{ l: 'A', v: 25 }, { l: 'B', v: 10 }, { l: 'C', v: 20 }, { l: 'D', v: 55 }], correct: 25, hint: 'Cạnh nhân cạnh.' }
    ]
  },

  'lop5-bai-16': {
    grade: 5, no: 16, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Các đơn vị đo diện tích',
    desc: 'Hệ thống các đơn vị đo diện tích và quan hệ gấp 100 lần.',
    icon: '📐',
    topic: '📐 Chủ đề: Đo diện tích',
    banner: 'Hai đơn vị diện tích liền nhau hơn kém nhau 100 lần, cùng nhớ nhé!',
    steps: ['Hệ thống', 'Quan hệ 100', 'Vận dụng'],
    blocks: [
      { type: 'info', title: '📘 Quan hệ giữa các đơn vị', sub: 'Quy tắc 100!', html: '<p>Các đơn vị đo diện tích từ lớn đến bé: km², ha, m², dm², cm², mm².</p><p>Mỗi đơn vị diện tích gấp <b>100 lần</b> đơn vị bé hơn liền sau:</p><p><b>1 m² = 100 dm²</b>, <b>1 dm² = 100 cm²</b>.</p>' },
      { type: 'mcq', title: '🔎 Đổi đơn vị diện tích', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '1 m² = ? dm²', options: [100, 10, 1000, 12], correct: 100, ok: '1 m² = 100 dm².' },
        { q: '4 m² = ? dm²', options: [400, 40, 4000, 14], correct: 400, ok: '4 × 100 = 400 dm².' },
        { q: '1 dm² = ? cm²', options: [100, 10, 1000, 1], correct: 100, ok: '1 dm² = 100 cm².' }
      ] },
      { type: 'sequence', title: '✏️ Đổi m² ra dm²', sub: 'Điền số còn thiếu rồi bấm Kiểm tra nhé!', rows: [
        { label: 'Số dm² của 1, 2, 3, 4 m²:', slots: [100, 200, { blank: 300 }, { blank: 400 }] }
      ] }
    ],
    ai: { chips: [
      { q: 'Hai đơn vị diện tích liền nhau hơn kém bao nhiêu?', a: 'Hơn kém nhau 100 lần em nhé, khác với đơn vị độ dài chỉ 10 lần! 🦅' },
      { q: '1 m² bằng bao nhiêu dm²?', a: '1 m² = 100 dm² em nhé.' },
      { q: 'Vì sao là 100 lần?', a: 'Vì hình vuông 1 m = 10 dm, nên 1 m² chứa 10 × 10 = 100 ô vuông 1 dm².' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: đổi từ đơn vị lớn ra bé thì nhân 100, từ bé ra lớn thì chia 100 nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '1 m² = ? dm²', options: [{ l: 'A', v: 100 }, { l: 'B', v: 10 }, { l: 'C', v: 1000 }, { l: 'D', v: 12 }], correct: 100, hint: 'Gấp 100 lần.' },
      { type: 'fill_blank', label: 'Điền số', q: '4 m² = ? dm²', correct: 400, hint: '4 × 100.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '1 dm² = 100 cm². Đúng hay sai?', correct: true, hint: 'Hai đơn vị liền nhau hơn kém 100 lần.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Cửa sổ dài 1 m, rộng 3/5 m có diện tích 3/5 m². Đổi ra dm² là?', options: [{ l: 'A', v: 60 }, { l: 'B', v: 30 }, { l: 'C', v: 100 }, { l: 'D', v: 6 }], correct: 60, hint: '3/5 m² = 3/5 × 100 dm².' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bác Tư có mảnh đất 1 ha (10 000 m²), dùng 9/10 trồng cây. Phần còn lại xây nhà bao nhiêu m²?', options: [{ l: 'A', v: 1000 }, { l: 'B', v: 9000 }, { l: 'C', v: 100 }, { l: 'D', v: 10000 }], correct: 1000, hint: 'Còn lại 1/10 của 10 000.' }
    ]
  },

  'lop5-bai-17': {
    grade: 5, no: 17, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Thực hành và trải nghiệm với đơn vị đo đại lượng',
    desc: 'Vận dụng diện tích vào lát sàn, làm giá sách, cắt kính.',
    icon: '🛠️',
    topic: '📐 Chủ đề: Đo diện tích',
    banner: 'Cùng làm kiến trúc sư nhí: đo đạc, tính diện tích và chi phí nào!',
    steps: ['Lát sàn', 'Cắt kính', 'Tính tiền'],
    blocks: [
      { type: 'info', title: '📘 Tính diện tích và chi phí', sub: 'Vận dụng thực tế!', html: '<p>Tấm kính nhỏ dài 6 dm, rộng 4 dm có diện tích 6 × 4 = <b>24 dm²</b>.</p><p>5 tấm kính như vậy có tổng diện tích 24 × 5 = <b>120 dm²</b>.</p><p>Lát sàn: cần tính diện tích rồi nhân với đơn giá để ra tổng tiền.</p>' },
      { type: 'mcq', title: '🔎 Thực hành tính toán', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Tấm kính dài 6 dm, rộng 4 dm có diện tích bao nhiêu dm²?', options: [24, 10, 20, 64], correct: 24, ok: '6 × 4 = 24 dm².' },
        { q: '5 tấm kính, mỗi tấm 24 dm². Tổng diện tích là?', options: [120, 29, 100, 24], correct: 120, ok: '24 × 5 = 120 dm².' },
        { q: 'Mỗi hộp gạch có 4 viên. Cần 20 viên thì mua bao nhiêu hộp?', options: [5, 4, 20, 16], correct: 5, ok: '20 : 4 = 5 hộp.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Tính diện tích tấm kính sao?', a: 'Em lấy chiều dài nhân chiều rộng (cùng đơn vị). Vd 6 dm × 4 dm = 24 dm² nhé! 🦅' },
      { q: 'Tính tổng tiền mua gạch?', a: 'Lấy số hộp gạch nhân với giá mỗi hộp. Vd 5 hộp × 140 000 đồng.' },
      { q: '50 cm bằng bao nhiêu dm?', a: '50 cm = 5 dm em nhé, vì 1 dm = 10 cm.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: làm bài thực hành em nhớ đổi về cùng một đơn vị trước khi tính nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Tấm kính dài 6 dm, rộng 4 dm có diện tích bao nhiêu dm²?', options: [{ l: 'A', v: 24 }, { l: 'B', v: 10 }, { l: 'C', v: 20 }, { l: 'D', v: 64 }], correct: 24, hint: 'Dài nhân rộng.' },
      { type: 'fill_blank', label: 'Điền số', q: '5 tấm kính, mỗi tấm 24 dm². Tổng diện tích bao nhiêu dm²?', correct: 120, hint: '24 × 5.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Gạch hình vuông cạnh 50 cm thì cạnh bằng 5 dm. Đúng hay sai?', correct: true, hint: '1 dm = 10 cm.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mỗi hộp gạch 4 viên. Cần 20 viên thì mua bao nhiêu hộp?', options: [{ l: 'A', v: 5 }, { l: 'B', v: 4 }, { l: 'C', v: 20 }, { l: 'D', v: 16 }], correct: 5, hint: '20 : 4.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Mỗi hộp gạch 140 000 đồng. Mua 5 hộp hết bao nhiêu tiền?', options: [{ l: 'A', v: 700000 }, { l: 'B', v: 140000 }, { l: 'C', v: 145000 }, { l: 'D', v: 500000 }], correct: 700000, hint: '140 000 × 5.' }
    ]
  },

  'lop5-bai-18': {
    grade: 5, no: 18, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Luyện tập chung',
    desc: 'Ôn đổi, so sánh đơn vị diện tích và giải toán lát sàn.',
    icon: '🧮',
    topic: '📐 Chủ đề: Đo diện tích',
    banner: 'Tổng hợp các đơn vị đo diện tích và giải toán thực tế nào!',
    steps: ['Đổi đơn vị', 'So sánh', 'Giải toán'],
    blocks: [
      { type: 'info', title: '📘 Ôn tập diện tích', sub: 'Nhớ lại nhé!', html: '<p>Phòng khách 6 m × 5 m có diện tích 6 × 5 = <b>30 m²</b>.</p><p>5 tấm kính 6 dm × 4 dm: mỗi tấm 24 dm², tổng 120 dm² = <b>1,2 m²</b>.</p><p>So sánh: 4 m² 2 dm² = 402 dm² > 42 dm².</p>' },
      { type: 'mcq', title: '🔎 Luyện tập tổng hợp', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: 'Phòng khách 6 m × 5 m có diện tích bao nhiêu m²?', options: [30, 11, 56, 1], correct: 30, ok: '6 × 5 = 30 m².' },
        { q: '120 dm² bằng bao nhiêu m²?', options: [{ val: 1, label: '1,2' }, { val: 2, label: '12' }, { val: 3, label: '0,12' }, { val: 4, label: '120' }], correct: 1, ok: '120 : 100 = 1,2 m².' },
        { q: 'So sánh 4 m² 2 dm² và 42 dm², điền dấu thích hợp?', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 1, ok: '4 m² 2 dm² = 402 dm² > 42 dm².' }
      ] }
    ],
    ai: { chips: [
      { q: 'Đổi 120 dm² ra m²?', a: 'Vì 1 m² = 100 dm² nên 120 dm² = 1,2 m² em nhé! 🦅' },
      { q: 'So sánh diện tích khác đơn vị?', a: 'Em đổi về cùng một đơn vị rồi mới so sánh nhé. Vd 4 m² 2 dm² = 402 dm².' },
      { q: 'Tính tiền lát sàn?', a: 'Lấy diện tích sàn nhân với giá mỗi m². Vd 30 m² × 300 000 đồng.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: gặp số đo hỗn hợp như 4 m² 2 dm², em đổi hết về dm² rồi so nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Phòng khách dài 6 m, rộng 5 m có diện tích bao nhiêu m²?', options: [{ l: 'A', v: 30 }, { l: 'B', v: 11 }, { l: 'C', v: 56 }, { l: 'D', v: 1 }], correct: 30, hint: 'Dài nhân rộng.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Lát sàn 30 m², giá 300 000 đồng mỗi m². Tổng tiền là bao nhiêu đồng?', correct: 9000000, hint: '30 × 300 000.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '4 m² 2 dm² lớn hơn 42 dm². Đúng hay sai?', correct: true, hint: '4 m² 2 dm² = 402 dm².' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '5 tấm kính, mỗi tấm 24 dm². Tổng diện tích bao nhiêu dm²?', options: [{ l: 'A', v: 120 }, { l: 'B', v: 29 }, { l: 'C', v: 100 }, { l: 'D', v: 24 }], correct: 120, hint: '24 × 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'So sánh 28 km² và 2 800 ha thì cần biết 1 km² bằng bao nhiêu ha?', options: [{ l: 'A', v: 100 }, { l: 'B', v: 1000 }, { l: 'C', v: 10 }, { l: 'D', v: 28 }], correct: 100, hint: '1 km² = 100 ha.' }
    ]
  },

  'lop5-bai-19': {
    grade: 5, no: 19, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Phép cộng số thập phân',
    desc: 'Cộng số thập phân và vận dụng tính chất giao hoán, kết hợp.',
    icon: '➕',
    topic: '➕ Chủ đề: Phép tính với số thập phân',
    banner: 'Đặt dấu phẩy thẳng cột rồi cộng như cộng số tự nhiên nhé!',
    steps: ['Đặt tính', 'Tính chất', 'Vận dụng'],
    blocks: [
      { type: 'info', title: '📘 Cộng số thập phân', sub: 'Quy tắc quan trọng!', html: '<p>Khi đặt tính, viết các chữ số cùng hàng thẳng cột và <b>dấu phẩy thẳng cột</b>.</p><p>Vd 24,5 + 3,84 = <b>28,34</b>.</p><p>Phép cộng có tính giao hoán và kết hợp, giúp nhóm số tròn: 6 + 8,46 + 1,54 = 6 + 10 = <b>16</b>.</p>' },
      { type: 'mcq', title: '🔎 Cộng số thập phân', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '24,5 + 3,84 = ?', options: [{ val: 1, label: '28,34' }, { val: 2, label: '27,34' }, { val: 3, label: '28,4' }, { val: 4, label: '62,9' }], correct: 1, ok: 'Đặt thẳng cột: 24,50 + 3,84 = 28,34.' },
        { q: '1,65 + 1,26 = ?', options: [{ val: 1, label: '2,91' }, { val: 2, label: '2,81' }, { val: 3, label: '29,1' }, { val: 4, label: '2,9' }], correct: 1, ok: '1,65 + 1,26 = 2,91.' },
        { q: '6 + 8,46 + 1,54 = ?', options: [{ val: 1, label: '16' }, { val: 2, label: '15,9' }, { val: 3, label: '16,1' }, { val: 4, label: '10' }], correct: 1, ok: '8,46 + 1,54 = 10, cộng 6 được 16.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Cộng số thập phân thế nào?', a: 'Em đặt tính sao cho dấu phẩy thẳng cột rồi cộng như số tự nhiên, đặt dấu phẩy ở tổng thẳng cột nhé! 🦅' },
      { q: 'Tính chất giao hoán phép cộng?', a: 'Đổi chỗ các số hạng thì tổng không đổi: 37,5 + 4,6 = 4,6 + 37,5.' },
      { q: 'Mẹo cộng nhanh?', a: 'Em nhóm các số cộng lại ra số tròn, vd 8,46 + 1,54 = 10 rồi cộng tiếp.' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: nhớ kẻ thẳng dấu phẩy thì cộng số thập phân sẽ không bị sai hàng nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '8,46 + 1,54 = ? (kết quả là số tự nhiên)', options: [{ l: 'A', v: 10 }, { l: 'B', v: 9 }, { l: 'C', v: 11 }, { l: 'D', v: 100 }], correct: 10, hint: 'Phần thập phân cộng lại tròn 1.' },
      { type: 'fill_blank', label: 'Điền số', q: '12,5 + 7,5 = ? (kết quả là số tự nhiên)', correct: 20, hint: 'Phần thập phân 5 + 5 = 10.' },
      { type: 'true_false', label: 'Đúng / Sai', q: '37,5 + 4,6 = 4,6 + 37,5. Đúng hay sai?', correct: true, hint: 'Tính chất giao hoán.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '6 + 8,46 + 1,54 = ?', options: [{ l: 'A', v: 16 }, { l: 'B', v: 15 }, { l: 'C', v: 10 }, { l: 'D', v: 17 }], correct: 16, hint: 'Nhóm 8,46 + 1,54 = 10.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Đoạn dây 1,65 m và 1,26 m. Đổi ra cm rồi cộng: 165 cm + 126 cm = ? cm', options: [{ l: 'A', v: 291 }, { l: 'B', v: 281 }, { l: 'C', v: 290 }, { l: 'D', v: 391 }], correct: 291, hint: '165 + 126.' }
    ]
  },

  'lop5-bai-20': {
    grade: 5, no: 20, theme: 'pink', mascot: '🦁', avatar: '🦁',
    title: 'Phép trừ số thập phân',
    desc: 'Trừ số thập phân, thêm chữ số 0 và thử lại bằng phép cộng.',
    icon: '➖',
    topic: '➕ Chủ đề: Phép tính với số thập phân',
    banner: 'Đặt dấu phẩy thẳng cột rồi trừ như trừ số tự nhiên nhé!',
    steps: ['Đặt tính', 'Thêm số 0', 'Thử lại'],
    blocks: [
      { type: 'info', title: '📘 Trừ số thập phân', sub: 'Quy tắc quan trọng!', html: '<p>Đặt số trừ dưới số bị trừ sao cho các chữ số cùng hàng và <b>dấu phẩy thẳng cột</b>.</p><p>Có thể thêm chữ số 0 cho hai số bằng số chữ số: 63,49 − 1,8 = 63,49 − 1,80 = <b>61,69</b>.</p><p>Thử lại: hiệu cộng số trừ phải bằng số bị trừ.</p>' },
      { type: 'mcq', title: '🔎 Trừ số thập phân', sub: 'Chọn đáp án đúng nhé!', questions: [
        { q: '63,49 − 1,8 = ?', options: [{ val: 1, label: '61,69' }, { val: 2, label: '62,69' }, { val: 3, label: '61,31' }, { val: 4, label: '45,49' }], correct: 1, ok: 'Viết 1,80 rồi trừ: 63,49 − 1,80 = 61,69.' },
        { q: '4,43 − 4,16 = ?', options: [{ val: 1, label: '0,27' }, { val: 2, label: '0,37' }, { val: 3, label: '0,3' }, { val: 4, label: '8,59' }], correct: 1, ok: '4,43 − 4,16 = 0,27.' },
        { q: '6,15 − 2,7 = ?', options: [{ val: 1, label: '3,45' }, { val: 2, label: '3,55' }, { val: 3, label: '4,8' }, { val: 4, label: '3,4' }], correct: 1, ok: 'Viết 2,70 rồi trừ: 6,15 − 2,70 = 3,45.' }
      ] }
    ],
    ai: { chips: [
      { q: 'Trừ số thập phân thế nào?', a: 'Em đặt dấu phẩy thẳng cột rồi trừ như số tự nhiên, đặt dấu phẩy ở hiệu thẳng cột nhé! 🦅' },
      { q: 'Vì sao thêm số 0?', a: 'Thêm số 0 ở tận cùng phần thập phân để hai số có cùng số chữ số, dễ trừ mà giá trị không đổi.' },
      { q: 'Thử lại phép trừ sao?', a: 'Em lấy hiệu cộng với số trừ, nếu bằng số bị trừ là đúng rồi đó!' }
    ], fallback: 'Câu hỏi hay! Đại Bàng gợi ý: đừng quên đặt dấu phẩy ở kết quả thẳng cột với các số trên nhé. 🦅' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong phép tính 63,49 − 1,80, hàng phần trăm là 9 − 0 bằng?', options: [{ l: 'A', v: 9 }, { l: 'B', v: 0 }, { l: 'C', v: 8 }, { l: 'D', v: 1 }], correct: 9, hint: '9 trừ 0.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Thử lại: 61,69 + 1,8 = 63,49. Số bị trừ có phần nguyên là?', correct: 63, hint: 'Phần trước dấu phẩy của 63,49.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Muốn trừ hai số thập phân, ta đặt dấu phẩy thẳng cột. Đúng hay sai?', correct: true, hint: 'Đây là quy tắc đặt tính.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Viết 1,8 thành 1,80 (giá trị không đổi). Lúc này phần thập phân có mấy chữ số?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 1 }, { l: 'C', v: 3 }, { l: 'D', v: 0 }], correct: 2, hint: 'Đếm chữ số sau dấu phẩy của 1,80.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '63,49 − 1,8 có kết quả với phần nguyên là?', options: [{ l: 'A', v: 61 }, { l: 'B', v: 62 }, { l: 'C', v: 45 }, { l: 'D', v: 60 }], correct: 61, hint: 'Kết quả là 61,69.' }
    ]
  }

});
