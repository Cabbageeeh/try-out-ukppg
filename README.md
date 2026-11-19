# Nalar — Tryout UKPPPG Calon Guru Informatika

Website statis dengan 80 soal latihan orisinal, simulasi 150 menit, sprint 20 soal, latihan per topik, pembahasan, penilaian, analisis topik, ekspor hasil dan riwayat browser.

Jalankan `node preview.mjs`, lalu buka http://127.0.0.1:4318. Jalankan `node --test tests/exam.test.mjs` untuk pemeriksaan bank soal, kunci, penilaian PG/MCMA/kategori, durasi dan kelengkapan komposisi. Jika npm tersedia, alias `npm start` dan `npm test` juga dapat digunakan.

Data disimpan di localStorage browser dan perangkat yang sama. Timer menggunakan deadline absolut, sehingga reload/menutup halaman tidak mengulang waktu. Setelah waktu habis, hasil dihitung saat aplikasi aktif kembali bila sebelumnya tertutup. Riwayat menyimpan maksimal 12 sesi. Ini aplikasi belajar mandiri: kunci soal tersedia di sisi klien, tanpa klaim pengamanan ujian berisiko tinggi atau sinkronisasi antarperangkat.

Referensi pada `dist/sources.json` berasal dari paket riset sebelumnya. Peta materi menggunakan panduan Informatika 2025 dan kompetensi dalam salinan juknis Calon Guru 2026. Bobot topik bersifat editorial. Setiap butir bernilai 1 bila tepat seluruhnya; respons lainnya 0. Skor latihan bukan nilai resmi atau prediksi kelulusan. Soal belum ditelaah pakar eksternal.

Soal berada di `dist/bank.js` dan `dist/seed.json`; logika penilaian pada `dist/engine.js`; antarmuka pada `dist/app.js` dan `dist/style.css`. Tidak diperlukan instalasi dependensi. Font daring opsional memiliki fallback sistem.

Pedagogi Umum: buka `#pedagogi` untuk delapan ringkasan, kasus, dan latihan topik. Materi berada di `dist/pedagogi.js`; halaman di `dist/pedagogi-page.js`. Bank PU tetap 30 soal yang juga digunakan dalam paket 80 soal. Tryout PU memakai 55 menit sebagai durasi latihan Nalar; ini bukan durasi resmi PU terpisah. Kedua mode tersedia juga untuk latihan topik tanpa timer. Sesi lama tetap memakai snapshot soal dan pilihan mode yang tersimpan.
