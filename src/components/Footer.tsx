'use client';

import Link from 'next/link';
import { Instagram, Phone, MapPin, Code } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface FooterProps {
  config: {
    siteName: string;
    address: string;
    phone: string;
    instagram: string;
  };
}

export function Footer({ config }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{config.siteName}</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contatoTitle}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">{config.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{config.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-primary" />
                <Link
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @emporiocasarao.piracaia
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.linksTitle}</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.sobre}
              </Link>
              <Link href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.produtos}
              </Link>
              <Link href="/#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.galeria}
              </Link>
              <Link href="/#contato" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.contato}
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} {config.siteName}. {t.footer.rights}
          </p>

          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>{t.footer.developedBy}</span>
            <Link
              href="https://nogueiradev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline transition-colors"
            >
              Felipe Nogueira
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}