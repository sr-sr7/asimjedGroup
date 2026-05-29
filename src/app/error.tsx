"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(255,80,80,.06) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 70%, rgba(58,123,213,.10) 0%, transparent 60%), #0d1117",
      }}
    >
      {/* Orb */}
      <div
        className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg,#ff5050,#3a7bd5)", top: "15%", left: "50%", transform: "translateX(-50%)" }}
      />

      <div className="relative z-10 max-w-lg">
        {/* Icon */}
        <div
          className="text-7xl md:text-8xl font-black mb-4 select-none"
          style={{ fontFamily: "Orbitron, sans-serif", color: "#ff6b6b" }}
        >
          ⚠
        </div>

        <div className="w-16 h-0.5 rounded-full mx-auto mb-8" style={{ background: "linear-gradient(135deg,#ff6b6b,#3a7bd5)" }} />

        <h1 className="text-[#e6f0ff] font-black text-2xl md:text-3xl mb-4">
          حدث خطأ غير متوقع
        </h1>
        <p className="text-[#8ba3c7] leading-relaxed mb-10 text-base">
          نعتذر عن هذا الخطأ. يمكنك المحاولة مجدداً أو العودة للصفحة الرئيسية.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="px-7 py-3.5 rounded-2xl font-bold text-[#0d1117] text-base shadow-lg hover:scale-105 transition-all duration-300"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
          >
            حاول مجدداً
          </button>
          <Link
            href="/"
            className="px-7 py-3.5 rounded-2xl font-bold text-[#8ba3c7] text-base border border-white/10 bg-white/5 hover:border-[#00d4aa]/40 hover:text-[#00d4aa] transition-all duration-300"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
