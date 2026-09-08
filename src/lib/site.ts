/**
 * Central place for every company detail shown on the site.
 * Edit here — nothing is hard-coded in components.
 *
 * NOTE ON ADDRESS: the value below follows the address you typed in chat
 * (Blok B-07, with RT/RW + kelurahan). The company letterhead shows
 * "Blok C-03". Reconcile the two and keep only the correct one.
 */
export const site = {
  name: "PT Ateka Jaya Primantara",
  shortName: "Ateka Jaya Primantara",
  initials: "AJP",
  tagline: "Distributor alat tulis kantor & perlengkapan sekolah",
  /** used for absolute URLs in metadata / sitemap — change to your real domain */
  url: "https://www.atekajayaprimantara.co.id",
  description:
    "Distributor utama alat tulis kantor (ATK) dan perlengkapan sekolah di Surabaya. Memegang merek Bright Office, A+Z Stationery, AJP Office, dan AJP Mart Fancy.",

  address: {
    street: "Jl. Kalianak Barat No. 73 Blok C-03",
    detail: "Kalianak, Kec. Asem Rowo",
    city: "Surabaya",
    region: "Jawa Timur",
    postalCode: "60183",
    country: "Indonesia",
  },
  addressOneLine:
    "Jl. Kalianak Barat No. 73 Blok C-03, Kalianak, Asem Rowo, Surabaya, Jawa Timur 60183",
  /** query string for the Google Maps embed on /kontak */
  mapsQuery: "Jl. Kalianak Barat No. 73, Kalianak, Asem Rowo, Surabaya 60183",

  whatsapp: {
    /** international format, digits only — used to build wa.me links */
    number: "6285233792189",
    display: "+62 852-3379-2189",
  },
  /** Shopee store — shown in footer & contact */
  shopee: "https://id.shp.ee/ormkrn3L",
  /** no business email supplied yet — fill in to show it in the footer/contact */
  email: "",

  hours: "Senin – Sabtu, 08.00 – 17.00 WIB",

  stats: [
    { value: "15+ tahun", label: "pengalaman distribusi ATK & perlengkapan sekolah" },
    { value: "4 merek", label: "dipegang & didistribusikan dari satu pintu" },
    { value: "1.000+ SKU", label: "aktif lintas kategori" },
    { value: "Se-Indonesia", label: "jangkauan pengiriman ke seluruh Indonesia" },
  ],
} as const;

export type Site = typeof site;
