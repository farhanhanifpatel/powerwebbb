"use client";

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
    <footer className="relative bg-gradient-to-br from-[#0f0c29] via-[#1a1a40] to-[#24243e] text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              PowerWeb
            </h3>
            <p className="text-white/70 leading-relaxed">
              We build scalable web, mobile, and IT solutions designed to help
              businesses grow and dominate digitally.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-white/70">
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

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>

            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-purple-400 mt-1" />
                info@powerweb.qa
              </li>

              <li className="flex items-start gap-3">
                <FaPhone className="text-purple-400 mt-1" />
                +974 5018 4018
              </li>

              <li className="flex items-start gap-3">
                <FaLocationDot className="text-purple-400 mt-1" />
                Qatar Science & Technology Park, Doha
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>

            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition duration-300 cursor-pointer"
                  >
                    <Icon className="text-white" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm gap-4">
          <p>
            © {new Date().getFullYear()} PowerWeb Technologies. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
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
