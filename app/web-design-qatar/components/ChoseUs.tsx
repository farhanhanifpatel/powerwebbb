"use client";

import { motion } from "framer-motion";
import { Crown, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Qatar-Focused Design",
    description:
      "Bilingual websites with local payment integration that connect with Middle Eastern audiences while meeting international standards.",
  },
  {
    icon: Zap,
    title: "Fast 2-3 Week Delivery",
    description:
      "Professional, mobile-optimized websites launched quickly without compromising quality. Your business moves fast—so do we.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Maintenance, security updates, and technical support included. One team, one contact, zero headaches.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden  dark:from-neutral-950 dark:to-neutral-900">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-500"
              >
                {/* Glass Card */}
                <div className="rounded-3xl bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
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
