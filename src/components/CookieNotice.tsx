"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STORAGE_KEY = "cookie-notice-ack";

export function CookieNotice() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // armazenamento indisponível (ex.: navegação privada); o aviso volta a aparecer na próxima visita
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <section
      aria-label={t.cookieNotice.message}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur-sm"
    >
      <div className="container flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:pr-28">
        <p className="text-sm text-muted-foreground">
          {t.cookieNotice.message}{" "}
          <Link
            href="/privacidade"
            className="text-highlight underline underline-offset-4"
          >
            {t.cookieNotice.link}
          </Link>
        </p>
        <Button
          onClick={dismiss}
          size="sm"
          className="self-start rounded-full sm:self-auto"
        >
          {t.cookieNotice.accept}
        </Button>
      </div>
    </section>
  );
}
