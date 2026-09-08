"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { WaIcon } from "@/components/wa-button";
import { CategoryIcon } from "@/components/category-icon";
import { categories } from "@/data/categories";
import { site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";

const nav = [
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/merek", label: "Merek" },
  { href: "/katalog", label: "E-Katalog", hasMenu: true },
  { href: "/kemitraan", label: "Kemitraan" },
  { href: "/kontak", label: "Kontak" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setCatOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} — Beranda`} className="shrink-0">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.hasMenu ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition hover:bg-surface-2 ${
                    isActive(item.href) ? "text-brand-deep" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-card border border-line bg-surface p-3 shadow-card">
                    <div className="grid grid-cols-2 gap-1">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/katalog?kategori=${c.slug}`}
                          className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-ink-soft transition hover:bg-surface-2 hover:text-ink"
                        >
                          <span className="text-brand">
                            <CategoryIcon slug={c.slug} className="h-4 w-4" />
                          </span>
                          {c.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t border-line px-2.5 pt-2 text-xs text-ink-faint">
                      <span>{categories.length} kategori · lintas 4 merek</span>
                      <Link href="/katalog" className="font-semibold text-brand-deep hover:underline">
                        Lihat semua produk →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition hover:bg-surface-2 ${
                  isActive(item.href) ? "text-brand-deep" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(waMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-[0.6rem] bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition hover:brightness-105 sm:inline-flex"
          >
            <WaIcon />
            <span className="hidden md:inline">Pesan Grosir</span>
            <span className="md:hidden">WhatsApp</span>
          </a>
          <ThemeToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div className="container border-t border-line py-3">
            <nav className="flex flex-col">
              <Link href="/" className="rounded-md px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-2">
                Beranda
              </Link>
              {nav.map((item) =>
                item.hasMenu ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setCatOpen((v) => !v)}
                      aria-expanded={catOpen}
                      className="flex w-full items-center justify-between rounded-md px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-2"
                    >
                      {item.label}
                      <svg viewBox="0 0 24 24" className={`h-4 w-4 transition ${catOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {catOpen && (
                      <div className="mb-1 ml-2 flex flex-col border-l border-line pl-3">
                        <Link href="/katalog" className="px-2 py-2 text-sm font-semibold text-brand-deep">
                          Semua produk
                        </Link>
                        {categories.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/katalog?kategori=${c.slug}`}
                            className="px-2 py-2 text-sm text-ink-soft hover:text-ink"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-2"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={waLink(waMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-[0.6rem] bg-accent px-4 py-3 text-sm font-semibold text-accent-fg"
              >
                <WaIcon />
                Pesan Grosir via WhatsApp
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
