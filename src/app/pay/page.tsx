import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoyasarForm from "./MoyasarForm";

export const metadata = { title: "اختبار الدفع | AsiMjed" };

const hasKey = !!process.env.NEXT_PUBLIC_MOYASAR_KEY;

export default function PayPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-24 pb-16 px-6 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">
            تجربة الدفع
          </p>
          <h1
            className="grad-text font-black mb-4"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
          >
            الدفع الإلكتروني
          </h1>
          <p className="text-[#8ba3c7] leading-relaxed text-sm">
            صفحة تجريبية لوسائل الدفع — مدى · Apple Pay · STC Pay · Visa/Mastercard
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* بطاقة المبلغ */}
          <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 mb-6 flex items-center justify-between">
            <div>
              <p className="text-[#8ba3c7] text-xs mb-1">المبلغ التجريبي</p>
              <p className="text-[#e6f0ff] font-black text-2xl">
                10.00 <span className="text-sm font-normal text-[#8ba3c7]">ر.س</span>
              </p>
            </div>
            <div className="flex gap-2">
              {["مدى", "VISA", "STC"].map((m) => (
                <span
                  key={m}
                  className="text-[10px] font-bold px-2 py-1 rounded-lg bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* فورم الدفع أو تنبيه المفتاح */}
          <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6">
            {hasKey ? (
              <MoyasarForm />
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🔑
                </div>
                <p className="text-[#e6f0ff] font-bold mb-2">يحتاج مفتاح Moyasar</p>
                <p className="text-[#8ba3c7] text-sm leading-relaxed mb-4">
                  سجّل في{" "}
                  <span className="text-[#00d4aa]">moyasar.com</span> واحصل على
                  مفتاح الاختبار، ثم أضفه في ملف .env.local
                </p>
                <div className="bg-[#0d1117] rounded-xl p-3 text-left text-xs font-mono text-[#00d4aa] border border-white/5">
                  NEXT_PUBLIC_MOYASAR_KEY=pk_test_xxxxxx
                </div>
              </div>
            )}
          </div>

          {/* تنبيه وضع الاختبار */}
          <div className="mt-4 flex items-center gap-2 justify-center text-[#8ba3c7] text-xs">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse inline-block" />
            وضع الاختبار — لا تُستخدم بيانات حقيقية
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
