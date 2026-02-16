"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const points = [
    "Transparent Pricing",
    "Fast Response Times",
    "Scalable Solutions",
    "Enterprise-grade Security",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Soft glow */}
        {/* <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 blur-3xl opacity-30 rounded-full" /> */}

        <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-purple-600 shadow-lg">
          <p className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Your Trusted IT Company in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Doha
            </span>
          </h2>

          <div className="bg-gray-50 p-3 rounded-xl ">
            <p className="text-gray-500 leading-relaxed text-[15px]">
              When your business needs reliable technology support, choosing the
              right partner matters. PowerWeb combines local expertise with
              international standards to deliver IT solutions that actually
              work. We understand the unique challenges of the Qatari market and
              provide personalized service that larger companies can’t match.
              <br />
              <br />
              Our team doesn’t just fix problems—we prevent them. With proactive
              monitoring, strategic planning, and hands-on support, we ensure
              your technology drives growth rather than holding you back. From
              day one, you’ll work with dedicated professionals who treat your
              success as their own.
            </p>
          </div>

          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/70 border border-gray-200 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition">
            <ul className="space-y-6">
              {[
                "Transparent Pricing",
                "Fast Response Times",
                "Scalable Solutions",
                "Enterprise-grade Security",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-gray-700 font-medium group"
                >
                  <FaCheckCircle className="text-purple-600 w-6 h-6 group-hover:scale-110 transition" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative flex justify-center"
      >
        {/* Floating effect */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/powerweb.webp"
            alt="powerweb"
            width={680}
            height={680}
            className="drop-shadow-2xl"
          />
        </motion.div>

        {/* Premium glow ring */}
        <div className="absolute w-[520px] h-[520px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-20 -z-10" />
      </motion.div>
    </div>
  );
}
