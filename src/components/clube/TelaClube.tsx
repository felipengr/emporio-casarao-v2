import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site-content";

export function TelaClube({
  sobretitulo,
  titulo,
  children,
  largura = "max-w-md",
  voltarPara,
  voltarTexto = "Voltar para Minha conta",
}: {
  sobretitulo: string;
  titulo: string;
  children: ReactNode;
  largura?: string;
  /** Mostra um link "voltar" acima do título, ex. "/clube/conta". */
  voltarPara?: string;
  voltarTexto?: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      {/* O width-cap fica numa div separada: a classe .container tem seu próprio
          max-width por breakpoint (globals.css) que vence o max-w-* do Tailwind
          se os dois ficarem na mesma div, deixando o conteúdo largo demais. */}
      <div className="container py-10 md:flex md:min-h-[calc(100vh-18rem)] md:items-center md:py-16">
        <div className={`${largura} mx-auto w-full`}>
          {voltarPara ? (
            <Link
              href={voltarPara}
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-highlight"
            >
              <ArrowLeft className="h-4 w-4" />
              {voltarTexto}
            </Link>
          ) : null}
          <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
            {sobretitulo}
          </p>
          <h1 className="mt-3 font-serif text-[27px] leading-tight md:text-[36px]">
            {titulo}
          </h1>
          <div className="mt-8">{children}</div>
        </div>
      </div>
      <Footer config={siteConfig} />
    </div>
  );
}

export function MensagemErro({ children }: { children?: string | null }) {
  if (!children) return null;
  return (
    <p
      className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
      role="alert"
    >
      {children}
    </p>
  );
}

export function MensagemAviso({ children }: { children?: string | null }) {
  if (!children) return null;
  return (
    <p className="rounded-xl bg-highlight/10 px-4 py-3 text-sm text-foreground">
      {children}
    </p>
  );
}
