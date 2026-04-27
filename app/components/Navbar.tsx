"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;  // ← Added :string type

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/30 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 h-20 md:h-24 mx-auto">
        <Link href="/" className="flex items-center flex-shrink-0 h-full">
          <Image
            src="/assets/white.png"
            alt="MedNLaw Logo"
            width={300}
            height={200}
            className="w-[300px] h-[200px] object-contain brightness-0 invert transition-all duration-500"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-8 lg:space-x-12 font-medium text-[15px] lg:text-[16px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-all duration-300 hover:scale-105 ${
                  isActive(link.href)
                    ? "text-[#17ADA1] font-semibold"
                    : "text-white hover:text-[#17ADA1]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isActive(link.href)
                      ? "text-white bg-[#17ADA1]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;