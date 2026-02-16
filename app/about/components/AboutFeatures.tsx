"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBullseye,
  FaHandshake,
  FaStar,
  FaPhone,
} from "react-icons/fa";

const sections = [
  {
    icon: FaLightbulb,
    title: "Our Story",
    color: "text-purple-600",
    content:
      "Our journey began with a passion for technology and a desire to make a difference. We recognized the immense potential of the internet to revolutionize industries, streamline processes, and connect people globally. With this vision, we set out to create a company that harnesses technology to help businesses thrive.",
  },
  {
    icon: FaBullseye,
    title: "Our Mission",
    color: "text-indigo-600",
    content:
      "Our mission is simple yet ambitious: to empower businesses to achieve their full digital potential. Through web development, digital marketing, and innovative mobile apps, we provide the tools, insights, and support clients need to succeed.",
  },
  {
    icon: FaHandshake,
    title: "Why Choose Powerweb?",
    color: "text-purple-600",
    content:
      "We are committed to excellence. From our talented team to our personalized approach, we aim to be more than just a service provider—we are a trusted partner in your digital journey.",
  },
  {
    icon: FaStar,
    title: "Our Values",
    color: "text-indigo-600",
    content:
      "Integrity, innovation, and inclusivity guide our decisions and actions. We foster a culture of learning and growth, where every team member contributes their unique talents to our collective success.",
  },
  {
    icon: FaPhone,
    title: "Get in Touch",
    color: "text-purple-600",
    content:
      "Whether you’re a startup or an established enterprise, we invite you to join our mission to shape the future of digital. Together, let's turn your ideas into reality.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
            Welcome to Powerweb
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Your Partner in Digital Success. At Powerweb, we deliver innovative
            solutions that drive growth, foster connections, and make a lasting
            impact.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-start gap-6 hover:scale-[1.02] transition-transform"
              >
                <div
                  className={`p-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white flex items-center justify-center text-2xl`}
                >
                  <Icon />
                </div>
                <div className="space-y-2">
                  <h3 className={`text-2xl font-semibold ${section.color}`}>
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
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
