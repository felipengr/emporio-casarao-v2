// Versão para Server Components de apps/mobile/src/lib/dados.ts do repositório do app
// (ClubeCasarao/clube-casarao). O RLS já limita o cliente aos próprios dados.

import { createClient } from "@/lib/supabase/server";
import type {
  Movimentacao,
  NotaFiscal,
  Perfil,
  Promocao,
  Saldo,
} from "./tipos";
import { type Vencimento, vencimentos } from "./validade";

async function usuarioId() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Sem sessão");
  return user.id;
}

export async function buscarSaldo(): Promise<Saldo> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("saldos")
    .select("*")
    .eq("cliente_id", await usuarioId())
    .single();
  if (error) throw error;
  return {
    ...data,
    saldo_disponivel: Number(data.saldo_disponivel),
    saldo_pendente: Number(data.saldo_pendente),
  };
}

export async function buscarMovimentacoes(): Promise<Movimentacao[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("movimentacoes")
    .select("*")
    .eq("cliente_id", await usuarioId())
    .order("criado_em", { ascending: false })
    .limit(50);
  if (error) throw error;
  return data.map((m) => ({ ...m, valor: Number(m.valor) }));
}

/** O que vence e quando (precisa de todas as movimentações: o consumo vai do crédito mais antigo ao mais novo). */
export async function buscarVencimentos(): Promise<Vencimento[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("movimentacoes")
    .select("tipo, valor, criado_em")
    .eq("cliente_id", await usuarioId())
    .limit(1000);
  if (error) throw error;
  return vencimentos(data);
}

export async function buscarNotas(): Promise<NotaFiscal[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("notas_fiscais")
    .select("*")
    .eq("cliente_id", await usuarioId())
    .order("criado_em", { ascending: false })
    .limit(50);
  if (error) throw error;
  return data.map((n) => ({
    ...n,
    valor_declarado: Number(n.valor_declarado),
    valor_conferido:
      n.valor_conferido === null ? null : Number(n.valor_conferido),
    cashback_valor: n.cashback_valor === null ? null : Number(n.cashback_valor),
  }));
}

export async function buscarPromocoes(): Promise<Promocao[]> {
  // Cliente só recebe as ativas e vigentes (RLS). O filtro repete a regra para quem é da equipe.
  const hoje = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
  }).format(new Date());
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("promocoes")
    .select("*")
    .eq("ativa", true)
    .lte("inicio", hoje)
    .gte("fim", hoje)
    .order("destaque", { ascending: false })
    .order("fim");
  if (error) throw error;
  return data;
}

export async function buscarPerfil(): Promise<Perfil> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("perfis")
    .select("*")
    .eq("id", await usuarioId())
    .single();
  if (error) throw error;
  return data;
}

export async function urlImagemPromocao(caminho: string | null) {
  if (!caminho) return null;
  const supabase = await createClient();
  return supabase.storage.from("promocoes").getPublicUrl(caminho).data
    .publicUrl;
}

export async function percentualCashback(): Promise<number> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("configuracoes")
    .select("percentual_cashback")
    .single();
  return data ? Number(data.percentual_cashback) : 5;
}
