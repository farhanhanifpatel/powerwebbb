"use client";

import { motion } from "framer-motion";
import { ArrowRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-24 px-6">
      {/* Gradient Background Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto rounded-[40px] overflow-hidden 
                   bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900
                   px-8 md:px-20 py-20 text-center text-white"
      >
        {/* Animated Glow */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

        {/* Floating Circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-10 right-20 w-32 h-32 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full"
        />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Get a Free Cyber Security Audit.
          </h2>

          {/* Premium Button */}
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full 
                         bg-gradient-to-r from-purple-500 to-indigo-500
                         px-8 py-6 text-lg font-semibold text-white
                         shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Free Quote Now
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>

              {/* Shine Effect */}
              <span
                className="absolute inset-0 bg-white/10 opacity-0 
                               group-hover:opacity-100 transition duration-300"
              ></span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
