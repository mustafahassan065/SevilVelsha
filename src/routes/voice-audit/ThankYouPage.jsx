// src/routes/voice-audit/ThankYouPage.jsx
// Route: /voice-audit/thank-you
// Stripe success_url should point here, e.g.:
//   https://yoursite.com/voice-audit/thank-you?session_id={CHECKOUT_SESSION_ID}
//
// This page lets the customer upload their recording + email after paying.
// It POSTs to your backend (see /server folder) which emails the admin.

import React, { useState, useEffect } from 'react';

const API_URL = 'https://sevil-velsha-backend-main.vercel.app/api/submit-audit';

export default function ThankYouPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const G = "'Cormorant Garamond', Georgia, serif";
  const J = "'Jost', 'Segoe UI', Arial, sans-serif";
  const GOLD = '#C9A84C';
  const DARK = '#0a0a0a';
  const CARD = '#161616';
  const CARD_BORDER = 'rgba(201,169,110,0.15)';

  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | uploading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // Get session_id from URL (Stripe redirect)
  const sessionId = new URLSearchParams(window.location.search).get('session_id') || '';

  const MAX_DURATION = 120; // 2 minutes in seconds

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFileError('');
    setFile(null);
    if (!f) return;

    if (!f.type.startsWith('audio/') && !f.type.startsWith('video/')) {
      setFileError('Please upload an audio or video file.');
      return;
    }

    // Check duration (works for most browsers)
    const url = URL.createObjectURL(f);
    const media = document.createElement(f.type.startsWith('video/') ? 'video' : 'audio');
    media.preload = 'metadata';
    media.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      if (media.duration > MAX_DURATION) {
        setFileError(`File is ${Math.round(media.duration)}s. Please keep it under 2 minutes.`);
      } else {
        setFile(f);
      }
    };
    media.src = url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please enter your email address.');
      return;
    }
    if (!file) {
      setErrorMsg('Please upload your recording.');
      return;
    }
    setErrorMsg('');
    setStatus('uploading');

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('sessionId', sessionId);
      formData.append('audio', file);

      const res = await fetch(API_URL, { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Upload failed');

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong while uploading. Please try again or email us directly.');
    }
  };

  const inputStyle = {
    width: '100%',
    background: '#0d0d0d',
    border: `1px solid ${CARD_BORDER}`,
    color: '#fff',
    fontFamily: J,
    fontSize: '14px',
    padding: '14px 16px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ fontFamily: J, background: DARK, color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(40px,6vw,80px) 20px' }}>
      <div style={{ maxWidth: 560, width: '100%' }}>

        {/* Payment confirmation */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke={GOLD} strokeWidth="1.5"/>
              <path d="M8 12.5l2.5 2.5L16 9" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 12px' }}>
            Payment Successful
          </p>
          <h1 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: '#fff', margin: '0 0 12px', lineHeight: 1.2 }}>
            Thank You for Your Order
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.7 }}>
            One last step — upload your recording below so we can begin your Voice Audit.
          </p>
        </div>

        {status === 'success' ? (
          // Confirmation message
          <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 32px', textAlign: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 16px', display: 'block' }}>
              <circle cx="12" cy="12" r="10" stroke={GOLD} strokeWidth="1.5"/>
              <path d="M8 12.5l2.5 2.5L16 9" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontFamily: G, fontSize: '1.3rem', fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>
              Your Voice Audit has been received.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.7 }}>
              You will receive your personalized video feedback within 24 hours.
            </p>
          </div>
        ) : (
          // Upload form
          <form onSubmit={handleSubmit} style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '32px' }}>
            <label style={{ display: 'block', fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>
              Your Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ ...inputStyle, marginBottom: 24 }}
            />

            <label style={{ display: 'block', fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>
              Upload Recording (max 2 minutes)
            </label>
            <div style={{ border: `1px dashed rgba(201,168,76,0.35)`, padding: '24px', textAlign: 'center', marginBottom: 8 }}>
              <input
                type="file"
                accept="audio/*,video/*"
                onChange={handleFileChange}
                style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', width: '100%' }}
              />
              {file && (
                <p style={{ fontSize: '12px', color: GOLD, margin: '12px 0 0' }}>
                  ✓ {file.name} ready to upload
                </p>
              )}
            </div>
            {fileError && (
              <p style={{ fontSize: '12px', color: '#e07a7a', margin: '0 0 16px' }}>{fileError}</p>
            )}
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '0 0 28px' }}>
              Accepted formats: MP3, WAV, M4A, MP4, MOV. Recordings longer than 2 minutes will be rejected.
            </p>

            {errorMsg && (
              <p style={{ fontSize: '13px', color: '#e07a7a', margin: '0 0 16px' }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'uploading'}
              style={{
                width: '100%', background: GOLD, color: '#111',
                fontFamily: J, fontSize: '13px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                padding: '18px', border: 'none', cursor: 'pointer',
                opacity: status === 'uploading' ? 0.6 : 1,
              }}
            >
              {status === 'uploading' ? 'Uploading…' : 'Submit My Recording'}
            </button>
          </form>
        )}

        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 24 }}>
          100% Confidential — your recording is only used for your personal audit.
        </p>
      </div>
    </div>
  );
}