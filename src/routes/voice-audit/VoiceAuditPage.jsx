// src/routes/voice-audit/VoiceAuditPage.jsx
// Route: /voice-audit
// Exact match of Figma design — dark luxury theme, gold accents

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
          <h1 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 }}>
            Voice Before Your
          </h1>
          <h1 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 600, color: GOLD, fontStyle: 'italic', margin: '0 0 32px', lineHeight: 1.1 }}>
            Ideas.
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 6px', lineHeight: 1.7 }}>
            Most people spend years improving their skills. Few ever improve the
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 6px', lineHeight: 1.7 }}>
            voice that delivers those skills.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 36px', lineHeight: 1.7 }}>
            People ignore fast, nervous talkers.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 36px', lineHeight: 1.7 }}>
            For <span style={{ color: GOLD, fontWeight: 600 }}>$49</span>, get a professional <span style={{ color: GOLD, fontWeight: 600 }}>24-hour Voice Audit</span><br/>
            and change how the room reacts to you.
          </p>
          <CtaButton style={{ marginBottom: 28 }}>
            GET MY PERSONAL VOICE REPORT →
          </CtaButton>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke={GOLD} strokeWidth="1.5"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke={GOLD} strokeWidth="1.5"/>
              </svg>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>100% Secure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke={GOLD} strokeWidth="1.5"/>
                <path d="M12 8v4l3 3" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>Confidential</span>
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

      {/* THE PROBLEM */}
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
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '40px 28px', textAlign: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid rgba(201,168,76,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
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
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '40px 28px', textAlign: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid rgba(201,168,76,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_wave)">
                    <path d="M-0.00012207 15.9995C2.66645 13.8662 5.33302 13.8662 7.99959 15.9995C10.6662 18.1327 13.3327 18.1327 15.9993 15.9995C18.6659 13.8662 21.3325 13.8662 23.999 15.9995C26.6656 18.1327 29.3322 18.1327 31.9987 15.9995" stroke={GOLD} strokeWidth="0.799971"/>
                  </g>
                  <defs><clipPath id="clip0_wave"><rect width="31.9989" height="31.9989" fill="white"/></clipPath></defs>
                </svg>
              </div>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${GOLD}`, color: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: '14px', fontWeight: 700, margin: '0 auto 16px' }}>02</div>
              <h3 style={{ fontFamily: G, fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Your Voice Lacks Contrast</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.7 }}>
                Flat, monotone speech causes people to immediately check their phones. Without pitch variety, your message disappears.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '40px 28px', textAlign: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid rgba(201,168,76,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
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
              If people interrupt you or ignore your ideas,<br/>
              <span style={{ color: GOLD }}>it is not your content — it is your voice.</span>
            </p>
          </div>
        </div>
      </section>

      {/* THE REALITY */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <SectionLabel>The Reality</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
            If People Ignore You, Interrupt You,<br/>or Forget Your Ideas…
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, fontStyle: 'italic', color: GOLD, margin: '0 0 36px', lineHeight: 1.15 }}>
            It May Be Your Voice.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 0 40px', lineHeight: 1.8 }}>
            Your ideas might be brilliant. Your strategy might be sound. But if your voice signals uncertainty, the room will not follow you — no matter what you say.
          </p>
          <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px 36px', textAlign: 'left' }}>
            <p style={{ fontFamily: G, fontSize: 'clamp(1rem,2vw,1.25rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.8, borderLeft: `3px solid ${GOLD}`, paddingLeft: 24 }}>
              "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
            </p>
            <p style={{ fontFamily: J, fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: '12px 0 0 27px' }}>
              — Sevil Velsha, Voice Control
            </p>
          </div>
        </div>
      </section>

      {/* DISCOVER CTA */}
      <section style={{ background: DARK, padding: '40px clamp(40px,6vw,80px)', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <p style={{ fontFamily: G, fontSize: 'clamp(1.2rem,2vw,1.5rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', margin: '0 0 24px' }}>
          Discover How Your Voice Is Affecting Your Authority
        </p>
        <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
      </section>

      {/* FROM IGNORED TO UNIGNORABLE */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>The Reality</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 56px', lineHeight: 1.15 }}>
            From <span style={{ color: GOLD, fontStyle: 'italic' }}>Ignored</span> to <span style={{ color: GOLD, fontStyle: 'italic' }}>Unignorable</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              { num: '01', title: 'People Stop Interrupting You', desc: 'Speak without being interrupted.' },
              { num: '02', title: 'Command Attention', desc: 'People listen when you speak.' },
              { num: '03', title: 'Sound More Credible', desc: 'Project expertise and authority.' },
              { num: '04', title: 'Become More Memorable', desc: 'Make your words stick.' },
              { num: '05', title: 'Executive Presence', desc: 'Sound like a leader.' },
              { num: '06', title: 'Stronger First Impressions', desc: 'Be taken seriously immediately.' },
              { num: '07', title: 'Calm Confidence', desc: 'Speak without sounding nervous.' },
              { num: '08', title: 'Master Silence', desc: 'Use pauses like powerful speakers.' },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid rgba(201,168,76,0.1)`, padding: '28px 24px', textAlign: 'left' }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: GOLD, margin: '0 0 12px', letterSpacing: '0.1em' }}>{item.num}</p>
                <p style={{ fontFamily: J, fontSize: '14px', fontWeight: 600, color: '#fff', margin: '0 0 8px' }}>{item.title}</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px 36px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
              <p style={{ fontFamily: G, fontSize: 'clamp(1rem,2vw,1.25rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.8, borderLeft: `3px solid ${GOLD}`, paddingLeft: 24 }}>
                "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
              </p>
              <p style={{ fontFamily: J, fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: '12px 0 0 27px' }}>
                — Sevil Velsha, Voice Control
              </p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <p style={{ fontFamily: G, fontSize: 'clamp(1.2rem,2vw,1.5rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', margin: '0 0 24px' }}>
              Discover How Your Voice Is Affecting Your Authority
            </p>
            <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>The Process</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.15 }}>
            The <span style={{ color: GOLD, fontStyle: 'italic' }}>24-Hour Fix:</span> How It Works
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: '0 0 60px', lineHeight: 1.7, maxWidth: 540 }}>
            Stop guessing how you sound. Get the exact vocal frameworks used by world leaders like <span style={{ color: GOLD }}>Steve Jobs</span> and elite <span style={{ color: GOLD }}>Shakespearean actors.</span>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', textAlign: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: GOLD, color: DARK, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: '14px', fontWeight: 700, margin: '0 auto 20px' }}>1</div>
              <div style={{ marginBottom: 16 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto', display: 'block' }}>
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' }}>Step 1</p>
              <h3 style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Send Your Recording</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '0 0 20px', lineHeight: 1.7 }}>
                Upload a 2-minute audio or video of you speaking in a meeting, presentation, or conversation.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginTop: 'auto' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill={DARK}>
                    <polygon points="8,5 8,19 19,12"/>
                  </svg>
                </div>
                <svg width="80" height="20" viewBox="0 0 80 20">
                  {Array(20).fill(0).map((_, i) => (
                    <rect key={i} x={i*4} y={10 - Math.random()*8} width="2" height={Math.random()*8 + 4} fill={GOLD} opacity={0.6}/>
                  ))}
                </svg>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>02:00</span>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', textAlign: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: GOLD, color: DARK, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: '14px', fontWeight: 700, margin: '0 auto 20px' }}>2</div>
              <div style={{ marginBottom: 16 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto', display: 'block' }}>
                  <circle cx="11" cy="11" r="7" stroke={GOLD} strokeWidth="1.5"/>
                  <path d="M20 20l-3-3" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' }}>Step 2</p>
              <h3 style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Personal Expert Analysis</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '0 0 20px', lineHeight: 1.7 }}>
                I personally analyze your pitch, speed, pauses, and enunciation using acoustic voice research methods.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', paddingLeft: '20%' }}>
                {['Pitch Variety', 'Speaking Speed', 'Pause Placement', 'Vocal Authority', 'Clarity', 'Vocal Presence'].map((d, j) => (
                  <span key={j} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckIcon />{d}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', textAlign: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: GOLD, color: DARK, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: '14px', fontWeight: 700, margin: '0 auto 20px' }}>3</div>
              <div style={{ marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', display: 'block' }}>
                  <path d="M29.9933 4.49878H5.9986C4.34212 4.49878 2.99927 5.84163 2.99927 7.49811V22.4948C2.99927 24.1513 4.34212 25.4941 5.9986 25.4941H29.9933C31.6498 25.4941 32.9926 24.1513 32.9926 22.4948V7.49811C32.9926 5.84163 31.6498 4.49878 29.9933 4.49878Z" stroke={GOLD} strokeWidth="1.94957" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9977 31.4929H23.9945" stroke={GOLD} strokeWidth="1.94957" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.996 25.4944V31.4928" stroke={GOLD} strokeWidth="1.94957" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' }}>Step 3</p>
              <h3 style={{ fontFamily: G, fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Your Voice Audit Report</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '0 0 20px', lineHeight: 1.7 }}>
                Within <span style={{ color: GOLD, fontWeight: 600 }}>24 hours</span>, you get a custom video breakdown detailing your top 3 vocal flaws and 3 exact exercises to fix them.
              </p>
              <div style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid rgba(201,168,76,0.25)`, padding: '16px', textAlign: 'left', marginBottom: 12 }}>
                <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, color: GOLD, margin: '0 0 12px', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
                  VOICE ANALYSIS REPORT
                </p>
                {[
                  { label: 'Authority Score', value: '78%' },
                  { label: 'Pitch Variety', value: '62%' },
                  { label: 'Speaking Pace', value: '45%' },
                  { label: 'Pause Control', value: '38%' },
                  { label: 'Clarity', value: '85%' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                    <span style={{ fontSize: '11px', color: GOLD, fontWeight: 600 }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid rgba(201,168,76,0.25)`, padding: '8px 14px', display: 'inline-block', marginTop: 'auto' }}>
                <span style={{ fontSize: '10px', color: GOLD, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  <span style={{ marginRight: 4 }}>✓</span> Delivered Within 24 Hours
                </span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              TOP 3 IMPROVEMENTS + CUSTOM EXERCISES INCLUDED
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: '0 0 24px', fontStyle: 'italic' }}>
              Based on acoustic speech analysis and decades of communication research.
            </p>
            <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
          </div>
        </div>
      </section>

      {/* SCIENTIFIC METHOD */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.15)`, padding: '24px 20px' }}>
              <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
                Waveform + Pitch Analysis
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Pitch Frequency (Hz)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, padding: '0 10px' }}>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>75</span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>100</span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>150</span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>250</span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>350</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <svg width="100%" height="80" viewBox="0 0 447 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
                  <path d="M23.1702 39.9985H28.17L33.1698 29.9988L38.1697 49.9981L43.1695 21.9991L48.1693 57.9978L53.1691 17.9993L58.1689 61.9976L63.1687 24.999L68.1686 54.9979L73.1684 19.9992L78.1682 59.9977L83.168 27.9989L88.1678 51.998L93.1676 34.9986L98.1674 44.9983L103.167 39.9985H113.167L118.167 27.9989L123.167 51.998L128.166 19.9992L133.166 59.9977L138.166 29.9988L143.166 49.9981L148.166 21.9991L153.165 57.9978L158.165 31.9988L163.165 47.9982L168.165 37.9985L173.165 41.9984L183.164 39.9985L188.164 33.9987L193.164 45.9982L198.164 25.999L203.164 53.9979L208.163 35.9986L213.163 43.9983L218.163 29.9988L223.163 49.9981L228.163 39.9985H238.162L243.162 31.9988L248.162 47.9982L253.162 23.999L258.162 55.9979L263.161 37.9985L268.161 41.9984L273.161 39.9985H283.161L288.16 35.9986L293.16 43.9983L298.16 37.9985L303.16 41.9984L313.16 39.9985L318.159 33.9987L323.159 45.9982L328.159 39.9985H333.159H343.158" stroke="url(#paint0_linear_pitch)" strokeWidth="1.49994"/>
                  <defs>
                    <linearGradient id="paint0_linear_pitch" x1="23.1702" y1="17.9993" x2="128018" y2="17.9993" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C9A84C" stopOpacity="0.3"/>
                      <stop offset="0.3" stopColor="#C9A84C"/>
                      <stop offset="0.7" stopColor="#C9A84C"/>
                      <stop offset="1" stopColor="#C9A84C" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <svg width="100%" height="120" viewBox="0 0 447 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
                  <g clipPath="url(#clip0_waveform)">
                    <path d="M73.1678 9.99976H413.156" stroke="#222222" strokeWidth="0.799972"/>
                    <path d="M73.1678 34.9988H413.156" stroke="#222222" strokeWidth="0.799972"/>
                    <path d="M73.1678 59.998H413.156" stroke="#222222" strokeWidth="0.799972"/>
                    <path d="M73.1678 84.9971H413.156" stroke="#222222" strokeWidth="0.799972"/>
                    <path d="M73.1678 109.996H413.156" stroke="#333333" strokeWidth="0.999964"/>
                    <path d="M73.1678 9.99976V109.996" stroke="#333333" strokeWidth="0.999964"/>
                    <path d="M83.1677 94.9966L103.167 81.9971L123.166 69.9975L143.166 54.9981L163.165 64.9977L183.164 49.9983L203.163 74.9974L223.163 41.9985L243.162 57.998L263.161 84.997L283.161 69.9975L303.16 59.9979L323.159 77.9973L343.158 89.9968L363.158 81.9971L383.157 87.9969L403.156 94.9966" stroke={GOLD} strokeWidth="1.99993"/>
                    <path opacity="0.35" d="M83.1677 89.9969L103.167 87.997L123.166 85.9971L143.166 87.997L163.165 86.997L183.164 85.9971L203.163 87.997L223.163 86.997H243.162L263.161 88.997L283.161 87.997L303.16 86.997L323.159 87.997L343.158 88.997L363.158 87.997L383.157 86.997L403.156 89.9969" stroke={GOLD} strokeWidth="0.999964" strokeDasharray="4 3"/>
                  </g>
                  <defs><clipPath id="clip0_waveform"><rect width="446.326" height="119.996" fill="white"/></clipPath></defs>
                </svg>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginTop: 16 }}>
                {['Pitch Range', 'Speaking Rate', 'Acoustic Analysis', 'Pause Density', 'Voice Dynamics', 'Authority Indicators'].map((label, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }} />
                    <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', margin: '12px 0 0', textAlign: 'center', fontStyle: 'italic' }}>
                Praat Phonetic Analysis
              </p>
            </div>
          </div>
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
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 16px' }}>
              Research Foundation
            </p>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.1)`, padding: '20px', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: G, fontSize: '16px', fontWeight: 600, color: GOLD }}>
                  S
                </div>
                <div>
                  <p style={{ fontFamily: J, fontSize: '14px', fontWeight: 600, color: '#fff', margin: 0 }}>Sevil Velsha</p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '2px 0 0' }}>MA Linguistics • Phonetics Researcher</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px' }}>Author of Voice Control</span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px' }}>Specialist in Acoustic Voice Analysis</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { name: 'Steve Jobs', desc: 'Pause Structure • Speech Rhythm' },
                { name: 'Barack Obama', desc: 'Cadence • Pitch Control' },
                { name: 'Globe Theatre Actors', desc: 'Projection • Vocal Presence' },
                { name: 'Christine Lagarde', desc: 'Executive Authority • Strategic Pace' },
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
            <div style={{ marginTop: 24 }}>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' }}>
                Your Voice Can Be Analyzed Too
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {['Pitch Variety', 'Speech Rate', 'Pause Control', 'Vocal Presence', 'Authority Indicators'].map((item, i) => (
                  <span key={i} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }} />{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: '60px auto 0', textAlign: 'center' }}>
          <p style={{ fontFamily: G, fontSize: 'clamp(1.2rem,2vw,1.5rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', margin: '0 0 24px' }}>
            Get Your Personal Voice Audit Within 24 Hours
          </p>
          <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
        </div>
      </section>

      {/* URGENCY — Only 10 Slots */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
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
            Available at $49
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: '0 0 48px', lineHeight: 1.7 }}>
            Because this is a personalized, manual review by a voice researcher and author, slots are strictly limited.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px', textAlign: 'left' }}>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Personally Reviewed By
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: G, fontSize: '20px', fontWeight: 600, color: GOLD }}>
                  S
                </div>
                <div>
                  <p style={{ fontFamily: G, fontSize: '18px', fontWeight: 600, color: '#fff', margin: 0 }}>Sevil Velsha</p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '4px 0 0', lineHeight: 1.6 }}>
                    MA Linguistics • Phonetics Researcher<br/>
                    Author of The Voice Control Method<br/>
                    Personal Voice Analysis within 24 Hours
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: G, fontSize: '1.3rem', fontWeight: 700, color: GOLD }}>
                  {slots}
                </div>
                <div>
                  <p style={{ fontFamily: J, fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Weekly Capacity</p>
                  <p style={{ fontFamily: J, fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Voice Audits</p>
                  <p style={{ fontFamily: J, fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>This week's available slots</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {Array(10).fill(0).map((_, i) => (
                  <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: i < slots ? GOLD : 'rgba(201,168,76,0.15)' }} />
                ))}
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid rgba(201,168,76,0.2)`, padding: '28px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Investment
              </p>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px', textDecoration: 'line-through' }}>
                  Regular Price: $99
                </p>
                <p style={{ fontFamily: G, fontSize: '2rem', fontWeight: 600, color: GOLD, margin: 0 }}>
                  Today: $49
                </p>
              </div>
              <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: '0 0 12px', lineHeight: 1.5 }}>
                  Once this week's 10 spots are gone, the price
                </p>
                <p style={{ fontFamily: J, fontSize: '15px', fontWeight: 700, color: '#e85d5d', margin: 0, letterSpacing: '0.05em' }}>
                  DOUBLES TO $99
                </p>
              </div>
            </div>
          </div>
          <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                Secure your $49 Voice Audit now before the slots are gone.
              </span>
            </div>
            <a href={STRIPE_URL} style={{ display: 'inline-block', background: GOLD, color: '#1a1a1a', fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none', flexShrink: 0 }}>
              GET MY $49 VOICE AUDIT →
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16 }}>
            {['Personal Review', '24-Hour Delivery', 'Custom Exercises', '100% Confidential'].map((item, i) => (
              <span key={i} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckIcon />{item}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            100% Secure & Confidential
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <SectionLabel>Take Action Now</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 }}>
            Your Voice Changes
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, fontStyle: 'italic', color: GOLD, margin: '0 0 24px', lineHeight: 1.15 }}>
            How People Treat You.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', margin: '0 0 40px' }}>
            One investment. One conversation. Permanent transformation.
          </p>
          <CtaButton style={{ padding: '18px 48px', marginBottom: 32 }}>
            GET MY $49 VOICE AUDIT →
          </CtaButton>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
            {['Personally Reviewed', 'Delivered Within 24 Hours', 'Personalized Exercises Included', '100% Confidential'].map((item, i) => (
              <span key={i} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckIcon />{item}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Personally Analyzed By
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: G, fontSize: '16px', fontWeight: 600, color: GOLD }}>
                S
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: G, fontSize: '16px', fontWeight: 600, color: '#fff', margin: 0 }}>Sevil Velsha</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '2px 0 0' }}>
                  MA Linguistics • Voice Researcher • Author of Voice Control
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}