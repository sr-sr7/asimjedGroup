import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsScripts from "@/components/Analytics";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const BASE = "https://www.asimjed.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "AsiMjed – مجموعة تطوير المواقع والتطبيقات",
    template: "%s | AsiMjed",
  },
  description:
    "نصمّم ونطوّر مواقع وتطبيقات احترافية تعكس هوية علامتك التجارية وتحقق أهدافك الرقمية. خدماتنا: تصميم مواقع، تطوير تطبيقات، متاجر إلكترونية، تحسين SEO.",
  keywords: [
    "تطوير مواقع", "تصميم مواقع", "تطبيقات الجوال",
    "متجر إلكتروني", "تحسين SEO", "AsiMjed",
    "برمجة مواقع السعودية", "شركة تطوير مواقع",
  ],
  authors: [{ name: "AsiMjed", url: BASE }],
  creator: "AsiMjed",
  openGraph: {
    title: "AsiMjed – مجموعة تطوير المواقع والتطبيقات",
    description: "نصمّم ونطوّر مواقع وتطبيقات احترافية تعكس هوية علامتك التجارية.",
    url: BASE,
    siteName: "AsiMjed",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AsiMjed – مجموعة تطوير المواقع والتطبيقات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AsiMjed – مجموعة تطوير المواقع والتطبيقات",
    description: "نصمّم ونطوّر مواقع وتطبيقات احترافية.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE,
  },
  verification: {
    google: "NaRTG_s6aHMcfcXibT2JMCyjSCe3qqlsVTX_Z3Mj5TQ",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AsiMjed",
  "alternateName": "آسيم جيد",
  "description": "نصمّم ونطوّر مواقع وتطبيقات احترافية تعكس هوية علامتك التجارية وتحقق أهدافك الرقمية.",
  "url": "https://www.asimjed.com",
  "logo": "https://www.asimjed.com/logo.png",
  "image": "https://www.asimjed.com/og-image.png",
  "telephone": "+966591088884",
  "email": "info@asimjed.com",
  "priceRange": "$$",
  "currenciesAccepted": "SAR, USD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHours": "Mo,Tu,We,Th,Su 09:00-18:00",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SA",
    "addressRegion": "المملكة العربية السعودية"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.7136,
    "longitude": 46.6753
  },
  "areaServed": {
    "@type": "Country",
    "name": "Saudi Arabia"
  },
  "serviceType": [
    "تطوير مواقع الويب",
    "تصميم مواقع الويب",
    "تطوير تطبيقات الجوال",
    "متاجر إلكترونية",
    "تحسين محركات البحث SEO",
    "هوية بصرية"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات AsiMjed الرقمية",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تطوير مواقع Next.js" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تطوير تطبيقات React Native" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "متاجر إلكترونية" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تحسين SEO" } }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Asim Jedaan",
    "jobTitle": "Full-Stack Developer & UI Designer",
    "url": "https://www.asimjed.com/about"
  },
  "sameAs": [
    "https://wa.me/966591088884"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* GTM noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}

        {/* ─── Analytics & Tracking ─── */}
        <AnalyticsScripts />
        <Analytics />
        <SpeedInsights />

        {/* ─── WhatsApp Float ─── */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
