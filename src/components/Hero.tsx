"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface HeroProps {
  media: {
    image: string;
    ctaHref: string;
  };
}

export function Hero({ media }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden mt-24">
      <div className="absolute inset-0">
        <Image
          src={media.image}
          alt={t.hero.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white">
            {t.hero.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href={media.ctaHref}>
              {t.hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
