import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import BgConnectivity from "../../public/bg-connectivity.jpeg";
import BgInterior from "../../public/bg-interior.jpeg";
import BgOverview from "../../public/bg-overview.jpeg";
import BgSafety from "../../public/bg-safety.jpeg";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  });
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Section
        image={BgOverview}
        tag="Overview"
        title="Elevate adventure in the luxury electric SUV of tomorrow"
        description="More space. More utility - All luxury."
      />
      <Section
        image={BgInterior}
        tag="Overview"
        title="Elevate adventure in the luxury electric SUV of tomorrow"
        description="More space. More utility - All luxury."
      />
      <Section
        image={BgConnectivity}
        tag="Overview"
        title="Elevate adventure in the luxury electric SUV of tomorrow"
        description="More space. More utility - All luxury."
      />
      <Section
        image={BgSafety}
        tag="Overview"
        title="Elevate adventure in the luxury electric SUV of tomorrow"
        description="More space. More utility - All luxury."
      />
    </main>
  );
}
