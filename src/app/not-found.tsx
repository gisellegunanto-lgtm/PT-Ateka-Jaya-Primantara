import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Halaman ini seperti stok yang habis.</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        Tautan yang Anda tuju tidak ditemukan atau sudah dipindahkan. Kembali ke katalog untuk
        menelusuri produk kami.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/katalog"
          className="rounded-[0.6rem] bg-accent px-5 py-3 text-sm font-semibold text-accent-fg"
        >
          Buka E-Katalog
        </Link>
        <Link
          href="/"
          className="rounded-[0.6rem] border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink hover:border-brand"
        >
          Ke Beranda
        </Link>
      </div>
    </section>
  );
}
