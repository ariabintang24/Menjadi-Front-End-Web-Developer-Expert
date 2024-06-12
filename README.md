## Submission: Katalog Restoran + PWA

### Halaman Utama (Daftar Restoran)
- **Syarat:**
  - Menampilkan daftar restoran yang datanya bersumber dari API: [restaurant-api.dicoding.dev](https://restaurant-api.dicoding.dev). Silakan lihat dokumentasinya pada halaman tersebut.
  - Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.
  - Ada tautan/CTA yang mengarah ke detail restoran pada setiap item-nya.
  - Hero elemen tetap dipertahankan.

### Halaman Detail Restoran
- **Syarat:**
  - Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
  - Pada halaman detail restoran harus berisi hal-hal berikut:
    - Nama restoran
    - Gambar
    - Alamat
    - Kota
    - Deskripsi
    - Menu Makanan
    - Menu Minuman
    - Customer Reviews
  - Ada tombol favorite untuk memasukkan atau menghapus restoran favorit dari database. Penyimpanan ini menggunakan IndexedDB.

### Halaman Daftar Restoran Favorit
- **Syarat:**
  - Halaman daftar restoran dapat diakses melalui menu navigasi favorit.
  - Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari IndexedDB).
  - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
  - Ada tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.

### Native Capability
- **Syarat:**
  - Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apa pun, bahkan menggunakan workbox.
  - Aplikasi harus menampilkan icon Add to Home Screen.
  - Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.

### Code Quality
- **Syarat:**
  - Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint, ya.
  - Menerapkan salah satu style guide, baik Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
  - Periksa kembali sebelum mengirimkan submission project Anda. Penuhi seluruh kriteria yang ditetapkan dalam konfigurasi linter Anda. Kondisi terpenuhinya kriteria ditandai dengan tidak adanya satupun error ketika menjalankan ESLint.
  - Pertahankan syarat yang ada pada submission sebelumnya. Di antaranya, responsibilitas tampilan, aksesibilitas pada website, appbar, footer, dan sebagainya.
