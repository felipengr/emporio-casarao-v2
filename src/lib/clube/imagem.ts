// Versão para navegador de apps/mobile/src/lib/imagem.ts do repositório do app
// (ClubeCasarao/clube-casarao): mesma regra de compressão (até 1600px, JPEG 60%), via <canvas>.

/** Reduz a foto (no máximo `larguraMaxima` px, JPEG 60%): fica com ~200–400 KB. */
export async function comprimirImagem(
  arquivo: File,
  larguraMaxima = 1600,
): Promise<Blob> {
  const bitmap = await createImageBitmap(arquivo);
  const escala =
    bitmap.width > larguraMaxima ? larguraMaxima / bitmap.width : 1;
  const largura = Math.round(bitmap.width * escala);
  const altura = Math.round(bitmap.height * escala);

  const canvas = document.createElement("canvas");
  canvas.width = largura;
  canvas.height = altura;
  const contexto = canvas.getContext("2d");
  if (!contexto) return arquivo;
  contexto.drawImage(bitmap, 0, 0, largura, altura);

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.6),
  );
  return blob ?? arquivo;
}
