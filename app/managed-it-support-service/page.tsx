export const dynamic = "force-dynamic";

import ShopifyService from "./components/ShopifyService";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";
import WordPressService from "./components/WorpressService";
import FAQSection from "./components/Faq";
import CTASection from "./components/CTA";
import HomePage from "./components/Home";
import OurServices from "./components/OurServices";
import WhyManagedIT from "./components/WhyManageIt";
import OfficeNetwork from "./components/Office-Network";
import DomainSetup from "./components/Domain-Setup";

export default function ServicesPage() {
  return (
    <>
      <HomePage />
      <OurServices />
      <WhoWeAre />
      <WordPressService />
      <ShopifyService />
      <DomainSetup />
      <OfficeNetwork />
      <WhyManagedIT />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
