import BlogSlider from "./BlogSlider";
import type { DevArticle } from "@/app/blog/BlogClient";

// Matches the revalidation period of the blog page
export const revalidate = 3600;

async function fetchSliderArticles(): Promise<DevArticle[]> {
  const tags = ["webdev", "javascript", "react", "nextjs", "ux", "mobile"];
  try {
    const results = await Promise.allSettled(
      tags.map((tag) =>
        fetch(`https://dev.to/api/articles?tag=${tag}&per_page=8&top=7`, {
          next: { revalidate: 3600 },
        }).then(async (r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json() as Promise<DevArticle[]>;
        })
      )
    );

    const seen = new Set<number>();
    const articles: DevArticle[] = [];
    for (const result of results) {
      if (result.status === "fulfilled" && Array.isArray(result.value)) {
        for (const a of result.value) {
          if (!seen.has(a.id)) {
            seen.add(a.id);
            articles.push(a);
          }
        }
      }
    }
    // Most reactions first, limit to 20 slides
    articles.sort((a, b) => b.positive_reactions_count - a.positive_reactions_count);
    return articles.slice(0, 20);
  } catch {
    return [];
  }
}

export default async function BlogSliderSection() {
  const articles = await fetchSliderArticles();
  if (articles.length === 0) return null;
  return <BlogSlider articles={articles} />;
}
