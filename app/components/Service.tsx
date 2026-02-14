"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaSearch,
  FaMobileAlt,
  FaBullhorn,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    icon: FaGlobe,
    title: "Website Design",
    desc: "Craft captivating websites that convert visitors into customers.",
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    desc: "Improve rankings and drive consistent organic traffic.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "High-performance mobile apps with smooth UX.",
  },
  {
    icon: FaBullhorn,
    title: "Social Media Marketing",
    desc: "Grow your audience with targeted campaigns.",
  },
  {
    icon: FaShieldAlt,
    title: "Cyber Security",
    desc: "Protect your business with advanced security solutions.",
  },
  {
    icon: FaServer,
    title: "Managed IT Services",
    desc: "Reliable 24/7 IT support & infrastructure.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0F19] to-[#111827]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-wider">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Smart IT Solutions for Your Business
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg border bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
