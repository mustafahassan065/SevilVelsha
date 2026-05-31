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
     <section style={{ background: '#1a1a1a', padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,80px)' }}>
  <div style={{ 
    maxWidth: 1100, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', 
    alignItems: 'center' 
  }}>
    {/* Left — Waveform + Pitch Analysis */}
    <div style={{ position: 'relative' }}>
      <div style={{
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)',
        padding: '24px 20px',
      }}>
        <p style={{ 
          fontFamily: 'Courier New, monospace', fontSize: '11px', fontWeight: 700, 
          letterSpacing: '0.25em', textTransform: 'uppercase', 
          color: '#C9A84C', margin: '0 0 20px' 
        }}>
          Waveform + Pitch Analysis
        </p>
        
        <div style={{ marginBottom: 16 }}>
          <svg width="100%" height="auto" viewBox="0 0 447 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M23.1702 39.9985H28.17L33.1698 29.9988L38.1697 49.9981L43.1695 21.9991L48.1693 57.9978L53.1691 17.9993L58.1689 61.9976L63.1687 24.999L68.1686 54.9979L73.1684 19.9992L78.1682 59.9977L83.168 27.9989L88.1678 51.998L93.1676 34.9986L98.1674 44.9983L103.167 39.9985H113.167L118.167 27.9989L123.167 51.998L128.166 19.9992L133.166 59.9977L138.166 29.9988L143.166 49.9981L148.166 21.9991L153.165 57.9978L158.165 31.9988L163.165 47.9982L168.165 37.9985L173.165 41.9984L183.164 39.9985L188.164 33.9987L193.164 45.9982L198.164 25.999L203.164 53.9979L208.163 35.9986L213.163 43.9983L218.163 29.9988L223.163 49.9981L228.163 39.9985H238.162L243.162 31.9988L248.162 47.9982L253.162 23.999L258.162 55.9979L263.161 37.9985L268.161 41.9984L273.161 39.9985H283.161L288.16 35.9986L293.16 43.9983L298.16 37.9985L303.16 41.9984L313.16 39.9985L318.159 33.9987L323.159 45.9982L328.159 39.9985H333.159H343.158" stroke="url(#paint0_linear_pitch)" strokeWidth="1.49994" />
            <defs>
              <linearGradient id="paint0_linear_pitch" x1="23.1702" y1="17.9993" x2="128018" y2="17.9993" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C9A84C" stopOpacity="0.3" />
                <stop offset="0.3" stopColor="#C9A84C" />
                <stop offset="0.7" stopColor="#C9A84C" />
                <stop offset="1" stopColor="#C9A84C" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div>
          <svg width="100%" height="auto" viewBox="0 0 447 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <g clipPath="url(#clip0_waveform)">
              <path d="M73.1678 9.99976H413.156" stroke="#222222" strokeWidth="0.799972" />
              <path d="M73.1678 34.9988H413.156" stroke="#222222" strokeWidth="0.799972" />
              <path d="M73.1678 59.998H413.156" stroke="#222222" strokeWidth="0.799972" />
              <path d="M73.1678 84.9971H413.156" stroke="#222222" strokeWidth="0.799972" />
              <path d="M73.1678 109.996H413.156" stroke="#333333" strokeWidth="0.999964" />
              <path d="M73.1678 9.99976V109.996" stroke="#333333" strokeWidth="0.999964" />
              <path d="M38.0583 14.0892C37.6365 14.0892 37.2604 14.0168 36.9302 13.8719C36.6021 13.727 36.3411 13.5257 36.1472 13.2679C35.9554 13.008 35.851 12.7065 35.834 12.3635H36.6393C36.6564 12.5744 36.7288 12.7565 36.8567 12.91C36.9845 13.0612 37.1517 13.1784 37.3584 13.2615C37.5651 13.3446 37.7941 13.3861 38.0455 13.3861C38.3268 13.3861 38.5761 13.3371 38.7934 13.2391C39.0107 13.1411 39.1812 13.0048 39.3047 12.8301C39.4283 12.6553 39.4901 12.4529 39.4901 12.2228C39.4901 11.9821 39.4304 11.7701 39.3111 11.5868C39.1918 11.4015 39.0171 11.2566 38.787 11.1522C38.5569 11.0478 38.2756 10.9956 37.9433 10.9956H37.4191V10.2925H37.9433C38.2032 10.2925 38.4312 10.2456 38.6272 10.1519C38.8253 10.0581 38.9798 9.92604 39.0906 9.75559C39.2035 9.58514 39.26 9.38486 39.26 9.15476C39.26 8.93318 39.211 8.74036 39.113 8.5763C39.015 8.41224 38.8765 8.28441 38.6975 8.19279C38.5207 8.10117 38.3119 8.05537 38.0711 8.05537C37.8453 8.05537 37.6322 8.09691 37.4319 8.18001C37.2338 8.26097 37.0719 8.37922 36.9461 8.53475C36.8204 8.68816 36.7523 8.87352 36.7416 9.09084H35.9746C35.9874 8.74781 36.0907 8.4474 36.2846 8.18959C36.4785 7.92966 36.732 7.72725 37.0452 7.58237C37.3605 7.43749 37.7068 7.36505 38.0839 7.36505C38.4887 7.36505 38.836 7.44708 39.1258 7.61113C39.4155 7.77306 39.6382 7.98719 39.7937 8.25351C39.9492 8.51984 40.027 8.80747 40.027 9.11641C40.027 9.485 39.9301 9.79927 39.7362 10.0592C39.5444 10.3191 39.2834 10.4992 38.9532 10.5993V10.6504C39.3665 10.7186 39.6893 10.8944 39.9215 11.1778C40.1538 11.459 40.2699 11.8074 40.2699 12.2228C40.2699 12.5786 40.1729 12.8982 39.9791 13.1816C39.7873 13.4628 39.5252 13.6844 39.1929 13.8464C38.8605 14.0083 38.4823 14.0892 38.0583 14.0892Z" fill="#666666" />
              {/* ... baqi paths same hain ... */}
              <path d="M83.1677 94.9966L103.167 81.9971L123.166 69.9975L143.166 54.9981L163.165 64.9977L183.164 49.9983L203.163 74.9974L223.163 41.9985L243.162 57.998L263.161 84.997L283.161 69.9975L303.16 59.9979L323.159 77.9973L343.158 89.9968L363.158 81.9971L383.157 87.9969L403.156 94.9966" stroke="#C9A84C" strokeWidth="1.99993" />
              <path opacity="0.35" d="M83.1677 89.9969L103.167 87.997L123.166 85.9971L143.166 87.997L163.165 86.997L183.164 85.9971L203.163 87.997L223.163 86.997H243.162L263.161 88.997L283.161 87.997L303.16 86.997L323.159 87.997L343.158 88.997L363.158 87.997L383.157 86.997L403.156 89.9969" stroke="#C9A84C" strokeWidth="0.999964" strokeDasharray="4 3" />
            </g>
            <defs>
              <clipPath id="clip0_waveform">
                <rect width="446.326" height="119.996" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>

    {/* Right — Content (JO AAPNE SCREENSHOT MEIN DIKHAYA THA) */}
    <div>
      <p style={{ 
        fontFamily: 'Courier New, monospace', fontSize: '11px', fontWeight: 700, 
        letterSpacing: '0.25em', textTransform: 'uppercase', 
        color: '#C9A84C', margin: '0 0 28px' 
      }}>
        Phonetic Analysis
      </p>
      <h2 style={{ 
        fontFamily: 'Times New Roman, serif', fontSize: 'clamp(2rem,4vw,3rem)', 
        fontWeight: 600, color: '#fff', margin: '0 0 20px', lineHeight: 1.15 
      }}>
        Speech Rhythm & <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Prosody</span>
      </h2>
      <p style={{ 
        fontSize: '15px', color: 'rgba(255,255,255,0.5)', 
        margin: '0 0 36px', lineHeight: 1.8 
      }}>
        Professional voice analysis examining the same prosodic dimensions that define the most commanding voices in history — from Steve Jobs' strategic pauses to Obama's rhythmic authority.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          'Steve Jobs — Strategic Pacing Mastery',
          'Barack Obama — Rhythm & Tone Authority',
          'Globe Theatre Actors — Expressive Vocal Presence',
          'Christine Lagarde — Executive Gravitas & Cadence',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ 
              width: 20, height: 20, borderRadius: '50%', 
              background: '#C9A84C', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', flexShrink: 0, marginTop: 1 
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
      <a href="#" style={{
        display: 'inline-block', background: '#C9A84C', color: '#1a1a1a',
        fontFamily: 'Courier New, monospace', fontSize: '12px', fontWeight: 700, 
        letterSpacing: '0.18em', textTransform: 'uppercase', 
        padding: '16px 36px', textDecoration: 'none',
        marginTop: 40,
      }}>
        Analyze My Voice →
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