"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  theme?: "light" | "dark";
}

export default function HeroSection({
  title,
  buttonText,
  buttonLink,
}: HeroProps) {
  return (
    <section
      className="relative h-[95vh] overflow-hidden flex items-center justify-center text-center
      bg-[linear-gradient(-45deg,#0b0b0f,#1a1a2e,#16213e,#0f3460)]
      bg-[length:400%_400%]
      animate-[gradientMove_20s_ease_infinite]
      text-white"
    >
      {/* 🔥 Floating Gradient Blobs */}

      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[750px] h-[750px] bg-purple-600/40 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-600/40 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 60, -30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fuchsia-600/30 blur-[170px] rounded-full"
      />

      {/* 🧩 Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 🌟 Hero Content */}
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
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
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
              hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30
              transition duration-300"
            >
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
