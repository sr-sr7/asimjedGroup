import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import BlogSliderSection from "@/components/BlogSliderSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-[1]">
      <Navbar />
      <Hero />

      {/* Separator */}
      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Services />

      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Portfolio />

      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Testimonials />

      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <BlogSliderSection />

      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Contact />

      <Footer />
    </main>
  );
}
