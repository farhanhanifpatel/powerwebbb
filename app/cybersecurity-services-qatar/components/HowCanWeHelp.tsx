"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Radar,
  Lock,
  Bug,
  Database,
  ServerCrash,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Threat Detection",
    description:
      "Monitoring systems for suspicious activities and responding to potential security incidents in real-time.",
  },
  {
    icon: Radar,
    number: "02",
    title: "Network Security",
    description:
      "Protecting the integrity and usability of your network and data through firewalls, intrusion detection systems (IDS), and intrusion prevention systems (IPS).",
  },
  {
    icon: Lock,
    number: "03",
    title: "Endpoint Security",
    description:
      "Securing individual devices (endpoints) such as computers, mobile devices, and servers from malicious activities.",
  },
  {
    icon: Bug,
    number: "01",
    title: "Penetration Testing",
    description:
      "Simulating cyber attacks to test the effectiveness of your security measures and identify potential weaknesses.",
  },
  {
    icon: Database,
    number: "02",
    title: "Data Protection",
    description:
      "Ensuring sensitive data is encrypted and safeguarded during transmission and while stored.",
  },
  {
    icon: ServerCrash,
    number: "03",
    title: "Cyber Security Consulting",
    description:
      "Providing expert advice and strategies to improve your organization’s overall security posture.",
  },
];

export default function HowCanWeHelp() {
  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              How Can We Help
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  {/* Glow Border */}
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

                  <div className="relative bg-white rounded-3xl p-10 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl">
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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
                We stay ahead of emerging threats through continuous learning
                and adaptation, ensuring that our clients benefit from the
                latest and most effective security practices. Trust our
                knowledgeable and experienced team to protect your business with
                comprehensive, cutting-edge cyber security solutions.
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
    </>
  );
}
