import React from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/Hero";
import SpecializedServices from "@components/SpecializedServices";
import Footer from "@components/Footer";

function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SpecializedServices />
      <Footer />
    </main>
  );
}

export default HomePage;
