import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';

export default function ThankYouBook() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const sessionId = searchParams.get('session_id');
  
  const [showWarning, setShowWarning] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [downloadsLeft, setDownloadsLeft] = useState(3);
  const [userEmail, setUserEmail] = useState('');
  const [tokenValid, setTokenValid] = useState(true);
  const [tokenChecked, setTokenChecked] = useState(false);

  // Google Drive File ID (HIDDEN — never exposed directly)
  const PDF_FILE_ID = '12h7Q0FNa9nLATwE9cknvDK1UIWkjV7Qm';

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (token) {
      validateToken();
    } else if (sessionId) {
      // Session ID se token generate karne ka attempt
      generateTokenFromSession();
    } else {
      // No token, no session — show limited access
      setTokenChecked(true);
      setTokenValid(false);
    }
  }, [token, sessionId]);

  // ── TOKEN VALIDATION ────────────────────────────────────────
  const validateToken = async () => {
    try {
      // Token ko decode karte hain (simple base64 + timestamp + email)
      const decoded = atob(token);
      const [email, timestamp, downloads] = decoded.split('|');
      
      const tokenTime = parseInt(timestamp);
      const now = Date.now();
      const hoursDiff = (now - tokenTime) / (1000 * 60 * 60);
      
      // 24 hours expiry check
      if (hoursDiff > 24) {
        setTokenValid(false);
        setError('⏰ This download link has expired (24 hours). Please contact support.');
        setTokenChecked(true);
        return;
      }
      
      // Download limit check
      const remainingDownloads = parseInt(downloads) || 3;
      if (remainingDownloads <= 0) {
        setTokenValid(false);
        setError('⚠️ Download limit reached (3 downloads max). Please contact support.');
        setTokenChecked(true);
        return;
      }
      
      // Valid token
      setUserEmail(email);
      setDownloadsLeft(remainingDownloads);
      setTokenValid(true);
      setTokenChecked(true);
      
    } catch (err) {
      setTokenValid(false);
      setError('🔒 Invalid download link. Please contact support.');
      setTokenChecked(true);
    }
  };

  // ── SESSION SE TOKEN GENERATE ───────────────────────────────
  const generateTokenFromSession = async () => {
    try {
      const res = await fetch(`/api/verify-payment?session_id=${sessionId}`);
      const data = await res.json();
      
      if (data.paid && data.email) {
        // Token generate: email|timestamp|downloads
        const email = data.email;
        const timestamp = Date.now();
        const downloads = 3;
        const newToken = btoa(`${email}|${timestamp}|${downloads}`);
        
        setUserEmail(email);
        setDownloadsLeft(downloads);
        setTokenValid(true);
        setTokenChecked(true);
        
        // URL update (optional — token add karega)
        window.history.replaceState({}, '', `?token=${newToken}`);
      } else {
        setTokenValid(false);
        setTokenChecked(true);
      }
    } catch (err) {
      setTokenValid(false);
      setTokenChecked(true);
    }
  };

  // ── SECURE DOWNLOAD ─────────────────────────────────────────
  const handleDownload = async () => {
    setLoading(true);
    setError('');

    try {
      // Decrement download count
      const newCount = downloadsLeft - 1;
      
      if (newCount < 0) {
        setError('⚠️ Download limit reached. Please contact support.');
        setLoading(false);
        return;
      }

      // Fetch PDF via backend proxy (Google Drive link hidden)
      const downloadUrl = `/api/download-book-proxy?fileId=${PDF_FILE_ID}`;
      
      const res = await fetch(downloadUrl);
      
      if (!res.ok) {
        throw new Error('Download failed');
      }

      // Download as blob
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      
      // Watermarked filename
      const safeEmail = userEmail ? userEmail.replace(/[^a-zA-Z0-9]/g, '_') : 'customer';
      a.download = `Voice-Control-Book-${safeEmail}.pdf`;
      a.href = url;
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      // Update state
      setDownloadsLeft(newCount);
      
      // Update URL token with new download count
      if (token) {
        const decoded = atob(token);
        const [email, timestamp] = decoded.split('|');
        const updatedToken = btoa(`${email}|${timestamp}|${newCount}`);
        window.history.replaceState({}, '', `?token=${updatedToken}`);
      }

    } catch (err) {
      setError('❌ Download failed. Please try again.');
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
                  <span className="text-red-500 mt-0.5">⏰</span>
                  <span>Download link <strong>expires in 24 hours</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">🔢</span>
                  <span>Limited to <strong>3 downloads</strong> only.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">🔒</span>
                  <span>This PDF is <strong>watermarked</strong> with your email.</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setShowWarning(false)}
              className="w-full py-3 bg-[#1A1A1B] text-white font-semibold rounded-full hover:bg-gray-800 transition text-sm"
            >
              I Understand & Agree — Download My Book
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
            Your <strong>Voice Control Book</strong> is officially yours.
          </p>

          {/* Token Status */}
          {tokenChecked && (
            <>
              {tokenValid ? (
                <>
                  {/* Licensed to */}
                  {userEmail && (
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-lg inline-block text-sm font-medium mb-4">
                      📖 Licensed to: <strong>{userEmail}</strong>
                    </div>
                  )}

                  {/* Downloads remaining */}
                  <div className={`p-4 rounded-lg inline-block text-sm font-medium mb-6 ${
                    downloadsLeft > 1 ? 'bg-green-50 text-green-700' : 
                    downloadsLeft === 1 ? 'bg-yellow-50 text-yellow-700' : 
                    'bg-red-50 text-red-600'
                  }`}>
                    {downloadsLeft > 1 && `📥 ${downloadsLeft} downloads remaining`}
                    {downloadsLeft === 1 && '⚠️ Last download remaining!'}
                    {downloadsLeft <= 0 && '🚫 No downloads left'}
                  </div>

                  {/* Expiry Notice */}
                  <div className="p-3 bg-amber-50 text-amber-700 rounded-lg inline-block text-xs font-medium mb-6">
                    ⏰ This download link expires 24 hours after purchase
                  </div>
                </>
              ) : (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium mb-6">
                  {error || '⚠️ Unable to verify download access. Please contact support.'}
                </div>
              )}
            </>
          )}

          {/* Error display */}
          {error && tokenValid && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium mb-6">
              {error}
            </div>
          )}

          {/* DOWNLOAD BUTTON */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDownload}
              disabled={loading || !tokenValid || downloadsLeft <= 0}
              className="px-10 py-4 bg-[#1A1A1B] text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Preparing your book...
                </>
              ) : (
                <>
                  <span>⬇️</span> 
                  {downloadsLeft <= 0 ? 'Download Limit Reached' : 'Download Your Book (PDF)'}
                </>
              )}
            </button>
          </div>

          {/* Watermark notice */}
          <p className="text-gray-400 text-xs mt-6">
            🔒 This PDF is watermarked with your license information.<br/>
            <span className="text-red-400">Do not share — protected by copyright law.</span>
          </p>
        </motion.div>

        {/* 2. SECURITY FEATURES INFO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-bold text-[#1A1A1B] mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            🔐 Secure Delivery Protection
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">⏰</span>
              <p className="font-semibold mt-2">24-Hour Expiry</p>
              <p className="text-gray-500 text-xs mt-1">Link auto-expires for security</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">🔢</span>
              <p className="font-semibold mt-2">3 Downloads Max</p>
              <p className="text-gray-500 text-xs mt-1">Limited to prevent sharing</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">💧</span>
              <p className="font-semibold mt-2">Watermarked PDF</p>
              <p className="text-gray-500 text-xs mt-1">Licensed to your email</p>
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