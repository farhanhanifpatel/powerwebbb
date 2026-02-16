"use client";

import { motion } from "framer-motion";

export default function ClientLogos() {
  const logos = [
    "/clients-logo/3d-verse-design.png",
    "/clients-logo/brands-outlet.png",
    "/clients-logo/bold-architecture-.png",
    "/clients-logo/Brooq-first-logo-1536x589.png",
    "/clients-logo/gttc.webp",
    "/clients-logo/ksa3d.png",
    "/clients-logo/jovial-logo-main.png",
    "/clients-logo/q3dprints.png",
    "/clients-logo/tawasu-white.jpg",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-16 ">
        Trusted by Growing Brands
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="flex gap-16 w-max"
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="client"
              className="h-16 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
