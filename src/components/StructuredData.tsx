import { translations } from "@/lib/i18n/translations";

interface StructuredDataProps {
  config: {
    siteName: string;
    addressLines: readonly string[];
    phone: string;
    instagram: string;
    logo: string;
  };
  seoConfig: {
    siteUrl: string;
    siteDescription: string;
    ogImage?: string;
  };
}

// Mesmas coordenadas usadas no botão "Como chegar" (ContatoSection).
const STORE_GEO = { latitude: -23.054255, longitude: -46.35723 };

export function StructuredData({ config, seoConfig }: StructuredDataProps) {
  const { siteUrl } = seoConfig;
  const phoneDigits = config.phone.replace(/\D/g, "");

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    "@id": `${siteUrl}/#store`,
    name: config.siteName,
    description: seoConfig.siteDescription,
    url: siteUrl,
    logo: `${siteUrl}${config.logo}`,
    image: [
      `${siteUrl}${seoConfig.ogImage ?? "/images/i1.jpg"}`,
      `${siteUrl}/images/galeria/fachada.jpg`,
    ],
    telephone: `+55${phoneDigits}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: config.addressLines[0],
      addressLocality: "Piracaia",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: { "@type": "GeoCoordinates", ...STORE_GEO },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${STORE_GEO.latitude},${STORE_GEO.longitude}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:30",
        closes: "14:00",
      },
    ],
    areaServed: { "@type": "City", name: "Piracaia" },
    sameAs: [config.instagram],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: config.siteName,
    url: siteUrl,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteUrl}/#store` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: translations.pt.piracaia.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  // <script> comum (e não next/script) para o JSON-LD sair no HTML do servidor.
  return (
    <>
      {[storeSchema, websiteSchema, faqSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD gerado a partir de dados estáticos do site
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
