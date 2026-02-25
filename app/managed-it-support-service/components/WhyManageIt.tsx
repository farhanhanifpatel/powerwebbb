"use client";

import { motion } from "framer-motion";
import { Clock, Activity, DollarSign, MapPin, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Technical Support",
    description:
      "Round-the-clock IT support Qatar to ensure your systems are always operational",
  },
  {
    icon: Activity,
    title: "Proactive Monitoring",
    description:
      "Continuous monitoring of your IT infrastructure to prevent issues before they occur",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description:
      "Reduce IT costs while improving efficiency through our managed IT service solutions",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep understanding of Qatar’s business environment and regulatory requirements",
  },
  {
    icon: TrendingUp,
    title: "Scalable Services",
    description: "IT managed services that grow with your business needs",
  },
];

export default function WhyManagedIT() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Why Choose Our Managed IT Services in
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Qatar?
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            As a premier managed IT services company in Qatar, we understand the
            unique challenges businesses face in maintaining their technology
            infrastructure. Our outsourced managed IT services provide:
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-6 shadow-md">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
