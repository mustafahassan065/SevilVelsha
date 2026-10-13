import React from "react";
import Header from "./voice-book/Header/Header";
import Hero from "./voice-book/Hero/Hero";
import LookInside from "./voice-book/LookInside/LookInside";
import WhatYouGet from "./voice-book/WhatYouGet/WhatYouGet";

function VoiceBookPage() {
  return (
    <div className="bg-[#F5F1E8]">
      <Header />
      <Hero />
      <div id="lookInside"><LookInside /></div>
      <div id="whatYouGet"><WhatYouGet /></div>
    </div>
  );
}

export default VoiceBookPage;