"use client";

import { Fragment } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ParceirosSectionProps {
  parceiros: string[];
}

export function ParceirosSection({ parceiros }: ParceirosSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="parceiros" className="py-10 md:py-14">
      <AnimateOnScroll className="container">
        <h2 className="text-[11px] font-sans uppercase tracking-[0.12em] text-highlight">
          {t.parceiros.eyebrow}
        </h2>
        <p className="mt-4 font-serif text-2xl leading-snug text-muted-foreground md:text-[27px]">
          {parceiros.map((nome, index) => (
            <Fragment key={nome}>
              {index > 0 && (
                <>
                  {" "}
                  <span aria-hidden="true" className="mx-1 md:mx-1.5">
                    •
                  </span>{" "}
                </>
              )}
              <span className="whitespace-nowrap">{nome}</span>
            </Fragment>
          ))}
        </p>
      </AnimateOnScroll>
    </section>
  );
}
