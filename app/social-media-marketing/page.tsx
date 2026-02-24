export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store"; // ✅ Important

import HostingHero from "./components/HostingHero";
import OurMarketing from "./components/Our-marketing";
import WhyChooseUs from "./components/Why-Choose-Us";
import SocialMediaPlatform from "./components/Social-Media_platform";
import CTA from "./components/CTA";
import { client } from "./../lib/sanity";
import type { PortableTextBlock } from "@portabletext/types";

interface Tab {
  title: string;
  content: PortableTextBlock[];
}

interface MediaData {
  sectionTitle: string;
  tabs: Tab[];
}

export default async function HostingDomainSetupPage() {
  const data: MediaData | null = await client.fetch(
    `
      *[_type == "mediaTabs"][0]{
        sectionTitle,
        tabs[]{
          title,
          content
        }
      }
    `,
    {},
    {
      cache: "no-store", // ✅ THIS disables caching at fetch level
    },
  );

  return (
    <main className="overflow-hidden">
      <HostingHero />
      <OurMarketing />
      <WhyChooseUs />
      <SocialMediaPlatform data={data} />
      <CTA />
    </main>
  );
}
