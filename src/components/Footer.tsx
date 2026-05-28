import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/services" },
  { label: "أعمالنا", href: "/portfolio" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AsiMjed" width={40} height={40} className="rounded-xl" />
            <div>
              <div
                className="grad-text font-black text-lg"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                AsiMjed
              </div>
              <div className="text-[#8ba3c7] text-xs">مجموعة تطوير المواقع والتطبيقات</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#8ba3c7] hover:text-[#00d4aa] text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {["X", "in", "ig"].map((s) => (
              <button
                key={s}
                className="w-9 h-9 rounded-xl bg-[#161b22] border border-white/5 text-[#8ba3c7] hover:text-[#00d4aa] hover:border-[#00d4aa]/30 transition-all text-xs font-bold"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/5 my-8" />

        {/* وثيقة العمل الحر */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://freelancers.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#00d4aa]/20 bg-[#00d4aa]/5 hover:border-[#00d4aa]/50 hover:bg-[#00d4aa]/10 transition-all group"
          >
            {/* أيقونة الشهادة */}
            <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center text-[#00d4aa] text-base flex-shrink-0">
              ✓
            </div>
            <div className="text-right">
              <div className="text-[#e6f0ff] text-xs font-bold group-hover:text-[#00d4aa] transition-colors">
                مرخص من وزارة الموارد البشرية
              </div>
              <div className="text-[#8ba3c7] text-[10px] mt-0.5">
                وثيقة ممارس حر · رقم الوثيقة: <span className="text-[#00d4aa] font-mono">FL-270754426</span>
              </div>
              <div className="text-[#8ba3c7] text-[10px]">
                صالحة حتى: أغسطس 2026
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[#8ba3c7] text-xs">
          <span>© {new Date().getFullYear()} AsiMjed Group. جميع الحقوق محفوظة.</span>
          <span>صُنع بـ ♥ في السعودية</span>
        </div>
      </div>
    </footer>
  );
}
