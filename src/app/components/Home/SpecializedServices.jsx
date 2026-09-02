import React from "react";
import {
  BriefcaseBusiness,
  FileCheck2,
  MonitorCog,
  ReceiptText,
  ShieldCheck,
  WalletCards,
  BadgeCheck,
} from "lucide-react";
import { Icon } from "@iconify/react";
import ServiceCard from "@/app/components/common/cards/ServiceCard";

const services = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Credentialing & Contracting Services",
    description:
      "Streamline your provider enrollment and payer agreements with our expert credentialing services, ensuring faster approvals and seamless payer onboarding.",
  },
  {
    number: "02",
    icon: MonitorCog,
    title: "Electronic Claims & Payment Setup",
    description:
      "Enable faster reimbursements and fewer rejections with our electronic claims setup. We integrate ERA/EFT systems and clearinghouses for smooth payment processing.",
  },
  {
    number: "03",
    icon: ReceiptText,
    title: "Accounts Receivable (A/R) Management",
    description:
      "Reduce outstanding balances and speed up collections with our proactive A/R strategies, claim follow-ups, and denial resolution workflows.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Verification of Eligibility",
    description:
      "Avoid billing surprises and claim denials by verifying patient insurance coverage in real-time before appointments and procedures.",
  },
  {
    number: "05",
    icon: WalletCards,
    title: "Management of Revenue Cycles",
    description:
      "From patient registration to final payment, our full-cycle RCM solutions boost profitability and simplify your practice's financial workflow.",
  },
  {
    number: "06",
    icon: BadgeCheck,
    title: "Denial Management & Resolution",
    description:
      "Recover lost revenue with our structured denial resolution system that identifies root causes and ensures timely appeals and corrections.",
  },
];

export default function SpecializedServices() {
  return (
    <section id="services" className="w-full bg-white ">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-20   md:px-8 md:py-8  xl:py-20 ">
        {/* Heading */}
        <div className="mb-2 flex flex-col gap-5   lg:gap-6  xl:flex-row xl:items-end xl:justify-between xl:gap-12">
          <div className="w-full xl:max-w-[700px]">
            {/* Badge */}
            <div className="mb-2 inline-flex items-center gap-1.5">
              <Icon
                icon="fa-solid:notes-medical"
                className={`h-[13px] w-[13px] text-[#ff6845]`}
              />

              <span className=" px-1 text-[12px] font-bold leading-[16px] text-[#075f5b]">
                Our Specialized Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="sm:max-w-[560px] text-[18px] font-medium leading-[1.38] sm:leading-[1.48]  text-[#171717] max-w-[570px] sm:text-[20px] md:text-[24px] lg:text-[30px] ">
              Comprehensive Medical Billing <br className="hidden lg:block" />
              Services to Support Your Practice
            </h2>
          </div>

          {/* Description */}
          <p className="w-full max-w-[430px] text-[14px] font-normal leading-[1.6] text-[#606060] sm:text-[15px] md:text-[16px] xl:pb-1">
            We have helped hundreds of practices cut costs and boost collections
            with efficient billing solutions
          </p>
        </div>

        {/* Cards */}
        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-5 2xl:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-8 flex justify-center sm:mt-9 md:mt-10 lg:mt-8 xl:mt-9">
          <button
            type="button"
            className="inline-flex min-w-[125px] items-center justify-center rounded-full bg-[#05645f] px-12 h-[56px]  text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#044f4b] hover:shadow-[0_8px_20px_rgba(5,100,95,0.2)]"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
