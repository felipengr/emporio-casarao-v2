import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site-content";

export function TelaClube({
  sobretitulo,
  titulo,
  children,
  largura = "max-w-md",
}: {
  sobretitulo: string;
  titulo: string;
  children: ReactNode;
  largura?: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      <div className={`container ${largura} py-10 md:py-16`}>
        <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
          {sobretitulo}
        </p>
        <h1 className="mt-3 font-serif text-[27px] leading-tight md:text-[36px]">
          {titulo}
        </h1>
        <div className="mt-8">{children}</div>
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
