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
              src="/IT-Support-Doha-Qatar-768x768.webp"
              alt="IT Support Doha Qatar"
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
            {/* Small Label */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full"></div>
            <p className="text-purple-600 font-semibold mb-3 tracking-wide uppercase text-sm">
              Serving All Platforms
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-5">
              Professional IT Support Qatar and Services
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-5">
              In today’s technology-driven world, reliable{" "}
              <strong>IT support and maintenance services</strong> are essential
              for maintaining smooth and efficient business operations. At
              PowerWeb, we specialize in managed IT support and IT services and
              support in Doha, Qatar, providing comprehensive solutions that
              cover everything from routine maintenance and troubleshooting to
              advanced technical assistance and system optimization.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-6">
              Our team of skilled IT professionals serves as your dedicated
              onsite IT support services provider, ensuring your technology
              infrastructure runs seamlessly, allowing you to focus on your core
              business objectives. Whether you need on-demand support, ongoing
              maintenance, or strategic IT consulting, we have the expertise and
              experience to meet your needs and help your business thrive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
