// Espelha packages/shared/src/validade.ts do repositório do app (ClubeCasarao/clube-casarao).
// Ao mudar uma regra lá, atualize aqui também.

import type { TipoMovimento } from "./tipos";

/** Validade do cashback, contada a partir da aprovação (migration 0007). */
export const VALIDADE_CASHBACK_DIAS = 90;

type MovimentoBasico = {
  tipo: TipoMovimento;
  valor: number;
  criado_em: string;
};
export type Vencimento = { venceEm: Date; valor: number };

/**
 * Quanto do saldo vence e quando. Mesma regra do banco (cashback_nao_consumido_ate):
 * resgates e vencimentos consomem os créditos do mais antigo para o mais novo; estornos devolvem.
 */
export function vencimentos(movimentos: MovimentoBasico[]): Vencimento[] {
  let consumo = 0;
  for (const m of movimentos) {
    if (m.tipo === "resgate" || m.tipo === "expiracao")
      consumo += Number(m.valor);
    if (m.tipo === "estorno") consumo -= Number(m.valor);
  }

  const creditos = movimentos
    .filter((m) => m.tipo === "credito")
    .sort((a, b) => a.criado_em.localeCompare(b.criado_em));

  const resultado: Vencimento[] = [];
  for (const c of creditos) {
    const usado = Math.min(Number(c.valor), Math.max(consumo, 0));
    consumo -= usado;
    const resta = Math.round((Number(c.valor) - usado) * 100) / 100;
    if (resta > 0) {
      const venceEm = new Date(
        new Date(c.criado_em).getTime() +
          VALIDADE_CASHBACK_DIAS * 24 * 60 * 60 * 1000,
      );
      resultado.push({ venceEm, valor: resta });
    }
  }
  return resultado;
}

/** Dias inteiros até a data (0 = hoje). */
export function diasAte(data: Date, agora = new Date()) {
  return Math.max(
    0,
    Math.ceil((data.getTime() - agora.getTime()) / (24 * 60 * 60 * 1000)),
  );
}
