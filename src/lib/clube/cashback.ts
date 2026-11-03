// Espelha packages/shared/src/cashback.ts do repositório do app (ClubeCasarao/clube-casarao).
// Ao mudar uma regra lá, atualize aqui também.

/**
 * Prévia do cashback na tela. A regra oficial roda no banco (aprovar_nota),
 * que usa round(base * pct / 100, 2) — mesma conta aqui.
 */
export function calcularCashback(
  valorCompra: number,
  percentual: number,
): number {
  return Math.round(((valorCompra * percentual) / 100) * 100) / 100;
}
