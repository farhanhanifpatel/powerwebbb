"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      className="relative py-32 text-center overflow-hidden 
                        bg-gradient-to-r from-purple-800 to-indigo-800 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-6"
      >
        Let’s Build Something Exceptional
      </motion.h2>

      <p className="mb-10 text-lg opacity-90">
        Partner with Powerweb and elevate your digital presence.
      </p>

      <Button
        variant="default"
        size="lg"
        className="relative group w-auto md:w-64 mx-auto
             overflow-hidden rounded-full 
             px-8 py-3 font-semibold text-white"
      >
        {/* Gradient Background */}
        <span
          className="absolute inset-0 bg-gradient-to-r 
                   from-purple-600 to-indigo-600"
        />

        {/* Hover Overlay */}
        <span
          className="absolute inset-0 bg-white/20 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300"
        />

        {/* Content */}
        <span className="relative flex items-center justify-center gap-2">
          Contact Us
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Button>
    </section>
  );
}
