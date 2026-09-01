'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: Record<string, any>[];
  }
}

function AnalyticsContent({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      window.gtag('config', measurementId, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function Analytics({ measurementId }: { measurementId: string }) {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent measurementId={measurementId} />
    </Suspense>
  );
}

// Função helper para enviar eventos customizados.
// Envia para o dataLayer (lido pelo Google Tag Manager) e também
// direto pro gtag.js, para não perder o rastreio já existente no GA4.
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventParams });

  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};