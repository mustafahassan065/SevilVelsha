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
  const GOLD = '#c9a96e';
  const DARK = '#0a0a0a';
  const DARK2 = '#111111';
  const CARD = '#161616';
  const CARD_BORDER = 'rgba(201,169,110,0.15)';

  return (
    <div style={{ fontFamily: J, background: DARK, color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════ */}
     <section style={{
  background: DARK, minHeight: '100vh',
  display: 'grid', gridTemplateColumns: '1fr 1fr',
  alignItems: 'center', position: 'relative', overflow: 'hidden',
}}>
  {/* Left content */}
  <div style={{ padding: 'clamp(60px,8vw,120px) clamp(40px,6vw,80px) clamp(60px,8vw,120px) clamp(60px,8vw,100px)' }}>
    <p style={{ 
      fontFamily: J, fontSize: '11px', fontWeight: 700, 
      letterSpacing: '0.25em', textTransform: 'uppercase', 
      color: '#C9A84C', margin: '0 0 24px' 
    }}>
      Voice Audit
    </p>

    <h1 style={{ 
      fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', 
      fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 
    }}>
      Your Voice Is
    </h1>
    <h1 style={{ 
      fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', 
      fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 
    }}>
      Costing You
    </h1>
    <h1 style={{ 
      fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', 
      fontWeight: 600, color: '#C9A84C', fontStyle: 'italic',
      margin: '0 0 32px', lineHeight: 1.1 
    }}>
      Money and Respect.
    </h1>

    <p style={{ 
      fontSize: '15px', color: 'rgba(255,255,255,0.55)', 
      margin: '0 0 6px', lineHeight: 1.7 
    }}>
      People ignore fast, nervous talkers.
    </p>
    <p style={{ 
      fontSize: '15px', color: 'rgba(255,255,255,0.55)', 
      margin: '0 0 36px', lineHeight: 1.7 
    }}>
      For <span style={{ color: '#C9A84C', fontWeight: 600 }}>$49</span>, get a professional <span style={{ color: '#C9A84C', fontWeight: 600 }}>24-hour Voice Audit</span><br/>
      and change how the room reacts to you.
    </p>

    <a href={STRIPE_URL} style={{
      display: 'inline-block', background: '#C9A84C', color: '#1a1a1a',
      fontFamily: J, fontSize: '12px', fontWeight: 700, 
      letterSpacing: '0.18em', textTransform: 'uppercase', 
      padding: '16px 36px', textDecoration: 'none',
      marginBottom: 28,
    }}>
      Audit My Voice For $49 →
    </a>

    <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="#C9A84C" strokeWidth="1.5"/>
          <path d="M7 11V7a5 5 0 0110 0v4" stroke="#C9A84C" strokeWidth="1.5"/>
        </svg>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>100% Secure</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#C9A84C" strokeWidth="1.5"/>
          <path d="M12 8v4l3 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>Confidential</span>
      </div>
    </div>
  </div>

  {/* Right — photo + waveform graphic — BACKGROUND: #1A1A24 */}
  <div style={{ position: 'relative', height: '100%', minHeight: '600px', overflow: 'hidden', background: '#1A1A24' }}>
    <img
      src="/images/audit-hero.png"
      alt="Sevil Velsha"
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
    />
    {/* Waveform overlay card */}
    <div style={{
      position: 'absolute', top: 32, right: 32,
      background: 'rgba(20,20,20,0.92)', border: '1px solid rgba(201,168,76,0.25)',
      padding: '16px 20px', backdropFilter: 'blur(8px)',
    }}>
      <p style={{ 
        fontFamily: J, fontSize: '10px', letterSpacing: '0.15em', 
        color: '#C9A84C', margin: '0 0 10px', textTransform: 'uppercase' 
      }}>
        Pitch Contour
      </p>
      <svg width="160" height="52" viewBox="0 0 160 52">
        <polyline
          points="0,42 10,38 20,28 30,34 40,22 50,30 60,18 70,26 80,32 90,24 100,28 110,20 120,26 130,32 140,28 150,34 160,30"
          fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
        <polyline
          points="0,46 20,44 40,46 60,42 80,45 100,43 120,46 140,44 160,46"
          fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Hz 75</span>
        <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>300</span>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════════
          THE PROBLEM — 3 Hidden Career Killers
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
  <div style={{ maxWidth: 960, margin: '0 auto' }}>
    <p style={{ 
      fontFamily: J, fontSize: '11px', fontWeight: 700, 
      letterSpacing: '0.25em', textTransform: 'uppercase', 
      color: '#C9A84C', margin: '0 0 20px' 
    }}>
      × The Problem
    </p>
    <h2 style={{ 
      fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', 
      fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.15 
    }}>
      The 3 <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Hidden</span> Career Killers
    </h2>
    <p style={{ 
      fontSize: '15px', color: 'rgba(255,255,255,0.5)', 
      margin: '0 0 60px', lineHeight: 1.7, maxWidth: 600 
    }}>
      Every time you open your mouth in a meeting or a presentation, people judge your competence in <span style={{ color: '#C9A84C' }}>less than 3 seconds</span>. You are likely losing your audience because:
    </p>

    {/* 3 Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 40 }}>
      {/* Card 1 */}
      <div style={{
        background: CARD, border: `1px solid ${CARD_BORDER}`,
        padding: '40px 28px', textAlign: 'center',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          border: `1px solid rgba(201,168,76,0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#C9A84C" strokeWidth="1.5"/>
            <path d="M12 7v5l3 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          background: '#C9A84C', color: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: J, fontSize: '12px', fontWeight: 700,
          margin: '0 auto 16px',
        }}>
          1
        </div>
        <h3 style={{ 
          fontFamily: G, fontSize: '1.25rem', fontWeight: 600, 
          color: '#fff', margin: '0 0 12px' 
        }}>
          You speak too fast
        </h3>
        <p style={{ 
          fontSize: '14px', color: 'rgba(255,255,255,0.45)', 
          margin: 0, lineHeight: 1.7 
        }}>
          This signals anxiety and a lack of authority.
        </p>
      </div>

      {/* Card 2 — FIGMA WALA SVG LAGAYA GAYA */}
      <div style={{
        background: CARD, border: `1px solid ${CARD_BORDER}`,
        padding: '40px 28px', textAlign: 'center',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          border: `1px solid rgba(201,168,76,0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_wave)">
              <path d="M-0.00012207 15.9995C2.66645 13.8662 5.33302 13.8662 7.99959 15.9995C10.6662 18.1327 13.3327 18.1327 15.9993 15.9995C18.6659 13.8662 21.3325 13.8662 23.999 15.9995C26.6656 18.1327 29.3322 18.1327 31.9987 15.9995" stroke="#C9A84C" strokeWidth="0.799971"/>
            </g>
            <defs>
              <clipPath id="clip0_wave">
                <rect width="31.9989" height="31.9989" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          background: '#C9A84C', color: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: J, fontSize: '12px', fontWeight: 700,
          margin: '0 auto 16px',
        }}>
          2
        </div>
        <h3 style={{ 
          fontFamily: G, fontSize: '1.25rem', fontWeight: 600, 
          color: '#fff', margin: '0 0 12px' 
        }}>
          Your voice lacks contrast
        </h3>
        <p style={{ 
          fontSize: '14px', color: 'rgba(255,255,255,0.45)', 
          margin: 0, lineHeight: 1.7 
        }}>
          Flat, monotone speech causes people to immediately check their phones.
        </p>
      </div>

      {/* Card 3 */}
      <div style={{
        background: CARD, border: `1px solid ${CARD_BORDER}`,
        padding: '40px 28px', textAlign: 'center',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          border: `1px solid rgba(201,168,76,0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="6" y="4" width="4" height="16" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
            <rect x="14" y="4" width="4" height="16" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
          </svg>
        </div>
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          background: '#C9A84C', color: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: J, fontSize: '12px', fontWeight: 700,
          margin: '0 auto 16px',
        }}>
          3
        </div>
        <h3 style={{ 
          fontFamily: G, fontSize: '1.25rem', fontWeight: 600, 
          color: '#fff', margin: '0 0 12px' 
        }}>
          You skip the pauses
        </h3>
        <p style={{ 
          fontSize: '14px', color: 'rgba(255,255,255,0.45)', 
          margin: 0, lineHeight: 1.7 
        }}>
          Weak speakers rush; powerful leaders control the room with silence.
        </p>
      </div>
    </div>

    {/* Bottom line — BOTTOM WALA EMOJI BHI FIGMA WALA SVG SE REPLACE */}
    {/* Bottom line */}
<div style={{
  background: CARD, border: `1px solid ${CARD_BORDER}`,
  padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 16,
}}>
  <div style={{ flexShrink: 0 }}>
    <svg width="28" height="20" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_eyes)">
        <path d="M8.0003 20.9938C11.8651 20.9938 14.9981 17.8607 14.9981 13.996C14.9981 10.1312 11.8651 6.99817 8.0003 6.99817C4.13552 6.99817 1.0025 10.1312 1.0025 13.996C1.0025 17.8607 4.13552 20.9938 8.0003 20.9938Z" stroke="#C9A84C" strokeWidth="1.49959"/>
        <path d="M18.9973 20.9938C22.8621 20.9938 25.9951 17.8607 25.9951 13.996C25.9951 10.1312 22.8621 6.99817 18.9973 6.99817C15.1325 6.99817 11.9995 10.1312 11.9995 13.996C11.9995 17.8607 15.1325 20.9938 18.9973 20.9938Z" stroke="#C9A84C" strokeWidth="1.49959"/>
        <path d="M29.9943 20.9938C33.8591 20.9938 36.9921 17.8607 36.9921 13.996C36.9921 10.1312 33.8591 6.99817 29.9943 6.99817C26.1296 6.99817 22.9965 10.1312 22.9965 13.996C22.9965 17.8607 26.1296 20.9938 29.9943 20.9938Z" stroke="#C9A84C" strokeWidth="1.49959"/>
      </g>
      <defs>
        <clipPath id="clip0_eyes">
          <rect width="37.9953" height="27.9923" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </div>
  <p style={{ 
    fontFamily: G, fontSize: '1.05rem', fontStyle: 'italic', 
    color: 'rgba(255,255,255,0.7)', margin: 0 
  }}>
    If people interrupt you or ignore your ideas,<br/>
    <span style={{ color: '#C9A84C' }}>it is not your content — it is your voice.</span>
  </p>
</div>
  </div>
</section>
      {/* ══════════════════════════════════════════════════════════
          THE REALITY
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
  <div style={{ maxWidth: 720, margin: '0 auto' }}>
    <p style={{ 
      fontFamily: J, fontSize: '11px', fontWeight: 700, 
      letterSpacing: '0.25em', textTransform: 'uppercase', 
      color: '#C9A84C', margin: '0 0 28px' 
    }}>
      The Reality
    </p>
    <h2 style={{ 
      fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', 
      fontWeight: 600, color: '#fff', margin: '0 0 12px', lineHeight: 1.15 
    }}>
      If People Ignore You, Interrupt You,<br/>
      or Forget Your Ideas…
    </h2>
    <h2 style={{ 
      fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', 
      fontWeight: 600, fontStyle: 'italic', color: '#C9A84C', 
      margin: '0 0 36px', lineHeight: 1.15 
    }}>
      It May Be Your Voice.
    </h2>
    <p style={{ 
      fontSize: '15px', color: 'rgba(255,255,255,0.5)', 
      margin: '0 0 40px', lineHeight: 1.8 
    }}>
      Your ideas might be brilliant. Your strategy might be sound. But if your voice signals uncertainty, the room will not follow you — no matter what you say.
    </p>
    <div style={{
      background: CARD, border: `1px solid rgba(201,168,76,0.2)`,
      padding: '28px 36px', textAlign: 'left',
    }}>
      <p style={{ 
        fontFamily: G, fontSize: 'clamp(1rem,2vw,1.25rem)', 
        fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', 
        margin: 0, lineHeight: 1.8, 
        borderLeft: `3px solid #C9A84C`, paddingLeft: 24 
      }}>
        "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
      </p>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════════
          THE PROCESS — 24-Hour Fix
      ══════════════════════════════════════════════════════════ */}
<section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
  <div style={{ maxWidth: 960, margin: '0 auto' }}>
    <p style={{ 
      fontFamily: J, fontSize: '11px', fontWeight: 700, 
      letterSpacing: '0.25em', textTransform: 'uppercase', 
      color: '#C9A84C', margin: '0 0 20px' 
    }}>
      The Process
    </p>
    <h2 style={{ 
      fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', 
      fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.15 
    }}>
      The <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>24-Hour Fix:</span> How It Works
    </h2>
    <p style={{ 
      fontSize: '15px', color: 'rgba(255,255,255,0.45)', 
      margin: '0 0 60px', lineHeight: 1.7, maxWidth: 540 
    }}>
      Stop guessing how you sound. Get the exact vocal frameworks used by world leaders like <span style={{ color: '#C9A84C' }}>Steve Jobs</span> and elite <span style={{ color: '#C9A84C' }}>Shakespearean actors.</span>
    </p>

    {/* 3 Steps */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
      {/* Step 1 */}
      <div style={{ 
        background: CARD, border: `1px solid ${CARD_BORDER}`, 
        padding: '36px 28px', position: 'relative', textAlign: 'center' 
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: '#C9A84C', color: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: J, fontSize: '14px', fontWeight: 700,
          margin: '0 auto 20px',
        }}>
          1
        </div>
        <div style={{ marginBottom: 16 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto', display: 'block' }}>
            <path d="M12 15V3m0 12l-4-4m4 4l4-4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p style={{ 
          fontFamily: J, fontSize: '10px', fontWeight: 700, 
          letterSpacing: '0.2em', textTransform: 'uppercase', 
          color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' 
        }}>
          Step 1
        </p>
        <p style={{ 
          fontSize: '14px', color: 'rgba(255,255,255,0.7)', 
          margin: '0 0 20px', lineHeight: 1.7 
        }}>
          Upload a 2-minute audio or video of you speaking.
        </p>
        {/* Audio player mockup */}
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: 10, 
          justifyContent: 'center', marginTop: 'auto' 
        }}>
          <div style={{ 
            width: 28, height: 28, borderRadius: '50%', 
            background: '#C9A84C', display: 'flex', alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill={DARK}>
              <polygon points="8,5 8,19 19,12"/>
            </svg>
          </div>
          <svg width="80" height="20" viewBox="0 0 80 20">
            {Array(20).fill(0).map((_, i) => (
              <rect key={i} x={i*4} y={10 - Math.random()*8} width="2" height={Math.random()*8 + 4} fill="#C9A84C" opacity={0.6}/>
            ))}
          </svg>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>02:00</span>
        </div>
      </div>

      {/* Step 2 */}
      <div style={{ 
        background: CARD, border: `1px solid ${CARD_BORDER}`, 
        padding: '36px 28px', position: 'relative', textAlign: 'center' 
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: '#C9A84C', color: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: J, fontSize: '14px', fontWeight: 700,
          margin: '0 auto 20px',
        }}>
          2
        </div>
        <div style={{ marginBottom: 16 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto', display: 'block' }}>
            <circle cx="11" cy="11" r="7" stroke="#C9A84C" strokeWidth="1.5"/>
            <path d="M20 20l-3-3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <p style={{ 
          fontFamily: J, fontSize: '10px', fontWeight: 700, 
          letterSpacing: '0.2em', textTransform: 'uppercase', 
          color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' 
        }}>
          Step 2
        </p>
        <p style={{ 
          fontSize: '14px', color: 'rgba(255,255,255,0.7)', 
          margin: '0 0 20px', lineHeight: 1.7 
        }}>
          I personally analyze your pitch, speed, pauses, and enunciation.
        </p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Pitch', 'Speed', 'Pauses', 'Enunciation'].map((d, j) => (
            <span key={j} style={{ 
              fontSize: '10px', color: 'rgba(255,255,255,0.45)', display: 'flex', 
              alignItems: 'center', gap: 4 
            }}>
              <span style={{ 
                width: 5, height: 5, borderRadius: '50%', 
                background: 'rgba(255,255,255,0.45)', display: 'inline-block' 
              }}/>
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Step 3 */}
      <div style={{ 
        background: CARD, border: `1px solid ${CARD_BORDER}`, 
        padding: '36px 28px', position: 'relative', textAlign: 'center' 
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: '#C9A84C', color: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: J, fontSize: '14px', fontWeight: 700,
          margin: '0 auto 20px',
        }}>
          3
        </div>
        <div style={{ marginBottom: 16 }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', display: 'block' }}>
            <path d="M29.9933 4.49878H5.9986C4.34212 4.49878 2.99927 5.84163 2.99927 7.49811V22.4948C2.99927 24.1513 4.34212 25.4941 5.9986 25.4941H29.9933C31.6498 25.4941 32.9926 24.1513 32.9926 22.4948V7.49811C32.9926 5.84163 31.6498 4.49878 29.9933 4.49878Z" stroke="#C9A84C" strokeWidth="1.94957" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9977 31.4929H23.9945" stroke="#C9A84C" strokeWidth="1.94957" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.996 25.4944V31.4928" stroke="#C9A84C" strokeWidth="1.94957" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p style={{ 
          fontFamily: J, fontSize: '10px', fontWeight: 700, 
          letterSpacing: '0.2em', textTransform: 'uppercase', 
          color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' 
        }}>
          Step 3
        </p>
        <p style={{ 
          fontSize: '14px', color: 'rgba(255,255,255,0.7)', 
          margin: '0 0 20px', lineHeight: 1.7 
        }}>
          Within <span style={{ color: '#C9A84C', fontWeight: 600 }}>24 hours</span>, you get a custom video breakdown detailing your top 3 vocal flaws and 3 exact exercises to fix them.
        </p>
        <div style={{ 
          background: 'rgba(201,168,76,0.08)', border: `1px solid rgba(201,168,76,0.25)`, 
          padding: '8px 14px', display: 'inline-block', marginTop: 'auto' 
        }}>
          <span style={{ 
            fontSize: '10px', color: '#C9A84C', fontWeight: 600, 
            letterSpacing: '0.05em', textTransform: 'uppercase' 
          }}>
            <span style={{ marginRight: 4 }}>✓</span> Delivered Within 24 Hours
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════════
          SCIENTIFIC METHOD — Waveform + Analysis
      ══════════════════════════════════════════════════════════ */}
     <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
  <div style={{ 
    maxWidth: 1100, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', 
    alignItems: 'center' 
  }}>
    {/* Left — Waveform + Pitch Analysis */}
    <div style={{ position: 'relative' }}>
      <p style={{ 
        fontFamily: J, fontSize: '11px', fontWeight: 700, 
        letterSpacing: '0.25em', textTransform: 'uppercase', 
        color: '#C9A84C', margin: '0 0 28px' 
      }}>
        Waveform + Pitch Analysis
      </p>
      
      <div style={{
        background: CARD, border: `1px solid rgba(201,168,76,0.15)`,
        padding: '24px 20px',
      }}>
        {/* Waveform SVG */}
        <div style={{ marginBottom: 16 }}>
          <svg width="100%" height="auto" viewBox="0 0 447 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <g clipPath="url(#clip0_waveform)">
              <path d="M73.1678 9.99976H413.156" stroke="#222222" strokeWidth="0.799972"/>
              <path d="M73.1678 34.9988H413.156" stroke="#222222" strokeWidth="0.799972"/>
              <path d="M73.1678 59.998H413.156" stroke="#222222" strokeWidth="0.799972"/>
              <path d="M73.1678 84.9971H413.156" stroke="#222222" strokeWidth="0.799972"/>
              <path d="M73.1678 109.996H413.156" stroke="#333333" strokeWidth="0.999964"/>
              <path d="M73.1678 9.99976V109.996" stroke="#333333" strokeWidth="0.999964"/>
              <path d="M38.0583 14.0892C37.6365 14.0892 37.2604 14.0168 36.9302 13.8719C36.6021 13.727 36.3411 13.5257 36.1472 13.2679C35.9554 13.008 35.851 12.7065 35.834 12.3635H36.6393C36.6564 12.5744 36.7288 12.7565 36.8567 12.91C36.9845 13.0612 37.1517 13.1784 37.3584 13.2615C37.5651 13.3446 37.7941 13.3861 38.0455 13.3861C38.3268 13.3861 38.5761 13.3371 38.7934 13.2391C39.0107 13.1411 39.1812 13.0048 39.3047 12.8301C39.4283 12.6553 39.4901 12.4529 39.4901 12.2228C39.4901 11.9821 39.4304 11.7701 39.3111 11.5868C39.1918 11.4015 39.0171 11.2566 38.787 11.1522C38.5569 11.0478 38.2756 10.9956 37.9433 10.9956H37.4191V10.2925H37.9433C38.2032 10.2925 38.4312 10.2456 38.6272 10.1519C38.8253 10.0581 38.9798 9.92604 39.0906 9.75559C39.2035 9.58514 39.26 9.38486 39.26 9.15476C39.26 8.93318 39.211 8.74036 39.113 8.5763C39.015 8.41224 38.8765 8.28441 38.6975 8.19279C38.5207 8.10117 38.3119 8.05537 38.0711 8.05537C37.8453 8.05537 37.6322 8.09691 37.4319 8.18001C37.2338 8.26097 37.0719 8.37922 36.9461 8.53475C36.8204 8.68816 36.7523 8.87352 36.7416 9.09084H35.9746C35.9874 8.74781 36.0907 8.4474 36.2846 8.18959C36.4785 7.92966 36.732 7.72725 37.0452 7.58237C37.3605 7.43749 37.7068 7.36505 38.0839 7.36505C38.4887 7.36505 38.836 7.44708 39.1258 7.61113C39.4155 7.77306 39.6382 7.98719 39.7937 8.25351C39.9492 8.51984 40.027 8.80747 40.027 9.11641C40.027 9.485 39.9301 9.79927 39.7362 10.0592C39.5444 10.3191 39.2834 10.4992 38.9532 10.5993V10.6504C39.3665 10.7186 39.6893 10.8944 39.9215 11.1778C40.1538 11.459 40.2699 11.8074 40.2699 12.2228C40.2699 12.5786 40.1729 12.8982 39.9791 13.1816C39.7873 13.4628 39.5252 13.6844 39.1929 13.8464C38.8605 14.0083 38.4823 14.0892 38.0583 14.0892ZM43.6224 14.0892C43.2474 14.0892 42.9097 14.0147 42.6093 13.8655C42.3089 13.7164 42.0681 13.5118 41.887 13.2519C41.7059 12.992 41.6068 12.6958 41.5898 12.3635H42.3568C42.3866 12.6596 42.5209 12.9046 42.7595 13.0985C43.0003 13.2903 43.2879 13.3861 43.6224 13.3861C43.8909 13.3861 44.1295 13.3233 44.3383 13.1976C44.5492 13.0719 44.7143 12.8993 44.8336 12.6798C44.9551 12.4583 45.0158 12.2079 45.0158 11.9288C45.0158 11.6433 44.953 11.3887 44.8273 11.165C44.7037 10.9391 44.5332 10.7612 44.3159 10.6313C44.0986 10.5013 43.8504 10.4353 43.5713 10.4331C43.371 10.431 43.1654 10.4619 42.9545 10.5258C42.7435 10.5876 42.5699 10.6675 42.4335 10.7655L41.6921 10.676L42.0884 7.45453H45.4888V8.15763H42.7531L42.523 10.088H42.5614C42.6956 9.98143 42.8639 9.89301 43.0663 9.8227C43.2687 9.75239 43.4796 9.71724 43.6991 9.71724C44.0997 9.71724 44.4565 9.81312 44.7697 10.0049C45.0851 10.1945 45.3322 10.4544 45.5112 10.7847C45.6923 11.1149 45.7828 11.492 45.7828 11.916C45.7828 12.3336 45.6891 12.7065 45.5016 13.0346C45.3162 13.3606 45.0606 13.6184 44.7346 13.808C44.4086 13.9955 44.0379 14.0892 43.6224 14.0892ZM49.1873 14.0892C48.7058 14.0892 48.2956 13.9582 47.9568 13.6961C47.6181 13.4319 47.3592 13.0495 47.1802 12.5488C47.0013 12.046 46.9118 11.4388 46.9118 10.7271C46.9118 10.0198 47.0013 9.41576 47.1802 8.91507C47.3613 8.41224 47.6213 8.02873 47.96 7.76454C48.3009 7.49821 48.71 7.36505 49.1873 7.36505C49.6645 7.36505 50.0725 7.49821 50.4113 7.76454C50.7522 8.02873 51.0121 8.41224 51.1911 8.91507C51.3722 9.41576 51.4628 10.0198 51.4628 10.7271C51.4628 11.4388 51.3733 12.046 51.1943 12.5488C51.0153 13.0495 50.7565 13.4319 50.4177 13.6961C50.0789 13.9582 49.6688 14.0892 49.1873 14.0892ZM49.1873 13.3861C49.6645 13.3861 50.0353 13.156 50.2995 12.6958C50.5636 12.2356 50.6957 11.5794 50.6957 10.7271C50.6957 10.1604 50.635 9.67782 50.5136 9.2794C50.3943 8.88098 50.2217 8.57736 49.9958 8.36856C49.7721 8.15977 49.5026 8.05537 49.1873 8.05537C48.7143 8.05537 48.3446 8.28867 48.0783 8.75527C47.812 9.21974 47.6788 9.87703 47.6788 10.7271C47.6788 11.2939 47.7385 11.7754 47.8578 12.1717C47.9771 12.568 48.1486 12.8695 48.3723 13.0761C48.5982 13.2828 48.8698 13.3861 49.1873 13.3861Z" fill="#666666"/>
              <path d="M35.8468 38.999V38.4238L38.0072 36.0588C38.2607 35.7818 38.4695 35.5411 38.6336 35.3365C38.7976 35.1298 38.9191 34.936 38.9979 34.7549C39.0789 34.5716 39.1194 34.3799 39.1194 34.1796C39.1194 33.9495 39.064 33.7503 38.9532 33.582C38.8445 33.4136 38.6954 33.2837 38.5057 33.1921C38.3161 33.1004 38.1031 33.0546 37.8666 33.0546C37.6152 33.0546 37.3957 33.1068 37.2082 33.2112C37.0228 33.3135 36.879 33.4573 36.7768 33.6427C36.6766 33.828 36.6266 34.0454 36.6266 34.2946H35.8723C35.8723 33.9111 35.9607 33.5745 36.1376 33.2847C36.3144 32.995 36.5552 32.7691 36.8599 32.6072C37.1667 32.4453 37.5108 32.3643 37.8921 32.3643C38.2756 32.3643 38.6155 32.4453 38.9116 32.6072C39.2078 32.7691 39.44 32.9875 39.6083 33.2624C39.7767 33.5372 39.8608 33.843 39.8608 34.1796C39.8608 34.4204 39.8171 34.6558 39.7298 34.8859C39.6446 35.1139 39.4954 35.3685 39.2824 35.6497C39.0714 35.9288 38.7785 36.2697 38.4035 36.6724L36.9334 38.2448V38.2959H39.9759V38.999H35.8468ZM43.3412 39.0885C42.9662 39.0885 42.6285 39.0139 42.3281 38.8648C42.0276 38.7157 41.7869 38.5111 41.6058 38.2512C41.4247 37.9912 41.3256 37.6951 41.3086 37.3627H42.0756C42.1054 37.6589 42.2396 37.9039 42.4783 38.0978C42.719 38.2895 43.0067 38.3854 43.3412 38.3854C43.6096 38.3854 43.8482 38.3226 44.057 38.1969C44.268 38.0711 44.4331 37.8986 44.5524 37.6791C44.6739 37.4575 44.7346 37.2072 44.7346 36.9281C44.7346 36.6426 44.6717 36.388 44.546 36.1643C44.4224 35.9384 44.252 35.7605 44.0347 35.6305C43.8173 35.5006 43.5691 35.4345 43.29 35.4324C43.0897 35.4303 42.8841 35.4612 42.6732 35.5251C42.4623 35.5869 42.2886 35.6668 42.1523 35.7648L41.4108 35.6753L41.8071 32.4538H45.2076V33.1569H42.4719L42.2418 35.0872H42.2801C42.4143 34.9807 42.5827 34.8923 42.7851 34.822C42.9875 34.7517 43.1984 34.7165 43.4179 34.7165C43.8184 34.7165 44.1753 34.8124 44.4885 35.0041C44.8038 35.1938 45.051 35.4537 45.2299 35.7839C45.411 36.1142 45.5016 36.4913 45.5016 36.9153C45.5016 37.3329 45.4078 37.7057 45.2204 38.0339C45.035 38.3598 44.7793 38.6176 44.4533 38.8073C44.1274 38.9948 43.7566 39.0885 43.3412 39.0885ZM48.906 39.0885C48.4245 39.0885 48.0144 38.9575 47.6756 38.6954C47.3368 38.4312 47.078 38.0488 46.899 37.5481C46.72 37.0453 46.6305 36.438 46.6305 35.7264C46.6305 35.0191 46.72 34.415 46.899 33.9143C47.0801 33.4115 47.34 33.028 47.6788 32.7638C48.0197 32.4975 48.4288 32.3643 48.906 32.3643C49.3833 32.3643 49.7913 32.4975 50.1301 32.7638C50.471 33.028 50.7309 33.4115 50.9099 33.9143C51.091 34.415 51.1815 35.0191 51.1815 35.7264C51.1815 36.438 51.092 37.0453 50.9131 37.5481C50.7341 38.0488 50.4752 38.4312 50.1365 38.6954C49.7977 38.9575 49.3876 39.0885 48.906 39.0885ZM48.906 38.3854C49.3833 38.3854 49.754 38.1553 50.0182 37.6951C50.2824 37.2349 50.4145 36.5787 50.4145 35.7264C50.4145 35.1597 50.3538 34.6771 50.2323 34.2787C50.113 33.8802 49.9404 33.5766 49.7146 33.3678C49.4909 33.159 49.2214 33.0546 48.906 33.0546C48.433 33.0546 48.0634 33.2879 47.7971 33.7545C47.5307 34.219 47.3976 34.8763 47.3976 35.7264C47.3976 36.2932 47.4572 36.7747 47.5765 37.171C47.6959 37.5673 47.8674 37.8687 48.0911 38.0754C48.3169 38.2821 48.5886 38.3854 48.906 38.3854Z" fill="#666666"/>
              <path d="M38.1478 57.4528V63.998H37.3552V58.2838H37.3169L35.7189 59.3448V58.5394L37.3552 57.4528H38.1478ZM42.0756 64.0875C41.7006 64.0875 41.3629 64.013 41.0625 63.8638C40.7621 63.7147 40.5213 63.5101 40.3402 63.2502C40.1591 62.9903 40.06 62.6941 40.043 62.3617H40.81C40.8398 62.6579 40.9741 62.9029 41.2127 63.0968C41.4534 63.2886 41.7411 63.3844 42.0756 63.3844C42.344 63.3844 42.5827 63.3216 42.7915 63.1959C43.0024 63.0702 43.1675 62.8976 43.2868 62.6781C43.4083 62.4566 43.469 62.2062 43.469 61.9271C43.469 61.6416 43.4061 61.387 43.2804 61.1633C43.1569 60.9374 42.9864 60.7595 42.7691 60.6296C42.5518 60.4996 42.3036 60.4335 42.0244 60.4314C41.8242 60.4293 41.6186 60.4602 41.4076 60.5241C41.1967 60.5859 41.0231 60.6658 40.8867 60.7638L40.1452 60.6743L40.5415 57.4528H43.942V58.1559H41.2063L40.9762 60.0863H41.0145C41.1488 59.9797 41.3171 59.8913 41.5195 59.821C41.7219 59.7507 41.9328 59.7155 42.1523 59.7155C42.5528 59.7155 42.9097 59.8114 43.2229 60.0032C43.5382 60.1928 43.7854 60.4527 43.9644 60.783C44.1455 61.1132 44.236 61.4903 44.236 61.9143C44.236 62.3319 44.1423 62.7048 43.9548 63.0329C43.7694 63.3589 43.5137 63.6167 43.1878 63.8063C42.8618 63.9938 42.491 64.0875 42.0756 64.0875ZM47.6405 64.0875C47.1589 64.0875 46.7488 63.9565 46.41 63.6944C46.0713 63.4302 45.8124 63.0478 45.6334 62.5471C45.4545 62.0443 45.365 61.4371 45.365 60.7254C45.365 60.0181 45.4545 59.414 45.6334 58.9134C45.8145 58.4105 46.0745 58.027 46.4132 57.7628C46.7541 57.4965 47.1632 57.3633 47.6405 57.3633C48.1177 57.3633 48.5257 57.4965 48.8645 57.7628C49.2054 58.027 49.4653 58.4105 49.6443 58.9134C49.8254 59.414 49.9159 60.0181 49.9159 60.7254C49.9159 61.4371 49.8265 62.0443 49.6475 62.5471C49.4685 63.0478 49.2096 63.4302 48.8709 63.6944C48.5321 63.9565 48.122 64.0875 47.6405 64.0875ZM47.6405 63.3844C48.1177 63.3844 48.4884 63.1543 48.7526 62.6941C49.0168 62.2339 49.1489 61.5777 49.1489 60.7254C49.1489 60.1587 49.0882 59.6761 48.9668 59.2777C48.8474 58.8793 48.6749 58.5757 48.449 58.3669C48.2253 58.1581 47.9558 58.0537 47.6405 58.0537C47.1675 58.0537 46.7978 58.287 46.5315 58.7536C46.2651 59.218 46.132 59.8753 46.132 60.7254C46.132 61.2922 46.1916 61.7737 46.311 62.17C46.4303 62.5663 46.6018 62.8678 46.8255 63.0744C47.0513 63.2811 47.323 63.3844 47.6405 63.3844Z" fill="#666666"/>
              <path d="M38.1478 82.4518V88.9971H37.3552V83.2828H37.3169L35.7189 84.3438V83.5385L37.3552 82.4518H38.1478ZM42.1651 89.0866C41.6835 89.0866 41.2734 88.9555 40.9346 88.6935C40.5959 88.4293 40.337 88.0468 40.158 87.5461C39.9791 87.0433 39.8896 86.4361 39.8896 85.7245C39.8896 85.0171 39.9791 84.4131 40.158 83.9124C40.3391 83.4096 40.5991 83.026 40.9378 82.7619C41.2787 82.4955 41.6878 82.3624 42.1651 82.3624C42.6423 82.3624 43.0503 82.4955 43.3891 82.7619C43.73 83.026 43.9899 83.4096 44.1689 83.9124C44.35 84.4131 44.4406 85.0171 44.4406 85.7245C44.4406 86.4361 44.3511 87.0433 44.1721 87.5461C43.9931 88.0468 43.7343 88.4293 43.3955 88.6935C43.0567 88.9555 42.6466 89.0866 42.1651 89.0866ZM42.1651 88.3835C42.6423 88.3835 43.013 88.1534 43.2772 87.6931C43.5414 87.2329 43.6735 86.5767 43.6735 85.7245C43.6735 85.1577 43.6128 84.6751 43.4914 84.2767C43.3721 83.8783 43.1995 83.5747 42.9736 83.3659C42.7499 83.1571 42.4804 83.0527 42.1651 83.0527C41.6921 83.0527 41.3224 83.286 41.0561 83.7526C40.7898 84.2171 40.6566 84.8743 40.6566 85.7245C40.6566 86.2912 40.7163 86.7727 40.8356 87.169C40.9549 87.5653 41.1264 87.8668 41.3501 88.0735C41.576 88.2801 41.8476 88.3835 42.1651 88.3835ZM47.7899 89.0866C47.3083 89.0866 46.8982 88.9555 46.5594 88.6935C46.2207 88.4293 45.9618 88.0468 45.7828 87.5461C45.6039 87.0433 45.5144 86.4361 45.5144 85.7245C45.5144 85.0171 45.6039 84.4131 45.7828 83.9124C45.9639 83.4096 46.2239 83.026 46.5626 82.7619C46.9035 82.4955 47.3126 82.3624 47.7899 82.3624C48.2671 82.3624 48.6751 82.4955 49.0139 82.7619C49.3548 83.026 49.6147 83.4096 49.7937 83.9124C49.9748 84.4131 50.0654 85.0171 50.0654 85.7245C50.0654 86.4361 49.9759 87.0433 49.7969 87.5461C49.6179 88.0468 49.3591 88.4293 49.0203 88.6935C48.6815 88.9555 48.2714 89.0866 47.7899 89.0866ZM47.7899 88.3835C48.2671 88.3835 48.6378 88.1534 48.902 87.6931C49.1662 87.2329 49.2983 86.5767 49.2983 85.7245C49.2983 85.1577 49.2376 84.6751 49.1162 84.2767C48.9969 83.8783 48.8243 83.5747 48.5984 83.3659C48.3747 83.1571 48.1052 83.0527 47.7899 83.0527C47.3169 83.0527 46.9472 83.286 46.6809 83.7526C46.4146 84.2171 46.2814 84.8743 46.2814 85.7245C46.2814 86.2912 46.3411 86.7727 46.4604 87.169C46.5797 87.5653 46.7512 87.8668 46.9749 88.0735C47.2008 88.2801 47.4724 88.3835 47.7899 88.3835Z" fill="#666666"/>
              <path d="M36.0513 113.996L38.9787 108.205V108.154H35.6039V107.451H39.7969V108.193L36.8822 113.996H36.0513ZM42.9457 114.086C42.5707 114.086 42.233 114.011 41.9326 113.862C41.6321 113.713 41.3914 113.508 41.2103 113.248C41.0292 112.989 40.9301 112.692 40.9131 112.36H41.6801C41.7099 112.656 41.8441 112.901 42.0828 113.095C42.3235 113.287 42.6112 113.383 42.9457 113.383C43.2141 113.383 43.4527 113.32 43.6615 113.194C43.8725 113.068 44.0376 112.896 44.1569 112.676C44.2784 112.455 44.3391 112.204 44.3391 111.925C44.3391 111.64 44.2762 111.385 44.1505 111.162C44.0269 110.936 43.8565 110.758 43.6392 110.628C43.4219 110.498 43.1736 110.432 42.8945 110.43C42.6943 110.428 42.4886 110.458 42.2777 110.522C42.0668 110.584 41.8931 110.664 41.7568 110.762L41.0153 110.673L41.4116 107.451H44.8121V108.154H42.0764L41.8463 110.085H41.8846C42.0189 109.978 42.1872 109.89 42.3896 109.819C42.592 109.749 42.8029 109.714 43.0224 109.714C43.4229 109.714 43.7798 109.81 44.093 110.001C44.4083 110.191 44.6555 110.451 44.8344 110.781C45.0155 111.111 45.1061 111.489 45.1061 111.913C45.1061 112.33 45.0124 112.703 44.8249 113.031C44.6395 113.357 44.3838 113.615 44.0578 113.805C43.7319 113.992 43.3611 114.086 42.9457 114.086Z" fill="#666666"/>
              <path d="M33.8742 7V1.18203H34.5787V3.77284H37.6808V1.18203H38.3854V7H37.6808V4.39782H34.5787V7H33.8742ZM39.5799 7V6.48865L42.0571 3.30695V3.2615H39.6595V2.63652H42.9207V3.17059L40.5117 6.32957V6.37502H43.0002V7H39.5799Z" fill="#888888"/>
              <path d="M75.6677 120.076C75.2397 120.076 74.8751 119.959 74.574 119.726C74.2729 119.491 74.0428 119.151 73.8837 118.706C73.7246 118.259 73.645 117.72 73.645 117.087C73.645 116.458 73.7246 115.921 73.8837 115.476C74.0446 115.029 74.2757 114.689 74.5768 114.454C74.8798 114.217 75.2435 114.099 75.6677 114.099C76.0919 114.099 76.4546 114.217 76.7557 114.454C77.0587 114.689 77.2898 115.029 77.4489 115.476C77.6099 115.921 77.6904 116.458 77.6904 117.087C77.6904 117.72 77.6108 118.259 77.4517 118.706C77.2926 119.151 77.0625 119.491 76.7614 119.726C76.4603 119.959 76.0957 120.076 75.6677 120.076ZM75.6677 119.451C76.0919 119.451 76.4215 119.246 76.6563 118.837C76.8911 118.428 77.0086 117.845 77.0086 117.087C77.0086 116.583 76.9546 116.154 76.8466 115.8C76.7406 115.446 76.5872 115.176 76.3864 114.991C76.1876 114.805 75.948 114.712 75.6677 114.712C75.2473 114.712 74.9187 114.92 74.6819 115.334C74.4452 115.747 74.3268 116.331 74.3268 117.087C74.3268 117.591 74.3799 118.019 74.4859 118.371C74.592 118.723 74.7444 118.991 74.9433 119.175C75.144 119.359 75.3855 119.451 75.6677 119.451Z" fill="#666666"/>
              <path d="M150.813 114.178V119.996H150.108V114.917H150.074L148.654 115.86V115.144L150.108 114.178H150.813Z" fill="#666666"/>
              <path d="M238.764 119.996V119.485L240.685 117.383C240.91 117.136 241.096 116.922 241.242 116.741C241.387 116.557 241.495 116.384 241.565 116.224C241.637 116.061 241.673 115.89 241.673 115.712C241.673 115.508 241.624 115.331 241.526 115.181C241.429 115.031 241.296 114.916 241.128 114.834C240.959 114.753 240.77 114.712 240.56 114.712C240.336 114.712 240.141 114.759 239.975 114.851C239.81 114.942 239.682 115.07 239.591 115.235C239.502 115.4 239.457 115.593 239.457 115.814H238.787C238.787 115.474 238.866 115.174 239.023 114.917C239.18 114.659 239.394 114.458 239.665 114.314C239.938 114.171 240.243 114.099 240.582 114.099C240.923 114.099 241.225 114.171 241.489 114.314C241.752 114.458 241.958 114.653 242.108 114.897C242.258 115.141 242.332 115.413 242.332 115.712C242.332 115.926 242.294 116.135 242.216 116.34C242.14 116.543 242.008 116.769 241.818 117.019C241.631 117.267 241.37 117.57 241.037 117.928L239.73 119.326V119.371H242.435V119.996H238.764Z" fill="#666666"/>
              <path d="M330.727 120.076C330.352 120.076 330.018 120.011 329.724 119.882C329.432 119.754 329.2 119.575 329.028 119.346C328.858 119.114 328.765 118.847 328.75 118.542H329.466C329.481 118.729 329.545 118.891 329.659 119.027C329.772 119.162 329.921 119.266 330.105 119.34C330.289 119.414 330.492 119.451 330.716 119.451C330.966 119.451 331.187 119.407 331.38 119.32C331.573 119.233 331.725 119.112 331.835 118.956C331.945 118.801 332 118.621 332 118.417C332 118.203 331.947 118.014 331.841 117.851C331.734 117.687 331.579 117.558 331.375 117.465C331.17 117.372 330.92 117.326 330.625 117.326H330.159V116.701H330.625C330.856 116.701 331.058 116.659 331.233 116.576C331.409 116.492 331.546 116.375 331.645 116.224C331.745 116.072 331.795 115.894 331.795 115.689C331.795 115.492 331.752 115.321 331.664 115.175C331.577 115.029 331.454 114.916 331.295 114.834C331.138 114.753 330.952 114.712 330.738 114.712C330.538 114.712 330.348 114.749 330.17 114.823C329.994 114.895 329.85 115 329.738 115.138C329.627 115.275 329.566 115.439 329.557 115.633H328.875C328.886 115.328 328.978 115.061 329.15 114.832C329.323 114.6 329.548 114.421 329.826 114.292C330.107 114.163 330.414 114.099 330.75 114.099C331.109 114.099 331.418 114.171 331.676 114.317C331.933 114.461 332.131 114.652 332.269 114.888C332.408 115.125 332.477 115.381 332.477 115.655C332.477 115.983 332.391 116.262 332.218 116.493C332.048 116.724 331.816 116.884 331.522 116.973V117.019C331.89 117.08 332.177 117.236 332.383 117.488C332.59 117.738 332.693 118.047 332.693 118.417C332.693 118.733 332.607 119.017 332.434 119.269C332.264 119.519 332.031 119.716 331.735 119.86C331.44 120.004 331.104 120.076 330.727 120.076Z" fill="#666666"/>
              <path d="M83.1677 94.9966L103.167 81.9971L123.166 69.9975L143.166 54.9981L163.165 64.9977L183.164 49.9983L203.163 74.9974L223.163 41.9985L243.162 57.998L263.161 84.997L283.161 69.9975L303.16 59.9979L323.159 77.9973L343.158 89.9968L363.158 81.9971L383.157 87.9969L403.156 94.9966" stroke="#C9A84C" strokeWidth="1.99993"/>
              <path opacity="0.35" d="M83.1677 89.9969L103.167 87.997L123.166 85.9971L143.166 87.997L163.165 86.997L183.164 85.9971L203.163 87.997L223.163 86.997H243.162L263.161 88.997L283.161 87.997L303.16 86.997L323.159 87.997L343.158 88.997L363.158 87.997L383.157 86.997L403.156 89.9969" stroke="#C9A84C" strokeWidth="0.999964" strokeDasharray="4 3"/>
            </g>
            <defs>
              <clipPath id="clip0_waveform">
                <rect width="446.326" height="119.996" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        
        {/* Pitch analysis SVG */}
        <div>
          <svg width="100%" height="auto" viewBox="0 0 447 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
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
      </div>
    </div>

    {/* Right — Content */}
    <div>
      <p style={{ 
        fontFamily: J, fontSize: '11px', fontWeight: 700, 
        letterSpacing: '0.25em', textTransform: 'uppercase', 
        color: '#C9A84C', margin: '0 0 28px' 
      }}>
        The Breakdown
      </p>
      <h2 style={{ 
        fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', 
        fontWeight: 600, color: '#fff', margin: '0 0 20px', lineHeight: 1.15 
      }}>
        What You Will <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Receive</span>
      </h2>
      <p style={{ 
        fontSize: '15px', color: 'rgba(255,255,255,0.5)', 
        margin: '0 0 36px', lineHeight: 1.8 
      }}>
        A detailed, timestamped video audit walking you through your exact vocal patterns. No fluff — just actionable feedback you can apply immediately.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          'Pitch variation analysis with exact Hz measurements',
          'Speaking rate (words per minute) with pacing recommendations',
          'Pause placement and duration analysis',
          'Personalized vocal exercises for daily practice',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ 
              width: 20, height: 20, borderRadius: '50%', 
              background: '#C9A84C', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', flexShrink: 0, marginTop: 1 
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
      <a href={STRIPE_URL} style={{
        display: 'inline-block', background: '#C9A84C', color: '#1a1a1a',
        fontFamily: J, fontSize: '12px', fontWeight: 700, 
        letterSpacing: '0.18em', textTransform: 'uppercase', 
        padding: '16px 36px', textDecoration: 'none',
        marginTop: 40,
      }}>
        Get My Voice Audit →
      </a>
    </div>
  </div>
</section>
      {/* ══════════════════════════════════════════════════════════
          WHAT YOU GAIN — Transform
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ 
            fontFamily: J, fontSize: '11px', fontWeight: 700, 
            letterSpacing: '0.25em', textTransform: 'uppercase', 
            color: GOLD, margin: '0 0 20px' 
          }}>
            What You Gain
          </p>
          <h2 style={{ 
            fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', 
            fontWeight: 600, color: '#fff', margin: '0 0 56px', lineHeight: 1.15 
          }}>
            How Your Voice Will <span style={{ color: GOLD, fontStyle: 'italic' }}>Transform</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { title: 'Sound More Confident', desc: 'in every conversation' },
              { title: 'Stop Sounding Rushed', desc: 'and anxious' },
              { title: 'Speak With Authority', desc: 'that commands respect' },
              { title: 'Improve Executive Presence', desc: 'in boardrooms' },
              { title: 'Make People Listen', desc: 'and remember your ideas' },
              { title: 'Control Silence and Rhythm', desc: 'like a leader' },
            ].map((item, i) => (
              <div key={i} style={{ 
                background: CARD, border: `1px solid rgba(201,169,110,0.1)`, 
                padding: '28px 24px', textAlign: 'left', 
                display: 'flex', gap: 12, alignItems: 'flex-start' 
              }}>
                <div style={{ 
                  width: 18, height: 18, borderRadius: '50%', 
                  border: `1px solid ${GOLD}`, display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', 
                  marginTop: 2, flexShrink: 0 
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ 
                    fontFamily: J, fontSize: '14px', fontWeight: 600, 
                    color: '#fff', margin: '0 0 4px' 
                  }}>{item.title}</p>
                  <p style={{ 
                    fontSize: '13px', color: 'rgba(255,255,255,0.4)', 
                    margin: 0 
                  }}>{item.desc}</p>
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

          <h2 style={{ 
            fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', 
            fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 
          }}>
            Only <span style={{ color: GOLD, fontStyle: 'italic' }}>10 Slots</span>
          </h2>
          <h2 style={{ 
            fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', 
            fontWeight: 600, color: '#fff', margin: '0 0 20px', lineHeight: 1.15 
          }}>
            Available at $49
          </h2>
          <p style={{ 
            fontSize: '15px', color: 'rgba(255,255,255,0.45)', 
            margin: '0 0 48px', lineHeight: 1.7 
          }}>
            Because this is a personalized, manual review by a professional voice coach, slots are strictly limited.
          </p>

          {/* Slots counter */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            {/* Left card - Spots Left */}
            <div style={{ 
              background: CARD, border: `1px solid rgba(201,169,110,0.2)`, 
              padding: '28px', textAlign: 'left' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ 
                  width: 48, height: 48, borderRadius: '50%', 
                  border: `2px solid ${GOLD}`, display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', 
                  fontFamily: G, fontSize: '1.3rem', fontWeight: 700, 
                  color: GOLD 
                }}>
                  {slots}
                </div>
                <div>
                  <p style={{ 
                    fontFamily: J, fontSize: '10px', color: 'rgba(255,255,255,0.35)', 
                    margin: '0 0 2px', textTransform: 'uppercase', 
                    letterSpacing: '0.1em' 
                  }}>Spots Left</p>
                  <p style={{ 
                    fontFamily: J, fontSize: '12px', color: 'rgba(255,255,255,0.5)', 
                    margin: 0 
                  }}>This week's available slots</p>
                </div>
              </div>
              {/* Slot dots */}
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {Array(10).fill(0).map((_, i) => (
                  <div key={i} style={{ 
                    width: 14, height: 14, borderRadius: '50%', 
                    background: i < slots ? GOLD : 'rgba(201,169,110,0.15)' 
                  }}/>
                ))}
              </div>
            </div>

            {/* Right card - Price doubles */}
            <div style={{ 
              background: CARD, border: `1px solid rgba(201,169,110,0.2)`, 
              padding: '28px', display: 'flex', alignItems: 'center', gap: 14 
            }}>
              <div style={{ 
                width: 40, height: 40, borderRadius: '50%', 
                border: `1px solid ${GOLD}`, display: 'flex', 
                alignItems: 'center', justifyContent: 'center', flexShrink: 0 
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v7l4 2" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke={GOLD} strokeWidth="1.5"/>
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ 
                  fontSize: '12px', color: 'rgba(255,255,255,0.4)', 
                  margin: '0 0 6px', lineHeight: 1.5 
                }}>
                  Once this week's 10 spots are gone, the price
                </p>
                <p style={{ 
                  fontFamily: J, fontSize: '15px', fontWeight: 700, 
                  color: '#e85d5d', margin: 0, letterSpacing: '0.05em' 
                }}>
                  DOUBLES TO $99
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA bar */}
          <div style={{ 
            background: CARD, border: `1px solid ${CARD_BORDER}`, 
            padding: '20px 28px', display: 'flex', 
            alignItems: 'center', justifyContent: 'space-between', 
            gap: 20, marginBottom: 16 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span style={{ 
                fontSize: '13px', color: 'rgba(255,255,255,0.6)' 
              }}>
                Secure your $49 Voice Audit now before the slots are gone.
              </span>
            </div>
            <a href={STRIPE_URL} style={{
              display: 'inline-block', background: GOLD, color: '#1a1a1a',
              fontFamily: J, fontSize: '11px', fontWeight: 700, 
              letterSpacing: '0.15em', textTransform: 'uppercase', 
              padding: '14px 28px', textDecoration: 'none', flexShrink: 0,
            }}>
              Audit My Voice For $49 →
            </a>
          </div>

          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            100% Secure & Confidential
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ 
            fontFamily: J, fontSize: '11px', fontWeight: 700, 
            letterSpacing: '0.25em', textTransform: 'uppercase', 
            color: GOLD, margin: '0 0 28px' 
          }}>
            Take Action Now
          </p>
          <h2 style={{ 
            fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', 
            fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.15 
          }}>
            Your Voice Changes
          </h2>
          <h2 style={{ 
            fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', 
            fontWeight: 600, fontStyle: 'italic', color: GOLD, 
            margin: '0 0 24px', lineHeight: 1.15 
          }}>
            How People Treat You.
          </h2>
          <p style={{ 
            fontSize: '15px', color: 'rgba(255,255,255,0.4)', 
            margin: '0 0 40px' 
          }}>
            One investment. One conversation. Permanent transformation.
          </p>

          <a href={STRIPE_URL} style={{
            display: 'inline-block', background: GOLD, color: '#1a1a1a',
            fontFamily: J, fontSize: '12px', fontWeight: 700, 
            letterSpacing: '0.18em', textTransform: 'uppercase', 
            padding: '18px 48px', textDecoration: 'none', marginBottom: 16,
          }}>
            Audit My Voice For $49 →
          </a>

          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            100% Secure & Confidential
          </p>
        </div>
      </section>

    </div>
  );
}