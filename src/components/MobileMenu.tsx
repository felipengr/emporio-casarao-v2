'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface MobileMenuProps {
  config: {
    instagram: string;
    whatsapp: string;
  };
}

export function MobileMenu({ config }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const whatsappNumber = config.whatsapp.replace(/\D/g, '');

  const menuItems = [
    { href: '/#sobre', label: 'Sobre' },
    { href: '/#produtos', label: 'Produtos' },
    { href: '/#parceiros', label: 'Parceiros' },
    { href: '/#galeria', label: 'Galeria' },
    { href: '/#contato', label: 'Contato' },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-2xl font-bold text-primary">
            Menu
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

        <div className="mt-8 space-y-4">
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
          >
            <Link
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale no WhatsApp
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
              onClick={handleLinkClick}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Siga no Instagram
            </Link>
          </Button>
        </div>

        <div className="absolute bottom-8 left-6 right-6 text-center">
          <p className="text-sm text-muted-foreground">
            Empório Casarão
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Produtos artesanais de Piracaia
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}