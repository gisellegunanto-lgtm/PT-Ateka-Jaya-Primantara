import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            Distributor utama alat tulis kantor &amp; perlengkapan sekolah. Memegang 4 merek.
          </p>
          <p className="mt-4 text-sm text-ink-soft">{site.addressOneLine}</p>
        </div>

        <nav aria-label="Merek">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Merek</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link href={`/merek/${b.slug}`} className="text-ink-soft hover:text-brand-deep">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Katalog">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Katalog</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.slice(0, 7).map((c) => (
              <li key={c.slug}>
                <Link href={`/katalog?kategori=${c.slug}`} className="text-ink-soft hover:text-brand-deep">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/katalog" className="font-semibold text-brand-deep hover:underline">
                Semua kategori →
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Hubungi</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${site.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-deep hover:underline"
              >
                {site.whatsapp.display}
              </a>
            </li>
            <li>
              Shopee:{" "}
              <a
                href={site.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-deep hover:underline"
              >
                Kunjungi toko Shopee
              </a>
            </li>
            {site.email && <li>Email: {site.email}</li>}
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container flex flex-col items-start justify-between gap-2 py-5 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. Melayani mitra grosir &amp; retail di seluruh Indonesia.
          </p>
          <p className="flex gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-ink-soft">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-ink-soft">
              Syarat &amp; Ketentuan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
