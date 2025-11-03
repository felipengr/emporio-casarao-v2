import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

interface SobreSectionProps {
  data: {
    title: string;
    image: string;
    body: string;
  };
}

export function SobreSection({ data }: SobreSectionProps) {
  return (
    <section id="sobre" className="py-20 w-full">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{data.title}</h2>
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{data.body}</ReactMarkdown>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}