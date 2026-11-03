import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { generateSeoMetadata } from "@/components/SEO";
import { percentualCashback } from "@/lib/clube/dados";
import { seoConfig, siteConfig } from "@/lib/site-content";
import { createClient } from "@/lib/supabase/server";
import { FormularioEnviarNota } from "./formulario";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Enviar nota fiscal | ${siteConfig.siteName}`,
    "Envie sua nota fiscal e ganhe cashback no Clube Casarão.",
    undefined,
    "/clube/enviar-nota",
  );
}

export default async function EnviarNotaPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/clube/entrar");
  const percentual = await percentualCashback();

  return <FormularioEnviarNota clienteId={user.id} percentual={percentual} />;
}
