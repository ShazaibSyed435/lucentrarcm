import React from "react";
import InnerHero from "@/app/components/common/InnerHero";

function SpecialtiesHeroSection() {
  return (
    <>
      <InnerHero
        badge="Lucentra RCM Solutions"
        heading={
          <>
            Our <span className="text-[#EA7F4A]">Specialties</span>
          </>
        }
        description="Specialty-focused medical billing serving 75+ specialties across the nation regardless of practice size or type.

"
        bgImage="/aboutUs-bg.jpg"
        isCard={true}
      />
    </>
  );
}

export default SpecialtiesHeroSection;
