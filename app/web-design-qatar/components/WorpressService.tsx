"use client";

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
        >
          {/* Small Badge */}
          <span className="inline-block px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-6">
            WordPress Experts
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            WordPress Website Design{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              in Doha, Qatar
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            Transform your online presence with our expert
            <span className="font-bold"> WordPress web design Qatar</span>{" "}
            solutions. As the world’s most flexible content management system,
            WordPress powers over 40% of websites globally—and for good reason.
            Our team creates custom WordPress websites tailored to your business
            needs, from corporate sites to complex membership platforms.
          </p>

          <p className="pt-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            We specialize in building fast-loading, SEO-optimized WordPress
            websites that you can easily manage yourself. Whether you need a
            professional business website, a blog, or a content-rich platform,
            our WordPress solutions include custom theme development, plugin
            integration, and full training to ensure you have complete control
            over your digital presence. Perfect for businesses that want
            scalability, regular content updates, and powerful functionality
            without technical complexity.
          </p>

          {/* CTA Button */}

          <button
            onClick={() => router.push("/contact")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get Free Consultation
          </button>
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
