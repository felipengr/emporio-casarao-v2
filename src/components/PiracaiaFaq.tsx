"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// <details> em vez do Accordion do Radix: o Radix não renderiza o conteúdo
// fechado, e as respostas precisam estar no HTML para o Google ler.
export function PiracaiaFaq() {
  const { t } = useLanguage();

  return (
    <section id="piracaia" className="py-10 md:py-14">
      <div className="container">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
              {t.piracaia.eyebrow}
            </p>
            <h2 className="mt-2 text-[29px] leading-tight md:text-[43px]">
              {t.piracaia.title}
            </h2>
            <div className="mt-6 divide-y border-y">
              {t.piracaia.faq.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium md:text-base [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
