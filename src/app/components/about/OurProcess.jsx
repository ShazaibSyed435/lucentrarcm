// import React from "react";
// import SectionHeading from "@components/common/SectionHeading";
// import Container from "@components/common/Container";

// export default function OurProcess() {
//   return (
//     <section className="bg-[#FFFFFF]">
//       <Container className="py-16 md:py-8">
//         <SectionHeading
//           maxWidth="max-w-[620px]"
//           badge="Our Process"
//           description="A simple, transparent process designed to get your practice billing faster, cleaner, and more profitably."
//         >
//           How We <span className="text-[#044F4B]"> Work For You </span>
//         </SectionHeading>

//       </Container>
//     </section>
//   );
// }

import React from "react";
import SectionHeading from "@components/common/SectionHeading";
import Container from "@components/common/Container";

const processSteps = [
  {
    step: "01",
    title: "Practice Onboarding",
    description:
      "We start with a free consultation to understand your specialty, payer mix, and current billing challenges.",
    background: "bg-white",
  },
  {
    step: "02",
    title: "Credentialing & Setup",
    description:
      "Our team handles provider enrollment, payer contracting, and EHR integration so you're ready to bill from day one.",
    background: "bg-[#F2F8F7]",
  },
  {
    step: "03",
    title: "Claims Submission",
    description:
      "We submit clean, accurate claims daily — reducing denials before they happen through our pre-submission scrubbing process.",
    background: "bg-white",
  },
  {
    step: "04",
    title: "Revenue & Reporting",
    description:
      "Real-time dashboards and monthly reports keep you informed on collections, denial rates, and cash flow trends.",
    background: "bg-[#F2F8F7]",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-[#FFFFFF]">
      <Container className="py-16 md:py-8">
        <SectionHeading
          maxWidth="max-w-[620px]"
          badge="Our Process"
          description="A simple, transparent process designed to get your practice billing faster, cleaner, and more profitably."
        >
          How We <span className="text-[#044F4B]">Work For You</span>
        </SectionHeading>

        {/* ================= PROCESS CARDS ================= */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className={`relative min-h-[300px] overflow-hidden rounded-[17px] border border-[#DCE8E6] ${item.background} px-7 py-7
  transition-[transform,box-shadow,border-color] duration-300 ease-in-out
  hover:-translate-y-[10px]
  hover:border-[#075F5B]
  hover:shadow-2xl`}
            >
              {/* Step Number */}
              <span className="absolute right-4 -top-4 text-[88px] font-bold leading-none tracking-[-5px075F5B] text-[#EAF1F0]">
                {item.step}
              </span>

              {/* Content */}
              <div className="relative z-10">
                {/* Step Badge */}
                <span className="inline-flex rounded-full bg-[#045F5B] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.3px] text-white">
                  STEP {item.step}
                </span>

                {/* Title */}
                <h3 className="mt-6 text-[20px] font-bold leading-[1.25] text-[#172827]">
                  {item.title}
                </h3>

                {/* Orange Line */}
                <div className="mt-4 h-[2px] w-[36px] bg-[#EA7F4A]" />

                {/* Description */}
                <p className="mt-5 text-[14px] leading-[1.95] text-[#7B8281]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CTA BUTTONS ================= */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="flex h-[55px] w-full items-center justify-center rounded-full bg-[#045F5B] px-8 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#034D4A] sm:w-auto sm:min-w-[228px]"
          >
            Get Started Today
          </button>

          <button
            type="button"
            className="flex h-[55px] w-full items-center justify-center rounded-full bg-[#045F5B] px-8 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#034D4A] sm:w-auto sm:min-w-[250px]"
          >
            Explore Our Services
          </button>
        </div>
      </Container>
    </section>
  );
}
