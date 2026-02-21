"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, BarChart3, Award } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Local Market Expertise",
    description:
      "As one of the established web design companies in Qatar, we possess deep understanding of local business practices, cultural preferences, and regulatory requirements. This knowledge translates into websites that connect authentically with Qatari audiences while supporting your business objectives.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "We leverage industry-leading platforms and technologies to build robust, scalable websites that grow with your business. Our expertise spans highly customizable WordPress development for content-rich sites, powerful Shopify and WooCommerce solutions for e-commerce excellence and custom solutions.",
  },
  {
    icon: BarChart3,
    title: "Digital Growth Strategy",
    description:
      "Beyond beautiful design, we build websites optimized for local search rankings, integrated with social media and marketing automation, and equipped with analytics for performance tracking. Through conversion optimization and A/B testing, your website becomes a powerful business tool that delivers measurable results.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Our portfolio showcases successful projects across diverse industries in Qatar, from luxury retail and hospitality to healthcare and professional services. Each project demonstrates our commitment to delivering results that exceed expectations and drive measurable business growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Blur Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px]rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-purple-600">Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine innovation, strategy, and creativity to deliver
            high-performing digital experiences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 mb-6 group-hover:bg-purple-600 transition-all duration-300">
                    <Icon
                      className="text-purple-600 group-hover:text-white transition-all duration-300"
                      size={26}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
