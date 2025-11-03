import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
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
            Ops! Página não encontrada
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida para outro lugar.
          </p>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Ir para Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/#produtos">
              <Search className="mr-2 h-5 w-5" />
              Ver Produtos
            </Link>
          </Button>
        </div>

        {/* Links úteis */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Você também pode:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/#sobre" className="text-primary hover:underline">
              Conhecer nossa história
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#galeria" className="text-primary hover:underline">
              Ver galeria
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#contato" className="text-primary hover:underline">
              Entrar em contato
            </Link>
          </div>
        </div>

        {/* Ilustração decorativa */}
        <div className="pt-8 opacity-30">
          <p className="text-xs text-muted-foreground">
            Empório Casarão • Produtos Artesanais de Piracaia
          </p>
        </div>
      </div>
    </div>
  );
}