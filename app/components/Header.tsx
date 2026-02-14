"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "More", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
          <div className="flex flex-col items-center text-center p-6 gap-6">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-800 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/cropped-PowerWeb-Logo.webp"
            alt="powerweb"
            width={200}
            height={200}
            className="h-12 w-auto object-contain"
            priority
          />

          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-white drop-shadow-md"
            }`}
          >
            PowerWeb
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-10">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors duration-300 group ${
                    scrolled ? "text-gray-800" : "text-white drop-shadow-md"
                  }`}
                >
                  {item.name}

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-purple-600 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-purple-600" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

<<<<<<< HEAD
          {/* CTA Button */}
          <a
            href="tel:+97450184018"
            className="hidden md:block px-6 py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-purple-600 to-indigo-600
            hover:scale-105 hover:shadow-lg transition"
          >
            +974 5018 4018
          </a>
=======
      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white shadow-lg z-[998]">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-800 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:+97450184018"
              className="mt-4 px-5 py-3 rounded-full text-white text-center font-semibold
        bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              +974 5018 4018
            </a>
          </div>
>>>>>>> cf0c03f (resolve-toggleissue in mobile menu)
        </div>
      </div>
    </header>
  );
}
