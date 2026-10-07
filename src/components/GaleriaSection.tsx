"use client";

import Image from "next/image";
import { trackEvent } from "@/components/Analytics";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { InstagramPhoto } from "@/lib/instagram";

interface PhotoMedia {
  image: string;
}

interface GaleriaSectionProps {
  media: PhotoMedia[];
  instagramPhotos?: InstagramPhoto[] | null;
  instagramUrl: string;
}

const MAX_PHOTOS = 3;

export function GaleriaSection({
  media,
  instagramPhotos,
  instagramUrl,
}: GaleriaSectionProps) {
  const { t } = useLanguage();

  const photos: { image: string; caption?: string; permalink?: string }[] = (
    instagramPhotos && instagramPhotos.length >= MAX_PHOTOS
      ? instagramPhotos
      : media.map((photo, index) => ({
          ...photo,
          caption: t.galeria.captions[index],
        }))
  ).slice(0, MAX_PHOTOS);

  const trackInstagram = () =>
    trackEvent("social_click", {
      event_category: "engagement",
      event_label: "Instagram Galeria",
      platform: "instagram",
      location: "galeria",
    });

  return (
    <section id="galeria" className="py-10 md:py-14">
      <div className="container">
        <AnimateOnScroll className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-highlight">
              {t.galeria.eyebrow}
            </p>
            <h2 className="mt-3 text-[29px] leading-tight md:text-[43px]">
              {t.galeria.title}
            </h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagram}
            className="pb-2 text-sm text-highlight hover:underline underline-offset-4"
          >
            {t.galeria.viewOnInstagram} ↗
          </a>
        </AnimateOnScroll>

        <div className="-mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:scroll-px-0 sm:px-0 sm:pb-0 md:gap-6">
          {photos.map((photo, index) => {
            const image = (
              <Image
                src={photo.image}
                alt={photo.caption ?? `${t.galeria.title} ${index + 1}`}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            );

            return (
              <AnimateOnScroll
                key={photo.image}
                delay={index * 0.1}
                className="group relative aspect-[400/245] w-[82%] shrink-0 snap-start overflow-hidden rounded-[20px] bg-muted sm:w-auto"
              >
                {photo.permalink ? (
                  <a
                    href={photo.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackInstagram}
                    aria-label={photo.caption ?? t.galeria.viewOnInstagram}
                  >
                    {image}
                  </a>
                ) : (
                  image
                )}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
