import type { Metadata } from 'next';
import { LegalSections } from '@/components/LegalSections';
import { generateSeoMetadata } from '@/components/SEO';
import { exclusaoContaAtualizadaEm, exclusaoContaClube } from '@/lib/clube-content';
import { seoConfig, siteConfig } from '@/lib/site-content';

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Excluir minha conta do Clube Casarão | ${siteConfig.siteName}`,
    'Como excluir sua conta do Clube Casarão pelo app ou pela web, sem precisar reinstalar o aplicativo.',
    undefined,
    '/clube/excluir-conta'
  );
}

export default function ExcluirContaClubePage() {
  return (
    <LegalSections
      titulo="Excluir minha conta do Clube Casarão"
      atualizadoEm={exclusaoContaAtualizadaEm}
      secoes={exclusaoContaClube}
    />
  );
}
