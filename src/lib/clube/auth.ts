"use server";

// Espelha a lógica de apps/mobile/src/lib/auth.ts e apps/admin/app/login/actions.ts
// do repositório do app (ClubeCasarao/clube-casarao), adaptada para Server Actions do Next.js.

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { cpfValido, limparCpf } from "./cpf";
import { senhaForte } from "./senha";

type RespostaFuncao =
  | { ok: true; dados: Record<string, unknown> }
  | { ok: false; erro: string };

/** Chama a Edge Function de acesso por CPF (entrar, esqueci, redefinir). Troca o CPF pelo e-mail no servidor. */
async function chamarFuncaoLogin(
  corpo: Record<string, unknown>,
  erroPadrao: string,
): Promise<RespostaFuncao> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const chave = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
  const funcao = process.env.SUPABASE_FUNCAO_LOGIN ?? "login-cpf";

  const resposta = await fetch(`${url}/functions/v1/${funcao}`, {
    method: "POST",
    headers: {
      apikey: chave,
      Authorization: `Bearer ${chave}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(corpo),
  }).catch(() => null);

  if (!resposta)
    return {
      ok: false,
      erro: "Sem conexão com o servidor. Verifique sua internet.",
    };
  const dados = await resposta.json().catch(() => null);
  if (resposta.ok) return { ok: true, dados: dados ?? {} };
  return { ok: false, erro: dados?.erro ?? erroPadrao };
}

type DadosCadastro = {
  nome: string;
  cpf: string;
  email: string;
  celular: string;
  senha: string;
};

export async function cadastrar(
  dados: DadosCadastro,
): Promise<
  { ok: true; precisaConfirmarEmail: boolean } | { ok: false; erro: string }
> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: dados.email.trim().toLowerCase(),
    password: dados.senha,
    // A trigger handle_new_user cria o perfil com estes dados.
    options: {
      data: {
        nome: dados.nome.trim(),
        cpf: limparCpf(dados.cpf),
        celular: dados.celular.replace(/\D/g, ""),
      },
    },
  });

  if (error) {
    if (/database error/i.test(error.message)) {
      return {
        ok: false,
        erro: "Este CPF já está cadastrado no clube. Tente entrar com ele.",
      };
    }
    if (/password/i.test(error.message)) {
      return {
        ok: false,
        erro: "Senha fraca. Use maiúscula, minúscula, número e caractere especial.",
      };
    }
    if (/rate limit|too many/i.test(error.message)) {
      return {
        ok: false,
        erro: "Muitas tentativas. Aguarde alguns minutos e tente de novo.",
      };
    }
    return {
      ok: false,
      erro: "Não foi possível criar a conta. Tente novamente.",
    };
  }

  if (data.user && data.user.identities?.length === 0) {
    return { ok: false, erro: "Este e-mail já está cadastrado no clube." };
  }

  return { ok: true, precisaConfirmarEmail: !data.session };
}

export async function confirmarCodigo(email: string, codigo: string) {
  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    email,
    token: codigo.trim(),
    type: "email",
  });
  if (!error) return { ok: true as const };
  if (/expired|invalid/i.test(error.message)) {
    return {
      ok: false as const,
      erro: "Código inválido ou expirado. Peça um novo código.",
    };
  }
  return {
    ok: false as const,
    erro: "Não foi possível confirmar. Tente novamente.",
  };
}

export async function reenviarCodigo(email: string) {
  const supabase = await createClient();
  const { error } = await supabase.auth.resend({ type: "signup", email });
  if (!error) return { ok: true as const };
  return {
    ok: false as const,
    erro: /rate limit|seconds/i.test(error.message)
      ? "Aguarde um pouco antes de pedir outro código."
      : "Não foi possível reenviar o código.",
  };
}

export type ResultadoLogin =
  | { ok: true }
  | { ok: false; erro: string; emailNaoConfirmado?: string };

export async function entrarComCpf(
  cpf: string,
  senha: string,
): Promise<ResultadoLogin> {
  if (!cpfValido(cpf)) return { ok: false, erro: "CPF inválido." };
  if (!senha) return { ok: false, erro: "Digite sua senha." };

  const r = await chamarFuncaoLogin(
    { cpf: limparCpf(cpf), senha },
    "Não foi possível entrar. Tente novamente.",
  );
  if (!r.ok) return { ok: false, erro: r.erro };
  if (r.dados.codigo === "email_nao_confirmado") {
    return {
      ok: false,
      erro: String(r.dados.erro ?? ""),
      emailNaoConfirmado: String(r.dados.email ?? ""),
    };
  }

  const sessao = r.dados.session as
    | { access_token: string; refresh_token: string }
    | undefined;
  if (!sessao)
    return { ok: false, erro: "Não foi possível entrar. Tente novamente." };

  const supabase = await createClient();
  const { error } = await supabase.auth.setSession(sessao);
  if (error)
    return { ok: false, erro: "Não foi possível entrar. Tente novamente." };
  return { ok: true };
}

/** Pede o código de redefinição. A resposta é a mesma exista o CPF ou não (não revela quem é cliente). */
export async function pedirCodigoSenha(
  cpf: string,
): Promise<{ ok: true } | { ok: false; erro: string }> {
  if (!cpfValido(cpf)) return { ok: false, erro: "CPF inválido." };
  const r = await chamarFuncaoLogin(
    { acao: "esqueci", cpf: limparCpf(cpf) },
    "Não foi possível enviar o código.",
  );
  return r.ok ? { ok: true } : { ok: false, erro: r.erro };
}

/** Confere o código e grava a senha nova. Depois a pessoa entra com a senha nova. */
export async function redefinirSenha(
  cpf: string,
  codigo: string,
  senha: string,
): Promise<{ ok: true } | { ok: false; erro: string }> {
  if (!senhaForte(senha))
    return {
      ok: false,
      erro: "A nova senha ainda não cumpre todos os requisitos.",
    };
  const r = await chamarFuncaoLogin(
    { acao: "redefinir", cpf: limparCpf(cpf), codigo, senha },
    "Não foi possível trocar a senha.",
  );
  return r.ok ? { ok: true } : { ok: false, erro: r.erro };
}

export async function sair() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/clube/entrar");
}
