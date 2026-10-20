'use client';

import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { type DocumentoClube, documentosClube, formatarDataClube } from '@/lib/clube-content';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { siteConfig } from '@/lib/site-content';

interface LegalSectionsProps {
  documento: DocumentoClube;
}

export function LegalSections({ documento }: LegalSectionsProps) {
  const { language, t } = useLanguage();
  const { atualizadoEm, secoes } = documentosClube[documento];

  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      <div className="container max-w-3xl py-10 md:py-16">
        <Link
          href="/clube"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-highlight"
        >
          ← {t.clube.backToClube}
        </Link>

        <h1 className="mt-6 font-serif text-3xl md:text-4xl">{t.clube.documentos[documento]}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.clube.updatedOn} {formatarDataClube(atualizadoEm, language)}
        </p>
        {t.clube.translationNote && (
          <p className="mt-4 text-sm italic text-muted-foreground">{t.clube.translationNote}</p>
        )}

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground md:text-base">
          {secoes[language].map((secao) => (
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
