import React from "react";
import { Route, Routes, useLocation } from "react-router";
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

// Voice control pages ke paths
const VOICE_CONTROL_PATHS = [
  "/voice-control-course",
  "/voice-control-book", 
  "/voice-control-coaching"
];

function AppContent() {
  const location = useLocation();
  
  // Check karo ke current path voice control page hai ya nahi
  const isVoiceControlPage = VOICE_CONTROL_PATHS.includes(location.pathname);
  
  // Conditional components select karo
  const Header = isVoiceControlPage ? VoiceNav : Nav;
  const FooterComponent = isVoiceControlPage ? VoiceFooter : Footer;

  return (
    <main>
      <SeoManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/booking" element={<BookSession />} />
        <Route path="/voice-control-course" element={<VoiceCoursePage />} />
        <Route path="/voice-control-book" element={<VoiceBookPage />} />
        <Route path="/voice-control-coaching" element={<VoiceCoachingPage />} />
      </Routes>
      <FooterComponent />
    </main>
  );
}

// Wrapper component jo Router provide kare
function App() {
  return <AppContent />;
}

export default App;