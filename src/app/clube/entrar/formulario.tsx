"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MensagemErro, TelaClube } from "@/components/clube/TelaClube";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";
import { entrarComCpf, reenviarCodigo } from "@/lib/clube/auth";
import { cpfValido, formatarCpf } from "@/lib/clube/cpf";

export function FormularioEntrar({ cpfInicial }: { cpfInicial: string }) {
  const router = useRouter();
  const [cpf, setCpf] = useState(cpfInicial ? formatarCpf(cpfInicial) : "");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [entrando, setEntrando] = useState(false);

  async function entrar(evento: React.FormEvent) {
    evento.preventDefault();
    if (!cpfValido(cpf)) {
      setErro("CPF inválido.");
      return;
    }
    if (!senha) {
      setErro("Digite sua senha.");
      return;
    }
    setErro(null);
    setEntrando(true);
    const resultado = await entrarComCpf(cpf, senha);
    setEntrando(false);

    if (resultado.ok) {
      router.push("/clube/conta");
      return;
    }
    if (resultado.emailNaoConfirmado) {
      await reenviarCodigo(resultado.emailNaoConfirmado);
      router.push(
        `/clube/verificar-email?email=${encodeURIComponent(resultado.emailNaoConfirmado)}`,
      );
      return;
    }
    setErro(resultado.erro);
  }

  return (
    <TelaClube sobretitulo="Que bom te ver" titulo="Entre no clube.">
      <form onSubmit={entrar} className="flex flex-col gap-4">
        <Field label="CPF">
          <Input
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(formatarCpf(e.target.value))}
            inputMode="numeric"
            maxLength={14}
            autoComplete="username"
          />
        </Field>
        <Field label="Senha">
          <Input
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            autoComplete="current-password"
          />
        </Field>

        <MensagemErro>{erro}</MensagemErro>

        <Button
          type="submit"
          disabled={entrando}
          size="lg"
          className="rounded-full"
        >
          {entrando ? "Entrando..." : "Entrar"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="rounded-full"
          asChild
        >
          <Link href="/clube/cadastro">Ainda não tenho conta</Link>
        </Button>

        <Link
          href="/clube/esqueci-senha"
          className="text-center text-sm font-semibold text-highlight underline underline-offset-2"
        >
          Esqueceu a senha?
        </Link>
      </form>
    </TelaClube>
  );
}
