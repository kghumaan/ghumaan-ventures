import LeftColumn from "@/components/LeftColumn";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FlowField from "@/components/FlowField";

export default function Home() {
  return (
    <div className="relative">
      <FlowField />
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:gap-4 lg:px-24 lg:py-0">
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
