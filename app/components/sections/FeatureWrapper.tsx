import FeaturesGrid from "./FeatureGrid";
import StorySection from "./StorySection";
import WhyChooseUs from "./WhyChooseUsSection";

export default function FeaturesWrapper() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FeaturesGrid />

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-16" />

        <StorySection />

        <div className="my-20" />

        <WhyChooseUs />
      </div>
    </section>
  );
}
