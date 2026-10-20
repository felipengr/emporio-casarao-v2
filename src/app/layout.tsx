import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieNotice } from "@/components/CookieNotice";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { Analytics } from "@/components/Analytics";
import { seoConfig } from "@/lib/site-content";
import { generateSeoMetadata } from "@/components/SEO";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// Títulos usam só o peso 400: o arquivo fixo tem ~20 KB contra ~51 KB do
// variável com todos os pesos, e ele é pré-carregado junto da imagem do hero.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: "400",
});

const GA_MEASUREMENT_ID = "G-JN9ED1LCLY";
const GTM_ID = "GTM-KJ2SCNDS";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(seoConfig);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* GTM e gtag.js carregam depois do load para não disputar banda com
            a imagem principal. O stub do gtag abaixo continua afterInteractive,
            então eventos disparados antes disso ficam na fila do dataLayer. */}
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className="font-sans antialiased mx-auto"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <AccessibilityWidget />
            <CookieNotice />
            <Analytics measurementId={GA_MEASUREMENT_ID} />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
