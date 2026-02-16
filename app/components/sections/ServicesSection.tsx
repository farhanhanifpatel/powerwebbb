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
    <section className="py-24 bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold uppercase tracking-wider">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Smart IT Solutions for Your Business
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-6 rounded-full" />
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
                className="
                  group p-8 rounded-xl
                  bg-white/5 backdrop-blur-lg
                  border border-white/10
                  hover:border-purple-500/50
                  hover:bg-white/10
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                  w-14 h-14 flex items-center justify-center
                  rounded-xl
                  bg-gradient-to-r from-purple-600/20 to-indigo-600/20
                  text-purple-400
                  mb-5
                  group-hover:scale-110
                  group-hover:text-white
                  group-hover:bg-gradient-to-r
                  group-hover:from-purple-600
                  group-hover:to-indigo-600
                  transition
                "
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-white">
                  {s.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
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
