import { MetadataRoute } from "next";

const BASE = "https://www.asimjed.com";

// مقالات المدونة الداخلية
const blogArticles = [
  { slug: "nextjs-vs-react",      date: "2026-05-20" },
  { slug: "ui-ux-tips",           date: "2026-05-15" },
  { slug: "seo-guide-2025",       date: "2026-05-10" },
  { slug: "react-native-flutter", date: "2026-05-05" },
  { slug: "ecommerce-conversion", date: "2026-04-28" },
  { slug: "supabase-guide",       date: "2026-04-22" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogArticles.map(({ slug, date }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE,               lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portfolio`,lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/blog`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/contact`,  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    ...blogEntries,
  ];
}
