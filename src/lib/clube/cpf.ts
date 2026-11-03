// Espelha packages/shared/src/cpf.ts do repositório do app (ClubeCasarao/clube-casarao).
// Ao mudar uma regra lá, atualize aqui também.

/** Remove tudo que não for dígito. */
export function limparCpf(cpf: string): string {
  return cpf.replace(/\D/g, "");
}

/** Formata como 000.000.000-00 (aceita entrada parcial, útil em máscaras de input). */
export function formatarCpf(cpf: string): string {
  const d = limparCpf(cpf).slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

/** Valida os dígitos verificadores do CPF. */
export function cpfValido(cpf: string): boolean {
  const d = limparCpf(cpf);
  if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;

  const digito = (base: string, pesoInicial: number) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++)
      soma += Number(base[i]) * (pesoInicial - i);
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  return (
    digito(d.slice(0, 9), 10) === Number(d[9]) &&
    digito(d.slice(0, 10), 11) === Number(d[10])
  );
}
