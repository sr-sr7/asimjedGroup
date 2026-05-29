import { Globe, Code2, Smartphone, Palette, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "تصميم المواقع",
    desc: "واجهات مستخدم احترافية وجذابة تعكس هوية علامتك التجارية بشكل مميز ومتجاوب مع جميع الأجهزة.",
    color: "#00d4aa",
  },
  {
    icon: Code2,
    title: "تطوير المواقع",
    desc: "مواقع سريعة وآمنة باستخدام أحدث التقنيات كـ Next.js وNode.js لضمان أفضل أداء وتجربة مستخدم.",
    color: "#3a7bd5",
  },
  {
    icon: Smartphone,
    title: "تطوير التطبيقات",
    desc: "تطبيقات iOS وAndroid بتجربة سلسة وتصميم عصري يلبّي احتياجات عملائك في كل مكان.",
    color: "#7ed957",
  },
  {
    icon: Globe,
    title: "متاجر إلكترونية",
    desc: "منصات تجارة إلكترونية متكاملة مع نظام إدارة منتجات وطرق دفع متعددة وتجربة تسوق سلسة.",
    color: "#00d4aa",
  },
  {
    icon: Zap,
    title: "تحسين الأداء",
    desc: "تحسين سرعة وأداء مواقعك الحالية وتطبيق أفضل معايير SEO لرفع ترتيبك في محركات البحث.",
    color: "#3a7bd5",
  },
  {
    icon: ShieldCheck,
    title: "الصيانة والدعم",
    desc: "دعم فني مستمر وصيانة دورية لضمان عمل موقعك وتطبيقك بكفاءة عالية على مدار الساعة.",
    color: "#7ed957",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">
            ما نقدمه
          </p>
          <h2
            className="grad-text font-black mb-4"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
            }}
          >
            خدماتنا
          </h2>
          <p className="text-[#8ba3c7] max-w-xl mx-auto leading-relaxed">
            نقدم حلولاً رقمية شاملة تساعد عملاءنا على النمو والتميّز في السوق الرقمي.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-[#161b22] border border-white/5 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{
                  ["--glow" as string]: s.color,
                }}
              >
                {/* Top gradient line on hover */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 grad-border"
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${s.color}18` }}
                >
                  <Icon size={24} color={s.color} />
                </div>

                <h3 className="text-[#e6f0ff] font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#8ba3c7] text-sm leading-relaxed">{s.desc}</p>

                {/* Corner decoration */}
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-5 blur-2xl pointer-events-none"
                  style={{ background: s.color, transform: "translate(-30%, 30%)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
