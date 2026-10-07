"use client";

import Link from "next/link";
import { trackEvent } from "@/components/Analytics";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FooterProps {
  config: {
    siteName: string;
    instagram: string;
    instagramHandle: string;
  };
}

export function Footer({ config }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="container pt-4 pb-10 md:pb-12">
        <p className="font-serif text-2xl">{config.siteName}</p>
        <Link
          href={config.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-highlight"
          onClick={() =>
            trackEvent("social_click", {
              event_category: "engagement",
              event_label: "Instagram Footer",
              platform: "instagram",
              location: "footer",
            })
          }
        >
          {config.instagramHandle}
        </Link>

        <div className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} • {t.footer.tagline}
          </p>
          <p>
            {t.footer.developedBy}{" "}
            <Link
              href="https://nogueiradev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-highlight"
            >
              Felipe Nogueira
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
