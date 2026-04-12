// src/App.jsx
// Updated with Voice Course funnel routes:
// /voice-control-checkout → /voice-control-success → /voice-control-coaching-offer → /voice-control-dashboard

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import VoiceNav from "./components/VoiceNav";
import VoiceFooter from "./components/VoiceFooter";
import SeoManager from "./components/SeoManager";
import Blog from "./routes/Blog";
import BlogDetail from "./routes/BlogDetail";
import BookSession from "./routes/BookSession";
import VoiceCoursePage from "./routes/VoiceCoursePage";
import VoiceBookPage from "./routes/VoiceBookPage";
import VoiceCoachingPage from "./routes/VoiceCoachingPage";
import ThankYouBook from "./routes/ThankYouBook";

// ── Voice Course Funnel Pages ─────────────────────────────────────

import ThankYouVoicePage from "./routes/voice-course/ThankyouVoicePage";
import UpsellPage        from "./routes/voice-course/UpsellPage";
import CourseDashboard   from "./routes/voice-course/CourseDashboard.jsx";
// ─────────────────────────────────────────────────────────────────

function AppContent() {
  const location = useLocation();

  const isVoiceControlPage = location.pathname.startsWith("/voice-control-");
  const isCoachingPage     = location.pathname.startsWith("/voice-control-coaching");
  const isCoursePage       = location.pathname.startsWith("/voice-control-course");

  // These funnel pages have their own nav — hide global header/footer
  const isFunnelPage = [
    '/voice-control-checkout',
    '/voice-control-success',
    '/voice-control-coaching-offer',
    '/voice-control-dashboard',
  ].includes(location.pathname);

  const hideGlobalHeader = isCoachingPage || isCoursePage || isFunnelPage;
  const Header = hideGlobalHeader
    ? null
    : (isVoiceControlPage ? VoiceNav : Nav);

  const FooterComponent = isFunnelPage
    ? null
    : (isVoiceControlPage && !isCoachingPage
        ? VoiceFooter
        : (!isCoachingPage ? Footer : null));

  return (
    <main>
      <SeoManager />
      {Header && <Header />}
      <Routes>
        {/* ── Existing routes ── */}
        <Route path="/"                         element={<Home />} />
        <Route path="/contact"                  element={<Contact />} />
        <Route path="/blogs"                    element={<Blog />} />
        <Route path="/blogs/:slug"              element={<BlogDetail />} />
        <Route path="/booking"                  element={<BookSession />} />
        <Route path="/voice-control-course"     element={<VoiceCoursePage />} />
        <Route path="/voice-control-book"       element={<VoiceBookPage />} />
        <Route path="/voice-control-coaching/*" element={<VoiceCoachingPage />} />
        <Route path="/thank-you-book"           element={<ThankYouBook />} />

        {/* ── Voice Course Funnel ── */}
        
        <Route path="/voice-control-success"         element={<ThankYouVoicePage />} />
        <Route path="/voice-control-coaching-offer"  element={<UpsellPage />} />
        <Route path="/voice-control-dashboard"       element={<CourseDashboard />} />
      </Routes>
      {FooterComponent && <FooterComponent />}
    </main>
  );
}

function App() {
  return <AppContent />;
}

export default App;