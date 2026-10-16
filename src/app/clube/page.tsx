import { Apple, Bell, Mail, Phone, PlayCircle, Tag, Wallet } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { generateSeoMetadata } from "@/components/SEO";
import { clubeControlador } from "@/lib/clube-content";
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

const beneficios = [
  {
    icon: Wallet,
    titulo: "Cashback de verdade",
    descricao:
      "Envie a nota da sua compra e parte do valor volta para você, pronto para usar na loja.",
  },
  {
    icon: Tag,
    titulo: "Promoções exclusivas",
    descricao: "Ofertas especiais, só para quem é do clube, direto no app.",
  },
  {
    icon: Bell,
    titulo: "Avisos na hora certa",
    descricao: "Notificação quando o cashback é aprovado e antes dele vencer.",
  },
];

export default function ClubePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      <div className="container max-w-3xl py-10 md:py-16">
        <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
          Clube Casarão
        </p>
        <h1 className="mt-3 font-serif text-[29px] leading-tight md:text-[43px]">
          Seu carinho volta em forma de vantagens.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          O Clube Casarão é o programa de fidelidade gratuito do Empório
          Casarão. A cada compra, você envia a nota fiscal pelo app e recebe
          parte do valor de volta em cashback, para usar na próxima visita —
          além de promoções exclusivas para quem faz parte.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {beneficios.map(({ icon: Icon, titulo, descricao }) => (
            <div key={titulo} className="rounded-3xl bg-card p-6">
              <Icon className="h-6 w-6 text-highlight" />
              <p className="mt-4 font-serif text-lg">{titulo}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-card p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl">
            Venha fazer parte do clube
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            O app do Clube Casarão está em preparação para a App Store e o
            Google Play. Assim que estiver disponível, os links de download
            aparecem aqui. Por enquanto, cadastre-se pessoalmente na loja e já
            comece a acumular cashback.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <Apple className="h-4 w-4" />
              App Store · em breve
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <PlayCircle className="h-4 w-4" />
              Google Play · em breve
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-card p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl">Precisa de ajuda?</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Fale com a gente sobre o Clube Casarão, sua conta ou qualquer outra
            dúvida.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`https://wa.me/${clubeControlador.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:text-highlight"
            >
              <Phone className="h-4 w-4" />
              WhatsApp {clubeControlador.telefone}
            </Link>
            <Link
              href={`mailto:${clubeControlador.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:text-highlight"
            >
              <Mail className="h-4 w-4" />
              {clubeControlador.email}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/clube/regulamento"
            className="text-highlight underline underline-offset-4"
          >
            Regulamento do clube
          </Link>
          <Link
            href="/clube/privacidade"
            className="text-highlight underline underline-offset-4"
          >
            Política de Privacidade do Clube Casarão
          </Link>
          <Link
            href="/clube/excluir-conta"
            className="text-highlight underline underline-offset-4"
          >
            Excluir minha conta
          </Link>
        </div>
      </div>
      <Footer config={siteConfig} />
    </div>
  );
}
