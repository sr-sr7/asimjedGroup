import type { NextConfig } from "next";

const cspValue = [
  "default-src 'self'",
  // Next.js needs unsafe-inline for runtime chunks; nonce approach requires middleware
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://dev.to https://*.supabase.co https://translate.googleapis.com https://vitals.vercel-insights.com https://*.vercel-analytics.com https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com/recaptcha/ https://*.clarity.ms",
  "frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com",
  "worker-src 'self' blob: https://*.clarity.ms",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Content Security Policy — blocks XSS and injection attacks
  { key: "Content-Security-Policy", value: cspValue },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // HSTS — force HTTPS for 2 years
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Limit referrer info sent to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable unused browser APIs
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // DNS prefetch for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Cross-Origin Opener Policy — prevents cross-origin window access
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
