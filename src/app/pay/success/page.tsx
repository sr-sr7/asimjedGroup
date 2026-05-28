import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "تم الدفع | AsiMjed" };

export default function PaySuccessPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-24 pb-16 px-6 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 rounded-3xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h1
            className="grad-text font-black mb-3"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(1.6rem,4vw,2.4rem)" }}
          >
            تم الدفع بنجاح!
          </h1>
          <p className="text-[#8ba3c7] mb-8 leading-relaxed">
            تمت عملية الدفع التجريبية بنجاح. شكراً لتجربتك.
          </p>
          <Link
            href="/pay"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0d1117] transition-all hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5)" }}
          >
            تجربة مرة أخرى
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
