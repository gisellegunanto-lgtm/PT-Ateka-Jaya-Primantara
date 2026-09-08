import Image from "next/image";
import { CategoryIcon } from "@/components/category-icon";
import { brandName } from "@/lib/catalog";

/**
 * Product visual. If `src` is given (a path to a file in /public, e.g.
 * "/produk/cutter.jpg") it renders that photo; otherwise it falls back to a
 * generated placeholder (category icon + brand name).
 */
export function ProductMedia({
  category,
  brand,
  src,
  alt,
  className = "",
  compact = false,
  priority = false,
}: {
  category: string;
  brand: string;
  src?: string;
  alt?: string;
  className?: string;
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-[0.6rem] border border-line ${src ? "bg-white" : "bg-surface-2"} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes={
            compact
              ? "(min-width:1280px) 20vw, (min-width:640px) 33vw, 50vw"
              : "(min-width:1024px) 340px, 90vw"
          }
          className="object-contain p-2"
          priority={priority}
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative flex flex-col items-center gap-2 text-brand">
            <CategoryIcon slug={category} className={compact ? "h-8 w-8" : "h-12 w-12"} />
            {!compact && (
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-faint">
                {brandName(brand)}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
