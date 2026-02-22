"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HostingHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white px-6">
      {/* Background Glow 1 */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/40 blur-[160px] rounded-full"
      />

      {/* Background Glow 2 */}
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 blur-[140px] rounded-full"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Domain & Hosting Setup{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            in Qatar
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          We help businesses in Qatar register the right domain, configure
          secure hosting, and go live without hassles.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Button
            size="lg"
            className="group rounded-full px-10 py-6 text-base bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-500/40 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
