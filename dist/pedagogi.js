// Pengelompokan belajar Nalar, bukan bobot bab atau paket resmi UKPPPG.
export const pedagogiTopics = [
  {
    id:'karakteristik', title:'Karakteristik & kebutuhan murid', icon:'user', minutes:8,
    questionIds:['PU-005','PU-009','PU-025'], sources:['R03','R08'],
    intro:'Kenali murid melalui bukti belajar, percakapan, dan pengamatan. Kebutuhan serta kesiapan dapat berubah; satu hasil tes tidak cukup untuk memberi label kemampuan.',
    concepts:[
      ['Kesiapan, minat, dan konteks','Kesiapan adalah penguasaan prasyarat untuk tujuan tertentu. Minat dapat menjadi pintu masuk kegiatan. Bahasa, pengalaman, dukungan keluarga, serta akses sumber belajar membantu menjelaskan konteks tanpa menentukan batas kemampuan murid.'],
      ['Asesmen awal yang berguna','Gunakan pertanyaan singkat, contoh pekerjaan, observasi, atau percakapan untuk menemukan apa yang sudah dipahami dan letak kesulitannya. Periksa dugaan melalui lebih dari satu bukti sebelum menentukan bantuan.'],
      ['Perkembangan dan dukungan','Sesuaikan bahasa, kompleksitas tugas, waktu pemrosesan, dan bantuan dengan kebutuhan aktual. Contoh konkret, pemodelan, serta pertanyaan penuntun dapat dijembatani menuju tugas yang lebih mandiri.'],
      ['Partisipasi dan motivasi','Sediakan waktu berpikir, berbagi berpasangan, dan pilihan cara merespons. Umpan balik pada strategi dan kemajuan lebih membantu daripada label pintar atau lemah. Harapan yang menantang perlu disertai dukungan realistis.']
    ],
    steps:['Tentukan prasyarat tujuan belajar.','Kumpulkan bukti dan dengarkan sudut pandang murid.','Pilih bantuan yang menjawab hambatan spesifik.','Cek kembali kemajuan dan perbarui bantuan.'],
    example:{problem:'Seorang murid jarang berbicara dalam diskusi, tetapi catatan tertulisnya menunjukkan alasan yang kuat.',action:'Guru menyediakan waktu menulis, diskusi berpasangan, dan kesempatan menyampaikan gagasan melalui catatan sebelum berbagi lisan.',reason:'Kesempatan berpartisipasi diperluas tanpa menyimpulkan bahwa diam berarti tidak memahami konsep.'},
    pitfalls:['Menganggap skor awal sebagai label kemampuan permanen.','Memaksakan pengajaran berdasarkan label gaya belajar visual, auditori, atau kinestetik yang tetap.','Menurunkan harapan hanya berdasarkan latar belakang keluarga atau disabilitas.'],
    recall:'Bukti apa yang membedakan kesulitan memahami konsep dengan kesulitan menyampaikan jawaban?'
  },
  {
    id:'teori-belajar', title:'Teori belajar & pembelajaran bermakna', icon:'bulb', minutes:10,
    questionIds:['PU-011','PU-017','PU-023'], sources:['R03','R08'],
    intro:'Gunakan teori belajar untuk menjelaskan kebutuhan dan memilih tindakan. Keaktifan fisik atau suasana ramai belum menunjukkan bahwa murid memahami konsep.',
    concepts:[
      ['Behaviorisme dan kognitivisme','Pendekatan perilaku membantu melatih rutinitas melalui latihan dan penguatan yang jelas. Pendekatan kognitif menyoroti perhatian, pengetahuan awal, ingatan, dan strategi berpikir. Pilih berdasarkan tujuan, bukan satu pendekatan untuk semua persoalan.'],
      ['Konstruktivisme dan interaksi sosial','Murid membangun pemahaman dengan menghubungkan gagasan baru dan pengetahuan awal, menguji penjelasan, serta berdiskusi. Guru tetap memberi arahan dan bantuan sementara yang berkurang saat murid lebih mampu.'],
      ['Humanistik dan regulasi diri','Rasa aman, hubungan yang menghargai, serta tujuan yang dipahami membantu keterlibatan. Murid dilatih menetapkan target, memilih strategi, memantau pemahaman, dan merefleksikan hasil; kebebasan perlu struktur serta tanggung jawab.'],
      ['Pembelajaran mendalam','Berkesadaran berarti memahami tujuan dan memantau proses belajar. Bermakna menghubungkan konsep dengan pengalaman serta konteks. Menggembirakan memberi rasa dihargai dan tantangan yang membangun, bukan menghilangkan kesulitan. Pengalaman belajar meliputi memahami, mengaplikasi, dan merefleksi.']
    ],
    steps:['Ungkap gagasan awal melalui prediksi atau pertanyaan.','Berikan pengalaman atau bukti untuk menguji gagasan.','Ajak murid menjelaskan dan menerapkan pada situasi baru.','Tutup dengan refleksi strategi dan perubahan pemahaman.'],
    example:{problem:'Murid hafal definisi kerja sama tetapi belum dapat menggunakannya untuk menilai pembagian tugas kelompok.',action:'Guru menyajikan dua kasus pembagian tugas, meminta murid membandingkan bukti keadilan, lalu merefleksikan praktik kelompok sendiri.',reason:'Konsep digunakan untuk menganalisis situasi dan memandu tindakan, sehingga belajar melampaui hafalan.'},
    pitfalls:['Menyebut semua kerja kelompok sebagai konstruktivisme tanpa memeriksa proses berpikir.','Menganggap penemuan harus berlangsung tanpa arahan guru.','Memilih kegiatan seru yang tidak memberi bukti ketercapaian tujuan.'],
    recall:'Bagaimana mengetahui bahwa murid dapat mentransfer konsep, bukan sekadar mengingat definisinya?'
  },
  {
    id:'perencanaan', title:'Kurikulum, tujuan & perencanaan', icon:'file', minutes:10,
    questionIds:['PU-004','PU-007','PU-026'], sources:['R03','R08'],
    intro:'Rancang pembelajaran dari kompetensi yang ingin dicapai, bukti ketercapaian, lalu pengalaman belajar. Media dan kegiatan dipilih untuk melayani tujuan tersebut.',
    concepts:[
      ['CP, tujuan, dan alur','Capaian Pembelajaran memberi arah kompetensi dalam fase. Tujuan Pembelajaran memperjelas kompetensi dan lingkup materi yang akan dipelajari. Alur Tujuan Pembelajaran menyusun urutan yang logis dengan memperhatikan prasyarat dan perkembangan kemampuan.'],
      ['Bukti dan kriteria keberhasilan','Tentukan perilaku, produk, atau penjelasan yang menunjukkan tujuan tercapai. Kriteria perlu menjelaskan kualitas bukti tersebut, bukan hanya skor batas yang tidak menjelaskan apa yang dikuasai. Bagikan kriteria sebelum tugas.'],
      ['Keselarasan desain','Tujuan menganalisis memerlukan kesempatan membandingkan bukti dan menyusun alasan, beserta asesmen yang meminta analisis. Kegiatan menyalin tidak cukup sebagai satu-satunya kesempatan belajar menuju tujuan itu.'],
      ['Strategi, sumber, dan adaptasi','Diskusi, pemodelan langsung, inkuiri, masalah, dan proyek dipilih sesuai tujuan, kesiapan, serta waktu. Pembelajaran berbasis masalah berpusat pada penyelidikan masalah; proyek melibatkan proses menghasilkan karya. Teknologi dinilai dari manfaat, aksesibilitas, dan alternatif saat terkendala.']
    ],
    steps:['Telaah CP, konteks, dan bukti kesiapan murid.','Rumuskan tujuan serta kriteria keberhasilan.','Tentukan tugas atau asesmen yang menghasilkan bukti.','Susun kegiatan, bantuan, media, dan tindak lanjut.'],
    example:{problem:'Tujuan meminta murid menilai keandalan informasi, sedangkan tugas hanya meminta menyalin pengertian sumber tepercaya.',action:'Guru mengganti tugas menjadi perbandingan dua sumber dengan kriteria penulis, bukti, tanggal, dan alasan penilaian, lalu merancang latihan analisis sebelum asesmen.',reason:'Kemampuan yang dipraktikkan dan dinilai sama dengan tuntutan tujuan.'},
    pitfalls:['Memilih aplikasi dahulu lalu menyesuaikan tujuan secara paksa.','Menyalin modul sekolah lain tanpa menelaah kebutuhan kelas.','Menyamakan tujuan belajar dengan daftar kegiatan guru.'],
    recall:'Apakah tugas yang dipilih benar-benar membuktikan kemampuan yang dinyatakan dalam tujuan?'
  },
  {
    id:'diferensiasi', title:'Diferensiasi & pendidikan inklusif', icon:'layers', minutes:9,
    questionIds:['PU-001','PU-010','PU-012','PU-027'], sources:['R03','R08'],
    intro:'Perluas akses dan sesuaikan bantuan agar setiap murid mendapat kesempatan belajar yang bermakna. Penyesuaian didasarkan bukti kebutuhan serta dievaluasi kembali.',
    concepts:[
      ['Diferensiasi yang dinamis','Variasikan sumber, proses, bantuan, atau bentuk produk sesuai kebutuhan. Kelompok kesiapan dapat berubah antar tujuan dan setelah intervensi. Diferensiasi tidak mengharuskan satu rencana unik untuk setiap murid setiap saat.'],
      ['Akses dan akomodasi','Identifikasi hambatan seperti teks sulit diakses, instruksi ambigu, atau alat yang tidak tersedia. Gunakan teks alternatif, transkrip, ukuran huruf yang sesuai, dan pilihan respons yang tetap mengukur kemampuan sasaran. Akomodasi akses tidak otomatis menurunkan kompetensi.'],
      ['Bantuan bertahap','Berikan contoh, pecahan langkah, petunjuk, atau latihan prasyarat untuk kesulitan tertentu. Kurangi bantuan ketika bukti menunjukkan murid lebih mandiri. Gunakan cek singkat untuk memastikan bantuan bekerja.'],
      ['Remedial dan pengayaan','Remedial memperbaiki kesulitan melalui cara atau bantuan yang sesuai, kemudian mengecek kemajuan. Pengayaan memperdalam alasan atau menerapkan konsep dalam konteks baru. Keduanya bukan sekadar menambah jumlah soal yang sama.']
    ],
    steps:['Petakan hambatan dan kemampuan sasaran.','Tentukan dukungan atau akses yang sesuai.','Sediakan tugas bermakna bagi murid yang sudah siap.','Evaluasi kemajuan dan ubah pengelompokan bila perlu.'],
    example:{problem:'Tujuan menilai kemampuan berargumentasi, tetapi sebagian murid kesulitan mengetik panjang dengan perangkat yang tersedia.',action:'Guru mengizinkan respons lisan yang direkam atau jawaban tertulis, dengan kriteria kualitas argumen yang sama dan dukungan akses sesuai kebutuhan.',reason:'Cara merespons dapat berbeda ketika keterampilan mengetik bukan kompetensi yang sedang diukur.'},
    pitfalls:['Membuat kelompok pintar dan lemah yang permanen.','Memberi tugas lebih sedikit tanpa memastikan target dan kebutuhan.','Selalu menjadikan murid cepat sebagai pengganti guru.'],
    recall:'Bagian mana dari tugas yang merupakan kompetensi sasaran, dan bagian mana yang hanya hambatan akses?'
  },
  {
    id:'asesmen', title:'Asesmen & umpan balik', icon:'chart', minutes:12,
    questionIds:['PU-002','PU-006','PU-014','PU-022'], sources:['R03','R08'],
    intro:'Asesmen mengumpulkan bukti untuk menentukan langkah belajar dan menilai ketercapaian tujuan. Instrumen yang baik perlu diikuti interpretasi yang hati-hati dan tindakan yang jelas.',
    concepts:[
      ['Fungsi asesmen','Asesmen awal memetakan kesiapan dan kebutuhan. Formatif memberi informasi selama proses agar guru dan murid dapat memperbaiki langkah. Sumatif menilai capaian pada lingkup pembelajaran tertentu. Fungsi ditentukan tujuan penggunaan hasil, bukan semata bentuk tes atau waktunya.'],
      ['Kualitas bukti','Validitas menyangkut ketepatan interpretasi bukti terhadap kemampuan yang hendak dinilai. Konsistensi kriteria membantu keterandalan. Gunakan pertanyaan, unjuk kerja, observasi, dan produk sesuai tujuan; hindari menilai hal yang tidak relevan seperti harga perangkat.'],
      ['Rubrik dan keadilan','Rubrik menjelaskan aspek dan tingkat kualitas kinerja. Bagikan kriteria, terapkan konsisten, dan akomodasi akses tanpa mengubah kemampuan sasaran secara sembarangan. Pada tugas terbuka, solusi berbeda dapat sah bila memenuhi kriteria dan alasan yang kuat.'],
      ['Umpan balik yang dapat digunakan','Jelaskan bagian yang telah memenuhi tujuan, kesenjangan yang spesifik, dan langkah perbaikan. Beri kesempatan revisi atau latihan lanjutan. Skor atau pujian umum saja tidak menjelaskan cara memperbaiki strategi.'],
      ['Tindak lanjut dan pelaporan','Analisis pola kesalahan per tujuan, bukan hanya rata-rata kelas. Tentukan remedial, pengayaan, atau penyesuaian pengajaran dan cek kemajuan. Laporan menjelaskan capaian serta kebutuhan dukungan dengan menjaga kerahasiaan data.']
    ],
    steps:['Tentukan kemampuan serta bukti yang dibutuhkan.','Kumpulkan respons dan nilai dengan kriteria.','Cari pola pemahaman dan miskonsepsi.','Berikan umpan balik, intervensi, dan pemeriksaan ulang.'],
    example:{problem:'Mayoritas murid memilih jawaban salah yang sama pada satu indikator meski nilai totalnya beragam.',action:'Guru menelaah alasan murid, memberi contoh tandingan untuk miskonsepsi itu, lalu memberikan tugas singkat pada indikator yang sama.',reason:'Pola respons mengarahkan intervensi. Tes ulang tanpa pembelajaran belum mengatasi sumber kesulitan.'},
    pitfalls:['Menganggap semua tes akhir otomatis formatif.','Mengubah kriteria setelah tugas dikumpulkan tanpa dasar yang adil.','Menyimpulkan penguasaan individual hanya dari produk kelompok.'],
    recall:'Keputusan pembelajaran apa yang berubah setelah hasil asesmen ini dibaca?'
  },
  {
    id:'lingkungan', title:'Pengelolaan kelas & rasa aman', icon:'shield', minutes:8,
    questionIds:['PU-013','PU-016'], sources:['R03','R19'],
    intro:'Kelas yang aman menyediakan rutinitas, interaksi yang menghargai, dan kesempatan berpartisipasi. Keberhasilan pengelolaan kelas dilihat dari kualitas belajar serta kesejahteraan murid.',
    concepts:[
      ['Pencegahan dan kesepakatan','Bangun aturan yang jelas, masuk akal, dan dipahami bersama; ajarkan rutinitas serta contoh perilaku yang diharapkan. Transisi yang terencana dan tugas yang sesuai mengurangi kebingungan serta waktu tanpa arah.'],
      ['Disiplin yang mendidik','Pisahkan perilaku dari identitas murid. Hentikan gangguan secara proporsional, dengarkan konteks, dan arahkan pada tanggung jawab serta perbaikan. Hindari ancaman, kekerasan, atau mempermalukan sebagai alat pengendalian.'],
      ['Keselamatan dan perlindungan','Ketika muncul perundungan atau tanda bahaya, utamakan keselamatan dan dukungan bagi murid terdampak. Catat fakta yang relevan dan tindak lanjuti melalui prosedur sekolah serta pihak berwenang sesuai kebutuhan; jangan menyalahkan korban.'],
      ['Kolaborasi yang terstruktur','Gunakan peran bergilir, aturan mendengar, waktu berpikir, dan bukti kontribusi individual. Amati apakah semua anggota mendapat kesempatan, bukan hanya apakah produk selesai cepat.']
    ],
    steps:['Pastikan keselamatan dan hentikan perilaku yang merugikan.','Identifikasi pemicu serta kebutuhan tanpa memberi label.','Terapkan dukungan dan konsekuensi yang mendidik sesuai prosedur.','Pantau apakah keamanan serta partisipasi membaik.'],
    example:{problem:'Dalam kelompok, satu murid menyelesaikan seluruh tugas sementara anggota lain hanya menyalin.',action:'Guru membagi peran yang bergilir, meminta penjelasan individual, dan memandu kelompok menyepakati cara bergiliran menyampaikan gagasan.',reason:'Struktur interaksi memberi kesempatan belajar serta tanggung jawab kepada semua anggota.'},
    pitfalls:['Menyamakan kelas tenang dengan kelas yang pasti belajar.','Meminta korban perundungan menyelesaikan masalah sendiri.','Menilai keberhasilan kelompok hanya dari cepatnya produk selesai.'],
    recall:'Apakah tindakan ini memulihkan rasa aman sekaligus mengajarkan perilaku yang diharapkan?'
  },
  {
    id:'etika', title:'Etika, komunikasi & kolaborasi', icon:'user', minutes:8,
    questionIds:['PU-008','PU-018','PU-021'], sources:['R03','R19'],
    intro:'Keputusan guru perlu adil, menjaga martabat serta privasi murid, dan membuka kerja sama. Komunikasi yang efektif menghubungkan bukti dengan dukungan yang dapat dilaksanakan.',
    concepts:[
      ['Integritas dan keadilan','Gunakan bukti kompetensi serta kriteria yang relevan. Hindari konflik kepentingan, manipulasi nilai, atau membedakan kesempatan karena kedekatan pribadi. Keteladanan juga tampak ketika mengakui keterbatasan dan memperbaiki kesalahan.'],
      ['Komunikasi empatik','Dengarkan terlebih dahulu, gunakan bahasa yang jelas dan menghargai, serta periksa apakah pesan dipahami. Bedakan pengamatan dengan penilaian pribadi. Sediakan cara komunikasi yang sesuai dengan kebutuhan bahasa atau akses murid.'],
      ['Privasi dan pelibatan keluarga','Bahas capaian individual secara privat dengan pihak yang berkepentingan. Jelaskan bukti, dengarkan konteks keluarga, sepakati bentuk dukungan dan waktu tindak lanjut. Jangan menyebarkan data seluruh kelas untuk membahas satu anak.'],
      ['Kolaborasi profesional','Bahas masalah nyata dengan rekan atau komunitas belajar, gunakan data yang dianonimkan, dan uji strategi hasil diskusi. Kolaborasi berdampak ketika ada tindak lanjut di kelas, bukan hanya pertemuan atau sertifikat.']
    ],
    steps:['Periksa fakta, pihak terdampak, dan batas kerahasiaan.','Dengarkan sudut pandang yang relevan secara empatik.','Sepakati tindakan dengan tanggung jawab yang jelas.','Tinjau dampak dan lanjutkan komunikasi.'],
    example:{problem:'Orang tua mempertanyakan rendahnya capaian anak dan meminta perbandingan dengan nilai teman sekelas.',action:'Guru membahas pekerjaan anak serta kriteria secara privat, menjelaskan kebutuhan dukungan tanpa membuka identitas atau nilai murid lain, lalu menyepakati tindak lanjut.',reason:'Kerja sama dibangun dari bukti dan kebutuhan anak sambil menjaga privasi seluruh murid.'},
    pitfalls:['Membandingkan anak secara terbuka sebagai motivasi.','Menganggap kritik selalu serangan pribadi.','Menyebarkan identitas murid ketika meminta masukan komunitas.'],
    recall:'Apakah komunikasi ini membantu dukungan belajar tanpa merendahkan atau membuka data yang tidak diperlukan?'
  },
  {
    id:'refleksi', title:'Refleksi & pengembangan profesional', icon:'history', minutes:10,
    questionIds:['PU-003','PU-015','PU-019','PU-020','PU-024','PU-028','PU-029','PU-030'], sources:['R03','R08','R19'],
    intro:'Refleksi menghubungkan tujuan, keputusan mengajar, bukti dampak, dan rencana perbaikan. Pengalaman yang belum berhasil tetap dapat menjadi dasar pembelajaran profesional yang jujur.',
    concepts:[
      ['Deskripsi dan analisis','Deskripsi menjawab apa yang terjadi; analisis memeriksa mengapa hasil berbeda dari harapan. Gunakan contoh respons, pekerjaan murid, atau observasi. Pisahkan data yang terlihat dari dugaan penyebab.'],
      ['Siklus perbaikan','Tentukan masalah yang spesifik, pilih perubahan yang masuk akal, laksanakan, lalu kumpulkan bukti pada indikator yang relevan. Hindari mengubah terlalu banyak hal sekaligus jika ingin memahami kontribusi suatu strategi.'],
      ['Batas kesimpulan','Nilai yang naik belum otomatis membuktikan satu metode sebagai satu-satunya penyebab. Perhatikan kesetaraan tugas, waktu latihan, konteks, dan dukungan lain. Nyatakan keterbatasan serta apa yang perlu diperiksa berikutnya.'],
      ['Studi kasus dan UKin','Gunakan pengalaman sendiri: jelaskan masalah, tindakan beserta alasannya, hasil yang didukung bukti, dan pelajaran untuk perbaikan. Persiapan wawancara perlu menghubungkan keputusan pedagogis dengan bukti praktik, bukan menghafal klaim keberhasilan.'],
      ['Pengembangan diri','Prioritaskan kebutuhan yang ditemukan dari praktik, belajar bersama rekan, uji penerapannya, dan nilai dampak pada murid. Masukan murid serta rekan menjadi data untuk meninjau desain, komunikasi, dan asesmen.']
    ],
    steps:['Nyatakan masalah dan indikator keberhasilan yang spesifik.','Tunjukkan bukti awal serta alasan memilih tindakan.','Bandingkan bukti hasil dengan tujuan secara jujur.','Tentukan satu perbaikan dan cara memantau dampaknya.'],
    example:{problem:'Tugas proyek selesai, tetapi banyak murid tidak dapat menjelaskan konsep yang digunakan.',action:'Guru menelaah penjelasan individual, menambahkan pemodelan dan pertanyaan penuntun, lalu mengecek pemahaman pada masalah baru.',reason:'Penyelesaian produk belum membuktikan pemahaman; refleksi mengubah pengajaran berdasarkan bukti kesenjangan itu.'},
    pitfalls:['Merekayasa hasil agar laporan selalu terlihat sukses.','Menyalin pengalaman orang lain sebagai pengalaman sendiri.','Menggunakan kesan kelas ramai sebagai satu-satunya bukti dampak.'],
    recall:'Perubahan apa yang akan dilakukan berikutnya, dan bukti apa yang menunjukkan perubahan itu membantu murid?'
  }
];

export function pedagogiTopicFor(questionId) {
  return pedagogiTopics.find(t=>t.questionIds.includes(questionId));
}

export function selectPedagogiQuestions(bank, topicId=null) {
  const topic=topicId===null?null:pedagogiTopics.find(t=>t.id===topicId);
  if(topicId!==null&&!topic)throw new Error('Topik Pedagogi Umum tidak ditemukan.');
  return bank.filter(q=>q.section==='PU'&&(!topic||topic.questionIds.includes(q.id)))
    .map(q=>({...q,topic:pedagogiTopicFor(q.id)?.title||q.topic}));
}

export const pedagogiTryoutMinutes = 55; // Durasi latihan Nalar, bukan durasi resmi terpisah.
