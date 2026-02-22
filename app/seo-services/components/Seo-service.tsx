"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ClipboardList,
  Search,
  BarChart3,
  Settings,
  Link2,
  FileCheck,
} from "lucide-react";

const sections = [
  {
    tag: "Best In Town",
    title: "SEO Services in Doha Qatar",
    paragraphs: [
      "Welcome to PowerWeb’s SEO Services in Qatar page. In today’s digital age, achieving visibility and prominence on search engine results pages is crucial for businesses looking to thrive online. That’s where our expertise as the best SEO company in Qatar comes in.",
      "At PowerWeb, we specialize in crafting tailored SEO strategies designed to elevate your online presence, drive organic traffic, and maximize your website’s potential. As a leading SEO agency in Qatar with deep understanding of Google algorithm for SEO and industry best practices, we’re committed to helping businesses in Doha, Qatar, and beyond reach their full online potential through our comprehensive full service SEO solutions.",
      "Whether you’re searching for “SEO services near me” or specifically need an SEO company in Doha, PowerWeb delivers results that matter to your bottom line.",
    ],
    image: "/SEO-Serivces-Qatart-Doha-1024x1024.webp",
  },
  {
    tag: "Bespoke SEO Strategy",
    title: "Our Approach to SEO",
    paragraphs: [
      "At PowerWeb, we understand that no two businesses are alike, which is why our approach to SEO is highly customized and tailored to meet your specific needs and goals. As the top SEO agency in Doha, our dedicated team of SEO experts begins by conducting a comprehensive analysis of your website, industry, target audience, and competitors.",
      "Armed with this valuable insight, we develop a strategic SEO roadmap that outlines clear objectives and actionable steps to improve SEO ranking on Google. From on-page optimization and technical SEO audits to content strategy and link building, we implement a holistic approach that addresses every aspect of your online presence.",
      "Our SEO consulting services ensure you understand every step of the process, making us more than just a service provider—we’re your strategic partner in digital growth.",
    ],
    image: "/seo-rafiki-6620ef486bc6e-768x768.webp",
  },
];

const services = [
  {
    title: "Requirement Gathering",
    description:
      "Understand client needs, goals, and target audience to tailor strategies that align with your business objectives and Qatar SEO market requirements.",
    icon: ClipboardList,
  },
  {
    title: "Audit",
    description:
      "Conduct thorough analysis of website performance, SEO metrics, and competitive landscape to identify opportunities for improvement and growth.",
    icon: FileCheck,
  },
  {
    title: "Keyword Research",
    description:
      "Identify relevant, high-converting keywords that your target audience searches for, forming the foundation of your Google SEO in Qatar success.",
    icon: Search,
  },
  {
    title: "On Page Optimization",
    description:
      "Optimize website structure, content, meta tags, and user experience elements for maximum search engine visibility and user engagement.",
    icon: BarChart3,
  },
  {
    title: "Technical SEO",
    description:
      "Address critical backend elements like site speed, crawlability, mobile-friendliness, and schema markup to ensure optimal search engine performance.",
    icon: Settings,
  },
  {
    title: "Link Building",
    description:
      "Build quality backlinks from reputable sources to improve domain authority, search ranking signals, and establish your website as a trusted resource.",
    icon: Link2,
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
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
          {/* Trends */}
          <div className="">
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

      <section className="relative py-28 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our SEO Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A structured, data-driven approach designed to deliver measurable
            growth and long-term search visibility.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-500 border border-transparent hover:border-purple-200"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 blur-xl rounded-3xl transition duration-500"></div>

                {/* Icon */}
                <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white mb-6 group-hover:scale-110 transition duration-300">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
