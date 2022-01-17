import React from "react";
import HeroSections from "../Components/HeroSection.js";
import CallToAction from "../Components/CallToAction.js";
import FeaturesSection from "../Components/FeaturesSection";
import ReviewsSection from "../Components/ReviewsSection";
import FAQSection from "../Components/FAQSection";
import TheProcessSection from "../Components/TheProcessSection";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div>
      <HeroSections />
      <FeaturesSection />
      <CallToAction />
      <TheProcessSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
