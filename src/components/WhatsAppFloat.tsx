'use client';

import Link from 'next/link';
import { trackEvent } from '@/components/Analytics';

interface WhatsAppFloatProps {
  phoneNumber: string;
}

export function WhatsAppFloat({ phoneNumber }: WhatsAppFloatProps) {
  const whatsappNumber = phoneNumber.replace(/\D/g, '');
  
  const handleClick = () => {
    trackEvent('contact_whatsapp', {
      event_category: 'engagement',
      event_label: 'WhatsApp Float Button',
      location: 'floating_button',
    });
  };

  return (
    <Link
      href={`https://wa.me/55${whatsappNumber}?text=Olá! Vim através do site e gostaria de mais informações.`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group animate-bounce hover:animate-none"
      style={{ position: 'fixed' }}
    >
      <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 md:h-9 md:w-9"
          fill="white"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.963 7.637 1.963h0.013c8.837 0 16-7.163 16-16s-7.163-16-15.838-16zM16 29.288c-2.475 0-4.913-0.688-7.025-1.988l-0.5-0.3-5.238 1.35 1.4-5.063-0.325-0.525c-1.413-2.238-2.162-4.825-2.162-7.475 0-7.763 6.325-14.087 14.1-14.087s14.1 6.325 14.1 14.088c0 7.762-6.325 14.087-14.1 14.087zM23.012 19.238c-0.387-0.2-2.3-1.138-2.662-1.262-0.363-0.138-0.625-0.2-0.888 0.2s-1.025 1.262-1.25 1.525c-0.238 0.262-0.463 0.3-0.85 0.1s-1.663-0.613-3.163-1.95c-1.175-1.038-1.963-2.325-2.188-2.713s-0.025-0.613 0.175-0.813c0.175-0.175 0.388-0.462 0.588-0.688 0.188-0.225 0.25-0.387 0.375-0.65 0.125-0.262 0.063-0.488-0.025-0.688s-0.888-2.137-1.213-2.925c-0.313-0.775-0.638-0.663-0.888-0.675-0.225-0.012-0.488-0.012-0.75-0.012s-0.675 0.1-1.037 0.487c-0.363 0.388-1.388 1.35-1.388 3.3s1.413 3.825 1.613 4.088c0.2 0.262 2.8 4.275 6.787 5.987 0.95 0.413 1.688 0.65 2.263 0.838 0.95 0.3 1.813 0.262 2.5 0.162 0.762-0.113 2.3-0.938 2.625-1.85s0.325-1.688 0.225-1.85c-0.1-0.175-0.363-0.275-0.75-0.475z"/>
        </svg>
        <span className="sr-only">Fale no WhatsApp</span>
      </div>
      
      <div className="hidden md:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 whitespace-nowrap">
          Fale conosco!
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
        </div>
      </div>
    </Link>
  );
}