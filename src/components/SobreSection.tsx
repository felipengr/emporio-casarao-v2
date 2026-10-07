"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface SobreSectionProps {
  media: {
    image: string;
  };
}

export function SobreSection({ media }: SobreSectionProps) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="sobre" className="py-10 md:py-16">
      <div className="container">
        <AnimateOnScroll>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:rounded-3xl md:bg-card md:p-8 lg:gap-16">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[20px] md:order-1">
              <Image
                src={media.image}
                alt={t.sobre.imageAlt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2 md:py-6 md:pr-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
                {t.sobre.eyebrow}
              </p>
              <h2 className="mt-4 text-[29px] leading-tight md:text-[43px]">
                {t.sobre.title}
                <br />
                {t.sobre.titleLine2}
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {expanded ? t.sobre.body : t.sobre.intro}
              </p>
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-6 text-sm text-highlight hover:underline underline-offset-4"
              >
                {expanded ? t.sobre.readLess : `${t.sobre.readMore} →`}
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
