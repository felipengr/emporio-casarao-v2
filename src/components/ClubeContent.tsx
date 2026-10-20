"use client";

import {
  Apple,
  Bell,
  Mail,
  Phone,
  PlayCircle,
  Tag,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { clubeControlador } from "@/lib/clube-content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/site-content";

const beneficios = [
  { icon: Wallet, chave: "cashback" },
  { icon: Tag, chave: "promocoes" },
  { icon: Bell, chave: "avisos" },
] as const;

export function ClubeContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      <div className="container max-w-3xl py-10 md:py-16">
        <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
          {t.clube.eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-[29px] leading-tight md:text-[43px]">
          {t.clube.title}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t.clube.intro}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {beneficios.map(({ icon: Icon, chave }) => (
            <div key={chave} className="rounded-3xl bg-card p-6">
              <Icon className="h-6 w-6 text-highlight" />
              <p className="mt-4 font-serif text-lg">
                {t.clube.beneficios[chave].titulo}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.clube.beneficios[chave].descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-card p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl">{t.clube.joinTitle}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.clube.joinText}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <Apple className="h-4 w-4" />
              App Store · {t.clube.comingSoon}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <PlayCircle className="h-4 w-4" />
              Google Play · {t.clube.comingSoon}
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-card p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl">{t.clube.helpTitle}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.clube.helpText}
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
            {t.clube.regulamentoLink}
          </Link>
          <Link
            href="/clube/privacidade"
            className="text-highlight underline underline-offset-4"
          >
            {t.clube.privacidadeLink}
          </Link>
          <Link
            href="/clube/excluir-conta"
            className="text-highlight underline underline-offset-4"
          >
            {t.clube.excluirContaLink}
          </Link>
        </div>
      </div>
      <Footer config={siteConfig} />
    </div>
  );
}
