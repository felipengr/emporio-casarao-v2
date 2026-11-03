import type { Metadata } from "next";
import Image from "next/image";
import { TelaClube } from "@/components/clube/TelaClube";
import { generateSeoMetadata } from "@/components/SEO";
import { buscarPromocoes, urlImagemPromocao } from "@/lib/clube/dados";
import { formatarReais } from "@/lib/clube/dinheiro";
import { seoConfig, siteConfig } from "@/lib/site-content";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Promoções do Clube Casarão | ${siteConfig.siteName}`,
    "Promoções exclusivas para membros do Clube Casarão.",
    undefined,
    "/clube/promocoes",
  );
}

export default async function PromocoesClubePage() {
  const promocoes = await buscarPromocoes();

  return (
    <TelaClube
      sobretitulo="Promoções"
      titulo="Só para membros."
      voltarPara="/clube/conta"
      largura="max-w-2xl"
    >
      {promocoes.length === 0 ? (
        <p className="rounded-3xl bg-card p-6 text-sm text-muted-foreground">
          Nenhuma promoção ativa agora. Fique de olho: novidades chegam por
          aqui.
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          {
            await Promise.all(
              promocoes.map(async (promo) => {
                const imagem = await urlImagemPromocao(promo.imagem_path);
                const subtitulo =
                  promo.desconto_texto ??
                  (promo.cashback_extra > 0
                    ? `+${promo.cashback_extra}% de cashback`
                    : "Benefício exclusivo");
                return (
                  <div
                    key={promo.id}
                    className="overflow-hidden rounded-3xl bg-card"
                  >
                    <div className="relative aspect-video bg-highlight/20">
                      {imagem ? (
                        <Image
                          src={imagem}
                          alt={promo.titulo}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-4xl text-highlight">
                          ✦
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-full bg-highlight px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-highlight-foreground">
                        {promo.destaque
                          ? "Destaque da semana"
                          : "Oferta para membros"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 p-5">
                      <p className="font-serif text-lg">{promo.titulo}</p>
                      {promo.preco_promocional ? (
                        <p className="text-xl font-bold text-highlight">
                          {promo.preco_original ? (
                            <span className="mr-2 text-base font-normal text-muted-foreground line-through">
                              {formatarReais(Number(promo.preco_original))}
                            </span>
                          ) : null}
                          {formatarReais(Number(promo.preco_promocional))}
                        </p>
                      ) : null}
                      <p className="text-sm text-muted-foreground">
                        {subtitulo} • Válido até{" "}
                        {new Date(`${promo.fim}T00:00:00`).toLocaleDateString(
                          "pt-BR",
                          { day: "2-digit", month: "short" },
                        )}
                      </p>
                      {promo.descricao ? (
                        <p className="mt-2 text-sm leading-relaxed">
                          {promo.descricao}
                        </p>
                      ) : null}
                      {promo.cashback_extra > 0 ? (
                        <p className="text-sm">
                          Ganhe +{promo.cashback_extra}% de cashback nesta
                          compra.
                        </p>
                      ) : null}
                      <p className="mt-1 text-sm font-semibold">
                        Apresente seu CPF no caixa para aproveitar.
                      </p>
                    </div>
                  </div>
                );
              }),
            )
          }
        </div>
      )}
    </TelaClube>
  );
}
