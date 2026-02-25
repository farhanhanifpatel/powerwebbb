"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ============================= */
/*        Type Definition        */
/* ============================= */

type Section = {
  title: string;
  image: string;
  paragraphs?: string[];
  bullets?: string[];
};

/* ============================= */
/*        Section Data           */
/* ============================= */

const sections: Section[] = [
  {
    title: "Deep Local Market Understanding",
    paragraphs: [
      "We possess intimate knowledge of Qatar’s unique cultural nuances, seasonal trends, and consumer behavior patterns. Qatar ranks third globally in social media usage relative to population, making expert guidance essential for success.",
    ],
    image: "/location-review-amico-6620f9d7d7f1f-768x768.webp",
  },
  {
    title: "Strategic Planning & Consultation",
    bullets: [
      "Custom social media strategies aligned with Qatar National Vision 2030",
      "Competitive analysis within the Qatari market",
      "Regular security audits and vulnerability assessments",
      "Platform selection based on your target demographic",
      "Content calendar development with cultural sensitivity",
    ],
    image: "/location-review-amico-6620f9d7d7f1f-768x768.webp",
  },
  {
    title: "Content Creation & Management",
    bullets: [
      "Bilingual content creation (Arabic & English)",
      "Visual storytelling that reflects Qatari values",
      "Video production optimized for mobile consumption",
      "User-generated content campaigns",
      "Influencer collaboration strategies",
    ],
    image: "/location-review-amico-6620f9d7d7f1f-768x768.webp",
  },
  {
    title: "Paid Social Media Advertising",
    bullets: [
      "Meta Ads (Facebook & Instagram) campaigns",
      "LinkedIn advertising for B2B companies",
      "TikTok advertising for younger demographics",
      "Snapchat campaigns targeting local audiences",
      "YouTube advertising for video-first strategies",
    ],
    image: "/location-review-amico-6620f9d7d7f1f-768x768.webp",
  },
  {
    title: "Analytics & Performance Tracking",
    bullets: [
      "Comprehensive reporting dashboards",
      "ROI measurement and optimization",
      "Audience insights and behavior analysis",
      "Campaign performance monitoring",
      "Monthly strategy reviews and adjustments",
    ],
    image: "/location-review-amico-6620f9d7d7f1f-768x768.webp",
  },
];

/* ============================= */
/*        Component              */
/* ============================= */

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
            Social media marketing: where connections lead to conversions.
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
            Why Choose PowerWeb as Your Social Media Marketing Partner in Qatar?
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

                    {/* Paragraphs */}
                    {item.paragraphs &&
                      item.paragraphs.map((text, i) => (
                        <p key={i} className="text-gray-700 mb-4">
                          {text}
                        </p>
                      ))}

                    {/* Bullets */}
                    {item.bullets && (
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
                    )}
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
