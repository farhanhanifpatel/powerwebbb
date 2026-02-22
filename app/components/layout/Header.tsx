"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
    {
      name: "Services",
      children: [
        { name: "Domain & Hosting", href: "/hosting-domain-setup" },
        { name: "Web Design", href: "/web-design-qatar" },
        { name: "Mobile App Development", href: "/mobile-app-development" },
        { name: "SEO Services", href: "/seo-services" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
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
            {nav.map((item) =>
              item.children ? (
                <div key={item.name} className="flex flex-col gap-3">
                  <span className="font-semibold text-gray-900">
                    {item.name}
                  </span>

                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="text-gray-600"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-800 font-medium"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/cropped-PowerWeb-Logo.webp"
              alt="PowerWeb"
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
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-10">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {nav.map((item) => {
              const active = pathname === item.href;

              if (item.children) {
                return (
                  <div key={item.name} className="relative group">
                    {/* Trigger */}
                    <div
                      className={`relative font-medium transition-colors duration-300 cursor-pointer flex items-center gap-1 ${
                        scrolled ? "text-gray-800" : "text-white drop-shadow-md"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />

                      {/* Underline */}
                      <span className="absolute left-0 -bottom-2 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full" />
                    </div>

                    {/* Dropdown */}
                    <div
                      className="absolute left-0 top-full mt-4 w-56 opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible
        transition-all duration-300"
                    >
                      <div className="bg-white backdrop-blur-md border border-white/10 rounded-xl p-3 space-y-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 rounded-md hover:bg-black/5 transition"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors duration-300 group ${
                    scrolled ? "text-gray-800" : "text-white drop-shadow-md"
                  }`}
                >
                  {item.name}

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
            className={`md:hidden transition-colors duration-300 text-2xl ${
              scrolled ? "text-purple-600" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* CTA */}
          <Link href="/contact">
            <Button
              className="hidden md:inline-flex rounded-full px-6 py-6 
              text-white font-semibold
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
