import type { Metadata } from "next";
import Link from "next/link";
import { CtaPanel } from "@/components/cta-panel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil PT Ateka Jaya Primantara — distributor utama alat tulis kantor dan perlengkapan sekolah di Surabaya, memegang 4 merek.",
};

const nilai = [
  ["Ketersediaan", "Stok inti selalu tersedia agar mitra tidak kehilangan penjualan."],
  ["Ketepatan waktu", "Pengiriman terjadwal dan komunikasi status yang jelas."],
  ["Transparansi harga", "Struktur harga grosir yang adil dan konsisten per tingkatan."],
  ["Kemitraan jangka panjang", "Dukungan yang tumbuh seiring pertumbuhan usaha mitra."],
];

export default function TentangKamiPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container py-14 sm:py-20">
          <p className="eyebrow">Tentang Kami</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
            Menyalurkan alat tulis yang menggerakkan kantor, sekolah, dan usaha kreatif.
          </h1>
        </div>
      </section>

      <section className="container grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="prose-block text-ink-soft">
          <p>
            {site.name} adalah perusahaan distributor utama alat tulis kantor (ATK) dan perlengkapan
            sekolah yang berbasis di Surabaya. Kami memegang hak distribusi untuk{" "}
            <strong className="text-ink">Bright Office</strong>,{" "}
            <strong className="text-ink">A+Z Stationery</strong>,{" "}
            <strong className="text-ink">AJP Office</strong>, dan{" "}
            <strong className="text-ink">AJP Mart Fancy.</strong>{" "}
          </p>
          <p>
            Fokus kami sederhana: memastikan mitra tidak pernah kehabisan barang yang dibutuhkan
            pelanggannya. Dari gudang di kawasan Kalianak, kami mengelola stok lintas merek,
            mengonsolidasikan pesanan, dan mengirim ke toko, grosir, sekolah, dan kantor di seluruh
            Indonesia.
          </p>
          <p>
            Dengan satu perjanjian distribusi, mitra memperoleh akses ke ribuan SKU — mulai dari
            perkakas meja dan aksesori kertas, alat potong presisi, seri seni &amp; mewarnai, hingga
            manajemen dokumen dan perlengkapan pengemasan.
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink">Nilai yang kami pegang</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {nilai.map(([t, d]) => (
              <div key={t} className="rounded-card border border-line bg-surface p-4">
                <p className="font-semibold text-ink">{t}</p>
                <p className="mt-1 text-sm">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-bold text-ink">Jaringan distribusi</h2>
          <p>
            Kantor &amp; gudang pusat berada di {site.addressOneLine}. Area layanan kami meliputi
            seluruh Indonesia. Untuk
            kebutuhan volume besar, jadwal, dan area khusus, hubungi tim kemitraan kami.
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink">Legalitas</h2>
          <p>
            Badan usaha berbentuk Perseroan Terbatas (PT) dengan dokumen perizinan lengkap dan surat
            penunjukan distributor untuk merek terkait. Faktur pajak dan dokumen pengadaan tersedia
            untuk kebutuhan tender sekolah dan korporat.{" "}
            <span className="text-ink-faint">
              (Lengkapi nomor NIB / izin usaha sebelum publikasi.)
            </span>
          </p>
        </div>

        <aside className="lg:pt-1">
          <div className="rounded-card border border-line bg-surface p-5 text-sm">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Ringkas</h2>
            <dl className="mt-3 space-y-3">
              <div>
                <dt className="text-ink-faint">Kantor &amp; gudang</dt>
                <dd className="text-ink">{site.addressOneLine}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Jam operasional</dt>
                <dd className="text-ink">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Kontak</dt>
                <dd className="text-ink">
                  WhatsApp {site.whatsapp.display}
                </dd>
              </div>
            </dl>
            <Link
              href="/kemitraan"
              className="mt-5 inline-flex w-full items-center justify-center rounded-[0.6rem] bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg"
            >
              Ajukan Kemitraan
            </Link>
          </div>
        </aside>
      </section>

      <CtaPanel />
    </>
  );
}
