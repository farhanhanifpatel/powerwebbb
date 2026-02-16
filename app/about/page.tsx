import AboutHero from "./components/AboutHero";
import AboutIntro from "./components/AboutIntro";
import AboutFeatures from "./components/AboutFeatures";
import ClientLogos from "./components/ClientLogos";
import AboutCTA from "./components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      {/* <AboutIntro /> */}
      <AboutFeatures />
      <ClientLogos />
      <AboutCTA />
    </main>
  );
}
