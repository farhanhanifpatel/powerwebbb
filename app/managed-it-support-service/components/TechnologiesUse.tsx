"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techLogos = [
  { src: "/wordpress.webp", name: "Word Press" },
  { src: "/shopify.webp", name: "Shopify" },
  { src: "/woocomerce.webp", name: "WooCommerce" },
  { src: "/shopify.webp", name: "Shopify" },
  { src: "/php.webp", name: "Php" },
  { src: "/html.webp", name: "HTML" },
];

export default function TechnologiesSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-32 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Technologies We Use
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Interactive Web Design Innovation
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our <strong>interactive web design</strong> services go beyond
              static presentations to create engaging, dynamic experiences that
              captivate visitors and encourage interaction. We implement
              cutting-edge features including:
            </p>

            <ul className="space-y-3 text-gray-600">
              {[
                "Animated micro-interactions that guide user behavior",
                "Progressive web app functionality for mobile-like experiences",
                "Advanced search and filtering systems",
                "Real-time chat integration and customer support tools",
                "Interactive product configurators and calculators",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 mt-2 bg-purple-600 rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
              User Experience (UX) Web Design Doha
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Exceptional <strong>UX web design</strong> forms the foundation of
              every successful website. Our UX specialists conduct thorough
              research and testing to ensure your website not only looks
              beautiful but also provides intuitive navigation and seamless user
              journeys. We focus on reducing bounce rates, increasing conversion
              rates, and creating positive brand experiences that keep customers
              coming back.
            </p>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="relative"
            >
              <Image
                src="/website-designer-amico-6620e86df375b-768x768.webp"
                alt="Web design technology illustration"
                width={1200}
                height={1200}
                className="w-full max-w-lg"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center group transition duration-300 hover:-translate-y-2"
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={100}
                  height={60}
                  className="object-contain 
                    opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
