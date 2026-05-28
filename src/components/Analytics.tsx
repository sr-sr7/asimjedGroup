"use client";
import Script from "next/script";

// يشتغل فقط لو المتغيرات موجودة — حط IDs في .env.local لتفعيل كل خدمة
export default function Analytics() {
  const GA_ID      = process.env.NEXT_PUBLIC_GA_ID;
  const GTM_ID     = process.env.NEXT_PUBLIC_GTM_ID;
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {/* ─── Google Tag Manager ─── */}
      {GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      )}

      {/* ─── Google Analytics 4 (فقط لو GTM غير مفعّل) ─── */}
      {GA_ID && !GTM_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments)}
            gtag('js',new Date());
            gtag('config','${GA_ID}');
          `}</Script>
        </>
      )}

      {/* ─── Microsoft Clarity ─── */}
      {CLARITY_ID && (
        <Script id="clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;
            t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","${CLARITY_ID}");
        `}</Script>
      )}
    </>
  );
}
