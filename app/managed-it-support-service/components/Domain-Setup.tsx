"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WordPressService() {
  const router = useRouter();
  return (
    <section className="relative py-28 overflow-hidden  bg-white dark:from-neutral-950 dark:to-neutral-900   ">
      {/* Background Glow */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="relative group"
        >
          {/* Card Container */}
          <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-500">
            {/* Left Accent Line */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full"></div>

            <div className="pl-6">
              {/* Small Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full mb-4">
                Starting Your Online Business
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
                Domain Name/ E-mails Setup
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-4">
                Streamline your online presence with PowerWeb’s Domain Name and
                Emails Setup services in Doha, Qatar. We specialize in setting
                up and managing domain names and email services tailored to your
                business needs as part of our managed services in IT offerings.
                Whether you’re establishing a new domain, transferring an
                existing one, or configuring email accounts, our experts ensure
                a seamless setup process.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-6">
                With our reliable and secure email solutions, you can enhance
                communication within your organization and with clients. Trust
                PowerWeb to handle every aspect of your domain and email setup,
                ensuring your business has a professional online presence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/Domain-Name-E-mails-Setup-2-768x768.webp"
              alt="Domain Name and E-mails Setup in Doha, Qatar"
              width={700}
              height={600}
              className="w-full h-auto "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
