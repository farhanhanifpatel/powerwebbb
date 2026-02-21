import WhyChooseUs from "./components/ChoseUs";
import ItSupport from "./components/ItSupport";
import PastWork from "./components/PastWork";
import ShopifyService from "./components/ShopifyService";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";
import WordPressService from "./components/WorpressService";
import OurFeatures from "./components/OurFeatures";
import WebDesignProcess from "./components/DesignProcess";
import TechnologiesSection from "./components/TechnologiesUse";
import FAQSection from "./components/Faq";
import CTASection from "./components/CTA";
import HomePage from "./components/Home";
export default function ServicesPage() {
  return (
    <>
      <HomePage />
      <WhyChooseUs />
      <WhoWeAre />
      <WordPressService />
      <ShopifyService />
      <ItSupport />
      <PastWork />
      <Testimonials />
      <OurFeatures />
      <WebDesignProcess />
      <TechnologiesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
