import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { InquiryProvider } from "@/components/inquiry/inquiry-context";
import { InquiryBar } from "@/components/inquiry/inquiry-bar";
import { OrganizationJsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "distributor ATK Surabaya",
    "grosir alat tulis kantor",
    "distributor perlengkapan sekolah",
    "A+Z Stationery",
    "AJP Office",
    "Bright Office",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const noFlash = `
(function(){try{var t=localStorage.getItem('ajp-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen">
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <OrganizationJsonLd />
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-card"
        >
          Lewati ke konten
        </a>
        <InquiryProvider>
          <SiteHeader />
          <main id="konten">{children}</main>
          <SiteFooter />
          <InquiryBar />
        </InquiryProvider>
      </body>
    </html>
  );
}
