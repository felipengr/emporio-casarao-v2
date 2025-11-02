import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SobreSection } from '@/components/SobreSection';
import { ProdutosDestaque } from '@/components/ProdutosDestaque';
import { ParceirosSection } from '@/components/ParceirosSection';
import { GaleriaSection } from '@/components/GaleriaSection';
import { ContatoSection } from '@/components/ContatoSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import {
  getSiteConfig,
  getHeroData,
  getSobre,
  getProdutos,
  getParceiros,
  getGaleria,
} from '@/lib/cms';

export default function Home() {
  const config = getSiteConfig();
  const heroData = getHeroData();
  const sobreData = getSobre();
  const produtosData = getProdutos();
  const parceirosData = getParceiros();
  const galeriaData = getGaleria();

  return (
    <>
      <Header config={config} />
      <main>
        <Hero data={heroData} />
        <SobreSection data={sobreData} />
        <ProdutosDestaque data={produtosData} />
        <ParceirosSection data={parceirosData} />
        <GaleriaSection data={galeriaData} />
        <ContatoSection config={config} />
      </main>
      <Footer config={config} />
      <WhatsAppFloat phoneNumber={config.whatsapp} />
    </>
  );
}