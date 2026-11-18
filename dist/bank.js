// Soal latihan orisinal. R03: kisi-kisi UKPPPG; R05: panduan mapel; R08: pedagogi.
const bank=[];
const A='Algoritma & pemrograman', B='Berpikir komputasional', D='Analisis data', L='Literasi digital', N='Sistem & jaringan', T='Pembelajaran Informatika', U='Pedagogi umum';
function single(id,topic,stem,choices,explanation,codes=['P.1','PF.2']) {
  bank.push({id,section:id.startsWith('PU')?'PU':'PCK',topic,type:'single_choice',stem,options:Object.fromEntries(choices.map((v,i)=>[String.fromCharCode(65+i),v])),answer:'A',explanation,competency_codes:codes,source_ids:id.startsWith('PU')?['R03','R08']:['R03','R05']});
}
function multi(id,topic,stem,choices,answer,explanation,codes=['P.6','PF.2']) {
  bank.push({id,section:id.startsWith('PU')?'PU':'PCK',topic,type:'multiple_response',stem,options:Object.fromEntries(choices.map((v,i)=>[String.fromCharCode(65+i),v])),answer,explanation,competency_codes:codes,source_ids:id.startsWith('PU')?['R03','R08']:['R03','R05']});
}
function matrix(id,topic,stem,statements,values,explanation,codes=['P.1','PF.2']) {
  bank.push({id,section:id.startsWith('PU')?'PU':'PCK',topic,type:'category_matrix',stem,options:statements.map((text,i)=>({id:String(i),text})),answer:Object.fromEntries(values.map((v,i)=>[String(i),v?'Benar':'Salah'])),categories:['Benar','Salah'],explanation,competency_codes:codes,source_ids:id.startsWith('PU')?['R03','R08']:['R03','R05']});
}
single('INF-007',B,'Murid akan membuat aplikasi peminjaman buku. Ia langsung menulis seluruh kode tanpa memetakan tugas dan sering kehilangan arah. Bantuan awal yang paling mendukung dekomposisi adalah ...',[
 'Mengajak murid memecah kebutuhan menjadi pencatatan buku, peminjaman, dan pengembalian beserta hubungan datanya','Memberikan kode lengkap agar murid segera selesai','Meminta murid mengganti bahasa pemrograman','Meminta murid menghafal definisi aplikasi'],
 'Dekomposisi membagi persoalan menjadi bagian yang dapat ditangani dan dihubungkan. Menyalin kode, mengganti bahasa, atau menghafal definisi tidak menyelesaikan kesulitan memetakan masalah.');
single('INF-008',B,'Dua kelompok menemukan algoritma berbeda yang sama-sama menghasilkan rute valid. Pertanyaan guru yang paling tepat untuk memperdalam penalaran adalah ...',[
 'Pada kondisi apa setiap rute lebih efisien, dan bukti apa yang mendukung perbandingan kalian?','Kelompok mana yang selesai paling awal sehingga pasti benar?','Mengapa kalian tidak memakai satu cara yang sama?','Siapa yang menggunakan istilah teknis paling banyak?'],
 'Perbandingan perlu kriteria dan bukti, misalnya jarak atau jumlah langkah. Waktu penyelesaian tugas, keseragaman cara, dan banyaknya istilah bukan bukti efisiensi algoritma.', ['P.1','P.6','PF.2']);
single('INF-009',B,'Untuk mengenalkan pencarian biner dengan kartu bernomor, prasyarat yang harus dipastikan guru adalah ...',[
 'Kartu telah diurutkan dan murid memahami perbandingan nilai tengah dengan target','Semua kartu memakai warna berbeda','Jumlah kartu harus selalu genap','Target selalu berada tepat di tengah'],
 'Pencarian biner menyingkirkan separuh ruang pencarian berdasarkan urutan. Tanpa urutan, perbandingan dengan nilai tengah tidak dapat menentukan sisi target. Warna, jumlah genap, dan target di tengah bukan prasyarat.');
single('INF-010',B,'Seorang murid menganggap algoritma hanya dapat ditulis sebagai kode program. Aktivitas yang paling tepat untuk menantang gagasan ini adalah ...',[
 'Menyusun instruksi terurut menuju lokasi di peta kertas, lalu meminta teman menjalankannya','Menunjukkan lebih banyak bahasa pemrograman tanpa membahas instruksi','Meminta murid mengetik lebih cepat','Menghindari pembahasan algoritma sampai tersedia komputer'],
 'Instruksi yang dapat dijalankan orang lain menunjukkan algoritma sebagai langkah pemecahan masalah, tidak bergantung pada kode komputer. Opsi lain mempertahankan atau menghindari miskonsepsi.');
matrix('INF-011',B,'Dalam kegiatan membuat model antrean kantin, nilai setiap pernyataan berikut.',[
 'Memilih hanya atribut yang memengaruhi urutan layanan merupakan bentuk abstraksi','Memecah proses menjadi datang, mengantre, dan dilayani merupakan dekomposisi','Model harus memuat seluruh detail dunia nyata agar berguna'],[true,true,false],
 'Abstraksi memilih detail yang relevan; dekomposisi memecah proses. Model justru menyederhanakan realitas sesuai tujuan, sehingga memasukkan semua detail tidak selalu membantu.');
single('INF-012',B,'Murid mengusulkan cara tercepat mencari nama dalam daftar yang belum terurut dengan langsung membuang separuh daftar. Tindak lanjut terbaik adalah ...',[
 'Meminta murid menunjukkan dasar pembuangan separuh data dan menguji apakah target dapat terbuang','Menerima karena membuang data selalu mempercepat pencarian secara benar','Menolak tanpa meminta alasan','Mengurutkan ulang secara diam-diam lalu menyatakan cara murid benar'],
 'Contoh tandingan menguji validitas strategi dan mengungkap prasyarat yang hilang. Kecepatan tidak cukup bila target dapat terbuang; penolakan tanpa alasan dan perubahan diam-diam tidak membangun pemahaman.');
single('INF-013',A,'Perhatikan pseudocode berikut. Semua baris dijalankan berurutan.\n\nx ← 3\ny ← x\nx ← 7\nOUTPUT y\n\nSeorang murid memprediksi keluaran 7. Representasi yang paling membantu menjelaskan keluaran sebenarnya adalah ...',[
 'Tabel nilai x dan y setelah setiap baris untuk menunjukkan bahwa penugasan menyalin nilai saat baris dijalankan','Pernyataan bahwa variabel selalu berubah bersama','Mengganti nama semua variabel tanpa menelusuri nilainya','Meminta menghafal keluaran 7 untuk semua program sejenis'],
 'Keluaran adalah 3. Ketika y menerima x, nilainya 3; perubahan x berikutnya tidak mengubah y dalam pseudocode nilai skalar ini. Tabel jejak memperjelas urutan penugasan.');
single('INF-014',A,'Murid menulis kondisi usia ≥ 17 OR memiliki_kartu untuk layanan yang mensyaratkan KEDUANYA. Cara terbaik memeriksa pemahaman operator adalah ...',[
 'Membuat empat kombinasi kondisi benar/salah dan membandingkan keputusan OR dengan syarat layanan','Mengganti simbol tanpa membahas maknanya','Menguji hanya orang yang memenuhi kedua syarat','Menyatakan OR dan AND selalu dapat dipertukarkan'],
 'Tabel kombinasi mengungkap bahwa OR menerima satu syarat saja, sedangkan AND menuntut keduanya. Pengujian hanya pada kondisi keduanya benar tidak membedakan kedua operator.', ['P.1','P.6','PF.2']);
single('INF-015',A,'Program menjumlahkan bilangan 1 sampai n, tetapi variabel total diinisialisasi ulang di dalam loop pada setiap putaran. Strategi debugging paling sesuai adalah ...',[
 'Menelusuri nilai total sebelum dan sesudah setiap iterasi untuk menemukan mengapa hasil sebelumnya hilang','Menambah waktu eksekusi','Menghapus semua input uji','Mengganti warna teks editor'],
 'Inisialisasi di dalam loop menghapus akumulasi sebelumnya. Penelusuran perubahan state mengungkap sumber kesalahan logika; waktu eksekusi dan tampilan editor tidak memperbaikinya.');
single('INF-016',A,'Murid diminta merancang fungsi diskon dan menguji nilai tepat pada batas diskon. Mengapa kasus batas penting?',[
 'Mendeteksi kesalahan penggunaan <, ≤, >, atau ≥ pada titik perubahan aturan','Memastikan semua input menghasilkan keluaran sama','Menggantikan seluruh pengujian lain','Membuktikan program benar untuk semua kemungkinan input hanya dengan satu uji'],
 'Kasus batas menguji kondisi di sekitar perubahan aturan. Ia melengkapi pengujian biasa, bukan menggantikannya atau membuktikan semua input pasti benar.');
single('INF-017',A,'Murid menggunakan indeks 1 sampai 5 untuk membaca list lima elemen yang didefinisikan berindeks 0 sampai 4. Tindak lanjut guru paling tepat adalah ...',[
 'Menggambar kotak elemen dengan indeksnya dan menelusuri akses pertama serta terakhir','Menambah satu elemen dummy tanpa menjelaskan alasan','Menyuruh murid menghafal pesan error','Mengganti semua list dengan satu variabel'],
 'Representasi elemen dan indeks menyingkap bahwa indeks 0 terlewat dan indeks 5 di luar batas. Perbaikan tanpa pemahaman akan membuat kesalahan serupa berulang.');
single('INF-018',A,'Dalam pair programming, satu murid selalu mengetik dan pasangannya pasif. Perubahan yang paling mendukung pembelajaran keduanya adalah ...',[
 'Merotasi peran penulis kode dan penelaah, disertai penjelasan keputusan sebelum melanjutkan','Menetapkan murid tercepat sebagai operator tetap','Memberi tugas tambahan hanya kepada murid pasif tanpa mengubah interaksi','Menilai kelompok hanya dari panjang kode'],
 'Rotasi peran dan penjelasan membuat kedua murid terlibat dalam penalaran. Operator tetap, pemisahan tanpa tujuan, dan panjang kode tidak menjamin pembelajaran setiap anggota.', ['P.2','P.5','P.6']);
multi('INF-019',A,'Pilih DUA bukti yang paling kuat bahwa murid memahami fungsi, bukan hanya menyalin penggunaannya.',[
 'Murid dapat menjelaskan hubungan parameter, proses, dan nilai kembali pada input baru','Murid menggunakan nama fungsi yang sama dengan contoh','Murid dapat merancang kasus uji dan memprediksi keluaran fungsi sebelum menjalankannya','Murid mengumpulkan kode dengan font yang rapi'],['A','C'],
 'Penjelasan input-proses-output dan prediksi pada kasus baru menunjukkan pemahaman. Kesamaan nama dan kerapian presentasi tidak cukup untuk membuktikan penguasaan konsep.');
matrix('INF-020',A,'Sebuah fungsi menerima bilangan bulat n dengan prasyarat n ≥ 0. Nilai pernyataan tentang pengujiannya.',[
 'n = 0 merupakan kasus batas yang sah','Menguji hanya n = 10 cukup untuk menjamin kebenaran semua input','Jika n = -1 ingin ditangani, perilaku di luar prasyarat harus didefinisikan terlebih dahulu'],[true,false,true],
 'Nol berada dalam domain dan merupakan batas bawah. Satu uji tidak menjamin semua input. Penanganan input di luar kontrak memerlukan ketentuan, misalnya pesan kesalahan.');
single('INF-021',A,'Murid ingin menentukan apakah daftar sudah terurut menaik. Kriteria algoritmik yang tepat untuk list berindeks 0 sampai n-1 adalah ...',[
 'Memeriksa setiap pasangan bersebelahan dan memastikan nilai kiri tidak lebih besar daripada kanan','Membandingkan hanya elemen pertama dengan terakhir','Memeriksa apakah seluruh elemen berbeda','Memastikan jumlah elemen genap'],
 'Urutan menaik tidak menurun berarti setiap pasangan bersebelahan memenuhi a[i] ≤ a[i+1]. Elemen awal lebih kecil dari akhir belum menjamin bagian tengah terurut; nilai sama tetap dapat terurut.');
single('INF-022',A,'Pada dua algoritma yang sama-sama benar, satu membutuhkan n pemeriksaan dan lainnya n² pemeriksaan untuk ukuran input n. Aktivitas pembelajaran paling tepat untuk membandingkannya adalah ...',[
 'Menghitung pemeriksaan untuk beberapa ukuran input dan membahas pola pertumbuhannya','Menghitung jumlah warna pada kode','Menganggap algoritma dengan nama lebih pendek selalu lebih cepat','Menyimpulkan dari satu pengukuran pada komputer yang berbeda tanpa kontrol'],
 'Jumlah operasi pada berbagai ukuran input memperlihatkan pertumbuhan linear dan kuadratik. Nama, warna, dan pengukuran tak terkontrol tidak mengisolasi karakter algoritma.');
single('INF-023',D,'Siswa membuat grafik garis untuk membandingkan jumlah murid per klub yang kategorinya tidak berurutan. Pilihan grafik yang umumnya lebih sesuai untuk perbandingan antarkategori adalah ...',[
 'Grafik batang dengan kategori klub dan jumlah murid yang diberi label jelas','Grafik garis tanpa sumbu','Grafik apa pun tanpa label karena jumlah sudah terlihat','Grafik dekoratif yang luas gambarnya tidak sebanding dengan data'],
 'Grafik batang mendukung perbandingan kategori diskret. Grafik garis cenderung menyiratkan urutan/kontinuitas; hilangnya label atau ukuran visual tak proporsional mengaburkan informasi.');
single('INF-024',D,'Data waktu pengerjaan proyek adalah 10, 11, 12, 12, dan 100 menit. Murid menyimpulkan semua siswa biasanya perlu 29 menit dari rata-rata. Respons guru paling tepat adalah ...',[
 'Mengajak membandingkan mean 29 dengan median 12 dan mendiskusikan pengaruh nilai ekstrem serta konteksnya','Menerima bahwa rata-rata pasti mewakili setiap individu','Menghapus angka 100 tanpa menyelidiki asalnya','Mengganti semua angka dengan 29'],
 'Jumlah data 145 sehingga mean 29, sedangkan median 12. Selisih menunjukkan pengaruh nilai ekstrem; data ekstrem perlu diperiksa konteksnya, bukan otomatis dibuang.');
single('INF-025',D,'Survei kepemilikan laptop hanya dilakukan pada klub pemrograman, lalu hasilnya digeneralisasi ke seluruh sekolah. Masalah utama yang perlu dibahas adalah ...',[
 'Bias pemilihan sampel karena anggota klub belum tentu mewakili seluruh murid','Jumlah kolom spreadsheet terlalu sedikit','Survei digital selalu salah','Persentase tidak boleh digunakan untuk data kepemilikan'],
 'Sampel harus sesuai populasi sasaran. Klub pemrograman dapat memiliki karakter berbeda dari murid lain; format digital dan penggunaan persentase bukan sumber masalah utama.');
single('INF-026',D,'Dataset mencatat satu siswa dua kali karena ejaan nama berbeda. Sebelum menghapus baris, langkah paling tepat adalah ...',[
 'Memeriksa pengenal dan sumber data untuk memastikan kedua baris benar-benar entitas sama, lalu mencatat aturan deduplikasi','Menghapus semua nama yang mirip tanpa verifikasi','Menggabungkan seluruh baris menjadi satu','Membiarkan duplikasi karena jumlah data besar selalu lebih baik'],
 'Kemiripan nama belum membuktikan identitas sama. Deduplikasi harus berdasar bukti dan aturan yang dapat ditelusuri agar tidak menghilangkan entitas sah.');
single('INF-027',D,'Rumus pada C2 adalah =A2*$F$1. Ketika disalin satu baris ke bawah, hasil rumus yang benar adalah ...',[
 '=A3*$F$1','=A2*$F$2','=A3*$F$2','=A2*$F$1'],
 'A2 adalah referensi relatif sehingga menjadi A3; $F$1 mengunci kolom dan baris. Mengubah F1 menunjukkan kekeliruan memahami referensi absolut.');
multi('INF-028',D,'Pilih DUA langkah yang memperkuat keterlacakan proyek analisis data murid.',[
 'Mencatat asal data dan perubahan yang dilakukan saat pembersihan','Mengganti hasil yang tidak sesuai dugaan tanpa mencatatnya','Memisahkan data mentah dari data olahan dan menjelaskan aturan transformasi','Menyembunyikan baris yang bertentangan dengan kesimpulan tanpa alasan'],['A','C'],
 'Catatan asal dan transformasi memungkinkan pemeriksaan ulang. Mengubah atau menyembunyikan hasil tanpa alasan merusak integritas analisis.');
matrix('INF-029',D,'Nilai ketepatan pernyataan berikut tentang interpretasi data.',[
 'Hubungan dua variabel pada data pengamatan otomatis membuktikan hubungan sebab-akibat','Nilai kosong dan nilai nol dapat memiliki makna berbeda','Judul, satuan, dan skala sumbu membantu pembaca menafsirkan grafik'],[false,true,true],
 'Korelasi tidak otomatis membuktikan sebab-akibat. Data hilang tidak sama dengan nol; metadata visual membantu interpretasi yang benar.');
single('INF-030',D,'Guru ingin menilai pemahaman murid terhadap proses analisis data. Instrumen yang paling selaras adalah ...',[
 'Rubrik yang menilai kualitas pertanyaan, pengolahan data, alasan memilih visualisasi, dan kesimpulan berbasis bukti','Penilaian hanya dari warna presentasi','Penilaian hanya dari jumlah baris data','Nilai yang sama untuk setiap kesimpulan tanpa melihat bukti'],
 'Rubrik proses dan alasan menilai kemampuan analisis secara langsung. Tampilan, volume data, dan keseragaman nilai tidak mewakili kompetensi yang dituju.', ['P.6','PF.2']);
single('INF-031',L,'Murid menerima tautan yang mengaku dari sekolah dan meminta kata sandi akun belajar. Strategi belajar yang paling aman sekaligus bermakna adalah ...',[
 'Menganalisis contoh pesan rekaan, memeriksa alamat pengirim dan tujuan tautan, lalu memverifikasi melalui kanal sekolah yang diketahui','Meminta murid mencoba memasukkan kata sandi asli untuk membuktikan risiko','Menyebarkan tautan ke seluruh kelas agar dicoba','Menganggap semua pesan dengan logo sekolah pasti sah'],
 'Simulasi memakai pesan rekaan memungkinkan analisis tanpa mengekspos kredensial. Logo mudah ditiru; verifikasi perlu kanal yang dipercaya.', ['P.4','K.1','PF.2']);
single('INF-032',L,'Murid menyertakan gambar daring dalam proyek dan beranggapan semua gambar boleh dipakai karena mudah diunduh. Respons paling tepat adalah ...',[
 'Membimbing pemeriksaan lisensi dan syarat atribusi, lalu memilih aset yang diizinkan untuk tujuan proyek','Membenarkan karena akses gratis selalu berarti bebas hak cipta','Menghapus nama pembuat agar tampak orisinal','Menyatakan atribusi saja selalu cukup untuk semua lisensi'],
 'Izin penggunaan ditentukan lisensi atau persetujuan, bukan kemudahan unduh. Atribusi wajib ketika disyaratkan, tetapi tidak otomatis mengatasi semua pembatasan.');
single('INF-033',L,'Jawaban AI untuk tugas Informatika tampak meyakinkan tetapi mengandung rujukan yang tidak dapat ditemukan. Tindakan pembelajaran paling tepat adalah ...',[
 'Memeriksa klaim melalui sumber primer dan menguji contoh/kode sebelum memakai hasil, sambil mencatat bantuan AI','Menerima seluruhnya karena bahasanya lancar','Menganggap semua jawaban AI pasti salah tanpa pemeriksaan','Menyembunyikan penggunaan AI dan mempertahankan rujukan tersebut'],
 'Kelancaran bahasa bukan bukti kebenaran. Verifikasi sumber dan pengujian mengembangkan literasi kritis; keterbukaan penggunaan mendukung integritas karya.', ['P.4','K.1','PF.2']);
multi('INF-034',L,'Pilih DUA kebiasaan yang meningkatkan keamanan akun murid.',[
 'Menggunakan kata sandi unik yang kuat dan autentikasi tambahan bila tersedia','Memakai satu kata sandi yang sama di semua layanan agar mudah diingat','Memeriksa tujuan tautan sebelum memasukkan kredensial','Membagikan kode verifikasi kepada orang yang mengaku petugas melalui pesan pribadi'],['A','C'],
 'Kata sandi unik membatasi dampak kebocoran lintas layanan; autentikasi tambahan serta verifikasi tautan mengurangi risiko. Kode verifikasi tidak dibagikan kepada pihak lain.');
single('INF-035',L,'Dalam diskusi, seorang murid membagikan tangkapan layar berisi nomor telepon temannya. Respons awal guru yang paling sesuai adalah ...',[
 'Menghentikan penyebaran, melindungi murid terdampak, dan membimbing pembahasan persetujuan serta langkah pemulihan','Menampilkan tangkapan layar ke seluruh sekolah sebagai hukuman','Mengabaikan karena sudah terlanjur dibagikan','Meminta semua murid menyalinnya sebagai bukti'],
 'Prioritas awal adalah membatasi dampak dan memberi dukungan. Penyebaran lebih luas memperburuk pelanggaran; pembahasan dilakukan tanpa mengulang ekspos data pribadi.', ['K.1','S.1','P.4']);
matrix('INF-036',L,'Nilai setiap pernyataan tentang evaluasi informasi digital.',[
 'Membandingkan klaim dengan sumber primer dapat membantu verifikasi','Jumlah pembagian ulang merupakan jaminan kebenaran','Tanggal dan konteks publikasi dapat memengaruhi relevansi informasi'],[true,false,true],
 'Sumber primer, konteks, dan waktu membantu evaluasi. Popularitas bukan bukti akurasi; informasi lama dapat disajikan dengan konteks yang keliru.');
single('INF-037',N,'Murid mengatakan bahwa internet dan web adalah hal yang persis sama. Penjelasan konseptual yang paling tepat adalah ...',[
 'Internet adalah jaringan yang menghubungkan banyak jaringan, sedangkan web salah satu layanan yang menggunakan infrastrukturnya','Web adalah semua perangkat keras dan internet hanya browser','Internet hanya tersedia ketika browser dibuka','Semua layanan internet harus berupa halaman web'],
 'Web menggunakan infrastruktur internet, tetapi internet juga mendukung layanan lain. Browser adalah aplikasi untuk mengakses web, bukan keseluruhan internet.');
single('INF-038',N,'Satu komputer lab tidak dapat mengakses jaringan, sementara komputer lain di jaringan yang sama dapat. Langkah diagnosis awal yang paling masuk akal adalah ...',[
 'Memeriksa koneksi fisik/nirkabel serta konfigurasi jaringan komputer tersebut dan membandingkannya dengan komputer yang berfungsi','Langsung mengganti seluruh server sekolah','Menghapus semua berkas pelajaran','Menyimpulkan seluruh internet dunia mati'],
 'Gejala lokal mengarahkan pemeriksaan pada perangkat/koneksinya terlebih dahulu. Penggantian besar tanpa bukti dan penghapusan berkas tidak proporsional.', ['P.1','PF.2']);
single('INF-039',N,'Untuk menjelaskan RAM dan penyimpanan permanen, analogi yang paling tepat beserta batasannya adalah ...',[
 'RAM seperti meja kerja sementara dan penyimpanan seperti lemari arsip; analogi ini membantu fungsi dasar, tetapi tidak mewakili seluruh mekanisme teknis','RAM dan penyimpanan sama-sama selalu menyimpan data tanpa listrik','RAM adalah internet dan penyimpanan adalah browser','Analogi dianggap identik dengan perangkat nyata dalam setiap detail'],
 'Analogi meja kerja dan arsip membantu membedakan fungsi. RAM umumnya volatil, sedangkan penyimpanan mempertahankan data; analogi tetap memiliki keterbatasan.', ['P.1','PF.2']);
single('INF-040',N,'Pada representasi biner tak bertanda, 1010₂ setara dengan bilangan desimal ...',[
 '10','8','12','1010'],
 'Nilai posisi adalah 1×8 + 0×4 + 1×2 + 0×1 = 10. Soal dapat diajarkan dengan kartu nilai tempat untuk menghindari hafalan konversi semata.');
single('INF-041',N,'Murid mengira menggandakan kapasitas penyimpanan selalu membuat semua program dua kali lebih cepat. Respons guru paling tepat adalah ...',[
 'Membandingkan fungsi penyimpanan, RAM, dan prosesor, lalu menelaah bottleneck pada contoh beban kerja','Membenarkan hubungan dua kali kapasitas pasti dua kali kecepatan','Meminta semua murid membeli penyimpanan baru','Menyatakan kapasitas dan kinerja tidak pernah berhubungan pada kondisi apa pun'],
 'Kinerja ditentukan beban kerja dan komponen yang membatasi. Kapasitas tidak memberi hubungan linear universal; pada kondisi tertentu penyimpanan tetap dapat memengaruhi kinerja.');
multi('INF-042',N,'Untuk kegiatan belajar keamanan jaringan, pilih DUA rancangan praktik yang tepat.',[
 'Menggunakan lingkungan simulasi atau jaringan latihan dengan izin yang jelas','Meminta murid memindai jaringan pihak lain tanpa izin','Mendefinisikan batas aktivitas dan membahas etika sebelum praktik','Menilai keberhasilan dari jumlah akun nyata yang dapat diakses'],['A','C'],
 'Lingkungan berizin dan batas praktik mengajarkan kompetensi sekaligus tanggung jawab. Akses akun atau jaringan pihak lain tanpa izin bukan rancangan pembelajaran yang sesuai.', ['K.1','P.4','PF.2']);
single('INF-043',T,'Guru akan mengajar pengulangan, tetapi asesmen awal menunjukkan sebagian murid belum memahami urutan instruksi. Penyesuaian yang paling tepat adalah ...',[
 'Menyediakan penguatan prasyarat dan representasi konkret untuk yang membutuhkan, sementara murid siap mendapat tantangan lanjut menuju tujuan yang selaras','Memaksa semua murid langsung menulis program kompleks','Menurunkan tujuan semua murid menjadi sekadar menyalin','Membagi kelompok tetap berdasarkan label pintar dan lemah'],
 'Dukungan disesuaikan bukti kesiapan dan dapat berubah. Memaksa, sekadar menyalin, atau label permanen tidak membantu setiap murid berkembang.', ['P.2','P.5','P.6']);
single('INF-044',T,'Tujuan pelajaran adalah murid mampu menjelaskan alasan pemilihan algoritma. Asesmen paling selaras adalah ...',[
 'Membandingkan dua solusi pada masalah baru dan memberikan alasan pemilihan dengan kriteria yang dinyatakan','Menghafal nama pembuat bahasa pemrograman','Menyalin definisi algoritma dari papan','Menghitung jumlah halaman laporan tanpa membaca isinya'],
 'Kemampuan menjelaskan alasan perlu dibuktikan melalui keputusan dan argumen. Hafalan fakta, salinan, dan jumlah halaman tidak langsung mengukur tujuan tersebut.', ['P.1','P.6','PF.4']);
single('INF-045',T,'Ketika internet terputus saat pelajaran percabangan, guru memiliki kartu kasus dan LKPD yang sudah disiapkan. Tindakan terbaik agar tujuan tetap tercapai adalah ...',[
 'Menggunakan simulasi keputusan dengan kartu, meminta murid menjelaskan cabang yang dipilih, lalu merefleksikan hubungannya dengan kode','Membatalkan semua aktivitas walaupun tujuan dapat dicapai tanpa internet','Mengganti pelajaran dengan aktivitas tanpa hubungan tujuan','Meminta murid menunggu sampai akhir jam tanpa tugas'],
 'Representasi unplugged dapat mempertahankan tujuan konseptual. Pemilihan media didasarkan fungsi belajar, bukan keharusan selalu daring.', ['P.4','P.5','PF.3']);
multi('INF-046',T,'Pilih DUA komponen rubrik proyek aplikasi sederhana yang paling langsung menilai pemahaman Informatika.',[
 'Ketepatan logika terhadap kebutuhan dan bukti pengujian','Harga laptop yang digunakan murid','Kemampuan menjelaskan struktur solusi serta alasan perbaikannya','Jumlah stiker pada tampilan aplikasi'],['A','C'],
 'Ketepatan, pengujian, dan penjelasan struktur solusi mengukur kompetensi. Harga alat dan dekorasi tidak mewakili pemahaman algoritmik.', ['P.6','PF.2']);
single('INF-047',T,'Murid dengan hambatan penglihatan kesulitan memahami diagram alir yang hanya dibedakan melalui warna. Perbaikan paling tepat adalah ...',[
 'Memberi label tekstual dan bentuk yang konsisten serta alternatif urutan langkah yang dapat diakses','Menambah lebih banyak warna tanpa label','Menghapus murid dari kegiatan kelompok','Menilai murid dengan target lebih rendah tanpa mengidentifikasi kebutuhannya'],
 'Informasi tidak boleh hanya bergantung pada warna. Label dan representasi alternatif membuka akses pada tujuan yang sama, dengan penyesuaian sesuai kebutuhan murid.', ['P.2','P.4','S.1']);
single('INF-048',T,'Guru ingin membuktikan bahwa murid memahami program hasil proyek kelompok. Langkah yang paling tepat adalah ...',[
 'Meminta setiap murid menjelaskan bagian solusi dan memodifikasi contoh kecil secara individual','Menganggap semua anggota paham karena satu program berjalan','Memberi nilai hanya kepada ketua kelompok','Menilai hanya dari durasi presentasi kelompok'],
 'Penjelasan dan transfer kecil individual memberi bukti penguasaan masing-masing. Produk kelompok saja dapat menyembunyikan ketimpangan kontribusi.', ['P.6','P.2']);
matrix('INF-049',T,'Nilai pernyataan berikut tentang perancangan pembelajaran Informatika.',[
 'Aktivitas dan asesmen perlu diselaraskan dengan tujuan pembelajaran','Pemakaian aplikasi paling baru selalu menjamin pembelajaran efektif','Umpan balik pada pola kesalahan dapat menjadi dasar remedial yang terarah'],[true,false,true],
 'Keselarasan tujuan-kegiatan-asesmen dan tindak lanjut berbasis bukti mendukung belajar. Kebaruan aplikasi tidak dengan sendirinya menjamin manfaat.', ['P.4','P.6','PF.4']);
single('INF-050',T,'Setelah mengajar debugging, guru menemukan murid mencoba perubahan acak tanpa membaca pesan kesalahan. Perbaikan strategi yang paling tepat adalah ...',[
 'Memodelkan langkah memahami gejala, membentuk hipotesis, menguji satu perubahan, dan mencatat hasilnya','Menambah jumlah program tanpa membahas proses','Memberi kunci perbaikan untuk disalin pada semua tugas','Melarang murid melihat pesan kesalahan'],
 'Debugging sistematis menggunakan bukti untuk menguji hipotesis. Penambahan volume tugas atau salinan kunci tidak otomatis memperbaiki strategi berpikir.', ['P.1','P.6','PF.5']);

single('PU-004',U,'Guru merencanakan pembelajaran baru. Urutan perancangan yang paling mendukung keselarasan adalah ...',[
 'Menganalisis CP dan kebutuhan murid, merumuskan tujuan, menentukan bukti ketercapaian, lalu merancang kegiatan','Memilih aplikasi populer, lalu membuat tujuan agar cocok dengan aplikasi','Menetapkan nilai akhir sebelum pembelajaran','Mengambil kegiatan acak dan mengabaikan asesmen'],
 'Tujuan dan bukti belajar memandu kegiatan. Media dipilih untuk mendukung tujuan, bukan menjadi satu-satunya dasar perencanaan.', ['P.1','P.6','PF.4']);
single('PU-005',U,'Dalam diskusi, beberapa murid belum berani berbicara. Guru ingin memperluas partisipasi tanpa memaksa murid langsung tampil di depan kelas. Pilihan terbaik adalah ...',[
 'Memberi waktu berpikir individual, berbagi berpasangan, kemudian menawarkan berbagi ke kelompok besar','Hanya memanggil murid yang paling sering menjawab','Menyimpulkan murid pendiam tidak memahami materi','Mengurangi nilai setiap murid yang tidak segera berbicara'],
 'Tahapan berpikir dan berbagi menyediakan dukungan serta waktu pemrosesan. Diam belum tentu berarti tidak paham; hukuman dapat memperburuk rasa aman.', ['P.2','P.3','S.1']);
single('PU-006',U,'Sebagian murid gagal pada indikator tertentu dalam asesmen formatif. Keputusan guru paling tepat adalah ...',[
 'Menganalisis pola kesulitan, memberi dukungan terarah, dan mengecek kembali indikator tersebut','Mengulang tes yang sama terus-menerus tanpa intervensi','Mengabaikan karena nilai belum masuk rapor','Mengganti nilai semua murid menjadi sama'],
 'Asesmen formatif berguna ketika hasilnya mengubah langkah belajar. Pengulangan tes tanpa pembelajaran atau pengubahan nilai tidak mengatasi kesulitan.', ['P.6']);
multi('PU-007',U,'Pilih DUA ciri tujuan pembelajaran yang membantu guru merancang asesmen.',[
 'Menyatakan kompetensi yang dapat ditunjukkan melalui bukti kinerja atau jawaban','Hanya menyebut aktivitas guru seperti menjelaskan materi','Memperjelas lingkup materi dan kemampuan yang dituju','Menggunakan istilah memahami tanpa memperjelas bukti yang diharapkan'],['A','C'],
 'Tujuan perlu menggambarkan kemampuan murid serta lingkup materi. Aktivitas guru atau kata umum tanpa bukti menyulitkan penyelarasan asesmen.', ['P.1','P.6','PF.4']);
single('PU-008',U,'Orang tua mempertanyakan kesulitan belajar anaknya. Langkah komunikasi paling tepat adalah ...',[
 'Membahas bukti secara privat, mendengarkan konteks keluarga, dan menyepakati dukungan serta tindak lanjut','Membandingkan anak secara terbuka dengan murid lain','Mengirim nilai semua murid kepada seluruh orang tua','Menyalahkan keluarga sebelum mendengar penjelasan'],
 'Komunikasi empatik dan berbasis bukti membantu kerja sama. Membuka data murid lain atau menyalahkan pihak lain menghambat kepercayaan.', ['S.1','S.2','K.1']);
single('PU-009',U,'Murid melakukan kesalahan dalam menjawab. Respons guru yang paling mendukung pola pikir bertumbuh adalah ...',[
 'Menghargai usaha yang spesifik, menelaah strategi yang belum tepat, dan mengajak mencoba pendekatan lain','Mengatakan kemampuan murid tidak mungkin berubah','Memuji tanpa menjelaskan apa yang sudah baik atau perlu diperbaiki','Melarang murid mencoba kembali'],
 'Pola pikir bertumbuh diwujudkan melalui strategi, umpan balik spesifik, dan kesempatan memperbaiki. Pujian umum saja kurang membantu; label tetap membatasi perkembangan.', ['K.2','P.6']);
matrix('PU-010',U,'Nilai setiap pernyataan tentang pembelajaran yang responsif terhadap keragaman murid.',[
 'Dukungan dapat disesuaikan berdasarkan bukti kesiapan dan diperbarui ketika murid berkembang','Diferensiasi berarti setiap murid harus selalu memiliki tujuan yang sama sekali berbeda','Berbagai cara merepresentasikan konsep dapat membantu akses belajar'],[true,false,true],
 'Penyesuaian dukungan bersifat dinamis. Diferensiasi tidak berarti tujuan harus selalu berbeda total; akses dapat diperluas melalui representasi yang sesuai.', ['P.2','P.5']);
single('PU-011',U,'Guru menemukan banyak murid dapat menyebut definisi tetapi gagal menerapkannya pada situasi baru. Perbaikan yang paling sesuai adalah ...',[
 'Menghubungkan konsep dengan kasus kontekstual dan meminta alasan serta refleksi setelah penerapan','Menambah hafalan definisi yang sama sebagai satu-satunya kegiatan','Menghapus seluruh latihan aplikasi','Menyatakan tujuan sudah tercapai karena definisi dihafal'],
 'Penerapan kontekstual dan refleksi memperdalam hubungan konsep dengan situasi baru. Hafalan saja belum memberi bukti transfer pengetahuan.', ['P.1','P.3']);
single('PU-012',U,'Guru menggunakan aplikasi kuis, tetapi banyak murid tidak memiliki perangkat. Pertimbangan yang paling tepat adalah ...',[
 'Menilai manfaat terhadap tujuan dan menyediakan cara akses/alternatif setara sesuai kebutuhan murid','Mewajibkan pembelian perangkat tanpa mempertimbangkan kondisi','Memberi nilai nol kepada murid tanpa perangkat','Mempertahankan aplikasi karena tampak modern meski tujuan terhambat'],
 'Teknologi digunakan karena manfaat belajar dan aksesnya. Alternatif setara memastikan ketiadaan perangkat tidak menjadi ukuran kemampuan murid.', ['P.2','P.4']);
single('PU-013',U,'Seorang murid mendominasi kerja kelompok. Intervensi guru paling tepat untuk membangun kolaborasi adalah ...',[
 'Menetapkan peran bergilir, kesepakatan interaksi, dan bukti kontribusi setiap anggota','Membiarkan karena hasil kelompok cepat selesai','Melarang semua diskusi kelompok untuk seterusnya','Memberi semua tugas kepada murid dominan'],
 'Struktur peran dan akuntabilitas membantu partisipasi yang lebih adil. Kecepatan produk belum menjamin proses belajar kolaboratif.', ['P.2','S.2','P.6']);
multi('PU-014',U,'Pilih DUA praktik asesmen yang mendukung penggunaan hasil untuk belajar.',[
 'Memberikan kriteria keberhasilan sebelum tugas','Hanya menyimpan skor tanpa menelaah pola jawaban','Memberi kesempatan revisi berdasarkan umpan balik','Mengubah kriteria setelah tugas dikumpulkan tanpa penjelasan'],['A','C'],
 'Kriteria membantu murid mengarahkan usaha; revisi membuat umpan balik dapat digunakan. Skor saja dan perubahan kriteria mendadak tidak membantu tindak lanjut yang adil.', ['P.6']);
single('PU-015',U,'Guru menerima masukan rekan bahwa pertanyaannya hanya mengukur hafalan. Tanggapan profesional terbaik adalah ...',[
 'Menelaah contoh soal bersama, mencocokkannya dengan tujuan, dan merevisi serta menguji perbaikannya','Menolak karena pengalaman mengajar panjang menjamin semua soal baik','Menghapus semua asesmen','Menganggap masukan sebagai serangan pribadi tanpa memeriksa bukti'],
 'Refleksi bersama dan perbaikan berbasis tujuan merupakan pengembangan profesional. Pengalaman tidak menghilangkan kebutuhan evaluasi.', ['K.2','S.2','PF.5']);
single('PU-016',U,'Murid menunjukkan tanda tertekan setelah diejek temannya. Prioritas tindakan guru adalah ...',[
 'Memastikan keamanan dan dukungan bagi murid terdampak, menghentikan perilaku, lalu menindaklanjuti sesuai prosedur sekolah','Menyuruh murid menyelesaikan sendiri karena bagian dari pergaulan','Mempermalukan murid terdampak agar lebih kuat','Membiarkan selama tidak mengganggu nilai akademik'],
 'Keamanan dan dukungan menjadi kebutuhan awal. Pengabaian serta mempermalukan korban meningkatkan dampak; tindak lanjut dilakukan dengan prosedur yang sesuai.', ['K.1','S.1','P.3']);
single('PU-017',U,'Guru ingin mengaitkan pembelajaran dengan lingkungan setempat. Strategi yang paling tepat adalah ...',[
 'Memilih masalah lokal yang relevan dengan tujuan dan mengajak murid mengumpulkan serta menelaah bukti','Memakai konteks lokal walau bertentangan dengan tujuan tanpa penyesuaian','Menganggap semua murid memiliki pengalaman lokal yang sama','Mengganti konsep pelajaran dengan cerita tanpa kegiatan bernalar'],
 'Konteks lokal menjadi sarana memahami konsep dan bernalar. Relevansi tujuan serta keragaman pengalaman tetap perlu diperhatikan.', ['P.1','P.5']);
matrix('PU-018',U,'Nilai pernyataan berikut tentang etika penilaian.',[
 'Kriteria yang jelas dan diterapkan konsisten membantu keadilan penilaian','Kedekatan pribadi guru dengan murid layak menjadi dasar kenaikan skor akademik','Kerahasiaan data hasil belajar perlu dijaga'],[true,false,true],
 'Penilaian didasarkan bukti kompetensi dan kriteria. Kedekatan personal bukan indikator akademik; data hasil belajar perlu dibagikan secara terbatas sesuai keperluan.', ['K.1','P.6']);
single('PU-019',U,'Guru mengakhiri pelajaran dengan pertanyaan: bagian mana yang belum dipahami dan strategi apa yang membantu? Fungsi utama kegiatan ini adalah ...',[
 'Mendorong refleksi murid dan memberi informasi untuk tindak lanjut pembelajaran','Menggantikan seluruh asesmen hasil belajar secara otomatis','Mengukur kepatuhan murid saja','Menentukan label kemampuan permanen'],
 'Refleksi membantu murid mengenali proses belajarnya dan memberi masukan kepada guru. Kegiatan ini melengkapi bukti lain, bukan otomatis mengganti semua asesmen.', ['P.1','P.6']);
single('PU-020',U,'Dalam menyusun laporan studi kasus, guru memiliki dugaan perbaikan tetapi belum mengumpulkan bukti dampaknya. Tindakan paling tepat adalah ...',[
 'Membedakan pengamatan dari dugaan, menggunakan bukti yang tersedia, dan menyatakan keterbatasan serta rencana tindak lanjut','Mengarang peningkatan nilai agar laporan tampak berhasil','Menghapus semua masalah dari laporan','Menyalin pengalaman orang lain sebagai pengalaman sendiri'],
 'Refleksi profesional menuntut kejujuran terhadap bukti dan keterbatasan. Laporan tidak harus mengklaim keberhasilan sempurna; mengarang atau menyalin pengalaman merusak integritas.', ['K.1','K.2','PF.5']);
multi('PU-021',U,'Pilih DUA kontribusi komunitas belajar yang mendukung pengembangan profesi.',[
 'Membahas masalah pembelajaran menggunakan bukti yang sudah dianonimkan','Menyebarluaskan identitas murid bermasalah untuk bahan candaan','Menguji strategi hasil diskusi dan membagikan refleksi dampaknya','Mengumpulkan sertifikat tanpa mengaitkannya dengan praktik'],['A','C'],
 'Komunitas belajar berdampak ketika diskusi terkait masalah nyata, menjaga privasi, dan ditindaklanjuti. Sertifikat saja tidak membuktikan perbaikan praktik.', ['S.3','K.2','PF.5']);
single('PU-022',U,'Seorang murid memiliki jawaban berbeda dari kunci pada tugas terbuka, tetapi alasannya logis dan memenuhi kriteria. Langkah guru paling tepat adalah ...',[
 'Menilai berdasarkan kriteria dan kualitas alasan, serta meninjau apakah kunci perlu mengakomodasi solusi alternatif','Memberi nol hanya karena berbeda kata dengan contoh guru','Mengubah kriteria agar hanya contoh guru yang benar','Mengabaikan alasan karena tugas terbuka harus memiliki satu redaksi jawaban'],
 'Tugas terbuka dapat memiliki beberapa solusi yang sah. Penilaian harus mengikuti tujuan dan kriteria, bukan kesamaan redaksi.', ['P.6','K.1']);
single('PU-023',U,'Guru ingin membangun pembelajaran yang berkesadaran. Langkah paling sesuai adalah ...',[
 'Membantu murid memahami tujuan, mengenali kesiapan dan strategi, serta memantau proses belajarnya','Hanya memberi aktivitas menyenangkan tanpa tujuan','Meminta murid diam sepanjang pelajaran tanpa refleksi','Menghilangkan tantangan agar semua tugas sangat mudah'],
 'Berkesadaran mencakup keterarahan dan pemantauan proses belajar. Kesunyian, kesenangan semata, atau ketiadaan tantangan tidak cukup mewakili prinsip tersebut.', ['P.3','P.1']);
single('PU-024',U,'Asesmen sumatif menunjukkan hasil rendah pada tujuan yang belum cukup dilatih. Respons reflektif guru paling tepat adalah ...',[
 'Meninjau keselarasan kesempatan belajar dan asesmen, lalu memperbaiki pembelajaran serta memberi tindak lanjut','Menyimpulkan semua murid tidak mampu tanpa meninjau desain','Mempertahankan desain karena hasil rendah selalu salah murid','Menghapus tujuan pembelajaran dari dokumen setelah tes'],
 'Hasil asesmen juga memberi informasi tentang kesempatan belajar. Guru perlu meninjau desain, bukan hanya mengatribusikan seluruh hasil kepada murid.', ['P.6','K.2','PF.5']);
matrix('PU-025',U,'Nilai pernyataan berikut tentang komunikasi kelas yang inklusif.',[
 'Guru memberi waktu tunggu yang cukup setelah mengajukan pertanyaan','Guru mengejek logat murid agar tuturannya cepat berubah','Guru menyediakan cara menyampaikan gagasan yang sesuai kebutuhan murid'],[true,false,true],
 'Waktu tunggu dan beragam cara merespons membuka kesempatan berpartisipasi. Ejekan merendahkan murid dan merusak keamanan belajar.', ['S.1','P.2']);
single('PU-026',U,'Guru hendak mengubah kurikulum operasional pembelajaran di kelas. Pertimbangan paling tepat adalah ...',[
 'Tetap mengacu CP dan tujuan pendidikan, sambil menyesuaikan konteks, kebutuhan murid, serta sumber daya','Menghapus kompetensi inti yang sulit tanpa pertimbangan tujuan','Menyalin rancangan sekolah lain tanpa menelaah kesesuaiannya','Mengikuti tren kegiatan walau tidak terkait capaian'],
 'Adaptasi kurikulum memadukan acuan kompetensi dengan konteks. Penyalinan atau perubahan tanpa analisis dapat memutus hubungan dengan tujuan pendidikan.', ['PF.1','PF.4','P.5']);
single('PU-027',U,'Murid yang sudah menguasai tujuan menyelesaikan tugas lebih cepat. Pengayaan paling tepat adalah ...',[
 'Memberikan tantangan lebih mendalam atau konteks baru yang memperluas penerapan kompetensi','Memberi salinan tugas yang sama berulang tanpa tujuan','Selalu menjadikannya pengganti guru untuk mengajar seluruh kelas','Melarangnya mempelajari hal baru agar menunggu teman'],
 'Pengayaan memperdalam atau memperluas kompetensi secara bermakna. Volume tugas identik atau kewajiban selalu mengajar teman bukan otomatis pengayaan.', ['P.2','P.5']);
multi('PU-028',U,'Pilih DUA langkah yang tepat ketika guru menyiapkan wawancara refleksi UKin.',[
 'Menguasai alasan pedagogis di balik keputusan dan bukti belajar dalam praktik sendiri','Menghafal pengalaman peserta lain untuk diklaim sebagai pengalaman pribadi','Mengidentifikasi keterbatasan praktik dan rencana perbaikan yang masuk akal','Menganggap semua keputusan harus digambarkan sempurna tanpa kelemahan'],['A','C'],
 'Refleksi yang kuat menghubungkan keputusan, bukti, dan perbaikan. Mengakui keterbatasan secara profesional lebih bermakna daripada klaim sempurna atau pengalaman rekaan.', ['K.1','K.2','PF.5']);
single('PU-029',U,'Guru ingin menilai manfaat metode baru. Bukti yang paling relevan adalah ...',[
 'Perubahan pemahaman murid pada indikator yang sama, disertai konteks pelaksanaan dan keterbatasan perbandingan','Hanya jumlah animasi yang digunakan dalam presentasi','Hanya banyaknya pujian pada media sosial','Perasaan guru bahwa kelas tampak ramai tanpa memeriksa hasil belajar'],
 'Evaluasi metode perlu bukti yang terkait tujuan belajar, dengan memperhatikan konteks dan batas kesimpulan. Popularitas atau keramaian tidak cukup menunjukkan peningkatan pemahaman.', ['K.2','P.6','PF.5']);
single('PU-030',U,'Seorang murid memberi umpan balik bahwa instruksi tugas sulit dipahami. Respons yang paling menunjukkan keteladanan reflektif adalah ...',[
 'Mendengarkan, meminta contoh bagian yang membingungkan, memperjelas instruksi, dan memeriksa kembali pemahaman','Menyatakan instruksi guru tidak boleh dipertanyakan','Mengurangi nilai murid karena berani memberi masukan','Mengulang instruksi dengan suara lebih keras tanpa mengecek makna'],
 'Menerima masukan dan memeriksa pemahaman menunjukkan penghargaan serta kemauan memperbaiki praktik. Otoritas tidak menggantikan kebutuhan komunikasi yang jelas.', ['K.2','S.1','P.6']);

export async function loadBank() {
  const response=await fetch('./seed.json'); if(!response.ok)throw new Error('Bank soal tidak dapat dimuat.');
  const seed=(await response.json()).questions;
  const map={'INF-001':A,'INF-002':T,'INF-003':L,'INF-004':D,'INF-005':A,'INF-006':B,'PU-001':U,'PU-002':U,'PU-003':U};
  return [...seed.map(q=>({...q,topic:map[q.id],categories:q.type==='category_matrix'?['Sesuai','Tidak sesuai']:undefined})),...bank].sort((a,b)=>a.id.localeCompare(b.id));
}
