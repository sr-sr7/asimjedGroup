const stars = "★★★★★";

const reviews = [
  {
    name: "أحمد الشمري",
    role: "صاحب متجر إلكتروني",
    text: "تجربة رائعة من البداية للنهاية. الفريق محترف وملتزم بالمواعيد، والموقع تجاوز توقعاتي. زادت مبيعاتنا 40% بعد إطلاق الموقع الجديد.",
    avatar: "أ",
    color: "#00d4aa",
  },
  {
    name: "سارة المطيري",
    role: "مديرة تسويق رقمي",
    text: "محترفون بكل معنى الكلمة. أنجزوا تطبيق الجوال في الوقت المحدد وبجودة عالية جداً. الدعم بعد التسليم ممتاز وسريع الاستجابة في أي وقت.",
    avatar: "س",
    color: "#3a7bd5",
  },
  {
    name: "محمد العتيبي",
    role: "مؤسس شركة ناشئة",
    text: "استثمار ممتاز. الموقع الذي صمموه أعطاني مصداقية أمام العملاء وجلب لي عملاء جدد لم أكن أتوقعهم. أنصح بهم بكل ثقة.",
    avatar: "م",
    color: "#7ed957",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[5px] uppercase text-[#00d4aa] font-bold mb-3">
            آراء العملاء
          </p>
          <h2
            className="grad-text font-black mb-4"
            style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
          >
            ماذا يقولون عنّا
          </h2>
          <p className="text-[#8ba3c7] max-w-md mx-auto leading-relaxed">
            رأي عملائنا هو أهم ما نفخر به — هنا بعض تجاربهم معنا
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#161b22] border border-white/5 rounded-2xl p-6 flex flex-col gap-4
                         hover:border-white/10 hover:-translate-y-1 transition-all duration-300
                         relative overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.06] rounded-full blur-2xl"
                style={{ background: r.color, transform: "translate(30%, -30%)" }}
              />

              {/* Stars */}
              <span className="text-base tracking-wider" style={{ color: "#f5c518" }}>
                {stars}
              </span>

              {/* Quote */}
              <p className="text-[#8ba3c7] text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             font-black text-base flex-shrink-0"
                  style={{ background: `${r.color}20`, color: r.color, border: `1px solid ${r.color}40` }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="text-[#e6f0ff] font-bold text-sm">{r.name}</p>
                  <p className="text-[#8ba3c7] text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#8ba3c7] text-xs">
          {[
            { num: "50+",  label: "مشروع مكتمل" },
            { num: "100%", label: "رضا العملاء" },
            { num: "3",    label: "أشهر ضمان مجاني" },
            { num: "24h",  label: "رد على الاستفسارات" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className="grad-text font-black text-2xl"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {s.num}
              </span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
