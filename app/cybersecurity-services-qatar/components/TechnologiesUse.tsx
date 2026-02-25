"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
              We Have Knowledge and Experience
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Powerweb</strong>, our expertise in cyber security is
              backed by years of experience and a deep understanding of the
              ever-evolving threat landscape. Our team of certified
              professionals is adept at identifying vulnerabilities,
              implementing robust security measures, and responding swiftly to
              incidents.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We stay ahead of emerging threats through continuous learning and
              adaptation, ensuring that our clients benefit from the latest and
              most effective security practices. Trust our knowledgeable and
              experienced team to protect your business with comprehensive,
              cutting-edge cyber security solutions.
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
                src="/CYBER-SECURITY-PROFESSIONALS-768x768.webp"
                alt="Cyber Security Professionals"
                width={1200}
                height={1200}
                className="w-full max-w-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
