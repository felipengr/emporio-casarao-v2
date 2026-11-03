// Espelha packages/shared/src/senha.ts do repositório do app (ClubeCasarao/clube-casarao).
// Ao mudar uma regra lá, atualize aqui também.

export const REQUISITOS_SENHA = [
  {
    id: "tamanho",
    texto: "Pelo menos 8 caracteres",
    ok: (s: string) => s.length >= 8,
  },
  {
    id: "maiuscula",
    texto: "Uma letra maiúscula",
    ok: (s: string) => /[A-Z]/.test(s),
  },
  {
    id: "minuscula",
    texto: "Uma letra minúscula",
    ok: (s: string) => /[a-z]/.test(s),
  },
  { id: "numero", texto: "Um número", ok: (s: string) => /\d/.test(s) },
  {
    id: "especial",
    texto: "Um caractere especial (!@#$...)",
    ok: (s: string) => /[^A-Za-z0-9]/.test(s),
  },
] as const;

export function senhaForte(senha: string): boolean {
  return REQUISITOS_SENHA.every((r) => r.ok(senha));
}

/** Mensagem amigável para o erro do supabase.auth.updateUser ao trocar a senha. */
export function mensagemErroTrocaSenha(erro: {
  code?: string;
  message: string;
}): string {
  if (erro.code === "same_password")
    return "A nova senha precisa ser diferente da atual.";
  if (erro.code === "weak_password")
    return "A nova senha não cumpre os requisitos.";
  if (erro.code === "over_request_rate_limit")
    return "Muitas tentativas. Aguarde alguns minutos.";
  if (
    /current password|invalid credentials|incorrect/i.test(erro.message) ||
    erro.code === "invalid_credentials"
  ) {
    return "Senha atual incorreta.";
  }
  return "Não foi possível trocar a senha. Tente novamente.";
}
