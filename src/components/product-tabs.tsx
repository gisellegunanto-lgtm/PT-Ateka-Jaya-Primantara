"use client";

import { useId, useState } from "react";
import type { Product } from "@/types";

const TABS = ["Spesifikasi", "Isi Karton", "Variasi Ukuran"] as const;

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const base = useId();

  return (
    <div>
      <div role="tablist" aria-label="Detail produk" className="flex flex-wrap gap-1 border-b border-line">
        {TABS.map((t, i) => (
          <button
            key={t}
            role="tab"
            id={`${base}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setActive((active + 1) % TABS.length);
              if (e.key === "ArrowLeft") setActive((active - 1 + TABS.length) % TABS.length);
            }}
            className={`-mb-px border-b-2 px-3 py-2.5 font-mono text-xs uppercase tracking-wide transition ${
              active === i
                ? "border-brand font-semibold text-brand-deep"
                : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Spesifikasi */}
      <div
        role="tabpanel"
        id={`${base}-panel-0`}
        aria-labelledby={`${base}-tab-0`}
        hidden={active !== 0}
        className="pt-4"
      >
        <table className="w-full text-sm">
          <tbody>
            {product.specs.map(([k, v]) => (
              <tr key={k} className="border-b border-line last:border-0">
                <th scope="row" className="w-2/5 py-2 pr-4 text-left font-medium text-ink-soft">
                  {k}
                </th>
                <td className="py-2 text-ink">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Isi Karton */}
      <div
        role="tabpanel"
        id={`${base}-panel-1`}
        aria-labelledby={`${base}-tab-1`}
        hidden={active !== 1}
        className="overflow-x-auto pt-4"
      >
        <table className="w-full min-w-[34rem] text-sm">
          <thead>
            <tr className="border-b border-line text-left font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">
              <th className="py-2 pr-3">Varian</th>
              <th className="py-2 pr-3">Kemasan</th>
              <th className="py-2 pr-3">Isi / karton</th>
              <th className="py-2 pr-3">Dimensi karton</th>
              <th className="py-2 pr-3">Berat</th>
              <th className="py-2">MOQ</th>
            </tr>
          </thead>
          <tbody>
            {product.variants.map((v) => (
              <tr key={v.sku} className="border-b border-line last:border-0 align-top">
                <td className="py-2 pr-3 font-medium text-ink">{v.label}</td>
                <td className="py-2 pr-3 text-ink-soft">{v.pack ?? "—"}</td>
                <td className="py-2 pr-3 text-ink-soft">{v.perCarton ?? "—"}</td>
                <td className="py-2 pr-3 text-ink-soft">{v.cartonDim ?? "—"}</td>
                <td className="py-2 pr-3 text-ink-soft">{v.weight ?? "—"}</td>
                <td className="py-2 text-ink-soft">{v.moq ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Variasi Ukuran */}
      <div
        role="tabpanel"
        id={`${base}-panel-2`}
        aria-labelledby={`${base}-tab-2`}
        hidden={active !== 2}
        className="pt-4"
      >
        <ul className="flex flex-col gap-2">
          {product.variants.map((v) => (
            <li
              key={v.sku}
              className="flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2.5 text-sm"
            >
              <span className="font-medium text-ink">{v.label}</span>
              <span className="font-mono text-xs text-ink-faint">{v.sku}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
