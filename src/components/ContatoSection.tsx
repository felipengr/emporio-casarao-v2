"use client";

import { trackEvent } from "@/components/Analytics";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ContatoSectionProps {
  config: {
    addressLines: readonly string[];
    phone: string;
    whatsapp: string;
  };
}

const STORE_LAT = -23.054255;
const STORE_LNG = -46.35723;

const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${STORE_LAT},${STORE_LNG}&travelmode=driving`;

const otherDirectionsApps = [
  {
    id: "waze",
    labelKey: "waze" as const,
    href: `https://waze.com/ul?ll=${STORE_LAT},${STORE_LNG}&navigate=yes`,
  },
  {
    id: "apple_maps",
    labelKey: "appleMaps" as const,
    href: `https://maps.apple.com/?daddr=${STORE_LAT},${STORE_LNG}&dirflg=d`,
  },
];

export function ContatoSection({ config }: ContatoSectionProps) {
  const { t } = useLanguage();
  const whatsappNumber = config.whatsapp.replace(/\D/g, "");

  const trackDirections = (app: string, label: string) =>
    trackEvent("get_directions", {
      event_category: "engagement",
      event_label: label,
      app,
      location: "contato_section",
    });

  return (
    <section id="contato" className="py-10 md:py-14">
      <div className="container">
        <AnimateOnScroll>
          <div className="grid gap-6 rounded-3xl bg-primary p-6 text-primary-foreground md:grid-cols-2 md:gap-12 md:px-6 md:py-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] opacity-90">
                {t.contato.eyebrow}
              </p>
              <h2 className="mt-2 text-[29px] leading-tight md:text-[43px]">
                {t.contato.title}
              </h2>
              <address className="mt-3 text-sm not-italic leading-relaxed">
                {config.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDirections("google_maps", "Google Maps")}
                  className="inline-flex h-12 items-center rounded-full bg-background px-6 text-sm text-foreground transition-opacity hover:opacity-90"
                >
                  {t.contato.comoChegar} ↗
                </a>
                <p className="text-xs opacity-90">
                  {t.contato.tambemPor}{" "}
                  {otherDirectionsApps.map((app, index) => (
                    <span key={app.id}>
                      {index > 0 && " · "}
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackDirections(app.id, t.contato[app.labelKey])
                        }
                        className="underline underline-offset-2 hover:no-underline"
                      >
                        {t.contato[app.labelKey]}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="text-sm leading-relaxed md:pt-12">
              <p>{t.contato.horarioDias}</p>
              <p>{t.contato.horarioDomingo}</p>
              <a
                href={`https://wa.me/55${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2"
                onClick={() =>
                  trackEvent("contact_whatsapp", {
                    event_category: "engagement",
                    event_label: "WhatsApp Contato Section",
                    location: "contato_section",
                  })
                }
              >
                {config.phone}
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
