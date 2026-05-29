import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2, Smartphone, ShoppingCart, Search,
  Palette, Shield, Clock, Award, Users, Star,
  CheckCircle2, Zap, Heart, Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن – AsiMjed",
  description:
    "تعرّف على AsiMjed — مطور ومصمم متكامل متخصص في بناء مواقع وتطبيقات احترافية للشركات والأفراد في المملكة العربية السعودية.",
};

const skills = [
  { name: "Next.js / React", level: 95, color: "#00d4aa" },
  { name: "TypeScript", level: 90, color: "#3a7bd5" },
  { name: "React Native / Flutter", level: 85, color: "#7ed957" },
  { name: "UI/UX Design (Figma)", level: 88, color: "#00d4aa" },
  { name: "Node.js / PostgreSQL", level: 82, color: "#3a7bd5" },
  { name: "Supabase / Firebase", level: 90, color: "#7ed957" },
];

const services = [
  { icon: Code2,       label: "تطوير مواقع",       desc: "Next.js, React, TypeScript",     color: "#00d4aa" },
  { icon: Smartphone,  label: "تطبيقات الجوال",    desc: "React Native, Flutter",          color: "#3a7bd5" },
  { icon: ShoppingCart,label: "متاجر إلكترونية",   desc: "Stripe, Moyasar, WooCommerce",   color: "#7ed957" },
  { icon: Search,      label: "تحسين SEO",         desc: "Core Web Vitals, Schema, سرعة",  color: "#00d4aa" },
  { icon: Palette,     label: "هوية بصرية",        desc: "Figma, Branding, UI Design",     color: "#3a7bd5" },
  { icon: Shield,      label: "صيانة ودعم",        desc: "أمان, أداء, تحديثات دورية",      color: "#7ed957" },
];

const stats = [
  { icon: Award,  value: "+50",  label: "مشروع منجز",         color: "#00d4aa" },
  { icon: Users,  value: "+30",  label: "عميل راضٍ",          color: "#3a7bd5" },
  { icon: Clock,  value: "3+",   label: "سنوات خبرة",         color: "#7ed957" },
  { icon: Star,   value: "100%", label: "معدل الرضا",          color: "#00d4aa" },
];

const values = [
  { icon: Zap,        title: "السرعة والأداء",     desc: "كل موقع نبنيه يستهدف Core Web Vitals ممتازة وسرعة تحميل تحت ثانيتين.",  color: "#00d4aa" },
  { icon: Heart,      title: "شغف حقيقي",          desc: "نعامل كل مشروع كأنه مشروعنا الخاص — اهتمام بكل تفصيل صغير.",           color: "#3a7bd5" },
  { icon: Target,     title: "نتائج قابلة للقياس", desc: "لا نقيس النجاح بجمال التصميم فقط، بل بالتحويلات والمبيعات والنمو.",     color: "#7ed957" },
  { icon: CheckCircle2,title: "الوضوح والشفافية",  desc: "تقارير واضحة، تواصل مستمر، ولا مفاجآت في التكلفة أو المواعيد.",        color: "#00d4aa" },
];

const steps = [
  { n: "01", title: "الاستشارة المجانية",    desc: "نفهم مشروعك وأهدافك ونرسل لك عرض سعر تفصيلي خلال 24 ساعة." },
  { n: "02", title: "التصميم والتخطيط",      desc: "نصمم Wireframes وPrototype كامل في Figma لنتفق على كل شيء قبل البرمجة." },
  { n: "03", title: "التطوير والتسليم",       desc: "نبرمج المشروع بأعلى معايير الجودة ونسلمه في الوقت المتفق عليه." },
  { n: "04", title: "الدعم والمتابعة",        desc: "3 أشهر ضمان مجاني بعد التسليم ودعم فني مستمر للتأكد من نجاح مشروعك." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-24 pb-16">

        {/* ── Hero ── */}
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">من نحن</p>
              <h1
                className="grad-text font-black mb-6 leading-tight"
                style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
              >
                نبني تجارب رقمية تُحدث فرقاً
              </h1>
              <p className="text-[#8ba3c7] leading-relaxed mb-4">
                AsiMjed هو استوديو متخصص في بناء مواقع وتطبيقات احترافية تجمع بين الجماليات
                الرائعة والأداء التقني الاستثنائي — مع تركيز كامل على تحقيق أهداف عملك.
              </p>
              <p className="text-[#8ba3c7] leading-relaxed mb-8">
                منذ 2021 وأنا أساعد الشركات والأفراد في المملكة العربية السعودية على بناء
                حضور رقمي قوي يتحول إلى مبيعات حقيقية.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl font-bold text-[#0d1117] text-sm hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
                >
                  ابدأ مشروعك
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-xl font-bold text-[#8ba3c7] text-sm border border-white/5 bg-[#161b22] hover:border-[#00d4aa]/30 hover:text-[#00d4aa] transition-all"
                >
                  تصفح أعمالنا
                </Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-[#161b22] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                {/* Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, #00d4aa, transparent)" }} />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-15 blur-3xl"
                  style={{ background: "radial-gradient(circle, #3a7bd5, transparent)" }} />

                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-3xl relative z-10"
                  style={{ background: "linear-gradient(135deg,#00d4aa22,#3a7bd522)", color: "#00d4aa", fontFamily: "var(--font-orbitron), sans-serif" }}>
                  A
                </div>

                <p className="text-center text-[#e6f0ff] font-black text-lg relative z-10">Asim Jedaan</p>
                <p className="text-center text-[#00d4aa] text-sm font-bold mb-5 relative z-10">Full-Stack Developer & UI Designer</p>

                <div className="space-y-3 relative z-10">
                  {[
                    { label: "الموقع", value: "المملكة العربية السعودية" },
                    { label: "الخبرة", value: "+3 سنوات" },
                    { label: "التخصص", value: "Next.js · React Native · UI/UX" },
                    { label: "الترخيص", value: "وثيقة ممارس حر FL-270754426" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-sm">
                      <span className="text-[#4d6080]">{item.label}</span>
                      <span className="text-[#8ba3c7] font-medium text-xs text-left">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="px-6 py-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="bg-[#161b22] border border-white/5 rounded-2xl p-5 text-center hover:border-[#00d4aa]/20 transition-colors">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${color}18` }}>
                  <Icon size={20} color={color} />
                </div>
                <p className="font-black text-2xl mb-1" style={{ color }}>{value}</p>
                <p className="text-[#8ba3c7] text-xs">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="px-6 py-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">التقنيات</p>
            <h2 className="grad-text font-black" style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)" }}>
              مهاراتنا التقنية
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((s) => (
              <div key={s.name} className="bg-[#161b22] border border-white/5 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#e6f0ff] font-bold text-sm">{s.name}</span>
                  <span className="font-black text-sm" style={{ color: s.color }}>{s.level}%</span>
                </div>
                <div className="h-2 bg-[#1f2937] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${s.level}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}88)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section className="px-6 py-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">ما نقدمه</p>
            <h2 className="grad-text font-black" style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)" }}>
              خدماتنا
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="bg-[#161b22] border border-white/5 rounded-2xl p-5 hover:border-[#00d4aa]/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: `${color}18` }}>
                  <Icon size={20} color={color} />
                </div>
                <h3 className="text-[#e6f0ff] font-bold text-sm mb-1.5">{label}</h3>
                <p className="text-[#4d6080] text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Values ── */}
        <section className="px-6 py-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">فلسفتنا</p>
            <h2 className="grad-text font-black" style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)" }}>
              قيمنا في العمل
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-[#161b22] border border-white/5 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: `${color}18` }}>
                  <Icon size={20} color={color} />
                </div>
                <div>
                  <h3 className="text-[#e6f0ff] font-bold text-sm mb-1.5">{title}</h3>
                  <p className="text-[#8ba3c7] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section className="px-6 py-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">كيف نعمل</p>
            <h2 className="grad-text font-black" style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)" }}>
              خطوات العمل
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative bg-[#161b22] border border-white/5 rounded-2xl p-5">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -left-2 w-4 h-px bg-gradient-to-l from-[#00d4aa]/30 to-transparent z-10" />
                )}
                <p className="text-4xl font-black mb-3 opacity-20" style={{ fontFamily: "var(--font-orbitron), sans-serif", color: "#00d4aa" }}>{s.n}</p>
                <h3 className="text-[#e6f0ff] font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-[#8ba3c7] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── License ── */}
        <section className="px-6 py-6 max-w-5xl mx-auto">
          <div className="bg-[#161b22] border border-[#00d4aa]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0 text-[#00d4aa] font-black text-xl">
              ✓
            </div>
            <div className="flex-1">
              <p className="text-[#e6f0ff] font-bold mb-0.5">مرخّص رسمياً من وزارة الموارد البشرية</p>
              <p className="text-[#8ba3c7] text-sm">
                وثيقة ممارس حر رقم{" "}
                <span className="text-[#00d4aa] font-mono font-bold">FL-270754426</span>{" "}
                — صالحة حتى أغسطس 2026
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl font-bold text-[#0d1117] text-sm hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
            >
              تواصل معنا
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 py-12 max-w-3xl mx-auto text-center">
          <div className="bg-[#161b22] border border-white/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }} />
            <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3 relative z-10">الخطوة التالية</p>
            <h2
              className="grad-text font-black mb-4 relative z-10"
              style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(1.4rem,3vw,2rem)" }}
            >
              هل أنت مستعد لبدء مشروعك؟
            </h2>
            <p className="text-[#8ba3c7] mb-6 relative z-10 text-sm leading-relaxed">
              أرسل لنا تفاصيل مشروعك وسنتواصل معك خلال 24 ساعة بعرض سعر مجاني وشامل.
            </p>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-xl font-bold text-[#0d1117] text-sm hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
              >
                ابدأ الآن مجاناً
              </Link>
              <a
                href="https://wa.me/966591088884?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%D8%A7%D9%8B%20%D8%B9%D9%86%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-xl font-bold text-sm border border-white/10 bg-[#0d1117] text-[#8ba3c7] hover:border-[#00d4aa]/30 hover:text-[#00d4aa] transition-all"
              >
                واتساب
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
