"use client";

import { client } from "../../lib/sanity";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

type Testimonial = {
  _id: string;
  name: string;
  country: string;
  feedback: string;
  rating: number;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "itTestimonial"] | order(_createdAt desc) {
            _id,
            name,
            country,
            feedback,
            rating
          }
        `);
        setTestimonials(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!testimonials.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (!testimonials.length) return null;

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20"
        >
          What Our Clients
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {" "}
            Say
          </span>
        </motion.h2>

        <div className="relative h-[360px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index]._id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-14 w-full overflow-hidden"
            >
              {/* Decorative Quote */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-purple-400/30" />

              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl mx-1 ${
                      i < (testimonials[index]?.rating ?? 5)
                        ? "text-yellow-400"
                        : "text-white/30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-xl italic leading-relaxed mb-10 max-w-3xl mx-auto text-white/90">
                “{testimonials[index].feedback}”
              </p>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-semibold">
                  {testimonials[index].name}
                </h4>
                <p className="text-white/60 text-sm mt-1">
                  {testimonials[index].country}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                index === i
                  ? "w-10 h-3 bg-purple-500"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
