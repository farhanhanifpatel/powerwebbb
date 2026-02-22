"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HostingCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to Launch Your Website?
        </h2>

        <p className="text-gray-300 mb-8">
          Let us handle your domain registration and hosting setup — secure,
          optimized, and fully managed.
        </p>

        <Button
          size="lg"
          className="bg-white text-purple-900 hover:bg-gray-200 px-8 py-6 rounded-full text-lg"
        >
          Get Free Consultation →
        </Button>
      </motion.div>
    </section>
  );
}
