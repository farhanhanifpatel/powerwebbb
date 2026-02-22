"use client";

import {
  Monitor,
  Target,
  PhoneCall,
  TrendingUp,
  Settings,
  Headphones,
  Activity,
  Grid,
  Camera,
  ShoppingBag,
  MapPin,
  BookOpen,
  CreditCard,
} from "lucide-react";

export default function WhyChooseIndustries() {
  return (
    <>
      {/* WHY CHOOSE POWERWEB */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-14">
            Why Choose PowerWeb as Your SEO Partner?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <WhyCard
              icon={<Monitor size={28} />}
              title="Proven Track Record"
              text="As the best SEO company Qatar has to offer, we’ve helped hundreds of businesses achieve their digital marketing goals through strategic SEO implementation."
            />

            <WhyCard
              icon={<Target size={28} />}
              title="Transparent Results"
              text="Our affordable SEO services come with detailed reporting and analytics, so you always know exactly how your investment is performing."
            />

            <WhyCard
              icon={<PhoneCall size={28} />}
              title="Local Market Expertise"
              text="Deep understanding of Qatar’s business landscape, consumer behavior, and search patterns ensures your SEO strategy resonates with local audiences."
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-28 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-16">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <IndustryCard
              icon={<Activity size={26} />}
              title="Healthcare & Medical"
              text="Specialized medical SEO for clinics and hospitals"
            />

            <IndustryCard
              icon={<Grid size={26} />}
              title="Real Estate"
              text="Property-focused SEO strategies for developers and agents"
            />

            <IndustryCard
              icon={<Camera size={26} />}
              title="Hospitality & Tourism"
              text="Specialized medical SEO for clinics and hospitals"
            />

            <IndustryCard
              icon={<ShoppingBag size={26} />}
              title="E-commerce & Retail"
              text="Comprehensive online store optimization"
            />

            <IndustryCard
              icon={<MapPin size={26} />}
              title="Professional Services"
              text="Law firms, consultancies, and B2B service providers"
            />

            <IndustryCard
              icon={<BookOpen size={26} />}
              title="Education"
              text="Universities, schools, and training institutes"
            />

            <IndustryCard
              icon={<CreditCard size={26} />}
              title="Finance"
              text="Banks, investment firms, and financial advisors"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* WHY CARD */
function WhyCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4 text-purple-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

/* INDUSTRY CARD */
function IndustryCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4 text-purple-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
