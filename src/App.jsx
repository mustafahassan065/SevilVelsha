import React from "react";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SeoManager from "./components/SeoManager";
import Blog from "./routes/Blog";
import BlogDetail from "./routes/BlogDetail";
import BookSession from "./routes/BookSession";
import VoiceCoursePage from "./routes/VoiceCoursePage";
import VoiceBookPage from "./routes/VoiceBookPage";
import VoiceCoachingPage from "./routes/VoiceCoachingPage";

function App() {
  return (
    <main>
      <SeoManager />
      <Nav />
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
      <Footer />
    </main>
  );
}

export default App;
