// src/routes/voice-audit/VoiceAuditPage.jsx
// Route: /voice-audit
// Pixel-perfect match of Figma design — dark luxury theme, gold accents

import React, { useState, useEffect } from 'react';

const STRIPE_URL = 'https://buy.stripe.com/YOUR_VOICE_AUDIT_LINK'; // ← replace with actual Stripe link

export default function VoiceAuditPage() {
  const [slots] = useState(10);

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

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 12l5 5L20 7" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SectionLabel = ({ children }) => (
    <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
      {children}
    </p>
  );

  const CtaButton = ({ children, style = {} }) => (
    <a href={STRIPE_URL} style={{ display: 'inline-block', background: GOLD, color: '#1a1a1a', fontFamily: J, fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', ...style }}>
      {children}
    </a>
  );

  // Fixed waveform bars — static values so they never re-randomize
  const waveBarHeights = [8, 14, 6, 18, 10, 22, 7, 15, 12, 20, 9, 17, 11, 19, 8, 13, 16, 10, 18, 14];
  const waveBarY = waveBarHeights.map(h => 15 - h / 2);

  const stepWaveBarHeights = [6, 12, 5, 15, 8, 18, 6, 13, 10, 17, 7, 14, 9, 16, 7, 11, 14, 8, 16, 12, 5, 14, 9, 18, 7, 13, 11, 17, 6, 12];
  const stepWaveBarY = stepWaveBarHeights.map(h => 15 - h / 2);

  return (
    <div style={{ fontFamily: J, background: DARK, color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ padding: 'clamp(60px,8vw,120px) clamp(40px,6vw,80px) clamp(60px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 24px' }}>
            Voice Audit
          </p>
          <h1 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 }}>
            People Judge Your
          </h1>
          <h1 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 600, color: GOLD, fontStyle: 'italic', margin: '0 0 4px', lineHeight: 1.1 }}>
            Voice
          </h1>
          <h1 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 600, color: '#fff', margin: '0 0 32px', lineHeight: 1.1 }}>
            Before Your Ideas
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 6px', lineHeight: 1.7, fontStyle: 'italic' }}>
            Most people spend years improving their skills. Few ever improve the
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 6px', lineHeight: 1.7, fontStyle: 'italic' }}>
            voice that delivers those skills.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 6px', lineHeight: 1.7 }}>
            People ignore fast, nervous talkers.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 36px', lineHeight: 1.7 }}>
            For <span style={{ color: GOLD, fontWeight: 600 }}>$49</span>, get a professional <span style={{ color: GOLD, fontWeight: 600 }}>24-hour Voice Audit</span><br/>
            and change how the room reacts to you.
          </p>
          <CtaButton style={{ marginBottom: 28 }}>
            GET MY PERSONAL VOICE REPORT →
          </CtaButton>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckIcon />
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>Personally Reviewed by Sevil Velsha</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckIcon />
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>Not AI Generated</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckIcon />
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>Delivered Within 24 Hours</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckIcon />
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>100% Confidential</span>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', height: '100%', minHeight: '600px', overflow: 'hidden', background: DARK2 }}>
          <img src="/images/audit-hero.png" alt="Sevil Velsha" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
          <div style={{ position: 'absolute', top: 32, right: 32, background: 'rgba(20,20,20,0.92)', border: '1px solid rgba(201,168,76,0.25)', padding: '20px 24px', backdropFilter: 'blur(8px)' }}>
            <p style={{ fontFamily: J, fontSize: '10px', letterSpacing: '0.15em', color: GOLD, margin: '0 0 16px', textTransform: 'uppercase' }}>
              Waveform + Pitch Analysis
            </p>
            <svg width="200" height="60" viewBox="0 0 200 60" style={{ display: 'block', marginBottom: 8 }}>
              <polyline points="0,50 15,45 30,30 45,40 60,20 75,35 90,15 105,28 120,38 135,22 150,32 165,18 180,28 195,35" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>75 Hz</span>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>350</span>
            </div>
            <svg width="200" height="40" viewBox="0 0 200 40" style={{ display: 'block' }}>
              <polyline points="0,20 10,18 20,22 30,15 40,25 50,12 60,28 70,16 80,24 90,14 100,26 110,18 120,22 130,16 140,24 150,20 160,18 170,22 180,16 190,20 200,18" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1"/>
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Amplitude</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE PROBLEM — 3 Hidden Career Killers
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>× The Problem</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.15 }}>
            The 3 <span style={{ color: GOLD, fontStyle: 'italic' }}>Hidden</span> Career Killers
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 0 60px', lineHeight: 1.7, maxWidth: 600 }}>
            Every time you open your mouth in a meeting or a presentation, people judge your competence in <span style={{ color: GOLD }}>less than 3 seconds</span>. You are likely losing your audience because:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 40 }}>
            {/* Card 1 — Clock icon (You Speak Too Fast) */}
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '40px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', fontFamily: G, fontSize: '5rem', fontWeight: 700, color: 'rgba(201,169,110,0.06)', lineHeight: 1, zIndex: 0, whiteSpace: 'nowrap' }}>01</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid rgba(201,168,76,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  {/* Clock icon — matches PDF card 01 */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M12 7v5l3 3" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${GOLD}`, color: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: '14px', fontWeight: 700, margin: '0 auto 16px' }}>01</div>
                <h3 style={{ fontFamily: G, fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>You Speak Too Fast</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.7 }}>
                  This signals anxiety and a complete lack of authority. Listeners disengage before you finish your first sentence.
                </p>
              </div>
            </div>

            {/* Card 2 — Wave icon (Your Voice Lacks Contrast) */}
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '40px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', fontFamily: G, fontSize: '5rem', fontWeight: 700, color: 'rgba(201,169,110,0.06)', lineHeight: 1, zIndex: 0, whiteSpace: 'nowrap' }}>02</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid rgba(201,168,76,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  {/* Wave / sine icon */}
                  <svg width="22" height="14" viewBox="0 0 32 14" fill="none">
                    <path d="M0 7 C4 0, 8 0, 12 7 C16 14, 20 14, 24 7 C28 0, 32 0, 32 7" stroke={GOLD} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${GOLD}`, color: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: '14px', fontWeight: 700, margin: '0 auto 16px' }}>02</div>
                <h3 style={{ fontFamily: G, fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Your Voice Lacks Contrast</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.7 }}>
                  Flat, monotone speech causes people to immediately check their phones. Without pitch variety, your message disappears.
                </p>
              </div>
            </div>

            {/* Card 3 — Pause bars icon (You Skip the Pauses) */}
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '40px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', fontFamily: G, fontSize: '5rem', fontWeight: 700, color: 'rgba(201,169,110,0.06)', lineHeight: 1, zIndex: 0, whiteSpace: 'nowrap' }}>03</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid rgba(201,168,76,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  {/* Pause icon — two vertical bars */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="4" width="4" height="16" rx="1" stroke={GOLD} strokeWidth="1.5"/>
                    <rect x="14" y="4" width="4" height="16" rx="1" stroke={GOLD} strokeWidth="1.5"/>
                  </svg>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${GOLD}`, color: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: '14px', fontWeight: 700, margin: '0 auto 16px' }}>03</div>
                <h3 style={{ fontFamily: G, fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>You Skip the Pauses</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.7 }}>
                  Weak speakers rush; powerful leaders control the room with silence. Strategic pauses signal authority.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom quote bar — three eyes / ellipsis icon from PDF */}
          <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flexShrink: 0 }}>
              <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_eyes)">
                  <path d="M8.0003 20.9938C11.8651 20.9938 14.9981 17.8607 14.9981 13.996C14.9981 10.1312 11.8651 6.99817 8.0003 6.99817C4.13552 6.99817 1.0025 10.1312 1.0025 13.996C1.0025 17.8607 4.13552 20.9938 8.0003 20.9938Z" stroke={GOLD} strokeWidth="1.49959"/>
                  <path d="M18.9973 20.9938C22.8621 20.9938 25.9951 17.8607 25.9951 13.996C25.9951 10.1312 22.8621 6.99817 18.9973 6.99817C15.1325 6.99817 11.9995 10.1312 11.9995 13.996C11.9995 17.8607 15.1325 20.9938 18.9973 20.9938Z" stroke={GOLD} strokeWidth="1.49959"/>
                  <path d="M29.9943 20.9938C33.8591 20.9938 36.9921 17.8607 36.9921 13.996C36.9921 10.1312 33.8591 6.99817 29.9943 6.99817C26.1296 6.99817 22.9965 10.1312 22.9965 13.996C22.9965 17.8607 26.1296 20.9938 29.9943 20.9938Z" stroke={GOLD} strokeWidth="1.49959"/>
                </g>
                <defs><clipPath id="clip0_eyes"><rect width="37.9953" height="27.9923" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <p style={{ fontFamily: G, fontSize: '1.05rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              If people interrupt you or ignore your ideas, <span style={{ color: GOLD }}>it is not your content — it is your voice.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE REALITY
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <SectionLabel>The Reality</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
            If People Ignore You, Interrupt You,
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
            or Forget Your Ideas…
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: GOLD, margin: '0 0 36px', lineHeight: 1.15 }}>
            It May Be Your Voice.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 0 40px', lineHeight: 1.8 }}>
            Your ideas might be brilliant. Your strategy might be sound. But if your voice signals uncertainty, the room will not follow you — no matter what you say.
          </p>

          {/* Voice Signal / Pitch Range / Pause Control — static fixed SVGs matching PDF */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 40 }}>
            {/* Voice Signal — bar chart style */}
            <div style={{ textAlign: 'center' }}>
              <svg width="40" height="30" viewBox="0 0 40 30" style={{ margin: '0 auto 8px', display: 'block' }}>
                <rect x="0"  y="18" width="2.5" height="12" fill={GOLD} opacity="0.8"/>
                <rect x="4"  y="10" width="2.5" height="20" fill={GOLD} opacity="0.8"/>
                <rect x="8"  y="20" width="2.5" height="10" fill={GOLD} opacity="0.8"/>
                <rect x="12" y="6"  width="2.5" height="24" fill={GOLD} opacity="0.8"/>
                <rect x="16" y="14" width="2.5" height="16" fill={GOLD} opacity="0.8"/>
                <rect x="20" y="4"  width="2.5" height="26" fill={GOLD} opacity="0.8"/>
                <rect x="24" y="16" width="2.5" height="14" fill={GOLD} opacity="0.8"/>
                <rect x="28" y="8"  width="2.5" height="22" fill={GOLD} opacity="0.8"/>
                <rect x="32" y="12" width="2.5" height="18" fill={GOLD} opacity="0.8"/>
                <rect x="36" y="18" width="2.5" height="12" fill={GOLD} opacity="0.8"/>
              </svg>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>Voice Signal</p>
            </div>
            {/* Pitch Range — line chart */}
            <div style={{ textAlign: 'center' }}>
              <svg width="40" height="30" viewBox="0 0 40 30" style={{ margin: '0 auto 8px', display: 'block' }}>
                <polyline points="0,25 8,20 16,10 24,18 32,8 40,15" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>Pitch Range</p>
            </div>
            {/* Pause Control — line with PAUSE label */}
            <div style={{ textAlign: 'center' }}>
              <svg width="40" height="30" viewBox="0 0 40 30" style={{ margin: '0 auto 8px', display: 'block' }}>
                <polyline points="0,15 6,12 12,18 18,10 24,16 30,8 36,14 40,12" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
                <text x="10" y="8" fill={GOLD} fontSize="5" opacity="0.8" fontFamily="sans-serif">PAUSE</text>
              </svg>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>Pause Control</p>
            </div>
          </div>

          <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px 36px', textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
            <p style={{ fontFamily: G, fontSize: 'clamp(1rem,2vw,1.25rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.8, borderLeft: `3px solid ${GOLD}`, paddingLeft: 24 }}>
              "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
            </p>
            <p style={{ fontFamily: J, fontSize: '11px', color: GOLD, margin: '12px 0 0 27px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              — Sevil Velsha, Voice Control
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DISCOVER CTA
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: '40px clamp(40px,6vw,80px)', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
          Discover How Your Voice Is Affecting Your Authority
        </p>
        <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE PROCESS — 24-Hour Fix
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>The Process</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.15 }}>
            The <span style={{ color: GOLD, fontStyle: 'italic' }}>24-Hour Fix:</span> How It Works
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: '0 0 60px', lineHeight: 1.7, maxWidth: 540 }}>
            Stop guessing how you sound. Get the exact vocal frameworks used by world leaders like <span style={{ color: GOLD }}>Steve Jobs</span> and elite <span style={{ color: GOLD }}>Shakespearean actors.</span>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {/* Step 1 — waveform bars */}
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', fontFamily: G, fontSize: '5rem', fontWeight: 700, color: 'rgba(201,169,110,0.06)', lineHeight: 1, zIndex: 0, whiteSpace: 'nowrap' }}>01</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>Step 1</p>
                <div style={{ marginBottom: 20 }}>
                  {/* Fixed static waveform */}
                  <svg width="80" height="30" viewBox="0 0 80 30" style={{ margin: '0 auto', display: 'block' }}>
                    <rect x="0"  y="14" width="3" height="10" fill={GOLD} opacity="0.7"/>
                    <rect x="5"  y="8"  width="3" height="20" fill={GOLD} opacity="0.7"/>
                    <rect x="10" y="17" width="3" height="8"  fill={GOLD} opacity="0.7"/>
                    <rect x="15" y="5"  width="3" height="22" fill={GOLD} opacity="0.7"/>
                    <rect x="20" y="12" width="3" height="14" fill={GOLD} opacity="0.7"/>
                    <rect x="25" y="3"  width="3" height="24" fill={GOLD} opacity="0.7"/>
                    <rect x="30" y="14" width="3" height="10" fill={GOLD} opacity="0.7"/>
                    <rect x="35" y="8"  width="3" height="18" fill={GOLD} opacity="0.7"/>
                    <rect x="40" y="11" width="3" height="14" fill={GOLD} opacity="0.7"/>
                    <rect x="45" y="4"  width="3" height="22" fill={GOLD} opacity="0.7"/>
                    <rect x="50" y="9"  width="3" height="16" fill={GOLD} opacity="0.7"/>
                    <rect x="55" y="14" width="3" height="10" fill={GOLD} opacity="0.7"/>
                    <rect x="60" y="6"  width="3" height="20" fill={GOLD} opacity="0.7"/>
                    <rect x="65" y="13" width="3" height="12" fill={GOLD} opacity="0.7"/>
                    <rect x="70" y="7"  width="3" height="18" fill={GOLD} opacity="0.7"/>
                    <rect x="75" y="11" width="3" height="14" fill={GOLD} opacity="0.7"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Send Your Recording</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '0 0 20px', lineHeight: 1.7 }}>
                  Upload a <span style={{ color: GOLD, fontWeight: 600 }}>2-minute</span> audio or video of you speaking in a meeting, presentation, or conversation.
                </p>
              </div>
            </div>

            {/* Step 2 — pitch line chart */}
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', fontFamily: G, fontSize: '5rem', fontWeight: 700, color: 'rgba(201,169,110,0.06)', lineHeight: 1, zIndex: 0, whiteSpace: 'nowrap' }}>02</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>Step 2</p>
                <div style={{ marginBottom: 20 }}>
                  <svg width="80" height="40" viewBox="0 0 80 40" style={{ margin: '0 auto', display: 'block' }}>
                    <polyline points="0,35 10,30 20,20 30,25 40,15 50,22 60,12 70,18 80,15" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
                    <line x1="0" y1="38" x2="80" y2="38" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" strokeDasharray="2 2"/>
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
                    <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)' }}>0</span>
                    <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)' }}>1</span>
                    <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)' }}>2</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Personal Expert Analysis</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '0 0 20px', lineHeight: 1.7 }}>
                  I <span style={{ color: GOLD }}>personally analyze</span> your pitch, speed, pauses, and enunciation using acoustic voice research methods.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px', textAlign: 'left', padding: '0 10px' }}>
                  {['PITCH VARIETY', 'SPEAKING SPEED', 'PAUSE PLACEMENT', 'VOCAL AUTHORITY', 'CLARITY', 'VOCAL PRESENCE'].map((d, j) => (
                    <span key={j} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckIcon />{d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 — report card */}
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', fontFamily: G, fontSize: '5rem', fontWeight: 700, color: 'rgba(201,169,110,0.06)', lineHeight: 1, zIndex: 0, whiteSpace: 'nowrap' }}>03</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>Step 3</p>
                <h3 style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Your Voice Audit Report</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '0 0 20px', lineHeight: 1.7 }}>
                  Within <span style={{ color: GOLD, fontWeight: 600 }}>24 hours</span>, you get a custom video breakdown detailing your top 3 vocal flaws and 3 exact exercises to fix them.
                </p>
                <div style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid rgba(201,168,76,0.25)`, padding: '16px', textAlign: 'left', marginBottom: 12 }}>
                  <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, color: GOLD, margin: '0 0 12px', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
                    VOICE ANALYSIS REPORT
                  </p>
                  {[
                    { label: 'Authority Score', value: '78%', pct: 78 },
                    { label: 'Pitch Variety',   value: '62%', pct: 62 },
                    { label: 'Speaking Pace',   value: '45%', pct: 45 },
                    { label: 'Pause Control',   value: '38%', pct: 38 },
                    { label: 'Clarity',         value: '85%', pct: 85 },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 60, height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                          <div style={{ width: `${item.pct}%`, height: 4, background: GOLD, borderRadius: 2 }} />
                        </div>
                        <span style={{ fontSize: '10px', color: GOLD, fontWeight: 600, minWidth: 28 }}>{item.value}</span>
                      </div>
                    </div>
                  ))}
                  <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', margin: '8px 0 0', textAlign: 'center', letterSpacing: '0.05em' }}>
                    TOP 3 IMPROVEMENTS + CUSTOM EXERCISES INCLUDED
                  </p>
                </div>
                <div style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid rgba(201,168,76,0.25)`, padding: '8px 14px', display: 'inline-block' }}>
                  <span style={{ fontSize: '10px', color: GOLD, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    ✓ Delivered Within 24 Hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px', fontStyle: 'italic' }}>
              Based on acoustic speech analysis and decades of communication research.
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: '0 0 32px', fontStyle: 'italic' }}>
              Inspired by techniques observed in world-class communicators, leaders, and Shakespearean actors.
            </p>
            <h3 style={{ fontFamily: G, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 600, color: '#fff', margin: '0 0 24px' }}>
              Ready to Discover What Your Voice Is Communicating?
            </h3>
            <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SCIENTIFIC METHOD — Waveform + Analysis
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
          {/* Left — Waveform + Pitch Analysis panel */}
          <div style={{ position: 'relative' }}>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.15)`, padding: '24px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: 0 }}>
                  WAVEFORM + PITCH ANALYSIS
                </p>
                <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', margin: 0, fontStyle: 'italic' }}>Praat Phonetic Analysis</p>
              </div>

              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px' }}>Amplitude</p>
              <svg width="100%" height="40" viewBox="0 0 300 40" style={{ display: 'block', marginBottom: 20 }}>
                <polyline points="0,20 10,15 20,25 30,10 40,28 50,12 60,30 70,18 80,26 90,14 100,24 110,16 120,22 130,12 140,28 150,18 160,26 170,14 180,22 190,16 200,24 210,12 220,28 230,18 240,26 250,14 260,22 270,16 280,24 290,18 300,20" fill="none" stroke={GOLD} strokeWidth="1"/>
              </svg>

              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', margin: '0 0 4px' }}>Pitch Frequency (Hz)</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginBottom: 4 }}>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>75</span>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>100</span>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>150</span>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>250</span>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>350</span>
              </div>
              <svg width="100%" height="80" viewBox="0 0 300 80" style={{ display: 'block', marginBottom: 16 }}>
                <line x1="20" y1="70" x2="280" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <line x1="20" y1="55" x2="280" y2="55" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <line x1="20" y1="40" x2="280" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <line x1="20" y1="25" x2="280" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <line x1="20" y1="10" x2="280" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <polyline points="20,65 50,55 80,45 110,50 140,35 170,40 200,30 230,38 260,42 280,45" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
                <text x="5" y="72" fill="rgba(255,255,255,0.3)" fontSize="7">Hz</text>
                <text x="5" y="58" fill="rgba(255,255,255,0.3)" fontSize="7">350</text>
                <text x="5" y="43" fill="rgba(255,255,255,0.3)" fontSize="7">250</text>
                <text x="5" y="28" fill="rgba(255,255,255,0.3)" fontSize="7">150</text>
                <text x="5" y="13" fill="rgba(255,255,255,0.3)" fontSize="7">100</text>
                <text x="5" y="73" fill="rgba(255,255,255,0.3)" fontSize="7">75</text>
              </svg>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginBottom: 12 }}>
                {['PITCH RANGE', 'SPEAKING RATE', 'PAUSE DENSITY', 'VOICE DYNAMICS', 'AUTHORITY INDICATORS', 'ACOUSTIC ANALYSIS'].map((label, i) => (
                  <span key={i} style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: GOLD }} />{label}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', margin: 0, fontStyle: 'italic' }}>Praat Phonetic Analysis</p>
                <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', margin: 0, fontStyle: 'italic' }}>Speech Rhythm & Prosody</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <SectionLabel>Scientific Method</SectionLabel>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
              The Science Behind
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 600, fontStyle: 'italic', color: GOLD, margin: '0 0 24px', lineHeight: 1.15 }}>
              Vocal Authority
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: '0 0 32px', lineHeight: 1.8 }}>
              Using professional vocal analysis grounded in phonetics and acoustic research, I examine the same prosodic dimensions that define the most commanding voices in history.
            </p>

            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '24px', marginBottom: 24 }}>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
                RESEARCH FOUNDATION
              </p>
              <p style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 8px' }}>Sevil Velsha</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: '0 0 4px' }}>MA Linguistics • Phonetics Researcher</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: '0 0 4px' }}>Author of Voice Control</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>Specialist in Acoustic Voice Analysis</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { name: 'Steve Jobs',           desc: 'Pause Structure • Speech Rhythm' },
                { name: 'Barack Obama',          desc: 'Cadence • Pitch Control' },
                { name: 'Globe Theatre Actors',  desc: 'Projection • Vocal Presence' },
                { name: 'Christine Lagarde',     desc: 'Executive Authority • Strategic Pace' },
              ].map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid rgba(201,169,110,0.1)`, padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }}/>
                    <p style={{ fontFamily: J, fontSize: '13px', fontWeight: 600, color: '#fff', margin: 0 }}>{s.name}</p>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: '0 0 0 13px' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '60px auto 0', textAlign: 'center' }}>
          <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 16px' }}>
            YOUR VOICE CAN BE ANALYZED TOO
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
            {['Pitch Variety', 'Speech Rate', 'Pause Control', 'Vocal Presence', 'Authority Indicators'].map((item, i) => (
              <span key={i} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }} />{item}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: G, fontSize: 'clamp(1.2rem,2vw,1.5rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', margin: '0 0 24px' }}>
            Get Your Personal Voice Audit Within 24 Hours
          </p>
          <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FROM IGNORED TO UNIGNORABLE — 8 Benefits
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>The Reality</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
            From Ignored
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: GOLD, fontStyle: 'italic', margin: '0 0 16px', lineHeight: 1.15 }}>
            to Unignorable
          </h2>
          <div style={{ width: 40, height: 1, background: GOLD, margin: '0 auto 40px' }} />
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 auto 56px', lineHeight: 1.8, maxWidth: 600 }}>
            Your ideas might be brilliant. Your strategy might be sound. But if your voice signals uncertainty, the room will not follow you — no matter what you say.
          </p>

          {/* 4×2 Benefits Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              {
                num: '01',
                title: 'People Stop Interrupting You',
                desc: 'Speak without being interrupted.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Command Attention',
                desc: 'People listen when you speak.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Sound More Credible',
                desc: 'Project expertise and authority.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 01-1.32-4.24 2.5 2.5 0 011.32-4.24 3 3 0 01.34-5.58 2.5 2.5 0 014.96-.44z"/>
                    <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 001.32-4.24 2.5 2.5 0 00-1.32-4.24 3 3 0 00-.34-5.58 2.5 2.5 0 00-4.96-.44z"/>
                  </svg>
                ),
              },
              {
                num: '04',
                title: 'Become More Memorable',
                desc: 'Make your words stick.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
              },
              {
                num: '05',
                title: 'Executive Presence',
                desc: 'Sound like a leader.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                ),
              },
              {
                num: '06',
                title: 'Stronger First Impressions',
                desc: 'Be taken seriously immediately.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                  </svg>
                ),
              },
              {
                num: '07',
                title: 'Calm Confidence',
                desc: 'Speak without sounding nervous.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                ),
              },
              {
                num: '08',
                title: 'Master Silence',
                desc: 'Use pauses like powerful speakers.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid rgba(201,168,76,0.1)`, padding: '28px 24px', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: G, fontSize: '6rem', fontWeight: 700, color: 'rgba(201,169,110,0.04)', lineHeight: 1, zIndex: 0 }}>{item.num}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ marginBottom: 12 }}>{item.icon}</div>
                  <p style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 8px', lineHeight: 1.3 }}>{item.title}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px 36px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
              <p style={{ fontFamily: G, fontSize: 'clamp(1rem,2vw,1.25rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.8, borderLeft: `3px solid ${GOLD}`, paddingLeft: 24 }}>
                "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
              </p>
              <p style={{ fontFamily: J, fontSize: '11px', color: GOLD, margin: '12px 0 0 27px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                — Sevil Velsha, Voice Control
              </p>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
              Discover How Your Voice Is Affecting Your Authority
            </p>
            <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          URGENCY — Only 10 Slots
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {/* Triangle warning icon */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 20h20L12 2z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 9v5M12 16v1" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
            Only <span style={{ color: GOLD, fontStyle: 'italic' }}>10 Slots</span>
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 20px', lineHeight: 1.15 }}>
            Available at <span style={{ color: GOLD }}>$49</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: '0 0 48px', lineHeight: 1.7 }}>
            Because this is a personalized, manual review by a <span style={{ color: GOLD }}>voice researcher and author</span>, slots are strictly limited.
          </p>

          {/* Sevil Velsha card */}
          <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px', textAlign: 'left', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 20 }}>
            <img src="/images/audit-hero.png" alt="Sevil Velsha" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: GOLD, margin: '0 0 8px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                PERSONALLY REVIEWED BY
              </p>
              <p style={{ fontFamily: G, fontSize: '1.4rem', fontWeight: 600, color: '#fff', margin: '0 0 6px' }}>Sevil Velsha</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>
                MA Linguistics . Voice Researcher . Author of The Voice Control Method . Personal Voice Analysis within 24 Hours
              </p>
            </div>
          </div>

          {/* Slots + Investment 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px', textAlign: 'center' }}>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                WEEKLY CAPACITY
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: G, fontSize: '3rem', fontWeight: 600, color: GOLD }}>{slots}</span>
                <span style={{ fontFamily: J, fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>VOICE AUDITS</span>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>This week's available slots</p>
              <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
                {Array(10).fill(0).map((_, i) => (
                  <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: i < slots ? GOLD : 'rgba(201,168,76,0.15)' }} />
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px', textAlign: 'center' }}>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                INVESTMENT
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px', textDecoration: 'line-through' }}>
                Regular Price: $99
              </p>
              <p style={{ fontFamily: G, fontSize: '2.5rem', fontWeight: 600, color: GOLD, margin: '0 0 12px' }}>
                Today: $49
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>
                Once this week's 10 spots are gone,<br/>the price returns to $99
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
            {['Personal Review', '24-Hour Delivery', 'Custom Exercises', '100% Confidential'].map((item, i) => (
              <span key={i} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckIcon />{item}
              </span>
            ))}
          </div>

          {/* Shield / secure bar */}
          <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
              Secure your $49 Voice Audit now before the slots are gone.
            </span>
          </div>

          <CtaButton style={{ marginBottom: 16 }}>GET MY $49 VOICE AUDIT →</CtaButton>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>100% Secure & Confidential</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <SectionLabel>Take Action Now</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
            Your Voice Changes
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: GOLD, margin: '0 0 24px', lineHeight: 1.15 }}>
            How People Treat You.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', margin: '0 0 40px' }}>
            One investment. One conversation. Permanent transformation.
          </p>

          <CtaButton style={{ padding: '18px 48px', marginBottom: 32 }}>
            GET MY $49 VOICE AUDIT →
          </CtaButton>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
            {['Personally Reviewed', 'Delivered Within 24 Hours', 'Personalized Exercises Included', '100% Confidential'].map((item, i) => (
              <span key={i} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckIcon />{item}
              </span>
            ))}
          </div>

          <div style={{ paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: GOLD, margin: '0 0 16px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              PERSONALLY ANALYZED BY
            </p>
            <p style={{ fontFamily: G, fontSize: '1.6rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Sevil Velsha</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>MA Linguistics</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>Voice Researcher</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Author of Voice Control</p>
          </div>
        </div>
      </section>

    </div>
  );
}