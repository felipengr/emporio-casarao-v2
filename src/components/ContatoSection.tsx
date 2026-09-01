"use client";

import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/components/Analytics";
import {
  AppleIcon,
  GoogleMapsIcon,
  WazeIcon,
} from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ContatoSectionProps {
  config: {
    address: string;
    phone: string;
    whatsapp: string;
    instagram: string;
  };
}

const STORE_LAT = -23.054255;
const STORE_LNG = -46.35723;

const directionsApps = [
  {
    id: "google_maps",
    labelKey: "googleMaps" as const,
    href: `https://www.google.com/maps/dir/?api=1&destination=${STORE_LAT},${STORE_LNG}&travelmode=driving`,
    Icon: GoogleMapsIcon,
  },
  {
    id: "waze",
    labelKey: "waze" as const,
    href: `https://waze.com/ul?ll=${STORE_LAT},${STORE_LNG}&navigate=yes`,
    Icon: WazeIcon,
  },
  {
    id: "apple_maps",
    labelKey: "appleMaps" as const,
    href: `https://maps.apple.com/?daddr=${STORE_LAT},${STORE_LNG}&dirflg=d`,
    Icon: AppleIcon,
  },
];

export function ContatoSection({ config }: ContatoSectionProps) {
  const { t } = useLanguage();
  const whatsappNumber = config.whatsapp.replace(/\D/g, "");

  return (
    <section id="contato" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t.contato.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.contato.endereco}</h3>
                    <p className="text-muted-foreground">{config.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.contato.telefone}</h3>
                    <p className="text-muted-foreground">{config.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.contato.horario}</h3>
                    <p className="text-muted-foreground">
                      {t.contato.horarioDias}
                      <br />
                      {t.contato.horarioDomingo}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t.contato.instagramLabel}
                    </h3>
                    <Link
                      href={config.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                      onClick={() =>
                        trackEvent("social_click", {
                          event_category: "engagement",
                          event_label: "Instagram Contato Section",
                          platform: "instagram",
                          location: "contato_section",
                        })
                      }
                    >
                      @emporiocasarao.piracaia
                    </Link>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg" asChild>
                <Link
                  href={`https://wa.me/55${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("contact_whatsapp", {
                      event_category: "engagement",
                      event_label: "WhatsApp Contato Section",
                      location: "contato_section",
                    })
                  }
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t.contato.cta}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=-23.054255,-46.357230&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title={t.contato.title}
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {t.contato.comoChegar}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {directionsApps.map((app) => (
                  <Button key={app.id} variant="outline" size="sm" asChild>
                    <Link
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("get_directions", {
                          event_category: "engagement",
                          event_label: t.contato[app.labelKey],
                          app: app.id,
                          location: "contato_section",
                        })
                      }
                    >
                      <app.Icon className="h-4 w-4 mr-1.5" />
                      {t.contato[app.labelKey]}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
