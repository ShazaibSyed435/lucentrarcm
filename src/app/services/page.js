import React from "react";
import ServicesHeroSection from "@components/servicesPage/ServicesHeroSection";
import WhatWeOffer from "@components/servicesPage/WhatWeOffer";
import RevenueCycleCTA from "@components/servicesPage/RevenueCycleCTA";

function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <WhatWeOffer />
      <RevenueCycleCTA />
    </main>
  );
}

export default ServicesPage;
