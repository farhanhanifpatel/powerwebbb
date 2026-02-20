"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CustomWebDevelopment() {
  const router = useRouter();

  return (
    <section className="relative py-32 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8">
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full"></div>

            {/* Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full mb-4">
              Custom Development Experts
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-6">
              Custom Web Development{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                Solutions in Qatar
              </span>
            </h2>

            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* LEFT COLUMN */}
              <div className="space-y-5">
                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                  When off-the-shelf solutions won’t meet your business needs,
                  our custom web development services deliver powerful,
                  scalable, and tailor-made platforms built specifically for
                  your operations.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                  When off-the-shelf solutions won’t cut it, our custom web
                  development services in Qatar deliver exactly what your
                  business needs. Using modern technologies like PHP, React, and
                  Laravel, we build bespoke websites and web applications and
                  also mobile applications tailored to your unique requirements
                  and workflows.
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-5">
                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                  From complex booking systems and member portals to custom CRM
                  integrations and automated business processes, we develop
                  solutions that give you competitive advantages. Our custom
                  development includes API integrations, third-party system
                  connections, advanced databases, and scalable cloud
                  infrastructure. Perfect for businesses with specific
                  functional requirements, unique processes, or those seeking
                  proprietary features that set them apart in the market.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              {/* <Button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl shadow-md transition-all duration-300">
                Discuss Your Project
              </Button> */}

              <Button
                onClick={() => router.push("/contact")}
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 shadow-md transition-all duration-300 hover:scale-105"
              >
                Discuss Your Project →
              </Button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Floating Animation */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/IT-Support-Doha-Qatar.webp"
              alt="Custom Web Development Solutions"
              width={700}
              height={600}
              className="w-full h-auto "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
