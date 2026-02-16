"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f0c29] via-[#1a1a40] to-[#24243e] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/cropped-PowerWeb-Logo.webp" // put your logo inside public folder
                alt="PowerWeb Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                PowerWeb
              </h3>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              Scalable web, mobile, and IT solutions designed to help businesses
              grow digitally.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-base font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-white/70 text-sm ">
              {[
                "Web Design",
                "SEO Services",
                "Mobile Development",
                "Managed IT Services",
                "Cyber Security",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-purple-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact</h4>

            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-purple-400 mt-1 text-sm" />
                info@powerweb.qa
              </li>

              <li className="flex items-start gap-2">
                <FaPhone className="text-purple-400 mt-1 text-sm" />
                +974 5018 4018
              </li>

              <li className="flex items-start gap-2">
                <FaLocationDot className="text-purple-400 mt-1 text-sm" />
                Qatar Science & Technology Park, Doha
              </li>
            </ul>
          </div>

          {/* MAP */}
          <div>
            <h4 className="text-base font-semibold mb-3">Location</h4>

            <div className="w-full h-40 rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Qatar+Science+and+Technology+Park+Doha&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-4 mt-8">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition duration-300 cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ),
          )}
        </div>

        {/* DIVIDER */}
        <div className="my-6 h-px bg-white/10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-xs gap-3">
          <p>
            © {new Date().getFullYear()} PowerWeb Technologies. All Rights
            Reserved.
          </p>

          <div className="flex gap-5">
            <span className="hover:text-purple-400 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-purple-400 cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
