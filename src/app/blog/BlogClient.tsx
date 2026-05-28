/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useMemo, useCallback } from "react";
import { Clock, Heart, MessageCircle, ExternalLink, Globe, Loader2 } from "lucide-react";

export interface DevArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  canonical_url: string;
  cover_image: string | null;
  tag_list: string[];
  reading_time_minutes: number;
  positive_reactions_count: number;
  comments_count: number;
  published_at: string;
  user: {
    name: string;
    profile_image: string;
    username: string;
  };
}

type TxCache = Record<number, { title: string; description: string }>;
type TxState = "idle" | "loading" | "ready";

const TAG_CATEGORY_MAP: Record<string, string> = {
  webdev: "تطوير المواقع", web: "تطوير المواقع",
  react: "تطوير المواقع", nextjs: "تطوير المواقع",
  vue: "تطوير المواقع", angular: "تطوير المواقع",
  node: "تطوير المواقع", nodejs: "تطوير المواقع",
  backend: "تطوير المواقع", frontend: "تطوير المواقع",
  javascript: "جافاسكريبت", typescript: "جافاسكريبت",
  js: "جافاسكريبت", ts: "جافاسكريبت",
  css: "تصميم UI/UX", ux: "تصميم UI/UX",
  ui: "تصميم UI/UX", design: "تصميم UI/UX",
  tailwind: "تصميم UI/UX", tailwindcss: "تصميم UI/UX",
  figma: "تصميم UI/UX",
  mobile: "تطبيقات الجوال", reactnative: "تطبيقات الجوال",
  flutter: "تطبيقات الجوال", android: "تطبيقات الجوال",
  ios: "تطبيقات الجوال", swift: "تطبيقات الجوال",
  kotlin: "تطبيقات الجوال",
};

const CATEGORY_COLORS: Record<string, string> = {
  "تطوير المواقع": "#00d4aa",
  "جافاسكريبت": "#f0db4f",
  "تصميم UI/UX": "#3a7bd5",
  "تطبيقات الجوال": "#7ed957",
};

const CATEGORIES = ["الكل", "تطوير المواقع", "جافاسكريبت", "تصميم UI/UX", "تطبيقات الجوال"];

function getCategory(tags: string[]): string {
  for (const tag of tags) {
    const cat = TAG_CATEGORY_MAP[tag.toLowerCase().replace(/[^a-z]/g, "")];
    if (cat) return cat;
  }
  return "تطوير المواقع";
}

/* ─── Featured Card ─────────────────────────────────────── */
function FeaturedCard({
  article,
  tx,
}: {
  article: DevArticle;
  tx?: { title: string; description: string };
}) {
  const category = getCategory(article.tag_list);
  const color = CATEGORY_COLORS[category] ?? "#00d4aa";
  const href = article.canonical_url || article.url;
  const title = tx?.title       || article.title;
  const desc  = tx?.description || article.description;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00d4aa]/20 transition-all hover:shadow-2xl">
        <div className="h-52 relative">
          {article.cover_image ? (
            <>
              <img src={article.cover_image} alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161b22]/70 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full"
              style={{ background: `radial-gradient(circle at 30% 50%, ${color}22, transparent 60%), #1f2937` }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-black opacity-20"
                  style={{ fontFamily: "Orbitron, sans-serif", color }}>
                  {article.title.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          )}
          <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-bold bg-[#00d4aa]/20 text-[#00d4aa] backdrop-blur-sm">
            مقال مميز
          </span>
          <span className="absolute top-4 left-4 flex items-center gap-1 text-[10px] px-2 py-1 rounded-full font-bold bg-black/40 text-white/70 backdrop-blur-sm">
            <ExternalLink size={9} /> DEV.to
          </span>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[#8ba3c7]">
            <span className="flex items-center gap-1.5">
              <img src={article.user.profile_image} alt={article.user.name}
                className="w-5 h-5 rounded-full ring-1 ring-white/10" />
              {article.user.name}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
              style={{ background: `${color}22`, color }}>
              {category}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />{article.reading_time_minutes} دقائق للقراءة
            </span>
          </div>
          <h2 className="text-[#e6f0ff] font-black text-xl mb-3 group-hover:text-[#00d4aa] transition-colors leading-snug">
            {title}
          </h2>
          {desc && <p className="text-[#8ba3c7] leading-relaxed line-clamp-2">{desc}</p>}
          <div className="flex items-center gap-4 mt-4 text-[#4d6080] text-xs">
            <span className="flex items-center gap-1"><Heart size={11} />{article.positive_reactions_count.toLocaleString()}</span>
            <span className="flex items-center gap-1"><MessageCircle size={11} />{article.comments_count.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ─── Grid Card ─────────────────────────────────────────── */
function ArticleCard({
  article,
  tx,
}: {
  article: DevArticle;
  tx?: { title: string; description: string };
}) {
  const category = getCategory(article.tag_list);
  const color = CATEGORY_COLORS[category] ?? "#00d4aa";
  const href = article.canonical_url || article.url;
  const title = tx?.title       || article.title;
  const desc  = tx?.description || article.description;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <div className="h-full bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00d4aa]/20 hover:-translate-y-1 transition-all duration-300">
        <div className="h-36 relative">
          {article.cover_image ? (
            <>
              <img src={article.cover_image} alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161b22]/60 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full"
              style={{ background: `radial-gradient(circle at 40% 40%, ${color}22, transparent 60%), #1f2937` }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-black opacity-20"
                  style={{ fontFamily: "Orbitron, sans-serif", color }}>
                  {article.title.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-[#8ba3c7]">
            <img src={article.user.profile_image} alt={article.user.name}
              className="w-4 h-4 rounded-full ring-1 ring-white/10" />
            <span>{article.user.name}</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
              style={{ background: `${color}22`, color }}>
              {category}
            </span>
          </div>
          <h3 className="text-[#e6f0ff] font-bold text-sm leading-snug mb-2 group-hover:text-[#00d4aa] transition-colors">
            {title}
          </h3>
          {desc && <p className="text-[#8ba3c7] text-xs leading-relaxed line-clamp-3">{desc}</p>}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 text-[#4d6080] text-[10px]">
              <span className="flex items-center gap-1"><Clock size={9} />{article.reading_time_minutes}د</span>
              <span className="flex items-center gap-1"><Heart size={9} />{article.positive_reactions_count}</span>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-[#4d6080]">
              <ExternalLink size={9} /> DEV.to
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function BlogClient({ articles }: { articles: DevArticle[] }) {
  const [activeCategory, setActiveCategory] = useState("الكل");

  /* Translation */
  const [txState,  setTxState]  = useState<TxState>("idle");
  const [txActive, setTxActive] = useState(false);
  const [txCache,  setTxCache]  = useState<TxCache>({});

  const handleTranslate = useCallback(async () => {
    if (txState === "ready") { setTxActive((v) => !v); return; }
    if (txState === "loading") return;

    setTxState("loading");
    try {
      const texts = articles.flatMap((a) => [a.title, a.description ?? ""]);
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texts }),
      });
      if (!res.ok) throw new Error("API error");
      const { translations } = await res.json() as { translations: string[] };

      const cache: TxCache = {};
      articles.forEach((a, i) => {
        cache[a.id] = {
          title:       translations[i * 2]     || a.title,
          description: translations[i * 2 + 1] || a.description,
        };
      });
      setTxCache(cache);
      setTxState("ready");
      setTxActive(true);
    } catch {
      setTxState("idle");
    }
  }, [articles, txState]);

  const filtered = useMemo(() => {
    if (activeCategory === "الكل") return articles;
    return articles.filter((a) => getCategory(a.tag_list) === activeCategory);
  }, [articles, activeCategory]);

  return (
    <>
      {/* ── Filters + Translate ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#00d4aa]/15 border border-[#00d4aa]/40 text-[#00d4aa]"
                : "bg-[#161b22] border border-white/5 text-[#8ba3c7] hover:border-[#00d4aa]/30 hover:text-[#00d4aa]"
            }`}
          >
            {cat}
          </button>
        ))}

        {/* Divider */}
        <span className="w-px h-5 bg-white/10 hidden sm:block" />

        {/* Translate button */}
        <button
          onClick={handleTranslate}
          title={txActive ? "عرض النص الأصلي" : "ترجمة جميع المقالات للعربي"}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold border
                      transition-all duration-200
                      ${txActive
                        ? "bg-[#00d4aa]/15 border-[#00d4aa]/40 text-[#00d4aa]"
                        : "bg-[#161b22] border-white/5 text-[#8ba3c7] hover:border-[#00d4aa]/30 hover:text-[#00d4aa]"
                      }`}
        >
          {txState === "loading"
            ? <Loader2 size={12} className="animate-spin" />
            : <Globe size={12} />
          }
          {txState === "loading"
            ? "جارٍ الترجمة…"
            : txActive
              ? "عرض الأصل"
              : "ترجم للعربي"}
        </button>
      </div>

      {/* ── Articles ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#8ba3c7]">
          <p className="text-lg font-bold mb-2">لا توجد مقالات في هذه الفئة حالياً</p>
          <p className="text-sm">جرّب فئة أخرى أو اختر &quot;الكل&quot;</p>
        </div>
      ) : (
        <>
          <div className="max-w-5xl mx-auto mb-8">
            <FeaturedCard
              article={filtered[0]}
              tx={txActive ? txCache[filtered[0].id] : undefined}
            />
          </div>
          {filtered.length > 1 && (
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.slice(1).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  tx={txActive ? txCache[article.id] : undefined}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
