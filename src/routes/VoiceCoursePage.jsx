import React from "react";
import AvailableSection from "./voice-course/AvailableSection/AvailableSection";

import GainSection from "./voice-course/GainSection/GainSection";
import GiftSection from "./voice-course/GiftSection/GiftSection";
import PricingSection from "./voice-course/Pricing-section/pricing-section";
import TestimonialCarousel from "./voice-course/TestimonialsCrousel/TestimonialsCrousels";
import Hero from "./voice-course/HeroSection/Hero";
import Meeting from "./voice-course/MeetingSection/Meeting";
import Course from "./voice-course/CourseSection/Course";
import Card from "./voice-course/CardSection/Card";
import FAQ from "./voice-course/FAQSection/FAQ";

function VoiceCoursePage() {
  return (
    <div>
      <Hero />
      <Meeting />
      <AvailableSection />
      <GainSection />
      <Course />
      <Card />
      <GiftSection />
      <TestimonialCarousel />
      <PricingSection />
      <FAQ />
      
    </div>
  );
}

export default VoiceCoursePage;
