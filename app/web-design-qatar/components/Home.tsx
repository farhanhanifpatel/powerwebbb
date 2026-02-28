"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white">
        {/* Glow */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full top-20 left-20"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Creative Web Design That
            <span className="text-purple-400"> Drives Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-purple-100 mb-10 max-w-2xl mx-auto"
          >
            We build high-performing, modern websites that elevate your brand,
            engage your audience, and increase conversions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <Button
              onClick={() => router.push("/contact")}
              size="lg"
              className="rounded-full px-8 py-6 text-lg 
                         bg-gradient-to-r from-purple-500 to-indigo-500"
            >
              Get Free Quote <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
