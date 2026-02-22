"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    tag: "Optimize for Both Users and Search Engines",
    title: "On Page SEO",
    paragraphs: [
      "Enhance your website’s visibility and relevance with our comprehensive on-page optimization services. As experts in Qatar SEO, we understand the nuances of optimizing for both English and Arabic search queries. From keyword-rich content creation to strategic meta tag optimization, we ensure every aspect of your website is fine-tuned to rank higher on search engine results pages (SERPs).",
      "Our meticulous approach focuses on improving user experience, boosting organic traffic, and maximizing conversions through data-driven optimization strategies.",
    ],
    image: "/seo-amico-6620f6511c766-768x768.webp",
  },
  {
    tag: "Things That Matter",
    title: "Technical SEO",
    paragraphs: [
      "We delve deep into the backend aspects of your website, optimizing site speed, enhancing crawlability, and ensuring mobile-friendliness with our technical SEO services. Our SEO company Qatar expertise includes:",
    ],
    bullets: [
      "Core Web Vitals optimization for superior user experience",
      "Schema markup implementation for rich snippets",
      "XML sitemap creation and optimization",
      "Robot.txt file configuration",
      "SSL certificate implementation",
      "Mobile-first indexing optimization",
    ],
    image: "/site-stats-amico-6620f74b317b8-768x768.webp",
  },
  {
    tag: "Improving Website’s Authority",
    title: "Off Page SEO",
    paragraphs: [
      "Through targeted link building, brand mentions, and social media engagement, we enhance your website’s credibility and relevance in the eyes of search engines. Our tailored approach focuses on:",
    ],
    bullets: [
      "Building quality backlinks from authoritative Qatar and regional websites",
      "Local citation building and NAP (Name, Address, Phone) consistency",
      "Social media signal optimization",
      "Brand mention tracking and management",
      "Influencer outreach and collaboration strategies",
    ],
    image: "/search-engines-amico-6620f8b5a069b-768x768.webp",
  },
  {
    tag: "Making Your Business Stand Out Locally",
    title: "Local SEO",
    paragraphs: [
      "Amplify your local visibility and attract nearby customers with our specialized local SEO services. Perfect for businesses serving Qatar’s local market, we optimize your online presence to dominate local search results, ensuring your business appears in relevant “SEO services near me” searches.",
      "Our Doha SEO specialists focus on:",
    ],
    bullets: [
      "Google My Business optimization and management",
      "Location-specific content creation",
      "Local keyword targeting and optimization",
      "Customer review management and acquisition",
      "Local directory submissions and citations",
      "Geo-targeted advertising integration",
    ],
    image: "/location-review-amico-6620f9d7d7f1f-768x768.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* PREMIUM STATEMENT */}
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
            Why Choose Us
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
                    <p className="text-xs tracking-[0.2em] text-purple-600 mb-4 uppercase font-semibold">
                      {item.tag}
                    </p>

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

                    {/* SAFE BULLET RENDER */}
                    {item.bullets && (
                      <ul className="space-y-3 mt-4">
                        {item.bullets.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="mt-2 w-2 h-2 bg-purple-600 rounded-full shrink-0" />
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
