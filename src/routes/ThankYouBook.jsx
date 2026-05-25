import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';

export default function ThankYouBook() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [showWarning, setShowWarning] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [downloadsLeft, setDownloadsLeft] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  // Page load hote hi top par scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check token validity
    if (token) {
      checkToken();
    }
  }, [token]);

  const checkToken = async () => {
    try {
      const res = await fetch(`/api/check-token?token=${token}`);
      const data = await res.json();
      
      if (data.valid) {
        setDownloadsLeft(data.downloadsLeft);
        setUserEmail(data.email || '');
      } else {
        setError(data.message || 'This download link has expired or is invalid.');
      }
    } catch (err) {
      setError('Unable to verify download link. Please contact support.');
    }
  };

  const handleDownload = async () => {
    if (!token) {
    window.location.href = `https://drive.google.com/uc?export=download&id=12h7Q0FNa9nLATwE9cknvDK1UIWkjV7Qm`;
    return;
  }
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/download-book?token=${token}`);
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Download failed');
      }

      // Get filename from headers or use default
      const disposition = res.headers.get('Content-Disposition');
      let filename = 'Voice-Control-Book.pdf';
      if (disposition) {
        const match = disposition.match(/filename="?(.+)"?/);
        if (match) filename = match[1];
      }

      // Download as blob
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      // Refresh token status
      await checkToken();

    } catch (err) {
      setError(err.message || 'Download failed. Please try again.');
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
                  <span><strong>DO NOT SHARE</strong> this book with anyone without explicit permission.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">©️</span>
                  <span>This book is <strong>copyrighted material</strong>. All rights reserved.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">⚖️</span>
                  <span>Unauthorized sharing, distribution, or reproduction will result in <strong>legal action</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">🔒</span>
                  <span>This is for <strong>YOUR PERSONAL USE ONLY</strong>. You purchased a single-user license.</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-500 text-xs mb-6">
              By accessing this book, you agree to respect the author's intellectual property rights.
            </p>
            <button
              onClick={() => setShowWarning(false)}
              className="w-full py-3 bg-[#1A1A1B] text-white font-semibold rounded-full hover:bg-gray-800 transition text-sm"
            >
              I Understand & Agree — View My Book
            </button>
          </motion.div>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 1. SUCCESS & DELIVERY BLOCK */}
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
          <p className="text-gray-600 text-lg mb-6">
            Your <strong>Voice Control Book</strong> is officially yours. Download it securely below.
          </p>
          
          {/* Email notice */}
          {userEmail && (
            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg inline-block text-sm font-medium mb-6">
              📬 Licensed to: <strong>{userEmail}</strong>
            </div>
          )}

          {/* Downloads left */}
          {downloadsLeft !== null && (
            <div className={`p-4 rounded-lg inline-block text-sm font-medium mb-6 ${
              downloadsLeft > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
            }`}>
              {downloadsLeft > 0 
                ? `📥 ${downloadsLeft} download${downloadsLeft > 1 ? 's' : ''} remaining`
                : '⚠️ Download limit reached'
              }
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium mb-6">
              {error}
            </div>
          )}

          {/* DOWNLOAD BUTTON ONLY — No Read Online */}
          <div className="flex justify-center">
            <button
              onClick={handleDownload}
              disabled={loading || downloadsLeft === 0 || !!error}
              className="px-10 py-4 bg-[#1A1A1B] text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Preparing your book...
                </>
              ) : (
                <>
                  <span>⬇️</span> Download Your Book (PDF)
                </>
              )}
            </button>
          </div>

          <p className="text-gray-400 text-xs mt-6">
            ⚠️ This book is watermarked with your email. Do not share with others.
          </p>
        </motion.div>

        {/* 2. COPYRIGHT REMINDER BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center"
        >
          <p className="text-red-700 font-bold text-sm uppercase tracking-wider mb-2">
            🔒 COPYRIGHT PROTECTED
          </p>
          <p className="text-gray-700 text-sm">
            This digital book is licensed to <strong>you only</strong>. Sharing, distributing, or uploading this file anywhere without permission is strictly prohibited and violates copyright law.
          </p>
        </motion.div>

        {/* 3. UPSELL BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
            Don't just read about it. Watch real examples, do the exact speaking drills, and master your authority presence faster with the complete video course.
          </p>
          
          <a 
            href="https://buy.stripe.com/7sYbJ00yHdM59PUaV2gIo01" 
            className="inline-block w-full md:w-auto px-10 py-4 bg-[#C2B280] text-[#1A1A1B] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#d5c48f] transition shadow-[0_0_20px_rgba(194,178,128,0.3)]"
          >
            Upgrade Now
          </a>
        </motion.div>

        {/* 4. COACHING CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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