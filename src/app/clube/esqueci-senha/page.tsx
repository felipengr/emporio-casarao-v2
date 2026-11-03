import type { Metadata } from "next";
import { generateSeoMetadata } from "@/components/SEO";
import { seoConfig, siteConfig } from "@/lib/site-content";
import { FormularioEsqueciSenha } from "./formulario";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Esqueci minha senha | ${siteConfig.siteName}`,
    "Redefina a senha da sua conta no Clube Casarão.",
    undefined,
    "/clube/esqueci-senha",
  );
}

export default function EsqueciSenhaPage() {
  return <FormularioEsqueciSenha />;
}
