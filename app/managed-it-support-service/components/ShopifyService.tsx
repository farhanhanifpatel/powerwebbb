"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ShopifyService() {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2, // slower
            ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }} // smaller movement
            transition={{
              duration: 8, // much slower floating
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/Server-NAS-Device-Set-Up-2-768x768.webp"
              alt="Server NAS Device Setup in Doha, Qatar"
              width={700}
              height={600}
              className="w-full h-auto "
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -3 }}
          className="relative group"
        >
          <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-500">
            {/* Top Gradient Line */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* LEFT SIDE */}
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full mb-4">
                  One Storage For All
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  Server NAS Device Set Up
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-5">
                  Optimize your data storage and management with PowerWeb’s
                  Server NAS Device Setup services in Doha, Qatar. Our team of
                  experts is skilled in configuring Network Attached Storage
                  (NAS) devices to ensure secure, efficient, and scalable
                  storage solutions for your business. Whether you need
                  centralized storage for file sharing, data backup, or media
                  streaming, we tailor the setup to meet your specific
                  requirements.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-5">
                  {/* As part of our IT services Qatar portfolio, our NAS solutions
                  provide businesses with reliable, centralized data management
                  that integrates seamlessly with existing IT infrastructure
                  while offering enhanced security and accessibility. */}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative">
                {/* Vertical Divider (Desktop Only) */}
                <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700"></div>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                  As part of our IT services Qatar portfolio, our NAS solutions
                  provide businesses with reliable, centralized data management
                  that integrates seamlessly with existing IT infrastructure
                  while offering enhanced security and accessibility.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
