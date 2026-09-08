import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: `Syarat dan ketentuan penggunaan situs ${site.name}.`,
};

export default function SyaratPage() {
  return (
    <section className="container max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-extrabold">Syarat &amp; Ketentuan</h1>
      <p className="mt-2 text-sm text-ink-faint">
        Draf awal — sesuaikan dengan ketentuan usaha dan penasihat hukum Anda.
      </p>
      <div className="prose-block mt-8 text-ink-soft">
        <h2 className="text-lg font-bold text-ink">Informasi produk &amp; harga</h2>
        <p>
          Katalog di situs ini bersifat referensi. Spesifikasi, isi karton, dimensi, dan ketersediaan
          stok dapat berubah sewaktu-waktu tanpa pemberitahuan. Harga grosir tidak ditampilkan di
          situs dan hanya berlaku setelah penawaran resmi dikeluarkan kepada mitra terverifikasi.
        </p>
        <h2 className="mt-8 text-lg font-bold text-ink">Pemesanan</h2>
        <p>
          Pemesanan dianggap sah setelah adanya konfirmasi tertulis dari {site.name} dan pemenuhan
          syarat pembayaran serta minimum order yang berlaku.
        </p>
        <h2 className="mt-8 text-lg font-bold text-ink">Kekayaan intelektual</h2>
        <p>
          Nama dan logo merek yang ditampilkan adalah milik pemiliknya masing-masing dan digunakan
          dalam konteks distribusi resmi.
        </p>
        <h2 className="mt-8 text-lg font-bold text-ink">Kontak</h2>
        <p>
          Pertanyaan mengenai ketentuan ini dapat disampaikan melalui WhatsApp {site.whatsapp.display}.
        </p>
      </div>
    </section>
  );
}
