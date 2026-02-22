"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

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
  );
}
