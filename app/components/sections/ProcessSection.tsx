"use client";

import { motion } from "framer-motion";
import { FaRocket, FaPencilRuler, FaClipboardList } from "react-icons/fa";
const steps = [
  {
    number: "01",
    title: "Plan",
    description:
      "We analyze, strategize, and define a clear roadmap for success.",
    icon: FaClipboardList,
  },
  {
    number: "02",
    title: "Build",
    description: "Our team crafts scalable, high-performance solutions.",
    icon: FaPencilRuler,
  },
  {
    number: "03",
    title: "Deploy",
    description: "We launch with precision and optimize for long-term growth.",
    icon: FaRocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-28  bg-gradient-to-b from-gray-50 to-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Our Process
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative group bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Big Watermark Number */}
                <span className="absolute top-6 right-8 text-7xl font-bold text-purple-100 group-hover:text-purple-200 transition">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-600 transition">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-400 transition duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
