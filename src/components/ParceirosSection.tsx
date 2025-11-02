'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Parceiro {
  name: string;
  logo: string;
}

interface ParceirosSectionProps {
  data: {
    title: string;
    subtitle?: string;
    parceiros: Parceiro[];
  };
}

export function ParceirosSection({ data }: ParceirosSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 1;
          
          // Reinicia quando chega no fim
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScroll();

    // Pausa ao passar o mouse
    scrollContainer.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    scrollContainer.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  // Duplicar logos para efeito infinito
  const duplicatedParceiros = [...data.parceiros, ...data.parceiros];

  return (
    <section id='parceiros' className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
          {data.subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        <div 
          ref={scrollRef}
          className="overflow-hidden relative"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="flex gap-16 py-8">
            {duplicatedParceiros.map((parceiro, index) => (
              <div
                key={`${parceiro.name}-${index}`}
                className="flex-shrink-0 w-40 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={parceiro.logo}
                  alt={parceiro.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}