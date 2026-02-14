"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechAndClients() {
  const tech = [
    "/shopify.webp",
    "/wordpress.webp",
    "/flutter.webp",
    "/android.webp",
    "/ios.webp",
    "/google-ads.webp",
  ];

  const reviews = [
    {
      name: "Mohammad",
      text: "Fantastic company, fast responsive and quality work.",
    },
    {
      name: "Abdullah",
      text: "Their web designs are awesome. Great experience.",
    },
    {
      name: "Achraf",
      text: "Best team for ecommerce website and app.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 TECHNOLOGIES */}
        <div className="text-center mb-14">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            Technologies & Expertise
          </p>

          <h2 className="text-4xl font-bold mt-3">Tools We Master</h2>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-12 mb-20">
          {tech.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="opacity-70 hover:opacity-100 transition"
            >
              <Image src={logo} alt="" width={60} height={60} />
            </motion.div>
          ))}
        </div>

        {/* 🔹 TESTIMONIALS */}
        <div className="text-center mb-14">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white border shadow-md hover:shadow-xl transition"
            >
              ⭐⭐⭐⭐⭐
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {r.text}
              </p>
              <h4 className="mt-4 font-semibold text-purple-700">— {r.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
