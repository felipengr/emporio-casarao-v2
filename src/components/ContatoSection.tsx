'use client';

import Link from 'next/link';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface ContatoSectionProps {
  config: {
    address: string;
    phone: string;
    whatsapp: string;
    instagram: string;
  };
}

export function ContatoSection({ config }: ContatoSectionProps) {
  const { t } = useLanguage();
  const whatsappNumber = config.whatsapp.replace(/\D/g, '');

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
                      {t.contato.horarioDias}<br />
                      {t.contato.horarioDomingo}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.contato.instagramLabel}</h3>
                    <Link
                      href={config.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @emporiocasarao.piracaia
                    </Link>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-6"
                size="lg"
                asChild
              >
                <Link
                  href={`https://wa.me/55${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t.contato.cta}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.1234567890!2d-46.3585!3d-23.0547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzE2LjkiUyA0NsKwMjEnMzAuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}