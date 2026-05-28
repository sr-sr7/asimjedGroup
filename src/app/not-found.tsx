import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] min-h-screen flex items-center justify-center px-6 py-24">
        {/* Background glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #00d4aa, transparent 70%)" }} />
        </div>

        <div className="text-center max-w-lg relative z-10">
          {/* 404 number */}
          <div
            className="grad-text font-black select-none mb-2"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(6rem,20vw,10rem)", lineHeight: 1 }}
          >
            404
          </div>

          <h1 className="text-[#e6f0ff] font-black text-xl mb-3">
            الصفحة غير موجودة
          </h1>
          <p className="text-[#8ba3c7] leading-relaxed mb-8">
            يبدو أن هذه الصفحة لا وجود لها، أو تم نقلها.<br />
            تحقق من الرابط أو عد للصفحة الرئيسية.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl font-bold text-[#0d1117] transition-all duration-300
                         hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,170,.4)]"
              style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5)" }}
            >
              العودة للرئيسية
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold border border-white/10 text-[#8ba3c7]
                         hover:text-[#00d4aa] hover:border-[#00d4aa]/30 transition-all duration-200"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
