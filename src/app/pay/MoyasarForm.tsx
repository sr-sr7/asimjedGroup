"use client";
import { useRef } from "react";
import Script from "next/script";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Moyasar: any;
  }
}

export default function MoyasarForm() {
  const initialized = useRef(false);

  const handleScriptLoad = () => {
    if (initialized.current) return;
    initialized.current = true;

    if (typeof window === "undefined" || !window.Moyasar) return;

    window.Moyasar.init({
      element: ".moyasar-form-holder",
      amount: 1000, // 10 ريال (بالهللة)
      currency: "SAR",
      description: "اختبار الدفع الإلكتروني - AsiMjed",
      publishable_api_key: process.env.NEXT_PUBLIC_MOYASAR_KEY ?? "",
      callback_url: `${window.location.origin}/pay/success`,
      methods: ["creditcard", "applepay", "stcpay"],
      apple_pay: {
        country: "SA",
        label: "AsiMjed",
        validate_merchant_url: "https://api.moyasar.com/v1/applepay/initiate",
      },
    });
  };

  return (
    <>
      {/* Moyasar CSS */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://cdn.moyasar.com/mpf/1.14.0/moyasar.css"
      />
      <Script
        src="https://cdn.moyasar.com/mpf/1.14.0/moyasar.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div className="moyasar-form-holder" />
    </>
  );
}
