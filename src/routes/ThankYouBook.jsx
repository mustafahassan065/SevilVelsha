import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ThankYouBook() {
  const [showWarning, setShowWarning] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Form state
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // NEW OneDrive Download Link
  const ONEDRIVE_DOWNLOAD_URL = 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9iNTBlOGMwMTI0ODA1Y2EzL0lRRHhlQ1RIamhrV1NvYUhmQkdkbVR4SEFlVEdDdFBaRFJibW9lQnpsb3MydjJBP1RlYW1zQ0lEPTY2NTliMjFhLTJhNDEtNDA2NS04MzIxLTU5MzRmZmI4YjdmYSZsaW5rT3BlblRpbWU9MTc4MDg5Mjg3MjA3NA&cid=B50E8C0124805CA3&id=B50E8C0124805CA3%21sc72478f1198e4a1686877c119d993c47&parId=B50E8C0124805CA3%21s44ff9d852fdc4b51bcec42eefc0cd89b&o=OneUp';

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check localStorage for previous license
    const stored = localStorage.getItem('vc_license');
    if (stored) {
      try {
        const { email } = JSON.parse(stored);
        if (email) {
          setUserEmail(email);
          setEmailSubmitted(true);
        }
      } catch (err) {}
    }
  }, []);

  // ── EMAIL SUBMIT ────────────────────────────────────────────
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Save to localStorage
    localStorage.setItem('vc_license', JSON.stringify({
      email: email.trim(),
      time: Date.now(),
    }));

    setUserEmail(email.trim());
    setEmailSubmitted(true);
  };

  // ── DOWNLOAD ────────────────────────────────────────────────
  const handleDownload = async () => {
    setLoading(true);
    setError('');

    try {
      // Dynamic watermark ke liye backend call
      const res = await fetch(`/api/download-book-watermarked?email=${encodeURIComponent(userEmail)}`);
      
      if (!res.ok) throw new Error('Download failed');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      
      const safeEmail = userEmail.replace(/[^a-zA-Z0-9@._-]/g, '_');
      a.download = `Voice-Control-Book-Licensed-to-${safeEmail}.pdf`;
      a.href = url;
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

    } catch (err) {
      setError('❌ Download failed. Trying direct download...');
      
      // Fallback: Direct OneDrive Link (Updated)
      const link = document.createElement('a');
      link.href = ONEDRIVE_DOWNLOAD_URL;
      link.download = `Voice-Control-Book.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4] pt-28 pb-20 px-4">
      
      {/* COPYRIGHT WARNING MODAL */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border-2 border-red-200"
          >
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-600 mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              ⚡ IMPORTANT COPYRIGHT WARNING ⚡
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
              <ul className="space-y-3 text-sm text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">🚫</span>
                  <span><strong>DO NOT SHARE</strong> this book with anyone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">©️</span>
                  <span>This book is <strong>copyrighted material</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">⚖️</span>
                  <span>Unauthorized sharing = <strong>legal action</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">🔒</span>
                  <span>For <strong>your personal use only</strong>.</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setShowWarning(false)}
              className="w-full py-3 bg-[#1A1A1B] text-white font-semibold rounded-full hover:bg-gray-800 transition text-sm"
            >
              I Understand & Agree
            </button>
          </motion.div>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 1. SUCCESS & LICENSE BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center border border-gray-100"
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            ✓
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1B] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Payment Successful!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Your <strong>Voice Control Book</strong> is ready for download.
          </p>

          {/* ── EMAIL FORM ── */}
          {!emailSubmitted ? (
            <div className="max-w-md mx-auto">
              <p className="text-sm text-gray-500 mb-4">
                📧 Enter your email to license this book to you:
              </p>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-300 rounded-full text-sm text-center focus:outline-none focus:border-[#C2B280] focus:ring-1 focus:ring-[#C2B280]"
                />
                
                {error && (
                  <p className="text-red-500 text-xs">{error}</p>
                )}
                
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C2B280] text-white text-sm font-semibold rounded-full hover:bg-[#b8a070] transition"
                >
                  License My Book →
                </button>
              </form>
              
              <p className="text-gray-400 text-xs mt-3">
                Your email will be embedded in the PDF as "Licensed to"
              </p>
            </div>
          ) : (
            <>
              {/* ── LICENSE DISPLAY ── */}
              <div className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-xl inline-block mb-8">
                <p className="text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
                  📜 Licensed To
                </p>
                <p className="text-gray-800 text-lg font-bold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {userEmail}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Voice Control by Sevil Velsha
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Single User License — Do Not Share
                </p>
              </div>

              <br/>

              {/* ── DOWNLOAD BUTTON ── */}
              <button
                onClick={handleDownload}
                disabled={loading}
                className="px-10 py-4 bg-[#1A1A1B] text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-3 mx-auto disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <span>⬇️</span> Download Your Book (PDF)
                  </>
                )}
              </button>

              {/* Change email option */}
              <p 
                onClick={() => {
                  setEmailSubmitted(false);
                  setUserEmail('');
                  setEmail('');
                  localStorage.removeItem('vc_license');
                }}
                className="text-gray-400 text-xs mt-4 underline cursor-pointer hover:text-gray-600"
              >
                Change email address
              </p>
            </>
          )}

          <p className="text-gray-400 text-xs mt-8">
            🔒 Protected by copyright. Do not share.
          </p>
        </motion.div>

        {/* 2. SECURITY FEATURES */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-bold text-[#1A1A1B] mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            🔐 How Your Book Is Protected
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">📧</span>
              <p className="font-semibold mt-2">Email Licensed</p>
              <p className="text-gray-500 text-xs mt-1">Your email embedded in the PDF filename</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">🔒</span>
              <p className="font-semibold mt-2">Single User</p>
              <p className="text-gray-500 text-xs mt-1">One license = One person</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">⚖️</span>
              <p className="font-semibold mt-2">Legal Protection</p>
              <p className="text-gray-500 text-xs mt-1">Copyright law protected</p>
            </div>
          </div>
        </motion.div>

        {/* 3. COPYRIGHT REMINDER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center"
        >
          <p className="text-red-700 font-bold text-sm uppercase tracking-wider mb-2">
            🔒 COPYRIGHT PROTECTED
          </p>
          <p className="text-gray-700 text-sm">
            This digital book is licensed to <strong>{userEmail || 'you only'}</strong>. Sharing, distributing, or uploading this file anywhere without permission is strictly prohibited and violates copyright law.
          </p>
        </motion.div>

        {/* 4. UPSELL BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#1A1A1B] rounded-2xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C2B280] to-[#e6d59e]"></div>
          
          <p className="text-[#C2B280] font-bold tracking-widest uppercase text-xs mb-3">
            Wait! Upgrade Your Voice
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Get the Full Video Course
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Don't just read about it. Watch real examples, do the exact speaking drills, and master your authority presence faster.
          </p>
          
          <a 
            href="https://buy.stripe.com/7sYbJ00yHdM59PUaV2gIo01" 
            className="inline-block w-full md:w-auto px-10 py-4 bg-[#C2B280] text-[#1A1A1B] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#d5c48f] transition shadow-[0_0_20px_rgba(194,178,128,0.3)]"
          >
            Upgrade Now
          </a>
        </motion.div>

        {/* 5. COACHING CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-transparent border-2 border-gray-200 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-[#1A1A1B] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Need 1-on-1 Help?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Looking for personalized feedback and intensive coaching?
          </p>
          <Link 
            to="/voice-control-coaching/apply" 
            className="inline-block px-8 py-3 border border-[#1A1A1B] text-[#1A1A1B] text-sm font-semibold rounded-full hover:bg-gray-50 transition"
          >
            Apply for 1:1 Voice Coaching →
          </Link>
        </motion.div>

      </div>
    </div>
  );
}