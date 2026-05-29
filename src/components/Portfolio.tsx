"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, MessageSquare } from "lucide-react";
import Link from "next/link";

type Category = "all" | "web" | "app" | "design";

const projects: {
  title: string;
  desc: string;
  category: Exclude<Category, "all">;
  tags: string[];
  color: string;
}[] = [
  {
    title: "متجر إلكتروني متكامل",
    desc: "منصة تسوق متكاملة مع لوحة تحكم، إدارة مخزون، ودفع إلكتروني.",
    category: "web",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "#00d4aa",
  },
  {
    title: "تطبيق توصيل طلبات",
    desc: "تطبيق موبايل لتتبع الطلبات في الوقت الفعلي مع خريطة تفاعلية.",
    category: "app",
    tags: ["React Native", "Firebase", "Maps API"],
    color: "#3a7bd5",
  },
  {
    title: "موقع شركة عقارات",
    desc: "موقع عرض عقارات بفلترة متقدمة وتكامل مع خرائط Google.",
    category: "web",
    tags: ["Next.js", "Mapbox", "Sanity CMS"],
    color: "#7ed957",
  },
  {
    title: "هوية بصرية كاملة",
    desc: "تصميم هوية بصرية شاملة لشركة ناشئة في مجال التقنية.",
    category: "design",
    tags: ["Figma", "Brand Identity", "UI Design"],
    color: "#00d4aa",
  },
  {
    title: "تطبيق إدارة مهام",
    desc: "تطبيق Kanban ذكي مع تنبيهات، مشاركة فريق، وتحليلات أداء.",
    category: "app",
    tags: ["Flutter", "Supabase", "Dart"],
    color: "#3a7bd5",
  },
  {
    title: "منصة تعليمية",
    desc: "منصة LMS كاملة بفيديوهات، اختبارات، وشهادات تفاعلية.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#7ed957",
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "web", label: "مواقع" },
  { key: "app", label: "تطبيقات" },
  { key: "design", label: "تصميم" },
];

const GAP = 20; // px — matches gap-5 in Tailwind

export default function Portfolio() {
  const [active, setActive] = useState<Category>("all");
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const maxIndex = Math.max(0, filtered.length - visibleCount);

  // Clamp index when visibleCount or filter changes
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, filtered.length - visibleCount)));
  }, [visibleCount, filtered.length]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const handleFilter = (key: Category) => {
    setActive(key);
    setIndex(0);
  };

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <section id="portfolio" className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">
            ما أنجزناه
          </p>
          <h2
            className="grad-text font-black mb-4"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
            }}
          >
            أعمالنا
          </h2>
          <p className="text-[#8ba3c7] max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            مشاريع منتقاة تعكس خبرتنا وتنوع حلولنا الرقمية لعملاء من مختلف القطاعات.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className={`px-4 md:px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                active === f.key
                  ? "text-[#0d1117]"
                  : "text-[#8ba3c7] bg-[#161b22] border border-white/5 hover:border-[#00d4aa]/30 hover:text-[#00d4aa]"
              }`}
              style={
                active === f.key
                  ? { background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }
                  : {}
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Slider wrapper */}
        <div className="relative">
          {/* Fade edges */}
          <div
            className="absolute top-0 right-0 w-6 sm:w-12 h-full z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #0d1117 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 left-0 w-6 sm:w-12 h-full z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0d1117 0%, transparent 100%)",
            }}
          />

          {/* Track */}
          <div className="overflow-hidden mx-1 sm:mx-2">
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(${index * 100 / visibleCount}% + ${index * GAP / visibleCount}px))`,
              }}
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const diff = e.changedTouches[0].clientX - touchStartX.current;
                if (Math.abs(diff) > 40) {
                  // RTL: swipe left = next, swipe right = prev
                  if (diff < 0) next(); else prev();
                }
                touchStartX.current = null;
              }}
            >
              {filtered.map((p) => (
                <div
                  key={p.title}
                  className="group flex-shrink-0 bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{
                    width: `calc(${100 / visibleCount}% - ${
                      (GAP * (visibleCount - 1)) / visibleCount
                    }px)`,
                  }}
                >
                  {/* Mock preview */}
                  <div
                    className="h-40 sm:h-48 relative overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at 40% 40%, ${p.color}22, transparent 60%), #1f2937`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black opacity-60 text-xl sm:text-2xl"
                        style={{
                          background: `${p.color}22`,
                          color: p.color,
                          fontFamily: "Orbitron, sans-serif",
                        }}
                      >
                        {p.title[0]}
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00d4aa] text-[#0d1117] text-xs font-bold hover:scale-105 transition-transform"
                      >
                        <MessageSquare size={13} />
                        اطلب مشروعاً مشابهاً
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-[#e6f0ff] font-bold text-sm sm:text-base mb-2">{p.title}</h3>
                    <p className="text-[#8ba3c7] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 sm:px-2.5 py-1 rounded-lg font-medium"
                          style={{ background: `${p.color}15`, color: p.color }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation arrows + dots */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
          {/* Arrow right (السابق في RTL) */}
          <button
            aria-label="المشروع السابق"
            onClick={prev}
            disabled={!canPrev}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-200"
            style={{
              background: canPrev ? "linear-gradient(135deg,#00d4aa,#3a7bd5)" : "transparent",
              borderColor: canPrev ? "transparent" : "rgba(255,255,255,0.1)",
              color: canPrev ? "#0d1117" : "#4d6080",
              cursor: canPrev ? "pointer" : "not-allowed",
            }}
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-0.5 sm:gap-1 items-center">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`عرض الشريحة ${i + 1}`}
                onClick={() => setIndex(i)}
                className="flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{ minWidth: "24px", minHeight: "24px", background: "transparent", border: "none", padding: 0 }}
              >
                <span
                  className="rounded-full transition-all duration-300 block"
                  style={{
                    width: i === index ? "20px" : "7px",
                    height: "7px",
                    background:
                      i === index
                        ? "linear-gradient(135deg,#00d4aa,#3a7bd5)"
                        : "rgba(255,255,255,0.15)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Arrow left (التالي في RTL) */}
          <button
            aria-label="المشروع التالي"
            onClick={next}
            disabled={!canNext}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-200"
            style={{
              background: canNext ? "linear-gradient(135deg,#00d4aa,#3a7bd5)" : "transparent",
              borderColor: canNext ? "transparent" : "rgba(255,255,255,0.1)",
              color: canNext ? "#0d1117" : "#4d6080",
              cursor: canNext ? "pointer" : "not-allowed",
            }}
          >
            <ChevronLeft size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
