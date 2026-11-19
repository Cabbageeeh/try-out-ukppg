// Butir latihan orisinal tambahan; tidak mereproduksi soal ujian resmi.
const bank=[];
const B='Berpikir komputasional',A='Algoritma & pemrograman',D='Analisis data',L='Literasi digital',N='Sistem & jaringan',T='Pembelajaran Informatika';
function add(id,topic,type,stem,options,answer,explanation,puTopic){
 const section=id.startsWith('PU')?'PU':'PCK';
 bank.push({id,section,topic,puTopic,type,stem,options,answer,explanation,competency_codes:section==='PU'?['P.2','P.6']:['P.1','PF.2'],source_ids:section==='PU'?['R03','R08']:['R03','R05'],...(type==='category_matrix'?{categories:['Benar','Salah']}:{})});
}
const choices=items=>Object.fromEntries(items.map((text,i)=>[String.fromCharCode(65+i),text]));
function single(id,topic,stem,items,explanation,puTopic){add(id,topic,'single_choice',stem,choices(items),'A',explanation,puTopic);}
function multi(id,topic,stem,items,answer,explanation,puTopic){add(id,topic,'multiple_response',stem,choices(items),answer,explanation,puTopic);}
function matrix(id,topic,stem,items,values,explanation,puTopic){add(id,topic,'category_matrix',stem,items.map((text,i)=>({id:String(i),text})),Object.fromEntries(values.map((v,i)=>[String(i),v?'Benar':'Salah'])),explanation,puTopic);}

single('INF-051',B,'Murid membuat peta evakuasi sekolah. Agar model relevan untuk mencari rute, data yang paling perlu dipertahankan adalah ...',[
 'Hubungan antarjalur, lokasi pintu keluar, dan hambatan yang membatasi lintasan','Warna cat setiap ruang sebagai satu-satunya data','Nama merek sepatu seluruh penghuni sekolah','Jumlah foto yang dipasang di setiap dinding'],
 'Model rute membutuhkan hubungan lokasi dan batas lintasan. Detail dekorasi atau atribut penghuni yang tidak memengaruhi rute dapat diabaikan. Guru perlu mengaitkan pemilihan data dengan tujuan model.');
single('INF-052',B,'Dalam urutan tugas, C hanya boleh dimulai setelah A dan B selesai. Murid menulis urutan A, C, B. Cara terbaik menelaahnya adalah ...',[
 'Menggambar ketergantungan A dan B menuju C, lalu memeriksa apakah urutan melanggarnya','Mengurutkan tugas berdasarkan abjad tanpa membahas syarat','Menyatakan semua urutan setara karena ada tiga tugas','Menghapus tugas B agar urutan awal tampak benar'],
 'Ketergantungan merupakan batas validitas urutan. C pada posisi kedua melanggar syarat B selesai terlebih dahulu. Diagram membantu membedakan urutan yang mungkin dengan urutan yang memenuhi prasyarat.');
single('INF-053',B,'Algoritma menemukan nilai maksimum dari daftar tidak kosong. Murid menginisialisasi maksimum = 0 dan hanya menguji daftar positif. Kasus uji paling diagnostik adalah ...',[
 'Daftar [-8, -3, -6], karena maksimum yang benar adalah -3','Daftar [4, 9, 2], karena semuanya positif','Daftar [0, 1, 2], karena memuat nol','Daftar [5, 5], karena kedua nilainya sama dan positif'],
 'Jika semua nilai negatif, pembanding awal nol tidak pernah diganti dan menghasilkan jawaban yang tidak ada dalam daftar. Nilai pertama daftar dapat menjadi inisialisasi yang sah untuk daftar tidak kosong.');
multi('INF-054',B,'Dua algoritma pencarian diuji di kelas. Pilih DUA praktik yang membuat perbandingan jumlah langkah lebih adil.',[
 'Menggunakan data dan target pencarian yang sama','Memberi data kecil hanya pada algoritma yang ingin diunggulkan','Menetapkan definisi langkah yang dihitung sebelum pengujian','Menyimpulkan dari satu kasus bahwa hasil berlaku untuk seluruh masukan'],['A','C'],
 'Data yang sebanding dan aturan penghitungan yang konsisten membantu membandingkan strategi. Ukuran data berbeda atau generalisasi satu kasus dapat menghasilkan kesimpulan yang menyesatkan.');
single('INF-055',B,'Murid mengenali pola bilangan 2, 4, 8, 16 lalu mengklaim setiap pola empat bilangan pasti berlipat dua. Pertanyaan guru yang paling tepat adalah ...',[
 'Aturan apa yang kalian usulkan, dan bagaimana aturan itu diuji pada deret lain?','Apakah tulisan jawaban sudah memakai warna yang menarik?','Siapa yang paling cepat menghafalkan empat bilangan itu?','Bisakah semua deret diganti agar sesuai dengan dugaan kalian?'],
 'Pengenalan pola perlu dibedakan dari generalisasi yang didukung bukti. Murid diminta menyatakan aturan dan menguji batas berlakunya, bukan mengubah data agar dugaan selalu tampak benar.');
matrix('INF-056',B,'Nilai pernyataan tentang pemodelan sistem peminjaman alat.',[
 'Model dapat menyederhanakan detail fisik sambil mempertahankan aturan peminjaman','Aturan satu alat tidak boleh dipinjam dua orang pada waktu yang sama dapat menjadi batas model','Model yang berhasil pada satu contoh tidak perlu diuji pada contoh lain'],[true,true,false],
 'Penyederhanaan tetap perlu menjaga aturan yang penting bagi tujuan. Pengujian beberapa kondisi, termasuk peminjaman yang bertabrakan, diperlukan agar keberhasilan satu contoh tidak dianggap bukti lengkap.');
single('INF-057',B,'Murid mencari rute dengan selalu memilih jalan terpendek berikutnya. Pada contoh tertentu, rute totalnya lebih panjang. Pelajaran konsep yang paling tepat adalah ...',[
 'Pilihan lokal terbaik belum tentu memberikan solusi total terbaik','Strategi lokal pasti optimal pada semua peta','Setiap algoritma yang memakai jarak pasti keliru','Peta harus diubah agar strategi awal selalu menang'],
 'Contoh tersebut menunjukkan batas strategi rakus: keputusan terbaik pada satu langkah tidak otomatis optimal secara keseluruhan. Guru dapat meminta murid membandingkan total jarak beberapa rute.');
single('INF-058',B,'Untuk melacak buku hilang, kelompok membagi pekerjaan menjadi pengumpulan data, pencarian, dan pelaporan. Agar dekomposisi dapat digabung kembali, hal terpenting adalah ...',[
 'Menyepakati masukan, keluaran, dan identitas buku yang digunakan setiap bagian','Membiarkan format data setiap kelompok sama sekali tidak terhubung','Memastikan semua kelompok mengerjakan ulang seluruh tugas yang sama','Menyamakan warna sampul laporan tanpa membahas data'],
 'Bagian yang didekomposisi perlu antarmuka data yang jelas agar hasilnya dapat dipakai bagian lain. Identitas buku dan format keluaran menghubungkan pekerjaan, sedangkan keseragaman dekorasi tidak cukup.');

single('INF-059',A,'Python: list(range(2, 7, 2)) menghasilkan [2, 4, 6]. Murid menambahkan 8 pada prediksinya. Penjelasan paling tepat adalah ...',[
 'Nilai berikutnya 8 sudah melewati batas berhenti 7; batas berhenti tidak disertakan','range selalu menyertakan bilangan setelah batas berhenti','Langkah 2 berarti hanya dua keluaran','Batas berhenti harus selalu genap agar program berjalan'],
 'range mulai dari 2 dan menambahkan 2 sehingga membentuk 2, 4, 6. Nilai 8 tidak memenuhi batas berhenti. Tabel jejak membantu murid melihat perbedaan nilai awal, batas, dan langkah.');
single('INF-060',A,'Pseudocode: total ← 0; untuk x dalam [2, 5, 1], total ← total + x. Murid menjawab 1 karena hanya melihat x terakhir. Representasi paling tepat adalah ...',[
 'Tabel total setelah tiap iterasi: 2, 7, 8','Tabel yang hanya mencatat warna setiap baris','Pernyataan total selalu sama dengan x terakhir','Menghapus total dan tetap mengklaim algoritma menjumlahkan semua nilai'],
 'Akumulator mempertahankan hasil antariterasi. Urutan total 2, 7, lalu 8 menunjukkan bahwa nilai sebelumnya dibawa ke langkah berikutnya, bukan diganti oleh x terakhir.');
single('INF-061',A,'Array berindeks mulai 0 memiliki 5 elemen. Perulangan mengakses indeks 0 sampai 5, kedua batas disertakan. Perbaikannya adalah ...',[
 'Mengakses indeks 0 sampai 4 karena indeks terakhir adalah panjang dikurangi satu','Mengakses indeks 1 sampai 5 tanpa memeriksa konvensi indeks','Menambah satu pada semua indeks agar tidak ada indeks nol','Membiarkan indeks 5 karena jumlah elemen juga 5'],
 'Lima elemen dengan indeks awal nol berada pada indeks 0, 1, 2, 3, dan 4. Indeks 5 berada di luar batas. Murid perlu membedakan jumlah elemen dengan nilai indeks terakhir.');
single('INF-062',A,'Fungsi diskon mengembalikan 10 jika belanja ≥ 100, dan 0 jika kurang. Untuk menguji batas kondisi, data yang paling tepat adalah ...',[
 '99, 100, dan 101','10, 20, dan 30 saja','200, 300, dan 400 saja','1000, 2000, dan 3000 saja'],
 'Nilai tepat di bawah, tepat pada, dan tepat di atas ambang menguji penggunaan operator batas. Semua nilai yang jauh dari ambang dapat gagal mengungkap kesalahan antara lebih besar dan lebih besar atau sama.');
multi('INF-063',A,'Pilih DUA langkah debugging yang membantu menguji dugaan penyebab kesalahan secara sistematis.',[
 'Membuat masukan kecil yang dapat mereproduksi kegagalan','Mengubah banyak bagian sekaligus tanpa catatan','Mengamati nilai variabel di titik yang terkait hipotesis','Menghapus semua pesan kesalahan sebelum dibaca'],['A','C'],
 'Kasus kecil yang dapat diulang dan pengamatan variabel memberi bukti bagi hipotesis. Perubahan banyak bagian sekaligus menyulitkan penentuan penyebab; pesan kesalahan justru dapat menjadi petunjuk.');
single('INF-064',A,'Dua perulangan bersarang masing-masing berjalan 3 dan 4 kali tanpa break. Murid memprediksi 7 eksekusi isi terdalam. Tindak lanjut terbaik adalah ...',[
 'Membuat tabel pasangan iterasi untuk menunjukkan 3 × 4 = 12 eksekusi','Menerima 7 karena jumlah batas selalu dijumlahkan','Mengatakan isi terdalam hanya berjalan sekali','Mengabaikan perulangan luar karena ada perulangan dalam'],
 'Untuk setiap satu iterasi luar, empat iterasi dalam dijalankan kembali. Dengan tiga iterasi luar terdapat dua belas pasangan. Tabel pasangan mengungkap kekeliruan menjumlahkan batas.');
single('INF-065',A,'Pseudocode: n ← 3; selama n > 0, tampilkan n. Program tidak berhenti. Perbaikan minimal sesuai tujuan menghitung mundur adalah ...',[
 'Menambahkan n ← n - 1 di dalam badan perulangan','Mengganti kondisi menjadi n ≥ 0 tanpa mengubah n','Menambah keluaran tanpa memperbarui n','Mengubah n awal menjadi 10 dan tetap tidak memperbaruinya'],
 'Kondisi bergantung pada n, tetapi n tidak berubah sehingga tetap benar. Mengurangi n setiap iterasi membuat urutan 3, 2, 1 dan akhirnya kondisi salah pada nol.');
matrix('INF-066',A,'Nilai pernyataan tentang pengujian fungsi yang mengolah daftar.',[
 'Daftar kosong perlu ditentukan perilakunya jika termasuk masukan yang diizinkan','Hasil yang benar pada satu masukan membuktikan fungsi benar untuk semua masukan','Elemen berulang dapat menjadi kasus uji yang relevan'],[true,false,true],
 'Pengujian mengikuti kontrak masukan. Daftar kosong dan duplikasi dapat mengungkap asumsi tersembunyi. Satu keberhasilan hanya memberi bukti untuk kasus tersebut, bukan pembuktian universal.');
single('INF-067',A,'Dua fungsi memiliki variabel lokal bernama hasil. Murid menganggap keduanya harus selalu saling mengubah. Cara mengajarkan ruang lingkup paling tepat adalah ...',[
 'Menelusuri dua pemanggilan terpisah dan menunjukkan bahwa variabel lokal berada dalam lingkup fungsi masing-masing','Mengganti semua variabel menjadi global sebagai satu-satunya penjelasan','Menyatakan nama sama selalu menunjuk penyimpanan sama di seluruh program','Menghindari penggunaan fungsi agar ruang lingkup tidak dibahas'],
 'Nama lokal ditafsirkan dalam lingkupnya. Dua fungsi dapat menggunakan nama yang sama tanpa menjadikannya variabel bersama. Jejak pemanggilan memperlihatkan batas akses serta masa penggunaan nilai.');
single('INF-068',A,'Murid memakai struktur stack untuk fitur Undo. Mengapa operasi yang paling baru perlu diproses terlebih dahulu?',[
 'Undo membalik perubahan terakhir sebelum perubahan sebelumnya, sesuai LIFO','Stack selalu mengambil perubahan paling lama terlebih dahulu','Undo harus mengurutkan tindakan berdasarkan abjad','Semua tindakan harus dihapus sekaligus pada setiap Undo'],
 'Stack mengikuti last in, first out: elemen terakhir yang masuk dikeluarkan lebih dulu. Ini sesuai dengan pembalikan tindakan terbaru. Urutan abjad atau penghapusan semua tindakan tidak mewakili Undo bertahap.');
single('INF-069',A,'Layanan loket menggunakan antrean: A datang, kemudian B, lalu C. Jika tidak ada prioritas khusus, orang yang dilayani setelah A adalah ...',[
 'B, karena antrean mengikuti urutan kedatangan FIFO','C, karena yang terakhir datang selalu lebih dahulu','A lagi, karena elemen pertama tidak pernah dikeluarkan','Tidak dapat ditentukan meskipun urutan kedatangan diketahui'],
 'Antrean biasa mengikuti first in, first out. Setelah A dilayani dan keluar, B berada di depan. Aturan ini berbeda dari stack yang mendahulukan elemen terakhir masuk.');
single('INF-070',A,'Satu pencarian memeriksa setiap elemen daftar sampai target ditemukan. Murid menyebutnya pencarian biner meski data tidak diurutkan. Bukti pembeda utama adalah ...',[
 'Strategi memeriksa berurutan, bukan membagi ruang pencarian berdasarkan urutan','Nama variabel yang dipakai memuat kata binary','Semua pencarian dengan komputer otomatis biner','Jumlah huruf target selalu menentukan jenis pencarian'],
 'Jenis pencarian ditentukan langkah algoritmanya. Pemeriksaan elemen satu per satu adalah pencarian linear. Pencarian biner menggunakan urutan untuk menyingkirkan bagian ruang pencarian.');

single('INF-071',D,'Data waktu tunggu adalah 2, 3, 3, 4, dan 38 menit. Murid memakai rata-rata untuk menggambarkan waktu tipikal. Pembahasan terbaik adalah ...',[
 'Membandingkan median 3 dengan rata-rata 10 serta pengaruh nilai ekstrem 38','Menghapus 38 tanpa memeriksa apakah data itu valid','Menyatakan rata-rata dan median harus selalu sama','Mengganti semua data menjadi 3 agar grafik lebih rapi'],
 'Jumlah data 50 sehingga rata-rata 10, sedangkan nilai tengahnya 3. Perbedaan menunjukkan pengaruh nilai ekstrem. Nilai 38 perlu ditelusuri konteksnya sebelum keputusan menghapus data.');
single('INF-072',D,'Persentase kehadiran harus dihitung sebagai hadir dibagi total murid. Kelas A: 18/20; kelas B: 24/30. Kesimpulan yang tepat adalah ...',[
 'Proporsi hadir A 90% lebih tinggi daripada B 80%, walaupun jumlah hadir B lebih besar','B selalu lebih tinggi karena 24 lebih besar daripada 18','Proporsi kedua kelas sama karena sama-sama ada yang absen','Jumlah hadir saja sudah cukup untuk membandingkan persentase'],
 'Perbandingan persentase memerlukan penyebut. A memiliki 18 dibagi 20 = 90%, B 24 dibagi 30 = 80%. Mengabaikan ukuran kelas mencampurkan jumlah absolut dengan proporsi.');
single('INF-073',D,'Survei kebiasaan membaca hanya dibagikan melalui klub pecinta buku. Masalah utama jika hasilnya digeneralisasi ke semua murid adalah ...',[
 'Sampel berpotensi tidak mewakili murid di luar klub','Jumlah pertanyaan otomatis harus genap','Setiap respons survei pasti salah','Diagram batang tidak boleh dipakai untuk survei'],
 'Anggota klub mungkin memiliki minat baca yang berbeda dari populasi sekolah. Jalur pengambilan sampel dapat menimbulkan bias; ketepatan generalisasi perlu menimbang siapa yang terjangkau dan tidak terjangkau.');
multi('INF-074',D,'Pilih DUA langkah pembersihan data sebelum menghitung rerata tinggi badan dalam sentimeter.',[
 'Memeriksa satuan dan mengonversi entri yang masih dalam meter secara konsisten','Mengubah semua nilai kecil menjadi nol tanpa memeriksa konteks','Memeriksa duplikasi serta entri tidak wajar terhadap catatan asal','Menghapus semua nilai yang berbeda dari rata-rata sementara'],['A','C'],
 'Satuan, duplikasi, dan entri tidak wajar perlu ditelaah agar data dapat dibandingkan. Perbedaan dari rata-rata tidak otomatis salah; perubahan tanpa penelusuran dapat merusak data yang valid.');
single('INF-075',D,'Dalam spreadsheet, rumus =B2*$E$1 disalin satu baris ke bawah. Rumus hasilnya adalah ...',[
 '=B3*$E$1','=B2*$E$2','=B3*$E$2','=B2*$E$1'],
 'B2 adalah referensi relatif sehingga barisnya berubah menjadi B3. Tanda dolar pada kolom dan baris E1 membuat referensi tersebut absolut dan tetap saat rumus disalin ke bawah.');
single('INF-076',D,'Tabel transaksi memiliki kolom kelas dan jumlah. Untuk menjumlahkan jumlah per kelas dalam SQL, struktur yang paling tepat adalah ...',[
 'SELECT kelas, SUM(jumlah) FROM transaksi GROUP BY kelas','SELECT kelas, jumlah FROM transaksi tanpa pengelompokan','SELECT SUM(kelas) FROM transaksi untuk menjumlahkan nama kelas','SELECT kelas FROM transaksi ORDER BY kelas tanpa agregasi'],
 'SUM mengagregasi nilai dan GROUP BY menentukan kelompok kelas. Mengurutkan baris tidak menjumlahkan nilai per kelas, sedangkan menjumlahkan label kelas tidak sesuai dengan tujuan perhitungan.');
matrix('INF-077',D,'Nilai pernyataan tentang interpretasi grafik.',[
 'Sumbu vertikal yang dipotong dapat memperbesar kesan perbedaan pada diagram batang','Dua variabel bergerak bersama sudah cukup membuktikan sebab akibat','Judul, satuan, dan sumber data membantu pembaca menilai makna grafik'],[true,false,true],
 'Desain sumbu memengaruhi persepsi besar perbedaan. Hubungan dua variabel dapat disebabkan faktor lain sehingga korelasi saja belum membuktikan kausalitas. Konteks dan satuan membantu interpretasi yang bertanggung jawab.');
single('INF-078',D,'Basis data menyimpan murid dan peminjaman buku. Mengapa id_murid lebih tepat dipakai untuk menghubungkan tabel daripada nama murid saja?',[
 'Identitas unik membedakan murid yang kebetulan bernama sama','Nama pasti unik untuk setiap sekolah','Identitas unik membuat semua data otomatis selalu benar','Relasi tabel ditentukan panjang teks nama saja'],
 'Nama dapat sama atau berubah, sehingga tidak selalu menjadi pengenal yang andal. Identitas unik membantu mengaitkan catatan dengan murid yang tepat, tetapi validasi data dan aturan relasi tetap diperlukan.');
single('INF-079',D,'Data survei memiliki nilai kosong. Guru ingin murid membedakan tidak menjawab dari jawaban nol. Langkah paling tepat adalah ...',[
 'Menetapkan kode nilai hilang dan melaporkan cara penanganannya sebelum analisis','Mengubah semua nilai kosong menjadi nol tanpa pertimbangan','Menganggap kosong selalu berarti tidak pernah melakukan kegiatan','Menghapus kolom pertanyaan beserta seluruh respons valid'],
 'Nol adalah nilai yang bermakna, sedangkan data hilang menunjukkan ketiadaan informasi. Menyamakan keduanya dapat mengubah rata-rata dan kesimpulan. Aturan penanganan perlu dinyatakan secara transparan.');
single('INF-080',D,'Dua petugas mengisi kode kelas dengan VII-A, vii a, dan 7A untuk kelas yang sama. Sebelum mengelompokkan data, tindakan yang paling sesuai adalah ...',[
 'Membuat aturan normalisasi berdasarkan daftar kelas resmi dan menelusuri entri yang ambigu','Menganggap seluruh variasi pasti kelas yang berbeda','Menghapus semua murid yang kodenya berbeda bentuk','Mengubah semua kode menjadi kelas yang paling sering muncul'],
 'Normalisasi menyamakan representasi entitas yang sama dengan acuan yang jelas. Entri ambigu perlu dikonfirmasi; penghapusan atau pengubahan ke mayoritas tanpa dasar dapat menghilangkan informasi yang benar.');

single('INF-081',L,'Murid menerima pesan yang meminta sandi akun sekolah melalui formulir berlogo sekolah. Tindakan awal yang paling tepat adalah ...',[
 'Memeriksa permintaan melalui kanal resmi yang diketahui tanpa memasukkan sandi ke formulir itu','Mengisi sandi karena logo sudah cukup membuktikan keaslian','Meneruskan formulir ke semua teman agar cepat selesai','Menganggap semua pesan berlogo pasti dikirim administrator'],
 'Logo mudah ditiru dan tidak membuktikan identitas pengirim. Verifikasi melalui kanal resmi membantu menilai permintaan sebelum kredensial dibagikan. Tekanan waktu atau tampilan meyakinkan bukan dasar kepercayaan.');
multi('INF-082',L,'Pilih DUA kebiasaan yang mengurangi risiko pengambilalihan akun belajar.',[
 'Menggunakan sandi unik dan autentikasi tambahan bila tersedia','Memakai sandi yang sama di semua layanan','Menjaga kode pemulihan di tempat aman yang tidak dibagikan','Mengirim kode verifikasi kepada siapa pun yang mengaku petugas'],['A','C'],
 'Sandi unik membatasi dampak kebocoran di layanan lain, sementara autentikasi tambahan dan pemulihan yang aman membantu melindungi akses. Kode verifikasi serta pemulihan tidak untuk dibagikan kepada pengirim pesan.');
single('INF-083',L,'Murid ingin memakai foto daring untuk poster publik. Langkah paling bertanggung jawab adalah ...',[
 'Memeriksa izin atau lisensi, memenuhi ketentuannya, dan mencantumkan atribusi bila diwajibkan','Menganggap semua hasil pencarian bebas digunakan untuk tujuan apa pun','Menghapus nama pembuat agar poster tampak orisinal','Menganggap mencantumkan sumber selalu menggantikan izin penggunaan'],
 'Atribusi dan izin adalah hal yang berkaitan tetapi tidak saling menggantikan. Pemakaian perlu mengikuti ketentuan lisensi atau izin yang relevan; kemunculan di mesin pencari tidak menjadikannya bebas hak.');
single('INF-084',L,'Hasil keluaran AI menyertakan rujukan yang ternyata tidak dapat ditemukan. Respons pembelajaran yang paling tepat adalah ...',[
 'Memeriksa klaim dengan sumber tepercaya dan menjelaskan keterbatasan keluaran sebelum menggunakannya','Memakai hasil itu karena bahasa yang lancar menjamin kebenaran','Membuat judul rujukan baru agar daftar tampak lengkap','Menghapus kewajiban menyertakan bukti dari semua tugas'],
 'Keluaran yang tampak meyakinkan tetap dapat salah atau memuat rujukan rekaan. Murid perlu memverifikasi fakta dan sumber serta menjelaskan penggunaan alat, bukan menganggap kelancaran bahasa sebagai bukti.');
matrix('INF-085',L,'Nilai praktik berbagi data hasil survei kelas.',[
 'Menghapus nama saja belum tentu cukup jika kombinasi atribut masih mengidentifikasi seseorang','Data individual layak dipublikasikan seluruhnya hanya karena dikumpulkan untuk tugas','Ringkasan agregat yang tidak mengidentifikasi individu dapat mengurangi risiko privasi'],[true,false,true],
 'Identitas dapat terungkap melalui gabungan atribut meskipun nama dihapus. Pengumpulan untuk tugas tidak otomatis mengizinkan publikasi bebas. Pembatasan data dan agregasi perlu disesuaikan tujuan serta konteks.');
single('INF-086',L,'Dalam kerja kelompok daring, berkas penting terhapus. Pengaturan yang paling mendukung kolaborasi sekaligus pemulihan adalah ...',[
 'Memberikan akses sesuai peran dan menggunakan riwayat versi atau salinan cadangan','Memberi semua orang tautan edit publik tanpa batas kebutuhan','Mematikan riwayat versi agar perubahan tidak terlacak','Menjadikan satu sandi bersama sebagai satu-satunya kontrol akses'],
 'Akses sesuai kebutuhan membatasi perubahan yang tidak perlu, sedangkan versi dan cadangan membantu pemulihan. Tautan edit publik serta sandi bersama mempersulit penelusuran tanggung jawab.');
single('INF-087',L,'Sebuah video memotong wawancara menjadi satu kalimat yang tampak berbeda makna. Aktivitas literasi digital yang paling tepat adalah ...',[
 'Membandingkan cuplikan dengan rekaman utuh dan memeriksa konteks pernyataan','Menilai benar hanya berdasarkan jumlah penonton','Membagikannya dahulu sebelum melakukan pemeriksaan','Menganggap komentar terbanyak selalu membuktikan isi video'],
 'Potongan dapat menghilangkan konteks yang mengubah tafsir. Rekaman utuh dan penelusuran sumber membantu pemeriksaan makna; popularitas dan kecepatan penyebaran tidak membuktikan kebenaran.');
single('INF-088',L,'Guru menilai portofolio digital. Bukti proses yang paling berguna untuk membahas keaslian karya adalah ...',[
 'Draf, catatan revisi, dan penjelasan murid tentang keputusan yang diambil','Jumlah dekorasi pada halaman pembuka','Harga aplikasi yang digunakan','Kesamaan warna dengan karya guru'],
 'Jejak proses serta penjelasan keputusan memungkinkan guru menelaah pemahaman dan perkembangan karya. Tampilan atau harga alat tidak langsung menunjukkan siapa yang memahami proses pembuatannya.');

single('INF-089',N,'Komputer dapat terhubung ke layanan melalui alamat IP yang sudah diketahui, tetapi nama domain tidak dapat diubah menjadi alamat. Dugaan awal paling relevan adalah ...',[
 'Gangguan resolusi nama melalui DNS','Kapasitas kertas printer selalu habis','Semua file pada penyimpanan pasti terhapus','Ukuran monitor terlalu kecil untuk internet'],
 'DNS berkaitan dengan pemetaan nama domain ke alamat yang dibutuhkan untuk koneksi. Gejala tersebut mengarahkan pemeriksaan awal ke resolusi nama, tetapi diagnosis tetap perlu diuji dan tidak membuktikan semua komponen lain sehat.');
single('INF-090',N,'Murid menyamakan RAM dengan penyimpanan permanen. Demonstrasi yang paling sesuai untuk membedakannya adalah ...',[
 'Membandingkan data kerja yang belum disimpan dengan berkas tersimpan setelah aplikasi ditutup atau komputer dimatikan secara normal','Mengganti warna latar desktop tanpa mengamati data','Mengatakan kedua komponen selalu menyimpan data tanpa listrik','Menganggap kapasitas RAM menentukan jumlah halaman printer'],
 'RAM digunakan untuk data kerja dan bersifat volatil, sedangkan berkas yang disimpan berada pada media penyimpanan. Demonstrasi perlu memakai data latihan dan penutupan normal agar tidak merusak pekerjaan.');
multi('INF-091',N,'Pilih DUA langkah diagnosis awal ketika hanya satu komputer laboratorium gagal mengakses jaringan.',[
 'Memeriksa sambungan dan konfigurasi perangkat yang bermasalah','Mengganti seluruh jaringan sekolah sebelum memeriksa gejala','Membandingkan konfigurasi dan koneksi dengan perangkat yang bekerja','Menyimpulkan semua layanan internet dunia sedang mati'],['A','C'],
 'Masalah yang terbatas pada satu perangkat perlu ditelusuri dari koneksi dan konfigurasinya lalu dibandingkan dengan perangkat pembanding. Mengganti sistem luas tanpa bukti tidak efisien dan dapat menambah gangguan.');
single('INF-092',N,'Laboratorium memakai switch untuk menghubungkan perangkat dalam LAN dan router untuk menghubungkan jaringan berbeda. Pernyataan yang paling tepat adalah ...',[
 'Keduanya memiliki peran jaringan berbeda meskipun suatu perangkat fisik dapat menggabungkan fungsi','Switch hanya berguna untuk menyimpan dokumen','Router menjamin semua konten internet benar','Semua perangkat jaringan pasti mempunyai satu fungsi yang identik'],
 'Switch umumnya menghubungkan perangkat dalam jaringan lokal, sedangkan router meneruskan paket antarjaringan. Perangkat fisik dapat menggabungkan peran, sehingga pembahasan fungsi lebih tepat daripada menyamakan semua perangkat.');
matrix('INF-093',N,'Nilai pernyataan tentang representasi data digital.',[
 'Bit memiliki dua kemungkinan nilai, lazimnya ditulis 0 dan 1','Satu byte secara umum terdiri dari delapan bit','Berkas yang tampil sebagai teks tidak memiliki representasi bit'],[true,true,false],
 'Representasi digital menggunakan bit, dan byte secara umum berisi delapan bit. Teks juga dikodekan sebagai data biner; tampilan yang dapat dibaca manusia tidak menghilangkan representasi digitalnya.');
single('INF-094',N,'Murid menyimpan angka biner 1011. Cara yang tepat menunjukkan nilainya dalam desimal adalah ...',[
 '1×8 + 0×4 + 1×2 + 1×1 = 11','1 + 0 + 1 + 1 = 3','Membaca digitnya sebagai seribu sebelas desimal','Mengalikan semua digit sehingga hasilnya nol'],
 'Sistem biner memakai nilai tempat pangkat dua. Dari kanan bobotnya 1, 2, 4, dan 8, sehingga 1011 bernilai sebelas. Penjumlahan digit tanpa bobot mengabaikan nilai tempat.');
single('INF-095',N,'Murid menganggap cadangan pada folder berbeda di disk yang sama cukup untuk semua risiko kerusakan perangkat. Penjelasan yang tepat adalah ...',[
 'Kerusakan disk yang sama dapat mengenai kedua folder; salinan pada media atau lokasi terpisah dengan uji pemulihan mengurangi risiko itu','Nama folder berbeda menjamin kebal kerusakan disk','Cadangan tidak perlu pernah diuji karena penyalinan pasti berhasil','Semua jenis risiko selesai hanya dengan mengganti nama berkas'],
 'Dua folder pada satu disk masih berbagi titik kegagalan fisik. Media atau lokasi terpisah memperluas perlindungan, dan uji pemulihan memastikan salinan benar-benar dapat digunakan saat dibutuhkan.');

single('INF-096',T,'Guru mengajarkan kondisi logika. Murid memperoleh hasil benar tetapi tidak dapat menjelaskan alasan. Asesmen lanjutan paling sesuai adalah ...',[
 'Meminta prediksi untuk kasus baru dan alasan berdasarkan kondisi yang bernilai benar atau salah','Memberi nilai hanya dari kecepatan mengetik','Mengulang tugas dengan jawaban yang sudah diketahui tanpa penjelasan','Menghitung banyak warna pada kode'],
 'Prediksi beralasan pada kasus baru menguji pemahaman hubungan kondisi dan keputusan. Keberhasilan satu keluaran, kecepatan, atau dekorasi tidak cukup menjadi bukti penalaran logika.');
multi('INF-097',T,'Pilih DUA ciri proyek Informatika yang memberi bukti proses pemecahan masalah.',[
 'Ada perumusan kebutuhan dan pengujian solusi terhadap kebutuhan itu','Nilai ditentukan hanya oleh mahalnya perangkat','Ada catatan perbaikan dan alasan perubahan berdasarkan hasil uji','Semua murid cukup menyalin produk akhir yang sama'],['A','C'],
 'Kebutuhan, pengujian, serta revisi beralasan memperlihatkan proses menyelesaikan masalah. Produk salinan atau harga perangkat tidak memberikan bukti bagaimana murid mengambil keputusan.');
single('INF-098',T,'Dalam kegiatan unplugged, satu murid bertindak sebagai robot mengikuti instruksi teman secara harfiah. Fokus refleksi yang paling sesuai adalah ...',[
 'Bagaimana instruksi yang ambigu menimbulkan keluaran berbeda dan bagaimana memperjelasnya','Siapa yang memiliki suara paling keras','Mengapa aktivitas tanpa komputer tidak mungkin berkaitan dengan algoritma','Warna kartu mana yang paling mahal'],
 'Instruksi harfiah membantu murid melihat kebutuhan langkah yang jelas dan dapat dijalankan. Refleksi menghubungkan pengalaman konkret dengan sifat algoritma, bukan menilai hal yang tidak terkait tujuan.');
single('INF-099',T,'Murid dapat menjalankan model klasifikasi gambar, tetapi salah mengklasifikasikan objek pada latar yang berbeda. Pertanyaan guru yang paling mendukung evaluasi adalah ...',[
 'Apakah data latihan dan pengujian cukup beragam, dan pola apa yang tampaknya digunakan model?','Bagaimana membuat klaim akurasi sempurna tanpa pengujian lagi?','Bisakah semua gambar gagal dihapus dari laporan saja?','Mengapa warna tombol aplikasi tidak diganti?'],
 'Pengujian pada variasi konteks membantu menemukan keterbatasan pola yang dipelajari. Menelaah keragaman data dan jenis kesalahan lebih bermakna daripada menyembunyikan kegagalan atau mengubah dekorasi.');
single('INF-100',T,'Ketika menilai diagram alir murid, guru menemukan jalur untuk kondisi salah tidak berujung pada langkah yang jelas. Umpan balik terbaik adalah ...',[
 'Tunjukkan jalur kondisi salah, minta murid menelusurinya, lalu lengkapi tujuan jalur dan uji kedua kondisi','Diagramnya jelek tanpa menyebut bagian yang harus diperbaiki','Semua simbol harus diganti warna tanpa meninjau alur','Nilai harus penuh karena ada simbol keputusan'],
 'Umpan balik spesifik mengarahkan murid ke bagian alur yang belum lengkap dan meminta pengujian kedua kondisi. Komentar umum atau dekorasi tidak mengatasi ketidakjelasan urutan keputusan.');

single('PU-031','Pedagogi umum','Seorang murid benar saat menjelaskan secara lisan tetapi kesulitan mengikuti instruksi tertulis berparagraf panjang. Langkah awal guru paling tepat adalah ...',[
 'Mengidentifikasi bagian instruksi yang menghambat dan mencoba penyajian bertahap sambil mengecek pemahaman','Menyimpulkan murid tidak menguasai seluruh isi pelajaran','Mengganti semua tujuan menjadi kemampuan menyalin instruksi','Meminta diagnosis medis kepada murid sebagai syarat boleh belajar'],
 'Perbedaan bukti lisan dan tertulis mengarahkan pemeriksaan pada akses instruksi, bukan langsung pada penguasaan seluruh konsep. Bantuan bertahap dan cek pemahaman menguji apakah hambatan dapat dikurangi.','karakteristik');
single('PU-032','Pedagogi umum','Guru ingin mengetahui pengetahuan awal tentang pecahan sebelum merancang tugas. Bukti paling langsung adalah ...',[
 'Respons murid pada tugas singkat membandingkan pecahan dan penjelasan alasannya','Hanya rata-rata rapor seluruh mata pelajaran semester lalu','Urutan abjad nama murid','Pendapat bahwa semua murid seusia pasti memiliki kesiapan yang sama'],
 'Tugas yang mengungkap konsep prasyarat memberi bukti kesiapan yang relevan dengan tujuan. Nilai umum dapat melengkapi konteks tetapi tidak langsung menunjukkan bagaimana murid memahami pecahan.','karakteristik');
multi('PU-033','Pedagogi umum','Pilih DUA tindakan untuk memahami hambatan partisipasi murid yang baru pindah sekolah.',[
 'Mengamati partisipasi di beberapa kegiatan dan berbicara dengan murid secara privat','Mengumumkan bahwa murid baru pasti kurang mampu','Memberi kesempatan respons melalui pasangan atau tulisan sambil memantau perkembangan','Menjadikan satu kejadian diam sebagai dasar label permanen'],['A','C'],
 'Pengamatan lintas situasi dan percakapan membantu memahami konteks adaptasi. Pilihan cara merespons memberi kesempatan menunjukkan kemampuan. Label dari satu kejadian tidak cukup didukung bukti.','karakteristik');
matrix('PU-034','Pedagogi umum','Nilai pernyataan tentang membaca informasi kesiapan murid.',[
 'Penguasaan prasyarat dapat berbeda antara satu tujuan dan tujuan lain','Kategori kesiapan harus tetap sama sepanjang tahun meskipun bukti berubah','Percakapan murid dapat melengkapi hasil tugas awal'],[true,false,true],
 'Kesiapan terkait kemampuan tertentu dan dapat berkembang. Data tugas serta percakapan saling melengkapi, sehingga pengelompokan perlu diperbarui ketika informasi belajar berubah.','karakteristik');
single('PU-035','Pedagogi umum','Setelah menerima umpan balik, murid berkata: saya memang tidak berbakat dan tidak akan bisa. Respons guru paling mendukung perkembangan adalah ...',[
 'Menunjukkan strategi yang sudah berhasil, memilih satu bagian untuk diperbaiki, dan memberi kesempatan mencoba kembali','Menjamin nilai sempurna tanpa memeriksa pekerjaan','Menguatkan bahwa kemampuan sudah ditentukan dan tidak dapat berkembang','Mengatakan usaha saja cukup tanpa membantu strategi'],
 'Perkembangan dibantu bukti kemajuan, strategi spesifik, dan kesempatan perbaikan. Pujian atau janji hasil tanpa dukungan strategi tidak menunjukkan cara mengatasi kesulitan yang dihadapi.','karakteristik');

single('PU-036','Pedagogi umum','Guru memperagakan cara membandingkan bukti sambil mengucapkan proses berpikirnya. Setelah itu bantuan dikurangi bertahap. Prinsip yang paling tampak adalah ...',[
 'Pemodelan dan bantuan sementara menuju kemandirian','Penghilangan seluruh arahan sejak awal tanpa memperhatikan kesiapan','Hafalan hasil akhir sebagai satu-satunya tujuan','Pengelompokan kemampuan yang tidak boleh berubah'],
 'Pemodelan memperlihatkan proses yang sebelumnya tidak tampak. Bantuan sementara atau scaffolding kemudian dikurangi saat murid mampu menjalankan langkah sendiri, bukan dipertahankan tanpa evaluasi.','teori-belajar');
single('PU-037','Pedagogi umum','Setelah membaca konsep, murid diminta menjelaskannya tanpa melihat teks dan memeriksa kembali bagian yang keliru. Tujuan strategi itu adalah ...',[
 'Mengungkap apa yang dapat diingat dan dipahami untuk menentukan bagian yang perlu dipelajari lagi','Mengganti semua diskusi dengan penyalinan teks','Membuktikan siapa yang tidak perlu belajar selamanya','Mengukur panjang jawaban tanpa memperhatikan isi'],
 'Penjelasan kembali mengungkap bagian yang dapat diakses dari ingatan dan bagian yang masih lemah. Pemeriksaan serta perbaikan membantu murid memantau belajar, bukan sekadar mengukur panjang tulisan.','teori-belajar');
multi('PU-038','Pedagogi umum','Pilih DUA kegiatan yang secara langsung mendukung regulasi diri dalam belajar.',[
 'Murid menetapkan target yang jelas dan memeriksa kemajuannya dengan kriteria','Murid hanya menunggu penilaian akhir tanpa meninjau strategi','Murid mengidentifikasi strategi yang kurang efektif lalu mencoba perbaikan','Guru menyembunyikan seluruh tujuan agar murid tidak mengetahui arah belajar'],['A','C'],
 'Regulasi diri melibatkan perencanaan, pemantauan, dan penyesuaian strategi. Target serta kriteria memberi arah; refleksi strategi memberi dasar perbaikan. Menunggu nilai tanpa pemantauan mengurangi peran aktif murid.','teori-belajar');
matrix('PU-039','Pedagogi umum','Nilai pernyataan tentang membangun pemahaman konseptual.',[
 'Contoh yang berbeda dapat membantu murid mengenali ciri esensial suatu konsep','Menemukan jawaban sendiri berarti guru tidak boleh memberi petunjuk dalam kondisi apa pun','Membahas alasan yang salah dapat membantu meninjau gagasan awal'],[true,false,true],
 'Contoh bervariasi dan pembahasan alasan memperjelas batas konsep serta miskonsepsi. Kegiatan konstruktif tetap dapat memakai petunjuk dan pemodelan sesuai kebutuhan, bukan mengharuskan ketiadaan arahan.','teori-belajar');
single('PU-040','Pedagogi umum','Murid diminta mengaplikasikan konsep penghematan air pada kondisi rumah yang berbeda. Agar pembelajaran bermakna, guru sebaiknya ...',[
 'Meminta pilihan tindakan beserta alasan yang menghubungkan konsep dengan kondisi tiap rumah','Mewajibkan satu tindakan identik meskipun kondisi sumber air berbeda','Menilai hanya jumlah gambar pada laporan','Menganggap hafalan slogan sudah membuktikan semua penerapan'],
 'Penerapan bermakna menghubungkan konsep dengan konteks nyata dan alasan keputusan. Perbedaan kondisi dapat menghasilkan pilihan tindakan berbeda yang tetap sah bila didukung penalaran yang relevan.','teori-belajar');

single('PU-041','Pedagogi umum','Tujuan pembelajaran meminta murid menyusun argumen berbasis dua sumber. Bukti asesmen yang paling selaras adalah ...',[
 'Argumen yang memuat klaim, bukti dari dua sumber, dan alasan hubungan bukti dengan klaim','Daftar judul dua sumber tanpa pembahasan','Catatan jumlah menit murid duduk tenang','Salinan paragraf pertama setiap sumber tanpa keputusan'],
 'Kemampuan berargumentasi memerlukan klaim serta hubungan alasan dengan bukti. Daftar sumber dan catatan kepatuhan belum menunjukkan bahwa murid menggunakan sumber untuk mendukung argumen.','perencanaan');
single('PU-042','Pedagogi umum','Guru memiliki waktu terbatas untuk proyek. Tujuan utama adalah membandingkan alternatif solusi. Penyesuaian paling tepat adalah ...',[
 'Memperkecil skala produk sambil mempertahankan kegiatan perbandingan dan alasan pemilihan','Menghapus penalaran agar dekorasi produk selesai lebih lama','Mempertahankan semua aktivitas meskipun tujuan tidak sempat dibahas','Mengganti tujuan setelah nilai diberikan agar terlihat tercapai'],
 'Penyesuaian waktu perlu mempertahankan bukti kompetensi sasaran. Skala produk dapat diperkecil jika proses perbandingan tetap berlangsung. Mengutamakan dekorasi dapat menggeser inti tujuan.','perencanaan');
multi('PU-043','Pedagogi umum','Pilih DUA pertimbangan utama sebelum memilih media pembelajaran.',[
 'Kesesuaian fungsi media dengan tujuan dan materi','Popularitas media sebagai satu-satunya ukuran keberhasilan','Akses dan kebutuhan murid serta alternatif bila media bermasalah','Jumlah efek suara tanpa kaitan dengan konsep'],['A','C'],
 'Media perlu memberi manfaat terhadap kompetensi yang dituju dan dapat diakses murid. Ketersediaan alternatif menjaga keberlangsungan belajar. Popularitas atau efek tidak otomatis membuktikan efektivitas.','perencanaan');
matrix('PU-044','Pedagogi umum','Nilai pernyataan tentang perencanaan pembelajaran.',[
 'Urutan tujuan perlu memperhatikan hubungan prasyarat kompetensi','Aktivitas guru yang panjang otomatis membuktikan tujuan telah tercapai','Kriteria keberhasilan membantu memilih bukti asesmen yang relevan'],[true,false,true],
 'Prasyarat membantu menyusun urutan belajar yang dapat dijalankan murid. Bukti ketercapaian berasal dari kemampuan murid yang sesuai kriteria, bukan semata lama atau banyaknya aktivitas guru.','perencanaan');
single('PU-045','Pedagogi umum','Murid sudah mempelajari contoh terbimbing. Guru hendak menilai penerapan konsep secara mandiri. Rancangan paling sesuai adalah ...',[
 'Tugas baru dengan tuntutan kompetensi setara dan bantuan yang dikurangi secara terencana','Tugas yang sama dengan jawaban lengkap disertakan untuk disalin','Tes materi yang belum pernah mendapat kesempatan dipelajari','Penilaian berdasarkan siapa yang mempunyai buku paling tebal'],
 'Tugas baru yang setara membantu memeriksa transfer dan kemandirian setelah latihan. Bantuan dikurangi sesuai kesiapan, sedangkan tuntutan tetap terkait kesempatan belajar yang telah diberikan.','perencanaan');

single('PU-046','Pedagogi umum','Dalam satu kelas, dua kelompok menunjukkan kesulitan berbeda pada tugas yang sama. Diferensiasi paling tepat adalah ...',[
 'Memberi bantuan terarah pada kesulitan masing-masing dan mengecek ulang kemajuannya','Menganggap semua murid harus menerima bantuan identik walaupun kebutuhan berbeda','Menghapus tujuan semua murid agar setiap jawaban benar','Memberi label kelompok permanen dari satu tugas'],
 'Dukungan sebaiknya menjawab kesulitan yang teridentifikasi dan diperbarui berdasarkan kemajuan. Diferensiasi tidak menuntut penghapusan tujuan atau pelabelan tetap; penyesuaian dapat bersifat sementara.','diferensiasi');
single('PU-047','Pedagogi umum','Video penjelasan menjadi sumber utama, tetapi seorang murid tidak dapat mengakses audionya. Akomodasi yang paling relevan adalah ...',[
 'Menyediakan takarir atau transkrip yang akurat dan memeriksa akses terhadap informasi penting','Mengecualikan murid dari tujuan pembelajaran tanpa analisis','Menambah volume untuk seluruh kelas sebagai satu-satunya tindakan','Memberi nilai berdasarkan kemampuan mendengar meskipun bukan tujuan pelajaran'],
 'Takarir atau transkrip menyediakan akses informasi melalui bentuk lain. Kesesuaian perlu dicek terhadap kebutuhan murid dan tujuan, sehingga hambatan audio tidak disamakan dengan kurangnya penguasaan konsep.','diferensiasi');
multi('PU-048','Pedagogi umum','Pilih DUA contoh pengayaan yang bermakna bagi murid yang telah menguasai tujuan.',[
 'Menganalisis kasus baru yang menuntut penerapan lebih mendalam','Menyalin kembali pekerjaan yang sama tanpa tujuan tambahan','Membandingkan dua solusi dan membahas kondisi penggunaannya','Selalu mengambil alih seluruh tugas temannya'],['A','C'],
 'Pengayaan memperluas penerapan atau memperdalam penalaran terhadap kompetensi. Pengulangan tanpa tujuan dan pengambilalihan pekerjaan teman tidak otomatis memperkaya pemahaman murid yang sudah siap.','diferensiasi');
matrix('PU-049','Pedagogi umum','Nilai pernyataan tentang akomodasi akses belajar.',[
 'Pilihan respons lisan dapat sesuai jika kompetensi sasaran bukan keterampilan menulis','Semua akomodasi otomatis berarti menurunkan tujuan pembelajaran','Kebutuhan akses perlu dikonfirmasi dan dievaluasi bersama pihak yang relevan'],[true,false,true],
 'Akomodasi membuka akses dan dapat mempertahankan kompetensi sasaran. Bentuk respons harus tetap cocok dengan hal yang diukur; kebutuhan ditelaah agar penyesuaian benar-benar membantu, bukan didasarkan asumsi.','diferensiasi');
single('PU-050','Pedagogi umum','Hasil cek ulang menunjukkan murid yang sebelumnya membutuhkan contoh tambahan kini sudah mandiri. Guru sebaiknya ...',[
 'Mengurangi bantuan dan memberi tantangan berikutnya berdasarkan bukti terbaru','Mempertahankan seluruh bantuan selamanya karena label awal tidak berubah','Mengembalikan murid ke tugas termudah tanpa pertimbangan','Menghapus catatan kemajuan agar pengelompokan lama terlihat sesuai'],
 'Bantuan bersifat responsif terhadap kemajuan. Ketika murid sudah mandiri, bantuan dapat dikurangi agar tidak membatasi perkembangan, sementara tantangan berikutnya tetap sesuai tujuan serta kesiapan.','diferensiasi');

single('PU-051','Pedagogi umum','Rubrik presentasi menilai pemahaman konsep, tetapi 70% skor diberikan pada jenis huruf dan efek animasi. Masalah utamanya adalah ...',[
 'Bobot penilaian lebih banyak mengukur tampilan yang tidak langsung mewakili pemahaman konsep','Rubrik pasti adil karena semua murid memakai tabel yang sama','Semua presentasi harus dilarang untuk asesmen','Pemahaman konsep hanya dapat dinilai dari panjang slide'],
 'Kriteria dan bobot perlu merepresentasikan kompetensi sasaran. Konsistensi tabel tidak cukup bila sebagian besar skor ditentukan aspek yang tidak relevan; bukti pemahaman perlu mendapat tempat yang sesuai.','asesmen');
single('PU-052','Pedagogi umum','Guru memberikan komentar: dua bukti sudah relevan, tetapi hubungan bukti kedua dengan klaim belum jelas; tambahkan penjelasan lalu revisi. Kekuatan umpan balik ini adalah ...',[
 'Menunjukkan capaian, kesenjangan spesifik, dan langkah perbaikan yang dapat dikerjakan','Hanya menyatakan peringkat murid','Mengganti tujuan belajar dengan pujian umum','Menutup kesempatan murid memperbaiki jawaban'],
 'Umpan balik tersebut menjelaskan apa yang sudah baik, bagian yang belum sesuai, dan tindakan lanjutan. Kesempatan revisi membuat informasi dapat digunakan untuk belajar, bukan berhenti sebagai komentar.','asesmen');
multi('PU-053','Pedagogi umum','Pilih DUA cara memperkuat konsistensi penilaian tugas terbuka oleh beberapa guru.',[
 'Membahas kriteria serta contoh pekerjaan pada tiap tingkat kualitas','Menentukan nilai dari kedekatan pribadi dengan murid','Mencocokkan penilaian contoh dan membahas perbedaan alasan skor','Menyembunyikan seluruh kriteria dari para penilai'],['A','C'],
 'Pemahaman bersama terhadap kriteria dan contoh mengurangi perbedaan tafsir yang tidak relevan. Diskusi perbedaan skor membantu kalibrasi penilaian, sedangkan kedekatan personal tidak mengukur kompetensi.','asesmen');
matrix('PU-054','Pedagogi umum','Nilai pernyataan tentang penggunaan hasil asesmen.',[
 'Informasi formatif perlu digunakan untuk menyesuaikan langkah belajar','Nilai total yang sama selalu berarti pola kesulitan murid juga sama','Penjelasan jawaban dapat melengkapi skor untuk menemukan miskonsepsi'],[true,false,true],
 'Skor total dapat menyembunyikan kesulitan yang berbeda pada indikator tertentu. Penjelasan dan pola respons membantu menentukan tindak lanjut. Fungsi formatif menjadi nyata ketika informasi dipakai untuk perbaikan.','asesmen');
single('PU-055','Pedagogi umum','Dua murid mendapat skor total sama tetapi gagal pada tujuan yang berbeda. Remedial yang paling tepat adalah ...',[
 'Menargetkan tujuan yang belum dikuasai masing-masing dengan dukungan dan cek ulang','Memberi seluruh tugas identik hanya karena skor total sama','Menganggap keduanya pasti memiliki kebutuhan yang identik','Mengubah skor agar tidak perlu tindak lanjut'],
 'Tindak lanjut mengikuti bukti per tujuan. Kesamaan skor total tidak membuktikan kesamaan pola kesulitan, sehingga bantuan dan pemeriksaan ulang perlu menjawab indikator yang belum dikuasai.','asesmen');

single('PU-056','Pedagogi umum','Pergantian aktivitas sering membuat kelas bingung dan gaduh. Langkah pencegahan paling sesuai adalah ...',[
 'Mengajarkan rutinitas transisi, memberi instruksi singkat, dan mengecek kesiapan sebelum berpindah','Menambah ancaman tanpa menjelaskan kegiatan berikutnya','Menyimpulkan semua murid tidak ingin belajar','Menghentikan semua variasi aktivitas untuk selamanya'],
 'Rutinitas serta instruksi yang jelas mengurangi ketidakpastian saat transisi. Pencegahan menargetkan sumber kebingungan; ancaman atau label terhadap seluruh kelas tidak mengajarkan perilaku yang diharapkan.','lingkungan');
single('PU-057','Pedagogi umum','Seorang murid salah menjawab lalu ditertawakan. Respons guru yang paling mendukung rasa aman adalah ...',[
 'Menghentikan ejekan, menguatkan kesepakatan menghargai, dan memandu pembahasan alasan tanpa merendahkan','Ikut menertawakan agar kelas akrab','Menyalahkan murid karena berani menjawab','Melarang semua murid bertanya selama sisa semester'],
 'Rasa aman dibangun dengan menghentikan perendahan dan memisahkan kesalahan gagasan dari martabat murid. Pembahasan alasan tetap dilakukan sehingga kekeliruan dapat menjadi sumber belajar.','lingkungan');
multi('PU-058','Pedagogi umum','Pilih DUA rancangan kerja kelompok yang mendukung partisipasi adil.',[
 'Peran bergilir dengan tanggung jawab yang dijelaskan','Satu murid selalu memegang seluruh sumber dan keputusan','Waktu bagi setiap anggota menyampaikan alasan serta bukti kontribusi individual','Menilai partisipasi hanya dari siapa yang paling keras berbicara'],['A','C'],
 'Struktur peran dan kesempatan menyampaikan alasan membantu distribusi kesempatan belajar. Bukti individual memperlihatkan kontribusi yang mungkin tidak tampak pada produk kelompok; suara keras bukan satu-satunya bentuk partisipasi.','lingkungan');
matrix('PU-059','Pedagogi umum','Nilai pernyataan tentang disiplin yang mendidik.',[
 'Membahas perilaku spesifik lebih tepat daripada memberi label buruk pada identitas murid','Mempermalukan murid di depan kelas selalu diperlukan agar aturan dipatuhi','Tanggung jawab memperbaiki dampak perilaku perlu disertai dukungan yang sesuai'],[true,false,true],
 'Disiplin yang mendidik mengarahkan pada perilaku, tanggung jawab, dan perbaikan. Mempermalukan merusak martabat serta rasa aman dan tidak perlu dijadikan syarat penegakan aturan.','lingkungan');
single('PU-060','Pedagogi umum','Guru mendengar laporan perundungan berulang saat istirahat. Urutan prioritas paling tepat adalah ...',[
 'Memastikan keamanan murid terdampak, menghentikan perilaku, mencatat fakta, dan menindaklanjuti melalui prosedur sekolah','Meminta korban membuktikan dirinya lebih kuat sebelum didengar','Menunggu hasil ujian akhir baru menilai apakah masalah penting','Membagikan identitas korban ke grup umum untuk mencari hiburan'],
 'Keselamatan dan dukungan menjadi prioritas sebelum penyelesaian lebih lanjut. Catatan faktual serta prosedur yang sesuai membantu tindak lanjut; pengabaian dan pembukaan identitas sembarangan dapat memperburuk dampak.','lingkungan');

single('PU-061','Pedagogi umum','Rekan meminta daftar nama dan nilai murid untuk presentasi komunitas terbuka. Langkah paling tepat adalah ...',[
 'Menawarkan ringkasan atau data yang dianonimkan sesuai tujuan dan meninjau risiko identifikasi','Mengirim seluruh identitas karena semua anggota komunitas pasti berhak','Mempublikasikan data mentah agar diskusi lebih ramai','Mengganti nama dengan inisial dan menjamin tidak mungkin dikenali tanpa pemeriksaan lain'],
 'Berbagi pengalaman profesional tetap perlu menjaga kerahasiaan. Ringkasan atau anonimisasi mengurangi risiko, tetapi kombinasi atribut perlu diperiksa karena inisial saja belum selalu mencegah identifikasi.','etika');
single('PU-062','Pedagogi umum','Orang tua menyampaikan keluhan tentang tugas. Pembukaan percakapan paling mendukung kerja sama adalah ...',[
 'Mendengarkan bagian yang dirasa sulit dan meminta contoh sebelum membahas tujuan serta dukungan','Langsung menilai orang tua tidak peduli pendidikan','Membandingkan anaknya dengan anak keluarga lain','Menutup percakapan karena keputusan guru tidak boleh dijelaskan'],
 'Mendengarkan contoh konkret membantu memahami konteks keluhan sebelum menyepakati dukungan. Penjelasan tujuan serta bukti dapat dibahas tanpa menyalahkan keluarga atau merendahkan murid.','etika');
multi('PU-063','Pedagogi umum','Pilih DUA tindakan guru yang menunjukkan integritas penilaian.',[
 'Meninjau keberatan skor dengan kembali pada bukti dan kriteria','Menaikkan nilai akademik karena hubungan pribadi dengan keluarga','Memperbaiki kesalahan penilaian secara transparan sesuai prosedur','Mengarang bukti kerja agar nilai yang terlanjur diberikan terlihat benar'],['A','C'],
 'Integritas menuntut penilaian berbasis kriteria dan koreksi kesalahan yang dapat dipertanggungjawabkan. Hubungan pribadi atau bukti rekaan menggeser dasar penilaian dari kompetensi murid.','etika');
matrix('PU-064','Pedagogi umum','Nilai pernyataan tentang kolaborasi profesional.',[
 'Perbedaan pendapat dapat dibahas dengan bukti dan tujuan belajar bersama','Kritik atas rancangan pembelajaran selalu merupakan serangan terhadap pribadi guru','Kesepakatan kolaborasi sebaiknya memuat tindakan serta waktu tindak lanjut'],[true,false,true],
 'Kolaborasi memungkinkan penelaahan gagasan tanpa merendahkan pribadi. Bukti dan tindak lanjut menghubungkan diskusi dengan perbaikan praktik; menganggap semua kritik sebagai serangan menutup kesempatan belajar.','etika');
single('PU-065','Pedagogi umum','Dalam percakapan dengan murid, guru menyadari instruksi sebelumnya menimbulkan salah paham. Tindakan yang paling menunjukkan komunikasi efektif adalah ...',[
 'Mengakui ketidakjelasan, merumuskan ulang instruksi, dan meminta murid menjelaskan pemahamannya','Mengulang instruksi lebih keras tanpa memeriksa maknanya','Mengurangi nilai sebagai hukuman karena murid meminta penjelasan','Meminta murid mengikuti saja meskipun tujuan tugas belum dipahami'],
 'Komunikasi efektif memeriksa kesamaan pemahaman, bukan sekadar volume suara. Perumusan ulang dan penjelasan kembali dari murid memberi bukti apakah pesan sudah dapat digunakan untuk bertindak.','etika');

single('PU-066','Pedagogi umum','Guru merasa metode baru berhasil karena kelas tampak ramai. Bukti tambahan paling relevan sebelum menyimpulkan dampak adalah ...',[
 'Respons atau pekerjaan murid yang menunjukkan capaian pada tujuan yang sama','Jumlah kursi yang dipindahkan selama kegiatan','Warna pakaian yang dikenakan peserta','Banyaknya tepuk tangan tanpa menghubungkannya dengan pemahaman'],
 'Keterlibatan yang tampak belum membuktikan penguasaan kompetensi. Pekerjaan atau respons pada indikator tujuan memberi dasar lebih langsung, sambil tetap meninjau konteks dan keterbatasan perbandingan.','refleksi');
single('PU-067','Pedagogi umum','Guru ingin menilai perbaikan pertanyaan penuntun. Agar hasil dapat ditafsirkan dengan lebih hati-hati, ia sebaiknya ...',[
 'Mendokumentasikan perubahan, menggunakan indikator yang sebanding, dan mencatat faktor konteks','Mengubah tujuan serta cara penilaian tanpa catatan lalu membandingkan nilai mentah','Hanya memilih pekerjaan yang membuktikan dugaan awal','Mengklaim satu strategi pasti berhasil untuk seluruh sekolah'],
 'Indikator sebanding dan catatan pelaksanaan membantu menilai perubahan yang relevan. Faktor konteks tetap dapat memengaruhi hasil, sehingga kesimpulan perlu dibatasi dan bukti yang tidak sesuai dugaan tidak disembunyikan.','refleksi');
multi('PU-068','Pedagogi umum','Pilih DUA isi refleksi profesional yang kuat setelah suatu strategi belum mencapai hasil harapan.',[
 'Penjelasan kesenjangan antara tujuan dan bukti belajar yang terkumpul','Klaim seluruh murid tidak mampu tanpa memeriksa desain','Rencana perubahan spesifik beserta cara memeriksa dampaknya','Cerita pengalaman orang lain yang diklaim sebagai praktik sendiri'],['A','C'],
 'Refleksi menghubungkan kesenjangan berbasis bukti dengan tindakan berikutnya. Menyalahkan murid secara menyeluruh atau mengklaim pengalaman rekaan tidak membantu mengembangkan keputusan profesional yang dapat dipertanggungjawabkan.','refleksi');
matrix('PU-069','Pedagogi umum','Nilai pernyataan tentang laporan perbaikan pembelajaran.',[
 'Dugaan penyebab perlu dibedakan dari fakta yang benar-benar diamati','Hasil yang belum sempurna harus diubah agar semua laporan terlihat berhasil','Keterbatasan bukti dapat dinyatakan bersama rencana pengumpulan data berikutnya'],[true,false,true],
 'Laporan yang jujur membedakan pengamatan dan interpretasi serta mengakui batas bukti. Kegagalan sebagian dapat menjadi dasar perbaikan, sedangkan perubahan hasil rekaan merusak integritas refleksi.','refleksi');
single('PU-070','Pedagogi umum','Komunitas belajar telah menyepakati strategi umpan balik baru. Langkah berikutnya agar kegiatan berdampak adalah ...',[
 'Mencobanya pada tujuan tertentu, mengumpulkan bukti respons murid, lalu membahas hasil dan penyesuaiannya','Menghentikan kegiatan setelah membagikan daftar hadir','Menyimpulkan semua strategi sudah efektif karena disepakati bersama','Mengumpulkan sertifikat tanpa menghubungkannya dengan kelas'],
 'Kesepakatan profesional perlu diterapkan dan dievaluasi melalui bukti belajar. Diskusi hasil serta penyesuaian menghubungkan komunitas dengan praktik, sementara kehadiran atau sertifikat saja belum menunjukkan dampak.','refleksi');

// Rujukan tambahan hanya ditautkan pada butir yang membahas konsep terkait.
bank.find(q=>q.id==='INF-059').source_ids.push('R20');
bank.find(q=>q.id==='INF-076').source_ids.push('R21');
bank.find(q=>q.id==='INF-089').source_ids.push('R22');
for(const q of bank.filter(q=>q.section==='PU')){
 const codes={karakteristik:['P.2','P.5'], 'teori-belajar':['P.1','P.3'],perencanaan:['P.1','P.6','PF.4'],diferensiasi:['P.2','P.5'],asesmen:['P.6'],lingkungan:['P.3','K.1','S.1'],etika:['K.1','S.1','S.2'],refleksi:['K.2','PF.5']};
 q.competency_codes=codes[q.puTopic];
 if(['lingkungan','etika','refleksi'].includes(q.puTopic))q.source_ids.push('R19');
}
export const extraQuestions=bank;
