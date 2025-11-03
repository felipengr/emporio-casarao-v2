'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileMenu } from '@/components/MobileMenu';

interface HeaderProps {
  config: {
    siteName: string;
    logo?: string;
    phone: string;
    instagram: string;
    whatsapp: string;
  };
}

export function Header({ config }: HeaderProps) {
  const whatsappNumber = config.whatsapp.replace(/\D/g, '');
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/98 backdrop-blur-md shadow-sm">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center">
          {config.logo ? (
            <Image
              src={config.logo}
              alt={config.siteName}
              width={180}
              height={80}
              className="h-16 w-auto dark:invert"
              priority
            />
          ) : (
            <span className="text-2xl font-bold text-primary">
              {config.siteName}
            </span>
          )}
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/#sobre"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Sobre
          </Link>
          <Link
            href="/#produtos"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Produtos
          </Link>
          <Link
            href="/#parceiros"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Parceiros
          </Link>
          <Link
            href="/#galeria"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Galeria
          </Link>
          <Link
            href="/#contato"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="hidden sm:flex"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'social_click', {
                  event_category: 'engagement',
                  event_label: 'Instagram Header',
                  platform: 'instagram',
                });
              }
            }}
          >
            <Link
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            className="hidden md:flex bg-primary hover:bg-primary/90"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'contact_whatsapp', {
                  event_category: 'engagement',
                  event_label: 'WhatsApp Header',
                  location: 'header',
                });
              }
            }}
          >
            <Link
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Link>
          </Button>

          <MobileMenu config={config} />
        </div>
      </div>
    </header>
  );
}