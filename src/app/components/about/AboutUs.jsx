import React from "react";
import Container from "@components/common/Container";
import Badge from "@components/common/Badge";

function AboutUs() {
  const stats = [
    {
      value: "500+",
      label: "Providers Served",
    },
    {
      value: "98%",
      label: "Clean Claim Rate",
    },
    {
      value: "10+",
      label: "Years Experience",
    },
    {
      value: "25%",
      label: "Avg. Revenue Increase",
    },
  ];

  return (
    <section>
      {/* Hero */}
      <div
        className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat h-[340px] md:h-[420px] lg:h-[500px]"
        style={{ backgroundImage: "url('/aboutUs-bg.jpg')" }}
      >
        {/* Background overlay */}\
        <div className="absolute inset-0 z-0 bg-[#003635]/80" />

        {/* Background circles */}
        <div className="pointer-events-none absolute -right-28 -top-28 z-10 h-72 w-72 rounded-full border-[60px] border-[#2c1509]/20  opacity-60 sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96" />

        <div className="pointer-events-none absolute -bottom-32 -left-28 z-10 h-80 w-80 rounded-full border-[60px] border-[#2c1509]/20 opacity-60 sm:-bottom-36 sm:-left-32 sm:h-96 sm:w-96 md:h-80 md:w-80 lg:h-96 lg:w-96" />

        {/* CONTENT - ABOVE OVERLAY */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <Container className="flex flex-col items-center justify-center gap-4 text-center">
            <Badge>Lucentra RCM Solutions</Badge>

            <h1 className="text-[36px] font-bold leading-[1.25] tracking-[-1px] text-white sm:text-[30px] md:text-[58px] lg:text-[68px]">
              About <span className="text-[#EA7F4A]">Us</span>
            </h1>

            <p className=" max-w-[520px] text-[14px] font-normal leading-[1.7] text-white/80 md:text-[17px]">
              A dedicated team of medical billing experts committed to
              maximizing your practice's revenue and simplifying your
              operations.
            </p>
          </Container>
        </div>
      </div>

      {/* Stats */}
      <div className="grid w-full grid-cols-2 gap-y-8 bg-[#025350] p-6 md:grid-cols-4 md:gap-y-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-[28px] font-bold leading-none text-white  md:text-[36px] lg:text-[44px] ">
              {stat.value}
            </p>

            <p className="mt-1   text-[11px] font-normal text-white/80 md:text-[13px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
