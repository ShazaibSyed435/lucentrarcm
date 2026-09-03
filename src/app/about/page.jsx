import React from "react";
import WhoWeAreSection from "@/app/components/Home/WhoWeAreSection";
import OurProcess from "@components/about/OurProcess";
import WhyChooseUs from "@components/about/WhyChooseUs";

import AboutUsHeroSection from "@components/about/AboutHeroSection";
export default function AboutPage() {
  return (
    <main>
      <AboutUsHeroSection />
      <OurProcess />
      <WhyChooseUs />

      <WhoWeAreSection />
    </main>
  );
}
