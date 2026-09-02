import React from "react";
import SectionHeading from "@components/common/SectionHeading";
import Container from "@components/common/Container";
import ServiceCard from "@/app/components/common/cards/ServiceCard";
import {
  BriefcaseBusiness,
  FileCheck2,
  MonitorCog,
  ReceiptText,
  ShieldCheck,
  WalletCards,
  BadgeCheck,
} from "lucide-react";

export default function WhatWeOffer() {
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
    {
      number: "07",
      icon: BriefcaseBusiness,
      title: "Medical Billing and Coding",
      description:
        "Ensure accurate CPT/ICD coding and efficient claim submission with our certified billing experts to maximize reimbursements and reduce errors.",
    },
    {
      number: "08",
      icon: BadgeCheck,
      title: "Professional Virtual Assistant (VA)",
      description:
        "Get reliable virtual assistants to handle administrative tasks like appointment scheduling, data entry, and patient coordination with speed and precision.",
    },
  ];

  return (
    <section className="bg-[#F2F8F8]">
      <Container className="py-16 md:py-20 lg:py-28">
        <SectionHeading
          maxWidth="max-w-[620px]"
          badge="What We Offer"
          description="From credentialing to denial management every service is designed to protect your revenue and reduce administrative burden."
        >
          Complete <span className="text-[#044F4B]"> Billing Solutions </span>
          for Every Practice
        </SectionHeading>

        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-5 2xl:gap-6">
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
      </Container>
    </section>
  );
}
