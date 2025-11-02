import Link from 'next/link';
import { Instagram, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  config: {
    siteName: string;
    address: string;
    phone: string;
    instagram: string;
  };
}

export function Footer({ config }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{config.siteName}</h3>
            <p className="text-sm text-muted-foreground">
              Produtos artesanais de Piracaia com qualidade e sabor de verdade.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
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
                <a 
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @emporiocasarao.piracaia
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </Link>
              <Link href="/#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                Galeria
              </Link>
              <Link href="/#contato" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} {config.siteName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}