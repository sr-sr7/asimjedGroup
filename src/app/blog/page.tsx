import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدونة – AsiMjed",
  description: "مقالات ونصائح في تطوير المواقع والتطبيقات وتصميم تجربة المستخدم",
};

const articles = [
  {
    slug: "nextjs-vs-react",
    title: "Next.js مقابل React: أيهما تختار لمشروعك القادم؟",
    excerpt: "مقارنة تفصيلية بين Next.js وReact لمساعدتك في اختيار الأنسب لمشروعك من حيث الأداء والـ SEO وسهولة التطوير.",
    category: "تطوير المواقع",
    date: "20 مايو 2026",
    readTime: "7 دقائق",
    color: "#00d4aa",
  },
  {
    slug: "ui-ux-tips",
    title: "10 نصائح ذهبية لتصميم تجربة مستخدم استثنائية",
    excerpt: "تعرّف على أهم مبادئ UI/UX التي يتجاهلها كثير من المصممين، وكيف تطبّقها لتحسين تجربة مستخدمي موقعك.",
    category: "تصميم UI/UX",
    date: "15 مايو 2026",
    readTime: "5 دقائق",
    color: "#3a7bd5",
  },
  {
    slug: "seo-guide-2025",
    title: "دليل SEO الشامل لعام 2025: كل ما تحتاج معرفته",
    excerpt: "من الكلمات المفتاحية إلى Core Web Vitals، دليل عملي لرفع ترتيب موقعك في نتائج البحث وزيادة الزوار العضويين.",
    category: "تحسين محركات البحث",
    date: "10 مايو 2026",
    readTime: "12 دقيقة",
    color: "#7ed957",
  },
  {
    slug: "react-native-flutter",
    title: "React Native أم Flutter؟ مقارنة حقيقية من تجربة",
    excerpt: "بعد بناء 20+ تطبيق بكليهما، نشارك تجربتنا الحقيقية في الأداء والمجتمع والميزات لمساعدتك في الاختيار.",
    category: "تطوير التطبيقات",
    date: "5 مايو 2026",
    readTime: "9 دقائق",
    color: "#00d4aa",
  },
  {
    slug: "ecommerce-conversion",
    title: "كيف ترفع معدل تحويل متجرك الإلكتروني بـ 3 أضعاف؟",
    excerpt: "استراتيجيات مثبتة لتحسين صفحات المنتجات، سلة التسوق، وعملية الدفع لزيادة مبيعاتك بشكل ملحوظ.",
    category: "التجارة الإلكترونية",
    date: "28 أبريل 2026",
    readTime: "8 دقائق",
    color: "#3a7bd5",
  },
  {
    slug: "supabase-guide",
    title: "Supabase: البديل المفتوح المصدر لـ Firebase الذي يستحق الاهتمام",
    excerpt: "استعراض شامل لـ Supabase وكيف يمكنك استخدامه كـ Backend كامل لمشاريعك مع Next.js وReact Native.",
    category: "تطوير المواقع",
    date: "22 أبريل 2026",
    readTime: "10 دقائق",
    color: "#7ed957",
  },
];

const categories = ["الكل", "تطوير المواقع", "تصميم UI/UX", "تحسين محركات البحث", "تطوير التطبيقات", "التجارة الإلكترونية"];

export default function BlogPage() {
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
            مقالات متخصصة في تطوير المواقع والتطبيقات والتصميم الرقمي من خبراء AsiMjed
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-[#161b22] border border-white/5 text-[#8ba3c7] hover:border-[#00d4aa]/30 hover:text-[#00d4aa] cursor-pointer transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured article */}
        <div className="max-w-5xl mx-auto mb-8">
          <Link href={`/blog/${articles[0].slug}`} className="group block">
            <div className="bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00d4aa]/20 transition-all hover:shadow-2xl">
              <div
                className="h-52 relative"
                style={{ background: `radial-gradient(circle at 30% 50%, ${articles[0].color}22, transparent 60%), #1f2937` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-6xl font-black opacity-20"
                    style={{ fontFamily: "Orbitron, sans-serif", color: articles[0].color }}
                  >
                    01
                  </span>
                </div>
                <span
                  className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-bold"
                  style={{ background: `${articles[0].color}22`, color: articles[0].color }}
                >
                  مقال مميز
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[#8ba3c7]">
                  <span className="flex items-center gap-1"><Tag size={11} />{articles[0].category}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} />{articles[0].date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{articles[0].readTime}</span>
                </div>
                <h2 className="text-[#e6f0ff] font-black text-xl mb-3 group-hover:text-[#00d4aa] transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-[#8ba3c7] leading-relaxed">{articles[0].excerpt}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Articles grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.slice(1).map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
              <div className="h-full bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00d4aa]/20 hover:-translate-y-1 transition-all duration-300">
                <div
                  className="h-36 relative"
                  style={{ background: `radial-gradient(circle at 40% 40%, ${article.color}22, transparent 60%), #1f2937` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-3xl font-black opacity-20"
                      style={{ fontFamily: "Orbitron, sans-serif", color: article.color }}
                    >
                      {articles.indexOf(article) + 1 < 10 ? `0${articles.indexOf(article) + 1}` : articles.indexOf(article) + 1}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-[#8ba3c7]">
                    <span className="flex items-center gap-1"><Tag size={10} />{article.category}</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{article.readTime}</span>
                  </div>
                  <h3 className="text-[#e6f0ff] font-bold text-sm leading-snug mb-2 group-hover:text-[#00d4aa] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#8ba3c7] text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <p className="text-xs text-[#4d6080] mt-3">{article.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
