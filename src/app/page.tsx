import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SobreSection } from '@/components/SobreSection';
import { ProdutosDestaque } from '@/components/ProdutosDestaque';
import { ParceirosSection } from '@/components/ParceirosSection';
import { GaleriaSection } from '@/components/GaleriaSection';
import { ContatoSection } from '@/components/ContatoSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { HeroSkeleton } from '@/components/skeletons/HeroSkeleton';
import { SobreSkeleton } from '@/components/skeletons/SobreSkeleton';
import { ProdutosSkeleton } from '@/components/skeletons/ProdutosSkeleton';
import { ParceirosSkeleton } from '@/components/skeletons/ParceirosSkeleton';
import { GaleriaSkeleton } from '@/components/skeletons/GaleriaSkeleton';
import { BackToTop } from '@/components/BackToTop';
import { ContatoSkeleton } from '@/components/skeletons/ContatoSkeleton';
import { StructuredData } from '@/components/StructuredData';
import {
  getSiteConfig,
  getHeroData,
  getSobre,
  getProdutos,
  getParceiros,
  getGaleria,
  getSeoConfig,
} from '@/lib/cms';

// Componentes wrapper assíncronos
async function HeroWrapper() {
  const data = await getHeroData();
  return <Hero data={data} />;
}

async function SobreWrapper() {
  const data = await getSobre();
  return <SobreSection data={data} />;
}

async function ProdutosWrapper() {
  const data = await getProdutos();
  return <ProdutosDestaque data={data} />;
}

async function ParceirosWrapper() {
  const data = await getParceiros();
  return <ParceirosSection data={data} />;
}

async function GaleriaWrapper() {
  const data = await getGaleria();
  return <GaleriaSection data={data} />;
}

async function ContatoWrapper() {
  const config = await getSiteConfig();
  return <ContatoSection config={config} />;
}

export default async function Home() {
  const config = await getSiteConfig();
  const seoConfig = await getSeoConfig();

  return (
    <>
      <StructuredData config={config} seoConfig={seoConfig} />
      <Header config={config} />
      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <HeroWrapper />
        </Suspense>
        
        <Suspense fallback={<SobreSkeleton />}>
          <SobreWrapper />
        </Suspense>
        
        <Suspense fallback={<ProdutosSkeleton />}>
          <ProdutosWrapper />
        </Suspense>
        
        <Suspense fallback={<ParceirosSkeleton />}>
          <ParceirosWrapper />
        </Suspense>
        
        <Suspense fallback={<GaleriaSkeleton />}>
          <GaleriaWrapper />
        </Suspense>
        
        <Suspense fallback={<ContatoSkeleton />}>
          <ContatoWrapper />
        </Suspense>
      </main>
      <Footer config={config} />
      <WhatsAppFloat phoneNumber={config.whatsapp} />
      <BackToTop />
    </>
  );
}