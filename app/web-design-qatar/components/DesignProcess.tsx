"use client";

import { motion } from "framer-motion";
import { Search, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Every project begins with comprehensive consultation to understand your business, competitors, and target audience. We analyze your current digital presence and identify opportunities for improvement and growth.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Development",
    description:
      "Our creative team develops wireframes, mockups, and prototypes that bring your vision to life. We maintain open communication throughout the development process, ensuring your feedback shapes the final product.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Growth",
    description:
      "Our relationship extends beyond project completion. We provide ongoing maintenance, security updates, and technical support to keep your website performing optimally as your business evolves.",
  },
];

export default function WebDesignProcess() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-purple-600 font-semibold mb-3 tracking-wider uppercase">
            Our Strategy
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Our Web Design Process
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            A structured and results-driven approach to building powerful
            digital experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="relative group"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

                {/* Glass Card */}
                <div className="relative backdrop-blur-xl bg-white/80 border border-gray-200 rounded-3xl p-10 shadow-xl transition duration-300 group-hover:shadow-2xl">
                  {/* Step Number (Big Background Number) */}
                  <span className="absolute top-6 right-8 text-6xl font-bold text-gray-100 group-hover:text-purple-100 transition duration-300">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100 mb-8 group-hover:bg-purple-600 transition duration-300">
                    <Icon
                      size={30}
                      className="text-purple-600 group-hover:text-white transition duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
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
