"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    tag: "Local Knowledge, Global Standards",
    title: "Local Expertise in Qatar’s Domain (.qa) Regulations",
    description:
      "Navigating Qatar’s domain landscape can be complex — but with PowerWeb, you’re backed by a team that understands every regulation and requirement. We help you secure and manage your .qa domain with confidence, ensuring full compliance and smooth approval.",
    image: "/development-amico-1-66210694cd268-768x768.webp",
  },
  {
    tag: "Speed You Need, Security You Trust",
    title: "Fast, Secure Servers with 99.9% Uptime",
    description:
      "Your website deserves hosting that’s both fast and reliable. PowerWeb provides optimized servers with 99.9% uptime, keeping your site live, secure, and lightning-fast — even during traffic spikes.",
    image: "/enter-otp-amico-6621075cf1ce8-768x768.webp",
    bullets: [
      "Core Web Vitals optimization for superior user experience",
      "Schema markup implementation for rich snippets",
      "XML sitemap creation and optimization",
      "Robot.txt file configuration",
      "SSL certificate implementation",
      "Mobile-first indexing optimization",
    ],
  },
  {
    tag: "Improving Website’s Authority",
    title: "Complete Technical Support from Setup to Launch",
    description:
      "From domain registration to going live, PowerWeb’s expert team supports you through every phase. Whether it’s troubleshooting DNS, configuring hosting, or managing security, we ensure a hassle-free experience from start to finish.",
    image: "/mobile-testing-pana-66210855e52e3-768x768.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* PREMIUM STATEMENT SECTION */}
      <section className="relative py-24 px-6 bg-[#0f0f14] overflow-hidden">
        {/* subtle radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            Your vision, our expertise—creating unforgettable mobile
            experiences.
          </motion.h3>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                {/* Vertical design line */}
                <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />

                {/* IMAGE SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${reverse ? "lg:order-2" : ""} flex justify-center`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="relative"
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

                {/* CONTENT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${reverse ? "lg:order-1" : ""}`}
                >
                  <div className="max-w-xl">
                    <p className="text-xs tracking-[0.2em] text-purple-600 mb-4 uppercase font-semibold">
                      {item.tag}
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                      {item.title}
                    </h3>

                    <div className="w-12 h-1 bg-purple-600 mb-6" />

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
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
