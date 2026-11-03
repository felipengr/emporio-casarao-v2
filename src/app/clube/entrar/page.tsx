import type { Metadata } from "next";
import { generateSeoMetadata } from "@/components/SEO";
import { seoConfig, siteConfig } from "@/lib/site-content";
import { FormularioEntrar } from "./formulario";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Entrar no Clube Casarão | ${siteConfig.siteName}`,
    "Entre na sua conta do Clube Casarão com seu CPF e senha.",
    undefined,
    "/clube/entrar",
  );
}

export default async function EntrarClubePage({
  searchParams,
}: {
  searchParams: Promise<{ cpf?: string }>;
}) {
  const { cpf } = await searchParams;
  return <FormularioEntrar cpfInicial={cpf ?? ""} />;
}
