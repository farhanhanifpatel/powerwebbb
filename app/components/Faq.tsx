"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronCircleDown } from "react-icons/fa";

const faqs = [
  {
    question: "What IT services do you offer?",
    answer:
      "We provide complete technology solutions including web development, mobile applications, cybersecurity, managed IT support, cloud solutions, SEO, and digital marketing.",
  },
  {
    question: "How much does IT support cost?",
    answer:
      "Pricing depends on your business size and requirements. We offer flexible monthly packages and custom enterprise solutions.",
  },
  {
    question: "How quickly can you start my project?",
    answer:
      "Most projects begin within 3–7 business days after requirement finalization.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with startups, SMEs, and enterprise clients with scalable solutions.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ layout: { duration: 0.4, type: "spring" } }}
                className={`bg-white/70 backdrop-blur-lg border rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-purple-500 shadow-purple-100"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="group w-full flex justify-between items-center p-6 text-left"
                >
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-purple-600"
                        : "text-gray-800 group-hover:text-purple-500"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown className="w-6 h-6 text-purple-600" />
                  </motion.div>
                </button>

                <motion.div
                  layout
                  initial={false}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div
                    className={`px-6 text-gray-600 leading-relaxed transition-all duration-300 ${
                      isOpen ? "py-4" : "py-0"
                    }`}
                  >
                    {isOpen && faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
