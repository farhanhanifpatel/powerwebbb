/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceSectionProps {
  title: string;
  description1: string;
  description2: string;
  image: string;
  reverse?: boolean;
}

export default function ServiceSection({
  title,
  description1,
  description2,
  image,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Accent Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {description1}
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {description2}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            src={image}
            alt={title}
            width={700}
            height={600}
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
