import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductMedia } from "@/components/product-media";
import { ProductTabs } from "@/components/product-tabs";
import { ProductCard } from "@/components/product-card";
import { WaButton } from "@/components/wa-button";
import { AddToInquiryButton } from "@/components/inquiry/add-to-inquiry-button";
import { products } from "@/data/products";
import { getProduct, relatedProducts, brandName, categoryName } from "@/lib/catalog";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${brandName(p.brand)}`,
    description: p.summary,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const url = `${site.url}/produk/${product.slug}`;
  const primarySku = product.variants[0]?.sku ?? product.slug;
  const related = relatedProducts(product);
  const gallery: string[] = product.images?.length
    ? product.images
    : product.image
      ? [product.image]
      : [];

  return (
    <>
      <section className="border-b border-line">
        <div className="container py-10 sm:py-14">
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-ink-faint">
            <Link href="/" className="hover:text-ink">Beranda</Link><span>/</span>
            <Link href="/katalog" className="hover:text-ink">E-Katalog</Link><span>/</span>
            <Link href={`/katalog?kategori=${product.category}`} className="hover:text-ink">
              {categoryName(product.category)}
            </Link>
            <span>/</span>
            <span className="text-ink-soft">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
            <div>
              <ProductMedia
                category={product.category}
                brand={product.brand}
                src={gallery[0]}
                alt={product.name}
                priority
              />
              <div className="mt-3 grid grid-cols-4 gap-2">
                {(gallery.length > 1 ? gallery : []).slice(0, 4).map((img, i) => {
                  return (
                    <ProductMedia
                      key={i}
                      category={product.category}
                      brand={product.brand}
                      src={img}
                      alt={`${product.name} — foto ${i + 1}`}
                      compact
                    />
                  );
                })}
              </div>
              {gallery.length === 0 && (
                <p className="mt-2 text-xs text-ink-faint">
                  Gambar placeholder — tambahkan foto produk (latar putih, 1:1) lewat field{" "}
                  <code className="font-mono">image</code> di <code className="font-mono">src/data/products.ts</code>.
                </p>
              )}
            </div>

            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-brand">
                {brandName(product.brand)} · {categoryName(product.category)}
              </p>
              <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">{product.name}</h1>
              <p className="mt-2 font-mono text-xs text-ink-faint">
                Kode: {product.variants.map((v) => v.sku).join(" · ")}
              </p>
              <p className="mt-3 max-w-prose text-ink-soft">{product.summary}</p>
              <p className="mt-3 max-w-prose text-sm text-ink-soft">{product.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 font-semibold ${
                    product.inStock ? "bg-ok-tint text-ok" : "bg-surface-3 text-ink-faint"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${product.inStock ? "bg-ok" : "bg-ink-faint"}`} />
                  {product.inStock ? "Stok tersedia" : "Stok terbatas — konfirmasi saat pemesanan"}
                </span>
                <span className="rounded-pill border border-line px-2.5 py-1 text-ink-soft">
                  {product.variants.length} varian ukuran
                </span>
              </div>

              <div className="mt-6 rounded-card border border-line bg-surface p-4 sm:p-5">
                <ProductTabs product={product} />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <WaButton message={waMessages.product({ name: product.name, sku: primarySku, url })}>
                  Minta Penawaran via WhatsApp
                </WaButton>
                <AddToInquiryButton product={product} />
              </div>
              <p className="mt-3 max-w-prose text-xs text-ink-faint">
                Harga grosir mengikuti volume &amp; status kemitraan. Minta penawaran untuk angka pasti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container py-14">
          <h2 className="text-xl font-bold">Produk terkait</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
