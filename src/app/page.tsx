import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { BrandCard } from "@/components/brand-card";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { CtaPanel } from "@/components/cta-panel";
import { WaButton } from "@/components/wa-button";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";

const featuredCategories = [
  "mesin-kantor",
  "office-paper-accessories",
  "cutting-precision",
  "packaging-sealing",
  "document-file",
  "display-identification",
  "kemasan-kado",
  "stamp-inks",
];

const advantages = [
  { t: "Stok dalam & konsisten", d: "Gudang di Kalianak, Surabaya menyimpan buffer untuk SKU inti agar pesanan berulang tidak tertunda." },
  { t: "Pengiriman terjadwal", d: "Jaringan ekspedisi mitra menjangkau seluruh Indonesia, dari kota besar hingga daerah." },
  { t: "Harga grosir bertingkat", d: "Diskon mengikuti volume dan status kemitraan — makin besar dan rutin, makin baik." },
  { t: "Dukungan reseller", d: "Katalog, foto produk, dan info produk baru dibagikan berkala untuk mitra aktif." },
  { t: "Distributor sah", d: "Perjanjian resmi untuk A+Z, AJP, Bright Office — faktur dan dokumen lengkap untuk pengadaan." },
  { t: "Satu kontak, empat merek", d: "Konsolidasikan order lintas merek dalam satu pengiriman dan satu tagihan." },
];

const steps = [
  { t: "Ajukan", d: "Isi formulir kemitraan atau hubungi kami via WhatsApp dengan data usaha Anda." },
  { t: "Verifikasi & penawaran", d: "Tim kami memeriksa data lalu mengirim daftar harga grosir dan ketentuan MOQ." },
  { t: "Pesan & kirim", d: "Kirim PO, lakukan pembayaran sesuai term, barang dikirim dari gudang pusat." },
];

const segments = [
  "Toko ATK & retail",
  "Grosir & sub-distributor",
  "Sekolah & yayasan",
  "Kantor & korporat",
  "Reseller / agen daerah",
  "Percetakan & UMKM",
];

export default function HomePage() {
  const terlaris = products.filter((p) => p.badge === "Terlaris");
  const baru = products.filter((p) => p.badge === "Baru");
  const featuredProducts = [...terlaris.slice(0, 5), ...baru.slice(0, 3)];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage: "linear-gradient(115deg, #000, transparent 65%)",
            WebkitMaskImage: "linear-gradient(115deg, #000, transparent 65%)",
          }}
        />
        <div className="container relative py-16 sm:py-24">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-7 bg-accent" />
            Distributor ATK &amp; Perlengkapan Sekolah · Surabaya
          </p>
          <h1 className="mt-4 max-w-4xl text-[2rem] font-extrabold leading-[1.08] sm:text-5xl">
            Satu pintu distribusi untuk empat merek alat tulis &amp; perlengkapan.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            {site.name} memegang dan menyalurkan Bright Office, A+Z Stationery, AJP Office, dan AJP Mart
            Fancy — dengan stok siap kirim, harga grosir, dan dukungan penuh untuk reseller
            serta toko retail.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaButton message={waMessages.general()}>Pesan Grosir via WhatsApp</WaButton>
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center rounded-[0.6rem] border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand-deep"
            >
              Jelajahi E-Katalog
            </Link>
          </div>
          <p className="mt-5 text-sm text-ink-faint">
            Balasan cepat pada jam kerja ({site.hours}). Daftar harga dikirim setelah verifikasi usaha.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-line bg-surface">
        <div className="container grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl font-extrabold text-brand-deep">{s.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND PORTFOLIO */}
      <section className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow="Portofolio Merek"
          title="Empat merek, satu jalur pasokan"
          intro="Setiap merek melayani kebutuhan berbeda — dari operasional kantor hingga koleksi fancy untuk pelajar. Semua tersedia di bawah satu perjanjian distribusi."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="border-y border-line bg-surface">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Kategori Unggulan"
            title="Telusuri berdasarkan kebutuhan"
            intro="Dari alat presisi hingga manajemen dokumen — temukan lini yang paling laku di segmen Anda."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((slug) => {
              const c = categories.find((x) => x.slug === slug);
              return c ? <CategoryCard key={slug} category={c} /> : null;
            })}
          </div>
          <Link
            href="/katalog"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:underline"
          >
            Lihat semua {categories.length} kategori
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow="Produk Sorotan"
          title="Yang sedang banyak diminati mitra"
          intro="Item andalan dan produk baru lintas merek. Buka detail untuk melihat spesifikasi, isi karton, dan varian ukuran."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-line bg-surface">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Keunggulan B2B"
            title="Keunggulan yang terasa di rantai pasok Anda"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.t} className="rounded-card border border-line bg-ground p-5">
                <h3 className="font-display text-base font-bold text-ink">{a.t}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="container py-16 sm:py-20">
        <SectionHeading eyebrow="Proses Kemitraan" title="Tiga langkah menjadi mitra" />
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-card border border-line bg-surface p-5">
              <span className="font-mono text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-base font-bold text-ink">{s.t}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SEGMENTS */}
      <section className="border-t border-line bg-surface">
        <div className="container py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold">Kami melayani</h2>
            <ul className="flex flex-wrap gap-2">
              {segments.map((s) => (
                <li
                  key={s}
                  className="rounded-pill border border-line bg-ground px-3 py-1.5 text-sm text-ink-soft"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
