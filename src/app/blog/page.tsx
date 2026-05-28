import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogClient, { type DevArticle } from "./BlogClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدونة – AsiMjed",
  description: "أحدث المقالات في تطوير المواقع والتطبيقات وتصميم تجربة المستخدم من أبرز مواقع المطورين",
};

// Refresh every hour (ISR)
export const revalidate = 3600;

async function fetchArticles(): Promise<DevArticle[]> {
  const tags = ["webdev", "javascript", "react", "nextjs", "ux", "mobile"];

  try {
    const results = await Promise.allSettled(
      tags.map((tag) =>
        fetch(`https://dev.to/api/articles?tag=${tag}&per_page=12&top=30`, {
          next: { revalidate: 3600 },
        }).then(async (r) => {
          if (!r.ok) throw new Error(`DEV.to HTTP ${r.status}`);
          return r.json() as Promise<DevArticle[]>;
        })
      )
    );

    const seen = new Set<number>();
    const articles: DevArticle[] = [];

    for (const result of results) {
      if (result.status === "fulfilled" && Array.isArray(result.value)) {
        for (const article of result.value) {
          if (!seen.has(article.id)) {
            seen.add(article.id);
            articles.push(article);
          }
        }
      }
    }

    // Sort by reactions (most popular first)
    articles.sort((a, b) => b.positive_reactions_count - a.positive_reactions_count);

    return articles;
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const articles = await fetchArticles();

  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-24 pb-16 px-6">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">المعرفة</p>
          <h1
            className="grad-text font-black mb-4"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)" }}
          >
            المدونة
          </h1>
          <p className="text-[#8ba3c7] leading-relaxed">
            أحدث المقالات من أبرز مواقع تطوير المواقع والتطبيقات — تتجدد تلقائياً كل ساعة
          </p>
        </div>

        {articles.length === 0 ? (
          /* Fallback when API is unreachable */
          <div className="text-center py-20 text-[#8ba3c7]">
            <p className="text-lg font-bold mb-2">تعذّر تحميل المقالات حالياً</p>
            <p className="text-sm">يرجى المحاولة لاحقاً، أو{" "}
              <a
                href="https://dev.to/t/webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4aa] underline"
              >
                تصفّح DEV.to مباشرةً
              </a>
            </p>
          </div>
        ) : (
          <BlogClient articles={articles} />
        )}
      </main>
      <Footer />
    </>
  );
}
