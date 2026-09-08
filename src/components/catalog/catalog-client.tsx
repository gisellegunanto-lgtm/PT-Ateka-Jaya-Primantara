"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import {
  type CatalogFilter,
  emptyFilter,
  facetCounts,
  filterProducts,
} from "@/lib/catalog";

const SORTS: { value: CatalogFilter["sort"]; label: string }[] = [
  { value: "populer", label: "Terpopuler" },
  { value: "terbaru", label: "Terbaru" },
  { value: "nama", label: "Nama A–Z" },
  { value: "merek", label: "Merek" },
];

function parseParams(sp: URLSearchParams): CatalogFilter {
  return {
    brands: (sp.get("brand") ?? "").split(",").filter(Boolean),
    categories: (sp.get("kategori") ?? "").split(",").filter(Boolean),
    q: sp.get("q") ?? "",
    inStockOnly: sp.get("stok") === "1",
    sort: (["populer", "terbaru", "nama", "merek"].includes(sp.get("urut") ?? "")
      ? (sp.get("urut") as CatalogFilter["sort"])
      : "populer"),
  };
}

function toParams(f: CatalogFilter): string {
  const sp = new URLSearchParams();
  if (f.brands.length) sp.set("brand", f.brands.join(","));
  if (f.categories.length) sp.set("kategori", f.categories.join(","));
  if (f.q.trim()) sp.set("q", f.q.trim());
  if (f.inStockOnly) sp.set("stok", "1");
  if (f.sort !== "populer") sp.set("urut", f.sort);
  const s = sp.toString();
  return s ? `?${s}` : "";
}

export function CatalogClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState<CatalogFilter>(() =>
    parseParams(new URLSearchParams(searchParams.toString())),
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // keep state in sync when the URL changes externally (e.g. mega-menu link)
  useEffect(() => {
    setFilter(parseParams(new URLSearchParams(searchParams.toString())));
  }, [searchParams]);

  const update = useCallback(
    (patch: Partial<CatalogFilter>) => {
      setFilter((prev) => {
        const next = { ...prev, ...patch };
        router.replace(`${pathname}${toParams(next)}`, { scroll: false });
        return next;
      });
    },
    [pathname, router],
  );

  const toggleIn = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const results = useMemo(() => filterProducts(products, filter), [filter]);
  const counts = useMemo(() => facetCounts(products, filter), [filter]);

  const activeChips = [
    ...filter.brands.map((b) => ({
      label: brands.find((x) => x.slug === b)?.name ?? b,
      clear: () => update({ brands: filter.brands.filter((x) => x !== b) }),
    })),
    ...filter.categories.map((c) => ({
      label: categories.find((x) => x.slug === c)?.name ?? c,
      clear: () => update({ categories: filter.categories.filter((x) => x !== c) }),
    })),
    ...(filter.inStockOnly
      ? [{ label: "Stok tersedia", clear: () => update({ inStockOnly: false }) }]
      : []),
    ...(filter.q ? [{ label: `“${filter.q}”`, clear: () => update({ q: "" }) }] : []),
  ];

  const hasFilters = activeChips.length > 0;

  const Filters = (
    <div className="flex flex-col gap-6 text-sm">
      <div>
        <label htmlFor="cat-search" className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-faint">
          Cari produk
        </label>
        <input
          id="cat-search"
          type="search"
          value={filter.q}
          onChange={(e) => update({ q: e.target.value })}
          placeholder="Nama atau kode SKU…"
          className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink-faint"
        />
      </div>

      <fieldset>
        <legend className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-faint">Merek</legend>
        <div className="flex flex-col gap-1">
          {brands.map((b) => (
            <label key={b.slug} className="flex cursor-pointer items-center gap-2 py-0.5 text-ink-soft">
              <input
                type="checkbox"
                checked={filter.brands.includes(b.slug)}
                onChange={() => update({ brands: toggleIn(filter.brands, b.slug) })}
                className="h-4 w-4 accent-[var(--brand)]"
              />
              <span className="flex-1">{b.name}</span>
              <span className="font-mono text-xs text-ink-faint">{counts.brandCounts[b.slug]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-faint">Kategori</legend>
        <div className="flex flex-col gap-1">
          {categories.map((c) => (
            <label key={c.slug} className="flex cursor-pointer items-center gap-2 py-0.5 text-ink-soft">
              <input
                type="checkbox"
                checked={filter.categories.includes(c.slug)}
                onChange={() => update({ categories: toggleIn(filter.categories, c.slug) })}
                className="h-4 w-4 accent-[var(--brand)]"
              />
              <span className="flex-1">{c.name}</span>
              <span className="font-mono text-xs text-ink-faint">{counts.categoryCounts[c.slug]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-center gap-2 text-ink-soft">
        <input
          type="checkbox"
          checked={filter.inStockOnly}
          onChange={(e) => update({ inStockOnly: e.target.checked })}
          className="h-4 w-4 accent-[var(--brand)]"
        />
        Hanya tampilkan stok tersedia
      </label>

      {hasFilters && (
        <button
          type="button"
          onClick={() => {
            setFilter(emptyFilter);
            router.replace(pathname, { scroll: false });
          }}
          className="self-start text-sm font-semibold text-brand-deep hover:underline"
        >
          Reset semua filter
        </button>
      )}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
      {/* desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-card border border-line bg-surface p-5">{Filters}</div>
      </aside>

      <div>
        {/* toolbar */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm font-medium lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M4 6h16M7 12h10M10 18h4" />
            </svg>
            Filter
            {hasFilters && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs font-bold text-white">
                {activeChips.length}
              </span>
            )}
          </button>

          <p className="font-mono text-xs text-ink-faint">
            {results.length} produk
          </p>

          <label className="ml-auto flex items-center gap-2 text-sm text-ink-soft">
            Urut
            <select
              value={filter.sort}
              onChange={(e) => update({ sort: e.target.value as CatalogFilter["sort"] })}
              className="rounded-lg border border-line bg-surface px-2 py-1.5 text-sm text-ink"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {mobileFiltersOpen && (
          <div className="mb-5 rounded-card border border-line bg-surface p-5 lg:hidden">{Filters}</div>
        )}

        {activeChips.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {activeChips.map((chip, i) => (
              <button
                key={i}
                type="button"
                onClick={chip.clear}
                className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-brand-tint px-3 py-1 font-mono text-xs text-brand-deep"
              >
                {chip.label}
                <span aria-hidden="true">✕</span>
              </button>
            ))}
          </div>
        )}

        {results.length === 0 ? (
          <div className="rounded-card border border-dashed border-line-strong bg-surface-2 p-10 text-center">
            <p className="font-semibold text-ink">Belum ada produk untuk kombinasi ini.</p>
            <p className="mx-auto mt-1 max-w-sm text-sm text-ink-soft">
              Reset filter, atau hubungi tim kami untuk pengadaan khusus dan item di luar katalog.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter(emptyFilter);
                router.replace(pathname, { scroll: false });
              }}
              className="mt-4 rounded-[0.6rem] border border-line-strong bg-surface px-4 py-2 text-sm font-semibold hover:border-brand"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
