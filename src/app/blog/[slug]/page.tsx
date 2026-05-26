import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const articles: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
  content: string;
}> = {
  "nextjs-vs-react": {
    title: "Next.js مقابل React: أيهما تختار لمشروعك القادم؟",
    excerpt: "مقارنة تفصيلية بين Next.js وReact لمساعدتك في اختيار الأنسب لمشروعك.",
    category: "تطوير المواقع",
    date: "20 مايو 2026",
    readTime: "7 دقائق",
    color: "#00d4aa",
    content: `
## مقدمة

عند البدء في مشروع ويب جديد، من أصعب القرارات هي اختيار الإطار المناسب. React وNext.js يبدوان متشابهين للوهلة الأولى، لكن لكل منهما حالات استخدام مختلفة.

## ما هو React؟

React هو مكتبة JavaScript لبناء واجهات المستخدم. تُمكّنك من بناء تطبيقات SPA (Single Page Applications) بشكل سريع ومرن.

**مميزاته:**
- مرونة عالية في هيكلة المشروع
- مجتمع ضخم وموارد وفيرة
- سهل التعلم نسبياً
- مثالي لتطبيقات الـ Dashboard والـ Admin Panels

## ما هو Next.js؟

Next.js هو إطار عمل يبنى فوق React، يُضيف إليه قدرات Server-Side Rendering (SSR) وStatic Site Generation (SSG) وكثيراً من الميزات المدمجة.

**مميزاته:**
- SEO أفضل بفضل SSR وSSG
- أداء متميز وCore Web Vitals عالية
- نظام Routing مدمج
- API Routes في نفس المشروع
- تحسين تلقائي للصور والخطوط

## متى تختار React؟

- تطبيقات تتطلب لوحات تحكم معقدة
- مشاريع لا تحتاج SEO (مثل التطبيقات الداخلية)
- عندما تريد مرونة كاملة في الهيكلة
- فرق تقنية متمرسة مع React فقط

## متى تختار Next.js؟

- المواقع الترويجية والتجارية التي تحتاج SEO
- المدونات والمتاجر الإلكترونية
- مشاريع تحتاج API Backend بسيط
- عندما تريد أداءً مثالياً من البداية

## الخلاصة

في معظم المشاريع التجارية، **Next.js هو الاختيار الأفضل** لأنه يوفر SEO وأداء متميز بدون تعقيد إضافي. React وحده مناسب أكثر للتطبيقات الداخلية وDashboards.
    `,
  },
  "ui-ux-tips": {
    title: "10 نصائح ذهبية لتصميم تجربة مستخدم استثنائية",
    excerpt: "تعرّف على أهم مبادئ UI/UX التي يتجاهلها كثير من المصممين.",
    category: "تصميم UI/UX",
    date: "15 مايو 2026",
    readTime: "5 دقائق",
    color: "#3a7bd5",
    content: `
## مقدمة

تصميم تجربة المستخدم ليس مجرد جعل الموقع جميلاً، بل هو ضمان أن يصل المستخدم لهدفه بأقل جهد ممكن.

## النصائح العشر

**1. ابدأ بالمستخدم لا التصميم**
قبل أي شيء، افهم من هو المستخدم وماذا يريد. اعمل User Research وPersonas.

**2. الوضوح فوق الإبداع**
موقع واضح ومباشر أفضل من موقع مبتكر ومربك. لا تجبر المستخدم على التفكير.

**3. التسلسل البصري (Visual Hierarchy)**
استخدم الحجم واللون والمسافات لتوجيه عين المستخدم نحو أهم العناصر أولاً.

**4. الاتساق في كل مكان**
الأزرار، الألوان، الخطوط — يجب أن تكون متسقة في كل صفحة.

**5. Feedback لكل تفاعل**
عندما يضغط المستخدم زراً، أخبره بما يحدث. Loading states، رسائل نجاح وخطأ.

**6. تصميم للأخطاء**
المستخدمون يرتكبون أخطاء. صمّم رسائل خطأ واضحة ومساعِدة لا مخيفة.

**7. الجوال أولاً (Mobile First)**
ابدأ التصميم من أصغر شاشة ثم وسّع. أغلب المستخدمين على الجوال.

**8. سرعة التحميل جزء من UX**
موقع بطيء = تجربة سيئة. استهدف Core Web Vitals ممتازة.

**9. اختبر مع مستخدمين حقيقيين**
رأيك في التصميم لا يهم. اختبر مع 5 مستخدمين وستكتشف 80% من المشاكل.

**10. البساطة دائماً تفوز**
إزالة ميزة لا يحتاجها المستخدم أفضل من إضافتها. Less is more.
    `,
  },
  "seo-guide-2025": {
    title: "دليل SEO الشامل لعام 2025: كل ما تحتاج معرفته",
    excerpt: "من الكلمات المفتاحية إلى Core Web Vitals، دليل عملي لرفع ترتيب موقعك.",
    category: "تحسين محركات البحث",
    date: "10 مايو 2026",
    readTime: "12 دقيقة",
    color: "#7ed957",
    content: `
## لماذا SEO مهم في 2025؟

93% من التجارب على الإنترنت تبدأ من محرك بحث. بدون SEO، موقعك غير مرئي.

## أولاً: البحث عن الكلمات المفتاحية

استخدم أدوات مثل Google Keyword Planner وAhrefs وSemrush لإيجاد كلمات تجمع بين:
- حجم بحث كافٍ
- منافسة معقولة
- نية تجارية أو معلوماتية واضحة

## ثانياً: SEO On-Page

- **العنوان (Title Tag):** يجب أن يحتوي الكلمة المفتاحية الرئيسية
- **Meta Description:** ملخص جذاب في 160 حرف
- **Headings (H1, H2, H3):** هيكلة منطقية للمحتوى
- **Alt Text للصور:** وصف دقيق لكل صورة
- **Internal Linking:** ربط الصفحات ببعضها

## ثالثاً: Core Web Vitals

Google يقيس تجربة المستخدم بثلاثة مقاييس:
- **LCP (Largest Contentful Paint):** أقل من 2.5 ثانية
- **FID (First Input Delay):** أقل من 100ms
- **CLS (Cumulative Layout Shift):** أقل من 0.1

## رابعاً: بناء الروابط (Link Building)

- اكتب محتوى يستحق الإشارة إليه
- تواصل مع مواقع في مجالك
- المشاركة في مجتمعات تقنية

## الخلاصة

SEO عملية طويلة المدى. الصبر والمحتوى الجيد هما المفتاح.
    `,
  },
  "react-native-flutter": {
    title: "React Native أم Flutter؟ مقارنة حقيقية من تجربة",
    excerpt: "بعد بناء 20+ تطبيق بكليهما، نشارك تجربتنا الحقيقية.",
    category: "تطوير التطبيقات",
    date: "5 مايو 2026",
    readTime: "9 دقائق",
    color: "#00d4aa",
    content: `
## من أين جاء كلاهما؟

React Native طورته Meta (فيسبوك) عام 2015. Flutter طورته Google عام 2018. كلاهما يسمح ببناء تطبيق واحد يعمل على iOS وAndroid.

## React Native

**المميزات:**
- يستخدم JavaScript/TypeScript (معروف لمطوري الويب)
- Hot Reload سريع
- مكتبات npm الضخمة متاحة
- مجتمع أكبر وأقدم

**العيوب:**
- أداء أقل في التطبيقات الثقيلة
- Bridge overhead بين JS وNative
- تحديثات متكررة قد تكسر الكود

## Flutter

**المميزات:**
- أداء ممتاز (يرسم الواجهة مباشرة بدون Bridge)
- تصميم متسق على iOS وAndroid
- Dart سهل التعلم
- Hot Reload أسرع

**العيوب:**
- Dart ليس شائعاً خارج Flutter
- حجم التطبيق أكبر قليلاً
- مجتمع أصغر من React Native

## التوصية

- **React Native:** إذا فريقك من مطوري JavaScript أو يشاركون كود مع موقع React
- **Flutter:** إذا تريد أداء وتصميم متميز بدون تنازلات

في AsiMjed، نستخدم الاثنين حسب احتياج كل مشروع.
    `,
  },
  "ecommerce-conversion": {
    title: "كيف ترفع معدل تحويل متجرك الإلكتروني بـ 3 أضعاف؟",
    excerpt: "استراتيجيات مثبتة لتحسين صفحات المنتجات وعملية الدفع.",
    category: "التجارة الإلكترونية",
    date: "28 أبريل 2026",
    readTime: "8 دقائق",
    color: "#3a7bd5",
    content: `
## ما هو معدل التحويل؟

معدل التحويل (Conversion Rate) هو نسبة الزوار الذين يكملون عملية الشراء. المتوسط العالمي 1-3%، الممتاز 5%+.

## 1. صفحة المنتج المثالية

- صور عالية الجودة من زوايا متعددة
- وصف يركز على الفوائد لا المواصفات
- تقييمات حقيقية من عملاء سابقين
- زر "أضف للسلة" واضح وبارز

## 2. تبسيط عملية الدفع

- Checkout في خطوة واحدة أو اثنتين
- لا تجبر المستخدم على إنشاء حساب
- أظهر إجمالي التكلفة مبكراً (لا مفاجآت)
- طرق دفع متعددة (مدى، Apple Pay، PayPal)

## 3. بناء الثقة

- شهادة SSL واضحة
- سياسة إرجاع سهلة
- شعارات بوابات الدفع
- ضمان استرجاع المال

## 4. تجربة الجوال أولاً

60%+ من المتسوقين على جوالاتهم. تأكد من أن الشراء سهل على الشاشة الصغيرة.

## 5. التخلي عن السلة (Cart Abandonment)

70% من المستخدمين يتركون السلة. استخدم:
- إيميل تذكير تلقائي
- إشعارات Push
- عرض خصم محدود الوقت

## النتيجة

بتطبيق هذه النصائح، رأينا عملاء يرفعون معدل تحويلهم من 1.2% إلى 4.1% خلال 3 أشهر.
    `,
  },
  "supabase-guide": {
    title: "Supabase: البديل المفتوح المصدر لـ Firebase الذي يستحق الاهتمام",
    excerpt: "استعراض شامل لـ Supabase وكيف تستخدمه Backend كامل لمشاريعك.",
    category: "تطوير المواقع",
    date: "22 أبريل 2026",
    readTime: "10 دقائق",
    color: "#7ed957",
    content: `
## ما هو Supabase؟

Supabase هو منصة Backend مفتوحة المصدر تقدم قاعدة بيانات PostgreSQL، Authentication، Storage، وReal-time subscriptions.

## لماذا Supabase بدلاً من Firebase؟

| الميزة | Firebase | Supabase |
|--------|----------|----------|
| قاعدة البيانات | NoSQL | PostgreSQL (SQL) |
| المصدر | مغلق | مفتوح |
| الأسعار | قد تكون مفاجئة | شفافة ومتوقعة |
| SQL Queries | لا | نعم |

## كيف تبدأ مع Supabase؟

1. أنشئ مشروعاً على supabase.com
2. ثبّت المكتبة: `npm install @supabase/supabase-js`
3. أنشئ الـ Client:

\`\`\`typescript
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
\`\`\`

## ميزات Supabase الأقوى

**Authentication:** دعم Email، Google، GitHub، Twitter، وأكثر

**Row Level Security (RLS):** أمان على مستوى الصف في قاعدة البيانات

**Real-time:** اشترك لتحديثات فورية عند تغيير البيانات

**Storage:** تخزين الملفات والصور مع CDN

## في AsiMjed

نستخدم Supabase في معظم مشاريعنا الجديدة لأنه يوفر وقت التطوير ويقلل التكلفة بشكل كبير.
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "مقال غير موجود" };
  return {
    title: `${article.title} – AsiMjed Blog`,
    description: article.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const k = key++;
    if (line.startsWith("## ")) {
      elements.push(<h2 key={k} className="text-[#e6f0ff] font-black text-xl mt-8 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={k} className="text-[#e6f0ff] font-bold text-sm mb-1">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={k} className="text-[#8ba3c7] text-sm leading-relaxed mr-4 list-disc">{line.slice(2)}</li>);
    } else if (line.startsWith("|")) {
      // skip table lines (simplified)
    } else if (line.startsWith("`")) {
      elements.push(<code key={k} className="block bg-[#1f2937] rounded-xl p-4 text-[#00d4aa] text-xs font-mono my-3">{line.replace(/`/g, "")}</code>);
    } else if (line.trim()) {
      elements.push(<p key={k} className="text-[#8ba3c7] text-sm leading-relaxed mb-3">{line}</p>);
    }
  }
  return elements;
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-24 pb-16 px-6">
        {/* Back */}
        <div className="max-w-3xl mx-auto mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#8ba3c7] hover:text-[#00d4aa] transition-colors">
            <ArrowRight size={14} />
            العودة للمدونة
          </Link>
        </div>

        {/* Hero */}
        <div
          className="max-w-3xl mx-auto h-48 rounded-2xl overflow-hidden mb-8 flex items-center justify-center relative"
          style={{ background: `radial-gradient(circle at 40% 40%, ${article.color}22, transparent 60%), #1f2937` }}
        >
          <span
            className="text-7xl font-black opacity-20"
            style={{ fontFamily: "Orbitron, sans-serif", color: article.color }}
          >
            {slug.slice(0, 2).toUpperCase()}
          </span>
        </div>

        {/* Meta */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-[#8ba3c7]">
            <span className="flex items-center gap-1"><Tag size={11} />{article.category}</span>
            <span className="flex items-center gap-1"><Calendar size={11} />{article.date}</span>
            <span className="flex items-center gap-1"><Clock size={11} />{article.readTime} قراءة</span>
          </div>
          <h1 className="text-[#e6f0ff] font-black text-2xl md:text-3xl leading-snug mb-4">{article.title}</h1>
          <p className="text-[#8ba3c7] text-base leading-relaxed border-r-2 border-[#00d4aa] pr-4">{article.excerpt}</p>
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto bg-[#161b22] border border-white/5 rounded-2xl p-7 md:p-10">
          {renderContent(article.content)}
        </article>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-10 bg-[#161b22] border border-white/5 rounded-2xl p-7 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }} />
          <p className="text-[#e6f0ff] font-bold mb-2 relative z-10">هل تريد تطبيق هذا في مشروعك؟</p>
          <p className="text-[#8ba3c7] text-sm mb-4 relative z-10">فريق AsiMjed جاهز لمساعدتك</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0d1117] relative z-10 hover:scale-105 transition-transform text-sm"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
          >
            تواصل معنا الآن
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
