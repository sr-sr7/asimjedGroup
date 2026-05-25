import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AsiMjed – مجموعة تطوير المواقع والتطبيقات",
  description:
    "نصمّم ونطوّر مواقع وتطبيقات احترافية تعكس هوية علامتك التجارية وتحقق أهدافك الرقمية.",
  keywords: ["تطوير مواقع", "تطبيقات", "تصميم", "AsiMjed"],
  openGraph: {
    title: "AsiMjed – مجموعة تطوير المواقع والتطبيقات",
    description: "نصمّم ونطوّر مواقع وتطبيقات احترافية",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
