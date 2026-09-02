import React from "react";
import InnerHero from "@/app/components/common/InnerHero";

function ServicesHeroSection() {
  return (
    <>
      <InnerHero
        badge="Lucentra RCM Solutions"
        heading={
          <>
            Our <span className="text-[#EA7F4A]">Services</span>
          </>
        }
        description="Comprehensive medical billing and revenue cycle management solutions tailored to your specialty and practice size."
        bgImage="/aboutUs-bg.jpg"
        bottomContent={{
          heading: (
            <>
              Helping 100+ practices across the U.S.{" "}
              <span className="text-[#EA7F4A]">streamline revenue</span>
            </>
          ),
          description:
            "Trusted RCM experts reducing overhead and maximizing collections.",

          buttonText: "Get a Free Consultation",
        }}
      />
    </>
  );
}

export default ServicesHeroSection;
