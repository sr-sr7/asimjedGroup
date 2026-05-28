/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Heart, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { DevArticle } from "@/app/blog/BlogClient";

/* ─── Helpers ───────────────────────────────────────────── */
const TAG_MAP: Record<string, string> = {
  webdev: "تطوير المواقع", web: "تطوير المواقع",
  react: "تطوير المواقع", nextjs: "تطوير المواقع",
  vue: "تطوير المواقع", angular: "تطوير المواقع",
  node: "تطوير المواقع", nodejs: "تطوير المواقع",
  frontend: "تطوير المواقع", backend: "تطوير المواقع",
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
    const c = TAG_MAP[t.toLowerCase().replace(/[^a-z]/g, "")];
    if (c) return c;
  }
  return "تطوير المواقع";
}

/* ─── Card ──────────────────────────────────────────────── */
function SlideCard({ article }: { article: DevArticle }) {
  const cat   = getCategory(article.tag_list);
  const color = CAT_COLORS[cat] ?? "#00d4aa";
  const href  = article.canonical_url || article.url;

  return (
    /* dir="rtl" so Arabic text stays correct inside the ltr track */
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      dir="rtl"
      className="group flex-shrink-0 snap-start block w-[260px]"
    >
      <div className="h-full bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden
                      hover:border-[#00d4aa]/25 hover:-translate-y-1.5 transition-all duration-300
                      hover:shadow-[0_8px_30px_rgba(0,212,170,.1)]">

        {/* Thumbnail */}
        <div className="h-40 relative overflow-hidden">
          {article.cover_image ? (
            <>
              <img src={article.cover_image} alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161b22]/70 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: `radial-gradient(circle at 40% 40%, ${color}20, transparent 65%), #1a2035` }}>
              <span className="text-5xl font-black opacity-15 select-none"
                style={{ fontFamily: "Orbitron, sans-serif", color }}>
                {article.title.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <span className="absolute top-3 right-3 text-[10px] px-2.5 py-1 rounded-full font-bold backdrop-blur-sm"
            style={{ background: `${color}28`, color, border: `1px solid ${color}40` }}>
            {cat}
          </span>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-[#e6f0ff] font-bold text-sm leading-snug
                         group-hover:text-[#00d4aa] transition-colors line-clamp-2">
            {article.title}
          </h3>
          {article.description && (
            <p className="text-[#6b82a0] text-xs leading-relaxed line-clamp-2">
              {article.description}
            </p>
          )}
          <div className="flex items-center justify-between pt-1 mt-auto text-[10px] text-[#4d6080]">
            <span className="flex items-center gap-1.5 max-w-[55%]">
              <img src={article.user.profile_image} alt={article.user.name}
                className="w-4 h-4 rounded-full ring-1 ring-white/10 flex-shrink-0" />
              <span className="truncate">{article.user.name}</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-0.5"><Clock size={9} />{article.reading_time_minutes}د</span>
              <span className="flex items-center gap-0.5"><Heart size={9} />{article.positive_reactions_count}</span>
              <span className="flex items-center gap-0.5 opacity-50"><ExternalLink size={8} />DEV</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ─── Arrow Button ───────────────────────────────────────── */
function ArrowBtn({
  onClick, disabled, children, className = "",
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-hidden={disabled}
      className={`
        absolute top-1/2 -translate-y-1/2 z-20
        w-11 h-11 rounded-full
        flex items-center justify-center
        border backdrop-blur-sm
        transition-all duration-200
        ${disabled
          ? "border-white/5 bg-[#161b22]/60 text-[#3a5070] cursor-not-allowed opacity-0 pointer-events-none"
          : "border-[#00d4aa]/40 bg-[#161b22]/90 text-[#00d4aa] shadow-lg shadow-black/40 hover:bg-[#00d4aa]/15 hover:scale-110 active:scale-95"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

/* ─── Main Slider ────────────────────────────────────────── */
export default function BlogSlider({ articles }: { articles: DevArticle[] }) {
  const trackRef   = useRef<HTMLDivElement>(null);
  const isPaused   = useRef(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  /* Step = card width (260px) + gap (20px) */
  const STEP = 280;

  const navigate = useCallback((dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const max    = el.scrollWidth - el.clientWidth;
    const atEnd  = el.scrollLeft >= max - 10;
    const atStart= el.scrollLeft <= 10;

    if (dir === "next") {
      atEnd
        ? el.scrollTo({ left: 0, behavior: "smooth" })
        : el.scrollBy({ left: STEP, behavior: "smooth" });
    } else {
      atStart
        ? el.scrollTo({ left: max, behavior: "smooth" })
        : el.scrollBy({ left: -STEP, behavior: "smooth" });
    }
  }, []);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 10);
    setCanNext(el.scrollLeft < max - 10);
  }, []);

  /* Init nav state after mount */
  useEffect(() => { onScroll(); }, [onScroll]);

  /* Auto-advance every 4s */
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) navigate("next");
    }, 4000);
    return () => clearInterval(id);
  }, [navigate]);

  return (
    <section className="py-16">

      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-6 flex items-end justify-between mb-8">
        <div>
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-1.5">مقالات</p>
          <h2 className="grad-text font-black leading-tight"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(1.5rem,3vw,2.1rem)" }}>
            من المدونة
          </h2>
          <p className="text-[#8ba3c7] text-sm mt-1.5">
            أحدث المقالات من مجتمع DEV.to — تتجدد كل ساعة
          </p>
        </div>
        <Link href="/blog"
          className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl
                     border border-white/5 bg-[#161b22] text-[#8ba3c7]
                     hover:text-[#00d4aa] hover:border-[#00d4aa]/30 transition-all duration-200 flex-shrink-0">
          تصفح الكل
          <ArrowLeft size={13} />
        </Link>
      </div>

      {/* ── Slider ── */}
      {/*
        px-14 (56px each side) = room for the w-11 (44px) arrow + 12px gap before first card
        dir="ltr" on track = standard scrollLeft (0 → positive) regardless of page RTL
      */}
      <div className="relative max-w-5xl mx-auto px-14">

        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-2 w-16 z-10 pointer-events-none
                        bg-gradient-to-r from-[#0d1117] via-[#0d1117]/60 to-transparent" />

        {/* ← Prev arrow */}
        <ArrowBtn onClick={() => navigate("prev")} disabled={!canPrev} className="left-1">
          <ChevronRight size={20} />
        </ArrowBtn>

        {/* Scrollable track — dir="ltr" for predictable scroll math */}
        <div
          ref={trackRef}
          dir="ltr"
          onScroll={onScroll}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {articles.map((article) => (
            <SlideCard key={article.id} article={article} />
          ))}
        </div>

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-2 w-16 z-10 pointer-events-none
                        bg-gradient-to-l from-[#0d1117] via-[#0d1117]/60 to-transparent" />

        {/* → Next arrow */}
        <ArrowBtn onClick={() => navigate("next")} disabled={!canNext} className="right-1">
          <ChevronLeft size={20} />
        </ArrowBtn>
      </div>

      {/* Mobile all-link */}
      <div className="sm:hidden text-center mt-6 px-6">
        <Link href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#00d4aa] hover:underline">
          تصفح جميع المقالات
          <ArrowLeft size={14} />
        </Link>
      </div>

    </section>
  );
}
