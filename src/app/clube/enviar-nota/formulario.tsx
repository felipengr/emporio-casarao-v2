"use client";

import { FileText, HelpCircle, Receipt } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MensagemErro, TelaClube } from "@/components/clube/TelaClube";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";
import { calcularCashback } from "@/lib/clube/cashback";
import { formatarReais, textoParaReais } from "@/lib/clube/dinheiro";
import { enviarNota, TAMANHO_MAXIMO } from "@/lib/clube/notas";

function hojeFormatado() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

function mascaraData(texto: string) {
  const d = texto.replace(/\D/g, "").slice(0, 8);
  if (d.length <= 2) return d;
  if (d.length <= 4) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
}

/** "12/10/2026" → "2026-10-12", ou null se a data não existir ou estiver no futuro. */
function dataParaIso(texto: string): string | null {
  const m = texto.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  const [dia, mes, ano] = m.slice(1).map(Number);
  const data = new Date(ano, mes - 1, dia);
  if (
    data.getFullYear() !== ano ||
    data.getMonth() !== mes - 1 ||
    data.getDate() !== dia
  )
    return null;
  if (data > new Date()) return null;
  return `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}

function mascaraValor(texto: string) {
  const centavos = Number(texto.replace(/\D/g, "").slice(0, 9) || "0");
  if (!centavos) return "";
  return (centavos / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function FormularioEnviarNota({
  clienteId,
  percentual,
}: {
  clienteId: string;
  percentual: number;
}) {
  const router = useRouter();
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [previa, setPrevia] = useState<string | null>(null);
  const [data, setData] = useState(hojeFormatado());
  const [valor, setValor] = useState("");
  const [numero, setNumero] = useState("");
  const [verExemplo, setVerExemplo] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  function escolherArquivo(lista: FileList | null) {
    const f = lista?.[0];
    if (!f) return;
    if (f.size > TAMANHO_MAXIMO) {
      setErro("O arquivo passou de 10 MB. Tente uma foto ou um PDF menor.");
      return;
    }
    setErro(null);
    setArquivo(f);
    setPrevia(f.type === "application/pdf" ? null : URL.createObjectURL(f));
  }

  async function enviar(evento: React.FormEvent) {
    evento.preventDefault();
    const dataIso = dataParaIso(data);
    const valorReais = textoParaReais(valor);
    if (!arquivo) return setErro("Fotografe ou envie a nota fiscal.");
    if (!dataIso) return setErro("Data da compra inválida.");
    if (!valorReais) return setErro("Informe o valor total da compra.");
    if (numero.length !== 6)
      return setErro(
        'Informe os 6 últimos números da chave de acesso (toque em "Onde encontro?").',
      );

    setErro(null);
    setEnviando(true);
    const resultado = await enviarNota(clienteId, arquivo, {
      data_compra: dataIso,
      valor_declarado: valorReais,
      numero_nota: numero,
    });
    setEnviando(false);

    if (!resultado.ok) return setErro(resultado.erro);
    router.push("/clube/conta");
  }

  const valorReais = textoParaReais(valor);

  return (
    <TelaClube sobretitulo="Ganhe cashback" titulo="Registre sua compra.">
      <form onSubmit={enviar} className="flex flex-col gap-4">
        <label className="flex cursor-pointer flex-col items-center gap-2 rounded-3xl border-2 border-dashed border-highlight bg-highlight/5 p-6 text-center">
          {previa ? (
            // biome-ignore lint/performance/noImgElement: prévia local (blob:) do arquivo escolhido, não vem de URL remota
            <img
              src={previa}
              alt="Prévia da nota"
              className="h-48 w-full rounded-xl object-cover"
            />
          ) : arquivo ? (
            <>
              <FileText className="h-9 w-9 text-highlight" />
              <p className="font-semibold">PDF selecionado</p>
            </>
          ) : (
            <>
              <Receipt className="h-9 w-9 text-highlight" />
              <p className="font-semibold">Fotografe ou envie sua nota</p>
              <p className="text-sm text-muted-foreground">
                JPG, PNG ou PDF • até 10 MB
              </p>
            </>
          )}
          <input
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={(e) => escolherArquivo(e.target.files)}
          />
        </label>

        <Field label="Data da compra">
          <Input
            placeholder="DD/MM/AAAA"
            value={data}
            onChange={(e) => setData(mascaraData(e.target.value))}
            inputMode="numeric"
            maxLength={10}
          />
        </Field>
        <Field label="Valor total (R$)">
          <Input
            placeholder="0,00"
            value={valor}
            onChange={(e) => setValor(mascaraValor(e.target.value))}
            inputMode="numeric"
          />
        </Field>
        <Field label="Final da chave de acesso (6 últimos números)">
          <Input
            placeholder="000000"
            value={numero}
            onChange={(e) =>
              setNumero(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            inputMode="numeric"
            maxLength={6}
          />
        </Field>
        <button
          type="button"
          onClick={() => setVerExemplo(!verExemplo)}
          className="-mt-2 flex items-center gap-1 self-start text-sm font-semibold text-highlight underline underline-offset-2"
        >
          <HelpCircle className="h-4 w-4" />
          Onde encontro?
        </button>
        {verExemplo ? (
          <p className="rounded-xl bg-card p-3 text-sm text-muted-foreground">
            É o número grande, em blocos de 4 dígitos, perto do QR Code da nota
            fiscal (NFC-e) ou do extrato SAT. Informe só os 6 últimos dígitos.
          </p>
        ) : null}

        <div className="flex flex-col gap-1 rounded-2xl bg-highlight/10 p-4">
          <p className="text-sm font-semibold text-highlight">
            A análise pode levar até 1 dia útil.
          </p>
          {valorReais ? (
            <p className="text-sm font-semibold text-highlight">
              Cashback previsto ({percentual}%):{" "}
              {formatarReais(calcularCashback(valorReais, percentual))}
            </p>
          ) : null}
        </div>

        <MensagemErro>{erro}</MensagemErro>

        <Button
          type="submit"
          disabled={enviando}
          size="lg"
          className="rounded-full"
        >
          {enviando ? "Enviando..." : "Enviar para análise →"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          O cashback é liberado após a conferência.
        </p>
      </form>
    </TelaClube>
  );
}
