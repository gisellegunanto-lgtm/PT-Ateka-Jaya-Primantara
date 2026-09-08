import type { Brand } from "@/types";

export const brands: Brand[] = [
  {
    slug: "bright-office",
    name: "Bright Office",
    tagline: "Mesin & perkakas kantor: jilid, laminating, sealing, potong kertas.",
    description:
      "Lini mesin dan perkakas kerja untuk kantor dan percetakan — mesin jilid spiral/kawat, laminating, impulse sealer, mesin hitung uang, paper shredder, guillotine, hingga stapler jilid tebal dan alat pelubang.",
    strengths: ["Mesin Kantor", "Packaging & Sealing", "Cutting & Precision"],
  },
  {
    slug: "a-plus-z",
    name: "A+Z Stationery",
    tagline: "Lini premium: alat tulis, seni & mewarnai, dan manajemen file berkualitas tinggi.",
    description:
      "Untuk mitra yang menuntut hasil rapi dan tampilan rak yang berkelas. Mencakup file management, seri seni & mewarnai, alat presisi, hingga perlengkapan binding dan sealing.",
    strengths: ["Document & File Management", "Display & Identification", "Desktop Tools", "Adhesives"],
    accent: "#7c3aed",
  },
  {
    slug: "ajp-office",
    name: "AJP Office",
    tagline: "Kebutuhan kantor & operasional bisnis yang tahan pakai.",
    description:
      "Produk andalan untuk kegiatan operasional: perekat, alat pelubang dan mata ayam, penggaris besi, hingga perkakas layanan meja. Fokus pada ketahanan dan ketersediaan stok.",
    strengths: ["Office & Paper Accessories", "Document & File Management", "Adhesives & Fastening"],
    accent: "#0e8f43",
  },
  {
    slug: "ajp-mart-fancy",
    name: "AJP Mart Fancy",
    tagline: "Paper bag, gift bag, dan pernak-pernik fancy untuk toko & acara.",
    description:
      "Lini AJP Mart Indonesia yang cepat berputar di rak: paper bag kraft & gift bag motif (florals, karakter, tema Lebaran dan Natal), tas kado plastik frosted, meja lipat karakter, hingga pernak-pernik fancy untuk pelajar.",
    strengths: ["Kemasan & Paper Bag", "Buku Catatan", "Tempat Pensil Karakter"],
    accent: "#db2777",
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
