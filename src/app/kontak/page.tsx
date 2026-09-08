import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { WaButton } from "@/components/wa-button";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.name} di ${site.address.city}. WhatsApp ${site.whatsapp.display}. ${site.hours}.`,
};

export default function KontakPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  return (
    <>
      <LocalBusinessJsonLd />
      <section className="border-b border-line bg-surface">
        <div className="container py-14 sm:py-20">
          <p className="eyebrow">Kontak</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Hubungi kami</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Untuk penawaran grosir, kemitraan, atau pertanyaan produk. Kami membalas paling cepat
            melalui WhatsApp pada jam kerja ({site.hours}).
          </p>
        </div>
      </section>

      <section className="container grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-surface p-5">
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">WhatsApp &amp; Shopee</h2>
              <p className="mt-3 text-sm text-ink-soft">
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${site.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-deep hover:underline"
                >
                  {site.whatsapp.display}
                </a>
                <br />
                Shopee:{" "}
                <a
                  href={site.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-deep hover:underline"
                >
                  Toko Shopee kami
                </a>
                {site.email && (
                  <>
                    <br />
                    Email: {site.email}
                  </>
                )}
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface p-5">
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Jam operasional</h2>
              <p className="mt-3 text-sm text-ink-soft">{site.hours}</p>
              <p className="mt-1 text-xs text-ink-faint">Di luar jam kerja, pesan tetap kami terima dan dibalas pada hari kerja berikutnya.</p>
            </div>
            <div className="rounded-card border border-line bg-surface p-5 sm:col-span-2">
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Kantor &amp; Gudang</h2>
              <p className="mt-3 text-sm text-ink-soft">{site.addressOneLine}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-brand-deep hover:underline"
              >
                Buka di Google Maps ↗
              </a>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-card border border-line">
            <iframe
              title={`Peta lokasi ${site.name}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </div>

          <div className="mt-4">
            <WaButton message={waMessages.general()}>Chat sekarang via WhatsApp</WaButton>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Kirim pesan</h2>
          <p className="mt-2 max-w-prose text-sm text-ink-soft">
            Isi formulir dan kami lanjutkan percakapan lewat WhatsApp — tidak ada data yang disimpan di
            server.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
