"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  MensagemAviso,
  MensagemErro,
  TelaClube,
} from "@/components/clube/TelaClube";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";
import { confirmarCodigo, reenviarCodigo } from "@/lib/clube/auth";

export function FormularioVerificarEmail({ email }: { email: string }) {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [confirmando, setConfirmando] = useState(false);
  const [reenviando, setReenviando] = useState(false);

  async function confirmar(evento: React.FormEvent) {
    evento.preventDefault();
    if (codigo.length < 6) {
      setErro("Digite o código completo que chegou no seu e-mail.");
      return;
    }
    setErro(null);
    setConfirmando(true);
    const resultado = await confirmarCodigo(email, codigo);
    setConfirmando(false);
    if (!resultado.ok) {
      setErro(resultado.erro);
      return;
    }
    router.push("/clube/conta");
  }

  async function reenviar() {
    setErro(null);
    setAviso(null);
    setReenviando(true);
    const resultado = await reenviarCodigo(email);
    setReenviando(false);
    if (resultado.ok)
      setAviso("Enviamos um novo código. Confira também a caixa de spam.");
    else setErro(resultado.erro);
  }

  return (
    <TelaClube sobretitulo="Quase lá" titulo="Confirme seu e-mail.">
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        Enviamos um código para{" "}
        <span className="font-semibold text-foreground">{email}</span>. Digite-o
        abaixo para ativar sua conta.
      </p>

      <form onSubmit={confirmar} className="flex flex-col gap-4">
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

        <MensagemErro>{erro}</MensagemErro>
        <MensagemAviso>{aviso}</MensagemAviso>

        <Button
          type="submit"
          disabled={confirmando}
          size="lg"
          className="rounded-full"
        >
          {confirmando ? "Confirmando..." : "Confirmar e-mail"}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={reenviando}
          onClick={reenviar}
          size="lg"
          className="rounded-full"
        >
          {reenviando ? "Enviando..." : "Reenviar código"}
        </Button>
      </form>
    </TelaClube>
  );
}
