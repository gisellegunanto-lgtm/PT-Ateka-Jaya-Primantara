"use client";

import { useEffect, useState } from "react";
import { useInquiry } from "@/components/inquiry/inquiry-context";
import { WaIcon } from "@/components/wa-button";
import { waLink, waMessages } from "@/lib/whatsapp";

export function InquiryBar() {
  const { items, count, remove, setQty, clear } = useInquiry();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (count === 0) setOpen(false);
  }, [count]);

  const waHref = waLink(
    waMessages.inquiryList(items.map((i) => ({ name: `${i.name} (${i.variantLabel})`, sku: i.sku, qty: i.qty }))),
  );

  return (
    <>
      {/* floating stack */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
        {count > 0 && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink shadow-card transition hover:border-brand"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M6 6l1.5 12.5A2 2 0 0 0 9.5 20h5a2 2 0 0 0 2-1.5L18 6" />
            </svg>
            Daftar Inquiry
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-xs font-bold text-white">
              {count}
            </span>
          </button>
        )}
        <a
          href={waLink(waMessages.general())}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-fg shadow-card transition hover:brightness-105"
        >
          <WaIcon className="h-6 w-6" />
        </a>
      </div>

      {/* panel */}
      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Daftar Inquiry">
          <button
            type="button"
            aria-label="Tutup"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-surface shadow-card">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-lg font-bold">Daftar Inquiry ({count})</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink-soft hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="text-sm text-ink-soft">
                  Belum ada produk. Telusuri E-Katalog dan tekan &ldquo;Tambah ke Daftar Inquiry&rdquo;.
                </p>
              ) : (
                <ul className="flex flex-col gap-3">
                  {items.map((i) => (
                    <li key={i.sku} className="rounded-card border border-line p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold">{i.name}</p>
                          <p className="font-mono text-xs text-ink-faint">
                            {i.variantLabel} · {i.sku}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(i.sku)}
                          aria-label={`Hapus ${i.name}`}
                          className="text-ink-faint hover:text-accent"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                            <path d="M6 6l12 12M18 6 6 18" />
                          </svg>
                        </button>
                      </div>
                      <label className="mt-2 flex items-center gap-2 text-xs text-ink-soft">
                        Perkiraan qty
                        <input
                          type="number"
                          min={1}
                          value={i.qty}
                          onChange={(e) => setQty(i.sku, Number(e.target.value))}
                          className="w-20 rounded-md border border-line bg-surface px-2 py-1 text-sm text-ink"
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-line px-5 py-4">
                <p className="mb-3 text-xs text-ink-faint">
                  Tombol di bawah membuka WhatsApp dengan daftar produk sudah terisi. Lengkapi nama usaha
                  &amp; kota sebelum mengirim.
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[0.6rem] bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition hover:brightness-105"
                >
                  <WaIcon />
                  Kirim {count} produk via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={clear}
                  className="mt-2 w-full rounded-[0.6rem] px-5 py-2 text-xs font-medium text-ink-faint hover:text-accent"
                >
                  Kosongkan daftar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
