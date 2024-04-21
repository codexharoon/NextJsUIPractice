import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import WhyUs from "./components/WhyUs";
import MovingCardSection from "./components/MovingCardSection";
import HoverCardsSEction from "./components/HoverCardsSection";
import InstructorsSection from "./components/InstructorsSection";
import Footer from "./components/Footer";

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedSection />
      <WhyUs />
      <MovingCardSection />
      <HoverCardsSEction />
      <InstructorsSection />
      <Footer />
    </main>
  );
};

export default page;
