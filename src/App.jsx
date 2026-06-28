// src/App.jsx
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
import VoiceFreeAccessPage from './routes/voice-course/VoiceFreeAccessPage';
import VoicePdfPage from './routes/voice-course/VoicePdfPage';

// ── Voice Audit Pages ─────────────────────────────────────────────
import VoiceAuditPage       from './routes/voice-audit/VoiceAuditPage';
import ThankYouPage         from './routes/voice-audit/ThankYouPage';
import FreeVoiceCheckPage   from './routes/voice-audit/FreeVoiceCheckPage';
import Home_New from "./routes/Home_New";
// ─────────────────────────────────────────────────────────────────

function AppContent() {
  const location = useLocation();

  const isVoiceControlPage = location.pathname.startsWith("/voice-control-");
  const isCoachingPage     = location.pathname.startsWith("/voice-control-coaching");
  const isCoursePage       = location.pathname.startsWith("/voice-control-course");

  // Voice Audit pages — hide global nav/footer
  const isVoiceAuditPage = location.pathname.startsWith("/voice-audit")
    || location.pathname === "/free-voice-check";

  // Home_New — apna khud ka nav/footer hai, global hide karo
  const isHomeNew = location.pathname === "/home_new";

  const isFunnelPage = [
    '/voice-control-checkout',
    '/voice-control-success',
    '/voice-control-coaching-offer',
    '/voice-control-dashboard',
  ].includes(location.pathname);

  const hideGlobalHeader = isCoachingPage || isCoursePage || isFunnelPage || isVoiceAuditPage || isHomeNew;

  const Header = hideGlobalHeader
    ? null
    : (isVoiceControlPage ? VoiceNav : Nav);

  const hideGlobalFooter = isFunnelPage || isVoiceAuditPage || isHomeNew;

  const FooterComponent = hideGlobalFooter
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
        <Route path="/voice-free-access"             element={<VoiceFreeAccessPage />} />
        <Route path="/voice-control-pdf"             element={<VoicePdfPage />} />

        {/* ── Voice Audit ── */}
        <Route path="/voice-audit"             element={<VoiceAuditPage />} />
        <Route path="/voice-audit/thank-you"   element={<ThankYouPage />} />
        <Route path="/free-voice-check"        element={<FreeVoiceCheckPage />} />

        {/* ── Home New ── */}
        <Route path="/home_new" element={<Home_New />} />
      </Routes>
      {FooterComponent && <FooterComponent />}
    </main>
  );
}

function App() {
  return <AppContent />;
}

export default App;