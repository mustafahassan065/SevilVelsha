// src/routes/voice-course/VoiceFreeAccessPage.jsx
// Route: /voice-free-access
// Shown after email capture — free Lesson 1 video + PDF + buy CTA

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FREE_VIDEO = 'https://drive.google.com/file/d/1rs8qVhVz23WQlZQ7NFfsq93tB0pDBYbE/preview';
const FREE_PDF   = 'https://drive.google.com/uc?export=download&id=1LDGTUt9LijOtN7XipfrnToIaGghIFME7';
const STRIPE_URL = 'https://buy.stripe.com/test_7sYbJ00yHdM59PUaV2gIo01';

const DARK  = '#1a1a1a';
const GOLD  = '#c9a96e';
const LIGHT = '#f9f7f3';
const MUTED = '#777777';

export default function VoiceFreeAccessPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('vc_free_name');
    if (saved) setName(saved);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: LIGHT, minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        background: DARK, padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span
          onClick={() => navigate('/')}
          style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 700, letterSpacing: '0.15em', color: '#f5f4f0', cursor: 'pointer' }}
        >
          Sevil Velsha
        </span>
        <a href={STRIPE_URL} style={{
          background: GOLD, color: DARK,
          fontFamily: 'inherit', fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          padding: '10px 24px', textDecoration: 'none',
        }}>
          Unlock Full Course
        </a>
      </nav>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(40px,6vw,72px) 24px' }}>

        {/* Welcome */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '0 0 12px' }}>
          Your Free Access
        </p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: DARK, margin: '0 0 12px', lineHeight: 1.2 }}>
          {name ? `Welcome, ${name}.` : 'Welcome.'}
        </h1>
        <p style={{ fontSize: '15px', color: MUTED, margin: '0 0 48px', lineHeight: 1.7 }}>
          Your first Voice Control training is ready. Watch the video below and download your free PDF guide.
        </p>

        {/* FREE VIDEO */}
        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, margin: '0 0 14px' }}>
            Lesson 1 — Free Training Video
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontWeight: 700, color: DARK, margin: '0 0 16px' }}>
            The One Breathing Technique That Calms & Empowers
          </p>
          <div style={{
            width: '100%', aspectRatio: '16/9',
            background: DARK, borderRadius: 4, overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)', marginBottom: 12,
          }}>
            <iframe
              src={FREE_VIDEO}
              title="Free Lesson 1"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p style={{ fontSize: '12px', color: '#aaa', margin: '0 0 36px' }}>
            💡 Click to play. Opens in Google Drive for full quality.
          </p>
        </div>

        {/* FREE PDF */}
        <div style={{
          background: '#fff', border: `1.5px solid ${GOLD}`,
          padding: '28px 32px', marginBottom: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, margin: '0 0 6px' }}>
              Free PDF Guide
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: 700, color: DARK, margin: 0 }}>
              Breathing Workbook — Lesson 1
            </p>
          </div>
          <a
            href={FREE_PDF}
            download="Lesson-1-Breathing-Workbook.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              background: DARK, color: '#fff',
              fontFamily: 'inherit', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '12px 28px', textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            ↓ Download PDF
          </a>
        </div>

        {/* DIVIDER */}
        <div style={{ width: 40, height: 2, background: GOLD, margin: '0 auto 48px' }}/>

        {/* BUY CTA */}
        <div style={{ background: DARK, padding: 'clamp(32px,5vw,52px)', textAlign: 'center', marginBottom: 32 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '0 0 12px' }}>
            Ready to go deeper?
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#fff', margin: '0 0 16px', lineHeight: 1.3 }}>
            Unlock the Full Voice Control Course
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', margin: '0 0 28px', lineHeight: 1.7, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
            8 complete lessons, PDF workbooks, certification, and lifetime access.
            Transform the way you speak — permanently.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
            <a href={STRIPE_URL} style={{
              background: GOLD, color: DARK,
              fontFamily: 'inherit', fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '16px 40px', textDecoration: 'none',
            }}>
              Start the Full Course — $99
            </a>
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            30-day guarantee · Instant access · Lifetime availability
          </p>
        </div>

        {/* What's inside */}
        <div style={{ background: '#fff', border: '1px solid #e8e4dc', padding: '32px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
            What You Get in the Full Course
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 12 }}>
            {[
              '8 complete video lessons',
              '8 PDF workbooks',
              'Pitch, Pause & Pace mastery',
              'Clarity & articulation drills',
              'Vocal emotion techniques',
              'Performance & presence training',
              '30-Day Voice Power Plan',
              'Certified completion credential',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: '14px', color: DARK, margin: 0, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}