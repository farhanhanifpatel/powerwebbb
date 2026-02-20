"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WordPressService() {
  const router = useRouter();
  return (
    <section className="relative py-28 overflow-hidden  bg-white dark:from-neutral-950 dark:to-neutral-900   ">
      {/* Background Glow */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="relative group"
        >
          {/* Card Container */}
          <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-500">
            {/* Left Accent Line */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full"></div>

            <div className="pl-6">
              {/* Small Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full mb-4">
                WordPress Experts
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
                WordPress Website Design{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                  in Doha, Qatar
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-4">
                Transform your online presence with our expert
                <span className="font-bold">
                  {" "}
                  WordPress web design Qatar
                </span>{" "}
                solutions. As the world’s most flexible content management
                system, WordPress powers over 40% of websites globally—and for
                good reason. Our team creates custom WordPress websites tailored
                to your business needs, from corporate sites to complex
                membership platforms.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-6">
                We specialize in building fast-loading, SEO-optimized WordPress
                websites that you can easily manage yourself. Whether you need a
                professional business website, a blog, or a content-rich
                platform, our WordPress solutions include custom theme
                development, plugin integration, and full training to ensure you
                have complete control over your digital presence. Perfect for
                businesses that want scalability, regular content updates, and
                powerful functionality without technical complexity
              </p>

              {/* CTA Button */}
              <Button
                onClick={() => router.push("/contact")}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 shadow-md transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation →
              </Button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/wordpress-design-Qatar.webp"
              alt="WordPress Website Design"
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
