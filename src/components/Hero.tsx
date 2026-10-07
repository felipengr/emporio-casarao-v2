"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface HeroProps {
  media: {
    image: string;
    ctaHref: string;
    visitHref: string;
  };
}

export function Hero({ media }: HeroProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="container grid items-center gap-8 pt-6 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,44%)] md:gap-12 md:pt-8 md:pb-14">
        <div className="space-y-6 md:space-y-8">
          <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-[43px] leading-[1.07] md:text-5xl lg:text-[52px] lg:leading-[1.3]">
            {t.hero.title}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild className="h-12 rounded-full px-6 text-sm">
              <Link href={media.ctaHref}>{t.hero.ctaText} →</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="hidden h-12 rounded-full px-6 text-sm sm:inline-flex"
            >
              <Link href={media.visitHref}>{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[342/245] overflow-hidden rounded-[20px] md:aspect-[554/460]">
          <Image
            src={media.image}
            alt={t.hero.imageAlt}
            fill
            sizes="(min-width: 768px) 44vw, 100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>
      </section>

      <div className="bg-card">
        <ul className="container flex h-[70px] items-center gap-x-3 text-xs md:uppercase md:tracking-[0.06em] text-muted-foreground md:gap-x-10">
          {t.faixa.map((item, index) => (
            <li
              key={item}
              className={
                index === t.faixa.length - 1 ? "hidden md:block" : undefined
              }
            >
              {index > 0 && (
                <span aria-hidden="true" className="mr-3 md:hidden">
                  •
                </span>
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
