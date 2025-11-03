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
    '@type': 'LocalBusiness',
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
    telephone: config.phone,
    url: seoConfig.siteUrl,
    sameAs: [config.instagram],
    priceRange: '$$',
    servesCuisine: 'Produtos Artesanais',
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