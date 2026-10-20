import type { Metadata } from "next";
import { ClubeContent } from "@/components/ClubeContent";
import { generateSeoMetadata } from "@/components/SEO";
import { seoConfig, siteConfig } from "@/lib/site-content";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Clube Casarão | ${siteConfig.siteName}`,
    "Conheça o Clube Casarão: o programa de fidelidade com cashback do Empório Casarão. Em breve no app, para iOS e Android.",
    undefined,
    "/clube",
  );
}

export default function ClubePage() {
  return <ClubeContent />;
}
