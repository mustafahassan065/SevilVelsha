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

function AppContent() {
  const location = useLocation();
  
  // Routes ko detect kar rahe hain
  const isVoiceControlPage = location.pathname.startsWith("/voice-control-");
  const isCoachingPage = location.pathname.startsWith("/voice-control-coaching");
  const isCoursePage = location.pathname.startsWith("/voice-control-course"); // Course page detect kiya
  
  // Agar Coaching ya Course page hai, toh global header ko hide kar do (null)
  const hideGlobalHeader = isCoachingPage || isCoursePage;
  
  // Header ki nayi logic
  const Header = hideGlobalHeader ? null : (isVoiceControlPage ? VoiceNav : Nav);
  
  // Footer ki purani logic wesi hi rakhi hai 
  const FooterComponent = isVoiceControlPage && !isCoachingPage ? VoiceFooter : (!isCoachingPage ? Footer : null);

  return (
    <main>
      <SeoManager />
      {/* Agar Header null nahi hai tabhi show hoga */}
      {Header && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/booking" element={<BookSession />} />
        <Route path="/voice-control-course" element={<VoiceCoursePage />} />
        <Route path="/voice-control-book" element={<VoiceBookPage />} />
        
        {/* Yahan /* lagana zaroori hai nested routing ke liye */}
        <Route path="/voice-control-coaching/*" element={<VoiceCoachingPage />} />
      </Routes>
      {FooterComponent && <FooterComponent />}
    </main>
  );
}

function App() {
  return <AppContent />;
}

export default App;