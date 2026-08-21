'use client';

import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Número 404 grande */}
        <div>
          <h1 className="text-[180px] md:text-[250px] font-bold text-primary/30 leading-none">
            404
          </h1>
        </div>

        {/* Mensagem */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.notFound.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {t.notFound.description}
          </p>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              {t.notFound.homeBtn}
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/#produtos">
              <Search className="mr-2 h-5 w-5" />
              {t.notFound.produtosBtn}
            </Link>
          </Button>
        </div>

        {/* Links úteis */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            {t.notFound.alsoText}
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/#sobre" className="text-primary hover:underline">
              {t.notFound.historia}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#galeria" className="text-primary hover:underline">
              {t.notFound.galeria}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#contato" className="text-primary hover:underline">
              {t.notFound.contato}
            </Link>
          </div>
        </div>

        {/* Ilustração decorativa */}
        <div className="pt-8 opacity-30">
          <p className="text-xs text-muted-foreground">
            Empório Casarão • {t.mobileMenu.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}