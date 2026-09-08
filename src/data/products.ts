import type { Product } from "@/types";

/**
 * KATALOG — hanya produk dengan foto resmi.
 * Produk tanpa foto sudah dihapus (per instruksi 2026-09-08).
 * Harga katalog disimpan sebagai komentar di sebagian entri (tidak ditampilkan di situs).
 */
export const products: Product[] = [
  {
    slug: "bright-office-guillotine-trimmer",
    name: "Bright Office Guillotine Trimmer Manual",
    brand: "bright-office",
    category: "cutting-precision",
    inStock: true,
    image: "/produk/img/bright-office-guillotine-trimmer.png",
    summary:
      "Alat potong kertas model guillotine dengan alas bergrid dan pengaman pisau, ukuran A5 sampai A3.",
    description:
      "Paper trimmer Bright Office untuk memotong kertas, foto, dan karton tipis dengan hasil lurus. Alas cetak skala dan garis sudut, pisau berpegas dengan pengunci.",
    specs: [
      ["Model", "Guillotine manual"],
      ["Alas", "Grid skala + garis sudut"],
    ],
    variants: [
      { sku: "BO-8296", label: "8296 — A5 (203 x 178 mm)", perCarton: "10 unit/karton" }, // Rp 125.000
      { sku: "BO-8294", label: "8294 — A4 (305 x 254 mm)", perCarton: "10 unit/karton" }, // Rp 150.000
      { sku: "BO-8200", label: "8200 — Folio (380 x 260 mm)", perCarton: "6 unit/karton" }, // Rp 180.000
      { sku: "BO-8293", label: "8293 — B4 (380 x 310 mm)", perCarton: "6 unit/karton" }, // Rp 187.500
      { sku: "BO-8292", label: "8292 — A3 (457 x 381 mm)", perCarton: "5 unit/karton" }, // Rp 235.000
    ],
  },
  {
    slug: "bright-office-impulse-sealer-plastik",
    name: "Bright Office Impulse Sealer Body Plastik",
    brand: "bright-office",
    category: "packaging-sealing",
    inStock: true,
    image: "/produk/img/bright-office-impulse-sealer-plastik.png",
    images: ["/produk/img/bright-office-impulse-sealer-plastik.png", "/produk/img/bright-office-impulse-sealer-plastik-2.png", "/produk/img/bright-office-impulse-sealer-plastik-3.png"],
    summary:
      "Impulse sealer body plastik ringan untuk rumahan dan UKM, panjang seal 20–40 cm.",
    description:
      "Hand sealer Bright Office body plastik, elemen pemanas sesaat dan tuas tekan. Tegangan 110–220 V.",
    specs: [
      ["Tipe", "Impulse (panas sesaat)"],
      ["Body", "Plastik"],
      ["Tegangan", "110 – 220 V"],
    ],
    variants: [
      { sku: "BO-8820", label: "8820 — 20 cm, 250 W, elemen 200 x 2 mm", perCarton: "10 unit/karton" }, // Rp 195.000
      { sku: "BO-8830", label: "8830 — 30 cm, 300 W, elemen 300 x 3 mm", perCarton: "10 unit/karton" }, // Rp 252.500
      { sku: "BO-8840", label: "8840 — 40 cm, 350 W, elemen 400 x 3 mm", perCarton: "6 unit/karton" }, // Rp 362.500
    ],
  },
  {
    slug: "bright-office-laminating-pouch",
    name: "Bright Office Mesin Laminating Pouch",
    brand: "bright-office",
    category: "mesin-kantor",
    badge: "Terlaris",
    inStock: true,
    image: "/produk/img/bright-office-laminating-pouch.png",
    summary:
      "Mesin laminating pouch panas/dingin untuk ukuran hingga A3, fungsi hot/cold/backward.",
    description:
      "Laminator pouch Bright Office untuk melapis dokumen, sertifikat, dan kartu. AC 220–240 V, suhu kerja 80–180 °C, kecepatan ± 380–500 mm/menit tergantung tipe.",
    specs: [
      ["Laminasi maks", "A3 / 330 mm"],
      ["Kelistrikan", "AC 220 – 240 V"],
      ["Suhu kerja", "80 – 180 °C"],
      ["Fungsi", "hot / cold / backward"],
    ],
    variants: [
      { sku: "BO-8313", label: "8313 — A3/330 mm, 450 W, 2 roller", perCarton: "6 unit/karton", weight: "1,5 kg" }, // Rp 475.000
      { sku: "BO-330WH", label: "330WH — A3/330 mm, 450 W, meter digital", perCarton: "2 unit/karton", weight: "8 kg" }, // Rp 875.000
      { sku: "BO-FGK-330BWH", label: "FGK 330BWH — A3/330 mm, 620 W, body metal", perCarton: "2 unit/karton", weight: "8,5 kg" }, // Rp 1.150.000
      { sku: "BO-460B", label: "460B — 460 mm, 450 W, meter digital", perCarton: "2 unit/karton", weight: "12 kg" }, // Rp 1.450.000
      { sku: "BO-8318", label: "8318 — A3/330 mm, 620 W, 4 roller, quartz heater", perCarton: "2 unit/karton", weight: "13,8 kg" }, // Rp 2.700.000
    ],
  },
  {
    slug: "az-stampel-series",
    name: "A+Z Stampel Series (Stempel Otomatis)",
    brand: "a-plus-z",
    category: "stamp-inks",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/az-stampel-series.png",
    summary:
      "Stempel siap tinta (pre-inked) dengan gagang ergonomis, tersedia bentuk bulat, oval, kotak, dan persegi panjang dalam puluhan ukuran.",
    description:
      "A+Z Stampel Series menghasilkan cap yang jelas, tidak mudah pudar, dan cepat kering. Bodi hitam kokoh dengan gagang merah yang nyaman digenggam. Ukuran bulat (D), oval (OV), kotak (S), dan rectangle (R). Harga netto.",
    specs: [
      ["Jenis", "Pre-inked / siap tinta"],
      ["Bentuk", "Bulat (D) · Oval (OV) · Kotak (S) · Rectangle (R)"],
      ["Kemasan", "50 – 150 pcs / 500 pcs (tergantung ukuran)"],
    ],
    variants: [
      { sku: "AZ-STP-D17", label: "D 17 mm (bulat)", perCarton: "100 pcs / 500 pcs" }, // Rp 4.500
      { sku: "AZ-STP-D28", label: "D 28 mm (bulat)", perCarton: "100 pcs / 500 pcs" }, // Rp 5.250
      { sku: "AZ-STP-D32", label: "D 32 mm (bulat)", perCarton: "100 pcs / 500 pcs" }, // Rp 6.250
      { sku: "AZ-STP-D40", label: "D 40 mm (bulat)", perCarton: "75 pcs / 500 pcs" }, // Rp 6.500
      { sku: "AZ-STP-D51", label: "D 51 mm (bulat)", perCarton: "50 pcs / 500 pcs" }, // Rp 8.250
      { sku: "AZ-STP-OV2535", label: "OV 25 × 35 mm (oval)", perCarton: "125 pcs / 500 pcs" }, // Rp 6.250
      { sku: "AZ-STP-OV3752", label: "OV 37 × 52 mm (oval)", perCarton: "50 pcs / 500 pcs" }, // Rp 7.000
      { sku: "AZ-STP-S3030", label: "S 30 × 30 mm (kotak)", perCarton: "100 pcs / 500 pcs" }, // Rp 6.500
      { sku: "AZ-STP-S4040", label: "S 40 × 40 mm (kotak)", perCarton: "50 pcs / 500 pcs" }, // Rp 6.750
      { sku: "AZ-STP-R1843", label: "R 18 × 43 mm (rectangle)", perCarton: "100 pcs / 500 pcs" }, // Rp 6.000
      { sku: "AZ-STP-R2255", label: "R 22 × 55 mm (rectangle)", perCarton: "75 pcs / 500 pcs" }, // Rp 7.000
      { sku: "AZ-STP-R2267", label: "R 22 × 67 mm (rectangle)", perCarton: "75 pcs / 500 pcs" }, // Rp 8.000
    ],
  },
  {
    slug: "az-id-card-set-809",
    name: "A+Z ID Card Set 809 (Kulit PU + Tali Lanyard)",
    brand: "a-plus-z",
    category: "display-identification",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/az-id-card-set-809.png",
    images: ["/produk/img/az-id-card-set-809.png", "/produk/img/az-id-card-set-809-2.png"],
    summary:
      "ID card holder kulit sintetis (PU) double side dengan mika transparan, ring besi, dan tali lanyard — siap pakai, 3 pilihan warna.",
    description:
      "Set ID card A+Z 809 dari kulit sintetis PU berkualitas: kuat, elegan, dan nyaman dipakai seharian. Holder 10,5 × 7 cm dengan mika pelindung 8,5 × 5,5 cm dan tali lanyard 45 × 1,5 cm. Cocok untuk kartu identitas karyawan, akses gedung, kartu anggota, dan kartu parkir.",
    specs: [
      ["Material", "Kulit sintetis (PU)"],
      ["Ukuran holder", "10,5 × 7 cm (± 0,2)"],
      ["Tali lanyard", "45 × 1,5 cm"],
      ["Warna", "Hitam · Coklat · Abu-abu"],
    ],
    variants: [
      { sku: "AZ-IDS809-BLK", label: "Hitam", perCarton: "10 pcs/pack · 1.000 pcs/karton" }, // Rp 11.000/set
      { sku: "AZ-IDS809-BRN", label: "Coklat", perCarton: "10 pcs/pack · 1.000 pcs/karton" }, // Rp 11.000/set
      { sku: "AZ-IDS809-GRY", label: "Abu-abu", perCarton: "10 pcs/pack · 1.000 pcs/karton" }, // Rp 11.000/set
    ],
  },
  {
    slug: "az-document-tray",
    name: "A+Z Document Tray Mesh (Rak Dokumen Bertingkat)",
    brand: "a-plus-z",
    category: "document-file",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/az-document-tray.png",
    summary:
      "Rak dokumen jaring metal + rangka baja, model bertingkat 2, 3, atau 4 tier. Desain vertikal hemat ruang meja.",
    description:
      "Document Tray A+Z dari metal mesh dengan rangka steel yang kokoh dan anti karat. Desain terbuka memudahkan pengambilan dokumen, sirkulasi udara baik sehingga dokumen tetap kering. Warna black & silver.",
    specs: [
      ["Material", "Metal Mesh + Steel Frame"],
      ["Pilihan", "2 tier / 3 tier / 4 tier"],
      ["Warna", "Black · Silver"],
      ["Kemasan", "12 pcs / dus"],
    ],
    variants: [
      { sku: "AZ-DT-9207", label: "9207 — 2 tier · 34 × 29,5 × 17,5 cm", perCarton: "12 pcs/dus" }, // Rp 67.000/pcs
      { sku: "AZ-DT-9205", label: "9205 — 3 tier · 34 × 29,5 × 27 cm", perCarton: "12 pcs/dus" }, // Rp 75.000/pcs
      { sku: "AZ-DT-9204", label: "9204 — 4 tier · 34 × 29,5 × 32 cm", perCarton: "12 pcs/dus" }, // Rp 97.500/pcs
    ],
  },
  {
    slug: "az-desk-pen-holder",
    name: "A+Z Desk Pen Holder Mesh (Tempat Pena Meja)",
    brand: "a-plus-z",
    category: "desktop-service",
    inStock: true,
    image: "/produk/img/az-desk-pen-holder.png",
    images: ["/produk/img/az-desk-pen-holder.png", "/produk/img/az-desk-pen-holder-2.png"],
    summary:
      "Tempat alat tulis meja jaring metal, model kotak (Square 9111) dan bulat (Round 9109), warna hitam.",
    description:
      "Desk Pen Holder A+Z dari metal mesh yang kuat dan tidak mudah berkarat, dengan alas solid yang menjaga stabilitas dan melindungi meja dari goresan. Multifungsi untuk pena, gunting, penggaris, dan spidol.",
    specs: [
      ["Material", "Metal Mesh"],
      ["Bentuk", "Square (± 8 × 8 × 9,5 cm) / Round (± 7,5 × 9,5 cm)"],
      ["Warna", "Hitam"],
      ["Kemasan", "12 pcs / 96 pcs"],
    ],
    variants: [
      { sku: "AZ-DPH-9111", label: "Square 9111 — kotak", perCarton: "12 pcs / 96 pcs" }, // Rp 7.500/pcs
      { sku: "AZ-DPH-9109", label: "Round 9109 — bulat", perCarton: "12 pcs / 96 pcs" }, // Rp 7.500/pcs
    ],
  },
  {
    slug: "glue-stick-a-plus-z",
    name: "Glue Stick A+Z Series",
    brand: "a-plus-z",
    category: "adhesives-fastening",
    inStock: true,
    image: "/produk/img/glue-stick-a-plus-z.png",
    images: ["/produk/img/glue-stick-a-plus-z.png", "/produk/img/glue-stick-a-plus-z-2.png"],
    summary: "Lem stik premium A+Z dengan indikator warna aplikasi (biru → bening saat kering).",
    description:
      "Glue stick A+Z dengan formula color-change: berwarna biru saat dioleskan untuk memandu, lalu bening saat kering. Rekat rapi untuk kertas, foto, dan karton ringan.",
    specs: [
      ["Fitur", "Color-change (biru → bening)"],
      ["Kandungan", "Bebas asam, washable"],
      ["Berat", "15 gr / 25 gr"],
    ],
    variants: [
      { sku: "AZ-GS-15", label: "15 gr", pack: "12 pcs/inner", perCarton: "24 inner", cartonDim: "44 × 32 × 30 cm", weight: "± 12 kg", moq: "1 inner" },
      { sku: "AZ-GS-25", label: "25 gr", pack: "12 pcs/inner", perCarton: "18 inner", cartonDim: "46 × 34 × 30 cm", weight: "± 13 kg", moq: "1 inner" },
    ],
  },
  {
    slug: "ajp-sticker-label",
    name: "AJP Sticker Label Series (No. 103)",
    brand: "ajp-office",
    category: "office-paper-accessories",
    inStock: true,
    image: "/produk/img/ajp-sticker-label.png",
    summary:
      "Label stiker self-adhesive No. 103, daya rekat kuat, pilihan polos dan motif.",
    description:
      "Sticker label AJP untuk penandaan dan pengarsipan di rumah, kantor, dan toko. Daya rekat kuat dengan hasil bersih. Tersedia isi 7 atau 10 sheet per pack.",
    specs: [
      ["Tipe", "Self-adhesive No. 103"],
      ["Pilihan", "Polos / motif"],
    ],
    variants: [
      { sku: "AJP-SL-P7", label: "Polos — 7 sheet/pack", perCarton: "700 pack" }, // Rp 2.800/pack
      { sku: "AJP-SL-P10", label: "Polos — 10 sheet/pack", perCarton: "700 pack" }, // Rp 4.000/pack
      { sku: "AJP-SL-M7", label: "Motif — 7 sheet/pack", perCarton: "700 pack" }, // Rp 3.300/pack
    ],
  },
  {
    slug: "ajp-papan-tulis",
    name: "AJP Papan Tulis (Whiteboard, Blackboard & Standing)",
    brand: "ajp-office",
    category: "office-paper-accessories",
    inStock: true,
    image: "/produk/img/ajp-papan-tulis.png",
    summary:
      "Papan tulis bingkai aluminium — whiteboard (non-magnet & magnet 12 mm), blackboard, dan whiteboard standing, ukuran 30x50 s/d 120x240 cm.",
    description:
      "Papan tulis AJP dengan permukaan halus, mudah ditulis dan dibersihkan, bingkai aluminium kokoh. Tersedia whiteboard non-magnet dan magnet tebal, blackboard hitam doff, serta whiteboard dengan standing besi.",
    specs: [
      ["Bingkai", "Aluminium"],
      ["Tipe", "Whiteboard non-magnet / magnet 12 mm / blackboard / standing"],
      ["Ukuran", "30x50 – 120x240 cm"],
    ],
    variants: [
      { sku: "AJP-WB-60x90", label: "Whiteboard non-magnet — 60 x 90 cm", perCarton: "8 pcs" }, // Rp 51.000/pcs
      { sku: "AJP-WB-90x120", label: "Whiteboard non-magnet — 90 x 120 cm", perCarton: "6 pcs" }, // Rp 94.000/pcs
      { sku: "AJP-WB-120x240", label: "Whiteboard non-magnet — 120 x 240 cm", perCarton: "4 pcs" }, // Rp 325.000/pcs
      { sku: "AJP-WBM-90x120", label: "Whiteboard magnet 12 mm — 90 x 120 cm", perCarton: "4 pcs" }, // Rp 450.000/pcs
      { sku: "AJP-BB-60x90", label: "Blackboard — 60 x 90 cm", perCarton: "8 pcs" }, // Rp 57.500/pcs
      { sku: "AJP-WBS-90x120", label: "Whiteboard + standing — 90 x 120 cm", perCarton: "2 pcs (coli)" }, // Rp 1.227.000/pcs
    ],
  },
  {
    slug: "ajp-stopmap-kertas",
    name: "AJP Stopmap Kertas Folio",
    brand: "ajp-office",
    category: "document-file",
    inStock: true,
    image: "/produk/img/ajp-stopmap-kertas.png",
    images: ["/produk/img/ajp-stopmap-kertas.png", "/produk/img/ajp-stopmap-kertas-2.png"],
    summary:
      "Stopmap folio kertas kraft / manila, ramah lingkungan dan ekonomis, 4 pilihan warna.",
    description:
      "Stopmap folio AJP dari kertas kraft/manila berkualitas yang kuat dan dapat didaur ulang. Tersedia tipe standar dan tipe Mr.Bro dengan tekstur halus. Warna biru, ungu, hijau, kuning.",
    specs: [
      ["Ukuran", "Folio (33 x 23,5 cm)"],
      ["Bahan", "Kertas kraft / manila"],
    ],
    variants: [
      { sku: "AJP-SMK-STD", label: "Standar", perCarton: "50 pcs · 1.000 pcs/karton" }, // Rp 485/pcs
      { sku: "AJP-SMK-MRBRO", label: "Mr.Bro (manila halus)", perCarton: "1.000 pcs/karton" }, // Rp 410/pcs
    ],
  },
  {
    slug: "ajpmart-notebook-80lt",
    name: "AJP Mart Notebook 80LT Leather",
    brand: "ajp-mart-fancy",
    category: "office-paper-accessories",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-notebook-80lt.png",
    summary:
      "Buku catatan A5 sampul kulit sintetis (leather) dengan pita pembatas, isi 82 lembar. Pilihan warna cokelat, abu, navy, dan hitam.",
    description:
      "Concise Notebook 80LT dari AJP Mart — sampul soft leather yang elegan dengan jahitan rapi dan pita pembatas halaman. Cocok untuk jurnal, agenda kerja, dan catatan rapat.",
    specs: [
      ["Ukuran", "A5"],
      ["Isi", "82 lembar"],
      ["Sampul", "Kulit sintetis (leather)"],
      ["Warna", "Cokelat · Abu · Navy · Hitam"],
    ],
    variants: [
      { sku: "AJPM-NB-80LT", label: "80LT Leather — A5, 82 lembar", perCarton: "100 pcs/karton" }, // Rp 20.000/pcs
    ],
  },
  {
    slug: "ajpmart-notebook-pastel-elastic",
    name: "AJP Mart Notebook Pastel Elastic (9020 / 9408)",
    brand: "ajp-mart-fancy",
    category: "office-paper-accessories",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-notebook-pastel-elastic.png",
    summary:
      "Buku catatan sampul pastel polos dengan tali karet penutup, kertas 80 gr. Tersedia A5 (9020) dan A6 (9408).",
    description:
      "Notebook pastel AJP Mart dengan sampul warna lembut dan karet elastis penahan. Isi kertas 80 gr yang nyaman ditulis. Cocok untuk pelajar dan catatan harian.",
    specs: [
      ["Gramasi kertas", "80 gr"],
      ["Penutup", "Tali karet elastis"],
      ["Warna", "6 pilihan pastel"],
    ],
    variants: [
      { sku: "AJPM-NB-9020", label: "9020 — A5, 80 lembar", perCarton: "80 pcs/karton" }, // Rp 16.600/pcs
      { sku: "AJPM-NB-9408", label: "9408 — A6, 96 lembar", perCarton: "144 pcs/karton" }, // Rp 11.800/pcs
    ],
  },
  {
    slug: "ajpmart-notebook-note-stripe",
    name: "AJP Mart Notebook Note Stripe (BGA5 2246)",
    brand: "ajp-mart-fancy",
    category: "office-paper-accessories",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-notebook-note-stripe.png",
    summary:
      "Buku catatan kecil A5 sampul motif garis pastel dengan sudut membulat, seri 'note'.",
    description:
      "Notebook 'note' AJP Mart BGA5 2246 dengan sampul motif garis-garis pastel yang segar dan sudut membulat. Ringkas untuk dibawa di tas.",
    specs: [
      ["Ukuran", "A5"],
      ["Sampul", "Motif garis pastel, sudut membulat"],
      ["Warna", "4 pilihan (biru, pink, krem, ungu)"],
    ],
    variants: [
      { sku: "AJPM-NB-BGA5-2246", label: "BGA5 2246 — A5", perCarton: "—" },
    ],
  },
  {
    slug: "ajpmart-giftbag-best-wishes",
    name: "AJP Mart Gift Bag “Best Wishes” (1515-802)",
    brand: "ajp-mart-fancy",
    category: "kemasan-kado",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-giftbag-best-wishes.png",
    summary:
      "Paper gift bag pastel dua-warna dengan hot-stamp emas “Best Wishes” dan handle tali, ukuran 155 x 145 x 65 mm.",
    description:
      "Gift bag kertas AJP Mart seri Best Wishes — kombinasi warna pastel diagonal dengan cetak foil emas. Handle tali (rope). Cocok untuk kado kecil, hampers, dan giveaway acara.",
    specs: [
      ["Kode", "1515-802"],
      ["Ukuran", "155 x 145 x 65 mm"],
      ["Handle", "Tali (rope)"],
      ["Motif", "Assorted pastel + foil emas"],
    ],
    variants: [
      { sku: "AJPM-GB-1515-802", label: "155 x 145 x 65 mm — assorted", perCarton: "1.152 pcs/karton" }, // Rp 4.500/pcs
    ],
  },
  {
    slug: "ajpmart-giftbag-lucky-day",
    name: "AJP Mart Gift Bag “Lucky Day” (1515-801)",
    brand: "ajp-mart-fancy",
    category: "kemasan-kado",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-giftbag-lucky-day.png",
    summary:
      "Paper gift bag warna solid (maroon, hijau, biru, kraft) dengan aksen bunga dan tulisan “Lucky Day”, handle tali, 155 x 145 x 65 mm.",
    description:
      "Gift bag kertas AJP Mart seri Lucky Day — warna solid elegan dengan pola bunga di bagian bawah dan handle tali. Cocok untuk kado, seserahan kecil, dan kemasan toko.",
    specs: [
      ["Kode", "1515-801"],
      ["Ukuran", "155 x 145 x 65 mm"],
      ["Handle", "Tali (rope)"],
      ["Warna", "Maroon · Hijau · Biru · Kraft"],
    ],
    variants: [
      { sku: "AJPM-GB-1515-801", label: "155 x 145 x 65 mm — assorted", perCarton: "1.152 pcs/karton" }, // Rp 4.500/pcs
    ],
  },
  {
    slug: "ajpmart-giftbag-good-things",
    name: "AJP Mart Gift Bag “Good Things Inside” (1927RB-2801)",
    brand: "ajp-mart-fancy",
    category: "kemasan-kado",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-giftbag-good-things.png",
    summary:
      "Tas kado kertas gradasi rainbow dengan tutup lipat bergelombang (die-cut) dan handle plong, 190 x 270 x 90 mm.",
    description:
      "Gift bag AJP Mart 1927RB-2801 — cetak gradasi warna pelangi dengan flap penutup scalloped dan handle die-cut. Tampil ceria untuk kado ulang tahun dan pesta.",
    specs: [
      ["Kode", "1927RB-2801"],
      ["Ukuran", "190 x 270 x 90 mm"],
      ["Handle", "Die-cut + flap penutup"],
      ["Motif", "Gradasi rainbow, assorted"],
    ],
    variants: [
      { sku: "AJPM-GB-1927RB-2801", label: "190 x 270 x 90 mm — assorted", perCarton: "624 pcs/karton" }, // Rp 6.250/pcs
    ],
  },
  {
    slug: "ajpmart-giftbag-hello",
    name: "AJP Mart Gift Bag “Hello” (2432RB-3801)",
    brand: "ajp-mart-fancy",
    category: "kemasan-kado",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-giftbag-hello.png",
    summary:
      "Tas kado kertas pastel motif abstrak dengan flap scalloped, pita satin, dan handle plong, 240 x 320 x 105 mm.",
    description:
      "Gift bag AJP Mart 2432RB-3801 seri Hello — warna pastel lembut dengan aksen daun garis, flap penutup bergelombang, dan pita satin. Ukuran besar untuk hampers dan kado premium.",
    specs: [
      ["Kode", "2432RB-3801"],
      ["Ukuran", "240 x 320 x 105 mm"],
      ["Handle", "Die-cut + flap + pita satin"],
      ["Warna", "Krem · Pink · Hijau · Biru"],
    ],
    variants: [
      { sku: "AJPM-GB-2432RB-3801", label: "240 x 320 x 105 mm — assorted", perCarton: "432 pcs/karton" }, // Rp 8.000/pcs
    ],
  },
  {
    slug: "ajpmart-pencilcase-4004",
    name: "AJP Mart Tempat Pensil Karakter (Resleting 4004)",
    brand: "ajp-mart-fancy",
    category: "storage-bags",
    badge: "Terlaris",
    inStock: true,
    image: "/produk/img/ajpmart-pencilcase-4004.png",
    summary:
      "Kotak pensil resleting bahan kulit sintetis glossy dengan gambar karakter timbul (Hello Kitty & friends), kemasan blister card.",
    description:
      "Tempat pensil AJP Mart seri 4004 — bahan sintetis mengkilap dengan cetak karakter dan efek glitter. Resleting rapat, muat pena, pensil, dan penggaris. Cepat berputar di rak toko dekat sekolah.",
    specs: [
      ["Model", "Resleting 4004"],
      ["Bahan", "Kulit sintetis glossy"],
      ["Motif", "Assorted karakter (blister card)"],
    ],
    variants: [
      { sku: "AJPM-PC-4004", label: "Resleting 4004 — assorted karakter", perCarton: "216 pcs/karton" }, // Rp 16.250/pcs nett
    ],
  },
  {
    slug: "ajpmart-pencilcase-3daz",
    name: "AJP Mart Tempat Pensil 3D AZ (Resleting Kain 3D)",
    brand: "ajp-mart-fancy",
    category: "storage-bags",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-pencilcase-3daz.png",
    summary:
      "Kotak pensil resleting berbahan kain dengan cetak karakter 3D timbul dan aksen glitter, tampilan tebal dan empuk.",
    description:
      "Tempat pensil AJP Mart seri 3D AZ — permukaan kain dengan gambar karakter timbul (3D) dan butiran glitter. Ritsleting ganda, ringan, dan digemari pelajar.",
    specs: [
      ["Model", "3D AZ"],
      ["Bahan", "Kain, cetak 3D timbul"],
      ["Motif", "Assorted karakter"],
    ],
    variants: [
      { sku: "AJPM-PC-3DAZ", label: "3D AZ — resleting kain 3D", perCarton: "10 pcs / 360 pcs/karton" }, // Rp 13.800/pcs nett
    ],
  },
  {
    slug: "ajpmart-pencilpouch-jfr6695",
    name: "AJP Mart Pencil Pouch Mesh (JFR-6695)",
    brand: "ajp-mart-fancy",
    category: "storage-bags",
    badge: "Baru",
    inStock: true,
    image: "/produk/img/ajpmart-pencilpouch-jfr6695.png",
    summary:
      "Pouch alat tulis jaring transparan dengan bingkai warna pastel dan tali gantung, ukuran 22,5 x 5,5 x 5,5 cm.",
    description:
      "Pencil pouch AJP Mart JFR-6695 — bahan mesh transparan berbingkai warna pastel sehingga isi mudah terlihat. Resleting penuh dan tali gantung. Dikemas dalam OPP + display box.",
    specs: [
      ["Kode", "JFR-6695"],
      ["Ukuran", "22,5 x 5,5 x 5,5 cm"],
      ["Bahan", "Mesh transparan + bingkai warna"],
    ],
    variants: [
      { sku: "AJPM-PP-JFR6695", label: "22,5 x 5,5 x 5,5 cm — assorted", perCarton: "10 pcs / 240 pcs (OPP pack)" }, // Rp 18.750/pcs
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
