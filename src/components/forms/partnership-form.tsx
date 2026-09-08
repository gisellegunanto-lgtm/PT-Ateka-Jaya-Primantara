"use client";

import { useState } from "react";
import { WaIcon } from "@/components/wa-button";
import { waLink, waMessages } from "@/lib/whatsapp";

const field =
  "w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-brand";
const label = "mb-1.5 block text-sm font-medium text-ink";

const JENIS = ["Toko ATK / retail", "Grosir", "Sekolah / yayasan", "Korporat / kantor", "Reseller / agen daerah", "Lainnya"];

export function PartnershipForm() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot

    const usaha = String(f.get("usaha") ?? "").trim();
    const kontak = String(f.get("kontak") ?? "").trim();
    if (!usaha || !kontak) {
      setError("Nama usaha dan kontak wajib diisi.");
      return;
    }
    setError(null);

    const url = waLink(
      waMessages.partnership({
        usaha,
        jenis: String(f.get("jenis") ?? "-"),
        kota: String(f.get("kota") ?? "-"),
        volume: String(f.get("volume") ?? "-"),
        kontak,
        pesan: String(f.get("pesan") ?? "").trim() || undefined,
      }),
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-brand bg-brand-tint p-6 text-sm text-brand-deep">
        <p className="font-semibold">WhatsApp terbuka di tab baru dengan data Anda.</p>
        <p className="mt-1">
          Tekan kirim di sana untuk menyelesaikan pengajuan. Tim kemitraan kami membalas pada jam kerja.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-3 font-semibold underline"
        >
          Isi lagi
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
          <label className={label} htmlFor="usaha">
            Nama usaha / instansi <span className="text-accent">*</span>
          </label>
          <input id="usaha" name="usaha" required className={field} placeholder="Toko Sinar Pena" />
        </div>
        <div>
          <label className={label} htmlFor="jenis">
            Jenis usaha
          </label>
          <select id="jenis" name="jenis" className={field} defaultValue={JENIS[0]}>
            {JENIS.map((j) => (
              <option key={j}>{j}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="kota">
            Kota
          </label>
          <input id="kota" name="kota" className={field} placeholder="Surabaya" />
        </div>
        <div>
          <label className={label} htmlFor="volume">
            Perkiraan volume / bulan
          </label>
          <input id="volume" name="volume" className={field} placeholder="mis. 20–50 karton" />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="kontak">
            Nomor WhatsApp / kontak <span className="text-accent">*</span>
          </label>
          <input id="kontak" name="kontak" required className={field} placeholder="0812xxxxxxxx" />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="pesan">
            Pesan (opsional)
          </label>
          <textarea id="pesan" name="pesan" rows={3} className={field} placeholder="Merek / kategori yang diminati, kebutuhan khusus, dll." />
        </div>
      </div>

      {error && <p className="text-sm font-medium text-accent">{error}</p>}

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 self-start rounded-[0.6rem] bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition hover:brightness-105"
      >
        <WaIcon />
        Kirim Pengajuan via WhatsApp
      </button>
      <p className="text-xs text-ink-faint">
        Formulir ini membuka WhatsApp dengan data Anda sudah terisi — tidak ada data yang disimpan di server.
        Tim kami menghubungi dalam 1–2 hari kerja.
      </p>
    </form>
  );
}
