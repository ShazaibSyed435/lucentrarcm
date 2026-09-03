// import React from "react";
// import SectionHeading from "@components/common/SectionHeading";
// import Container from "@components/common/Container";

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-[#F2F8F8]">
//       <Container className="py-16 md:py-8">
//         <SectionHeading
//           maxWidth="max-w-[620px]"
//           badge="Why Choose Us"
//           description="A simple, transparent process designed to get your practice billing faster, cleaner, and more profitably."
//         >
//           What Sets <span className="text-[#044F4B]">Lucentra RCM </span>Apart
//         </SectionHeading>



//       </Container>
//     </section>
//   );
// }




import React from "react";
import {
  BadgeCheck,
  TrendingUp,
  Headphones,
  BriefcaseMedical,
} from "lucide-react";

import SectionHeading from "@components/common/SectionHeading";
import Container from "@components/common/Container";

const whyChooseUsCards = [
  {
    icon: BadgeCheck,
    title: "HIPAA-Compliant Processes",
    description:
      "Every workflow is built around strict compliance standards to protect patient data and your practice.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-First Approach",
    description:
      "We focus relentlessly on maximizing clean claims and accelerating reimbursements.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    description:
      "A real team of billing experts assigned to your practice — not a ticket queue.",
  },
  {
    icon: BriefcaseMedical,
    title: "Specialty-Specific Expertise",
    description:
      "Deep knowledge across 30+ specialties ensures accurate coding and fewer denials.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F4F9F8]">
      <Container className="py-16 md:py-20 lg:py-24">
        {/* ================= HEADING ================= */}
        <SectionHeading
          maxWidth="max-w-[620px]"
          badge="Why Choose Us"
          description="We combine expertise, technology, and dedicated support to help your practice improve revenue and simplify billing."
        >
          Why <span className="text-[#044F4B]">Choose Us</span>
        </SectionHeading>

        {/* ================= WHY CHOOSE US CARDS ================= */}
        <div className="mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyChooseUsCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="relative flex min-h-[258px] flex-col overflow-hidden rounded-[16px] bg-white px-8 py-8 shadow-[0_8px_25px_rgba(1,33,32,0.05)]  "
              >
                {/* Top Gradient */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#075F5B] to-[#EA7F4A]" />

                {/* Icon */}
                <div className="flex h-[59px] w-[59px] shrink-0 items-center justify-center rounded-[12px] border border-[#CEDFDB] bg-[#F0F6F5]">
                  <Icon
                    className="h-[25px] w-[25px] text-[#045F5B]"
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-[19px] font-bold leading-[1.3] text-[#172827]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.85] text-[#7B8281]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}