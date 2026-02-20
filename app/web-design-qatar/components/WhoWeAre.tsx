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
              src="/web-design-doha-qatar.webp"
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
            {/* Small Label */}
            <p className="text-purple-600 font-semibold mb-3 tracking-wide uppercase text-sm">
              Who We Are
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-5">
              Leading Website Design Company in Qatar Since{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                2019
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-5">
              PowerWeb has been Qatar’s trusted destination for innovative web
              design solutions since 2019, driving business growth and enhancing
              digital presence for companies across Doha and the Middle East. As
              a proven web design company in Qatar, we combine technical
              expertise with creative vision to deliver websites that not only
              look exceptional but also perform brilliantly across all devices
              and platforms.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-6">
              Our team understands the unique business landscape of Qatar and
              the Middle East, creating digital experiences that resonate with
              local audiences while meeting international standards. Whether
              you’re a startup in Doha’s bustling business district or an
              established enterprise looking to modernize your online presence,
              our web design Qatar services are crafted to elevate your brand
              and engage your customers effectively.
            </p>

            {/* Review Badges */}
            <div className="flex flex-wrap gap-5 mt-6">
              {[
                "/PowerWeb-Reviews.webp",
                "/Trust-Pilot-Reviews-PowerWeb.webp",
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={img}
                    alt="Review Badge"
                    className="w-36 h-auto transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
