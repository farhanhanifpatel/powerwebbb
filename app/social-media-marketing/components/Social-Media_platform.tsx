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
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            {data?.sectionTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Sidebar Tabs */}
            <div className="relative space-y-3">
              {tabs.map((tab, index) => {
                const isActive = active === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActive(index)}
                    className="relative"
                  >
                    {/* Animated Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <div
                      className={`relative z-10 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-500 hover:text-black hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <span className="text-lg font-semibold">{tab.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2 relative">
              <div className="relative bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl">
                {/* Soft Gradient Border */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-10 blur-lg pointer-events-none"></div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-10"
                  >
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <PortableText value={tabs[active]?.content} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-[#0f0f14] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            Your vision, our expertise—creating unforgettable mobile
            experiences.
          </motion.h3>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Glow */}
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
                {/* Glow Effect */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl">
                  {/* Floating Icon */}
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

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
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
      </section>
    </>
  );
}
