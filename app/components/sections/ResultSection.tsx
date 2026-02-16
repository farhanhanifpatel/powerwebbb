"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ResultsSection() {
  const [startCount, setStartCount] = useState(false);

  // Track if section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once
    threshold: 0.3, // start when 30% visible
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center text-white overflow-hidden p-6 mt-8 mb-4"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/your-bg-image.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

      {/* Glow accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/30 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Real Results for Real Businesses
            </h1>

            <p className="text-gray-300 max-w-xl mb-8 text-lg">
              See how we’ve helped companies across Qatar transform their
              technology and achieve their goals with our IT services in Qatar.
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:scale-105 transition shadow-2xl">
              View Our Work
            </button>

            {/* CONTACT BAR */}
            <div className="flex flex-wrap gap-8 mt-14 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full text-xl">🕒</div>
                <div>
                  <p className="text-gray-300 text-sm">Saturday to Thursday</p>
                  <p className="font-semibold">9:00 AM to 5:00 PM</p>
                </div>
              </div>

              <div className="w-px bg-white/20 hidden md:block" />

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full text-xl">📞</div>
                <div>
                  <p className="text-gray-300 text-sm">
                    Call to ask a question
                  </p>
                  <p className="font-semibold">+974 5018 4018</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl hover:bg-white/20 transition shadow-xl"
            >
              <h2 className="text-5xl font-bold mb-2 text-purple-400">
                {startCount ? <CountUp end={7} duration={2} /> : 0}+
              </h2>
              <h3 className="text-xl font-semibold mb-2">
                Years in the business
              </h3>
              <p className="text-gray-300">
                Years of Experience as one of the leading IT companies in Doha.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl hover:bg-white/20 transition shadow-xl"
            >
              <h2 className="text-5xl font-bold pt-2 mb-2 text-indigo-400">
                {startCount ? <CountUp end={100} duration={2} /> : 0}+
              </h2>
              <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
              <p className="text-gray-300">
                Completed Successfully delivered across diverse industries in
                Qatar.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
