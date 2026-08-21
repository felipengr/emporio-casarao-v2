import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SobreSection } from '@/components/SobreSection';
import { ProdutosDestaque } from '@/components/ProdutosDestaque';
import { ParceirosSection } from '@/components/ParceirosSection';
import { GaleriaSection } from '@/components/GaleriaSection';
import { ContatoSection } from '@/components/ContatoSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { BackToTop } from '@/components/BackToTop';
import { StructuredData } from '@/components/StructuredData';
import {
  siteConfig,
  seoConfig,
  heroMedia,
  sobreMedia,
  produtosMedia,
  parceirosMedia,
  galeriaMedia,
} from '@/lib/site-content';
import { getInstagramPhotos } from '@/lib/instagram';

export default async function Home() {
  const instagramPhotos = await getInstagramPhotos();

  return (
    <>
      <StructuredData config={siteConfig} seoConfig={seoConfig} />
      <Header config={siteConfig} />
      <main>
        <Hero media={heroMedia} />
        <SobreSection media={sobreMedia} />
        <ProdutosDestaque media={produtosMedia} />
        <ParceirosSection media={parceirosMedia} />
        <GaleriaSection media={galeriaMedia} instagramPhotos={instagramPhotos} />
        <ContatoSection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
      <WhatsAppFloat phoneNumber={siteConfig.whatsapp} />
      <BackToTop />
    </>
  );
}
