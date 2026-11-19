# Nalar — Tryout UKPPPG Calon Guru Informatika

Website statis dengan 170 soal latihan orisinal (100 PCK + 70 PU), simulasi 150 menit, sprint 20 soal, latihan per topik, pembahasan, penilaian, analisis topik, ekspor hasil dan riwayat browser.

Jalankan `node preview.mjs`, lalu buka http://127.0.0.1:4318. Jalankan `node --test tests/exam.test.mjs` untuk pemeriksaan bank soal, kunci, penilaian PG/MCMA/kategori, durasi dan kelengkapan komposisi. Jika npm tersedia, alias `npm start` dan `npm test` juga dapat digunakan.

Data disimpan di localStorage browser dan perangkat yang sama. Timer menggunakan deadline absolut, sehingga reload/menutup halaman tidak mengulang waktu. Setelah waktu habis, hasil dihitung saat aplikasi aktif kembali bila sebelumnya tertutup. Riwayat menyimpan maksimal 12 sesi. Ini aplikasi belajar mandiri: kunci soal tersedia di sisi klien, tanpa klaim pengamanan ujian berisiko tinggi atau sinkronisasi antarperangkat.

Referensi pada `dist/sources.json` berasal dari paket riset sebelumnya. Peta materi menggunakan panduan Informatika 2025 dan kompetensi dalam salinan juknis Calon Guru 2026. Bobot topik bersifat editorial. Setiap butir bernilai 1 bila tepat seluruhnya; respons lainnya 0. Skor latihan bukan nilai resmi atau prediksi kelulusan. Soal belum ditelaah pakar eksternal.

Soal berada di `dist/bank.js` dan `dist/seed.json`; logika penilaian pada `dist/engine.js`; antarmuka pada `dist/app.js` dan `dist/style.css`. Tidak diperlukan instalasi dependensi. Font daring opsional memiliki fallback sistem.

Pedagogi Umum: buka `#pedagogi` untuk delapan ringkasan, kasus, dan latihan topik. Materi berada di `dist/pedagogi.js`; halaman di `dist/pedagogi-page.js`. Bank PU berisi 70 soal, dan paket lengkap mengambil 50 PCK + 30 PU secara acak. Tryout PU memakai 55 menit sebagai durasi latihan Nalar; ini bukan durasi resmi PU terpisah. Kedua mode tersedia juga untuk latihan topik tanpa timer. Sesi lama tetap memakai snapshot soal dan pilihan mode yang tersimpan.

Tema: tombol Terang/Gelap tersedia di header dashboard dan ruang ujian. Pilihan disimpan terpisah dari sesi di `nalar.theme.v1`; kunjungan pertama mengikuti tema perangkat. `theme.js` dijalankan sebelum stylesheet untuk menerapkan tema sejak awal.

Variasi soal: `dist/extra-bank.js` menambah 50 PCK dan 40 PU, masing-masing dengan kunci dan pembahasan. `dist/selection.js` memilih 50+30 untuk tryout penuh, 13+7 untuk sprint, dan 30 untuk tryout PU. Pemilihan mengutamakan soal yang belum muncul pada maksimal 12 sesi di riwayat browser; jika cukup ruang, topik dan bentuk respons tetap tercakup. Paket identik baru dihindari berdasarkan himpunan ID, bukan urutan, selama kombinasi valid lain tersedia. Pengulangan sebagian soal tetap mungkin. Sesi aktif dan riwayat lama tetap memakai snapshot soal yang disimpan. Jalankan `node --test tests/*.test.mjs` untuk seluruh pemeriksaan.

Design: `dashboard-view.js`, `shell-view.js`, dan `editorial.css` mengikuti referensi desktop/mobile: sidebar hijau, aksen lime, tipografi serif, cakupan latihan horizontal, dan navigasi ponsel di bawah. Statistik dan riwayat menampilkan data lokal aktual, termasuk keadaan kosong. Tema gelap tetap tersedia.
