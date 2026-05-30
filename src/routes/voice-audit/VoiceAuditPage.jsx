// src/routes/voice-audit/VoiceAuditPage.jsx
// Route: /voice-audit
// Exact match of Figma design — dark luxury theme, gold accents

import React, { useState, useEffect } from 'react';

const STRIPE_URL = 'https://buy.stripe.com/YOUR_VOICE_AUDIT_LINK'; // ← replace with actual Stripe link

// ── STICKY SIDEBAR BUTTON ─────────────────────────────────────────
function StickyButtons() {
  return (
    <div style={{
      position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)',
      zIndex: 1000, display: 'flex', flexDirection: 'column', gap: 0,
    }}>
      {[0, 1].map(i => (
        <a key={i} href={STRIPE_URL} style={{
          display: 'block', background: '#c9a96e',
          color: '#1a1a1a', fontFamily: "'Jost', sans-serif",
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em',
          textTransform: 'uppercase', padding: '12px 16px',
          textDecoration: 'none', writingMode: 'horizontal-tb',
          whiteSpace: 'nowrap', borderBottom: i === 0 ? '1px solid rgba(0,0,0,0.2)' : 'none',
        }}>
          Audit My Voice For $49 →
        </a>
      ))}
    </div>
  );
}

export default function VoiceAuditPage() {
  const [slots] = useState(10);

  useEffect(() => {
    // Load Google Font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const G = "'Cormorant Garamond', Georgia, serif";
  const J = "'Jost', 'Segoe UI', Arial, sans-serif";
  const GOLD = '#c9a96e';
  const DARK = '#0d0d0d';
  const DARK2 = '#141414';
  const DARK3 = '#1a1a1a';
  const CARD = '#1c1c1c';

  return (
    <div style={{ fontFamily: J, background: DARK, color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── STICKY SIDEBAR ── */}
      <StickyButtons />

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: DARK3, minHeight: '100vh',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Left content */}
        <div style={{ padding: 'clamp(60px,8vw,120px) clamp(40px,6vw,80px) clamp(60px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 24px' }}>
            Voice Audit
          </p>

          <h1 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 600, color: '#fff', margin: '0 0 12px', lineHeight: 1.1 }}>
            Your Voice Is
          </h1>
          <h1 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 600, margin: '0 0 32px', lineHeight: 1.1 }}>
            <span style={{ color: '#fff' }}>Costing You </span>
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Money and Respect.</span>
          </h1>

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', margin: '0 0 8px', lineHeight: 1.7 }}>
            People ignore fast, nervous talkers.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', margin: '0 0 36px', lineHeight: 1.7 }}>
            For $49, get a professional 24-hour Voice Audit<br/>
            and change how the room reacts to you.
          </p>

          <a href={STRIPE_URL} style={{
            display: 'inline-block', background: GOLD, color: '#1a1a1a',
            fontFamily: J, fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none',
            marginBottom: 24,
          }}>
            Audit My Voice For $49 →
          </a>

          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke={GOLD} strokeWidth="1.5"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke={GOLD} strokeWidth="1.5"/>
              </svg>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>100% Secure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke={GOLD} strokeWidth="1.5"/>
                <path d="M12 8v4l3 3" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>Confidential</span>
            </div>
          </div>
        </div>

        {/* Right — photo + waveform graphic */}
        <div style={{ position: 'relative', height: '100%', minHeight: '600px', overflow: 'hidden' }}>
          <img
            src="/images/audit-hero.png"
            alt="Sevil Velsha"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
          {/* Waveform overlay card */}
          <div style={{
            position: 'absolute', top: 32, right: 32,
            background: 'rgba(20,20,20,0.9)', border: '1px solid rgba(201,169,110,0.3)',
            padding: '16px 20px', backdropFilter: 'blur(8px)',
          }}>
            <p style={{ fontFamily: J, fontSize: '10px', letterSpacing: '0.15em', color: GOLD, margin: '0 0 8px', textTransform: 'uppercase' }}>
              Pitch Contour
            </p>
            {/* SVG Waveform */}
            <svg width="160" height="48" viewBox="0 0 160 48">
              <polyline
                points="0,40 15,35 25,20 35,30 45,15 55,28 65,10 75,22 85,30 95,18 105,25 115,12 125,20 135,28 145,22 160,30"
                fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
              <polyline
                points="0,44 20,42 40,44 60,40 80,43 100,41 120,44 140,42 160,44"
                fill="none" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Hz 75</span>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>300</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE PROBLEM — 3 Hidden Career Killers
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#111', padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
            × The Problem
          </p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>
            The 3 <span style={{ fontStyle: 'italic' }}>Hidden</span> Career Killers
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 60px', lineHeight: 1.7, maxWidth: 600 }}>
            Every time you open your mouth in a meeting or a presentation, people judge your competence in less than 3 seconds. You are likely losing your audience because:
          </p>

          {/* 3 Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 48 }}>
            {[
              {
                num: '1', icon: '⏱',
                title: 'You speak too fast',
                desc: 'This signals anxiety and a lack of authority.',
              },
              {
                num: '2', icon: '〰',
                title: 'Your voice lacks contrast',
                desc: 'Flat, monotone speech causes people to immediately check their phones.',
              },
              {
                num: '3', icon: '⏸',
                title: 'You skip the pauses',
                desc: 'Weak speakers rush; powerful leaders control the room with silence.',
              },
            ].map((card, i) => (
              <div key={i} style={{
                background: CARD, border: '1px solid rgba(201,169,110,0.15)',
                padding: '36px 28px',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  border: `1px solid ${GOLD}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, color: GOLD, fontSize: '20px',
                }}>
                  {card.num}
                </div>
                <h3 style={{ fontFamily: G, fontSize: '1.3rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.7 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <div style={{
            background: CARD, border: '1px solid rgba(201,169,110,0.15)',
            padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? GOLD : 'rgba(201,169,110,0.3)' }}/>
              ))}
            </div>
            <p style={{ fontFamily: G, fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              If people interrupt you or ignore your ideas, it is not your content — it is your voice.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE REALITY
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 28px' }}>
            The Reality
          </p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 12px', lineHeight: 1.2 }}>
            If People Ignore You, Interrupt You,<br/>or Forget Your Ideas…
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, fontStyle: 'italic', color: GOLD, margin: '0 0 36px', lineHeight: 1.2 }}>
            It May Be Your Voice.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 40px', lineHeight: 1.8 }}>
            Your ideas might be brilliant. Your strategy might be sound. But if your voice signals uncertainty, the room will not follow you — no matter what you say.
          </p>
          <div style={{
            background: CARD, border: `1px solid rgba(201,169,110,0.2)`,
            padding: '28px 36px', textAlign: 'left',
          }}>
            <div style={{ width: 2, height: '100%', background: GOLD, position: 'absolute' }}/>
            <p style={{ fontFamily: G, fontSize: 'clamp(1rem,2vw,1.3rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.8, borderLeft: `3px solid ${GOLD}`, paddingLeft: 24 }}>
              "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE PROCESS — 24-Hour Fix
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#111', padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
            The Process
          </p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>
            The <span style={{ color: GOLD, fontStyle: 'italic' }}>24-Hour Fix:</span> How It Works
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 0 60px', lineHeight: 1.7, maxWidth: 540 }}>
            Stop guessing how you sound. Get the exact vocal frameworks used by world leaders like <span style={{ color: GOLD }}>Steve Jobs</span> and elite <span style={{ color: GOLD }}>Shakespearean actors.</span>
          </p>

          {/* 3 Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              {
                num: '1', label: 'Step 1',
                title: 'Upload a 2-minute audio or video of you speaking.',
                detail: null,
                badge: null,
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M4 18h16v2H4v-2z" fill={GOLD}/>
                  </svg>
                ),
              },
              {
                num: '2', label: 'Step 2',
                title: 'I personally analyze your pitch, speed, pauses, and enunciation.',
                detail: ['Pitch', 'Speed', 'Pauses', 'Enunciation'],
                badge: null,
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                num: '3', label: 'Step 3',
                title: 'Within 24 hours, you get a custom video breakdown detailing your top 3 vocal flaws and 3 exact exercises to fix them.',
                detail: null,
                badge: 'Delivered Within 24 Hours',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M8 21h8M12 17v4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 10l2 2 4-4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={i} style={{ background: CARD, border: '1px solid rgba(201,169,110,0.15)', padding: '36px 28px', position: 'relative' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: GOLD, color: '#1a1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: J, fontSize: '14px', fontWeight: 700,
                  marginBottom: 24,
                }}>
                  {step.num}
                </div>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 12px' }}>
                  {step.label}
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', margin: '0 0 16px', lineHeight: 1.7 }}>
                  {step.title}
                </p>
                {step.detail && (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {step.detail.map((d, j) => (
                      <span key={j} style={{ fontSize: '11px', color: GOLD, display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD, display: 'inline-block' }}/>
                        {d}
                      </span>
                    ))}
                  </div>
                )}
                {step.badge && (
                  <div style={{ background: 'rgba(201,169,110,0.1)', border: `1px solid rgba(201,169,110,0.3)`, padding: '8px 14px', marginTop: 16, display: 'inline-block' }}>
                    <span style={{ fontSize: '11px', color: GOLD, fontWeight: 600, letterSpacing: '0.05em' }}>✓ {step.badge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SCIENTIFIC METHOD — Waveform + Analysis
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

          {/* Left — waveform graphic */}
          <div style={{ background: CARD, border: '1px solid rgba(201,169,110,0.2)', padding: '36px' }}>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', margin: '0 0 20px' }}>
              Waveform + Pitch Analysis
            </p>
            <svg width="100%" height="80" viewBox="0 0 300 80" preserveAspectRatio="none">
              <polyline points="0,60 20,40 35,55 50,25 65,45 80,15 95,35 110,50 125,20 140,38 155,28 170,45 185,18 200,35 215,50 230,25 245,40 265,30 280,45 300,35"
                fill="none" stroke={GOLD} strokeWidth="1.5"/>
              <polyline points="0,72 40,70 80,73 120,68 160,72 200,70 240,73 300,71"
                fill="none" stroke="rgba(201,169,110,0.25)" strokeWidth="1"/>
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Praat Phonetic Analysis</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Speech Rhythm & Prosody</p>
              </div>
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
              {['Hz 75', '100', '150', '250', '350'].map((v, i) => (
                <span key={i} style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)' }}>{v}</span>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
              Scientific Method
            </p>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 600, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>
              Professional Voice Analysis
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 600, fontStyle: 'italic', color: GOLD, margin: '0 0 24px', lineHeight: 1.2 }}>
              Inspired by World-Class Speakers
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: '0 0 32px', lineHeight: 1.8 }}>
              Using professional vocal analysis techniques drawn from phonetics research, I examine the same prosodic dimensions that define the most commanding voices in history.
            </p>

            {/* 4 speakers grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { name: 'Steve Jobs', desc: 'Strategic pause mastery' },
                { name: 'Barack Obama', desc: 'Rhythm & tonal authority' },
                { name: 'Globe Theatre Actors', desc: 'Shakespearean vocal presence' },
                { name: 'Christine Lagarde', desc: 'Executive gravitas & pacing' },
              ].map((s, i) => (
                <div key={i} style={{ background: CARD, border: '1px solid rgba(201,169,110,0.12)', padding: '16px' }}>
                  <p style={{ fontFamily: J, fontSize: '13px', fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{s.name}</p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT YOU GAIN — Transform
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#111', padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
            What You Gain
          </p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 56px', lineHeight: 1.2 }}>
            How Your Voice Will <span style={{ color: GOLD, fontStyle: 'italic' }}>Transform</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { title: 'Sound More Confident', desc: 'in every conversation' },
              { title: 'Stop Sounding Rushed', desc: 'and anxious' },
              { title: 'Speak With Authority', desc: 'that commands respect' },
              { title: 'Improve Executive Presence', desc: 'in boardrooms' },
              { title: 'Make People Listen', desc: 'and remember your ideas' },
              { title: 'Control Silence and Rhythm', desc: 'like a leader' },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: '1px solid rgba(201,169,110,0.12)', padding: '28px 24px', textAlign: 'left', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD, marginTop: 7, flexShrink: 0 }}/>
                <div>
                  <p style={{ fontFamily: J, fontSize: '14px', fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{item.title}</p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          URGENCY — Only 10 Slots
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {/* Warning triangle */}
          <div style={{ marginBottom: 24 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 20h20L12 2z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 9v5M12 16v1" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>
            Only <span style={{ color: GOLD, fontStyle: 'italic' }}>10 Slots</span>
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 20px', lineHeight: 1.2 }}>
            Available at $49
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 0 48px', lineHeight: 1.7 }}>
            Because this is a personalized, manual review by a professional voice coach, slots are strictly limited.
          </p>

          {/* Slots counter */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            <div style={{ background: CARD, border: '1px solid rgba(201,169,110,0.2)', padding: '24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: G, fontSize: '1.2rem', fontWeight: 700, color: GOLD }}>
                  {slots}
                </div>
                <div>
                  <p style={{ fontFamily: J, fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Spots Left</p>
                  <p style={{ fontFamily: J, fontSize: '11px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>This week's available slots</p>
                </div>
              </div>
              {/* Slot dots */}
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {Array(10).fill(0).map((_, i) => (
                  <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: i < slots ? GOLD : 'rgba(201,169,110,0.2)' }}/>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: '1px solid rgba(201,169,110,0.2)', padding: '24px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v7l4 2" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke={GOLD} strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: '0 0 4px', lineHeight: 1.5 }}>
                  Once this week's 10 spots are gone, the price
                </p>
                <p style={{ fontFamily: J, fontSize: '14px', fontWeight: 700, color: GOLD, margin: 0 }}>
                  DOUBLES TO $99
                </p>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
            Secure your $49 Voice Audit now before the slots are gone.
          </p>

          <a href={STRIPE_URL} style={{
            display: 'inline-block', background: GOLD, color: '#1a1a1a',
            fontFamily: J, fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', marginBottom: 16,
          }}>
            Audit My Voice For $49 →
          </a>

          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            100% Secure & Confidential
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#111', padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 28px' }}>
            Take Action Now
          </p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 12px', lineHeight: 1.2 }}>
            Your Voice Changes
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, fontStyle: 'italic', color: GOLD, margin: '0 0 24px', lineHeight: 1.2 }}>
            How People Treat You.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: '0 0 40px' }}>
            One investment. One conversation. Permanent transformation.
          </p>

          <a href={STRIPE_URL} style={{
            display: 'inline-block', background: GOLD, color: '#1a1a1a',
            fontFamily: J, fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', marginBottom: 16,
          }}>
            Audit My Voice For $49 →
          </a>

          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            100% Secure & Confidential
          </p>
        </div>
      </section>

    </div>
  );
}