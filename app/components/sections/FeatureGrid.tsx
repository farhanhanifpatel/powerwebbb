"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaHeadset, FaMedal } from "react-icons/fa";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <FaGlobe />,
      title: "Qatar-Based Expertise",
      desc: "Local team in Doha with deep understanding of Qatar’s business landscape and regulations.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 IT Support",
      desc: "Round-the-clock assistance from our Qatar-based team – we’re here whenever you need us.",
    },
    {
      icon: <FaMedal />,
      title: "Proven Track Record",
      desc: "Successfully completed hundreds of projects for startups and enterprises across Qatar since 2019.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 text-center">
      {features.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group p-8 rounded-xl border hover:border-purple-600 hover:shadow-xl transition-all"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-14 h-14 flex items-center justify-center mx-auto rounded-lg mb-4 group-hover:scale-110 transition text-white text-2xl">
            {item.icon}
          </div>

          <h4 className="font-semibold text-lg mb-2 text-purple-700">
            {item.title}
          </h4>

          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
