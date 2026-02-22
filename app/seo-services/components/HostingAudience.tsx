"use client";

import { motion } from "framer-motion";
import { Building2, RefreshCcw, Network, Globe } from "lucide-react";

const audience = [
  {
    title: "New Businesses",
    description:
      "End-to-end domain and hosting setup to launch your online presence without technical stress.",
    icon: Building2,
  },
  {
    title: "Website Redesigns & Migrations",
    description:
      "Smooth domain and server configuration during transitions or platform upgrades.",
    icon: RefreshCcw,
  },
  {
    title: "Business Owners Without Tech Teams",
    description:
      "Avoid setup errors — we handle all domain, DNS, and hosting configuration for you.",
    icon: Network,
  },
  {
    title: "Web Projects Requiring Clean Setup",
    description:
      "Ensure your domain and hosting are properly configured from day one — no missteps, no downtime.",
    icon: Globe,
  },
];

export default function HostingAudience() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px]  rounded-full" />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Who Should Use Our Domain & Hosting Setup Services?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg mb-24"
        >
          Our solutions are perfect for individuals and businesses looking for a
          professional, secure, and hassle-free online launch. Whether you’re
          starting fresh or improving your digital infrastructure, PowerWeb
          ensures a seamless domain and hosting experience tailored to your
          needs.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-gray-200 hover:border-purple-500 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Gradient border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-xl" />

                {/* Icon */}
                <div className="relative mb-8 flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition duration-300">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
