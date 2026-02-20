"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ShopifyService() {
  const router = useRouter();

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
              src="/Shopify-Store-design-Qatar.webp"
              alt="Shopify Website Development"
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-3xl"></div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  Shopify Store Design & Setup
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    {" "}
                    in Doha, Qatar
                  </span>
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-5">
                  Launch your online store with confidence using our specialized
                  Shopify store design services in Doha Qatar. Shopify is the
                  leading e-commerce platform trusted by millions of businesses
                  worldwide, and we’re experts at customizing it for Qatar’s
                  market. From product catalogs to secure checkout systems, we
                  build Shopify stores that convert visitors into customers.
                </p>

                <Button
                  onClick={() => router.push("/contact")}
                  className="mt-2 inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md transition-all duration-300 hover:scale-105"
                >
                  Start Your Shopify Store →
                </Button>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative">
                {/* Vertical Divider (Desktop Only) */}
                <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700"></div>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                  Our Shopify services include custom theme design, payment
                  gateway integration (including local Qatar options), inventory
                  management setup, and mobile-optimized shopping experiences.
                  We handle everything from store setup to marketing
                  integration, ensuring your e-commerce business is ready to
                  sell from day one. Ideal for businesses serious about online
                  retail, scaling quickly, and providing seamless shopping
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
