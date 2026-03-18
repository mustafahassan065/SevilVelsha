import React from "react";
import { Routes, Route } from "react-router-dom";

// 1. Naye design ki CSS file
import "./voice-coaching/index.css"; 

import VoiceNavUpdate from "../components/VoiceNavUpdate.jsx";
// 2. Global Components
import ScrollToTop from "./voice-coaching/components/ScrollToTop.jsx";
import Navbar from "./voice-coaching/components/Navbar.jsx";

// 3. Main Pages
import Home from "./voice-coaching/components/pages/Home.jsx";
import Contact from "./voice-coaching/components/pages/Contact.jsx";
import Apply from "./voice-coaching/components/pages/Apply.jsx";
import Book from "./voice-coaching/components/pages/Book.jsx";

function VoiceCoachingPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] w-full">
      <VoiceNavUpdate />
      <Navbar />
      <ScrollToTop />

      <div className="page-transition">
        <Routes>
          {/* Jab user coaching par click karega, tu naya wala Home page open hoga */}
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apply" element={<Apply />} />
          <Route path="book" element={<Book />} />
        </Routes>
      </div>
    </div>
  );
}

export default VoiceCoachingPage;