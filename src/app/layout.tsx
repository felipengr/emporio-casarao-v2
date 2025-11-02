import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NetlifyIdentity from "@/components/Netlify/NetlifyIdentity";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empório Casarão | Produtos Artesanais de Piracaia",
  description: "Doces, antepastos, temperos e delícias locais de Piracaia - SP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto max-w-[1920px]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <NetlifyIdentity />
        </ThemeProvider>
      </body>
    </html>
  );
}