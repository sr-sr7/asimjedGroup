import Image from "next/image";

const links = [
  { label: "الرئيسية", href: "#hero" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#portfolio" },
  { label: "تواصل معنا", href: "#contact" },
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
              <a
                key={l.href}
                href={l.href}
                className="text-[#8ba3c7] hover:text-[#00d4aa] text-sm transition-colors"
              >
                {l.label}
              </a>
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

        {/* Divider */}
        <div className="h-px bg-white/5 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[#8ba3c7] text-xs">
          <span>© {new Date().getFullYear()} AsiMjed Group. جميع الحقوق محفوظة.</span>
          <span>صُنع بـ ♥ في السعودية</span>
        </div>
      </div>
    </footer>
  );
}
