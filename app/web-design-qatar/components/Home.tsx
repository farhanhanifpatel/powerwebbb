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

      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-32 right-1/3 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-12 md:p-16"
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Managed IT Company
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Qatar
              </span>
            </h2>

            {/* Accent Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8"></div>

            {/* First Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Imagine never having to worry about software updates, network
              security breaches, system downtime, or data backups again. Our
              comprehensive managed IT services in Qatar and Doha promise
              exactly that – allowing businesses to focus on their core
              objectives while leaving the technical complexities in capable
              hands. With the increasing reliance on technology for day-to-day
              operations, partnering with a trusted managed IT service provider
              has become not just an option but a necessity for companies
              looking to thrive in Qatar’s competitive business landscape.
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed">
              As one of the leading IT support services companies in Qatar,
              PowerWeb delivers end-to-end IT solutions that drive business
              growth, enhance operational efficiency, and ensure robust
              cybersecurity. Our managed IT service solutions combine
              cutting-edge technology with deep local expertise, making us the
              preferred IT support services provider for businesses across Doha,
              Al Rayyan, Al Wakrah, and throughout Qatar.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
