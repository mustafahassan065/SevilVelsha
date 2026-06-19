// src/routes/voice-audit/FreeVoiceCheckPage.jsx
// Route: /free-voice-check
// Free Voice Check — user uploads 30-sec recording, admin gets email via Resend

import React, { useState, useEffect } from 'react';

const API_URL = 'https://sevil-velsha-backend-main.vercel.app/api/free-voice-check';

export default function FreeVoiceCheckPage() {
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
  const DARK2 = '#111111';
  const CARD = '#161616';
  const CARD_BORDER = 'rgba(201,169,110,0.15)';

  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [file, setFile]       = useState(null);
  const [fileError, setFileError] = useState('');
  const [status, setStatus]   = useState('idle'); // idle | uploading | success | error
  const [errorMsg, setErrorMsg]   = useState('');

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFileError('');
    setFile(null);
    if (!f) return;
    if (!f.type.startsWith('audio/') && !f.type.startsWith('video/')) {
      setFileError('Please upload an audio or video file.');
      return;
    }
    setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name)  { setErrorMsg('Please enter your name.');          return; }
    if (!email) { setErrorMsg('Please enter your email address.'); return; }
    if (!file)  { setErrorMsg('Please upload your recording.');    return; }
    setErrorMsg('');
    setStatus('uploading');

    try {
      const formData = new FormData();
      formData.append('name',  name);
      formData.append('email', email);
      formData.append('audio', file);

      const res = await fetch(API_URL, { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Upload failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  const CheckIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 12l5 5L20 7" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const inputStyle = {
    width: '100%', background: '#0d0d0d',
    border: `1px solid ${CARD_BORDER}`,
    color: '#fff', fontFamily: J, fontSize: '14px',
    padding: '14px 16px', outline: 'none', boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block', fontFamily: J, fontSize: '11px', fontWeight: 700,
    letterSpacing: '0.15em', textTransform: 'uppercase',
    color: GOLD, marginBottom: 10,
  };

  return (
    <div style={{ fontFamily: J, background: DARK, color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Hero ── */}
      <section style={{ background: DARK2, padding: 'clamp(60px,8vw,100px) clamp(24px,5vw,80px) 0', textAlign: 'center' }}>
        <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
          Free Voice Check
        </p>
        <h1 style={{ fontFamily: G, fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 700, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 }}>
          Discover How Your
        </h1>
        <h1 style={{ fontFamily: G, fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 700, color: GOLD, fontStyle: 'italic', margin: '0 0 24px', lineHeight: 1.1 }}>
          Voice Really Sounds
        </h1>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.8 }}>
          Submit a 30-second voice sample and receive a FREE personal Voice Check within 24 hours — no obligation, no sales pressure.
        </p>
        {/* 4 benefits */}
        <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 10, textAlign: 'left', marginBottom: 48 }}>
          {['One Voice Strength', 'One Area for Improvement', 'One Practical Tip', 'Personalized Feedback Within 24 Hours'].map((item, i) => (
            <span key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <CheckIcon />{item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ background: DARK2, padding: '0 clamp(24px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>

          {status === 'success' ? (
            // ── Success state ──
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '48px 36px', textAlign: 'center' }}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 20px', display: 'block' }}>
                <circle cx="12" cy="12" r="10" stroke={GOLD} strokeWidth="1.5"/>
                <path d="M8 12.5l2.5 2.5L16 9" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 style={{ fontFamily: G, fontSize: '1.6rem', fontWeight: 700, color: '#fff', margin: '0 0 14px' }}>
                Your Voice Check has been received.
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: '0 0 40px', lineHeight: 1.75 }}>
                You will receive your personalized feedback within 24 hours.
              </p>

              {/* Follow-up funnel */}
              <div style={{ borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 36 }}>
                <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
                  Want to go deeper?
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {/* $49 audit */}
                  <a href="/voice-audit" style={{
                    display: 'block', background: GOLD, color: '#111',
                    fontFamily: J, fontSize: '12px', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '16px 24px', textDecoration: 'none', textAlign: 'center',
                  }}>
                    Get Complete Voice Audit — $49 →
                  </a>
                  {/* Voice Course */}
                  <a href="/voice-control-course" style={{
                    display: 'block', background: 'transparent', color: GOLD,
                    fontFamily: J, fontSize: '12px', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '16px 24px', textDecoration: 'none', textAlign: 'center',
                    border: `1px solid ${GOLD}`,
                  }}>
                    Explore Voice Control Course →
                  </a>
                  {/* Coaching */}
                  <a href="/voice-control-coaching" style={{
                    display: 'block', background: 'transparent', color: 'rgba(255,255,255,0.5)',
                    fontFamily: J, fontSize: '12px', fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '14px 24px', textDecoration: 'none', textAlign: 'center',
                    border: `1px solid rgba(255,255,255,0.1)`,
                  }}>
                    Learn About 1-on-1 Coaching →
                  </a>
                </div>
              </div>
            </div>
          ) : (
            // ── Upload form ──
            <form onSubmit={handleSubmit} style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 32px' }}>
              <p style={{ fontFamily: G, fontSize: '1.2rem', fontWeight: 600, color: '#fff', margin: '0 0 28px' }}>
                Submit Your 30-Second Recording
              </p>

              {/* Name */}
              <label style={labelStyle}>Your Name</label>
              <input
                type="text" required placeholder="Your full name"
                value={name} onChange={(e) => setName(e.target.value)}
                style={{ ...inputStyle, marginBottom: 20 }}
              />

              {/* Email */}
              <label style={labelStyle}>Your Email</label>
              <input
                type="email" required placeholder="you@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
                style={{ ...inputStyle, marginBottom: 24 }}
              />

              {/* File upload */}
              <label style={labelStyle}>Upload Your Recording</label>
              <div style={{ border: `1px dashed rgba(201,168,76,0.3)`, padding: '24px', textAlign: 'center', marginBottom: 8, background: 'rgba(201,168,76,0.03)' }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 12px', lineHeight: 1.6 }}>
                  Record an introduction of yourself and upload the audio file.
                </p>
                <input
                  type="file" accept="audio/*,video/*"
                  onChange={handleFileChange}
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', width: '100%' }}
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
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: '0 0 28px' }}>
                Accepted formats: MP3, WAV, M4A, MP4, MOV, WEBM
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
                  padding: '18px', border: 'none', cursor: status === 'uploading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'uploading' ? 0.6 : 1,
                }}
              >
                {status === 'uploading' ? 'Submitting…' : 'GET MY FREE VOICE CHECK →'}
              </button>

              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: 16 }}>
                No obligation. No sales pressure. 100% Confidential.
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}