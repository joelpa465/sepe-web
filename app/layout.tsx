import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NewsletterBanner from "@/components/NewsletterBanner";
import AdBlockDetectorWrapper from "@/components/AdBlockDetectorWrapper";
import { ADS_ENABLED } from "@/lib/config";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SEPE - Guía Completa de Trámites, Ayudas y Cursos",
    template: "%s | SEPE",
  },
  description: "Guía completa del SEPE: citas previas, cursos por CCAA, ayudas, prestaciones, subsidios, pensiones, trámites administrativos y más. Tutoriales paso a paso actualizados 2024.",
  keywords: ["sepe", "trámites sepe", "citas previas sepe", "ayudas sepe", "prestaciones sepe", "subsidios sepe", "pensiones", "cursos sepe", "curso inem", "ingenio mínimo vital", "modelo 600", "certificado penales", "sellar paro"],
  authors: [{ name: "SEPE" }],
  creator: "SEPE",
  publisher: "SEPE",
  metadataBase: new URL("https://sepe.es"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sepe.es",
    title: "SEPE - Guía Completa de Trámites, Ayudas y Cursos",
    description: "Todo sobre el SEPE: citas previas, cursos, ayudas, prestaciones, subsidios y más. Tutoriales paso a paso 2024.",
    siteName: "SEPE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos SEPE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEPE - Guía Completa de Trámites, Ayudas y Cursos",
    description: "Todo sobre el SEPE: citas previas, cursos, ayudas, prestaciones, subsidios. Tutoriales paso a paso 2024.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Aquí puedes agregar códigos de verificación cuando los tengas
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        {/* Google Analytics - Scripts directos en HTML para que aparezcan en el HTML estático */}
        {/* @ts-ignore - Script directo en HTML para visibilidad en HTML estático */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BKCNGX9D46"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BKCNGX9D46');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {/* Script de AdSense - Solo se carga si los anuncios están habilitados */}
        {ADS_ENABLED && (
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2866743279585663"
            strategy="beforeInteractive"
            async
            crossOrigin="anonymous"
          />
        )}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <CookieBanner />
        <NewsletterBanner />
        {/* AdBlock Detector - Solo se activa si los anuncios están habilitados */}
        <AdBlockDetectorWrapper />
      </body>
    </html>
  );
}
