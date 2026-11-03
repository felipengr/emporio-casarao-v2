"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RequisitosSenha } from "@/components/clube/RequisitosSenha";
import {
  MensagemAviso,
  MensagemErro,
  TelaClube,
} from "@/components/clube/TelaClube";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";
import { pedirCodigoSenha, redefinirSenha } from "@/lib/clube/auth";
import { cpfValido, formatarCpf, limparCpf } from "@/lib/clube/cpf";
import { senhaForte } from "@/lib/clube/senha";

export function FormularioEsqueciSenha() {
  const router = useRouter();
  const [etapa, setEtapa] = useState<"cpf" | "codigo" | "pronto">("cpf");
  const [cpf, setCpf] = useState("");
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviarCodigo(evento?: React.FormEvent) {
    evento?.preventDefault();
    if (!cpfValido(cpf)) {
      setErro("CPF inválido.");
      return;
    }
    setErro(null);
    setEnviando(true);
    const r = await pedirCodigoSenha(cpf);
    setEnviando(false);
    if (!r.ok) {
      setErro(r.erro);
      return;
    }
    setEtapa("codigo");
    setAviso(
      "Se o CPF estiver cadastrado, enviamos um código para o e-mail da conta. Confira também o spam.",
    );
  }

  async function trocarSenha(evento: React.FormEvent) {
    evento.preventDefault();
    if (codigo.length < 6)
      return setErro("Digite o código que chegou no seu e-mail.");
    if (!senhaForte(senha))
      return setErro("A nova senha ainda não cumpre todos os requisitos.");
    if (senha !== confirmacao)
      return setErro("A confirmação não é igual à nova senha.");
    setErro(null);
    setEnviando(true);
    const r = await redefinirSenha(cpf, codigo, senha);
    setEnviando(false);
    if (!r.ok) return setErro(r.erro);
    setEtapa("pronto");
  }

  useEffect(() => {
    if (etapa !== "pronto") return;
    const tempo = setTimeout(
      () => router.replace(`/clube/entrar?cpf=${limparCpf(cpf)}`),
      4000,
    );
    return () => clearTimeout(tempo);
  }, [etapa, cpf, router.replace]);

  if (etapa === "pronto") {
    return (
      <TelaClube sobretitulo="Esqueci minha senha" titulo="Senha alterada!">
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-highlight">
            <Check className="h-10 w-10 text-highlight-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">
            Agora é só entrar com o seu CPF e a nova senha.
          </p>
          <p className="text-xs text-muted-foreground">
            Levando você para o login...
          </p>
          <Button
            size="lg"
            className="mt-2 rounded-full"
            onClick={() =>
              router.replace(`/clube/entrar?cpf=${limparCpf(cpf)}`)
            }
          >
            Entrar agora
          </Button>
        </div>
      </TelaClube>
    );
  }

  if (etapa === "cpf") {
    return (
      <TelaClube
        sobretitulo="Esqueci minha senha"
        titulo="Vamos criar uma nova."
      >
        <p className="mb-6 text-sm text-muted-foreground">
          Digite seu CPF. Enviamos um código para o e-mail cadastrado na sua
          conta.
        </p>
        <form onSubmit={enviarCodigo} className="flex flex-col gap-4">
          <Field label="CPF">
            <Input
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(formatarCpf(e.target.value))}
              inputMode="numeric"
              maxLength={14}
            />
          </Field>
          <MensagemErro>{erro}</MensagemErro>
          <Button
            type="submit"
            disabled={enviando}
            size="lg"
            className="rounded-full"
          >
            {enviando ? "Enviando..." : "Enviar código"}
          </Button>
        </form>
      </TelaClube>
    );
  }

  return (
    <TelaClube sobretitulo="Esqueci minha senha" titulo="Digite o código.">
      <MensagemAviso>{aviso}</MensagemAviso>
      <form onSubmit={trocarSenha} className="mt-4 flex flex-col gap-4">
        <Field label="Código">
          <Input
            placeholder="000000"
            value={codigo}
            onChange={(e) =>
              setCodigo(e.target.value.replace(/\D/g, "").slice(0, 8))
            }
            inputMode="numeric"
            className="text-center text-xl tracking-[0.4em]"
          />
        </Field>
        <Field label="Nova senha">
          <Input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
        </Field>
        <RequisitosSenha senha={senha} />
        <Field
          label="Confirme a nova senha"
          erro={
            confirmacao && senha !== confirmacao
              ? "As senhas não são iguais."
              : null
          }
        >
          <Input
            value={confirmacao}
            onChange={(e) => setConfirmacao(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
        </Field>

        <MensagemErro>{erro}</MensagemErro>

        <Button
          type="submit"
          disabled={enviando}
          size="lg"
          className="rounded-full"
        >
          {enviando ? "Salvando..." : "Salvar nova senha"}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={enviando}
          size="lg"
          className="rounded-full"
          onClick={() => enviarCodigo()}
        >
          Reenviar código
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Não chegou? Confira o spam ou fale com a equipe do Empório.
        </p>
      </form>
    </TelaClube>
  );
}
