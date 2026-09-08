import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.detail}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "ID",
    },
    brand: ["Bright Office", "A+Z Stationery", "AJP Office", "AJP Mart Fancy"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Wholesaler",
    name: site.name,
    image: `${site.url}/logo-mark.svg`,
    "@id": site.url,
    url: site.url,
    priceRange: "Grosir / B2B",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.detail}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "ID",
    },
    openingHours: "Mo-Sa 08:00-17:00",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
