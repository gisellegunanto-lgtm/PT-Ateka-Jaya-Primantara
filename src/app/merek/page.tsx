import type { Metadata } from "next";
import { BrandCard } from "@/components/brand-card";
import { CtaPanel } from "@/components/cta-panel";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Merek & Portofolio",
  description:
    "Empat merek yang dipegang dan didistribusikan PT Ateka Jaya Primantara: Bright Office, A+Z Stationery, AJP Office, dan AJP Mart Fancy.",
};

export default function MerekPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container py-14 sm:py-20">
          <p className="eyebrow">Merek &amp; Portofolio</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
            Empat merek yang kami pegang dan salurkan
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Masing-masing melayani kebutuhan berbeda — dari operasional kantor hingga koleksi fancy
            untuk pelajar. Semua dapat dipesan dalam satu perjanjian distribusi, satu pengiriman, dan
            satu tagihan.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </section>

      

      <CtaPanel />
    </>
  );
}
