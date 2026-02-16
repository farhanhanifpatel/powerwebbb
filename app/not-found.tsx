"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f1b] via-[#151528] to-[#0b0b14] px-6 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[120px] md:text-[160px] font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mt-4"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-gray-400 text-lg leading-relaxed"
        >
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or return to the homepage.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Return Home */}
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 font-medium transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return Home
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 font-medium text-gray-300 transition-all duration-300 hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
