import Link from "next/link";
import { ProductMedia } from "@/components/product-media";
import { brandName } from "@/lib/catalog";
import type { Product } from "@/types";

const badgeStyles: Record<string, string> = {
  Baru: "bg-brand text-white",
  Terlaris: "bg-accent text-accent-fg",
  Restock: "bg-surface-3 text-ink-soft",
};

export function ProductCard({ product }: { product: Product }) {
  const variantCount = product.variants.length;
  const carton = product.variants[0]?.perCarton;

  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group flex flex-col rounded-card border border-line bg-surface p-3 transition hover:-translate-y-0.5 hover:shadow-card focus-visible:-translate-y-0.5"
    >
      <div className="relative">
        <ProductMedia
          category={product.category}
          brand={product.brand}
          src={product.image}
          alt={product.name}
          compact
        />
        {product.badge && (
          <span
            className={`absolute left-2 top-2 rounded-pill px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute right-2 top-2 rounded-pill bg-surface/90 px-2 py-0.5 text-[0.6rem] font-semibold text-ink-faint">
            Stok terbatas
          </span>
        )}
      </div>
      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-brand">
        {brandName(product.brand)}
      </p>
      <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-ink group-hover:text-brand-deep">
        {product.name}
      </h3>
      <p className="mt-auto pt-2 font-mono text-[0.68rem] text-ink-faint">
        {variantCount > 1 ? `${variantCount} varian` : "1 varian"}
        {carton ? ` · karton ${carton}` : ""}
      </p>
    </Link>
  );
}
