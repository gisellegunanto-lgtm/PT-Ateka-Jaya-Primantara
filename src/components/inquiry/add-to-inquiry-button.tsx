"use client";

import { useInquiry } from "@/components/inquiry/inquiry-context";
import type { Product } from "@/types";

export function AddToInquiryButton({
  product,
  variantIndex = 0,
  className = "",
  size = "md",
}: {
  product: Product;
  variantIndex?: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const { has, add } = useInquiry();
  const variant = product.variants[variantIndex] ?? product.variants[0];
  const active = has(variant.sku);

  const pad = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm";

  return (
    <button
      type="button"
      onClick={() =>
        add({
          slug: product.slug,
          name: product.name,
          sku: variant.sku,
          variantLabel: variant.label,
        })
      }
      aria-pressed={active}
      className={`inline-flex items-center justify-center gap-1.5 rounded-[0.6rem] border font-semibold transition ${pad} ${
        active
          ? "border-brand bg-brand-tint text-brand-deep"
          : "border-line-strong bg-surface text-ink hover:border-brand hover:text-brand-deep"
      } ${className}`}
    >
      {active ? (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
          Di daftar inquiry
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Tambah ke Daftar Inquiry
        </>
      )}
    </button>
  );
}
