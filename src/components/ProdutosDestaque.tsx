'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface ProdutoMedia {
  image: string;
  href: string;
}

interface ProdutosDestaqueProps {
  media: ProdutoMedia[];
}

export function ProdutosDestaque({ media }: ProdutosDestaqueProps) {
  const { t } = useLanguage();
  const items = t.produtos.items.map((item, index) => ({ ...item, ...media[index] }));

  return (
    <section id="produtos" className="py-20 bg-secondary/30 w-full">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-center mb-12">{t.produtos.title}</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((produto, index) => (
            <AnimateOnScroll key={produto.name} delay={index * 0.1}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={produto.image}
                    alt={produto.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{produto.name}</CardTitle>
                  <CardDescription className="text-base">
                    {produto.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}