"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Icon } from "@iconify/react";

const services = [
  "Credentialing & Contracting",
  "Electronic Claims Setup",
  "A/R Management",
  "Verification of Eligibility",
  "Denial Management",
  "Medical Billing & Coding",
];

const quickLinks = [
  "About Us",
  "Services",
  "Specialties",
  "Pricing",
  "Contact Us",
];
const socials = [
  {
    name: "Facebook",
    icon: "mdi:facebook",
  },
  {
    name: "Instagram",
    icon: "mdi:instagram",
  },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
  },
  {
    name: "Twitter",
    icon: "mdi:twitter",
  },
];
export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#064f4b] text-white">
      {/* Decorative Circle - Top Right */}
      <div className="pointer-events-none absolute -right-[80px] -top-[120px] h-[310px] w-[310px] rounded-full border-[45px] border-[#397773]/25 sm:-right-[100px] sm:-top-[150px] sm:h-[390px] sm:w-[390px] md:-right-[120px] md:-top-[170px] md:h-[430px] md:w-[430px]" />

      {/* Decorative Circle - Bottom Left */}
      <div className="pointer-events-none absolute -bottom-[110px] -left-[80px] h-[270px] w-[270px] rounded-full border-[45px] border-[#397773]/25 sm:-bottom-[140px] sm:-left-[100px] sm:h-[350px] sm:w-[350px] md:-bottom-[160px] md:-left-[120px] md:h-[400px] md:w-[400px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Main Footer */}
        <div className="grid grid-cols-1 px-[35px] pb-10 pt-[45px] sm:px-[35px] sm:pb-12 sm:pt-[50px] md:grid-cols-2 md:gap-x-16 md:gap-y-12 md:px-[35px] md:pt-[55px] lg:grid-cols-[1.45fr_1.15fr_1.15fr_1fr] lg:gap-x-10 lg:px-[32px] lg:pb-[70px] lg:pt-[75px] xl:px-[32px]">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <Image
                src="/logowhite.svg"
                alt="Lucentra RCM"
                width={220}
                height={60}
                className="h-auto w-[215px] object-contain sm:w-[220px] lg:w-[220px]"
              />
            </div>

            <p className="mt-5 max-w-[360px] text-[13px] leading-[1.95] text-[#8eaeab] sm:text-[14px] lg:mt-6 lg:text-[14px]">
              Your trusted partner in smarter healthcare billing. Delivering
              accuracy, speed, and peace of mind — every claim, every time.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2 sm:mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] border border-[#477b76] bg-[#28635f]/60 transition-colors hover:border-[#ff7048]"
                >
                  {/* <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="h-[16px] w-[16px] object-contain"
                  /> */}
                  <Icon icon={social.icon} width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mt-9 md:mt-0">
            <h3 className="text-[15px] font-bold tracking-[0.7px] text-white sm:text-[16px]">
              OUR SERVICES
            </h3>
            <div className="mt-3 h-[2px] w-[28px] bg-[#ff7048]" />

            <ul className="mt-5 space-y-[12px] sm:mt-6 sm:space-y-[13px]">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-[12px] leading-[1.5] text-[#8eaeab] transition-colors hover:text-white sm:text-[13px] lg:text-[14px]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-[15px] font-bold tracking-[0.7px] text-white sm:text-[16px]">
              QUICK LINKS
            </h3>
            <div className="mt-3 h-[2px] w-[28px] bg-[#ff7048]" />

            <ul className="mt-5 space-y-[12px] sm:mt-6 sm:space-y-[13px]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[12px] leading-[1.5] text-[#8eaeab] transition-colors hover:text-white sm:text-[13px] lg:text-[14px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-[15px] font-bold tracking-[0.7px] text-white sm:text-[16px]">
              CONTACT US
            </h3>
            <div className="mt-3 h-[2px] w-[28px] bg-[#ff7048]" />

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[8px] border border-[#557c77] bg-[#28635f] text-[#ff7048]">
                  <Phone className="h-[14px] w-[14px]" strokeWidth={2} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.6px] text-[#6f9693]">
                    PHONE
                  </p>
                  <p className="mt-1 text-[12px] leading-[1.7] text-[#a5c0bd] sm:text-[13px]">
                    (727) 591-0997
                    <br />
                    (888) 987-0332
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[8px] border border-[#557c77] bg-[#28635f] text-[#ff7048]">
                  <Mail className="h-[14px] w-[14px]" strokeWidth={2} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.6px] text-[#6f9693]">
                    EMAIL
                  </p>
                  <a
                    href="mailto:info@lucentrarcm.com"
                    className="mt-1 block text-[12px] text-[#a5c0bd] sm:text-[13px]"
                  >
                    info@lucentrarcm.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[8px] border border-[#557c77] bg-[#28635f] text-[#ff7048]">
                  <MapPin className="h-[14px] w-[14px]" strokeWidth={2} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.6px] text-[#6f9693]">
                    ADDRESS
                  </p>
                  <p className="mt-1 text-[12px] leading-[1.7] text-[#a5c0bd] sm:text-[13px]">
                    7901 4th St N # 10102
                    <br />
                    St. Petersburg, FL 33702
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#39716d]/60 px-[35px] py-5 sm:px-[35px] md:flex md:items-center md:justify-between md:py-5 lg:px-[32px]">
          <p className="text-center text-[10px] text-[#709693] sm:text-[11px] md:text-left lg:text-[12px]">
            © 2026 Lucentra RCM Solutions LLC. All rights reserved.
          </p>

          <div className="mt-4 flex items-center justify-center gap-6 md:mt-0">
            <a
              href="#"
              className="text-[10px] text-[#709693] transition-colors hover:text-white sm:text-[11px] lg:text-[12px]"
            >
              Terms of Use
            </a>

            <a
              href="#"
              className="text-[10px] text-[#709693] transition-colors hover:text-white sm:text-[11px] lg:text-[12px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
