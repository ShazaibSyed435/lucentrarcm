import Container from "./common/Container";
import { BriefcaseBusiness, Phone, Mail, Clock3 } from "lucide-react";
import Image from "next/image";

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
        <div className="flex flex-col gap-6 md:flex-row">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative w-full overflow-hidden rounded-[16px] bg-[#063f3c] p-7 sm:p-9 md:w-1/2 lg:p-10">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-[150px] w-[150px] rounded-full border-[25px] border-white/[0.03]" />

            <div className="pointer-events-none absolute -bottom-16 -left-10 h-[160px] w-[160px] rounded-full border-[25px] border-white/[0.03]" />

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2">
                <BriefcaseBusiness className="h-[13px] w-[13px] text-[#ff6845]" />

                <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[#ff6845]">
                  Contact Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[600px] text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[38px]">
                Ready to Grow{" "}
                <span className="text-[#ff6845]">Your Practice?</span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[600px] text-[13px] leading-[1.8] text-white/60 sm:text-[14px]">
                Our billing experts are ready to help you maximize revenue,
                reduce claim denials, and simplify your entire billing
                operation. We&apos;ll be in touch within 24 hours.
              </p>

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
                      <div className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#ff6845]" />

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.8px] text-white/40">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[13px] font-semibold text-white sm:text-[14px]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Image */}
              <div className="relative mt-8 h-[190px] w-full overflow-hidden rounded-[12px] sm:h-[205px]">
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

                  <p className="mt-1 text-[9px] text-[#7a7a7a]">
                    Providers Trust Us
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full rounded-[16px] border border-[#e2e9e8] bg-white p-7 shadow-[0_8px_30px_rgba(7,95,91,0.05)] sm:p-9 md:w-1/2 lg:p-10 overflow-hidden">
            {/* Top border */}
            <div className="relative">
              <div className="absolute -left-7 -right-7 -top-7 h-[4px] bg-gradient-to-r from-[#075f5b] to-[#ff6845] sm:-left-9 sm:-right-9 sm:-top-9 lg:-left-10 lg:-right-10 lg:-top-10" />
            </div>

            {/* Form Heading */}
            <h3 className="text-[23px] font-semibold tracking-[-0.4px] text-[#172b2b] sm:text-[25px]">
              Send Us a Message
            </h3>

            <p className="mt-2 text-[12px] text-[#888f8f] sm:text-[13px]">
              We&apos;ll get back to you within 24 hours.
            </p>

            {/* Form */}
            <form className="mt-6 flex flex-col gap-3">
              {/* Name + Phone */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] outline-none transition placeholder:text-[#747b80] focus:border-[#075f5b]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] outline-none transition placeholder:text-[#747b80] focus:border-[#075f5b]"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] outline-none transition placeholder:text-[#747b7f] focus:border-[#075f5b]"
              />

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] outline-none transition placeholder:text-[#747b7f] focus:border-[#075f5b]"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 py-3 text-[12px] outline-none transition placeholder:text-[#747b7f] focus:border-[#075f5b]"
              />

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-[18px] w-[18px] shrink-0 accent-[#075f5b]"
                />

                <span className="text-[10px] leading-[1.6] text-[#6f7478] sm:text-[11px]">
                  I agree to receive SMS messages from Lucentra RCM Solutions
                  LLC regarding billing, credentialing, and related healthcare
                  revenue cycle services.
                </span>
              </label>

              {/* Disclaimer */}
              <p className="text-[10px] leading-[1.7] text-[#858b8e] sm:text-[11px]">
                By checking this box, you consent to receive SMS messages from
                Lucentra RCM Solutions LLC regarding billing, credentialing, and
                related services. Message and data rates may apply. Messaging
                frequency varies. Reply STOP to opt out or reply HELP for more
                information. View our{" "}
                <a href="#" className="font-medium text-[#075f5b] underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium text-[#075f5b] underline">
                  Privacy Policy
                </a>{" "}
                for more information.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 h-[45px] w-full rounded-[9px] bg-[#075f5b] text-[13px] font-semibold text-white transition hover:bg-[#064d49]"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
