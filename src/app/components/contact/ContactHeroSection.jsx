import React from "react";
import InnerHero from "@/app/components/common/InnerHero";

function ContactHeroSection() {
  return (
    <>
      <InnerHero
        badge="Lucentra RCM Solutions"
        heading={
          <>
            Get In <span className="text-[#EA7F4A]">Touch</span>
          </>
        }
        description="Have a question or ready to get started? Our billing experts are here to help — reach out and we'll respond within one business day."
        bgImage="/aboutUs-bg.jpg"
      
      />
    </>
  );
}

export default  ContactHeroSection;
