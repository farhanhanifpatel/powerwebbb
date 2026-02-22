"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const services = [
  "Domain Registration & Renewal",
  "DNS & Record Management",
  "Hosting Server Setup",
  "SSL Certificate Installation",
  "Email Domain Integration",
  "Website Migration",
  "CMS & Platform Integration",
  "24/7 Support & Monitoring",
];

export default function HostingServices() {
  return (
    <section className="relative py-28 px-6  overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            End-to-End Domain & Hosting Setup Services
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Your digital journey starts with the right domain and a secure
            hosting environment. At PowerWeb, we take care of everything—from
            registering your domain to configuring high-performance hosting that
            meets your business needs. Whether you&apos;re launching a new
            website or migrating an existing one, our experts ensure a smooth,
            secure, and fast setup.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Domain & Hosting Services Include
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white">
                  <Check size={14} />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative"
          >
            <Image
              src="/cloud-hosting-amico-686d052b73ec3-1536x1536.webp" // replace with your image path
              alt="Hosting Illustration"
              width={550}
              height={550}
              className="w-full max-w-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
