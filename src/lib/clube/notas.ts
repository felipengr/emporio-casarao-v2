"use client";

// Versão para navegador de apps/mobile/src/lib/notas.ts do repositório do app
// (ClubeCasarao/clube-casarao). Upload direto do navegador (sessão do cliente logado, RLS cuida do resto).

import { createClient } from "@/lib/supabase/client";
import { comprimirImagem } from "./imagem";

export const TAMANHO_MAXIMO = 10 * 1024 * 1024; // 10 MB, igual ao limite do bucket "notas"

type DadosNota = {
  data_compra: string;
  valor_declarado: number;
  numero_nota: string;
};

export async function enviarNota(
  clienteId: string,
  arquivo: File,
  dados: DadosNota,
): Promise<{ ok: true } | { ok: false; erro: string }> {
  const ehPdf = arquivo.type === "application/pdf";
  const conteudo = ehPdf ? arquivo : await comprimirImagem(arquivo);

  if (conteudo.size === 0) {
    return {
      ok: false,
      erro: "Não foi possível ler o arquivo. Tente fotografar de novo.",
    };
  }
  if (conteudo.size > TAMANHO_MAXIMO) {
    return {
      ok: false,
      erro: "O arquivo passou de 10 MB. Tente uma foto ou um PDF menor.",
    };
  }

  const caminho = `${clienteId}/${Date.now()}.${ehPdf ? "pdf" : "jpg"}`;
  const supabase = createClient();

  const { error: erroUpload } = await supabase.storage
    .from("notas")
    .upload(caminho, conteudo, {
      contentType: ehPdf ? "application/pdf" : "image/jpeg",
    });
  if (erroUpload)
    return {
      ok: false,
      erro: "Não foi possível enviar o arquivo. Verifique sua internet.",
    };

  const { error } = await supabase
    .from("notas_fiscais")
    .insert({ ...dados, foto_path: caminho });
  if (error) {
    // O arquivo já enviado fica no Storage: o cliente não tem permissão de apagar no bucket "notas".
    if (error.code === "23505")
      return { ok: false, erro: "Esta nota fiscal já foi enviada." };
    return {
      ok: false,
      erro: "Não foi possível registrar a nota. Tente novamente.",
    };
  }

  return { ok: true };
}
