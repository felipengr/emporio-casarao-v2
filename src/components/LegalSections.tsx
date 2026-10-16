import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import type { SecaoTexto } from '@/lib/clube-content';
import { siteConfig } from '@/lib/site-content';

interface LegalSectionsProps {
  titulo: string;
  atualizadoEm: string;
  secoes: SecaoTexto[];
}

export function LegalSections({ titulo, atualizadoEm, secoes }: LegalSectionsProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      <div className="container max-w-3xl py-10 md:py-16">
        <Link
          href="/clube"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-highlight"
        >
          ← Voltar para o Clube Casarão
        </Link>

        <h1 className="mt-6 font-serif text-3xl md:text-4xl">{titulo}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Atualizado em {atualizadoEm}
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground md:text-base">
          {secoes.map((secao) => (
            <section key={secao.titulo}>
              <h2 className="font-serif text-xl md:text-2xl">{secao.titulo}</h2>
              {secao.paragrafos.map((paragrafo) => (
                <p key={paragrafo} className="mt-3">
                  {paragrafo}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
      <Footer config={siteConfig} />
    </div>
  );
}
