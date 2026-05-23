import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
// ✅ CORRECT for react-pdf v7+:
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// ✅ FIXED: Local worker — no CDN, no build errors
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function ThankYouBook() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showReader, setShowReader] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  // Google Drive / OneDrive PDF Direct Download Link
  const PDF_URL = "https://onedrive.live.com/download?resid=B50E8C0124805CA3%21s21a92ce04e464ae684e247c1296fbc21&authkey=!AKeE4kjq3QjR5V8&em=2";

  // Page load hote hi top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
            <h2 className="text-2xl font-bold text-red-600 mb-3 font-garamond">
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
          <h1 className="text-3xl md:text-4xl font-garamond font-bold text-[#1A1A1B] mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Your <strong>Voice Control Book</strong> is officially yours. Access it below or check your email.
          </p>
          <div className="p-4 bg-blue-50 text-blue-800 rounded-lg inline-block text-sm font-medium mb-6">
            📬 We also sent the PDF & your first voice lesson to your email. Check spam folder if not found.
          </div>

          {/* BUTTON GROUP: Read Online + Download */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* READ ONLINE BUTTON */}
            <button 
              onClick={() => setShowReader(!showReader)}
              className="px-8 py-3 bg-[#1A1A1B] text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >
              <span>📖</span> {showReader ? 'Hide Reader' : 'Read Online'}
            </button>

            {/* DOWNLOAD BUTTON */}
            <a 
              href={PDF_URL}
              download
              className="px-8 py-3 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              <span>⬇️</span> Download Book (PDF)
            </a>
          </div>

          <p className="text-gray-400 text-xs mt-4">
            ⚠️ Remember: This book is for your personal use only. Do not share with others.
          </p>
        </motion.div>

        {/* 2. PDF EMBED READER (Toggle show/hide) */}
        {showReader && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h3 className="text-xl font-garamond font-bold text-[#1A1A1B]">
                📖 Voice Control Book
              </h3>
              
              {/* Page Navigation */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold disabled:opacity-50 hover:bg-gray-200 transition"
                >
                  ← Prev
                </button>
                <span className="text-sm text-gray-600 font-medium">
                  Page {pageNumber} of {numPages || '...'}
                </span>
                <button 
                  onClick={() => setPageNumber(prev => (numPages ? Math.min(prev + 1, numPages) : prev + 1))}
                  disabled={numPages && pageNumber >= numPages}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold disabled:opacity-50 hover:bg-gray-200 transition"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* PDF Document Display */}
            <div className="flex justify-center border-2 border-gray-200 rounded-xl p-4 bg-gray-50 min-h-[500px]">
              <Document
                file={PDF_URL}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex items-center justify-center h-[500px]">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-[#C2B280] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-500">Loading your book...</p>
                    </div>
                  </div>
                }
                error={
                  <div className="flex items-center justify-center h-[500px] text-center">
                    <div>
                      <p className="text-red-500 text-lg mb-2">⚠️ Unable to load PDF</p>
                      <p className="text-gray-500 text-sm mb-4">Please use the download button above to get your book.</p>
                      <a 
                        href={PDF_URL}
                        download
                        className="text-blue-600 underline text-sm"
                      >
                        Click here to download directly
                      </a>
                    </div>
                  </div>
                }
              >
                <Page 
                  pageNumber={pageNumber} 
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="shadow-md"
                  width={600}
                />
              </Document>
            </div>

            {/* Quick jump info */}
            <p className="text-center text-gray-400 text-xs mt-4">
              💡 Tip: Use Prev/Next buttons to navigate. You can also download the PDF for offline reading.
            </p>
          </motion.div>
        )}

        {/* 3. COPYRIGHT REMINDER BANNER */}
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

        {/* 4. UPSELL BLOCK (THE MONEY MAKER) */}
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
          <h2 className="text-2xl md:text-4xl font-garamond font-semibold text-white mb-4">
            Get the Full Video Course
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Don't just read about it. Watch real examples, do the exact speaking drills, and master your authority presence faster with the complete video course.
          </p>
          
          {/* UPSELL STRIPE LINK */}
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-transparent border-2 border-gray-200 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-garamond font-bold text-[#1A1A1B] mb-2">
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