"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(0,212,170,.10) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 70%, rgba(58,123,213,.12) 0%, transparent 60%), #0d1117",
      }}
    >
      {/* Floating orbs */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "linear-gradient(135deg,#00d4aa,#3a7bd5)",
          top: "10%",
          right: "-10%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "linear-gradient(135deg,#3a7bd5,#7ed957)",
          bottom: "15%",
          left: "-8%",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Logo with glow ring */}
        <div className="relative mb-8" style={{ animation: "fadeUp .8s ease both" }}>
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              inset: "-10px",
              background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)",
              borderRadius: "18px",
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
              animation: "spin 6s linear infinite",
            }}
          />
          <Image
            src="/logo.png"
            alt="AsiMjed"
            width={160}
            height={160}
            className="rounded-2xl relative z-10"
            style={{
              filter:
                "drop-shadow(0 0 28px rgba(0,212,170,.55)) drop-shadow(0 0 56px rgba(58,123,213,.3))",
            }}
            priority
          />
        </div>

        {/* Brand name */}
        <h1
          className="grad-text font-black tracking-widest mb-3"
          style={{
            fontFamily: "var(--font-orbitron), sans-serif",
            fontSize: "clamp(2.4rem,8vw,4.5rem)",
            animation: "fadeUp .8s .15s ease both",
            opacity: 0,
          }}
        >
          AsiMjed
        </h1>

        <p
          className="text-[#8ba3c7] font-light mb-2 tracking-wider"
          style={{
            fontSize: "clamp(1rem,2.5vw,1.25rem)",
            animation: "fadeUp .8s .25s ease both",
            opacity: 0,
          }}
        >
          مجموعة تطوير المواقع والتطبيقات
        </p>

        {/* Divider */}
        <div
          className="w-24 h-0.5 rounded-full my-6 grad-border"
          style={{ animation: "fadeUp .8s .35s ease both", opacity: 0 }}
        />

        <p
          className="text-[#8ba3c7] max-w-xl leading-relaxed mb-10"
          style={{
            fontSize: "clamp(.95rem,2vw,1.1rem)",
            animation: "fadeUp .8s .45s ease both",
            opacity: 0,
          }}
        >
          نحوّل أفكارك إلى تجارب رقمية استثنائية — مواقع احترافية، تطبيقات ذكية،
          وهويات بصرية تُميّزك في سوقك.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{ animation: "fadeUp .8s .55s ease both", opacity: 0 }}
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-[#0d1117] text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,170,.4)]"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
          >
            ابدأ مشروعك الآن
            <ArrowLeft size={18} />
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-[#e6f0ff] text-base border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#00d4aa]/40 hover:bg-white/10"
          >
            <Play size={16} />
            استعرض أعمالنا
          </a>
          <Link
            href="/about"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-[#8ba3c7] text-base border border-white/5 bg-transparent transition-all duration-300 hover:border-[#00d4aa]/30 hover:text-[#00d4aa]"
          >
            من نحن
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-8 justify-center mt-14"
          style={{ animation: "fadeUp .8s .65s ease both", opacity: 0 }}
        >
          {[
            { value: "50+", label: "مشروع منجز" },
            { value: "30+", label: "عميل راضٍ" },
            { value: "3+", label: "سنوات خبرة" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="grad-text font-black text-3xl"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-[#8ba3c7] text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        style={{ animation: "bounce 2s infinite" }}
      >
        <div className="w-px h-10 grad-border" />
        <span className="text-xs text-[#8ba3c7]">تمرير للأسفل</span>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
