import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "404 – الصفحة غير موجودة",
  description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(0,212,170,.08) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 70%, rgba(58,123,213,.10) 0%, transparent 60%), #0d1117",
        }}
      >
        {/* Floating orbs */}
        <div
          className="absolute w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5)", top: "10%", right: "-5%" }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{ background: "linear-gradient(135deg,#3a7bd5,#7ed957)", bottom: "15%", left: "-5%" }}
        />

        <div className="relative z-10 max-w-xl">
          {/* 404 number */}
          <div
            className="grad-text font-black leading-none mb-4 select-none"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(6rem,20vw,10rem)" }}
          >
            404
          </div>

          {/* Divider */}
          <div className="w-20 h-0.5 rounded-full grad-border mx-auto mb-8" />

          <h1 className="text-[#e6f0ff] font-black text-2xl md:text-3xl mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-[#8ba3c7] leading-relaxed mb-10 text-base md:text-lg">
            يبدو أن هذه الصفحة لا وجود لها، أو تم نقلها.
            <br />
            تحقق من الرابط أو عد للصفحة الرئيسية.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="px-7 py-3.5 rounded-2xl font-bold text-[#0d1117] text-base shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,170,.4)] transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
            >
              العودة للرئيسية
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-2xl font-bold text-[#8ba3c7] text-base border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#00d4aa]/40 hover:text-[#00d4aa] transition-all duration-300"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm text-[#4d6080]">
            {[
              { label: "خدماتنا", href: "/services" },
              { label: "أعمالنا", href: "/portfolio" },
              { label: "المدونة", href: "/blog" },
              { label: "من نحن", href: "/about" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#00d4aa] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
