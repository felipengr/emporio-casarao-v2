'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { languages } from '@/lib/i18n/translations';

interface MobileMenuProps {
  config: {
    instagram: string;
    whatsapp: string;
  };
}

export function MobileMenu({ config }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const whatsappNumber = config.whatsapp.replace(/\D/g, '');

  const menuItems = [
    { href: '/#sobre', label: t.nav.sobre },
    { href: '/#produtos', label: t.nav.produtos },
    { href: '/#parceiros', label: t.nav.parceiros },
    { href: '/#galeria', label: t.nav.galeria },
    { href: '/#contato', label: t.nav.contato },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t.mobileMenu.openMenu}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-2xl font-bold text-primary">
            {t.mobileMenu.menu}
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="text-lg font-medium transition-colors hover:text-primary py-3 border-b border-border"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 mt-6">
          {languages.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-label={option.label}
              aria-pressed={option.code === language}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-md border py-2 text-sm transition-colors ${
                option.code === language
                  ? 'border-primary bg-primary/10 font-semibold text-primary'
                  : 'border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              <span aria-hidden="true">{option.flag}</span>
              <span>{option.code.toUpperCase()}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
          >
            <Link
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('contact_whatsapp', {
                  event_category: 'engagement',
                  event_label: 'WhatsApp Mobile Menu',
                  location: 'mobile_menu',
                });
                handleLinkClick();
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t.mobileMenu.whatsappCta}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full"
            size="lg"
          >
            <Link
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('social_click', {
                  event_category: 'engagement',
                  event_label: 'Instagram Mobile Menu',
                  platform: 'instagram',
                  location: 'mobile_menu',
                });
                handleLinkClick();
              }}
            >
              <Instagram className="mr-2 h-5 w-5" />
              {t.mobileMenu.instagramCta}
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Empório Casarão
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t.mobileMenu.tagline}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}