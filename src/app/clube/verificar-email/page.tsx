import type { Metadata } from "next";
import { generateSeoMetadata } from "@/components/SEO";
import { seoConfig, siteConfig } from "@/lib/site-content";
import { FormularioVerificarEmail } from "./formulario";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Confirme seu e-mail | ${siteConfig.siteName}`,
    "Confirme o código enviado ao seu e-mail para ativar sua conta no Clube Casarão.",
    undefined,
    "/clube/verificar-email",
  );
}

export default async function VerificarEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;
  return <FormularioVerificarEmail email={email ?? ""} />;
}
