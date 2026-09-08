import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogClient } from "@/components/catalog/catalog-client";
import { CtaPanel } from "@/components/cta-panel";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "E-Katalog",
  description:
    "Katalog produk lintas merek: alat tulis kantor, perlengkapan sekolah, alat potong, seni & mewarnai, manajemen dokumen, dan lainnya. Filter berdasarkan merek dan kategori.",
};

export default function KatalogPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container py-12 sm:py-16">
          <p className="eyebrow">E-Katalog</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Katalog produk lintas merek</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            {products.length}+ contoh produk dari {categories.length} kategori dan 4 merek. Harga grosir
            dan katalog lengkap dikirim setelah verifikasi usaha — gunakan tombol WhatsApp atau Daftar
            Inquiry pada tiap produk.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <Suspense
          fallback={
            <div className="py-20 text-center font-mono text-sm text-ink-faint">Memuat katalog…</div>
          }
        >
          <CatalogClient />
        </Suspense>
      </section>

      <CtaPanel />
    </>
  );
}
