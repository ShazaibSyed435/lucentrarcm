// "use client";

// import React, { useState } from "react";
// import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
// import {
//   //  Facebook,
//   Instagram,
//   Linkedin,
//   X,
//   Youtube,
// } from "lucide-react";

// const services = [
//   "Credentialing & Contracting",
//   "Electronic Claims Setup",
//   "A/R Management",
//   "Verification of Eligibility",
//   "Denial Management",
//   "Medical Billing & Coding",
// ];

// const quickLinks = [
//   "About Us",
//   "Services",
//   "Specialties",
//   "Pricing",
//   "Contact Us",
// ];

// export default function Footer() {
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   return (
//     <footer className="relative w-full overflow-hidden bg-[#064f4b] text-white">
//       {/* Decorative Circles */}
//       <div className="pointer-events-none absolute -right-[70px] -top-[120px] h-[300px] w-[300px] rounded-full border-[45px] border-[#28716c]/30 sm:-right-[100px] sm:-top-[150px] sm:h-[390px] sm:w-[390px] lg:h-[430px] lg:w-[430px]" />
//       <div className="pointer-events-none absolute -bottom-[110px] -left-[80px] h-[270px] w-[270px] rounded-full border-[45px] border-[#28716c]/30 sm:-bottom-[150px] sm:-left-[100px] sm:h-[360px] sm:w-[360px] lg:h-[390px] lg:w-[390px]" />

//       <div className="relative z-10 mx-auto w-full max-w-[1440px]">
//         {/* ================= DESKTOP / TABLET CONTENT ================= */}
//         <div className="grid grid-cols-1 px-5 pb-8 pt-10 sm:px-8 sm:pt-12 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:px-8 lg:pb-16 lg:pt-14 xl:px-8">
//           {/* Brand */}
//           <div className="md:pr-10 lg:pr-12">
//             <div className="flex items-center gap-2">
//               {/* Replace with your actual logo if available */}
//               <div className="flex h-[38px] w-[38px] items-center justify-center">
//                 <span className="text-[34px] font-bold leading-none text-[#ff7048]">
//                   ✣
//                 </span>
//               </div>

//               <span className="text-[23px] font-bold tracking-[-0.5px] sm:text-[25px]">
//                 Lucentra RCM
//               </span>
//             </div>

//             <p className="mt-6 max-w-[390px] text-[14px] leading-[1.8] text-[#91b2af] sm:text-[15px]">
//               Your trusted partner in smarter healthcare billing. Delivering
//               accuracy, speed, and peace of mind — every claim, every time.
//             </p>

//             {/* Social Icons */}
//             <div className="mt-5 flex items-center gap-2">
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="flex h-[37px] w-[37px] items-center justify-center rounded-[8px] border border-[#4d7d79] bg-[#276864]/50 transition-colors hover:border-[#ff7048]"
//               >
//                 <img
//                   src="/facebook.svg"
//                   alt="Facebook"
//                   className="h-[17px] w-[17px]"
//                 />
//               </a>
//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="flex h-[37px] w-[37px] items-center justify-center rounded-[8px] border border-[#4d7d79] bg-[#276864]/50 transition-colors hover:border-[#ff7048]"
//               >
//                 <img
//                   src="/instagram.svg"
//                   alt="Instagram"
//                   className="h-[17px] w-[17px]"
//                 />
//               </a>

//               <a
//                 href="#"
//                 aria-label="X"
//                 className="flex h-[37px] w-[37px] items-center justify-center rounded-[8px] border border-[#4d7d79] bg-[#276864]/50 transition-colors hover:border-[#ff7048]"
//               >
//                 <img src="/x.svg" alt="X" className="h-[17px] w-[17px]" />
//               </a>

//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="flex h-[37px] w-[37px] items-center justify-center rounded-[8px] border border-[#4d7d79] bg-[#276864]/50 transition-colors hover:border-[#ff7048]"
//               >
//                 <img
//                   src="/linkedin.svg"
//                   alt="LinkedIn"
//                   className="h-[17px] w-[17px]"
//                 />
//               </a>

//               <a
//                 href="#"
//                 aria-label="YouTube"
//                 className="flex h-[37px] w-[37px] items-center justify-center rounded-[8px] border border-[#4d7d79] bg-[#276864]/50 transition-colors hover:border-[#ff7048]"
//               >
//                 <img
//                   src="/youtube.svg"
//                   alt="YouTube"
//                   className="h-[17px] w-[17px]"
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="mt-10 md:mt-0">
//             <button
//               type="button"
//               onClick={() => toggleSection("services")}
//               className="flex w-full items-center justify-between text-left lg:pointer-events-none"
//             >
//               <div>
//                 <h3 className="text-[15px] font-bold tracking-[0.5px] sm:text-[16px]">
//                   OUR SERVICES
//                 </h3>
//                 <div className="mt-3 h-[2px] w-[28px] bg-[#ff7048]" />
//               </div>
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform md:hidden ${openSection === "services" ? "rotate-180" : ""}`}
//               />
//             </button>

//             <div
//               className={`${openSection === "services" ? "mt-5 block" : "hidden"} lg:mt-6 lg:block`}
//             >
//               <ul className="space-y-3.5">
//                 {services.map((service) => (
//                   <li key={service}>
//                     <a
//                       href="#"
//                       className="text-[13px] text-[#91b2af] transition-colors hover:text-white sm:text-[14px]"
//                     >
//                       {service}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="mt-8 md:mt-10 lg:mt-0">
//             <button
//               type="button"
//               onClick={() => toggleSection("links")}
//               className="flex w-full items-center justify-between text-left lg:pointer-events-none"
//             >
//               <div>
//                 <h3 className="text-[15px] font-bold tracking-[0.5px] sm:text-[16px]">
//                   QUICK LINKS
//                 </h3>
//                 <div className="mt-3 h-[2px] w-[28px] bg-[#ff7048]" />
//               </div>
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform md:hidden ${openSection === "links" ? "rotate-180" : ""}`}
//               />
//             </button>

//             <div
//               className={`${openSection === "links" ? "mt-5 block" : "hidden"} lg:mt-6 lg:block`}
//             >
//               <ul className="space-y-3.5">
//                 {quickLinks.map((link) => (
//                   <li key={link}>
//                     <a
//                       href="#"
//                       className="text-[13px] text-[#91b2af] transition-colors hover:text-white sm:text-[14px]"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="mt-8 md:mt-10 lg:mt-0">
//             <button
//               type="button"
//               onClick={() => toggleSection("contact")}
//               className="flex w-full items-center justify-between text-left lg:pointer-events-none"
//             >
//               <div>
//                 <h3 className="text-[15px] font-bold tracking-[0.5px] sm:text-[16px]">
//                   CONTACT US
//                 </h3>
//                 <div className="mt-3 h-[2px] w-[28px] bg-[#ff7048]" />
//               </div>
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform md:hidden ${openSection === "contact" ? "rotate-180" : ""}`}
//               />
//             </button>

//             <div
//               className={`${openSection === "contact" ? "mt-5 block" : "hidden"} lg:mt-6 lg:block`}
//             >
//               <div className="space-y-5">
//                 {/* Phone */}
//                 <div className="flex items-start gap-3">
//                   <div className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[8px] border border-[#607e79] bg-[#28655f] text-[#ff7048]">
//                     <Phone className="h-[14px] w-[14px]" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.5px] text-[#709d99]">
//                       PHONE
//                     </p>
//                     <a
//                       href="tel:+17275910997"
//                       className="mt-1 block text-[12px] leading-[1.7] text-[#a8c4c1]"
//                     >
//                       (727) 591-0997
//                     </a>
//                     <a
//                       href="tel:+18889870332"
//                       className="block text-[12px] leading-[1.7] text-[#a8c4c1]"
//                     >
//                       (888) 987-0332
//                     </a>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-start gap-3">
//                   <div className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[8px] border border-[#607e79] bg-[#28655f] text-[#ff7048]">
//                     <Mail className="h-[14px] w-[14px]" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.5px] text-[#709d99]">
//                       EMAIL
//                     </p>
//                     <a
//                       href="mailto:info@lucentrarcm.com"
//                       className="mt-1 block text-[12px] text-[#a8c4c1]"
//                     >
//                       info@lucentrarcm.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="flex items-start gap-3">
//                   <div className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[8px] border border-[#607e79] bg-[#28655f] text-[#ff7048]">
//                     <MapPin className="h-[14px] w-[14px]" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.5px] text-[#709d99]">
//                       ADDRESS
//                     </p>
//                     <p className="mt-1 text-[12px] leading-[1.7] text-[#a8c4c1]">
//                       7901 4th St N # 10102
//                       <br />
//                       St. Petersburg, FL 33702
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= BOTTOM BAR ================= */}
//         <div className="relative border-t border-[#3d706c]/60 px-5 py-5 sm:px-8 md:flex md:items-center md:justify-between lg:px-8">
//           <p className="text-center text-[11px] text-[#719b98] md:text-left sm:text-[12px]">
//             © 2026 Lucentra RCM Solutions LLC. All rights reserved.
//           </p>

//           <div className="mt-4 flex items-center justify-center gap-6 md:mt-0">
//             <a
//               href="#"
//               className="text-[11px] text-[#719b98] transition-colors hover:text-white sm:text-[12px]"
//             >
//               Terms of Use
//             </a>
//             <a
//               href="#"
//               className="text-[11px] text-[#719b98] transition-colors hover:text-white sm:text-[12px]"
//             >
//               Privacy Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

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
  { name: "Facebook", icon: "/facebook.svg", href: "#" },
  { name: "Instagram", icon: "/instagram.svg", href: "#" },
  { name: "X", icon: "/x.svg", href: "#" },
  { name: "LinkedIn", icon: "/linkedin.svg", href: "#" },
  { name: "YouTube", icon: "/youtube.svg", href: "#" },
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
                src="/Logo.png"
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
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="h-[16px] w-[16px] object-contain"
                  />
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
