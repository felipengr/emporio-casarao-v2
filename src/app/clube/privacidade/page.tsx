import type { Metadata } from "next";
import { LegalSections } from "@/components/LegalSections";
import { generateSeoMetadata } from "@/components/SEO";
import { seoConfig, siteConfig } from "@/lib/site-content";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Política de Privacidade do Clube Casarão | ${siteConfig.siteName}`,
    "Como o Clube Casarão, programa de fidelidade do Empório Casarão, coleta, usa e protege seus dados pessoais.",
    undefined,
    "/clube/privacidade",
  );
}

export default function PrivacidadeClubePage() {
  return <LegalSections documento="privacidade" />;
}
