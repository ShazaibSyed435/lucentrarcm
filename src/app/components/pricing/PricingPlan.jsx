import React from "react";
import SectionHeading from "@components/common/SectionHeading";
import Container from "@components/common/Container";

import PricingCard from "@components/common/cards/PricingCard";

export default function PricingPlan() {
  const pricingPlans = [
    {
      title: "Basic Package",
      description:
        "Small practices and individual practitioners looking for essential billing services.",
      features: [
        "Top 6 commercial insurances — Medicare & Medicaid charged separately ($200 each)",
        "Monthly follow-ups & updates",
        "Dedicated account manager",
      ],
      price: "$650",
    },
    {
      title: "Standard Package",
      description:
        "Medium-sized clinics and specialty practices requiring detailed billing and coding.",
      features: [
        "15 commercial insurances including Medicare & Medicaid",
        "Bi-weekly follow-ups & updates",
        "Dedicated account manager",
        "24/7 support",
      ],
      price: "$2,000",
      popular: true,
    },
    {
      title: "Premium Package",
      description:
        "Large practices and healthcare providers needing extensive support and management.",
      features: [
        "All Standard plan features + 20 commercial insurances including Medicare & Medicaid",
        "Customized follow-ups",
        "Dedicated account manager",
        "Free ERA & EFT setup",
        "24/7 support",
      ],
      price: "$2,600",
    },
  ];

  return (
    <section className="bg-[#FFFFFF]">
      <Container className="py-16 md:py-8">
        <SectionHeading
          maxWidth="max-w-[620px]"
          badge="Our Pricing Plan"
          description="Lucentra RCM Solutions offers advanced technology and personalized service specializing in seamless medical billing, credentialing, and healthcare IT solutions."
        >
          Tailored Solutions for
          <span className="text-[#044F4B]"> Your Practice </span>
        </SectionHeading>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              price={plan.price}
              popular={plan.popular}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
