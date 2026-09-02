import React from "react";
import Navbar from "@/app/components/Header/Navbar";
import HeroSection from "@/app/components/Home/Hero";
import SpecializedServices from "@/app/components/Home/SpecializedServices";
import WhoWeAreSection from "@/app/components/Home/WhoWeAreSection";
import QualityServices from "@/app/components/Home/QualityServices";
import PracticeGrowth from "@/app/components/Home/PracticeGrowth";
import ContactSection from "@/app/components/Home/ContactUs";
import Testimonial from "@/app/components/Home/Testimonial";

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
