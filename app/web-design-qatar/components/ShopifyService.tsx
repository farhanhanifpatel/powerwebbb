"use client";

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
            delay: 0.2, // small delay for smooth flow
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shopify Store Design & Setup
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {" "}
              in Doha, Qatar
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Launch your online store with confidence using our specialized
            Shopify store design services in Doha Qatar. Shopify is the leading
            e-commerce platform trusted by millions of businesses worldwide, and
            we’re experts at customizing it for Qatar’s market. From product
            catalogs to secure checkout systems, we build Shopify stores that
            convert visitors into customers.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our Shopify services include custom theme design, payment gateway
            integration (including local Qatar options), inventory management
            setup, and mobile-optimized shopping experiences. We handle
            everything from store setup to marketing integration, ensuring your
            e-commerce business is ready to sell from day one. Ideal for
            businesses serious about online retail, scaling quickly, and
            providing seamless shopping experiences.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:scale-105 transition duration-300"
          >
            Start Your Shopify Store
          </button>
        </motion.div>
      </div>
    </section>
  );
}
