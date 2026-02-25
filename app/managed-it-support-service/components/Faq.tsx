"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you respond to technical emergencies?",
    answer:
      "We understand that technology issues can’t wait for business hours. Our emergency response team is available 24/7, with guaranteed on-site arrival within 2 hours for critical issues in Doha and surrounding areas. For remote support, we typically connect within 15 minutes of your call. Our priority is minimizing your business disruption and getting your operations back to normal as quickly as possible.",
  },
  {
    question: "What’s included in your monthly service packages?",
    answer:
      "Our comprehensive packages include continuous system monitoring, regular software updates, security patch management, data backup verification, network performance optimization, and unlimited remote support during business hours. We also provide monthly performance reports, quarterly business reviews, and priority scheduling for any additional services you might need. Each package is customized based on your specific business requirements and technology environment.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Absolutely! We’ve successfully supported everything from small startups with just a few computers to large enterprises with complex multi-location networks. Our approach is always to understand your unique business needs first, then design solutions that fit your budget and growth plans. Whether you need basic computer maintenance or enterprise-level infrastructure management, we have the expertise and resources to help your business succeed.",
  },
  {
    question: "How do you ensure our data remains secure?",
    answer:
      "Data security is at the core of everything we do. We implement multi-layered security protocols including advanced firewalls, real-time threat monitoring, encrypted backup systems, and regular security audits. Our team stays current with the latest cybersecurity threats and best practices.",
  },
  {
    question: "Can you help us migrate to cloud-based systems?",
    answer:
      "Yes, cloud migration is one of our specialties. We handle everything from initial assessment and planning to execution and ongoing management. Whether you’re looking to move to Microsoft 365, Google Workspace, or custom cloud solutions, we ensure a smooth transition with minimal disruption to your daily operations.",
  },
  {
    question: "What areas in Qatar do you service?",
    answer:
      "We provide comprehensive IT services throughout Qatar, with our primary focus on Doha and the greater metropolitan area. We also serve clients in Al Rayyan, Al Wakrah, and other major business districts. For locations outside our standard service area, we’re happy to discuss custom arrangements. Our goal is to ensure that distance never becomes a barrier to receiving quality IT support when your business needs it most.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Purple Glow Background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about our services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-purple-100 rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-600"
                  >
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
