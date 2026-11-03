import { BackToTop } from "@/components/BackToTop";
import { ClubeSection } from "@/components/ClubeSection";
import { ContatoSection } from "@/components/ContatoSection";
import { Footer } from "@/components/Footer";
import { GaleriaSection } from "@/components/GaleriaSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PiracaiaFaq } from "@/components/PiracaiaFaq";
import { ProdutosDestaque } from "@/components/ProdutosDestaque";
import { SobreSection } from "@/components/SobreSection";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getInstagramPhotos } from "@/lib/instagram";
import {
  galeriaMedia,
  heroMedia,
  produtosMedia,
  seoConfig,
  siteConfig,
  sobreMedia,
} from "@/lib/site-content";

export default async function Home() {
  const instagramPhotos = await getInstagramPhotos();

  return (
    <>
      <StructuredData config={siteConfig} seoConfig={seoConfig} />
      <Header config={siteConfig} />
      <main>
        <Hero media={heroMedia} />
        <ProdutosDestaque
          media={produtosMedia}
          whatsapp={siteConfig.whatsapp}
        />
        <ClubeSection />
        <SobreSection media={sobreMedia} />
        <GaleriaSection
          media={galeriaMedia}
          instagramPhotos={instagramPhotos}
          instagramUrl={siteConfig.instagram}
        />
        <PiracaiaFaq />
        <ContatoSection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
      <WhatsAppFloat phoneNumber={siteConfig.whatsapp} />
      <BackToTop />
    </>
  );
}
