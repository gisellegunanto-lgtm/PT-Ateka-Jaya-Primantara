export type BrandSlug =
  | "bright-office"
  | "a-plus-z"
  | "ajp-office"
  | "ajp-mart-fancy";

export interface Brand {
  slug: BrandSlug;
  name: string;
  /** one-line label used on cards */
  tagline: string;
  /** 1–2 sentence positioning used on the brand page */
  description: string;
  /** headline category strengths for this brand */
  strengths: string[];
  /** optional subtle brand-accent hex, used lightly on the brand's own pages */
  accent?: string;
  badge?: string;
  reference?: string;
}

export interface Category {
  slug: string;
  name: string;
  /** short label for cards */
  short: string;
  /** SEO / landing description */
  description: string;
}

export interface Variant {
  sku: string;
  label: string;
  pack?: string;
  perCarton?: string;
  cartonDim?: string;
  weight?: string;
  moq?: string;
}

export type Badge = "Baru" | "Terlaris" | "Restock";

export interface Product {
  slug: string;
  name: string;
  brand: BrandSlug;
  category: string;
  badge?: Badge;
  inStock: boolean;
  summary: string;
  description: string;
  specs: Array<[string, string]>;
  variants: Variant[];
  /** main photo, e.g. "/produk/expanding-file-series.jpg" (file lives in /public) */
  image?: string;
  /** optional extra photos for the product detail gallery */
  images?: string[];
}
