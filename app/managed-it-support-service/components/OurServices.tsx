"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Network, Headphones, Mail } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cloud Setup",
      description:
        "Secure cloud infrastructure & seamless migration solutions tailored for scalability.",
      icon: Cloud,
    },
    {
      title: "Server NAS Device Setup",
      description:
        "Reliable storage architecture for high-performance and secure data management.",
      icon: Server,
    },
    {
      title: "Office Networking",
      description:
        "Structured, secure and scalable networking solutions for modern offices.",
      icon: Network,
    },
    {
      title: "IT Support & Services",
      description:
        "24/7 monitoring, maintenance and expert technical assistance.",
      icon: Headphones,
    },
    {
      title: "Domain & Email Setup",
      description:
        "Professional domain configuration and secure business email deployment.",
      icon: Mail,
    },
  ];

  return (
    <>
      <section className="relative py-42 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-32 right-1/3 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-12 md:p-16"
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Managed IT Company
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Qatar
              </span>
            </h2>

            {/* Accent Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8"></div>

            {/* First Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Imagine never having to worry about software updates, network
              security breaches, system downtime, or data backups again. Our
              comprehensive managed IT services in Qatar and Doha promise
              exactly that – allowing businesses to focus on their core
              objectives while leaving the technical complexities in capable
              hands. With the increasing reliance on technology for day-to-day
              operations, partnering with a trusted managed IT service provider
              has become not just an option but a necessity for companies
              looking to thrive in Qatar’s competitive business landscape.
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed">
              As one of the leading IT support services companies in Qatar,
              PowerWeb delivers end-to-end IT solutions that drive business
              growth, enhance operational efficiency, and ensure robust
              cybersecurity. Our managed IT service solutions combine
              cutting-edge technology with deep local expertise, making us the
              preferred IT support services provider for businesses across Doha,
              Al Rayyan, Al Wakrah, and throughout Qatar.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative py-32 bg-neutral-950 text-white overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 blur-[180px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Our IT Services in{" "}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
                Doha, Qatar
              </span>
            </h2>

            <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
              Powerful, secure and scalable IT solutions designed to elevate
              your business performance.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(124,58,237,0.3)]"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg group-hover:scale-110 transition duration-500">
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-bold tracking-tight">
                    <span className="block text-white">
                      {service.title.split(" ")[0]}
                    </span>
                    <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      {service.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-400 transition-all duration-500 group-hover:w-full rounded-full"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
