'use client';

import { Fragment } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { languages } from '@/lib/i18n/translations';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <fieldset className={cn('items-center gap-1.5 text-sm', className)}>
      <legend className="sr-only">{t.languageSwitcher.label}</legend>
      {languages.map((option, index) => (
        <Fragment key={option.code}>
          {index > 0 && (
            <span aria-hidden="true" className="text-muted-foreground">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-label={option.label}
            aria-pressed={option.code === language}
            className={cn(
              'px-0.5 transition-colors hover:text-highlight',
              option.code === language
                ? 'font-semibold text-foreground'
                : 'text-muted-foreground',
            )}
          >
            {option.code.toUpperCase()}
          </button>
        </Fragment>
      ))}
    </fieldset>
  );
}
