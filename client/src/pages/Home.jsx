import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import TechStack from "@/components/sections/techstack/TechStack";
import About from "@/components/sections/about/AboutSection";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import CTASection from "@/components/sections/cta/CTASection";

export default function Home() {
  return (
    <main className="mt-20 overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Testimonials />
      <CTASection />
    </main>
  );
}