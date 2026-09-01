"use client";

import { useState } from "react";
import Container from "./common/Container";
import {
  BriefcaseBusiness,
  UsersRound,
  ChartNoAxesCombined,
  CircleDollarSign,
  Check,
} from "lucide-react";
import Image from "next/image";

export default function QualityServices() {
  const [activeTab, setActiveTab] = useState("providers");

  const services = [
    {
      id: "providers",
      label: "Providers",
      icon: UsersRound,
      image: "/banner3.jpg",
      badge: "WHO WE ARE",
      heading: (
        <>
          Maximizing Revenue for Healthcare
          <br className="hidden sm:block" /> Providers
        </>
      ),
      description:
        "We partner with healthcare providers to deliver precise, compliant, and end-to-end medical billing solutions—so you can focus on patient care while we optimize your financial outcomes.",
      list: [
        "500+ providers served nationwide",
        "End-to-end RCM expertise",
        "Personalized billing solutions for every specialty",
      ],
      button: "Explore Services",
    },

    {
      id: "claims",
      label: "Claims Management",
      icon: ChartNoAxesCombined,
      image: "/banner4.jpg",
      badge: "CLAIMS MANAGEMENT",
      heading: (
        <>
          Streamline Your Claims
          <br className="hidden sm:block" /> Management
        </>
      ),
      description:
        "Our claims management solutions help reduce errors, minimize denials, and ensure your claims move efficiently through the revenue cycle.",
      list: [
        "Accurate claim submission",
        "Denial management and follow-up",
        "Faster reimbursement cycles",
      ],
      button: "Explore Claims",
    },

    {
      id: "revenue",
      label: "Revenue Analytics",
      icon: CircleDollarSign,
      image: "/banner5.jpg",
      badge: "REVENUE ANALYTICS",
      heading: (
        <>
          Turn Your Revenue Data
          <br className="hidden sm:block" /> Into Better Decisions
        </>
      ),
      description:
        "Get clear insights into your practice's financial performance with data-driven revenue analytics designed to identify opportunities for growth.",
      list: [
        "Real-time revenue insights",
        "Performance tracking",
        "Identify revenue opportunities",
      ],
      button: "View Analytics",
    },
  ];

  const activeService = services.find((service) => service.id === activeTab);

  return (
    <section className="w-full overflow-hidden bg-[#012524] py-16 sm:py-20 lg:py-24">
      <Container className="px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2">
            <BriefcaseBusiness className="h-[13px] w-[13px] text-[#ff6845]" />

            <span className="text-[13px] font-semibold uppercase tracking-[1px] text-[#ff6845]">
              Our Quality Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[26px] font-semibold leading-[1.15]  text-white sm:text-[32px] md:text-[40px] lg:text-[48px]">
            Committed to <span className="text-[#ff6845]">Excellence</span> in
            <br className="hidden sm:block" /> Revenue Cycle Management
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[650px] text-[14px] leading-[1.8] text-white/60 sm:text-[16px]">
            We treat your practice like a trusted partner—delivering accurate,
            timely, and compliant billing solutions tailored to your specialty,
            workflow, and financial goals.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="mt-10 md:mt-14 overflow-x-auto pb-2 scrollbar-hide">
          <div className="mx-auto flex w-max min-w-full justify-start gap-2 sm:justify-center">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;

              return (
                <div
                  className={`  border-b-3 border-b-[-3px] border-[#ff6845] ${
                    isActive ? "border-[#ff6845]" : "border-transparent"
                  }`}
                >
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveTab(service.id)}
                    className={`flex h-[40px] shrink-0 font-semibold items-center gap-2 rounded-full border px-4 md:px-6 text-[13px] md:text-[15px] font-medium capitalize transition-all duration-200 ${
                      isActive
                        ? "border-[#ff6845] bg-[#ff6845] text-white"
                        : "border-white/20 bg-transparent text-white/60 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    <Icon className="h-[13px] w-[13px]" />
                    {service.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SERVICE CARD ================= */}
        {activeService && (
          <div className="mx-auto mt-10 max-w-[1150px] overflow-hidden rounded-[14px] bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative min-h-[280px] w-full lg:w-1/2 lg:min-h-[395px]">
                <Image
                  src={activeService.image}
                  alt={activeService.heading}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col justify-center p-6 md:p-10 lg:w-1/2">
                {/* Badge */}
                <div className="mb-3 flex items-center gap-2">
                  <BriefcaseBusiness className="h-[12px] w-[12px] text-[#ff6845]" />

                  <span className="text-[12px] font-bold uppercase tracking-[1px] text-[#ff6845]">
                    {activeService.badge}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-[20px] font-bold leading-[1.3]  text-[#171717] md:text-[26px] lg:text-[30px]">
                  {activeService.heading}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[580px] text-[14px] leading-[1.75] text-[#7a7a7a] sm:text-[16px]">
                  {activeService.description}
                </p>

                {/* List */}
                <div className="mt-6 flex flex-col gap-3">
                  {activeService.list.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#075f5b]">
                        <Check className="h-[11px] w-[11px] text-white" />
                      </span>

                      <span className="text-[13px] font-medium text-[#202020] md:text-[15px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-8">
                  <button
                    type="button"
                    className="h-[44px] rounded-full bg-[#075f5b] px-8 text-[14px] font-semibold text-white transition hover:bg-[#064d49]"
                  >
                    {activeService.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
