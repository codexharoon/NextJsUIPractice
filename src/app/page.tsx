import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import WhyUs from "./components/WhyUs";
import MovingCardSection from "./components/MovingCardSection";

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedSection />
      <WhyUs />
      <MovingCardSection />
    </main>
  );
};

export default page;
