import HostingHero from "./components/HostingHero";
import HostingServices from "./components/HostingServices";
import HostingAudience from "./components/HostingAudience";
import HostingCTA from "./components/HostingCTA";
import WhyChooseUs from "./components/Why-Choose-Us";

export default function HostingDomainSetupPage() {
  return (
    <main className="overflow-hidden">
      <HostingHero />
      <HostingServices />
      <HostingAudience />
      <WhyChooseUs />
      <HostingCTA />
    </main>
  );
}
