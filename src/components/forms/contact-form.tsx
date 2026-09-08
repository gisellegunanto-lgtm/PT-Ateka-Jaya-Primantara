"use client";

import { useState } from "react";
import { WaIcon } from "@/components/wa-button";
import { waLink, waMessages } from "@/lib/whatsapp";

const field =
  "w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-brand";
const label = "mb-1.5 block text-sm font-medium text-ink";

const KEPERLUAN = ["Penawaran harga grosir", "Jadi reseller / agen", "Pengadaan sekolah / korporat", "Ketersediaan stok / produk", "Lainnya"];

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return;

    const nama = String(f.get("nama") ?? "").trim();
    const pesan = String(f.get("pesan") ?? "").trim();
    if (!nama || !pesan) {
      setError("Nama dan pesan wajib diisi.");
      return;
    }
    setError(null);
    window.open(
      waLink(
        waMessages.contact({
          nama,
          usaha: String(f.get("usaha") ?? "-"),
          keperluan: String(f.get("keperluan") ?? "-"),
          pesan,
        }),
      ),
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-brand bg-brand-tint p-6 text-sm text-brand-deep">
        <p className="font-semibold">WhatsApp terbuka dengan pesan Anda.</p>
        <p className="mt-1">Tekan kirim untuk menyelesaikan. Kami balas pada jam kerja.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-3 font-semibold underline">
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <p className="hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="c-nama">
            Nama <span className="text-accent">*</span>
          </label>
          <input id="c-nama" name="nama" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="c-usaha">
            Perusahaan / instansi
          </label>
          <input id="c-usaha" name="usaha" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="c-keperluan">
            Keperluan
          </label>
          <select id="c-keperluan" name="keperluan" className={field} defaultValue={KEPERLUAN[0]}>
            {KEPERLUAN.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="c-pesan">
            Pesan <span className="text-accent">*</span>
          </label>
          <textarea id="c-pesan" name="pesan" rows={4} required className={field} />
        </div>
      </div>
      {error && <p className="text-sm font-medium text-accent">{error}</p>}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 self-start rounded-[0.6rem] bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition hover:brightness-105"
      >
        <WaIcon />
        Kirim via WhatsApp
      </button>
    </form>
  );
}
