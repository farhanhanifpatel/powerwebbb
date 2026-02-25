"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "Aligned with Qatar National Vision 2030",
    paragraphs: [
      "Qatar’s National Cybersecurity Strategy 2024-2030 represents a comprehensive, resilient, and forward-looking framework designed to position Qatar as a global cybersecurity leader. PowerWeb’s cybersecurity services are strategically aligned with this national vision, ensuring your business benefits from world-class security standards.",
    ],
    image: "/Privacy-policy-amico.webp",
  },
  {
    title: "Deep Understanding of Qatar’s Cybersecurity Landscape",
    paragraphs: [
      "With a profound understanding of Qatar’s cybersecurity landscape, we ensure your organization remains compliant with the latest local regulations, avoiding potential legal pitfalls while strengthening your security posture. Our expertise extends across various sectors serving both government entities and private organizations throughout Qatar.",
    ],

    image: "/Cyber-attack-amico.webp",
  },
  {
    title: "Certified Cybersecurity Professionals",
    paragraphs: [
      "With the technical know-how and on-field expertise of 50+ certified cybersecurity professionals, our team brings unparalleled experience to every engagement. We hold industry-leading certifications including CISSP, CISM, CISSP, CEH, and GCIH, ensuring you receive expert-level cybersecurity services.",
    ],
    image: "/Secure-Server-amico.webp",
  },
  {
    title: "Compliance with National Cybersecurity Agency (NCSA) Standards",
    paragraphs: [
      "The National Cyber Security Agency was established by Emiri Resolution No. 1 of 2021 to ensure robust cybersecurity governance. PowerWeb maintains full compliance with NCSA requirements, helping your organization meet regulatory obligations while enhancing security resilience.",
    ],
    image: "/security-bro-68872c65ee072-768x768.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="py-28 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20"
          >
            Why Choose PowerWeb as Your Cyber Security Services Provider in
            <span className="text-purple-600"> Qatar?</span>
          </motion.h2>

          {sections.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={index}
                className="relative grid lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-36"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${reverse ? "lg:order-2" : ""} flex justify-center`}
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
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

                    <div className="w-12 h-1 bg-purple-600 mb-6 rounded-full" />

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
