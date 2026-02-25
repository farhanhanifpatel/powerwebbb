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

  // const reviews = [
  //   {
  //     name: "Mohammad",
  //     text: "Fantastic company, fast responsive and quality work.",
  //   },
  //   {
  //     name: "Abdullah",
  //     text: "Their web designs are awesome. Great experience.",
  //   },
  //   {
  //     name: "Achraf",
  //     text: "Best team for ecommerce website and app.",
  //   },
  // ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            Technologies & Expertise
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Tools & Technologies We Master
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            As a leading software company in Qatar, PowerWeb leverages
            enterprise-grade technologies to deliver comprehensive IT solutions.
            Our certified team specializes in WordPress, Shopify, Laravel for
            web development, Flutter and native platforms for mobile app
            development, and cloud infrastructure on AWS, Azure, and Google
            Cloud. We implement robust cybersecurity measures including
            enterprise firewalls, SSL encryption, and proactive monitoring
            systems. From software development to digital marketing tools like
            Google Analytics and Meta Business Suite, we use industry-standard
            platforms to build secure, scalable solutions that help businesses
            in Doha thrive in the digital landscape.
          </p>
        </div>

        {/* 🔹 TECHNOLOGY LOGOS */}
        <div className="flex flex-wrap justify-center gap-12 mb-24">
          {tech.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, y: -6 }}
              className="opacity-70 hover:opacity-100 transition cursor-pointer"
            >
              <Image src={logo} alt={`Tech logo ${i}`} width={60} height={60} />
            </motion.div>
          ))}
        </div>

        {/* 🔹 TESTIMONIALS */}
        {/* <div className="text-center mb-14">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold mt-3">What Our Clients Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-50 border-2 border-purple-300 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                {r.text}
              </p>
              <h4 className="mt-4 font-semibold text-purple-700">— {r.name}</h4>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
