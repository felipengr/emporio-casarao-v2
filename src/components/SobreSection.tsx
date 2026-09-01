'use client';

import Image from 'next/image';
import { Landmark, UtensilsCrossed, Hammer } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface SobreSectionProps {
  media: {
    image: string;
  };
}

const highlightIcons = [Landmark, UtensilsCrossed, Hammer];

export function SobreSection({ media }: SobreSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 w-full">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={media.image}
                alt={t.sobre.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{t.sobre.title}</h2>
              <div className="prose prose-lg max-w-none">
                <p>{t.sobre.body}</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            {t.sobre.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index];
              return (
                <div key={highlight.title} className="flex flex-col items-center text-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.text}</p>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}