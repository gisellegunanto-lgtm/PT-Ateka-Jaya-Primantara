import type { Metadata } from "next";
import { PartnershipForm } from "@/components/forms/partnership-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kemitraan B2B",
  description:
    "Jadi mitra distribusi PT Ateka Jaya Primantara: reseller/agen, pembelian grosir, dan pengadaan sekolah/korporat. Ajukan kemitraan dan dapatkan daftar harga grosir.",
};

const jalur = [
  {
    t: "Jadi Reseller / Agen",
    d: "Untuk toko ATK, sub-distributor, dan agen daerah yang ingin memasok ulang secara rutin dengan harga grosir bertingkat.",
    poin: ["Harga khusus mitra", "Prioritas stok SKU inti", "Materi katalog & foto produk", "Info produk baru lebih dulu"],
  },
  {
    t: "Pembelian Grosir / Korporat / Sekolah",
    d: "Untuk kebutuhan volume besar sekali atau berkala: kantor, instansi, yayasan pendidikan, dan panitia pengadaan.",
    poin: ["Penawaran per proyek", "Faktur & dokumen pengadaan", "Konsolidasi lintas merek", "Pengiriman terjadwal"],
  },
];

const faq = [
  ["Berapa minimum order (MOQ)?", "MOQ ditetapkan per produk — umumnya per lusin atau per karton. Rincian dikirim bersama daftar harga setelah verifikasi."],
  ["Ke mana saja pengiriman?", "Ke seluruh Indonesia lewat jaringan ekspedisi mitra. Ongkir mengikuti tujuan dan berat."],
  ["Bagaimana pembayaran?", "Pesanan pertama umumnya pembayaran di muka. Term tempo dapat dipertimbangkan untuk mitra dengan riwayat pesanan rutin."],
  ["Apakah ada katalog PDF?", "Ada. Katalog per merek dan price list grosir dibagikan kepada mitra terverifikasi."],
  ["Bisa retur barang?", "Retur diterima untuk cacat produksi/kesalahan kirim dengan konfirmasi dalam tenggat yang disepakati di ketentuan mitra."],
  ["Apakah melayani dropship?", "Fokus kami distribusi grosir. Skema khusus dapat didiskusikan untuk mitra dengan volume memadai."],
];

export default function KemitraanPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container py-14 sm:py-20">
          <p className="eyebrow">Kemitraan B2B</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
            Jadi mitra distribusi kami — pasokan stabil, margin sehat, dukungan nyata.
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Baik Anda membuka toko ATK baru, mengelola grosir, atau memasok sekolah dan kantor, kami
            siapkan harga, stok, dan pengiriman yang bisa diandalkan.
          </p>
        </div>
      </section>

      <section className="container grid gap-4 py-14 sm:grid-cols-2">
        {jalur.map((j) => (
          <div key={j.t} className="rounded-card border border-line bg-surface p-6">
            <h2 className="text-lg font-bold">{j.t}</h2>
            <p className="mt-2 text-sm text-ink-soft">{j.d}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {j.poin.map((p) => (
                <li key={p} className="flex items-start gap-2 text-ink-soft">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <h2 className="text-xl font-bold">Formulir pengajuan kemitraan</h2>
            <p className="mt-2 max-w-prose text-sm text-ink-soft">
              Isi data usaha Anda. Formulir membuka WhatsApp dengan ringkasan sudah terisi — kirim,
              dan tim kami menindaklanjuti dalam 1–2 hari kerja.
            </p>
            <div className="mt-6">
              <PartnershipForm />
            </div>
          </div>
          <aside>
            <div className="rounded-card border border-line bg-ground p-5 text-sm">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Syarat umum</h3>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>Memiliki usaha aktif (toko, grosir, instansi, atau badan usaha).</li>
                <li>Bersedia memenuhi MOQ awal per produk.</li>
                <li>Data kontak &amp; alamat pengiriman yang jelas.</li>
                <li>Menyepakati term pembayaran yang berlaku.</li>
              </ul>
              <h3 className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Kontak langsung</h3>
              <p className="mt-3 text-ink-soft">
                WhatsApp {site.whatsapp.display}
                <br />
                {site.hours}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-xl font-bold">Pertanyaan yang sering diajukan</h2>
        <div className="mt-6 divide-y divide-line rounded-card border border-line bg-surface">
          {faq.map(([q, a]) => (
            <details key={q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink">
                {q}
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-ink-faint transition group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-2 text-sm text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
