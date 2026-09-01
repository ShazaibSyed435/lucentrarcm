import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

function HeroSection() {
  const features = [
    "End-to-end Revenue Cycle Management",
    "Credentialing & Payer Contracting",
    "Real-time Eligibility Verification",
  ];

  const stats = [
    {
      value: "97%",
      label: "Happy Clients",
    },
    {
      value: "4,500+",
      label: "Claims Processed",
    },
    {
      value: "25%",
      label: "Revenue Increase",
    },
  ];

  return (
    <section className="w-full ">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col overflow-hidden md:rounded-2xl md:h-[600px] md:flex-row lg:h-[680px] xl:h-[750px]">
        {/* BOX 2 - IMAGE */}
        <div className="relative order-1 h-[280px] w-full shrink-0 overflow-hidden bg-[#d9f4f3] sm:h-[340px] md:order-2 md:h-full md:w-1/2 ">
          {/* Top-left background circle */}
          <div className="absolute left-[5%] top-[8%] h-28 w-28 rounded-full bg-[#e8e7df] sm:h-36 sm:w-36 md:h-40 md:w-40 lg:left-[7%] lg:top-[10%]" />

          {/* Bottom-right background circle */}
          <div className="absolute -bottom-24 -right-24 h-[350px] w-[350px] rounded-full bg-[#b9e4e2] sm:h-[400px] sm:w-[400px] md:h-[420px] md:w-[420px] lg:h-[450px] lg:w-[450px]" />

          {/* Doctor */}
          <div className="absolute bottom-0 left-1/2 z-[1] h-[95%] md:h-[82%] lg:h-[85%] xl:h-[92%]  -translate-x-1/2">
            <Image
              src="/person.png"
              alt="Healthcare provider"
              width={600}
              height={700}
              priority
              className="h-full w-auto max-w-none object-contain"
            />
          </div>

          {/* Providers Card */}
          <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-xl bg-white px-3 py-2  shadow-lg    md:left-7 md:top-28 lg:left-7  md:px-4 md:py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#075754] text-sm text-white lg:h-9 lg:w-9">
              ✚
            </div>

            <div>
              <p className="text-[16px] md:text-[20px] font-bold leading-5 text-gray-900 ">
                500+
              </p>
              <p className="mt-[2px] text-[10px] md:text-[11px] text-gray-500">
                Providers Nationwide
              </p>
            </div>
          </div>

          {/* Rating Card */}
          <div className="absolute bottom-3 right-3 z-10 rounded-xl bg-white px-3 py-2.5 shadow-lg md:bottom-16 md:right-7 lg:bottom-13  lg:rounded-2xl lg:px-4 lg:py-3">
            <div className="text-xs tracking-wide text-[#f47a45] lg:text-sm">
              ★★★★★
            </div>
            <p className="text-xs font-bold text-gray-900 lg:text-sm">
              4.7 / 5 Rating
            </p>
            <p className="mt-1 text-[10px] text-gray-500 lg:text-xs">
              200+ Verified Reviews
            </p>
          </div>
        </div>

        {/* BOX 1 - CONTENT */}

        <div className="order-2 w-full bg-[linear-gradient(to_bottom_right,#012120,#02504D,#033E3C)] md:order-1 md:h-full md:w-1/2 ">
          <div className="relative h-full overflow-hidden text-white  ">
            {/* Background circles */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border-[60px] border-[#155f5b] opacity-60 sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96" />

            <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full border-[60px] border-[#155f5b] opacity-60 sm:-bottom-36 sm:-left-32 sm:h-96 sm:w-96 md:h-80 md:w-80 lg:h-96 lg:w-96" />

            {/* Content */}
            <div className="relative max-w-[640px] md:ml-auto z-10 flex h-full gap-4 lg:gap-5 xl:gap-6 justify-center flex-col px-6 py-10 md:px-8 md:py-8 lg:px-10 lg:py-12">
              {/* Badge */}
              <div className=" inline-flex w-fit items-center gap-2 rounded-full border border-[#ff7845] px-4 py-2 text-[11px] md:text-[13px] font-medium text-[#ff7845]  sm:px-5 sm:text-sm">
                <span>▣</span>
                <span>Trusted Healthcare IT Solutions</span>
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-[26px] font-bold leading-[1.18]  sm:text-[30px] md:text-[28px] lg:text-[36px] xl:text-[52px]">
                Tailored Medical <span className="text-[#ff7845]">Billing</span>{" "}
                for U.S. <br className="hidden xl:block" />
                Healthcare Providers
              </h1>

              {/* Description */}
              <p className=" max-w-2xl text-[13px]    text-[#b4d0cf]  md:text-[13px]  lg:text-[15px] xl:text-[17px] ">
                Lucentra RCM — Your Revenue, Our Priority. We reduce denials,
                accelerate reimbursements, and maximize your practice&apos;s
                cash flow.
              </p>

              {/* Features */}
              <div className="  ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-[13px] text-[#d1e1e0] md:text-[14px]  lg:text-[15px] "
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff7845] text-[10px] font-bold text-white">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 ">
                <button className="flex h-10 shrink-0 items-center justify-center gap-3 rounded-full bg-[#ff7845] px-5 text-[14px] font-semibold whitespace-nowrap text-white transition hover:bg-[#f56d3a]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#ff7845]">
                    <ChevronRight size={15} strokeWidth={2.5} />
                  </span>
                  Explore Services
                </button>

                <button className="h-10 shrink-0 rounded-full bg-white px-5 text-[14px] font-semibold whitespace-nowrap text-[#075754] transition hover:bg-gray-100">
                  Free Consultation
                </button>
              </div>

              {/* Divider */}
              <div className=" border-t border-white/20" />

              {/* Statistics */}
              <div className=" flex flex-wrap gap-x-8 gap-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="shrink-0 whitespace-nowrap">
                    <p className="text-[20px] font-bold md:text-[22px] xl:text-[32px]">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[11px] text-[#82aaa8] md:text-[12px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
