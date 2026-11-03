import type { Metadata } from "next";
import { generateSeoMetadata } from "@/components/SEO";
import { seoConfig, siteConfig } from "@/lib/site-content";
import { FormularioCadastro } from "./formulario";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Cadastro no Clube Casarão | ${siteConfig.siteName}`,
    "Crie sua conta no Clube Casarão e comece a acumular cashback nas suas compras no Empório Casarão.",
    undefined,
    "/clube/cadastro",
  );
}

export default function CadastroClubePage() {
  return <FormularioCadastro />;
}
