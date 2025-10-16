'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function NetlifyIdentity() {
  useEffect(() => {
    let tries = 0;
    const id = window.setInterval(() => {
      const w = window as any;
      if (w.netlifyIdentity) {
        w.netlifyIdentity.on('login', () => {
          window.location.href = '/admin/index.html';
        });
        clearInterval(id);
      }
      if (++tries > 40) clearInterval(id); // timeout ~12s
    }, 300);
    return () => clearInterval(id);
  }, []);

  return (
    <Script
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      strategy="afterInteractive"
    />
  );
}
