import HostingHero from "./components/HostingHero";
import ChooseUs from "./components/Why-Choose-Us";
import HostingCTA from "./components/HostingCTA";
import WhyChooseUs from "./components/Seo-service";
import WhyChooseIndustries from "./components/Seo-Partner";

export default async function HostingDomainSetupPage() {
  return (
    <main className="overflow-hidden">
      <HostingHero />
      <WhyChooseUs />
      <ChooseUs />
      <WhyChooseIndustries />
      <HostingCTA />
    </main>
  );
}
