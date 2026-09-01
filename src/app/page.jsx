import React from "react";
import Navbar from "@/app/components/Header/Navbar";
import HeroSection from "@/app/components/Hero";
import SpecializedServices from "@components/SpecializedServices";
import WhoWeAreSection from "@components/WhoWeAreSection";
import QualityServices from "@components/QualityServices";
import PracticeGrowth from "@components/PracticeGrowth";
import ContactSection from "@components/ContactUs";
import Testimonial from "@components/Testimonial";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SpecializedServices />
      <WhoWeAreSection />
      <QualityServices />
      <PracticeGrowth />
      <ContactSection />

      <Testimonial />
    </main>
  );
}

export default HomePage;
