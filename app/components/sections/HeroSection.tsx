"use client";

type HeroProps = {
  title: string;
  buttonText: string;
  buttonLink: string;
  theme?: "light" | "dark";
};

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({
  title,
  buttonText,
  buttonLink,
  theme = "light",
}: HeroProps) {
  return (
    <section
      className="relative h-[90vh] overflow-x-hidden
 flex items-center justify-center text-center overflow-hidden bg-[#0b0b0f] text-white"
    >
      {/* 🔥 Animated Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-600/40 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/40 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-fuchsia-600/30 blur-[150px] rounded-full"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl px-6"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          We deliver high-performance IT solutions that help businesses grow,
          scale and stay secure in the digital world.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 flex justify-center"
        >
          <Link href={buttonLink}>
            <button
              className="px-10 py-4 rounded-xl font-semibold text-white
          bg-gradient-to-r from-purple-600 to-indigo-600
          hover:scale-105 hover:shadow-2xl transition"
            >
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
