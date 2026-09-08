import Link from "next/link";
import { WaButton } from "@/components/wa-button";
import { waMessages } from "@/lib/whatsapp";

export function CtaPanel({
  title = "Siap mengisi rak Anda dengan pasokan yang stabil?",
  intro = "Untuk toko retail, grosir, sekolah, korporat, dan reseller daerah. Dapatkan daftar harga grosir hari ini.",
  message = waMessages.general(),
}: {
  title?: string;
  intro?: string;
  message?: string;
}) {
  return (
    <section className="container my-16 sm:my-24">
      <div className="overflow-hidden rounded-[1.1rem] bg-brand-deep px-6 py-12 text-white sm:px-12 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-white/80">{intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WaButton message={message}>Chat Sales via WhatsApp</WaButton>
            <Link
              href="/kemitraan"
              className="inline-flex items-center justify-center rounded-[0.6rem] border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ajukan Kemitraan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
