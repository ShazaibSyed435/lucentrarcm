"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Specialties", href: "/specialties" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" h-[96px] w-full bg-white">
      <nav className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between  px-[16px] 2xl:px-0">
        {/* Logo */}
        <Link href="/" aria-label="Lucentra RCM home">
          <Image
            src="/logo.svg"
            alt="Lucentra RCM"
            width={220}
            height={42}
            priority
            className="h-auto w-[180px] sm:w-[200px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[16px] font-bold text-[#7D8185] transition-colors hover:text-black border-2 border-transparent hover:border-2 hover:border-black rounded  px-3 py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 xl:flex">
          <a href="tel:8889870332" className="flex items-center gap-3">
            <Image
              src="/call.png"
              alt="Call"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />

            <div className="leading-tight">
              <p className="text-sm text-gray-500">Call Anytime</p>
              <p className="text-base font-semibold text-gray-900">
                (888) 987-0332
              </p>
            </div>
          </a>

          <Link
            href="/signup"
            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className=" p-[10px] text-white lg:hidden bg-[#005350] rounded-full"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.8} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Overlay */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 bg-black/30"
          />

          {/* Right Sidebar */}
          <div className="absolute right-0 top-0 h-full w-[320px] bg-white shadow-2xl">
            {/* Sidebar Header */}
            <div className="flex pt-[24px] pb-[16px] px-[24px] items-center justify-between px-6">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/logo.svg"
                  alt="Lucentra RCM"
                  width={180}
                  height={42}
                  priority
                  className="h-auto w-[145px]"
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-1 text-gray-800"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.8} />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="px-[26px] pb-10">
              {/* Navigation */}
              <div className="flex flex-col gap-[3px]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[16px] font-semibold leading-[1.4] text-[#7b7f83] transition-colors hover:text-black border-2 border-transparent hover:border-2 hover:border-black rounded  px-3 py-1">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Contact Information */}
              <div className="mt-[34px] ml-[50px]">
                <div>
                  <p className="text-[14px] font-semibold leading-6 text-[#85898d]">
                    Call
                  </p>

                  <a
                    href="tel:8889870332"
                    className="block text-[16px] font-semibold leading-8 text-[#17181a]"
                  >
                    (888) 987-0332
                  </a>
                </div>

                <div className="mt-1">
                  <p className="text-[14px] font-semibold leading-6 text-[#85898d]">
                    Call
                  </p>

                  <a
                    href="tel:8889870332"
                    className="block text-[16px] font-semibold leading-8 text-[#17181a]"
                  >
                    (888) 987-0332
                  </a>
                </div>

                <div className="mt-1">
                  <p className="text-[14px] font-semibold leading-6 text-[#85898d]">
                    Email
                  </p>

                  <a
                    href="mailto:info@nisusinternational.com"
                    className="block whitespace-nowrap text-[16px] font-medium leading-7 text-[#17181a]"
                  >
                    info@nisusinternational.com
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-[20px] flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#292f35] text-white"
                  >
                    {social.name === "Facebook" && (
                      <span className="text-[20px] font-bold">f</span>
                    )}

                    {social.name === "Instagram" && (
                      <span className="text-[20px]">◎</span>
                    )}

                    {social.name === "X" && (
                      <span className="text-[20px]">𝕏</span>
                    )}

                    {social.name === "LinkedIn" && (
                      <span className="text-[20px] font-bold">in</span>
                    )}

                    {social.name === "YouTube" && (
                      <span className="text-[20px]">▶</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
