import React from "react";
import InnerHero from "@/app/components/common/InnerHero";

function AboutUsHeroSection() {
  return (
    <>
      <InnerHero
        badge="Lucentra RCM Solutions"
        heading={
          <>
            Our <span className="text-[#EA7F4A]">Pricing</span>
          </>
        }
        description="Transparent, flexible plans designed to fit every practice size  from solo practitioners to large multi-specialty groups.

"
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
