import { site } from "./site";

/** Build a wa.me deep link with a pre-filled, URL-encoded message. */
export function waLink(message: string, number: string = site.whatsapp.number): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  /** generic CTA from the header / hero */
  general: () =>
    `Halo ${site.name}, saya ingin menanyakan pembelian grosir.\n` +
    `Nama usaha saya: [nama usaha], di kota [kota].\n` +
    `Mohon info daftar harga & ketentuan MOQ.`,

  /** from a brand page */
  brand: (brandName: string) =>
    `Halo ${site.name}, saya tertarik dengan produk ${brandName}.\n` +
    `Mohon info katalog & harga grosir. Nama usaha: [nama usaha], kota [kota].`,

  /** from a product detail page */
  product: (p: { name: string; sku: string; url: string }) =>
    `Halo, saya ingin meminta penawaran untuk produk berikut:\n` +
    `• ${p.name} (${p.sku})\n` +
    `Perkiraan jumlah: [qty]\n` +
    `Mohon info harga grosir & ketersediaan stok.\n` +
    `Sumber: ${p.url}`,

  /** from the Daftar Inquiry (multiple items) */
  inquiryList: (items: Array<{ name: string; sku: string; qty: number }>) =>
    `Halo ${site.name}, saya ingin meminta penawaran untuk ${items.length} produk:\n` +
    items.map((i) => `• ${i.name} — ${i.sku} — qty ${i.qty}`).join("\n") +
    `\n\nNama usaha: [nama usaha] · Kota: [kota] · Jenis usaha: [toko/grosir/sekolah/korporat]`,

  /** from the partnership form */
  partnership: (d: {
    usaha: string;
    jenis: string;
    kota: string;
    volume: string;
    kontak: string;
    pesan?: string;
  }) =>
    `Halo ${site.name}, saya ingin mengajukan kemitraan.\n\n` +
    `Nama usaha: ${d.usaha}\n` +
    `Jenis usaha: ${d.jenis}\n` +
    `Kota: ${d.kota}\n` +
    `Perkiraan volume/bulan: ${d.volume}\n` +
    `Kontak: ${d.kontak}\n` +
    (d.pesan ? `Pesan: ${d.pesan}\n` : ""),

  /** from the contact form */
  contact: (d: { nama: string; usaha: string; keperluan: string; pesan: string }) =>
    `Halo ${site.name},\n\n` +
    `Nama: ${d.nama}\n` +
    `Perusahaan/Instansi: ${d.usaha}\n` +
    `Keperluan: ${d.keperluan}\n` +
    `Pesan: ${d.pesan}`,
};
