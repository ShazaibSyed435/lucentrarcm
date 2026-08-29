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
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:mb-12 lg:gap-6 xl:mb-8 xl:flex-row xl:items-end xl:justify-between xl:gap-12">
          <div className="w-full xl:max-w-[700px]">
            {/* Badge */}
            <div className="mb-2 inline-flex items-center gap-1.5">
              <BriefcaseBusiness className="h-[13px] w-[13px] text-[#ff6845]" />
              <span className=" px-1 text-[11px] font-semibold leading-[16px] text-[#075f5b] sm:text-[12px]">
                Our Specialized Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[760px] text-[27px] font-medium leading-[1.18] tracking-[-0.5px] text-[#171717] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px] 2xl:text-[44px]">
              Comprehensive Medical Billing
              <br className="hidden sm:block" />
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-5 2xl:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-[14px] border border-[#dfe8e7] bg-white p-5 shadow-[0_8px_24px_rgba(0,60,55,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,60,55,0.09)] sm:min-h-[260px] sm:p-6 lg:min-h-[256px] lg:p-6"
              >
                {/* Top Border */}
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#006b63] via-[#00877d] to-[#ff6845]" />

                {/* Icon + Number */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-[47px] w-[47px] items-center justify-center rounded-[10px] border border-[#d1e0df] bg-[#f0f6f5] transition-all duration-300 group-hover:border-[#9fc4c0] group-hover:bg-[#e5f1ef]">
                    <Icon
                      className="h-[26px] w-[26px] text-[#066963]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="text-[29px] font-bold leading-none tracking-[-1px] text-[#edf2f1] sm:text-[30px]">
                    {service.number}
                  </span>
                </div>

                {/* Orange Line */}
                <div className="mb-2 h-[2px] w-[24px] bg-[#ff6845]" />

                {/* Content */}
                <div>
                  <h3 className="text-[15px] font-bold leading-[1.35] text-[#172625] sm:text-[16px]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] font-normal leading-[1.7] text-[#7a7f7f] sm:text-[13px]">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full bg-[#05645f] px-[18px] py-[9px] text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#044f4b]"
                  >
                    Learn More <span className="text-[12px]">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="mt-8 flex justify-center sm:mt-9 md:mt-10 lg:mt-8 xl:mt-9">
          <button
            type="button"
            className="inline-flex min-w-[125px] items-center justify-center rounded-full bg-[#05645f] px-7 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#044f4b] hover:shadow-[0_8px_20px_rgba(5,100,95,0.2)]"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
