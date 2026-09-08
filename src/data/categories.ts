import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "mesin-kantor",
    name: "Mesin Kantor",
    short: "Jilid, laminating, hitung uang",
    description:
      "Mesin jilid spiral/kawat, mesin lem panas, laminating pouch & roll, mesin hitung uang, money detector, dan paper shredder untuk operasional kantor dan percetakan.",
  },
  {
    slug: "office-paper-accessories",
    name: "Office & Paper Accessories",
    short: "Aksesori kertas & kantor",
    description:
      "Acco paper fastener, paper clip berwarna, push pins transparan, paku pines, key ring series, tagging gun & tag pin refill — kebutuhan jepit dan tandai dokumen sehari-hari.",
  },
  {
    slug: "cutting-precision",
    name: "Cutting & Precision Tools",
    short: "Alat potong & presisi",
    description:
      "Cutter kecil dan besar, cutting mat 2 sisi (A4–A2), serta penggaris besi 30–100 cm untuk kerja potong yang rapi dan aman.",
  },
  {
    slug: "desktop-service",
    name: "Desktop & Service Tools",
    short: "Perkakas meja & layanan",
    description:
      "Pulpen meja spiral, desk spear penunjuk nota, hand counter manual, dan tape dispenser series (small, big, handle, metal) untuk meja kasir dan layanan.",
  },
  {
    slug: "packaging-sealing",
    name: "Packaging & Sealing",
    short: "Pengemasan & press plastik",
    description:
      "Impulse press sealer series dengan body besi dan plastik, ukuran 20–40 cm, untuk mengemas dan menyegel kemasan plastik.",
  },
  {
    slug: "stamp-inks",
    name: "Stamp & Inks",
    short: "Stempel & bak tinta",
    description: "Stempel otomatis siap tinta (pre-inked) berbagai ukuran bulat, oval, kotak, dan rectangle untuk kantor, sekolah, dan usaha.",
  },
  {
    slug: "document-file",
    name: "Document & File Management",
    short: "Arsip & map",
    description:
      "Document file clear holder, clipfile double mekanik, index divider binder (A5/B5), double file sheet, map kancing A3, sheet protector (A4/Folio), dan expanding file series.",
  },
  {
    slug: "storage-bags",
    name: "Storage & Bags",
    short: "Tas & wadah zip",
    description:
      "Tempat pensil dan pouch motif karakter untuk pelajar — model kulit sintetis 3D timbul, kain 3D, dan mesh transparan.",
  },
  {
    slug: "adhesives-fastening",
    name: "Adhesives & Fastening",
    short: "Perekat & lem",
    description:
      "Glue gun big/small/joer series, glue stick AJP (No. 900, 1000, best quality) dan seri A+Z untuk kebutuhan merekatkan di sekolah, kantor, dan kerajinan.",
  },
  {
    slug: "display-identification",
    name: "Display & Identification",
    short: "Display & ID card",
    description:
      "ID card holder, kantung ID card, name tag & sign holder akrilik, serta rambu informasi untuk kartu identitas, acara, dan display informasi.",
  },
  {
    slug: "kemasan-kado",
    name: "Kemasan & Paper Bag",
    short: "Paper bag & tas kado",
    description:
      "Paper bag kraft polos tali rami, gift bag motif (florals, karakter, tema Lebaran & Natal), dan tas kado plastik frosted untuk toko, hampers, dan acara.",
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
