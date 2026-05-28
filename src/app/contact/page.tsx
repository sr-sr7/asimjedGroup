"use client";
import { useState, useCallback } from "react";
import Script from "next/script";
import { Send, Mail, Globe, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window { grecaptcha: any; }
}

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const faqs = [
  { q: "كم يستغرق تطوير الموقع؟", a: "يعتمد على حجم المشروع. موقع بسيط 2-4 أسابيع، وموقع متكامل 6-12 أسبوعاً." },
  { q: "هل تقدمون ضماناً بعد التسليم؟", a: "نعم، نقدم ضمان 3 أشهر مجاناً بعد التسليم لإصلاح أي أخطاء." },
  { q: "هل يمكنني تعديل المحتوى بنفسي؟", a: "نعم، نبني لوحة تحكم سهلة تمكّنك من تعديل كل المحتوى بدون خبرة تقنية." },
  { q: "ما هي طرق الدفع المتاحة؟", a: "تحويل بنكي، مدى، الراجحي Pay، وPayPal للعملاء الدوليين." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // احصل على reCAPTCHA token لو المفتاح موجود
      let recaptchaToken = "";
      if (RECAPTCHA_KEY && typeof window !== "undefined" && window.grecaptcha) {
        recaptchaToken = await new Promise<string>((resolve) => {
          window.grecaptcha.ready(async () => {
            const token = await window.grecaptcha.execute(RECAPTCHA_KEY, { action: "contact" });
            resolve(token);
          });
        });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  }, [form]);

  return (
    <>
      {/* reCAPTCHA v3 script */}
      {RECAPTCHA_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <Navbar />
      <main className="relative z-[1] pt-24 pb-16 px-6">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">تواصل معنا</p>
          <h1
            className="grad-text font-black mb-4"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)" }}
          >
            ابدأ مشروعك
          </h1>
          <p className="text-[#8ba3c7] leading-relaxed">
            أخبرنا عن مشروعك وسنرسل لك عرضاً مفصلاً خلال 24 ساعة مجاناً
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-[#161b22] border border-white/5 rounded-2xl p-7 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs text-[#8ba3c7] font-medium">الاسم الكريم *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="محمد عبدالله"
                  className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/50 transition-colors"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs text-[#8ba3c7] font-medium">البريد الإلكتروني *</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@example.com"
                  className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/50 transition-colors"
                  dir="ltr"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs text-[#8ba3c7] font-medium">رقم الجوال</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+966 5X XXX XXXX"
                  className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/50 transition-colors"
                  dir="ltr"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs text-[#8ba3c7] font-medium">الخدمة المطلوبة</span>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] outline-none focus:border-[#00d4aa]/50 transition-colors"
                >
                  <option value="">اختر الخدمة</option>
                  <option>تصميم موقع</option>
                  <option>تطوير موقع</option>
                  <option>تطوير تطبيق</option>
                  <option>متجر إلكتروني</option>
                  <option>تحسين SEO</option>
                  <option>هوية بصرية</option>
                  <option>صيانة ودعم</option>
                  <option>أخرى</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-[#8ba3c7] font-medium">الميزانية التقريبية</span>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] outline-none focus:border-[#00d4aa]/50 transition-colors"
              >
                <option value="">اختر النطاق</option>
                <option>أقل من 2,000 ر.س</option>
                <option>2,000 – 5,000 ر.س</option>
                <option>5,000 – 15,000 ر.س</option>
                <option>15,000 – 30,000 ر.س</option>
                <option>أكثر من 30,000 ر.س</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-[#8ba3c7] font-medium">تفاصيل المشروع *</span>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="أخبرنا عن مشروعك، أهدافك، الجمهور المستهدف، ومتطلباتك الخاصة..."
                rows={5}
                className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/50 transition-colors resize-none"
              />
            </label>

            {status === "done" ? (
              <div className="text-center py-4 rounded-xl font-bold text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/20">
                تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة ✓
              </div>
            ) : status === "error" ? (
              <div className="text-center py-4 rounded-xl font-bold text-red-400 bg-red-400/10 border border-red-400/20">
                حدث خطأ، يرجى المحاولة مرة أخرى أو التواصل عبر البريد مباشرة
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#0d1117] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,170,.35)] disabled:opacity-70"
                style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
              >
                {status === "sending" ? "جاري الإرسال..." : (<>إرسال الطلب <Send size={16} /></>)}
              </button>
            )}

            {/* reCAPTCHA badge notice */}
            {RECAPTCHA_KEY && (
              <p className="text-[#4d6080] text-[10px] text-center">
                محمي بـ Google reCAPTCHA —{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">سياسة الخصوصية</a>
                {" & "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">شروط الاستخدام</a>
              </p>
            )}
          </form>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Globe, label: "الموقع", value: "www.asimjed.com", color: "#00d4aa" },
              { icon: Mail, label: "البريد الإلكتروني", value: "info@asimjed.com", color: "#3a7bd5" },
              { icon: Phone, label: "الجوال / واتساب", value: "+966 591 088 884", color: "#7ed957" },
              { icon: Clock, label: "أوقات العمل", value: "الأحد – الخميس، 9ص – 6م", color: "#00d4aa" },
              { icon: MapPin, label: "الموقع", value: "المملكة العربية السعودية", color: "#3a7bd5" },
              { icon: MessageCircle, label: "واتساب", value: "راسلنا مباشرةً الآن", color: "#7ed957", href: "https://wa.me/966591088884" },
            ].map((item) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}18` }}
                  >
                    <Icon size={18} color={item.color} />
                  </div>
                  <div>
                    <p className="text-xs text-[#8ba3c7] mb-0.5">{item.label}</p>
                    <p className="text-[#e6f0ff] font-medium text-sm">{item.value}</p>
                  </div>
                </>
              );
              return "href" in item ? (
                <a key={item.label} href={(item as {href:string}).href} target="_blank" rel="noopener noreferrer"
                   className="bg-[#161b22] border border-white/5 rounded-2xl p-4 flex items-start gap-3
                              hover:border-[#00d4aa]/20 transition-colors">
                  {inner}
                </a>
              ) : (
                <div key={item.label} className="bg-[#161b22] border border-white/5 rounded-2xl p-4 flex items-start gap-3">
                  {inner}
                </div>
              );
            })}

            {/* وثيقة العمل الحر */}
            <div className="bg-[#161b22] border border-[#00d4aa]/20 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0 text-[#00d4aa] font-bold text-sm">
                ✓
              </div>
              <div>
                <p className="text-[#e6f0ff] font-bold text-xs">
                  مرخص من وزارة الموارد البشرية
                </p>
                <p className="text-[#8ba3c7] text-[10px] mt-0.5">
                  وثيقة ممارس حر · رقم الوثيقة:{" "}
                  <span className="text-[#00d4aa] font-mono">FL-270754426</span>
                </p>
                <p className="text-[#8ba3c7] text-[10px]">صالحة حتى: أغسطس 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-center text-[#e6f0ff] font-black text-xl mb-8">
            أسئلة شائعة
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="bg-[#161b22] border border-white/5 rounded-2xl p-5">
                <p className="text-[#e6f0ff] font-bold text-sm mb-2">{f.q}</p>
                <p className="text-[#8ba3c7] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
