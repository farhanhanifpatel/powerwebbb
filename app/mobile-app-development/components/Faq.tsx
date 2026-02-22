"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question:
      "What makes PowerWeb the best mobile app development company in Qatar?",
    answer:
      "Our combination of technical expertise, local market understanding, proven track record, and commitment to quality sets us apart. We deliver apps that not only meet international standards but also resonate with Qatar’s unique cultural and business environment.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Development timelines vary based on complexity, features, and platform requirements. Simple apps may take 3-4 months, while complex enterprise solutions can require 6-9 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you provide both iOS and Android app development services?",
    answer:
      "Yes! As both an iOS app development company in Qatar and Android app development company in Qatar, we offer comprehensive services for both platforms, plus cross-platform solutions for maximum market reach.",
  },
  {
    question:
      "What technologies do you use for both iOS and Android app development?",
    answer:
      "We specialize in React Native and Flutter for cross-platform development, choosing the best framework based on your specific requirements, target audience, and business objectives.",
  },
  {
    question: "Can you integrate my app with existing business systems?",
    answer:
      "Absolutely! Our app development services include seamless integration with existing ERP, CRM, databases, and third-party services to ensure your mobile app works harmoniously with your current business infrastructure.",
  },

  {
    question: "Do you offer maintenance and support services?",
    answer:
      "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements to keep your app competitive in Qatar’s evolving market.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500"
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-purple-600"
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>

                {/* Smooth height animation without layout shift */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    height: { duration: 0.35, ease: "easeInOut" },
                    opacity: { duration: 0.25 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
