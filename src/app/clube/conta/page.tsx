import { LogOut, Receipt, Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { generateSeoMetadata } from "@/components/SEO";
import { sair } from "@/lib/clube/auth";
import {
  buscarNotas,
  buscarPerfil,
  buscarSaldo,
  buscarVencimentos,
} from "@/lib/clube/dados";
import { formatarReais } from "@/lib/clube/dinheiro";
import { diasAte } from "@/lib/clube/validade";
import { seoConfig, siteConfig } from "@/lib/site-content";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Minha conta | ${siteConfig.siteName}`,
    "Seu saldo de cashback e suas notas enviadas no Clube Casarão.",
    undefined,
    "/clube/conta",
  );
}

const STATUS_TEXTO: Record<string, string> = {
  pendente: "Em análise",
  aprovada: "Aprovada",
  rejeitada: "Rejeitada",
};

const STATUS_COR: Record<string, string> = {
  pendente: "text-highlight",
  aprovada: "text-[#3a7d44]",
  rejeitada: "text-destructive",
};

export default async function ContaClubePage() {
  const [perfil, saldo, notas, aVencer] = await Promise.all([
    buscarPerfil(),
    buscarSaldo(),
    buscarNotas(),
    buscarVencimentos(),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      <div className="container max-w-2xl py-10 md:py-16">
        <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
          Minha carteira
        </p>
        <h1 className="mt-3 font-serif text-[27px] leading-tight md:text-[36px]">
          Olá, {perfil.nome.split(" ")[0]}.
        </h1>

        <div className="mt-8 rounded-3xl bg-highlight p-6 text-highlight-foreground md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-wide opacity-80">
            Saldo aprovado
          </p>
          <p className="mt-1 text-4xl font-bold">
            {formatarReais(saldo.saldo_disponivel)}
          </p>
          <p className="mt-1 text-sm opacity-80">
            Pendente: {formatarReais(saldo.saldo_pendente)}
          </p>
        </div>

        {aVencer.length > 0 ? (
          <div className="mt-4 rounded-3xl bg-card p-5">
            <p className="font-serif text-lg">A vencer</p>
            <div className="mt-2 flex flex-col gap-1.5">
              {aVencer.slice(0, 3).map((v) => {
                const dias = diasAte(v.venceEm);
                return (
                  <div
                    key={v.venceEm.toISOString()}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-semibold">
                      {formatarReais(v.valor)}
                    </span>
                    <span
                      className={
                        dias <= 7
                          ? "font-semibold text-highlight"
                          : "text-muted-foreground"
                      }
                    >
                      vence em{" "}
                      {v.venceEm.toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                      })}{" "}
                      (
                      {dias === 0
                        ? "hoje"
                        : dias === 1
                          ? "amanhã"
                          : `${dias} dias`}
                      )
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="mt-4 rounded-3xl bg-card p-5">
          <p className="font-serif text-lg">Resgate presencial pelo CPF</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Na loja, informe seu CPF no caixa. A equipe consulta seu saldo e
            aplica o desconto.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/clube/enviar-nota"
            className="inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-highlight-foreground transition-opacity hover:opacity-90"
          >
            <Receipt className="h-4 w-4" />
            Enviar nota
          </Link>
          <Link
            href="/clube/promocoes"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:text-highlight"
          >
            <Tag className="h-4 w-4" />
            Ver promoções
          </Link>
        </div>

        <p className="mt-10 font-serif text-lg">Suas notas</p>
        {notas.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Você ainda não enviou nenhuma nota fiscal.
          </p>
        ) : (
          <div className="mt-3 flex flex-col gap-3">
            {notas.map((nota) => (
              <div key={nota.id} className="rounded-2xl bg-card p-4">
                <p className="text-xs text-muted-foreground">
                  {new Date(`${nota.data_compra}T00:00:00`).toLocaleDateString(
                    "pt-BR",
                  )}
                </p>
                <p className="text-xl font-bold">
                  {formatarReais(nota.valor_conferido ?? nota.valor_declarado)}
                </p>
                <p
                  className={`mt-0.5 text-sm font-semibold ${STATUS_COR[nota.status]}`}
                >
                  {STATUS_TEXTO[nota.status]}
                  {nota.status === "aprovada" && nota.cashback_valor ? (
                    <> &nbsp;+{formatarReais(nota.cashback_valor)}</>
                  ) : null}
                </p>
                {nota.status === "rejeitada" && nota.motivo_rejeicao ? (
                  <p className="mt-1 rounded-lg bg-destructive/10 p-2 text-sm text-destructive">
                    {nota.motivo_rejeicao}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}

        <form action={sair} className="mt-10">
          <button
            type="submit"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </form>
      </div>
      <Footer config={siteConfig} />
    </div>
  );
}
