"use client";

import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/components/Analytics";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  type ProdutoCategoria,
  produtosCategorias,
  type produtosMedia,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";

interface ProdutosDestaqueProps {
  media: typeof produtosMedia;
  whatsapp: string;
}

export function ProdutosDestaque({ media, whatsapp }: ProdutosDestaqueProps) {
  const { t } = useLanguage();
  const [categoria, setCategoria] = useState<ProdutoCategoria>(
    produtosCategorias[0],
  );
  const whatsappNumber = whatsapp.replace(/\D/g, "");

  const items = media
    .filter((produto) => produto.category === categoria)
    .map((produto) => ({ ...produto, ...t.produtos.items[produto.id] }));

  return (
    <section id="produtos" className="py-16 md:py-20">
      <div className="container">
        <AnimateOnScroll>
          <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
            {t.produtos.eyebrow}
          </p>
          <h2 className="mt-3 text-[29px] md:text-[43px] leading-tight">
            {t.produtos.title}
          </h2>
          <p className="mt-1 text-muted-foreground">{t.produtos.subtitle}</p>
        </AnimateOnScroll>

        <div
          role="tablist"
          aria-label={t.produtos.categoriesLabel}
          className="-mx-4 mt-6 flex gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0"
        >
          {produtosCategorias.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              id={`tab-${cat}`}
              aria-selected={cat === categoria}
              aria-controls="produtos-lista"
              onClick={() => setCategoria(cat)}
              className={cn(
                "h-9 shrink-0 rounded-full px-4 text-[13px] whitespace-nowrap transition-colors",
                cat === categoria
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70",
              )}
            >
              {t.produtos.categories[cat]}
            </button>
          ))}
        </div>

        <div
          id="produtos-lista"
          role="tabpanel"
          aria-labelledby={`tab-${categoria}`}
          className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((produto) => (
            <article key={produto.id} className="group">
              <div className="relative aspect-[400/245] overflow-hidden rounded-[20px] bg-muted">
                <Image
                  src={produto.image}
                  alt={produto.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[25px] leading-tight">{produto.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {produto.description}
              </p>
              <a
                href={`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(
                  t.produtos.whatsappMessage.replace("{produto}", produto.name),
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-highlight hover:underline underline-offset-4"
                onClick={() =>
                  trackEvent("contact_whatsapp", {
                    event_category: "engagement",
                    event_label: `Produto ${produto.id}`,
                    location: "produtos",
                  })
                }
              >
                {t.produtos.cta} ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
