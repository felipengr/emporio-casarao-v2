import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Produto {
  name: string;
  description: string;
  image: string;
  href: string;
}

interface ProdutosDestaqueProps {
  data: {
    title: string;
    items: Produto[];
  };
}

export function ProdutosDestaque({ data }: ProdutosDestaqueProps) {
  return (
    <section id="produtos" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">{data.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((produto, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}