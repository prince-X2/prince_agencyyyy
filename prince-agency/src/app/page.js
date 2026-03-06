import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import InteractiveEffects from "@/components/InteractiveEffects";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <InteractiveEffects />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
