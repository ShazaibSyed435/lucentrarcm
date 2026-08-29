import React from "react";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";

function HeroSection() {
  return (
    <section className="w-full px-2 sm:px-4 lg:px-6">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col overflow-hidden rounded-2xl md:flex-row lg:rounded-3xl">
        {/* BOX 2 - IMAGE */}
        <div className="relative order-1 h-[320px] w-full shrink-0 overflow-hidden bg-[#d9f4f3] sm:h-[380px] md:order-2 md:h-auto md:w-1/2 lg:rounded-r-3xl">
          {/* Top-left background circle */}
          <div className="absolute left-[5%] top-[8%] h-28 w-28 rounded-full bg-[#e8e7df] sm:h-36 sm:w-36 md:h-40 md:w-40 lg:left-[7%] lg:top-[10%]" />

          {/* Bottom-right background circle */}
          <div className="absolute -bottom-24 -right-24 h-[350px] w-[350px] rounded-full bg-[#b9e4e2] sm:h-[400px] sm:w-[400px] md:h-[420px] md:w-[420px] lg:h-[450px] lg:w-[450px]" />

          {/* Doctor */}
          <div className="absolute bottom-0 left-1/2 z-[1] h-[85%] max-w-[100%]  -translate-x-1/2">
            <Image
              src="/person.png"
              alt="Healthcare provider"
              width={600}
              height={700}
              priority
              className="h-full w-auto max-w-none object-fit"
            />
          </div>

          {/* Providers Card */}
          <div className="absolute left-4 top-12 z-10 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-lg sm:left-6 sm:top-16 md:left-5 md:top-16 lg:left-7 lg:top-24 lg:gap-3 lg:rounded-2xl lg:px-4 lg:py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#075754] text-sm text-white lg:h-9 lg:w-9">
              ✚
            </div>

            <div>
              <p className="text-lg font-bold leading-5 text-gray-900 lg:text-xl">
                500+
              </p>
              <p className="mt-1 text-[10px] text-gray-500 lg:text-xs">
                Providers Nationwide
              </p>
            </div>
          </div>

          {/* Rating Card */}
          <div className="absolute bottom-5 right-4 z-10 rounded-xl bg-white px-3 py-2.5 shadow-lg sm:bottom-7 sm:right-6 md:bottom-7 md:right-5 lg:bottom-12 lg:right-7 lg:rounded-2xl lg:px-4 lg:py-3">
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
        <div className="order-2 w-full bg-[#075754] md:order-1 md:w-1/2 lg:rounded-l-3xl">
          <div className="relative h-full min-h-[600px] overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-12 md:min-h-[600px] md:px-8 md:py-10 lg:min-h-[680px] lg:px-12 lg:py-14 xl:px-16">
            {/* Background circles */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border-[60px] border-[#155f5b] opacity-60 sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96" />

            <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full border-[60px] border-[#155f5b] opacity-60 sm:-bottom-36 sm:-left-32 sm:h-96 sm:w-96 md:h-80 md:w-80 lg:h-96 lg:w-96" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
              <SectionHeading
                badge="Trusted Healthcare IT Solutions"
                title={
                  <>
                    Tailored Medical{" "}
                    <span className="text-[#ff7845]">Billing</span> for U.S.{" "}
                    <br className="hidden xl:block" />
                    Healthcare Providers
                  </>
                }
                description="Lucentra RCM — Your Revenue, Our Priority. We reduce denials, accelerate reimbursements, and maximize your practice's cash flow."
              />

              {/* Features */}
              <div className="mt-6 space-y-3 sm:mt-7">
                <div className="flex items-start gap-3 text-sm text-[#d1e1e0] sm:text-base">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff7845] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <span>End-to-end Revenue Cycle Management</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#d1e1e0] sm:text-base">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff7845] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <span>Credentialing &amp; Payer Contracting</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#d1e1e0] sm:text-base">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff7845] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <span>Real-time Eligibility Verification</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                <button className="flex w-full items-center justify-center gap-3 rounded-full bg-[#ff7845] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f56d3a] sm:w-auto sm:px-7 sm:py-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#ff7845]">
                    →
                  </span>
                  Explore Services
                </button>

                <button className="w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#075754] transition hover:bg-gray-100 sm:w-auto sm:px-7 sm:py-4">
                  Free Consultation
                </button>
              </div>

              {/* Divider */}
              <div className="mt-7 border-t border-white/20 sm:mt-6" />

              {/* Statistics */}
              <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                <div>
                  <p className="text-2xl font-bold sm:text-3xl">97%</p>
                  <p className="mt-1 text-[10px] text-[#82aaa8] sm:text-xs">
                    Happy Clients
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold sm:text-3xl">4,500+</p>
                  <p className="mt-1 text-[10px] text-[#82aaa8] sm:text-xs">
                    Claims Processed
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold sm:text-3xl">25%</p>
                  <p className="mt-1 text-[10px] text-[#82aaa8] sm:text-xs">
                    Revenue Increase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
