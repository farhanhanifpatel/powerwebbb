export const dynamic = "force-dynamic";
import MobileAppHero from "./components/MobileAppHero";
import MobileAppQatarSection from "./components/MobileApp-Qatar";
import MobileAppCTA from "./components/MobileAppCTA";
import WhyChooseUs from "./components/Why-Choose-Us";
import MobileService from "./components/MobileService";

import { client } from "./../lib/sanity";
import type { PortableTextBlock } from "@portabletext/types";
import TechnologiesSection from "./components/TechnologiesUse";
import Faq from "./components/Faq";
interface Tab {
  title: string;
  content: PortableTextBlock[];
}

interface ServicesData {
  sectionTitle: string;
  tabs: Tab[];
}

export default async function HostingDomainSetupPage() {
  const data: ServicesData = await client.fetch(`
    *[_type == "servicesTabs"][0]{
      sectionTitle,
      tabs[]{
        title,
        content
      }
    }
  `);

  return (
    <main className="overflow-hidden">
      <MobileAppHero />
      <MobileAppQatarSection />
      <MobileService data={data} />
      <TechnologiesSection />
      <WhyChooseUs />
      <MobileAppCTA />
      <Faq />
    </main>
  );
}
