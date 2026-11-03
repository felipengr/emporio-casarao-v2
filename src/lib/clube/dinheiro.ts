// Espelha packages/shared/src/dinheiro.ts do repositório do app (ClubeCasarao/clube-casarao).
// Ao mudar uma regra lá, atualize aqui também.

const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** 42.8 → "R$ 42,80" */
export function formatarReais(valor: number): string {
  return formatador.format(valor);
}

/** "R$ 1.234,56" / "128,50" → 1234.56. Retorna null se inválido. */
export function textoParaReais(texto: string): number | null {
  const limpo = texto.replace(/[^\d,]/g, "").replace(",", ".");
  if (!limpo) return null;
  const valor = Number(limpo);
  return Number.isFinite(valor) ? Math.round(valor * 100) / 100 : null;
}

/** Valor com sinal para o extrato: resgate e vencimento tiram do saldo. */
export function valorComSinal(
  tipo: "credito" | "resgate" | "estorno" | "expiracao",
  valor: number,
): number {
  return tipo === "resgate" || tipo === "expiracao" ? -valor : valor;
}
