"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-white dark:from-neutral-950 dark:to-neutral-900">
      {/* Background Glow */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT IMAGE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative order-1 md:order-1"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/security-amico-664d80a44f959-1536x1536.webp"
              alt="Website Design Showcase"
              width={700}
              height={600}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="relative group order-2 md:order-2"
        >
          <div className="relative bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-500">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-5">
              Best Cyber Security Services in Qatar
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-5">
              Welcome to PowerWeb, your trusted cybersecurity services company
              in Qatar. In an increasingly digital world where cyber threats
              evolve daily, safeguarding your business against sophisticated
              attacks is more crucial than ever. As a leading cyber security
              company Qatar trusts, we specialize in providing comprehensive
              cybersecurity solutions tailored to protect your organization’s
              digital infrastructure and sensitive data.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-6">
              With Qatar’s National Cybersecurity Strategy 2024-2030 positioning
              the nation as a global leader in secure technology adoption,
              businesses need robust cybersecurity frameworks more than ever.
              PowerWeb stands at the forefront of this digital transformation,
              offering cutting-edge cyber security services in Qatar that align
              with national security objectives and international best
              practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
