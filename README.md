# PT Ateka Jaya Primantara — Situs Company Profile & E-Katalog

Situs resmi distributor ATK & perlengkapan sekolah. Dibangun dengan **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Semua halaman di-*prerender* statis (cepat & SEO-friendly). Tidak butuh database — data produk berupa file TypeScript.

---

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
```

Build produksi:

```bash
npm run build
npm run start
```

> Node 18.18+ diperlukan (dites dengan Node 24). Jika `npm` tidak ditemukan, pasang Node via nvm / Homebrew / installer resmi lebih dulu.

---

## Yang HARUS diganti sebelum publikasi

| Item | Lokasi | Catatan |
|---|---|---|
| **Alamat** | `src/lib/site.ts` → `address`, `addressOneLine`, `mapsQuery` | Saat ini pakai **Blok B-07** (versi yang Anda kirim di chat). Kop surat perusahaan menulis **Blok C-03**. Pastikan mana yang benar. |
| Telp / Faks / WhatsApp | `src/lib/site.ts` | Telp `(031) 7493625`, Faks `(031) 51908597`, WA `6285233792189`. |
| Email bisnis | `src/lib/site.ts` → `email` | Kosong. Isi agar muncul di footer & halaman Kontak. |
| Domain | `src/lib/site.ts` → `url` | Dipakai untuk `sitemap.xml`, `robots.txt`, dan metadata. Ganti ke domain asli. |
| Angka statistik | `src/lib/site.ts` → `stats` | "15+ tahun", "1.000+ SKU", dll. masih perkiraan. |
| Nomor NIB / izin usaha | `src/app/tentang-kami/page.tsx` | Ada placeholder di bagian "Legalitas". |
| **Logo** | `public/logo-mark.svg` + `src/components/logo.tsx` + `src/app/icon.svg` | Placeholder emblem berlian hijau. Lihat bagian "Logo" di bawah. |
| **Foto produk** | lihat bagian "Foto produk" | Sekarang pakai grafik placeholder. |
| Data katalog | `src/data/products.ts` | ~48 produk contoh. Kode SKU, isi karton, dimensi & berat perlu diverifikasi. |

---

## Struktur

```
src/
  app/
    page.tsx                Beranda
    tentang-kami/           Tentang Kami
    merek/                  Daftar merek + /merek/[slug] (5 halaman)
    katalog/                E-Katalog (filter di client)
    produk/[slug]/          Halaman detail produk (48 halaman)
    kemitraan/              Halaman B2B + form + FAQ
    kontak/                 Info + peta Google + form
    kebijakan-privasi/, syarat-ketentuan/   Draf awal — tinjau hukum
    sitemap.ts, robots.ts   SEO
    icon.svg                Favicon
  components/               Header, Footer, kartu, katalog, form, dll.
  data/
    brands.ts               5 merek
    categories.ts           12 kategori
    products.ts             Data produk (edit di sini)
  lib/
    site.ts                 SEMUA data perusahaan
    whatsapp.ts             Builder link wa.me + template pesan
    catalog.ts              Filter, facet count, produk terkait
  types.ts                  Tipe data
```

### Menambah / mengubah produk

Edit `src/data/products.ts`. Satu objek = satu **keluarga produk**; varian ukuran/warna masuk ke array `variants`. Kategori & merek harus memakai `slug` yang ada di `categories.ts` / `brands.ts`. Katalog, filter, halaman produk, sitemap, dan menu ikut ter-*update* otomatis.

---

## Warna & tema

Token warna ada di **`src/app/globals.css`** (blok `:root`, `@media (prefers-color-scheme: dark)`, dan `:root[data-theme="dark"]`). Situs mendukung mode terang & gelap otomatis + tombol ganti tema (tersimpan di `localStorage`).

**Warna utama sekarang HIJAU** (ikut logo). Untuk beralih ke **biru** (sesuai brief awal), ubah tiga variabel ini di ketiga blok:

```css
--brand:        /* hijau #0e8f43  → mis. biru #1e4fc0 */
--brand-deep:   /* #0a6a33        → #15347e */
--brand-tint:   /* #e4f4e9        → #e7edfb */
```

`--accent` (oranye) khusus tombol aksi — biarkan atau sesuaikan.

Nilai yang sama juga ada di `tailwind.config.ts` sebagai `var(--...)`, jadi cukup ubah CSS-nya.

---

## Logo

Placeholder saat ini = emblem berlian "AJP" geometris sederhana.

- **Mark** dipakai di header, footer, kartu merek: `src/components/logo.tsx` (`<LogoMark>`).
- **Favicon**: `src/app/icon.svg`.
- File statis contoh: `public/logo-mark.svg`.

Untuk memakai logo asli: taruh `logo-mark.svg` (atau `.png` resolusi tinggi) di `public/`, lalu di `src/components/logo.tsx` ganti isi `<LogoMark>` dengan:

```tsx
import Image from "next/image";
export function LogoMark({ className = "h-9 w-9" }) {
  return <Image src="/logo-mark.svg" alt="" width={40} height={40} className={className} />;
}
```

---

## Foto produk

Produk tanpa foto menampilkan **grafik placeholder** (ikon kategori + nama merek). Untuk memasang foto asli:

1. **Taruh file** di `public/produk/` — mis. `public/produk/cutter-small-big.jpg`
   (nama file bebas; paling rapi memakai slug produk).
2. **Rujuk di `src/data/products.ts`** pada produk terkait:
   ```ts
   image: "/produk/cutter-small-big.jpg",
   // opsional, galeri di halaman detail:
   images: ["/produk/cutter-1.jpg", "/produk/cutter-2.jpg"],
   ```
3. Selesai. `next/image` otomatis meng-optimasi (WebP/AVIF, `srcset`, lazy-load).
   Foto muncul di kartu katalog **dan** halaman detail produk.

Spesifikasi foto yang disarankan:

- Latar putih polos, rasio **1:1** (persegi), ± **1500–2000 px**, JPG/PNG/WebP.
- Pencahayaan merata, bayangan kontak tipis, warna sesuai aslinya, tanpa properti/teks.

> **Catatan:** 3 produk (`cutter-small-big`, `expanding-file-series`, `art-coloring-set-case`)
> saat ini memakai gambar contoh (kotak hijau polos) di `public/produk/` — ganti dengan foto asli
> atau hapus file + baris `image:` untuk kembali ke placeholder.

Foto dari URL luar (mis. CDN) bisa dipakai, tapi perlu menambahkan host-nya ke
`images.remotePatterns` di `next.config.mjs`. Lebih sederhana pakai file lokal.

---

## Formulir

Halaman **Kemitraan** dan **Kontak** tidak memakai server/database. Saat disubmit, formulir **membuka WhatsApp** dengan ringkasan data sudah terisi; data terkirim ketika Anda menekan kirim di WhatsApp. Nomor tujuan diambil dari `src/lib/site.ts`.

Bila nanti ingin menyimpan lead ke email/Sheet/CRM: ganti handler `onSubmit` di `src/components/forms/*.tsx` dengan `fetch` ke API route (`src/app/api/...`) atau layanan seperti Formspree/Resend.

---

## Deploy

Situs 100% statis — bisa di mana saja.

**Vercel** (paling mudah untuk Next.js):
1. Push folder ini ke GitHub.
2. Import repo di vercel.com → deploy (tanpa konfigurasi).

**Netlify / Cloudflare Pages**: build command `npm run build`, publish `.next` (pakai adapter Next resmi) — atau set `output: "export"` di `next.config.mjs` untuk hasil folder `out/` HTML murni (catatan: `output: export` menonaktifkan fitur server; situs ini aman karena sudah full-static, tetapi peta & fungsi client tetap jalan).

Setelah domain aktif, ganti `url` di `src/lib/site.ts` agar `sitemap.xml` benar.

---

## Catatan keamanan dependensi

`npm audit` melaporkan beberapa isu pada dependensi *build-time* (transitif dari toolchain). Jalankan `npm audit` untuk detail; `npm update` berkala disarankan. Next.js sudah dinaikkan ke `14.2.35` (versi ter-patch).

---

## Checklist peluncuran

- [ ] Ganti semua placeholder di tabel "Yang HARUS diganti"
- [ ] Rekonsiliasi alamat B-07 vs C-03
- [ ] Pasang logo asli (mark + favicon)
- [ ] Uji template WhatsApp di HP nyata
- [ ] Tambahkan foto produk untuk SKU prioritas
- [ ] Isi `url` domain, cek `sitemap.xml` & `robots.txt`
- [ ] Lengkapi Kebijakan Privasi & Syarat–Ketentuan (tinjau hukum)
- [ ] Jalankan Lighthouse (target Performance & SEO ≥ 90)
