'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { InstagramPhoto } from '@/lib/instagram';

interface PhotoMedia {
  image: string;
}

interface GaleriaSectionProps {
  media: PhotoMedia[];
  instagramPhotos?: InstagramPhoto[] | null;
}

export function GaleriaSection({ media, instagramPhotos }: GaleriaSectionProps) {
  const { t } = useLanguage();
  const MAX_PHOTOS = 6;
  const photos = (
    instagramPhotos && instagramPhotos.length > 0
      ? instagramPhotos
      : media.map((photo, index) => ({ ...photo, caption: t.galeria.captions[index] }))
  ).slice(0, MAX_PHOTOS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">{t.galeria.title}</h2>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Imagem principal */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={photos[currentIndex].image}
              alt={photos[currentIndex].caption || `${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority={currentIndex === 0}
            />

            {/* Overlay com caption */}
            {(photos[currentIndex].caption || 'permalink' in photos[currentIndex]) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 space-y-2">
                {photos[currentIndex].caption && (
                  <p className="text-white text-lg font-medium text-center">
                    {photos[currentIndex].caption}
                  </p>
                )}
                {'permalink' in photos[currentIndex] && (
                  <Link
                    href={(photos[currentIndex] as InstagramPhoto).permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors"
                    onClick={() =>
                      trackEvent('social_click', {
                        event_category: 'engagement',
                        event_label: 'Instagram Galeria',
                        platform: 'instagram',
                        location: 'galeria',
                      })
                    }
                  >
                    <Instagram className="h-4 w-4" />
                    {t.galeria.viewOnInstagram}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Botões de navegação */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            aria-label={t.galeria.previousPhoto}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 md:h-12 md:w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            aria-label={t.galeria.nextPhoto}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 md:h-12 md:w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center gap-1 mt-6">
            {photos.map((photo, index) => (
              <button
                key={photo.image}
                type="button"
                onClick={() => goToSlide(index)}
                className="group flex h-6 w-6 items-center justify-center"
                aria-label={t.galeria.goToPhoto.replace('{n}', String(index + 1))}
                aria-current={index === currentIndex}
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Miniaturas (apenas desktop) */}
        <div
          className="hidden md:grid gap-4 mt-8 max-w-4xl mx-auto"
          style={{ gridTemplateColumns: `repeat(${photos.length}, minmax(0, 1fr))` }}
        >
          {photos.map((photo, index) => (
            <button
              key={photo.image}
              type="button"
              onClick={() => goToSlide(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={photo.image}
                alt={photo.caption || `Miniatura ${index + 1}`}
                fill
                sizes="200px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}