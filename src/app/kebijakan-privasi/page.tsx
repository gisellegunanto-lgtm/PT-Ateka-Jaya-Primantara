import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi ${site.name}.`,
};

export default function PrivasiPage() {
  return (
    <section className="container max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-extrabold">Kebijakan Privasi</h1>
      <p className="mt-2 text-sm text-ink-faint">
        Draf awal — tinjau bersama penasihat hukum Anda sebelum publikasi.
      </p>
      <div className="prose-block mt-8 text-ink-soft">
        <p>
          {site.name} menghormati privasi setiap pengunjung situs ini. Halaman ini menjelaskan data
          apa yang kami kumpulkan dan bagaimana penggunaannya.
        </p>
        <h2 className="mt-8 text-lg font-bold text-ink">Data yang dikumpulkan</h2>
        <p>
          Situs ini tidak memiliki formulir yang menyimpan data ke server kami. Formulir kemitraan dan
          kontak berfungsi dengan membuka aplikasi WhatsApp Anda dan mengisi pesan secara otomatis;
          data baru terkirim ketika Anda menekan kirim di WhatsApp. Percakapan tersebut tunduk pada
          kebijakan privasi WhatsApp.
        </p>
        <h2 className="mt-8 text-lg font-bold text-ink">Analitik &amp; cookie</h2>
        <p>
          Bila layanan analitik web dipasang di kemudian hari (mis. Google Analytics), data kunjungan
          agregat dapat dikumpulkan untuk memahami penggunaan situs. Preferensi tema disimpan secara
          lokal di peramban Anda (localStorage) dan tidak dikirim ke mana pun.
        </p>
        <h2 className="mt-8 text-lg font-bold text-ink">Kontak</h2>
        <p>
          Pertanyaan mengenai kebijakan ini dapat disampaikan melalui WhatsApp {site.whatsapp.display}{" "}
        </p>
      </div>
    </section>
  );
}
