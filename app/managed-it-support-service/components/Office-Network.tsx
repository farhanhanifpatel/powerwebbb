"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OfficeNetwork() {
  return (
    <section className="relative py-28 overflow-hidden bg-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT IMAGE MOCKUP */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="relative group order-2 md:order-2"
        >
          <div className="relative bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-500">
            {/* Small Label */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full"></div>
            <p className="text-purple-600 font-semibold mb-3 tracking-wide uppercase text-sm">
              Sharing is Caring
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-5">
              Office Networking
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-5">
              Ensure your business operations run smoothly with PowerWeb’s
              Office Networking services in Doha, Qatar. Our team specializes in
              designing and implementing robust networking solutions tailored to
              your office environment as part of our comprehensive IT support
              and maintenance services.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-6">
              From setting up wired and wireless networks to configuring
              routers, switches, and access points, we provide comprehensive
              networking solutions that enhance connectivity and productivity.
              With our expertise as a leading IT support services company, you
              can expect reliable, high-speed network performance that supports
              all your business activities.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative order-1 md:order-1"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/Office-Networking-Doha-Qatar-768x768.webp"
              alt="Office Networking in Doha, Qatar"
              width={700}
              height={600}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
