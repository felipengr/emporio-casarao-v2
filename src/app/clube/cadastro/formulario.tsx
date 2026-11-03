"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RequisitosSenha } from "@/components/clube/RequisitosSenha";
import { MensagemErro, TelaClube } from "@/components/clube/TelaClube";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";
import { cadastrar } from "@/lib/clube/auth";
import { formatarCelular } from "@/lib/clube/celular";
import { cpfValido, formatarCpf } from "@/lib/clube/cpf";
import { senhaForte } from "@/lib/clube/senha";

type Erros = Partial<
  Record<"nome" | "cpf" | "email" | "celular" | "senha" | "termos", string>
>;

export function FormularioCadastro() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [aceitou, setAceitou] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [erroGeral, setErroGeral] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  function validar(): Erros {
    const e: Erros = {};
    if (nome.trim().split(/\s+/).length < 2)
      e.nome = "Digite seu nome completo.";
    if (!cpfValido(cpf)) e.cpf = "CPF inválido.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) e.email = "E-mail inválido.";
    if (celular.replace(/\D/g, "").length < 10) e.celular = "Celular inválido.";
    if (!senhaForte(senha))
      e.senha = "A senha ainda não cumpre todos os requisitos.";
    if (!aceitou) e.termos = "É preciso aceitar o regulamento para participar.";
    return e;
  }

  async function criarConta(evento: React.FormEvent) {
    evento.preventDefault();
    const e = validar();
    setErros(e);
    setErroGeral(e.termos ?? null);
    if (Object.keys(e).length > 0) return;

    setEnviando(true);
    const resultado = await cadastrar({ nome, cpf, email, celular, senha });
    setEnviando(false);

    if (!resultado.ok) {
      setErroGeral(resultado.erro);
      return;
    }
    const emailLimpo = email.trim().toLowerCase();
    if (resultado.precisaConfirmarEmail) {
      router.push(
        `/clube/verificar-email?email=${encodeURIComponent(emailLimpo)}`,
      );
    } else {
      router.push("/clube/conta");
    }
  }

  return (
    <TelaClube sobretitulo="Seus dados" titulo="Faça parte do clube.">
      <form onSubmit={criarConta} className="flex flex-col gap-4">
        <Field label="Nome completo" erro={erros.nome}>
          <Input
            placeholder="Digite nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="CPF" erro={erros.cpf}>
          <Input
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(formatarCpf(e.target.value))}
            inputMode="numeric"
            maxLength={14}
          />
        </Field>
        <Field label="E-mail" erro={erros.email}>
          <Input
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field label="Celular" erro={erros.celular}>
          <Input
            placeholder="(00) 00000-0000"
            value={celular}
            onChange={(e) => setCelular(formatarCelular(e.target.value))}
            inputMode="tel"
            autoComplete="tel"
          />
        </Field>
        <Field label="Senha" erro={erros.senha}>
          <Input
            placeholder="Crie uma senha forte"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
        </Field>
        <RequisitosSenha senha={senha} />

        <label className="flex items-start gap-2 text-sm leading-relaxed">
          <input
            type="checkbox"
            checked={aceitou}
            onChange={() => setAceitou(!aceitou)}
            className="mt-1 h-4 w-4 accent-highlight"
          />
          <span>
            Aceito o{" "}
            <Link
              href="/clube/regulamento"
              className="font-semibold text-highlight underline underline-offset-2"
            >
              regulamento
            </Link>{" "}
            e a{" "}
            <Link
              href="/clube/privacidade"
              className="font-semibold text-highlight underline underline-offset-2"
            >
              política de privacidade
            </Link>
          </span>
        </label>

        <MensagemErro>{erroGeral}</MensagemErro>

        <Button
          type="submit"
          disabled={enviando}
          size="lg"
          className="mt-2 rounded-full"
        >
          {enviando ? "Criando conta..." : "Criar conta"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Depois, confirme o código enviado ao e-mail.
        </p>
        <p className="text-center text-sm">
          Já tem conta?{" "}
          <Link
            href="/clube/entrar"
            className="font-semibold text-highlight underline underline-offset-2"
          >
            Entrar
          </Link>
        </p>
      </form>
    </TelaClube>
  );
}
