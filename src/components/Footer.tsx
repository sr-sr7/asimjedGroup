import Image from "next/image";
import Link from "next/link";

const WA = "https://wa.me/966591088884";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
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

          {/* WhatsApp */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30
                       text-[#25D366] text-sm font-bold hover:bg-[#25D366]/20 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            واتساب
          </a>
        </div>

        <div className="h-px bg-white/5 my-8" />

        {/* وثيقة العمل الحر */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#00d4aa]/20 bg-[#00d4aa]/5"
          >
            {/* أيقونة الشهادة */}
            <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center text-[#00d4aa] text-base flex-shrink-0">
              ✓
            </div>
            <div className="text-right">
              <div className="text-[#e6f0ff] text-xs font-bold">
                مرخص من وزارة الموارد البشرية
              </div>
              <div className="text-[#8ba3c7] text-[10px] mt-0.5">
                وثيقة ممارس حر · رقم الوثيقة: <span className="text-[#00d4aa] font-mono">FL-270754426</span>
              </div>
              <div className="text-[#8ba3c7] text-[10px]">
                صالحة حتى: أغسطس 2026
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[#8ba3c7] text-xs">
          <span>© {new Date().getFullYear()} AsiMjed Group. جميع الحقوق محفوظة.</span>
          <span>صُنع بـ ♥ في السعودية</span>
        </div>
      </div>
    </footer>
  );
}
