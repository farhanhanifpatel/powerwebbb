"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] flex items-center justify-center 
               overflow-hidden bg-gradient-to-br 
               from-purple-900 via-indigo-900 to-purple-950"
    >
      {/* Soft Parallax Layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-40 
                 bg-[radial-gradient(circle_at_30%_30%,#a855f7,transparent_60%),
                    radial-gradient(circle_at_70%_70%,#6366f1,transparent_60%)]"
      />

      {/* Center Content */}
      <div className="relative text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Powering Digital Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-white/70"
        >
          Your trusted partner in digital transformation and scalable
          innovation.
        </motion.p>
      </div>
    </section>
  );
}
