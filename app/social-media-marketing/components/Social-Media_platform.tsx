"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import {
  Tag,
  MessageCircle,
  Users,
  Target,
  Handshake,
  DollarSign,
  TrendingUp,
  BarChart3,
  MapPin,
} from "lucide-react";

const benefits = [
  {
    icon: Tag,
    title: "Increased Brand Awareness",
    description:
      "By establishing a presence on social media platforms, businesses can expand their reach and visibility among a wider audience of their choice.",
  },
  {
    icon: MessageCircle,
    title: "Enhanced Engagement",
    description:
      "Social media enables direct interaction with customers, allowing businesses to foster meaningful relationships and conversations with their audience.",
  },
  {
    icon: Users,
    title: "Improved Customer Loyalty",
    description:
      "Through consistent engagement and valuable content, businesses can cultivate a loyal customer base who are more likely to advocate for their brand.",
  },
  {
    icon: Target,
    title: "Targeted Advertising",
    description:
      "Social media platforms offer robust targeting options, allowing businesses to reach specific audience, interests, and behaviors with their campaigns.",
  },
  {
    icon: Handshake,
    title: "Customer Trust",
    description:
      "Social media marketing builds trust by fostering authentic interactions, leading to stronger relationships and increased loyalty of your customers.",
  },
  {
    icon: DollarSign,
    title: "Increased Profits",
    description:
      "Social media marketing can significantly boost profitability by expanding reach, driving conversions, and enhancing customer engagement.",
  },

  // ✅ NEW ADDED ITEMS

  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Our SEO strategies are backed by measurable success stories, delivering consistent ranking improvements and real business growth.",
  },
  {
    icon: BarChart3,
    title: "Transparent Results",
    description:
      "We provide detailed reports and performance insights so you always know how your campaigns are performing.",
  },
  {
    icon: MapPin,
    title: "Local Market Expertise",
    description:
      "With deep understanding of local search trends and customer behavior, we help your business dominate your regional market.",
  },
];

interface Tab {
  title: string;
  content: PortableTextBlock[];
}

interface Props {
  data: {
    sectionTitle: string;
    tabs: Tab[];
  };
}

export default function MobileService({ data }: Props) {
  const [active, setActive] = useState(0);
  const tabs = data?.tabs || [];

  if (!tabs.length) return null;

  return (
    <>
      {/* FIRST SECTION */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {data.sectionTitle}
          </h2>

          {/* Horizontal Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`px-6 py-3 rounded-t-lg font-semibold transition-all duration-300
                ${
                  active === index
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content Box */}
          <div className="bg-white border-2 border-purple-600 rounded-lg p-8">
            <div className="prose max-w-none text-gray-700">
              <PortableText value={tabs[active]?.content} />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md"
                  >
                    <Icon size={26} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
