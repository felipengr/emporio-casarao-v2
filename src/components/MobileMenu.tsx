"use client";

import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { MobileMenuPanelProps } from "@/components/MobileMenuPanel";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const MobileMenuPanel = dynamic(() => import("@/components/MobileMenuPanel"), {
  ssr: false,
});

export function MobileMenu({ config }: Pick<MobileMenuPanelProps, "config">) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  // O painel só é baixado no primeiro clique e depois fica montado,
  // para a animação de fechar funcionar.
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setLoaded(true);
          setOpen(true);
        }}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">{t.mobileMenu.openMenu}</span>
      </Button>
      {loaded && (
        <MobileMenuPanel config={config} open={open} onOpenChange={setOpen} />
      )}
    </>
  );
}
