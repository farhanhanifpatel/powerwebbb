"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "Social Media Marketing in Qatar",
    paragraphs: [
      "PowerWeb stands as Qatar’s premier social media marketing agency, delivering exceptional digital marketing solutions that drive real business growth. With Qatar’s remarkable 84% social media penetration rate, we understand the immense opportunity that awaits your business in the digital landscape.",
      "Our comprehensive social media marketing services are specifically designed for the Qatari market, combining global best practices with deep local cultural understanding. We help businesses across Doha, Al Rayyan, Al Wakrah, and throughout Qatar build meaningful connections with their target audience while achieving measurable results.",
    ],
    image: "/Social-media-Mareketing-Qatar-Doha-1536x1536.webp",
  },
  {
    title: "Strategic Ad Campaigns",
    paragraphs: [
      "Our tailored ad campaign services are designed to maximize your return on investment and drive meaningful results. By leveraging advanced targeting techniques, compelling ad creatives, and data-driven strategies, we ensure your ads reach the right audience at the right time, increasing brand awareness, driving website traffic, and ultimately, boosting conversions.",
    ],

    image: "/social-tree-bro-66211f373cf16-2-768x768.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-24"
          >
            Why Choose Us
          </motion.h2>

          {sections.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={index}
                className="relative grid lg:grid-cols-2 gap-20 items-center mb-36"
              >
                {/* Vertical Line */}
                <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${reverse ? "lg:order-2" : ""} flex justify-center`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={480}
                      height={480}
                      className="w-full max-w-md"
                    />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${reverse ? "lg:order-1" : ""}`}
                >
                  <div className="max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                      {item.title}
                    </h3>

                    <div className="w-12 h-1 bg-purple-600 mb-6" />

                    {item.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-gray-600 text-lg leading-relaxed mb-6"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
