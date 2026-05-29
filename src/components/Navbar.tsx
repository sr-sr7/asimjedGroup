"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "خدماتنا", href: "/services" },
  { label: "أعمالنا", href: "/portfolio" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="شعار AsiMjed" width={40} height={40} className="rounded-lg" />
          <span
            className="font-orbitron font-black text-lg grad-text"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            AsiMjed
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#8ba3c7] hover:text-[#00d4aa] transition-colors duration-200 font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl text-sm font-bold text-[#0d1117] grad-border"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
          >
            ابدأ مشروعك
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="md:hidden text-[#8ba3c7] hover:text-[#00d4aa] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#161b22]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#8ba3c7] hover:text-[#00d4aa] transition-colors font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl text-sm font-bold text-[#0d1117] text-center"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
          >
            ابدأ مشروعك
          </Link>
        </div>
      )}
    </header>
  );
}
