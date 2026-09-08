import Link from "next/link";
import { LogoMark } from "@/components/logo";
import type { Brand } from "@/types";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/merek/${brand.slug}`}
      className="group flex flex-col rounded-card border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-card"
    >
      <div className="flex items-center justify-between">
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
          style={{
            color: brand.accent ?? "var(--brand)",
            background: "var(--surface-2)",
          }}
        >
          <LogoMark className="h-6 w-6" />
        </span>
        {brand.badge && (
          <span className="rounded-pill bg-brand-tint px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-brand-deep">
            {brand.badge}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink group-hover:text-brand-deep">{brand.name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{brand.tagline}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep">
        Lihat produk
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
