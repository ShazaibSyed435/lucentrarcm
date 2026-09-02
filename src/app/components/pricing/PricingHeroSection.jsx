import React from "react";
import InnerHero from "@/app/components/common/InnerHero";

function PricingHeroSection() {
  return (
    <>
      <InnerHero
        badge="Lucentra RCM Solutions"
        heading={
          <>
            Our <span className="text-[#EA7F4A]"> Pricing</span>
          </>
        }
        description="Transparent, flexible plans designed to fit every practice size  from solo practitioners to large multi-specialty groups.

"
        bgImage="/aboutUs-bg.jpg"
      />
    </>
  );
}

export default PricingHeroSection;
