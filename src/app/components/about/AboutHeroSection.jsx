import React from "react";
import InnerHero from "@/app/components/common/InnerHero";

function AboutUsHeroSection() {
  return (
    <>
      <InnerHero
        badge="Lucentra RCM Solutions"
        heading={
          <>
            About <span className="text-[#EA7F4A]">Us</span>
          </>
        }
        description="A dedicated team of medical billing experts committed to maximizing your practice's revenue and simplifying your operations."
        bgImage="/aboutUs-bg.jpg"
        stats={[
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
        ]}
      />
    </>
  );
}

export default AboutUsHeroSection;
