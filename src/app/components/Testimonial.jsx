"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BriefcaseBusiness, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";

export default function Testimonial() {
  const testimonials = [
    {
      text: "Lucentra RCM Solutions made the credentialing process incredibly smooth. I was onboarded with major payers faster than I expected. Their team is efficient and always available for support.",
      name: "Dr. Anaya Malik",
      role: "Independent Provider",
      initial: "D",
    },
    {
      text: "Switching to electronic claims with Lucentra RCM Solutions was a game-changer. Our reimbursement speed has improved dramatically, and our rejection rate has dropped significantly.",
      name: "Michael Thompson",
      role: "Practice Manager, Riverline Health",
      initial: "M",
    },
    {
      text: "Their A/R management service helped us recover thousands in unpaid claims. The team follows up diligently and provides detailed reports to track everything.",
      name: "Samantha Perez",
      role: "Office Admin, CarePoint Clinic",
      initial: "S",
    },
    {
      text: "The Lucentra team has completely transformed our billing workflow. We have better visibility into our claims and significantly fewer outstanding balances.",
      name: "Dr. James Wilson",
      role: "Medical Director",
      initial: "J",
    },
    {
      text: "Their billing experts are responsive, professional, and incredibly knowledgeable. We have seen a noticeable improvement in our overall revenue cycle.",
      name: "Emily Carter",
      role: "Practice Administrator",
      initial: "E",
    },
  ];

  /* ================= SLIDER SETTINGS ================= */

  const sliderSettings = {
    infinite: true,

    // 2 seconds movement
    speed: 2000,

    // 1.5 seconds pause after movement
    autoplaySpeed: 1500,

    autoplay: true,

    // Linear movement
    cssEase: "linear",

    slidesToShow: 3,
    slidesToScroll: 1,

    arrows: false,

    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="w-full overflow-hidden bg-[#f2f8f7] bg-fit bg-top-left bg-no-repeat py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: "url('/mapdots.png')" }}
    >
      <Container className="px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <SectionHeading
          // icon={BriefcaseBusiness}
          badge="Client Testimonials"
          title="What Our"
          highlight="Clients Say"
          description="Trusted by 500+ healthcare providers nationwide — here's what they experience working with Lucentra RCM Solutions."
        />

        {/* <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <BriefcaseBusiness className="h-[14px] w-[14px] text-[#EA7F4A]" />

            <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#EA7F4A]">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-1px] text-[#102b2a] sm:text-[32px] md:text-[40px]">
            What Our <span className="text-[#075f5b]">Clients Say</span>
          </h2>

          <p className="mt-4 max-w-[680px] text-[14px] leading-[1.8] text-[#7b8585] sm:text-[16px]">
            Trusted by 500+ healthcare providers nationwide — here&apos;s what
            they experience working with Lucentra RCM Solutions.
          </p>
        </div> */}

        {/* ================= SLIDER ================= */}

        <div className="relative mt-12">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="px-2">
                <div className="relative flex flex-col rounded-[14px] bg-white p-6 shadow-[0_8px_25px_rgba(7,95,91,0.06)]">
                  {/* Dashed top + right border */}
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-[72%] rounded-tr-[14px] border-r-4 border-t-4 border-dashed border-[#10b9b5]" />

                  {/* Stars */}
                  <div className="flex gap-1 text-[18px] leading-none text-[#ef7548]">
                    ★★★★★
                  </div>

                  {/* Testimonial */}
                  <p className="mt-6 text-[13px] leading-[1.8] text-[#777f80] sm:text-[14px]">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Divider */}
                  <div className="pt-6">
                    <div className="h-px w-full bg-[#e5ebea]" />

                    {/* User */}
                    <div className="mt-5 flex items-center gap-3">
                      {/* Avatar */}
                      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#075f5b] to-[#ef7548] text-[17px] font-semibold text-white">
                        {testimonial.initial}
                      </div>

                      {/* Details */}
                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold text-[#172b2b]">
                          {testimonial.name}
                        </p>

                        <p className="mt-1 text-[11px] text-[#7d8585]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* ================= CONTROLS ================= */}

          <div className="mt-7 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={() => sliderRef?.current?.slickPrev()}
              className="flex h-8 w-8 items-center justify-center text-[#172b2b] transition hover:text-[#EA7F4A]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => sliderRef?.current?.slickNext()}
              className="flex h-8 w-8 items-center justify-center text-[#172b2b] transition hover:text-[#EA7F4A]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
