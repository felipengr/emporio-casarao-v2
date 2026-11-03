// Espelha apps/mobile/src/lib/celular.ts do repositório do app (ClubeCasarao/clube-casarao).

/** Máscara de celular: "11974084935" → "(11) 97408-4935" (aceita entrada parcial). */
export function formatarCelular(valor: string) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
