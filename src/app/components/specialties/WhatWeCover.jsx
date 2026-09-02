import React from "react";
import SectionHeading from "@components/common/SectionHeading";
import Container from "@components/common/Container";
import {
  Bone,
  HeartPulse,
  Baby,
  UsersRound,
  Syringe,
  Smile,
  Stethoscope,
  Accessibility,
  ScanFace,
  Footprints,
  Activity,
  PersonStanding,
  Scissors,
  ClipboardPlus,
  FlaskConical,
} from "lucide-react";
import SpecialtyFlipCard from "@/app/components/common/cards/SpecialtyFlipCard";

export default function WhatWeCover() {
  const services = [
    {
      number: "01",
      icon: Bone,
      title: "Orthopedics",
      description:
        "Streamline orthopedic billing with accurate coding, claim management, and follow-ups that help maximize reimbursements and reduce payment delays.",
    },
    {
      number: "02",
      icon: HeartPulse,
      title: "Cardiology",
      description:
        "Improve cardiology revenue with precise coding, efficient claim submission, and proactive denial management tailored to complex cardiac procedures.",
    },
    {
      number: "03",
      icon: Baby,
      title: "Pediatrician",
      description:
        "Simplify pediatric billing with accurate claims, eligibility verification, and timely follow-ups designed to keep your practice financially healthy.",
    },
    {
      number: "04",
      icon: UsersRound,
      title: "Family Medicine",
      description:
        "Keep your family medicine practice running smoothly with complete billing support, accurate coding, claim follow-ups, and efficient payment processing.",
    },
    {
      number: "05",
      icon: Syringe,
      title: "Anesthesiology",
      description:
        "Maximize anesthesiology reimbursements with accurate procedure coding, compliant claim submission, and dedicated follow-up on unpaid claims.",
    },
    {
      number: "06",
      icon: Smile,
      title: "Oral & Maxillofacial Surgery",
      description:
        "Optimize oral and maxillofacial surgery billing with specialized coding, claim management, and denial resolution for complex surgical services.",
    },
    {
      number: "07",
      icon: Stethoscope,
      title: "General Practice",
      description:
        "Simplify general practice billing with accurate coding, insurance verification, claims processing, and consistent follow-ups to improve collections.",
    },
    {
      number: "08",
      icon: Accessibility,
      title: "Chiropractic",
      description:
        "Strengthen chiropractic revenue with accurate treatment coding, eligibility checks, claim submission, and effective denial and A/R management.",
    },
    {
      number: "09",
      icon: ScanFace,
      title: "Dermatology",
      description:
        "Enhance dermatology collections with precise coding and billing for consultations, procedures, biopsies, and other specialized dermatological services.",
    },
    {
      number: "10",
      icon: Footprints,
      title: "Podiatry",
      description:
        "Improve podiatry reimbursements through accurate coding, efficient claims processing, insurance verification, and proactive payment follow-ups.",
    },
    {
      number: "11",
      icon: Activity,
      title: "Endocrinology",
      description:
        "Support your endocrinology practice with accurate billing, coding, claims management, and denial resolution for specialized diagnostic and treatment services.",
    },
    {
      number: "12",
      icon: PersonStanding,
      title: "Osteopathic",
      description:
        "Optimize osteopathic practice revenue with reliable coding, claim submission, eligibility verification, and A/R follow-up tailored to your services.",
    },
    {
      number: "13",
      icon: Scissors,
      title: "Surgery",
      description:
        "Maximize surgical reimbursements with specialized coding, clean claim submission, insurance verification, and dedicated follow-up on outstanding payments.",
    },
    {
      number: "14",
      icon: ClipboardPlus,
      title: "Internal Medicine",
      description:
        "Streamline internal medicine billing with accurate coding, efficient claims processing, denial management, and proactive A/R strategies.",
    },
    {
      number: "15",
      icon: FlaskConical,
      title: "Laboratory",
      description:
        "Improve laboratory billing efficiency with accurate test coding, claim submission, insurance verification, and follow-up to reduce rejected and unpaid claims.",
    },
  ];

  return (
    <section className="bg-[#FFFFFF]">
      <Container className="py-16 md:py-8">
        <SectionHeading
          maxWidth="max-w-[620px]"
          badge="What We Cover"
          description="Hover over any specialty to learn more about how we tailor our billing services for your practice."
        >
          Our Popular
          <span className="text-[#044F4B]"> Specialties </span>
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:mt-16 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:gap-5 2xl:gap-6">
          {services.map((service) => (
            <SpecialtyFlipCard
              key={service.number}
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
