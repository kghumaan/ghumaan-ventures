"use client";

import { useEffect, useState } from "react";
import LeftColumn from "@/components/LeftColumn";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:gap-4 lg:px-24 lg:py-0">
        <LeftColumn />
        <main id="content" className="pt-12 lg:w-[52%] lg:py-24">
          <hr className="mb-8 border-slate-800 lg:hidden" />
          <About />
          <Services />
          <Experience />
          <CTA />
          <Footer />
        </main>
      </div>
    </div>
  );
}
