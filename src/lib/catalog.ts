import { products } from "@/data/products";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import type { Product } from "@/types";

export { products, brands, categories };

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByBrand(brandSlug: string) {
  return products.filter((p) => p.brand === brandSlug);
}

export function productsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}

export function brandName(slug: string) {
  return brands.find((b) => b.slug === slug)?.name ?? slug;
}

export function categoryName(slug: string) {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

export interface CatalogFilter {
  brands: string[];
  categories: string[];
  q: string;
  inStockOnly: boolean;
  sort: "populer" | "terbaru" | "nama" | "merek";
}

export const emptyFilter: CatalogFilter = {
  brands: [],
  categories: [],
  q: "",
  inStockOnly: false,
  sort: "populer",
};

const badgeWeight: Record<string, number> = { Terlaris: 0, Baru: 1, Restock: 2 };

function matchesText(p: Product, q: string) {
  if (!q) return true;
  const hay = (
    p.name +
    " " +
    p.summary +
    " " +
    p.variants.map((v) => v.sku + " " + v.label).join(" ")
  ).toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => hay.includes(token));
}

export function filterProducts(all: Product[], f: CatalogFilter): Product[] {
  let out = all.filter((p) => {
    if (f.brands.length && !f.brands.includes(p.brand)) return false;
    if (f.categories.length && !f.categories.includes(p.category)) return false;
    if (f.inStockOnly && !p.inStock) return false;
    if (!matchesText(p, f.q)) return false;
    return true;
  });

  out = [...out].sort((a, b) => {
    switch (f.sort) {
      case "nama":
        return a.name.localeCompare(b.name, "id");
      case "merek":
        return brandName(a.brand).localeCompare(brandName(b.brand), "id") || a.name.localeCompare(b.name, "id");
      case "terbaru":
        return (a.badge === "Baru" ? 0 : 1) - (b.badge === "Baru" ? 0 : 1) || a.name.localeCompare(b.name, "id");
      case "populer":
      default:
        return (
          (badgeWeight[a.badge ?? ""] ?? 3) - (badgeWeight[b.badge ?? ""] ?? 3) ||
          Number(b.inStock) - Number(a.inStock) ||
          a.name.localeCompare(b.name, "id")
        );
    }
  });

  return out;
}

/** Count how many products match the filter if a given facet value were toggled on,
 *  ignoring the current selection *within that same facet* (standard faceted-search behaviour). */
export function facetCounts(all: Product[], f: CatalogFilter) {
  const brandCounts: Record<string, number> = {};
  const categoryCounts: Record<string, number> = {};

  for (const b of brands) {
    brandCounts[b.slug] = filterProducts(all, { ...f, brands: [b.slug] }).length;
  }
  for (const c of categories) {
    categoryCounts[c.slug] = filterProducts(all, { ...f, categories: [c.slug] }).length;
  }
  return { brandCounts, categoryCounts };
}

export function relatedProducts(product: Product, limit = 4): Product[] {
  const sameCat = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  const sameBrand = products.filter(
    (p) => p.brand === product.brand && p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCat, ...sameBrand].slice(0, limit);
}
