"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Enterprise-Level Digital Solutions
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          At Powerweb, we blend strategy, technology, and innovation to build
          scalable digital ecosystems that drive measurable growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-12 rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-xl"
      >
        <p className="text-gray-700 text-lg">
          We don’t just build websites — we engineer digital experiences
          designed for performance, scalability, and long-term success.
        </p>
      </motion.div>
    </section>
  );
}
