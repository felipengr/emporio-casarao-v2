// Espelha packages/shared/src/tipos.ts do repositório do app (ClubeCasarao/clube-casarao).
// Ao mudar uma regra lá, atualize aqui também.
// Valores em dinheiro vêm como number em reais (colunas numeric(10,2)).

export type PapelUsuario = "cliente" | "funcionario" | "admin";
export type StatusNota = "pendente" | "aprovada" | "rejeitada";
/** credito (+) cashback de nota aprovada, resgate (−) uso na loja, estorno (+) devolução de resgate, expiracao (−) venceu. */
export type TipoMovimento = "credito" | "resgate" | "estorno" | "expiracao";

export interface Perfil {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  celular: string | null;
  papel: PapelUsuario;
  aceitou_termos_em: string | null;
  notif_cashback: boolean;
  notif_promocoes: boolean;
  criado_em: string;
}

export interface Configuracoes {
  id: 1;
  percentual_cashback: number;
  atualizado_em: string;
}

export interface NotaFiscal {
  id: number;
  cliente_id: string;
  foto_path: string;
  data_compra: string;
  valor_declarado: number;
  /** 6 últimos números da chave de acesso do cupom. */
  numero_nota: string | null;
  chave_acesso: string | null;
  status: StatusNota;
  valor_conferido: number | null;
  percentual_aplicado: number | null;
  cashback_valor: number | null;
  motivo_rejeicao: string | null;
  analisada_por: string | null;
  analisada_em: string | null;
  criado_em: string;
}

/** Colunas que o cliente pode enviar (cliente_id vem de auth.uid()). */
export type NovaNotaFiscal = Pick<
  NotaFiscal,
  "foto_path" | "data_compra" | "valor_declarado"
> &
  Partial<Pick<NotaFiscal, "numero_nota" | "chave_acesso">>;

export interface Movimentacao {
  id: number;
  cliente_id: string;
  tipo: TipoMovimento;
  /** Sempre positivo; o sinal vem do tipo. */
  valor: number;
  nota_id: number | null;
  funcionario_id: string | null;
  observacao: string | null;
  criado_em: string;
}

export interface Promocao {
  id: number;
  titulo: string;
  descricao: string | null;
  produto: string | null;
  preco_original: number | null;
  preco_promocional: number | null;
  desconto_texto: string | null;
  cashback_extra: number;
  imagem_path: string | null;
  inicio: string;
  fim: string;
  ativa: boolean;
  destaque: boolean;
  criado_em: string;
  atualizado_em: string;
}

export interface Saldo {
  cliente_id: string;
  nome: string;
  saldo_disponivel: number;
  saldo_pendente: number;
}
