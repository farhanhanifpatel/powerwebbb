"use client";
import { client } from "../../lib/sanity";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Type
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

  // ✅ Fetch From Sanity
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch(`
        *[_type == "socialMediaTestimonial"] {
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

  // ✅ Auto Slide
  useEffect(() => {
    if (!testimonials.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (!testimonials.length) return null;

  return (
    <section className="relative py-28 bg-slate-100 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-20">
          What Our Clients Say
        </h2>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index]._id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white shadow-2xl rounded-3xl p-12 w-full text-black overflow-hidden"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24  bg-gradient-to-r from-purple-300 to-indigo-300 rounded-br-[60px]" />

              {/* ⭐ Dynamic Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl mx-1 ${
                      i < (testimonials[index]?.rating ?? 5)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-lg italic mb-8 leading-relaxed text-gray-700">
                “{testimonials[index].feedback}”
              </p>

              {/* Name */}
              <h4 className="text-xl font-semibold text-black">
                {testimonials[index].name}
              </h4>

              {/* Country */}
              <p className="text-gray-400 text-sm mt-1">
                {testimonials[index].country}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔘 Dots */}
        <div className="flex justify-center mt-10 space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-yellow-400 scale-125" : "bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
