import { Globe, Code2, Smartphone, Palette, Zap, ShieldCheck, Check, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا – AsiMjed",
  description: "خدمات تطوير المواقع والتطبيقات وتصميم الهوية البصرية بأسعار تنافسية",
};

const services = [
  {
    icon: Palette,
    title: "تصميم المواقع",
    desc: "واجهات مستخدم احترافية وجذابة تعكس هوية علامتك التجارية بشكل مميز ومتجاوب مع جميع الأجهزة.",
    color: "#00d4aa",
    features: [
      "تصميم UI/UX احترافي",
      "نماذج Wireframe وPrototype",
      "متجاوب مع جميع الأجهزة",
      "تصميم هوية بصرية متكاملة",
      "ملفات Figma قابلة للتعديل",
      "مراجعات غير محدودة",
    ],
    plans: [
      { name: "أساسي", price: "1,500", desc: "صفحة واحدة أو Landing Page" },
      { name: "احترافي", price: "3,500", desc: "حتى 5 صفحات مع تصميم كامل", popular: true },
      { name: "مميز", price: "7,000", desc: "مشروع كامل مع هوية بصرية" },
    ],
  },
  {
    icon: Code2,
    title: "تطوير المواقع",
    desc: "مواقع سريعة وآمنة باستخدام أحدث التقنيات كـ Next.js وNode.js لضمان أفضل أداء وتجربة مستخدم.",
    color: "#3a7bd5",
    features: [
      "Next.js / React للواجهة الأمامية",
      "Node.js / Python للخلفية",
      "قاعدة بيانات SQL / NoSQL",
      "تكامل مع APIs خارجية",
      "تحسين SEO متقدم",
      "نشر وصيانة مستمرة",
    ],
    plans: [
      { name: "أساسي", price: "2,500", desc: "موقع ثابت حتى 5 صفحات" },
      { name: "احترافي", price: "5,500", desc: "موقع ديناميكي مع لوحة تحكم", popular: true },
      { name: "مميز", price: "12,000", desc: "منصة متكاملة بكل الميزات" },
    ],
  },
  {
    icon: Smartphone,
    title: "تطوير التطبيقات",
    desc: "تطبيقات iOS وAndroid بتجربة سلسة وتصميم عصري يلبّي احتياجات عملائك في كل مكان.",
    color: "#7ed957",
    features: [
      "React Native / Flutter",
      "iOS و Android من كود واحد",
      "تكامل مع Firebase / Supabase",
      "إشعارات Push",
      "نشر على App Store و Google Play",
      "تحديثات Over-the-Air",
    ],
    plans: [
      { name: "أساسي", price: "5,000", desc: "تطبيق بسيط بميزات أساسية" },
      { name: "احترافي", price: "12,000", desc: "تطبيق متكامل مع Backend", popular: true },
      { name: "مميز", price: "25,000", desc: "منصة تطبيقات متكاملة" },
    ],
  },
  {
    icon: Globe,
    title: "متاجر إلكترونية",
    desc: "منصات تجارة إلكترونية متكاملة مع نظام إدارة منتجات وطرق دفع متعددة وتجربة تسوق سلسة.",
    color: "#00d4aa",
    features: [
      "إدارة المنتجات والمخزون",
      "بوابات دفع متعددة (Stripe, PayPal)",
      "نظام الطلبات والشحن",
      "لوحة تحكم متكاملة",
      "تحليلات المبيعات",
      "دعم متعدد اللغات والعملات",
    ],
    plans: [
      { name: "أساسي", price: "4,000", desc: "متجر حتى 50 منتج" },
      { name: "احترافي", price: "9,000", desc: "متجر غير محدود مع ERP", popular: true },
      { name: "مميز", price: "18,000", desc: "منصة تجارية متكاملة" },
    ],
  },
  {
    icon: Zap,
    title: "تحسين الأداء والـ SEO",
    desc: "تحسين سرعة وأداء مواقعك الحالية وتطبيق أفضل معايير SEO لرفع ترتيبك في محركات البحث.",
    color: "#3a7bd5",
    features: [
      "تحليل Core Web Vitals",
      "تحسين سرعة التحميل",
      "SEO تقني ومحتوى",
      "بناء الروابط الخلفية",
      "تقارير أداء شهرية",
      "تتبع الكلمات المفتاحية",
    ],
    plans: [
      { name: "أساسي", price: "800 / شهر", desc: "تقرير شهري + 10 كلمات مفتاحية" },
      { name: "احترافي", price: "1,800 / شهر", desc: "SEO كامل + 30 كلمة مفتاحية", popular: true },
      { name: "مميز", price: "3,500 / شهر", desc: "حملة SEO شاملة" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "الصيانة والدعم",
    desc: "دعم فني مستمر وصيانة دورية لضمان عمل موقعك وتطبيقك بكفاءة عالية على مدار الساعة.",
    color: "#7ed957",
    features: [
      "مراقبة الموقع 24/7",
      "نسخ احتياطية يومية",
      "تحديثات الأمان",
      "دعم فني سريع",
      "تقارير شهرية",
      "إضافة ميزات جديدة",
    ],
    plans: [
      { name: "أساسي", price: "300 / شهر", desc: "مراقبة + نسخ احتياطية" },
      { name: "احترافي", price: "700 / شهر", desc: "صيانة كاملة + دعم فني", popular: true },
      { name: "مميز", price: "1,500 / شهر", desc: "فريق مخصص على مدار الساعة" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 pb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">ما نقدمه</p>
          <h1
            className="grad-text font-black mb-4"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)" }}
          >
            خدماتنا والأسعار
          </h1>
          <p className="text-[#8ba3c7] leading-relaxed">
            حلول رقمية متكاملة بأسعار شفافة وتنافسية. كل مشروع يبدأ بفهم احتياجاتك ثم نقترح أنسب الحلول.
          </p>
        </section>

        {/* Services */}
        <section className="px-6 max-w-6xl mx-auto space-y-20">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Info */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${s.color}18` }}
                  >
                    <Icon size={28} color={s.color} />
                  </div>
                  <h2 className="text-[#e6f0ff] font-black text-2xl mb-3">{s.title}</h2>
                  <p className="text-[#8ba3c7] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#8ba3c7]">
                        <Check size={15} color={s.color} className="flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  {s.plans.map((p) => (
                    <div
                      key={p.name}
                      className={`relative bg-[#161b22] rounded-2xl p-5 border flex flex-col gap-3 ${
                        p.popular
                          ? "border-[#00d4aa]/40 shadow-[0_0_30px_rgba(0,212,170,.12)]"
                          : "border-white/5"
                      }`}
                    >
                      {p.popular && (
                        <span
                          className="absolute -top-3 right-4 text-[10px] font-bold px-3 py-1 rounded-full text-[#0d1117]"
                          style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5)" }}
                        >
                          الأكثر طلباً
                        </span>
                      )}
                      <p className="text-xs text-[#8ba3c7] font-medium">{p.name}</p>
                      <p className="text-[#e6f0ff] font-black text-xl" style={{ color: s.color }}>
                        {p.price}
                        <span className="text-xs text-[#8ba3c7] font-normal"> ر.س</span>
                      </p>
                      <p className="text-xs text-[#8ba3c7] leading-relaxed">{p.desc}</p>
                      <Link
                        href="/contact"
                        className="mt-auto text-center py-2.5 rounded-xl text-xs font-bold transition-all hover:opacity-90"
                        style={
                          p.popular
                            ? { background: "linear-gradient(135deg,#00d4aa,#3a7bd5)", color: "#0d1117" }
                            : { background: `${s.color}15`, color: s.color }
                        }
                      >
                        اطلب الآن
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="px-6 mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-[#161b22] border border-white/5 rounded-3xl p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
            />
            <h2 className="text-[#e6f0ff] font-black text-2xl mb-3 relative z-10">
              هل تحتاج عرض سعر مخصص؟
            </h2>
            <p className="text-[#8ba3c7] mb-6 relative z-10">
              تواصل معنا وسنرسل لك عرضاً مفصلاً خلال 24 ساعة مجاناً
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[#0d1117] relative z-10 hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
            >
              احصل على عرض مجاني
              <ArrowLeft size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
