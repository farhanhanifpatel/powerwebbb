"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SocialMediaCTA() {
  const router = useRouter();
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-gray-300 mb-8">
          Let&apos;s elevate your brand&apos;s social media presence together.
          Our expert team crafts tailored strategies that drive engagement, grow
          your audience, and boost conversions. Ready to make an impact? Get in
          touch for a free consultation and let&apos;s start creating your
          social media success story today!
        </p>

        <Button
          onClick={() => router.push("/contact")}
          size="lg"
          className="bg-white text-purple-900 hover:bg-gray-200 px-8 py-6 rounded-full text-lg"
        >
          Get Free Consultation →
        </Button>
      </motion.div>
    </section>
  );
}
