import type { Metadata } from "next";
import { LegalSections } from "@/components/LegalSections";
import { generateSeoMetadata } from "@/components/SEO";
import { regulamentoAtualizadoEm, regulamentoClube } from "@/lib/clube-content";
import { seoConfig, siteConfig } from "@/lib/site-content";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Regulamento do Clube Casarão | ${siteConfig.siteName}`,
    "As regras do programa de fidelidade com cashback do Empório Casarão: como ganhar, usar e perder o saldo.",
    undefined,
    "/clube/regulamento",
  );
}

export default function RegulamentoClubePage() {
  return (
    <LegalSections
      titulo="Regulamento do Clube Casarão"
      atualizadoEm={regulamentoAtualizadoEm}
      secoes={regulamentoClube}
    />
  );
}
