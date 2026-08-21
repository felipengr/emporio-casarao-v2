'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Language } from './translations';

const STORAGE_KEY = 'ec-language';
const SUPPORTED: Language[] = ['pt', 'en', 'es'];

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)['pt'];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectBrowserLanguage(): Language {
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith('en')) return 'en';
  if (nav.startsWith('es')) return 'es';
  return 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && SUPPORTED.includes(stored)) {
      setLanguageState(stored);
    } else {
      setLanguageState(detectBrowserLanguage());
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
