import WhyChooseUs from "./components/ChoseUs";
import ItSupport from "./components/ItSupport";
import PastWork from "./components/PastWork";
import ShopifyService from "./components/ShopifyService";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";
import WordPressService from "./components/WorpressService";

export default function ServicesPage() {
  return (
    <>
      <WhyChooseUs />
      <WhoWeAre />
      <WordPressService />
      <ShopifyService />
      <ItSupport />
      <PastWork />
      <Testimonials />
    </>
  );
}
