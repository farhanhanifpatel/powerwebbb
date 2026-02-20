// import Hero from "./components/sections/HeroSection";

// export default function Home() {
//   return (
//     <Hero
//       title="BEST IT COMPANY IN DOHA, QATAR"
//       buttonText="Get Free Quote"
//       buttonLink="/contact"
//       theme="light"
//     />
//   );
// }

import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeatureWrapper";
import ServicesSection from "./components/sections/ServicesSection";
import TechAndClients from "./components/sections/TechClient";
import FAQSection from "./components/sections/Faq";
import ProcessSection from "./components/sections/ProcessSection";
import CTASection from "./components/sections/CTA";
import ResultsSection from "./components/sections/ResultSection";
import Testimonials from "./web-design-qatar/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection
        title="BEST IT COMPANY IN DOHA, QATAR"
        buttonText="Get Free Quote"
        buttonLink="/contact"
        theme="light"
      />
      <FeaturesSection />
      <ServicesSection />
      <TechAndClients />
      <ProcessSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
