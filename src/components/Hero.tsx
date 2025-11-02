import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    image: string;
  };
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden mt-24">
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90">
            {data.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href={data.ctaHref}>
              {data.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}