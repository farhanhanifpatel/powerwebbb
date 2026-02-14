"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-12 py-20 shadow-2xl"
      >
        {/* Floating Gradient Orbs */}
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-200"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Grow Your Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Whether you&apos;re starting fresh or upgrading your technology,
              we help transform ideas into powerful digital solutions. Book a
              free consultation today.
            </motion.p>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex md:justify-end"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-10 py-5 text-lg font-semibold text-white shadow-xl hover:shadow-purple-500/40 transition"
            >
              Contact Us
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
