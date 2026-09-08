import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { ProductCard } from "@/components/product-card";
import { WaButton } from "@/components/wa-button";
import { CtaPanel } from "@/components/cta-panel";
import { CategoryIcon } from "@/components/category-icon";
import { brands, brandBySlug } from "@/data/brands";
import { categories } from "@/data/categories";
import { productsByBrand } from "@/lib/catalog";
import { waMessages } from "@/lib/whatsapp";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const brand = brandBySlug(params.slug);
  if (!brand) return {};
  return {
    title: brand.badge ? `${brand.name} — ${brand.badge}` : brand.name,
    description: brand.description,
  };
}

export default function BrandDetailPage({ params }: { params: { slug: string } }) {
  const brand = brandBySlug(params.slug);
  if (!brand) notFound();

  const items = productsByBrand(brand.slug);
  const catSlugs = Array.from(new Set(items.map((p) => p.category)));

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container py-14 sm:py-20">
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-ink-faint">
            <Link href="/" className="hover:text-ink">Beranda</Link><span>/</span>
            <Link href="/merek" className="hover:text-ink">Merek</Link><span>/</span>
            <span className="text-ink-soft">{brand.name}</span>
          </nav>
          <div className="flex items-start gap-4">
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-surface-2"
              style={{ color: brand.accent ?? "var(--brand)" }}
            >
              <LogoMark className="h-8 w-8" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-extrabold sm:text-4xl">{brand.name}</h1>
                {brand.badge && (
                  <span className="rounded-pill bg-brand-tint px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wide text-brand-deep">
                    {brand.badge}
                  </span>
                )}
              </div>
              <p className="mt-3 max-w-2xl text-ink-soft">{brand.description}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {brand.strengths.map((s) => (
              <span key={s} className="rounded-pill border border-line bg-ground px-3 py-1.5 text-sm text-ink-soft">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <WaButton message={waMessages.brand(brand.name)}>Pesan produk {brand.name}</WaButton>
            <Link
              href={`/katalog?brand=${brand.slug}`}
              className="inline-flex items-center justify-center rounded-[0.6rem] border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand-deep"
            >
              Buka di E-Katalog
            </Link>
            {brand.reference && (
              <a
                href={brand.reference}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[0.6rem] px-3 py-3 text-sm font-medium text-ink-faint hover:text-ink"
              >
                Referensi global ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {catSlugs.length > 0 && (
        <section className="border-b border-line">
          <div className="container flex flex-wrap gap-2 py-6">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">Kategori tersedia:</span>
            {catSlugs.map((slug) => {
              const c = categories.find((x) => x.slug === slug);
              return c ? (
                <Link
                  key={slug}
                  href={`/katalog?brand=${brand.slug}&kategori=${slug}`}
                  className="inline-flex items-center gap-1.5 rounded-pill border border-line px-2.5 py-1 text-xs text-ink-soft hover:border-brand hover:text-brand-deep"
                >
                  <CategoryIcon slug={slug} className="h-3.5 w-3.5" />
                  {c.name}
                </Link>
              ) : null;
            })}
          </div>
        </section>
      )}

      <section className="container py-14">
        <h2 className="text-xl font-bold">Produk {brand.name}</h2>
        <p className="mt-1 text-sm text-ink-soft">{items.length} item contoh — katalog penuh dikirim setelah verifikasi mitra.</p>
        {items.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <p className="mt-6 rounded-card border border-dashed border-line-strong bg-surface-2 p-8 text-center text-sm text-ink-soft">
            Daftar produk untuk merek ini sedang dilengkapi. Hubungi kami untuk katalog terbaru.
          </p>
        )}
      </section>

      <CtaPanel message={waMessages.brand(brand.name)} />
    </>
  );
}
