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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ar" dir="rtl">
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
