"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-white dark:from-neutral-950 dark:to-neutral-900">
      {/* Background Glow */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Small Label */}
          <p className="text-purple-600 font-semibold mb-4 tracking-wide uppercase">
            Who We Are
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Leading Website Design Company in Qatar Since{" "}
            <span className=" bg-clip-text text-transparent">2019</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
            PowerWeb has been Qatar’s trusted destination for innovative web
            design solutions since 2019, driving business growth and enhancing
            digital presence for companies across Doha and the Middle East. As a
            proven web design company in Qatar, we combine technical expertise
            with creative vision to deliver websites that not only look
            exceptional but also perform brilliantly across all devices and
            platforms.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-10">
            Our team understands the unique business landscape of Qatar and the
            Middle East, creating digital experiences that resonate with local
            audiences while meeting international standards. Whether you’re a
            startup in Doha’s bustling business district or an established
            enterprise looking to modernize your online presence, our web design
            Qatar services are crafted to elevate your brand and engage your
            customers effectively.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-10">
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
                className="relative"
              >
                <img
                  src={img}
                  alt="Review Badge"
                  className="w-40 h-auto rounded-xl shadow-lg transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/web-design-doha-qatar.webp" // Replace with your image
              alt="Website Design Showcase"
              width={700}
              height={600}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
