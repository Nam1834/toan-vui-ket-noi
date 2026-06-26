// ============================================================
//  TVKN — DỮ LIỆU BÀI HỌC LỚP 1 (bai-1 .. bai-10)
//  Nạp SAU lessons.js. Đổ nội dung vào TVKN_LESSONS.lessons.
// ============================================================
Object.assign(window.TVKN_LESSONS.lessons, {

  'bai-1': {
    grade: 1, no: 1, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Các số 0, 1, 2, 3, 4, 5',
    desc: 'Nhận biết, đọc và viết các số từ 0 đến 5.',
    icon: '5️⃣',
    topic: '📗 Chủ đề 1: Các số từ 0 đến 10',
    banner: 'Hôm nay chúng mình cùng khám phá, đọc, viết và đếm các số từ 0 đến 5 nhé!',
    steps: ['Khám phá', 'Đọc - Viết', 'Đếm', 'Luyện tập'],
    blocks: [
      { type: 'explore-tiles', title: '🔍 Khám phá số lượng và chữ số', sub: 'Bấm vào một con số phía dưới. Bình cá sẽ hiện đúng bấy nhiêu chú cá để em đếm nhé! Số 0 là chiếc bình trống không.', max: 5, obj: '🐟', objEmpty: '🐠', unit: 'chú cá', zeroText: 'Bình cá trống không — không có chú cá nào.' },
      { type: 'read-cards', title: '📖 Đọc và viết số', sub: 'Mỗi con số có một cách đọc riêng. Bấm nút 🔊 Nghe để luyện đọc theo nhé!', cards: [ { num: 0, word: 'Không', objs: '∅', say: 'không' }, { num: 1, word: 'Một', objs: '🐟', say: 'một' }, { num: 2, word: 'Hai', objs: '🍎🍎', say: 'hai' }, { num: 3, word: 'Ba', objs: '🌸🌸🌸', say: 'ba' }, { num: 4, word: 'Bốn', objs: '🐱🐱🐱🐱', say: 'bốn' }, { num: 5, word: 'Năm', objs: '🦆🦆🦆🦆🦆', say: 'năm' } ] },
      { type: 'mcq', title: '🔢 Hoạt động đếm', sub: 'Em hãy đếm thật kĩ rồi chọn số đúng nhé!', questions: [ { q: 'Câu 1: Có bao nhiêu con vịt?', img: '🦆🦆🦆', options: [2, 3, 4, 5], correct: 3, ok: 'Có 3 — đọc là "ba".' }, { q: 'Câu 2: Có bao nhiêu củ cà rốt?', img: '🥕🥕🥕🥕🥕', options: [3, 4, 5, 2], correct: 5, ok: 'Có 5 — đọc là "năm".' }, { q: 'Câu 3: Trong bình có bao nhiêu con cá?', img: '🐠', imgStyle: 'font-size:60px', options: [0, 1, 2, 3], correct: 1, ok: 'Có 1 — đọc là "một".' } ] },
      { type: 'sequence', title: '✏️ Luyện tập điền dãy số', sub: 'Em hãy điền số còn thiếu vào ô trống cho đúng thứ tự, rồi bấm Kiểm tra nhé!', rows: [ { label: 'a) Dãy số tiến (đếm xuôi):', slots: [0, 1, 2, { blank: 3 }, 4, 5] }, { label: 'b) Dãy số lùi (đếm ngược):', slots: [5, { blank: 4 }, 3, { blank: 2 }, 1, 0] } ] }
    ],
    ai: { chips: [ { q: 'Số 0 nghĩa là gì?', a: 'Số 0 nghĩa là "không có gì" cả em ạ. Ví dụ chiếc bình không có chú cá nào thì ta viết số 0 nhé! 🐰' }, { q: 'Làm sao để đếm đúng?', a: 'Em hãy chỉ tay vào từng vật và đếm một - hai - ba... mỗi vật chỉ đếm đúng một lần thôi nhé! ✋' }, { q: 'Em chưa biết viết số 5.', a: 'Số 5 viết gồm một nét ngang trên, một nét sổ xuống, rồi một nét cong tròn ở dưới như cái bụng. Em tập viết theo nhé! ✏️' } ], fallback: 'Câu hỏi hay đó! Thỏ Toán gợi ý: em hãy đếm từ 0 đến 5 và quan sát số lượng đồ vật nhé. 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có bao nhiêu quả cam trong hình?', img: '🍊🍊🍊🍊', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 4 }, { l: 'D', v: 5 }], correct: 4, hint: 'Em hãy đếm từng quả cam từ trái sang phải.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 1, 2, 3, __, 5', correct: 4, hint: 'Sau số 3 là số nào?' },
      { type: 'true_false', label: 'Đúng / Sai', q: '7 lớn hơn 5. Đúng hay sai?', correct: true, hint: 'Em hãy so sánh vị trí của 7 và 5 trong dãy số.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '5 + 3 = ?', img: '🟢🟢🟢🟢🟢 ➕ 🔵🔵🔵', options: [{ l: 'A', v: 6 }, { l: 'B', v: 7 }, { l: 'C', v: 8 }, { l: 'D', v: 9 }], correct: 8, hint: 'Em hãy đếm tất cả các viên bi.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào bé nhất?', img: '6   2   9   4', options: [{ l: 'A', v: 6 }, { l: 'B', v: 2 }, { l: 'C', v: 9 }, { l: 'D', v: 4 }], correct: 2, hint: 'Số bé nhất đứng đầu tiên khi đếm từ 0.' },
      { type: 'drag_drop', label: 'Kéo thả', q: 'Kéo số đúng vào ô trống.', group: '🍎🍎🍎🍎🍎', tiles: [3, 5, 4], correct: 5, hint: 'Em hãy đếm số quả táo rồi kéo đúng con số vào ô.' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối hình với số tương ứng.', pairs: [{ img: '🐱🐱🐱', val: 3 }, { img: '🌸🌸🌸🌸🌸', val: 5 }], hint: 'Em hãy đếm số con vật, số bông hoa rồi nối với con số đúng.' }
    ]
  },

  'bai-2': {
    grade: 1, no: 2, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Các số 6, 7, 8, 9, 10',
    desc: 'Nhận biết, đọc và viết các số từ 6 đến 10.',
    icon: '🔟',
    topic: '📗 Chủ đề 1: Các số từ 0 đến 10',
    banner: 'Hôm nay chúng mình cùng khám phá, đọc, viết và đếm các số từ <b>6 đến 10</b> nhé!',
    steps: ['Khám phá', 'Đọc - Viết', 'Đếm', 'Luyện tập'],
    blocks: [
      { type: 'explore-tiles', title: '🔍 Khám phá các số', sub: 'Bấm vào một con số phía dưới để xem có bao nhiêu chú ong và cùng đếm nhé!', max: 10, obj: '🐝', objEmpty: '⬜', unit: 'chú ong', zeroText: 'Không có chú ong nào cả.' },
      { type: 'read-cards', title: '📖 Đọc và viết số', sub: 'Mỗi số có một cách đọc riêng. Bấm 🔊 Nghe để luyện đọc nhé!', cards: [ { num: 6, word: 'Sáu', objs: '🐝🐝🐝🐝🐝🐝', say: 'sáu' }, { num: 7, word: 'Bảy', objs: '🐦🐦🐦🐦🐦🐦🐦', say: 'bảy' }, { num: 8, word: 'Tám', objs: '🌸🌸🌸🌸🌸🌸🌸🌸', say: 'tám' }, { num: 9, word: 'Chín', objs: '⭐⭐⭐⭐⭐⭐⭐⭐⭐', say: 'chín' }, { num: 10, word: 'Mười', objs: '🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞', say: 'mười' } ] },
      { type: 'mcq', title: '🔢 Hoạt động đếm', sub: 'Em hãy đếm thật kĩ rồi chọn số đúng nhé!', questions: [ { q: 'Câu 1: Có bao nhiêu chú chim?', img: '🐦🐦🐦🐦🐦🐦🐦', options: [6, 7, 8, 9], correct: 7, ok: 'Có đúng 7 chú chim — đọc là "bảy".' }, { q: 'Câu 2: Khay có 5 quả trứng. Cần thêm mấy quả nữa để đủ 8 quả?', img: '🥚🥚🥚🥚🥚', options: [1, 2, 3, 4], correct: 3, ok: '5 thêm 3 là đủ 8 quả trứng!' }, { q: 'Câu 3: Có bao nhiêu con bọ rùa?', img: '🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞', options: [8, 9, 10, 7], correct: 10, ok: 'Có 10 con — đọc là "mười".' } ] },
      { type: 'sequence', title: '✏️ Hoàn thành dãy số', sub: 'Điền số còn thiếu vào ô trống cho đúng thứ tự rồi bấm Kiểm tra nhé!', rows: [ { label: '⬆️ Dãy số tiến (đếm xuôi):', slots: [0, 1, 2, 3, 4, { blank: 5 }, 6, { blank: 7 }, { blank: 8 }, 9, { blank: 10 }] }, { label: '⬇️ Dãy số lùi (đếm ngược):', slots: [10, { blank: 9 }, 8, { blank: 7 }, { blank: 6 }, 5, { blank: 4 }, 3, { blank: 2 }, 1, 0] } ] }
    ],
    ai: { chips: [ { q: 'Số 10 đọc thế nào?', a: 'Số 10 đọc là "mười" em nhé. Số 10 gồm chữ số 1 và chữ số 0 đứng cạnh nhau. 🐰' }, { q: 'Làm sao đếm tới 10?', a: 'Em đếm lần lượt: một, hai, ba, bốn, năm, sáu, bảy, tám, chín, mười. Mỗi đồ vật chỉ đếm một lần thôi nhé! ✋' }, { q: 'Thêm cho đủ là gì?', a: 'Thêm cho đủ là đếm tiếp từ số đang có đến số cần đạt. Ví dụ có 5, đếm tiếp 6, 7, 8 — vậy cần thêm 3 nữa là đủ 8. 🎯' } ], fallback: 'Thỏ Toán gợi ý: em hãy đếm từ 6 đến 10 và quan sát số lượng đồ vật nhé. 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có bao nhiêu bông hoa?', img: '🌸🌸🌸🌸🌸🌸🌸🌸', options: [{ l: 'A', v: 6 }, { l: 'B', v: 7 }, { l: 'C', v: 8 }, { l: 'D', v: 9 }], correct: 8, hint: 'Em hãy đếm từng bông hoa từ trái sang phải.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 6, 7, __, 9, 10', correct: 8, hint: 'Sau số 7 là số nào?' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Số 9 lớn hơn số 7. Đúng hay sai?', correct: true, hint: 'Số nào đứng sau khi đếm xuôi thì lớn hơn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Khay có 6 quả trứng, thêm 2 quả nữa là mấy quả?', img: '🥚🥚🥚🥚🥚🥚 ➕ 🥚🥚', options: [{ l: 'A', v: 7 }, { l: 'B', v: 8 }, { l: 'C', v: 9 }, { l: 'D', v: 10 }], correct: 8, hint: 'Đếm tiếp từ 6: 7, 8.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào lớn nhất?', img: '6   9   7   10', options: [{ l: 'A', v: 6 }, { l: 'B', v: 9 }, { l: 'C', v: 7 }, { l: 'D', v: 10 }], correct: 10, hint: 'Số lớn nhất đứng cuối khi đếm xuôi.' },
      { type: 'drag_drop', label: 'Kéo thả', q: 'Kéo số đúng vào ô trống.', group: '🐝🐝🐝🐝🐝🐝🐝', tiles: [6, 7, 8], correct: 7, hint: 'Đếm số chú ong rồi kéo đúng con số vào ô.' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối hình với số tương ứng.', pairs: [{ img: '⭐⭐⭐⭐⭐⭐⭐⭐⭐', val: 9 }, { img: '🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞', val: 10 }], hint: 'Đếm số ngôi sao, số bọ rùa rồi nối với con số đúng.' }
    ]
  },

  'bai-3': {
    grade: 1, no: 3, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Nhiều hơn, ít hơn, bằng nhau',
    desc: 'So sánh số lượng hai nhóm: nhiều hơn, ít hơn, bằng nhau.',
    icon: '⚖️',
    topic: '📗 Chủ đề 1: Các số từ 0 đến 10',
    banner: 'Hôm nay chúng mình học cách so sánh số lượng hai nhóm: <b>nhiều hơn, ít hơn, bằng nhau</b> nhé!',
    steps: ['Khám phá', 'Thuật ngữ', 'Quan sát', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '🔍 Khám phá: Ghép đôi 1 - 1', sub: 'Cách dễ nhất để so sánh hai nhóm là ghép từng đôi một.', html: 'Mỗi chú ếch 🐸 nhảy lên một lá sen 🪷. Có 4 chú ếch nhưng chỉ có 3 lá sen, còn dư 1 chú ếch chưa có lá → <b>số ếch nhiều hơn số lá sen</b> (số lá sen ít hơn số ếch).<br>Mỗi chú thỏ 🐰 lại có vừa đủ một củ cà rốt 🥕, không thừa không thiếu → hai nhóm <b>bằng nhau</b>.<br><br><b>Nhiều hơn:</b> ghép đôi xong còn dư đồ vật.<br><b>Ít hơn:</b> ghép đôi xong bị thiếu, không đủ.<br><b>Bằng nhau:</b> ghép vừa khít, không thừa không thiếu.' },
      { type: 'mcq', title: '👀 Hoạt động quan sát', sub: 'Quan sát hai nhóm rồi chọn đáp án đúng. Em hãy ghép đôi trong đầu nhé!', questions: [ { q: 'Câu 1: Số bướm 🦋 so với số hoa 🌹 thì nhóm bướm như thế nào?', img: '🦋🦋🦋🦋🦋  ⚖️  🌹🌹🌹', options: [{ val: 1, label: 'Nhiều hơn' }, { val: 2, label: 'Ít hơn' }, { val: 3, label: 'Bằng nhau' }], correct: 1, ok: 'Có 5 bướm và 3 hoa — nhóm bướm nhiều hơn.' }, { q: 'Câu 2: Số vịt 🦆 và số cá 🐟 — hai nhóm này như thế nào?', img: '🦆🦆🦆🦆  ⚖️  🐟🐟🐟🐟', options: [{ val: 1, label: 'Nhiều hơn' }, { val: 2, label: 'Ít hơn' }, { val: 3, label: 'Bằng nhau' }], correct: 3, ok: 'Đều có 4 — hai nhóm bằng nhau.' }, { q: 'Câu 3: Số ong 🐝 so với số hoa 🌻 thì nhóm ong như thế nào?', img: '🐝🐝  ⚖️  🌻🌻🌻🌻🌻', options: [{ val: 1, label: 'Nhiều hơn' }, { val: 2, label: 'Ít hơn' }, { val: 3, label: 'Bằng nhau' }], correct: 2, ok: 'Có 2 ong và 5 hoa — nhóm ong ít hơn.' } ] },
      { type: 'mcq', title: '🎯 Luyện tập: So sánh nhiều nhóm', sub: 'Mèo: 🐱🐱🐱🐱🐱🐱 (6) — Vịt: 🦆🦆🦆🦆 (4) — Cá: 🐟🐟 (2). Đếm thật kỹ nhé!', questions: [ { q: 'Câu 1: Nhóm nào có số lượng nhiều nhất?', options: [{ val: 1, label: '🐱 Mèo' }, { val: 2, label: '🦆 Vịt' }, { val: 3, label: '🐟 Cá' }], correct: 1, ok: 'Nhóm mèo có 6 con — nhiều nhất.' }, { q: 'Câu 2: Nhóm nào có số lượng ít nhất?', options: [{ val: 1, label: '🐱 Mèo' }, { val: 2, label: '🦆 Vịt' }, { val: 3, label: '🐟 Cá' }], correct: 3, ok: 'Nhóm cá chỉ có 2 con — ít nhất.' } ] }
    ],
    ai: { chips: [ { q: 'Nhiều hơn nghĩa là gì?', a: 'Khi ghép đôi hai nhóm mà một nhóm còn dư đồ vật, nhóm đó nhiều hơn em nhé. 🐰' }, { q: 'Làm sao biết hai nhóm bằng nhau?', a: 'Em ghép từng đôi một. Nếu ghép vừa khít, không nhóm nào thừa hay thiếu thì hai nhóm bằng nhau. ⚖️' }, { q: 'Ghép đôi 1 - 1 là sao ạ?', a: 'Là cứ một đồ vật của nhóm này ghép với một đồ vật của nhóm kia. Ghép hết rồi xem nhóm nào còn dư nhé! 🤝' } ], fallback: 'Thỏ Toán gợi ý: em hãy ghép đôi từng đồ vật của hai nhóm rồi xem nhóm nào còn dư nhé. 🐰' },
    quiz: [
      { type: 'true_false', label: 'Đúng / Sai', q: 'Nhóm 🐱🐱🐱 nhiều hơn nhóm 🐭🐭. Đúng hay sai?', correct: true, hint: 'Đếm số mèo và số chuột rồi so sánh.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Có 5 cái bánh và 5 cái đĩa thì hai nhóm bằng nhau. Đúng hay sai?', correct: true, hint: 'Mỗi cái bánh đặt vào một cái đĩa, có thừa hay thiếu không?' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có bao nhiêu con bướm?', img: '🦋🦋🦋🦋', options: [{ l: 'A', v: 3 }, { l: 'B', v: 4 }, { l: 'C', v: 5 }, { l: 'D', v: 2 }], correct: 4, hint: 'Đếm từng con bướm.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Nhóm nào nhiều hơn? Chọn số lượng của nhóm đó. 🐝🐝 và 🌻🌻🌻🌻🌻', options: [{ l: 'A', v: 2 }, { l: 'B', v: 5 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 5, hint: 'Nhóm hoa có 5, nhóm ong có 2.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Nhóm có ít đồ vật hơn được gọi là nhóm ít hơn. Đúng hay sai?', correct: true, hint: 'Nhớ lại nghĩa của từ "ít hơn".' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối nhóm con vật với số lượng đúng.', pairs: [{ img: '🐶🐶🐶', val: 3 }, { img: '🐰🐰🐰🐰', val: 4 }], hint: 'Đếm số con vật mỗi nhóm rồi nối.' }
    ]
  },

  'bai-4': {
    grade: 1, no: 4, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'So sánh các số (dấu >, <)',
    desc: 'Dùng dấu lớn hơn (>) và bé hơn (<) để so sánh hai số.',
    icon: '🔼',
    topic: '📗 Chủ đề 1: Các số từ 0 đến 10',
    banner: 'Hôm nay chúng mình làm quen dấu <b>lớn hơn (&gt;)</b> và <b>bé hơn (&lt;)</b> để so sánh các số nhé!',
    steps: ['Khám phá', 'Viết dấu', 'Thực hành', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '🔍 Khám phá dấu &gt; và &lt;', sub: 'Cùng đếm rồi so sánh hai nhóm con vật nhé!', html: 'Bên trái có 4 con vịt 🦆🦆🦆🦆, nhiều hơn bên phải có 3 con 🦆🦆🦆. Vậy <b>4 &gt; 3</b> (bốn lớn hơn ba).<br>Bên trái có 4 quả táo 🍎🍎🍎🍎, ít hơn bên phải có 5 quả 🍎🍎🍎🍎🍎. Vậy <b>4 &lt; 5</b> (bốn bé hơn năm).<br><br>💡 <b>Mẹo nhỏ:</b> đầu nhọn của dấu luôn chỉ vào số bé hơn, miệng rộng quay về số lớn hơn!' },
      { type: 'mcq', title: '🧩 Thực hành điền dấu', sub: 'Chọn dấu &gt; hoặc &lt; thích hợp giữa hai số.', questions: [ { q: 'Câu 1: 5 ... 3', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 1, ok: '5 lớn hơn 3, viết 5 > 3.' }, { q: 'Câu 2: 2 ... 6', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 2, ok: '2 bé hơn 6, viết 2 < 6.' }, { q: 'Câu 3: 7 ... 4', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 1, ok: '7 lớn hơn 4, viết 7 > 4.' }, { q: 'Câu 4: Chọn số để biểu thức ▢ > 3 trở thành đúng.', options: [1, 2, 5, 0], correct: 5, ok: '5 > 3 là đúng rồi!' } ] },
      { type: 'mcq', title: '🎮 Tìm đường về nhà', sub: 'Bạn chuột 🐭 chỉ được bước lên ô có số lớn hơn 4. Chọn số hợp lệ giúp chuột nhé!', questions: [ { q: 'Câu 1: Số nào lớn hơn 4?', options: [3, 4, 5, 2], correct: 5, ok: '5 lớn hơn 4 — đi tiếp nào!' }, { q: 'Câu 2: Số nào lớn hơn 4?', options: [1, 6, 4, 0], correct: 6, ok: '6 lớn hơn 4 — bạn chuột bước được!' } ] },
      { type: 'sequence', title: '✏️ Ôn thứ tự số để so sánh', sub: 'Điền số còn thiếu để biết số nào đứng trước, số nào đứng sau nhé!', rows: [ { label: 'Dãy số tiến:', slots: [1, 2, { blank: 3 }, 4, { blank: 5 }, 6] } ] }
    ],
    ai: { chips: [ { q: 'Khi nào dùng dấu lớn hơn?', a: 'Khi số bên trái nhiều hơn số bên phải thì dùng dấu > (lớn hơn). Ví dụ 5 > 3. 🐰' }, { q: 'Làm sao nhớ dấu bé hơn?', a: 'Đầu nhọn của dấu luôn chỉ vào số bé. Với 2 < 6, đầu nhọn chỉ vào số 2 nhỏ hơn nhé! ✏️' }, { q: '5 và 3 số nào lớn hơn?', a: 'Số 5 lớn hơn số 3 em ạ, vì 5 đứng sau 3 khi đếm xuôi. Ta viết 5 > 3. 🎯' } ], fallback: 'Thỏ Toán gợi ý: số nào đứng sau khi đếm xuôi thì lớn hơn. Đầu nhọn của dấu luôn chỉ vào số bé nhé! 🐰' },
    quiz: [
      { type: 'true_false', label: 'Đúng / Sai', q: 'Dấu > đọc là "lớn hơn". Đúng hay sai?', correct: true, hint: 'Dấu có miệng rộng quay về số lớn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong các số sau, số nào lớn nhất?', img: '4   7   2   5', options: [{ l: 'A', v: 4 }, { l: 'B', v: 7 }, { l: 'C', v: 2 }, { l: 'D', v: 5 }], correct: 7, hint: 'Số lớn nhất đứng cuối khi đếm xuôi.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số lớn hơn 6 và bé hơn 8: __', correct: 7, hint: 'Số nằm giữa 6 và 8 là số nào?' },
      { type: 'true_false', label: 'Đúng / Sai', q: '9 < 5. Đúng hay sai?', correct: false, hint: 'So sánh 9 và 5 xem số nào lớn hơn.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Chọn số để 5 > __ trở thành đúng.', options: [{ l: 'A', v: 6 }, { l: 'B', v: 8 }, { l: 'C', v: 3 }, { l: 'D', v: 9 }], correct: 3, hint: 'Cần một số bé hơn 5.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào bé nhất?', img: '8   3   6   5', options: [{ l: 'A', v: 8 }, { l: 'B', v: 3 }, { l: 'C', v: 6 }, { l: 'D', v: 5 }], correct: 3, hint: 'Số bé nhất đứng đầu khi đếm xuôi.' }
    ]
  },

  'bai-5': {
    grade: 1, no: 5, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Mấy và mấy (tách – gộp số)',
    desc: 'Gộp hai nhóm lại và tách một số thành hai phần.',
    icon: '🔗',
    topic: '📗 Chủ đề 1: Các số từ 0 đến 10',
    banner: 'Hôm nay em học cách <b>gộp</b> hai nhóm lại và <b>tách</b> một số thành hai phần nhỏ hơn nhé!',
    steps: ['Khám phá', 'Gộp', 'Tách', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '🔎 Khám phá: Gộp lại', sub: 'Gộp là đổ chung hai nhóm thành một nhóm lớn rồi đếm tất cả.', html: 'Bình cá của Mai có 3 con 🐠🐠🐠, bình của Nam có 2 con 🐠🐠. Đổ chung vào một bình lớn, ta được <b>5</b> con cá.<br>Ta nói: <b>3 và 2 được 5</b>.' },
      { type: 'mcq', title: '🎲 Gộp lại — đếm tổng', sub: 'Đếm số đồ vật ở hai nhóm rồi chọn tổng đúng nhé!', questions: [ { q: 'Câu 1: Bình Mai 3 con, bình Nam 2 con. Gộp lại được mấy con cá?', img: '🐠🐠🐠 ➕ 🐠🐠', options: [4, 5, 6, 3], correct: 5, ok: '3 và 2 được 5 con cá!' }, { q: 'Câu 2: Tay Robot có 3 chấm và 4 chấm. Gộp lại được mấy chấm?', img: '⚫⚫⚫ ➕ ⚫⚫⚫⚫', options: [5, 6, 7, 8], correct: 7, ok: '3 và 4 gộp lại được 7 chấm!' } ] },
      { type: 'mcq', title: '🏠 Tách số — Sơ đồ Nhà số', sub: 'Số ở trên được tạo bởi hai số ở dưới. Tìm số còn thiếu nhé!', questions: [ { q: 'Câu 1: 5 gồm 2 và mấy?', options: [1, 2, 3, 4], correct: 3, ok: '5 gồm 2 và 3.' }, { q: 'Câu 2: 4 gồm mấy và 3?', options: [1, 2, 3, 0], correct: 1, ok: '4 gồm 1 và 3.' }, { q: 'Câu 3: 6 gồm 4 và mấy?', options: [1, 2, 3, 4], correct: 2, ok: '6 gồm 4 và 2.' } ] },
      { type: 'mcq', title: '✏️ Luyện tập điền số', sub: 'Đọc kĩ từng câu rồi chọn số đúng nhé!', questions: [ { q: 'Câu 1: Đĩa bánh có 5 cái gồm 2 cái và mấy cái?', img: '🍪🍪🍪🍪🍪', options: [2, 3, 4, 5], correct: 3, ok: '5 gồm 2 và 3 cái bánh.' }, { q: 'Câu 2: 4 gồm 1 và mấy?', options: [2, 3, 4, 1], correct: 3, ok: '4 gồm 1 và 3.' }, { q: 'Câu 3: 3 và 2 được mấy?', options: [4, 5, 6, 3], correct: 5, ok: '3 và 2 được 5.' } ] }
    ],
    ai: { chips: [ { q: 'Gộp là gì ạ?', a: 'Gộp là đổ chung hai nhóm thành một nhóm rồi đếm tất cả em nhé. Ví dụ 3 con và 2 con gộp lại được 5 con. 🐰' }, { q: '5 gồm những số nào?', a: '5 có thể gồm: 0 và 5, 1 và 4, 2 và 3, 3 và 2, 4 và 1, 5 và 0. Em thử tách thử nhé! 🔢' }, { q: 'Tách số 6 như thế nào?', a: 'Tách 6 nghĩa là chia 6 thành hai phần, ví dụ 6 gồm 4 và 2, hoặc 5 và 1, hoặc 3 và 3. ✋' } ], fallback: 'Thỏ Toán gợi ý: gộp là đếm tất cả hai nhóm, còn tách là chia một số thành hai phần nhỏ hơn nhé. 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '3 và 2 gộp lại được mấy?', img: '🍎🍎🍎 ➕ 🍎🍎', options: [{ l: 'A', v: 4 }, { l: 'B', v: 5 }, { l: 'C', v: 6 }, { l: 'D', v: 3 }], correct: 5, hint: 'Đếm tất cả các quả táo.' },
      { type: 'fill_blank', label: 'Điền số', q: '5 gồm 2 và __', correct: 3, hint: '2 thêm mấy nữa thì bằng 5?' },
      { type: 'fill_blank', label: 'Điền số', q: '4 gồm __ và 1', correct: 3, hint: 'Mấy thêm 1 thì bằng 4?' },
      { type: 'true_false', label: 'Đúng / Sai', q: '6 gồm 4 và 2. Đúng hay sai?', correct: true, hint: '4 thêm 2 có bằng 6 không?' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '2 chú thỏ và 3 chú thỏ là mấy chú?', img: '🐰🐰 ➕ 🐰🐰🐰', options: [{ l: 'A', v: 4 }, { l: 'B', v: 5 }, { l: 'C', v: 6 }, { l: 'D', v: 7 }], correct: 5, hint: 'Gộp hai nhóm thỏ rồi đếm.' },
      { type: 'drag_drop', label: 'Kéo thả', q: 'Kéo số đúng vào ô để biết có mấy con cá.', group: '🐠🐠🐠🐠🐠🐠', tiles: [5, 6, 7], correct: 6, hint: 'Đếm tất cả số cá rồi kéo con số đúng.' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối phép gộp với kết quả đúng.', pairs: [{ img: '2 + 3', val: 5 }, { img: '1 + 3', val: 4 }], hint: 'Tính tổng mỗi cặp rồi nối với số đúng.' }
    ]
  },

  'bai-6': {
    grade: 1, no: 6, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Luyện tập chung',
    desc: 'Ôn tập tổng hợp các số từ 0 đến 10.',
    icon: '🏆',
    topic: '📗 Chủ đề 1: Các số từ 0 đến 10',
    banner: 'Cùng ôn lại tất cả các số từ <b>0 đến 10</b>: nhận diện, thứ tự, so sánh và tách – gộp số nhé!',
    steps: ['Nhận diện', 'Thứ tự', 'So sánh', 'Tách – gộp'],
    blocks: [
      { type: 'mcq', title: '🔍 Nhận diện số', sub: 'Đếm và nhớ lại thứ tự các số nhé!', questions: [ { q: 'Câu 1: Có bao nhiêu ngôi sao?', img: '⭐⭐⭐⭐⭐', options: [4, 5, 6, 3], correct: 5, ok: 'Có đúng 5 ngôi sao!' }, { q: 'Câu 2: Số liền trước số 5 là số nào?', options: [3, 4, 5, 6], correct: 4, ok: 'Số liền trước số 5 là số 4.' }, { q: 'Câu 3: Số liền sau số 8 là số nào?', options: [7, 8, 9, 10], correct: 9, ok: 'Số liền sau số 8 là số 9.' } ] },
      { type: 'sequence', title: '🚂 Đoàn tàu số', sub: 'Điền số còn thiếu cho đúng thứ tự rồi bấm Kiểm tra nhé!', rows: [ { label: '🚆 Tàu tăng dần:', slots: [2, 3, 4, { blank: 5 }, { blank: 6 }, 7] }, { label: '🚆 Tàu giảm dần:', slots: [10, { blank: 9 }, 8, { blank: 7 }, 6] } ] },
      { type: 'mcq', title: '⚖️ So sánh nhóm', sub: 'Đếm số con vật hai bên rồi chọn dấu đúng nhé!', questions: [ { q: 'Câu 1: 3 con mèo 🐱🐱🐱 ... 2 con cá 🐟🐟', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 1, ok: '3 lớn hơn 2: 3 > 2.' }, { q: 'Câu 2: 2 con mèo 🐱🐱 ... 4 con cá 🐟🐟🐟🐟', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 2, ok: '2 bé hơn 4: 2 < 4.' }, { q: 'Câu 3: 3 con mèo 🐱🐱🐱 ... 3 con cá 🐟🐟🐟', options: [{ val: 1, label: '>' }, { val: 2, label: '<' }, { val: 3, label: '=' }], correct: 3, ok: '3 bằng 3: 3 = 3.' } ] },
      { type: 'mcq', title: '🎲 Tách – gộp ôn tập', sub: 'Đếm tổng số chấm và hoàn thành nhà số nhé!', questions: [ { q: 'Câu 1: 3 chấm và 4 chấm gộp lại được mấy chấm?', img: '⚫⚫⚫ ➕ ⚫⚫⚫⚫', options: [6, 7, 8, 9], correct: 7, ok: '3 và 4 được 7.' }, { q: 'Câu 2: Số 6 gồm 2 và mấy?', options: [3, 4, 5, 2], correct: 4, ok: '6 gồm 2 và 4.' } ] }
    ],
    ai: { chips: [ { q: 'Dấu > và < khác nhau thế nào?', a: 'Dấu > là lớn hơn, dấu < là bé hơn. Đầu nhọn của cả hai dấu đều chỉ vào số bé hơn em nhé! 🐰' }, { q: 'Làm sao điền đúng dãy số?', a: 'Em xem số liền trước và liền sau ô trống, rồi đếm xuôi hoặc đếm ngược để tìm số còn thiếu. 🚂' }, { q: '6 gồm những số nào?', a: '6 có thể gồm: 0 và 6, 1 và 5, 2 và 4, 3 và 3, và ngược lại nữa. 🔢' } ], fallback: 'Thỏ Toán gợi ý: em hãy ôn lại cách đếm, so sánh và tách - gộp các số từ 0 đến 10 nhé. 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có bao nhiêu con mèo?', img: '🐱🐱🐱🐱🐱🐱', options: [{ l: 'A', v: 5 }, { l: 'B', v: 6 }, { l: 'C', v: 7 }, { l: 'D', v: 4 }], correct: 6, hint: 'Đếm từng con mèo.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 5, 6, 7, __, 9', correct: 8, hint: 'Sau số 7 là số nào?' },
      { type: 'true_false', label: 'Đúng / Sai', q: '8 > 6. Đúng hay sai?', correct: true, hint: 'So sánh 8 và 6.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '6 gồm 2 và mấy?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 4 }, { l: 'C', v: 5 }, { l: 'D', v: 2 }], correct: 4, hint: '2 thêm mấy nữa thì bằng 6?' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Số nào bé nhất?', img: '7   3   9   5', options: [{ l: 'A', v: 7 }, { l: 'B', v: 3 }, { l: 'C', v: 9 }, { l: 'D', v: 5 }], correct: 3, hint: 'Số bé nhất đứng đầu khi đếm xuôi.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Đếm ngược: 10, 9, __, 7', correct: 8, hint: 'Giữa 9 và 7 là số nào?' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối nhóm con vật với số lượng đúng.', pairs: [{ img: '🦆🦆🦆🦆', val: 4 }, { img: '🐝🐝🐝🐝🐝🐝🐝', val: 7 }], hint: 'Đếm số con vật rồi nối với số đúng.' }
    ]
  },

  'bai-7': {
    grade: 1, no: 7, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Hình vuông, tròn, tam giác, chữ nhật',
    desc: 'Nhận biết hình vuông, hình tròn, hình tam giác, hình chữ nhật.',
    icon: '🔷',
    topic: '📐 Chủ đề 2: Làm quen với một số hình phẳng',
    banner: 'Hôm nay chúng mình làm quen <b>hình vuông, hình tròn, hình tam giác và hình chữ nhật</b> nhé!',
    steps: ['Khám phá', 'Phân loại', 'Đếm hình', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '🔍 Khám phá các hình', sub: 'Mỗi hình có đặc điểm riêng. Hãy nhớ kĩ nhé!', html: '<b>Hình vuông</b> ⏹️: có 4 cạnh bằng nhau và 4 góc vuông. Ví dụ: khung tranh, cửa sổ vuông.<br><b>Hình tròn</b> ⭕: tròn xoe, không có cạnh, không có góc. Ví dụ: cái đĩa, mặt đồng hồ tròn.<br><b>Hình tam giác</b> 🔺: có 3 cạnh và 3 góc. Ví dụ: biển báo giao thông, thước ê-ke.<br><b>Hình chữ nhật</b> ▬: có 4 góc vuông, một cặp cạnh dài và một cặp cạnh ngắn. Ví dụ: bìa sách, màn hình TV.' },
      { type: 'mcq', title: '🧺 Phân loại đồ vật theo hình', sub: 'Mỗi đồ vật có dạng hình gì? Chọn cho đúng nhé!', questions: [ { q: 'Câu 1: Cái đĩa 🍽️ có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 2, ok: 'Cái đĩa có dạng hình tròn.' }, { q: 'Câu 2: Khung tranh 🖼️ có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 1, ok: 'Khung tranh vuông có dạng hình vuông.' }, { q: 'Câu 3: Biển báo 🚸 có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 3, ok: 'Biển báo này có dạng hình tam giác.' }, { q: 'Câu 4: Bìa sách 📕 có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 4, ok: 'Bìa sách có dạng hình chữ nhật.' } ] },
      { type: 'mcq', title: '🔢 Đếm hình trong bức tranh', sub: 'Bức tranh có: 3 hình tròn, 2 hình vuông, 4 hình tam giác, 2 hình chữ nhật. Đếm thật kỹ nhé!', questions: [ { q: 'Câu 1: Có bao nhiêu hình tròn?', img: '🔴🔴🔴', options: [2, 3, 4, 1], correct: 3, ok: 'Có 3 hình tròn.' }, { q: 'Câu 2: Có bao nhiêu hình tam giác?', img: '🔺🔺🔺🔺', options: [3, 4, 5, 2], correct: 4, ok: 'Có 4 hình tam giác.' }, { q: 'Câu 3: Có bao nhiêu hình vuông?', img: '🟦🟦', options: [1, 2, 3, 4], correct: 2, ok: 'Có 2 hình vuông.' } ] },
      { type: 'mcq', title: '🧩 Tìm mảnh ghép còn thiếu', sub: 'Một hình vuông lớn bị thiếu một góc vuông nhỏ. Chọn mảnh vừa khít nhé!', questions: [ { q: 'Mảnh ghép nào vừa khít chỗ trống (một ô vuông)?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 1, ok: 'Chỗ trống là một ô vuông nên cần mảnh hình vuông.' } ] }
    ],
    ai: { chips: [ { q: 'Hình vuông khác hình chữ nhật thế nào?', a: 'Cả hai đều có 4 góc vuông. Nhưng hình vuông có 4 cạnh bằng nhau, còn hình chữ nhật có cạnh dài và cạnh ngắn khác nhau em nhé! 🐰' }, { q: 'Hình tam giác có mấy cạnh?', a: 'Hình tam giác có 3 cạnh và 3 góc đó em. 🔺' }, { q: 'Hình tròn có cạnh không?', a: 'Hình tròn không có cạnh, cũng không có góc, nó tròn xoe như cái đĩa vậy! ⭕' } ], fallback: 'Thỏ Toán gợi ý: em hãy đếm số cạnh của hình để nhận biết. Tròn thì không có cạnh, tam giác 3 cạnh, vuông và chữ nhật đều 4 cạnh nhé! 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình tam giác có mấy cạnh?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 4 }, { l: 'D', v: 5 }], correct: 3, hint: 'Đếm các cạnh của hình tam giác.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình vuông có mấy cạnh?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 4 }, { l: 'C', v: 5 }, { l: 'D', v: 6 }], correct: 4, hint: 'Hình vuông có 4 cạnh bằng nhau.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hình tròn không có góc. Đúng hay sai?', correct: true, hint: 'Hình tròn tròn xoe, có góc không?' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có bao nhiêu hình tròn?', img: '🔴🔴🔴', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 4 }, { l: 'D', v: 1 }], correct: 3, hint: 'Đếm từng hình tròn.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hình chữ nhật có 4 góc vuông. Đúng hay sai?', correct: true, hint: 'Nhớ lại đặc điểm của hình chữ nhật.' },
      { type: 'drag_drop', label: 'Kéo thả', q: 'Kéo số đúng: có mấy hình tam giác?', group: '🔺🔺🔺🔺', tiles: [3, 4, 5], correct: 4, hint: 'Đếm số hình tam giác rồi kéo con số đúng.' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối hình với số cạnh của nó.', pairs: [{ img: '🔺 Tam giác', val: 3 }, { img: '🟦 Hình vuông', val: 4 }], hint: 'Tam giác có 3 cạnh, hình vuông có 4 cạnh.' }
    ]
  },

  'bai-8': {
    grade: 1, no: 8, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Thực hành lắp ghép, xếp hình',
    desc: 'Thực hành lắp ghép và xếp hình từ các mảnh hình phẳng.',
    icon: '🚀',
    topic: '📐 Chủ đề 2: Làm quen với một số hình phẳng',
    banner: 'Hôm nay chúng mình dùng các mảnh hình để <b>lắp ghép, xếp hình</b> thật thú vị nhé!',
    steps: ['Khám phá', 'Lắp ghép', 'Chia hình', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '🔍 Khám phá nguyên liệu', sub: 'Bộ mảnh ghép của chúng ta gồm 5 miếng bìa.', html: 'Bộ mảnh ghép gồm <b>5 miếng bìa</b>: 1 hình vuông, 2 hình tam giác lớn và 2 hình chữ nhật nhỏ.<br>Từ các mảnh này ta có thể ghép thành:<br>🏠 <b>Ngôi nhà</b>: hình tam giác làm mái, hình chữ nhật làm tường.<br>🚀 <b>Tên lửa</b>: hình tam giác làm đầu, hình vuông và hình chữ nhật làm thân.' },
      { type: 'mcq', title: '🧩 Lắp ghép ngôi nhà', sub: 'Ghép các mảnh hình thành ngôi nhà của Mai nhé!', questions: [ { q: 'Câu 1: Mái nhà được ghép từ hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 3, ok: 'Mái nhà là hình tam giác.' }, { q: 'Câu 2: Bức tường được ghép từ hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 4, ok: 'Bức tường là hình chữ nhật.' } ] },
      { type: 'mcq', title: '✂️ Chia hình và xếp hình', sub: 'Quan sát và đếm thật kỹ nhé!', questions: [ { q: 'Câu 1: Hình vuông kẻ hai đường chéo thì được chia thành mấy hình tam giác?', options: [2, 3, 4, 6], correct: 4, ok: 'Hai đường chéo chia hình vuông thành 4 hình tam giác.' }, { q: 'Câu 2: Dùng 4 hình tam giác giống nhau xếp lại được hình gì?', img: '🔺🔻🔺🔻', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Trái tim' }, { val: 4, label: 'Ngôi sao' }], correct: 1, ok: 'Ghép 4 hình tam giác lại ta được một hình vuông.' } ] },
      { type: 'mcq', title: '🎯 Tìm mảnh ghép còn thiếu', sub: 'Hình chữ nhật còn thiếu nửa dưới. Chọn mảnh giống nửa trên để ghép cho đủ nhé!', questions: [ { q: 'Mảnh ghép nào hoàn thành hình chữ nhật?', options: [{ val: 1, label: 'Hình chữ nhật' }, { val: 2, label: 'Hình tam giác' }, { val: 3, label: 'Hình vuông' }, { val: 4, label: 'Hình tròn' }], correct: 1, ok: 'Cần một mảnh hình chữ nhật giống nửa trên để ghép cho đủ.' } ] }
    ],
    ai: { chips: [ { q: 'Làm sao ghép được ngôi nhà?', a: 'Em dùng hình tam giác làm mái ở trên, rồi đặt hai hình chữ nhật làm tường ở dưới là thành ngôi nhà rồi! 🏠' }, { q: 'Chia hình vuông thế nào?', a: 'Em kẻ hai đường chéo nối các góc đối nhau, hình vuông sẽ được chia thành 4 hình tam giác bằng nhau. ✂️' }, { q: '4 tam giác xếp thành hình gì?', a: 'Bốn hình tam giác giống nhau chụm lại có thể xếp thành một hình vuông đó em! 🔺' } ], fallback: 'Thỏ Toán gợi ý: em hãy quan sát mảnh hình rồi thử ghép từng phần một nhé. 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Hình vuông kẻ hai đường chéo được chia thành mấy hình tam giác?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 4 }, { l: 'D', v: 5 }], correct: 4, hint: 'Hai đường chéo cắt nhau ở giữa.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Mái nhà thường được ghép từ hình tam giác. Đúng hay sai?', correct: true, hint: 'Nhớ lại ngôi nhà của Mai.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Ghép 4 hình tam giác giống nhau có thể được một hình vuông. Đúng hay sai?', correct: true, hint: 'Nhớ lại bài xếp hình.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bộ mảnh ghép có mấy miếng bìa?', options: [{ l: 'A', v: 3 }, { l: 'B', v: 4 }, { l: 'C', v: 5 }, { l: 'D', v: 6 }], correct: 5, hint: '1 vuông + 2 tam giác + 2 chữ nhật.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Trong bộ mảnh ghép có mấy hình tam giác?', options: [{ l: 'A', v: 1 }, { l: 'B', v: 2 }, { l: 'C', v: 3 }, { l: 'D', v: 4 }], correct: 2, hint: 'Có 2 hình tam giác lớn.' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối hình với số cạnh của nó.', pairs: [{ img: '🟦 Hình vuông', val: 4 }, { img: '🔺 Tam giác', val: 3 }], hint: 'Hình vuông 4 cạnh, tam giác 3 cạnh.' }
    ]
  },

  'bai-9': {
    grade: 1, no: 9, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Luyện tập chung về hình phẳng',
    desc: 'Luyện tập tổng hợp về bốn hình phẳng đã học.',
    icon: '🟦',
    topic: '📐 Chủ đề 2: Làm quen với một số hình phẳng',
    banner: 'Cùng ôn lại bốn hình phẳng: <b>hình vuông, hình tròn, hình tam giác, hình chữ nhật</b> qua các trò chơi vui nhộn nhé!',
    steps: ['Kết nối', 'Phân loại', 'Đếm & chọn', 'Xếp que'],
    blocks: [
      { type: 'info', title: '🔁 Ôn nhanh 4 hình phẳng', sub: 'Nhớ lại tên bốn hình đã học nhé!', html: '<b>Hình vuông</b> 🟦: 4 cạnh bằng nhau, 4 góc vuông.<br><b>Hình tròn</b> ⭕: tròn xoe, không cạnh, không góc.<br><b>Hình tam giác</b> 🔺: 3 cạnh, 3 góc.<br><b>Hình chữ nhật</b> ▭: 4 góc vuông, cạnh dài và cạnh ngắn.<br>Quanh em có rất nhiều đồ vật mang các hình này đấy!' },
      { type: 'mcq', title: '🧩 Kết nối với thực tế', sub: 'Mỗi đồ vật có dạng hình gì? Chọn cho đúng nhé!', questions: [ { q: 'Câu 1: Bánh xe 🛞 có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 2, ok: 'Bánh xe có dạng hình tròn.' }, { q: 'Câu 2: Bìa sách 📕 có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 4, ok: 'Bìa sách có dạng hình chữ nhật.' }, { q: 'Câu 3: Biển báo ⚠️ có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 3, ok: 'Biển báo này có dạng hình tam giác.' }, { q: 'Câu 4: Khung cửa sổ vuông 🪟 có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 1, ok: 'Khung cửa sổ vuông có dạng hình vuông.' } ] },
      { type: 'mcq', title: '🔢 Đếm & chọn', sub: 'Quan sát bức tranh ghép (ngôi nhà, cây thông, cửa sổ, lá cờ) rồi trả lời nhé!', questions: [ { q: 'Câu 1: Trong tranh có mấy hình tam giác (mái nhà, cây thông và lá cờ)?', options: [2, 3, 4, 5], correct: 3, ok: 'Có 3 hình tam giác: mái nhà, cây thông và lá cờ.' }, { q: 'Câu 2: Quả bóng ⚽ có dạng hình gì?', options: [{ val: 1, label: 'Hình vuông' }, { val: 2, label: 'Hình tròn' }, { val: 3, label: 'Hình tam giác' }, { val: 4, label: 'Hình chữ nhật' }], correct: 2, ok: 'Quả bóng có dạng hình tròn.' } ] },
      { type: 'mcq', title: '🟫 Xếp que tính', sub: 'Cùng thử thách xếp hình bằng que tính nhé!', questions: [ { q: 'Câu 1: Một hình tam giác cần ít nhất mấy que tính?', options: [2, 3, 4, 5], correct: 3, ok: 'Một hình tam giác cần 3 que tính.' }, { q: 'Câu 2: Dùng 5 que tính xếp thành hình thoi thì có mấy hình tam giác?', options: [1, 2, 3, 4], correct: 2, ok: '5 que tính xếp thành hình thoi gồm 2 hình tam giác.' } ] }
    ],
    ai: { chips: [ { q: 'Làm sao phân biệt hình vuông và hình chữ nhật?', a: 'Cả hai đều có 4 góc vuông. Hình vuông có 4 cạnh bằng nhau, còn hình chữ nhật có cạnh dài và cạnh ngắn khác nhau em nhé! 🐰' }, { q: 'Hình tam giác có mấy cạnh?', a: 'Hình tam giác có 3 cạnh và 3 góc đó em. 🔺' }, { q: 'Bánh xe là hình gì?', a: 'Bánh xe có dạng hình tròn em nhé, vì nó tròn xoe và không có cạnh nào cả! ⭕' } ], fallback: 'Thỏ Toán gợi ý: em hãy đếm số cạnh của đồ vật để nhận biết hình của nó nhé. 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bức tranh ngôi nhà có mấy hình tam giác (mái, cây, lá cờ)?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 4 }, { l: 'D', v: 5 }], correct: 3, hint: 'Đếm các vật có dạng tam giác.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Một hình tam giác cần ít nhất mấy que tính?', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 4 }, { l: 'D', v: 5 }], correct: 3, hint: 'Tam giác có 3 cạnh.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Quả bóng có dạng hình tròn. Đúng hay sai?', correct: true, hint: 'Quả bóng tròn xoe.' },
      { type: 'true_false', label: 'Đúng / Sai', q: 'Hình vuông và hình chữ nhật đều có 4 góc vuông. Đúng hay sai?', correct: true, hint: 'Nhớ lại đặc điểm hai hình này.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Có mấy đồ vật hình tròn? ⚽ 🪙 🍩', options: [{ l: 'A', v: 2 }, { l: 'B', v: 3 }, { l: 'C', v: 4 }, { l: 'D', v: 1 }], correct: 3, hint: 'Đếm các đồ vật tròn xoe.' },
      { type: 'matching', label: 'Nối cặp', q: 'Nối hình với số cạnh của nó.', pairs: [{ img: '🔺 Tam giác', val: 3 }, { img: '▭ Chữ nhật', val: 4 }], hint: 'Tam giác 3 cạnh, chữ nhật 4 cạnh.' }
    ]
  },

  'bai-10': {
    grade: 1, no: 10, theme: 'green', mascot: '🐣', avatar: '👧',
    title: 'Phép cộng trong phạm vi 10',
    desc: 'Làm quen phép cộng và dấu cộng trong phạm vi 10.',
    icon: '➕',
    topic: '➕ Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10',
    banner: 'Hôm nay chúng mình học <b>phép cộng</b>: gộp lại, thêm vào và làm quen dấu cộng (+) nhé!',
    steps: ['Gộp lại', 'Thêm vào', 'Số 0', 'Luyện tập'],
    blocks: [
      { type: 'info', title: '🔵 Khám phá "Gộp lại"', sub: 'Gộp hai nhóm lại rồi đếm tất cả chính là phép cộng.', html: '<b>Gộp lại</b> hai nhóm rồi đếm tất cả chính là <b>phép cộng</b>. Ta dùng dấu <b>+</b> (đọc là "cộng").<br>Ví dụ: có 3 quả bóng đỏ 🔴🔴🔴 và 2 quả bóng xanh 🔵🔵. Gộp lại được 5 quả bóng: <b>3 + 2 = 5</b>.<br><br>"Thêm vào" cũng là phép cộng: bình có 5 bông hoa 🌸, thêm 2 bông nữa, đếm tiếp 6, 7 — vậy <b>5 + 2 = 7</b>.' },
      { type: 'mcq', title: '🖼️ Cộng qua hình ảnh', sub: 'Đếm tổng số đồ vật ở hai nhóm rồi chọn kết quả đúng nhé!', questions: [ { q: 'Câu 1: 2 + 3 = ?', img: '🐻🐻 ➕ 🐻🐻🐻', options: [4, 5, 6, 3], correct: 5, ok: '2 gấu và 3 gấu là 5 gấu.' }, { q: 'Câu 2: 4 + 2 = ?', img: '🦆🦆🦆🦆 ➕ 🦆🦆', options: [5, 6, 7, 4], correct: 6, ok: '4 vịt và 2 vịt là 6 vịt.' }, { q: 'Câu 3: 3 + 4 = ?', img: '🍎🍎🍎 ➕ 🍎🍎🍎🍎', options: [6, 7, 8, 5], correct: 7, ok: '3 táo và 4 táo là 7 táo.' } ] },
      { type: 'mcq', title: '0️⃣ Số 0 trong phép cộng', sub: 'Một số cộng với 0 thì bằng chính số đó. Cùng kiểm tra nhé!', questions: [ { q: 'Câu 1: 4 + 0 = ?', img: '🍊🍊🍊🍊 ➕ ∅', options: [0, 3, 4, 5], correct: 4, ok: '4 cộng 0 bằng 4.' }, { q: 'Câu 2: 0 + 6 = ?', options: [5, 6, 7, 0], correct: 6, ok: '0 cộng 6 bằng 6.' }, { q: 'Câu 3: 5 + 0 = ?', options: [4, 5, 6, 0], correct: 5, ok: '5 cộng 0 bằng 5.' } ] },
      { type: 'mcq', title: '🧱 Luyện tập: Tháp số và bóng bằng 10', sub: 'Hai số dưới cộng lại bằng số trên. Tính thật cẩn thận nhé!', questions: [ { q: 'Câu 1: 2 + 1 = ?', options: [2, 3, 4, 5], correct: 3, ok: '2 cộng 1 bằng 3.' }, { q: 'Câu 2: 3 + 5 = ?', options: [6, 7, 8, 9], correct: 8, ok: '3 cộng 5 bằng 8.' }, { q: 'Câu 3: Phép tính nào bằng 10?', img: '6 + 4   hay   7 + 2', options: [{ val: 1, label: '6 + 4' }, { val: 2, label: '7 + 2' }], correct: 1, ok: '6 + 4 = 10, còn 7 + 2 = 9.' } ] }
    ],
    ai: { chips: [ { q: 'Dấu cộng (+) nghĩa là gì?', a: 'Dấu cộng (+) nghĩa là gộp lại, thêm vào em nhé. Ví dụ 3 + 2 là gộp 3 và 2 lại được 5. ➕' }, { q: 'Vì sao cộng với 0 không đổi?', a: 'Vì 0 nghĩa là không có gì, nên thêm 0 vào một số thì số đó vẫn giữ nguyên. Ví dụ 5 + 0 = 5. 0️⃣' }, { q: 'Làm sao để đếm thêm cho nhanh?', a: 'Em giữ số lớn trong đầu rồi đếm tiếp số còn lại. Ví dụ 5 + 2: nhớ 5 rồi đếm tiếp 6, 7. 🎯' } ], fallback: 'Thỏ Toán gợi ý: phép cộng là gộp hai nhóm lại rồi đếm tất cả. Em thử đếm thêm từ số lớn nhé! 🐰' },
    quiz: [
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '3 + 2 = ?', img: '🔴🔴🔴 ➕ 🔵🔵', options: [{ l: 'A', v: 4 }, { l: 'B', v: 5 }, { l: 'C', v: 6 }, { l: 'D', v: 3 }], correct: 5, hint: 'Đếm tất cả các quả bóng.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 5 + __ = 7', correct: 2, hint: 'Từ 5 đếm thêm mấy nữa thì tới 7?' },
      { type: 'true_false', label: 'Đúng / Sai', q: '4 + 0 = 4. Đúng hay sai?', correct: true, hint: 'Cộng với 0 thì số không đổi.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: '6 + 4 = ?', options: [{ l: 'A', v: 8 }, { l: 'B', v: 9 }, { l: 'C', v: 10 }, { l: 'D', v: 7 }], correct: 10, hint: 'Đếm thêm 4 từ số 6.' },
      { type: 'multiple_choice', label: 'Trắc nghiệm', q: 'Bình có 5 bông hoa, thêm 2 bông nữa là mấy bông?', img: '🌸🌸🌸🌸🌸 ➕ 🌸🌸', options: [{ l: 'A', v: 6 }, { l: 'B', v: 7 }, { l: 'C', v: 8 }, { l: 'D', v: 5 }], correct: 7, hint: 'Đếm tiếp 6, 7 từ số 5.' },
      { type: 'fill_blank', label: 'Điền số', q: 'Điền số còn thiếu: 7 + __ = 10', correct: 3, hint: 'Từ 7 đếm thêm mấy nữa thì tới 10?' },
      { type: 'drag_drop', label: 'Kéo thả', q: 'Kéo số đúng vào ô: 8 + 1 = __', group: '🍊🍊🍊🍊🍊🍊🍊🍊🍊', tiles: [8, 9, 10], correct: 9, hint: 'Đếm tất cả các quả cam.' }
    ]
  }

});
