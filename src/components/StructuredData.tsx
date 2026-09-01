import Script from 'next/script';

interface StructuredDataProps {
  config: {
    siteName: string;
    address: string;
    phone: string;
    instagram: string;
  };
  seoConfig: {
    siteUrl: string;
    siteDescription: string;
    ogImage?: string;
  };
}

export function StructuredData({ config, seoConfig }: StructuredDataProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GroceryStore'],
    name: config.siteName,
    image: seoConfig.ogImage || `${seoConfig.siteUrl}/images/logo.png`,
    description: seoConfig.siteDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address,
      addressLocality: 'Piracaia',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Piracaia',
    },
    telephone: config.phone,
    url: seoConfig.siteUrl,
    sameAs: [config.instagram],
    priceRange: '$$',
    keywords: 'artesanato de Piracaia, gastronomia de Piracaia, produtos artesanais, cultura local',
    '@id': seoConfig.siteUrl,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.siteDescription,
    publisher: {
      '@type': 'Organization',
      name: config.siteName,
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}