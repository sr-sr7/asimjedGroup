/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Heart, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { DevArticle } from "@/app/blog/BlogClient";

/* ─── Helpers ──────────────────────────────────────────── */
const TAG_MAP: Record<string, string> = {
  webdev: "تطوير المواقع", web: "تطوير المواقع",
  react: "تطوير المواقع", nextjs: "تطوير المواقع",
  vue: "تطوير المواقع", angular: "تطوير المواقع",
  node: "تطوير المواقع", frontend: "تطوير المواقع",
  javascript: "جافاسكريبت", typescript: "جافاسكريبت",
  css: "تصميم UI/UX", ux: "تصميم UI/UX",
  design: "تصميم UI/UX", tailwind: "تصميم UI/UX",
  mobile: "تطبيقات الجوال", reactnative: "تطبيقات الجوال",
  flutter: "تطبيقات الجوال", android: "تطبيقات الجوال",
  ios: "تطبيقات الجوال",
};

const CAT_COLORS: Record<string, string> = {
  "تطوير المواقع": "#00d4aa",
  "جافاسكريبت": "#f0db4f",
  "تصميم UI/UX": "#3a7bd5",
  "تطبيقات الجوال": "#7ed957",
};

function getCategory(tags: string[]) {
  for (const t of tags) {
    const cat = TAG_MAP[t.toLowerCase().replace(/[^a-z]/g, "")];
    if (cat) return cat;
  }
  return "تطوير المواقع";
}

/* ─── Slide Card ───────────────────────────────────────── */
function SlideCard({ article }: { article: DevArticle }) {
  const cat = getCategory(article.tag_list);
  const color = CAT_COLORS[cat] ?? "#00d4aa";
  const href = article.canonical_url || article.url;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group snap-start flex-shrink-0 block w-[82vw] sm:w-[44vw] lg:w-[296px] xl:w-[310px]"
    >
      <div className="h-full bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00d4aa]/25 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,212,170,.1)]">
        {/* Thumbnail */}
        <div className="h-40 relative overflow-hidden">
          {article.cover_image ? (
            <>
              <img
                src={article.cover_image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161b22]/70 to-transparent" />
            </>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `radial-gradient(circle at 40% 40%, ${color}20, transparent 65%), #1a2035` }}
            >
              <span
                className="text-5xl font-black opacity-15 select-none"
                style={{ fontFamily: "Orbitron, sans-serif", color }}
              >
                {article.title.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          {/* Category badge */}
          <span
            className="absolute top-3 right-3 text-[10px] px-2.5 py-1 rounded-full font-bold backdrop-blur-sm"
            style={{ background: `${color}28`, color, border: `1px solid ${color}40` }}
          >
            {cat}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-[#e6f0ff] font-bold text-sm leading-snug group-hover:text-[#00d4aa] transition-colors line-clamp-2">
            {article.title}
          </h3>
          {article.description && (
            <p className="text-[#6b82a0] text-xs leading-relaxed line-clamp-2">
              {article.description}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-1 mt-auto text-[10px] text-[#4d6080]">
            <span className="flex items-center gap-1.5 max-w-[55%]">
              <img
                src={article.user.profile_image}
                alt={article.user.name}
                className="w-4 h-4 rounded-full ring-1 ring-white/10 flex-shrink-0"
              />
              <span className="truncate">{article.user.name}</span>
            </span>
            <span className="flex items-center gap-2.5">
              <span className="flex items-center gap-0.5"><Clock size={9} />{article.reading_time_minutes}د</span>
              <span className="flex items-center gap-0.5"><Heart size={9} />{article.positive_reactions_count}</span>
              <span className="flex items-center gap-0.5 text-[#3a5070]"><ExternalLink size={8} />DEV</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ─── Main Slider ──────────────────────────────────────── */
export default function BlogSlider({ articles }: { articles: DevArticle[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  /* How many pixels to scroll per click/tick */
  const getStep = useCallback(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w < 640)  return w * 0.82 + 20;   // 82vw + gap
    if (w < 1024) return w * 0.44 + 20;   // 44vw + gap
    return 316;                            // 296px card + 20px gap
  }, []);

  const slide = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const atEnd   = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
    const atStart = el.scrollLeft <= 10;
    if (dir === 1 && atEnd)   { el.scrollTo({ left: 0, behavior: "smooth" }); return; }
    if (dir === -1 && atStart){ el.scrollTo({ left: el.scrollWidth, behavior: "smooth" }); return; }
    el.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  }, [getStep]);

  const updateNav = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  /* Auto-advance every 4s */
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) slide(1);
    }, 4000);
    return () => clearInterval(id);
  }, [slide]);

  return (
    <section className="py-16 overflow-hidden">
      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-6 flex items-end justify-between mb-8">
        <div>
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-1.5">
            مقالات
          </p>
          <h2
            className="grad-text font-black leading-tight"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(1.5rem,3vw,2.1rem)" }}
          >
            من المدونة
          </h2>
          <p className="text-[#8ba3c7] text-sm mt-1.5">
            أحدث المقالات من مجتمع DEV.to — تتجدد كل ساعة
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Arrows */}
          <button
            onClick={() => slide(-1)}
            aria-label="السابق"
            className={`w-9 h-9 rounded-full bg-[#161b22] border flex items-center justify-center transition-all duration-200
              ${canLeft
                ? "border-[#00d4aa]/30 text-[#00d4aa] hover:bg-[#00d4aa]/10"
                : "border-white/5 text-[#4d6080] opacity-50 cursor-default"}`}
          >
            <ChevronRight size={16} />
          </button>
          <button
            onClick={() => slide(1)}
            aria-label="التالي"
            className={`w-9 h-9 rounded-full bg-[#161b22] border flex items-center justify-center transition-all duration-200
              ${canRight
                ? "border-[#00d4aa]/30 text-[#00d4aa] hover:bg-[#00d4aa]/10"
                : "border-white/5 text-[#4d6080] opacity-50 cursor-default"}`}
          >
            <ChevronLeft size={16} />
          </button>
          {/* All articles link */}
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl border border-white/5 bg-[#161b22] text-[#8ba3c7] hover:text-[#00d4aa] hover:border-[#00d4aa]/30 transition-all duration-200"
          >
            تصفح الكل
            <ArrowLeft size={13} />
          </Link>
        </div>
      </div>

      {/* ── Track ── */}
      <div className="px-6">
        <div
          ref={trackRef}
          onScroll={updateNav}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          className="flex gap-5 overflow-x-auto pb-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden max-w-5xl mx-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {articles.map((article) => (
            <SlideCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      {/* Mobile "all" link */}
      <div className="sm:hidden text-center mt-6 px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#00d4aa] hover:underline"
        >
          تصفح جميع المقالات
          <ArrowLeft size={14} />
        </Link>
      </div>
    </section>
  );
}
