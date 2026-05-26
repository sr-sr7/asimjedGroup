"use client";
import { useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Category = "all" | "web" | "app" | "design";

const projects = [
  {
    title: "متجر إلكتروني متكامل",
    desc: "منصة تسوق متكاملة مع لوحة تحكم، إدارة مخزون، ودفع إلكتروني عبر Stripe وPayPal.",
    category: "web" as const,
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "#00d4aa",
    year: "2025",
  },
  {
    title: "تطبيق توصيل طلبات",
    desc: "تطبيق موبايل لتتبع الطلبات في الوقت الفعلي مع خريطة تفاعلية ونظام تقييم.",
    category: "app" as const,
    tags: ["React Native", "Firebase", "Maps API"],
    color: "#3a7bd5",
    year: "2025",
  },
  {
    title: "موقع شركة عقارات",
    desc: "موقع عرض عقارات بفلترة متقدمة وتكامل مع خرائط Google وإدارة محتوى ديناميكي.",
    category: "web" as const,
    tags: ["Next.js", "Mapbox", "Sanity CMS"],
    color: "#7ed957",
    year: "2024",
  },
  {
    title: "هوية بصرية كاملة",
    desc: "تصميم هوية بصرية شاملة لشركة ناشئة في مجال التقنية تشمل الشعار والألوان والخطوط.",
    category: "design" as const,
    tags: ["Figma", "Brand Identity", "UI Design"],
    color: "#00d4aa",
    year: "2024",
  },
  {
    title: "تطبيق إدارة مهام",
    desc: "تطبيق Kanban ذكي مع تنبيهات، مشاركة فريق، وتحليلات أداء مفصلة.",
    category: "app" as const,
    tags: ["Flutter", "Supabase", "Dart"],
    color: "#3a7bd5",
    year: "2025",
  },
  {
    title: "منصة تعليمية",
    desc: "منصة LMS كاملة بفيديوهات تفاعلية، اختبارات، وشهادات رقمية موثقة.",
    category: "web" as const,
    tags: ["React", "Node.js", "MongoDB"],
    color: "#7ed957",
    year: "2024",
  },
  {
    title: "موقع مطعم فاخر",
    desc: "موقع حجوزات وقائمة طعام تفاعلية مع نظام إدارة الطاولات ونظام دفع مدمج.",
    category: "web" as const,
    tags: ["Next.js", "Prisma", "Tailwind"],
    color: "#00d4aa",
    year: "2025",
  },
  {
    title: "تطبيق لياقة بدنية",
    desc: "تطبيق تتبع التمارين والتغذية مع خوارزمية ذكية لتخصيص الخطط الرياضية.",
    category: "app" as const,
    tags: ["React Native", "TensorFlow", "Firebase"],
    color: "#7ed957",
    year: "2024",
  },
  {
    title: "هوية شركة مالية",
    desc: "تصميم كامل لهوية بصرية لشركة استثمارية يعكس الثقة والمصداقية.",
    category: "design" as const,
    tags: ["Figma", "Illustrator", "Brand"],
    color: "#3a7bd5",
    year: "2025",
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "web", label: "مواقع" },
  { key: "app", label: "تطبيقات" },
  { key: "design", label: "تصميم" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchCat = active === "all" || p.category === active;
    const matchSearch =
      !search ||
      p.title.includes(search) ||
      p.desc.includes(search) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-24 pb-16 px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">ما أنجزناه</p>
          <h1
            className="grad-text font-black mb-4"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)" }}
          >
            معرض أعمالنا
          </h1>
          <p className="text-[#8ba3c7] leading-relaxed">
            مشاريع منتقاة تعكس خبرتنا وتنوع حلولنا الرقمية لعملاء من مختلف القطاعات.
          </p>
        </div>

        {/* Controls */}
        <div className="max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  active === f.key
                    ? "text-[#0d1117]"
                    : "text-[#8ba3c7] bg-[#161b22] border border-white/5 hover:border-[#00d4aa]/30 hover:text-[#00d4aa]"
                }`}
                style={active === f.key ? { background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" } : {}}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4d6080]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن مشروع..."
              className="w-full bg-[#161b22] border border-white/5 rounded-xl pr-9 pl-4 py-2.5 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/40 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="group bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
            >
              {/* Preview */}
              <div
                className="h-44 relative overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 40% 40%, ${p.color}22, transparent 60%), #1f2937`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl opacity-60"
                    style={{ background: `${p.color}22`, color: p.color, fontFamily: "Orbitron, sans-serif" }}
                  >
                    {p.title[0]}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[#00d4aa] transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[#3a7bd5] transition-colors">
                    <Github size={16} />
                  </button>
                </div>
                <span
                  className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-lg font-bold"
                  style={{ background: `${p.color}22`, color: p.color }}
                >
                  {p.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[#e6f0ff] font-bold text-base mb-2">{p.title}</h3>
                <p className="text-[#8ba3c7] text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{ background: `${p.color}15`, color: p.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20 text-[#4d6080]">
              لم يتم العثور على مشاريع مطابقة
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#8ba3c7] mb-4">هل تريد مشروعاً مشابهاً؟</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[#0d1117] hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
          >
            ابدأ مشروعك معنا
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
