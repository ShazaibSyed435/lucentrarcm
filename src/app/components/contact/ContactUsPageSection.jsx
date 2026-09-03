import React from "react";
import { BriefcaseBusiness, Phone, Mail, Clock3, MapPin } from "lucide-react";

import SectionHeading from "@components/common/SectionHeading";
import Container from "@components/common/Container";
import ContactForm from "@components/common/ContactForm";

function ContactUsPageSection() {
  const benefitCards = [
    {
      badge: "< 24h",
      title: "Response Time",
      description: "We reply within one business day",
    },
    {
      badge: "Free",
      title: "Initial Consultation",
      description: "No commitment, no cost",
    },
    {
      badge: "HIPAA",
      title: "Compliant & Secure",
      description: "Your data is always protected",
    },
  ];
  const subText =
    "Tell us about your practice and billing challenges — we'll get back to you with a tailored plan.";

  return (
    <section className="w-full bg-[#f4f9f8]">
      <Container className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* ================= CONTACT SECTION ================= */}
          <div className="flex w-full flex-col gap-6 overflow-hidden lg:flex-row lg:gap-7 lg:rounded-2xl xl:gap-8">
            {/* ================= LEFT - CONTACT INFORMATION ================= */}
            <div className="order-1 w-full overflow-hidden rounded-[16px] bg-[linear-gradient(to_bottom_right,#012120,#02504D,#033E3C)] lg:w-1/3 lg:rounded-[20px]">
              <div className="relative h-full overflow-hidden text-white">
                {/* Background Circle - Top Right */}
                <div className="pointer-events-none absolute -right-[95px] -top-[95px] h-[280px] w-[280px] rounded-full border-[38px] border-[#155f5b] opacity-50 sm:-right-[110px] sm:-top-[110px] sm:h-[320px] sm:w-[320px] sm:border-[45px] lg:-right-[100px] lg:-top-[100px] lg:h-[330px] lg:w-[330px]" />

                {/* Background Circle - Bottom Left */}
                <div className="pointer-events-none absolute -bottom-[100px] -left-[100px] h-[260px] w-[260px] rounded-full border-[40px] border-[#155f5b] opacity-50 sm:-bottom-[115px] sm:-left-[115px] sm:h-[300px] sm:w-[300px] sm:border-[45px] lg:-bottom-[105px] lg:-left-[105px] lg:h-[300px] lg:w-[300px]" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col px-7 py-9 sm:px-9 sm:py-10 md:px-10 md:py-12 lg:px-9 lg:py-10 xl:px-10 xl:py-11">
                  {/* Badge */}
                  <div className="mb-6 inline-flex items-center gap-2">
                    <BriefcaseBusiness
                      className="h-[14px] w-[14px] text-[#EA7F4A]"
                      strokeWidth={2}
                    />

                    <span className="text-[11px] font-bold uppercase tracking-[0.7px] text-[#EA7F4A]">
                      Contact Information
                    </span>
                  </div>

                  {/* Heading */}
                  <div>
                    <h2 className="max-w-[320px] text-[26px] font-bold leading-[1.2] tracking-[-0.4px] text-white sm:text-[28px] lg:text-[25px] xl:text-[27px]">
                      Let's Start a
                      <br />
                      <span className="text-[#EA7F4A]">Conversation</span>
                    </h2>

                    <p className="mt-3 text-[13px] leading-[1.8] text-white/60 sm:text-[14px]">
                      Fill out the form or reach us directly — we're ready to
                      answer your questions and discuss your billing needs.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="mt-9 flex flex-col gap-7 sm:mt-10 sm:gap-8 lg:mt-9 lg:gap-7 xl:mt-10 xl:gap-8">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] border border-white/20 bg-white/[0.08]">
                        <Phone
                          className="h-[17px] w-[17px] text-[#EA7F4A]"
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.8px] text-white/50">
                          Call Us
                        </p>

                        <p className="text-[13px] font-medium leading-[1.7] text-white">
                          (727) 591-0997
                          <br />
                          (888) 987-0332
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] border border-white/20 bg-white/[0.08]">
                        <Mail
                          className="h-[17px] w-[17px] text-[#EA7F4A]"
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.8px] text-white/50">
                          Email Us
                        </p>

                        <p className="text-[13px] font-medium text-white">
                          info@lucentrarcm.com
                        </p>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] border border-white/20 bg-white/[0.08]">
                        <Clock3
                          className="h-[17px] w-[17px] text-[#EA7F4A]"
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.8px] text-white/50">
                          Business Hours
                        </p>

                        <p className="text-[13px] font-medium leading-[1.7] text-white">
                          Mon – Fri: 9 AM – 6 PM EST
                          <br />
                          Weekends: Closed
                        </p>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] border border-white/20 bg-white/[0.08]">
                        <MapPin
                          className="h-[17px] w-[17px] text-[#EA7F4A]"
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.8px] text-white/50">
                          Our Office
                        </p>

                        <p className="text-[13px] font-medium text-white">
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT - CONTACT FORM ================= */}
            <div className="order-2 w-full lg:w-2/3">
              <ContactForm subText={subText} />
            </div>
          </div>

          {/* ================= BENEFIT CARDS ================= */}
          <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-7 lg:gap-7 xl:gap-8">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="relative flex min-h-[94px] items-center gap-4 overflow-hidden rounded-[14px] bg-white px-5 py-4 shadow-[0_8px_25px_rgba(1,33,32,0.05)]"
              >
                {/* Top Gradient */}
                <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[#075f5b] to-[#EA7F4A]" />

                {/* Badge */}
                <div className="flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-[11px] border border-[#d5e2e0] bg-[#f0f6f5]">
                  <span
                    className={`font-bold text-[#02504D] ${
                      card.badge === "HIPAA" ? "text-[11px]" : "text-[12px]"
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[14px] font-bold text-[#172827]">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-[#7b8281]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactUsPageSection;
