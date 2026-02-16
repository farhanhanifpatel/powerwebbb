"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/powerweb-story.webp"
          alt="office"
          width={450}
          height={450}
          className="mx-auto rounded-xl object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-purple-600 text-sm font-semibold mb-2">OUR STORY</p>

        <h2 className="text-3xl font-bold mb-6 leading-snug bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
          One Of The Best IT Companies in Qatar
        </h2>

        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600 shadow-sm">
          <p className="text-gray-500 leading-relaxed text-[15px]">
            PowerWeb started with a simple mission:
            <span>
              {" "}
              to help businesses in Doha thrive through reliable technology
              solutions. What began as a small team of passionate professionals
              has grown into a trusted partner serving over 100 businesses
              across diverse industries.
            </span>
            <br />
            <br />
            We noticed companies were struggling to find a single, dependable
            partner who could handle everything from websites to ongoing
            technical support. They were juggling multiple vendors and dealing
            with inconsistent quality. We knew there had to be a better way.
            <br />
            <br />
            Today, we’re a comprehensive technology partner offering it
            consultancy in Qatar. Our certified experts work around the clock to
            ensure your technology runs smoothly, so you can focus on growing
            your business.
            <br />
            <br />
            Located at Qatar Science & Technology Park, we understand the unique
            challenges and opportunities of the local market. From startups to
            established enterprises, we’ve been there every step of the way.
          </p>
        </div>

        <div className="flex gap-8 items-center mt-6">
          {/* Reviews */}
          <div className="relative w-32 h-10">
            <Image
              src="/PowerWeb-Reviews.webp"
              alt="reviews"
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>

          {/* Trustpilot */}
          <div className="relative w-32 h-8">
            <Image
              src="/Trust-Pilot-Reviews-PowerWeb.webp"
              alt="trustpilot"
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
