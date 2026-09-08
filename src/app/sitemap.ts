import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/tentang-kami",
    "/merek",
    "/katalog",
    "/kemitraan",
    "/kontak",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const brandRoutes = brands.map((b) => ({
    url: `${base}/merek/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/produk/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...brandRoutes, ...productRoutes];
}
