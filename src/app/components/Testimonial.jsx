"use client";

import { useEffect, useState } from "react";
import { BriefcaseBusiness, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./common/Container";

export default function Testimonials() {
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

  /*
   * Clone enough cards at the beginning and end so
   * the slider can move continuously.
   */
  const visibleCards = 3;

  const extendedTestimonials = [
    ...testimonials.slice(-visibleCards),
    ...testimonials,
    ...testimonials.slice(0, visibleCards),
  ];

  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* ================= RESPONSIVE CARD COUNT ================= */

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  /*
   * Reset to the real cards after reaching a clone.
   */
  useEffect(() => {
    if (!isTransitioning) return;

    if (currentIndex >= testimonials.length + visibleCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleCards);
      }, 700);

      return () => clearTimeout(timer);
    }

    if (currentIndex < visibleCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length + visibleCards - 1);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning, testimonials.length]);

  /*
   * Re-enable transition after instant reset.
   */
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  /*
   * Automatic movement.
   *
   * 1 second pause
   * +
   * 700ms smooth movement
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 1700);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  /* ================= MANUAL CONTROLS ================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section
      className="w-full overflow-hidden bg-[#f2f8f7]  bg-fit  bg-top-left bg-no-repeat  py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: "url('/mapdots.png')" }}
    >
      <Container className="px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2">
            <BriefcaseBusiness className="h-[14px] w-[14px] text-[#EA7F4A]" />

            <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#EA7F4A]">
              Client Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-1px] text-[#102b2a] sm:text-[32px] md:text-[40px] ">
            What Our <span className="text-[#075f5b]">Clients Say</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[680px] text-[14px] leading-[1.8] text-[#7b8585] sm:text-[16px]">
            Trusted by 500+ healthcare providers nationwide — here&apos;s what
            they experience working with Lucentra RCM Solutions.
          </p>
        </div>

        {/* ================= SLIDER ================= */}

        <div className="relative mt-12">
          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Track */}
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / cardsPerView
                }%)`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3"
                >
                  <div className="relative flex  flex-col rounded-[14px] bg-white p-6 shadow-[0_8px_25px_rgba(7,95,91,0.06)]">
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
                    <div className=" pt-6">
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
            </div>
          </div>

          {/* ================= CONTROLS ================= */}

          <div className="mt-7 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={previousSlide}
              className="flex h-8 w-8 items-center justify-center text-[#172b2b] transition hover:text-[#EA7F4A]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
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
