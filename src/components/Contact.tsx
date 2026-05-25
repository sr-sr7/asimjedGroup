"use client";
import { useState } from "react";
import { Send, Mail, Globe, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("done");
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">
            تواصل معنا
          </p>
          <h2
            className="grad-text font-black mb-4"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
            }}
          >
            ابدأ مشروعك
          </h2>
          <p className="text-[#8ba3c7] max-w-md mx-auto leading-relaxed">
            أخبرنا عن مشروعك وسيتواصل معك فريقنا في أقرب وقت.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form – wider */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[#161b22] border border-white/5 rounded-2xl p-7 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs text-[#8ba3c7] font-medium">الاسم</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="اسمك الكريم"
                  className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/50 transition-colors"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs text-[#8ba3c7] font-medium">البريد الإلكتروني</span>
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
                <option>هوية بصرية</option>
                <option>أخرى</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-[#8ba3c7] font-medium">تفاصيل المشروع</span>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="أخبرنا عن مشروعك وأهدافك..."
                rows={4}
                className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/50 transition-colors resize-none"
              />
            </label>

            {status === "done" ? (
              <div className="text-center py-3 rounded-xl font-bold text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/20">
                تم إرسال طلبك بنجاح! سنتواصل معك قريباً ✓
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#0d1117] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,170,.35)] disabled:opacity-70"
                style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
              >
                {status === "sending" ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    إرسال الطلب
                    <Send size={16} />
                  </>
                )}
              </button>
            )}
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: Globe,
                label: "الموقع",
                value: "www.asimjed.com",
                color: "#00d4aa",
              },
              {
                icon: Mail,
                label: "البريد الإلكتروني",
                value: "info@asimjed.com",
                color: "#3a7bd5",
              },
              {
                icon: MessageCircle,
                label: "وسائل التواصل",
                value: "تابعنا على منصاتنا",
                color: "#7ed957",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-[#161b22] border border-white/5 rounded-2xl p-5 flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}18` }}
                  >
                    <Icon size={20} color={item.color} />
                  </div>
                  <div>
                    <p className="text-xs text-[#8ba3c7] mb-0.5">{item.label}</p>
                    <p className="text-[#e6f0ff] font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Vision card */}
            <div
              className="mt-auto bg-[#161b22] border border-white/5 rounded-2xl p-5 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
              />
              <p
                className="grad-text font-black text-sm mb-2 relative z-10"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                رؤيتنا
              </p>
              <p className="text-[#8ba3c7] text-sm leading-relaxed relative z-10">
                نؤمن بأن كل مشروع رقمي هو فرصة لصنع تجربة لا تُنسى.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
