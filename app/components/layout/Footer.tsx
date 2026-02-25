"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const services = [
  { name: "Domain & Hosting", href: "/hosting-domain-setup" },
  { name: "Web Design", href: "/web-design-qatar" },
  { name: "Mobile App Development", href: "/mobile-app-development" },
  { name: "SEO Services", href: "/seo-services" },
  { name: "Social Media Marketing", href: "/social-media-marketing" },
  {
    name: "Cyber Security",
    href: "/cybersecurity-services-qatar",
  },
  { name: "IT Support", href: "/managed-it-support-service" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f0c29] via-[#1a1a40] to-[#24243e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/cropped-PowerWeb-Logo.webp"
                alt="PowerWeb Logo"
                width={45}
                height={45}
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                PowerWeb
              </h3>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              We build scalable digital solutions that help brands grow faster,
              smarter, and stronger.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-base font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Info</h4>

            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex gap-3 items-start">
                <FaEnvelope className="text-purple-400 mt-1 text-sm" />
                <a href="mailto:info@powerweb.qa">info@powerweb.qa</a>
              </li>

              <li className="flex gap-3 items-start">
                <FaPhone className="text-purple-400 mt-1 text-sm" />
                <a href="tel:+97450184018">+974 5018 4018</a>
              </li>

              <li className="flex gap-3 items-start">
                <FaLocationDot className="text-purple-400 mt-1 text-sm" />
                Qatar Science & Technology Park, Doha
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-purple-500 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-xs gap-3">
          <p>
            © {new Date().getFullYear()} PowerWeb Technologies. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-purple-400 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
