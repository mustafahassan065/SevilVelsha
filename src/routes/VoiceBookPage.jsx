import React from "react";
import Header from "./voice-book/Header/Header";
import Hero from "./voice-book/Hero/Hero";
import LookInside from "./voice-book/LookInside/LookInside";
import SameWords from "./voice-book/SameWords/SameWords";
import ScienceSection from "./voice-book/ScienceSection/ScienceSection";
import TrainingSystem from "./voice-book/TrainingSystem/TrainingSystem";
import FinalCTA from "./voice-book/FinalCTA/FinalCTA";

function VoiceBookPage() {
  return (
    <div className="bg-[#F5F1E8]">
      <Header />
      <Hero />
      <div id="lookInside"><LookInside /></div>
      <div id="sameWords"><SameWords /></div>
      <div id="science"><ScienceSection /></div>
      <div id="system"><TrainingSystem /></div>
      <div id="getCopy"><FinalCTA /></div>
    </div>
  );
}

export default VoiceBookPage;