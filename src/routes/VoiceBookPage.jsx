import React from "react";
import Card from "./voice-book/CardSection/Card";
import { ChapterSection } from "./voice-book/ChapterSection/ChapterSection";

import { GiftSection } from "./voice-book/GiftSection/GiftSection";
import Header from "./voice-book/Header/Header";
import Hero from "./voice-book/Hero/Hero";
import { Meet } from "./voice-book/Meet/MeetSection";
import Testimonials from "./voice-book/Testimonials/Testimonials";
import { TransformationSection } from "./voice-book/TransformationSection/TransformationSection";
import ComparisonCard from "./voice-book/WhatBookDoes/ComparisonCard";
import WhatBookDoes from "./voice-book/WhatBookDoes/WhatBookDoes";
import WhoIsFor from "./voice-book/WhoIsFor/WhoIsFor";

function VoiceBookPage() {
  return (
    <div className="bg-[#F5F1E8]">
      <Header />
      <Hero />
      <WhoIsFor />
      <WhatBookDoes />
      <Meet />
      <GiftSection />
      <ChapterSection />
      <TransformationSection />
      <WhoIsFor />
      <Testimonials />
      <Card />
      
    </div>
  );
}

export default VoiceBookPage;
