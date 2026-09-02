import Container from "../common/Container";
import { BriefcaseBusiness, Phone, Mail, Clock3 } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@components/common/SectionHeading";
import ContactForm from "@/app/components/common/ContactForm";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "(888) 987-0332",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@lucentrarcm.com",
    },
    {
      icon: Clock3,
      label: "Response Time",
      value: "Within 24 hours",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <Container className="px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative w-full overflow-hidden rounded-[16px] bg-[#063f3c] p-8 md:p-10 lg:w-1/2 lg:p-10">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-[150px] w-[150px] rounded-full border-[25px] border-white/[0.03]" />

            <div className="pointer-events-none absolute -bottom-16 -left-10 h-[160px] w-[160px] rounded-full border-[25px] border-white/[0.03]" />

            {/* Content */}
            <div className="relative z-10">
              <SectionHeading
                badge="Contact Us"
                align="left"
                className="mx-0"
                maxWidth="max-w-[600px]"
                titleColor="text-white"
                highlightColor="text-[#EA7F4A]"
                descriptionColor="text-white/60"
                descriptionMaxWidth="max-w-[600px]"
                titleClassName="text-[26px] font-semibold leading-[1.15]  sm:text-[32px] md:text-[36px] "
                description="Our billing experts are ready to help you maximize revenue, reduce claim denials, and simplify your entire billing operation. We'll be in touch within 24 hours."
              >
                Ready to Grow{" "}
                <span className="text-[#EA7F4A]">Your Practice?</span>
              </SectionHeading>

              {/* Contact Info */}
              <div className="mt-8 flex flex-col gap-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex min-h-[60px] items-center gap-4 rounded-[11px] border border-white/10 bg-white/[0.06] px-5"
                    >
                      {/* Dot */}
                      <div className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#EA7F4A]" />

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-white/40">
                          {item.label}
                        </p>

                        <p className=" text-[14px] font-semibold text-white sm:text-[15px]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Image */}
              <div className="relative mt-8 h-[200px] w-full overflow-hidden rounded-[12px] sm:h-[220px]">
                <Image
                  src="/single-doctor.jpg"
                  alt="Healthcare professionals"
                  fill
                  className="object-cover object-top "
                />

                {/* Providers Badge */}
                <div className="absolute bottom-3 left-3 rounded-[9px] bg-white px-4 py-2 shadow-lg">
                  <p className="text-[16px] font-bold leading-none text-[#075f5b]">
                    500+
                  </p>

                  <p className="mt-[2px] text-[10px] text-[#7a7a7a]">
                    Providers Trust Us
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full lg:w-1/2">
            {" "}
            <ContactForm />{" "}
          </div>
        </div>
      </Container>
    </section>
  );
}
