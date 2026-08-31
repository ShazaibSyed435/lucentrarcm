import React from "react";
import Navbar from "@/app/components/Header/Navbar";
import HeroSection from "@/app/components/Hero";
import SpecializedServices from "@components/SpecializedServices";
import WhoWeAreSection from "@components/WhoWeAreSection";
import QualityServices from "@components/QualityServices";
import PracticeGrowth from "@components/PracticeGrowth";
import ContactSection from "@components/ContactUs";
import Testimonials from "@components/Testimonial";

import Footer from "@/app/components/Footer/Footer";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SpecializedServices />
      <WhoWeAreSection />
      <QualityServices />
      <PracticeGrowth />
      <ContactSection />
      <Testimonials />
    </main>
  );
}

export default HomePage;
