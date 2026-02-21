"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most standard business websites are completed within 2-3 weeks from start to finish. The timeline depends on project complexity—simple WordPress sites can be ready in 7-10 days, while custom e-commerce platforms may require 4-6 weeks. We maintain clear communication throughout the process and provide realistic timelines during our initial consultation.",
  },
  {
    question: "What is cost of web design services in Qatar?",
    answer:
      "Our web design packages start from QAR 900 for basic business websites. Pricing varies based on features, functionality, and platform choice. During our free consultation, we’ll provide a transparent quote tailored to your specific requirements—whether you need a simple landing page, WordPress site, Shopify store, or custom web application.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we design is fully responsive and mobile-optimized from day one. With over 70% of Qatar’s internet traffic coming from mobile devices, we ensure your site delivers seamless experiences across all smartphones, tablets, and desktop computers—no matter the screen size.",
  },
  {
    question:
      "Do you provide ongoing support and maintenance ans support after lunch?",
    answer:
      "Yes, we offer comprehensive ongoing support including security updates, content changes, technical troubleshooting, and performance optimization. Our maintenance packages ensure your website stays secure, fast, and up-to-date. We’re based in Doha and provide local support in your time zone—real people, not overseas call centers.",
  },
  {
    question: "Can you help my website rank on Google in Qatar ?",
    answer:
      "Yes. All our websites are built with SEO best practices including optimized page speed, mobile responsiveness, clean code structure, and proper meta tags. We also offer dedicated SEO services to improve your rankings for local Qatar searches, drive organic traffic, and increase your online visibility beyond just having a beautiful website.",
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
