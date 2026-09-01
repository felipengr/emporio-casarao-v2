"use client";

import {
  Accessibility,
  Contrast,
  Minus,
  Plus,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const FONT_STORAGE_KEY = "ec-a11y-font-step";
const CONTRAST_STORAGE_KEY = "ec-a11y-high-contrast";
const MIN_STEP = 0;
const MAX_STEP = 3;
const STEP_SIZE = 10; // % increase per step

const speechLangByLanguage: Record<string, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

// innerText respeita as quebras visuais de layout (título, parágrafo, botão
// viram linhas separadas). Transformamos cada linha numa "frase" própria pra
// forçar uma pausa real na leitura, em vez de tudo grudado como textContent faria.
function getReadableText(root: Element): string {
  const raw = root instanceof HTMLElement ? root.innerText : root.textContent;

  return (raw ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(". ");
}

export function AccessibilityWidget() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [fontStep, setFontStep] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSpeechSupported(
      typeof window !== "undefined" && "speechSynthesis" in window,
    );

    try {
      const storedFont = window.localStorage.getItem(FONT_STORAGE_KEY);
      if (storedFont) setFontStep(Number(storedFont));

      const storedContrast = window.localStorage.getItem(CONTRAST_STORAGE_KEY);
      if (storedContrast === "1") setHighContrast(true);
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue com os padrões
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize =
      fontStep === 0 ? "" : `${100 + fontStep * STEP_SIZE}%`;
    try {
      window.localStorage.setItem(FONT_STORAGE_KEY, String(fontStep));
    } catch {
      // ignora falha ao persistir
    }
  }, [fontStep]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "a11y-high-contrast",
      highContrast,
    );
    try {
      window.localStorage.setItem(
        CONTRAST_STORAGE_KEY,
        highContrast ? "1" : "0",
      );
    } catch {
      // ignora falha ao persistir
    }
  }, [highContrast]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleReadPage = () => {
    if (!speechSupported) return;

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const main = document.querySelector("main") ?? document.body;
    const text = getReadableText(main);
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLangByLanguage[language] ?? "pt-BR";
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsReading(true);
  };

  const resetAll = () => {
    setFontStep(0);
    setHighContrast(false);
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50"
    >
      <Button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.accessibility.label}
        aria-expanded={open}
        size="icon"
        className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-2xl bg-foreground text-background hover:bg-foreground/90"
      >
        <Accessibility className="h-6 w-6 md:h-7 md:w-7" />
      </Button>

      {open && (
        <div
          role="dialog"
          aria-label={t.accessibility.label}
          className="absolute bottom-full left-0 mb-3 w-72 rounded-lg border bg-popover text-popover-foreground shadow-2xl p-4 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">{t.accessibility.label}</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setOpen(false)}
              aria-label={t.accessibility.close}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {t.accessibility.fontSize}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={() => setFontStep((s) => Math.max(MIN_STEP, s - 1))}
                disabled={fontStep === MIN_STEP}
                aria-label={t.accessibility.decreaseFont}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="flex-1 text-center text-sm tabular-nums">
                {100 + fontStep * STEP_SIZE}%
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={() => setFontStep((s) => Math.min(MAX_STEP, s + 1))}
                disabled={fontStep === MAX_STEP}
                aria-label={t.accessibility.increaseFont}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            variant={highContrast ? "default" : "outline"}
            className="w-full justify-start"
            onClick={() => setHighContrast((v) => !v)}
            aria-pressed={highContrast}
          >
            <Contrast className="h-4 w-4 mr-2" />
            {t.accessibility.highContrast}
          </Button>

          <Button
            variant={isReading ? "default" : "outline"}
            className="w-full justify-start"
            onClick={toggleReadPage}
            disabled={!speechSupported}
            aria-pressed={isReading}
            title={speechSupported ? undefined : t.accessibility.notSupported}
          >
            {isReading ? (
              <VolumeX className="h-4 w-4 mr-2" />
            ) : (
              <Volume2 className="h-4 w-4 mr-2" />
            )}
            {isReading ? t.accessibility.stopReading : t.accessibility.readPage}
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground"
            onClick={resetAll}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            {t.accessibility.reset}
          </Button>
        </div>
      )}
    </div>
  );
}
