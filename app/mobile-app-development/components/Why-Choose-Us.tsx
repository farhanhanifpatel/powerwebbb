"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    tag: "Serving All Platforms",
    title: "Cross Platform Support",
    paragraphs: [
      "Reach a wider audience with our comprehensive cross-platform solutions. As the best mobile app development company in Qatar, we specialize in developing applications that seamlessly run on multiple platforms, including iOS, Android, and web, maximizing your app’s accessibility and user engagement.",
      "Cross-platform app development can result in cost savings of approximately 30–40%, making it an intelligent choice for businesses in Qatar’s competitive market. Our expertise in cross-platform development frameworks like React Native and Flutter ensures consistent performance and functionality across various devices, saving you time and resources while expanding your app’s reach.",
    ],
    bullets: [
      "Single codebase for multiple platforms",
      "Faster time-to-market",
      "Easier maintenance and updates",
    ],
    image: "/development-amico-1-66210694cd268-768x768.webp",
  },
  {
    tag: "Secured Apps",
    title: "Ensuring App Security",
    paragraphs: [
      "Protecting your users and data is paramount in today’s digital landscape. As a trusted mobile application development company, we prioritize app security at every stage of development, implementing robust encryption, authentication, and authorization measures to safeguard against potential threats and vulnerabilities.",
      "With our comprehensive security protocols and regular audits, you can trust that your app remains resilient and secure.",
    ],
    bullets: [
      "End-to-end encryption for data protection",
      "Multi-factor authentication systems",
      "Regular security audits and vulnerability assessments",
      "GDPR and local compliance adherence",
      "Secure API integration and data handling",
    ],
    image: "/enter-otp-amico-6621075cf1ce8-768x768.webp",
  },
  {
    tag: "Delivering Quality",
    title: "Testing and Quality Assurance",
    paragraphs: [
      "Quality assurance forms the backbone of successful mobile app development services. Our rigorous testing methodology ensures your application meets the highest standards before reaching users’ devices.",
      "We implement comprehensive testing protocols covering functionality, performance, security, and user experience, ensuring your app delivers exceptional value from day one.",
    ],
    bullets: [
      "Automated Testing Suites for rapid, consistent testing",
      "Manual Testing for user experience validation",
      "Performance Testing under various load conditions",
      "Device Compatibility Testing across popular devices",
      "Security Testing to identify and resolve vulnerabilities",
      "User Acceptance Testing to ensure market readiness",
    ],
    image: "/mobile-testing-pana-66210855e52e3-768x768.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* Premium Statement */}
      <section className="relative py-24 px-6 bg-[#0f0f14] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            Your vision, our expertise—creating unforgettable mobile
            experiences.
          </motion.h3>
        </div>
      </section>

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
                    <p className="text-xs tracking-[0.2em] text-purple-600 mb-4 uppercase font-semibold">
                      {item.tag}
                    </p>

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

                    <ul className="space-y-3 mt-4">
                      {item.bullets.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 w-2 h-2 bg-purple-600 rounded-full" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MARKET INSIGHTS SECTION */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Market Insights: Mobile App Development in Qatar 2026
          </motion.h2>

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              <span className="font-semibold text-gray-900">Android</span> holds
              a commanding
              <span className="font-semibold"> 77.23% </span>
              of the mobile operating system market share in Qatar, making
              Android development crucial for market penetration. However, iOS
              users typically demonstrate higher engagement and spending
              patterns, making dual-platform strategies often most effective.
            </p>

            <p>
              The Qatar market is witnessing a surge in enterprise mobile
              applications with focus on security, scalability, and user
              experience, presenting significant opportunities for businesses
              ready to embrace digital transformation.
            </p>
          </motion.div>

          {/* Trends */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              Current Trends Shaping Qatar’s App Market:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Enterprise Mobility",
                  desc: "Growing demand for business-focused applications",
                },
                {
                  title: "Digital Transformation",
                  desc: "Government and private sector digitization initiatives",
                },
                {
                  title: "Fintech Innovation",
                  desc: "Rising adoption of digital payment and banking solutions",
                },
                {
                  title: "AI Integration",
                  desc: "Enhanced user personalization and automation features",
                },
                {
                  title: "Security Focus",
                  desc: "Increased emphasis on data protection and user privacy",
                },
              ].map((trend, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-purple-500 hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-gray-900">
                    {trend.title}:
                  </h4>
                  <p className="text-gray-600 mt-2">{trend.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
