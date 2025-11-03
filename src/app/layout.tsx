import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NetlifyIdentity from "@/components/Netlify/NetlifyIdentity";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/Analytics";
import { getSeoConfig } from "@/lib/cms";
import { generateSeoMetadata } from "@/components/SEO";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = "G-JN9ED1LCLY";

export async function generateMetadata(): Promise<Metadata> {
  const seoConfig = await getSeoConfig();
  return generateSeoMetadata(seoConfig);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <NetlifyIdentity />
          <Analytics measurementId={GA_MEASUREMENT_ID} />
        </ThemeProvider>
      </body>
    </html>
  );
}