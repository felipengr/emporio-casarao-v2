"use client";

import Link from "next/link";
import { trackEvent } from "@/components/Analytics";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/MobileMenu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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
  const { t } = useLanguage();
  const whatsappNumber = config.whatsapp.replace(/\D/g, "");

  const navItems = [
    { href: "/#produtos", label: t.nav.produtos },
    { href: "/#sobre", label: t.nav.sobre },
    { href: "/#galeria", label: t.nav.galeria },
    { href: "/#contato", label: t.nav.contato },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex flex-col leading-none"
          aria-label={config.siteName}
        >
          <span className="text-[11px] uppercase tracking-[0.12em] text-highlight">
            Empório
          </span>
          <span className="font-serif text-[29px] text-foreground">Casarão</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] transition-colors hover:text-highlight"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher className="hidden md:flex" />
          <ThemeToggle />

          <Button
            asChild
            className="hidden md:inline-flex h-12 rounded-full px-7 text-sm"
            onClick={() =>
              trackEvent("contact_whatsapp", {
                event_category: "engagement",
                event_label: "WhatsApp Header",
                location: "header",
              })
            }
          >
            <Link
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Link>
          </Button>

          <MobileMenu config={config} />
        </div>
      </div>
    </header>
  );
}
