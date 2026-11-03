"use client";

import { Bell, Tag, Wallet } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const beneficios = [
  { icon: Wallet, chave: "cashback" },
  { icon: Tag, chave: "promocoes" },
  { icon: Bell, chave: "avisos" },
] as const;

export function ClubeSection() {
  const { t } = useLanguage();

  return (
    <section id="clube" className="py-10 md:py-16">
      <div className="container">
        <AnimateOnScroll>
          <div className="rounded-3xl bg-card p-6 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
              {t.clube.eyebrow}
            </p>
            <h2 className="mt-3 text-[29px] leading-tight md:text-[43px]">
              {t.clube.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.clube.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {beneficios.map(({ icon: Icon, chave }) => (
                <div key={chave} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
                  <div>
                    <p className="font-serif text-base leading-tight">
                      {t.clube.beneficios[chave].titulo}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t.clube.beneficios[chave].descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/clube/cadastro"
                className="inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-highlight-foreground transition-opacity hover:opacity-90"
              >
                {t.clube.cadastrarBtn}
              </Link>
              <Link
                href="/clube/entrar"
                className="text-sm font-semibold text-highlight underline underline-offset-4"
              >
                {t.clube.entrarBtn}
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
