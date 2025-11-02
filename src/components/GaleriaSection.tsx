'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  image: string;
  caption?: string;
}

interface GaleriaSectionProps {
  data: {
    title: string;
    photos: Photo[];
  };
}

export function GaleriaSection({ data }: GaleriaSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, data.photos.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.photos.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.photos.length) % data.photos.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">{data.title}</h2>
        
        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Imagem principal */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={data.photos[currentIndex].image}
              alt={data.photos[currentIndex].caption || `Foto ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority={currentIndex === 0}
            />
            
            {/* Overlay com caption */}
            {data.photos[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-medium text-center">
                  {data.photos[currentIndex].caption}
                </p>
              </div>
            )}
          </div>

          {/* Botões de navegação */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 md:h-12 md:w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 md:h-12 md:w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center gap-2 mt-6">
            {data.photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para foto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Miniaturas (apenas desktop) */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
          {data.photos.map((photo, index) => (
            <button
              key={index}
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