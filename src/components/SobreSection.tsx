'use client';

import Image from 'next/image';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface SobreSectionProps {
  media: {
    image: string;
  };
}

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
      </div>
    </section>
  );
}