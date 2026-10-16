import { Metadata } from 'next';

interface SeoConfig {
  siteTitle: string;
  siteDescription: string;
  keywords: string[];
  siteUrl: string;
  ogImage?: string;
  twitterCard?: string;
  twitterHandle?: string;
}

export function generateSeoMetadata(
  seoConfig: SeoConfig,
  pageTitle?: string,
  pageDescription?: string,
  pageImage?: string,
  canonicalPath = ''
): Metadata {
  const title = pageTitle || seoConfig.siteTitle;
  const description = pageDescription || seoConfig.siteDescription;
  const image = pageImage || seoConfig.ogImage || '/images/og-image-default.jpg';
  const url = seoConfig.siteUrl;
  const canonicalUrl = `${url}${canonicalPath}`;

  return {
    title,
    description,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: 'Empório Casarão' }],
    creator: 'Empório Casarão',
    publisher: 'Empório Casarão',

    metadataBase: new URL(url),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: canonicalUrl,
      title,
      description,
      siteName: seoConfig.siteTitle,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: (seoConfig.twitterCard as 'summary' | 'summary_large_image') || 'summary_large_image',
      title,
      description,
      images: [image],
      creator: seoConfig.twitterHandle,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      // Adicione aqui códigos de verificação quando tiver
      // google: 'seu-codigo-google',
      // yandex: 'seu-codigo-yandex',
    },
  };
}