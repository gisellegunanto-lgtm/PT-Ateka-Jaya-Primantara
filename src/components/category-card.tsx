import Link from "next/link";
import { CategoryIcon } from "@/components/category-icon";
import type { Category } from "@/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/katalog?kategori=${category.slug}`}
      className="group flex items-start gap-3 rounded-card border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-card"
    >
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-deep">
        <CategoryIcon slug={category.slug} className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink group-hover:text-brand-deep">
          {category.name}
        </span>
        <span className="mt-0.5 block text-xs text-ink-soft">{category.short}</span>
      </span>
    </Link>
  );
}
