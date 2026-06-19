// src/routes/voice-audit/VoiceAuditPage.jsx
// Route: /voice-audit
// Pixel-perfect match of Figma screenshots

import React, { useState, useEffect } from 'react';
import VoiceAuditNav from '../../components/VoiceAuditNav';
import VoiceAuditFooter from '../../components/VoiceAuditFooter';
import PricingSection from './PricingSection';

const STRIPE_URL = 'https://buy.stripe.com/test_9B67sK95d23n7HM0gogIo04';

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

  const GoldDivider = () => (
    <div style={{ width: 48, height: 3, background: GOLD, margin: '20px 0 32px' }} />
  );

  const GoldDividerCenter = () => (
    <div style={{ width: 48, height: 3, background: GOLD, margin: '20px auto 32px' }} />
  );

  const CheckIcon = ({ color = GOLD }) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 12l5 5L20 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CtaButton = ({ children, style = {} }) => (
    <a href={STRIPE_URL} style={{
      display: 'inline-block', background: GOLD, color: '#111',
      fontFamily: J, fontSize: '13px', fontWeight: 700,
      letterSpacing: '0.15em', textTransform: 'uppercase',
      padding: '20px 48px', textDecoration: 'none',
      cursor: 'pointer', ...style
    }}>
      {children}
    </a>
  );

  const SectionLabel = ({ children, center = false }) => (
    <p style={{
      fontFamily: J, fontSize: '11px', fontWeight: 700,
      letterSpacing: '0.25em', textTransform: 'uppercase',
      color: GOLD, margin: '0 0 16px',
      textAlign: center ? 'center' : 'left'
    }}>
      {children}
    </p>
  );

  return (
    <>
      <VoiceAuditNav />
    <div style={{ fontFamily: J, background: DARK, color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
       <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh', background: DARK, overflow: 'hidden'
      }}>
        {/* Left */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(60px,8vw,120px) clamp(40px,5vw,80px) clamp(60px,8vw,120px) clamp(60px,7vw,100px)'
        }}>
          {/* Headline */}
          <h1 style={{
            fontFamily: G, fontWeight: 700,
            fontSize: 'clamp(2.4rem,5vw,3.8rem)',
            lineHeight: 1.08, color: '#fff', margin: '0 0 4px'
          }}>
            Your Voice May Be
          </h1>
          <h1 style={{
            fontFamily: G, fontWeight: 700,
            fontSize: 'clamp(2.4rem,5vw,3.8rem)',
            lineHeight: 1.08, margin: '0 0 20px'
          }}>
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Costing You </span>
            <span style={{ color: '#fff' }}>Opportunities</span>
          </h1>
 
          <GoldDivider />
 
          {/* Subheadline */}
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', margin: '0 0 16px', lineHeight: 1.7, fontStyle: 'italic', maxWidth: 480 }}>
            People decide whether you sound confident, credible, and trustworthy before they fully hear your ideas.
          </p>
 
          {/* Body */}
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', lineHeight: 1.75, maxWidth: 480 }}>
            If your voice sounds rushed, nervous, monotone, or uncertain, your message may not get the attention it deserves.
            <br /><br />
            Submit a 30-second voice sample and receive a{' '}
            <span style={{ color: GOLD, fontWeight: 600 }}>FREE Voice Check</span>{' '}
            within 24 hours.
          </p>
 
          {/* Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {[
              'One Voice Strength',
              'One Area for Improvement',
              'One Practical Tip',
              'Personalized Feedback Within 24 Hours',
            ].map((item, i) => (
              <span key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckIcon />
                {item}
              </span>
            ))}
          </div>
 
          {/* CTA */}
          <div>
            <a
              href="/free-voice-check"
              style={{
                display: 'inline-block', background: GOLD, color: '#111',
                fontFamily: J, fontSize: '13px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                padding: '20px 48px', textDecoration: 'none', cursor: 'pointer',
              }}
            >
              GET MY FREE VOICE CHECK →
            </a>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: '14px 0 0', letterSpacing: '0.05em' }}>
              No obligation. No sales pressure.
            </p>
          </div>
        </div>
 
        {/* Right — photo */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#0d0d14', minHeight: '600px' }}>
          <img
            src="/images/audit-hero.png"
            alt="Sevil Velsha"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
          {/* Waveform overlay card */}
          
        </div>
      </section>
 

      {/* ══════════════════════════════════════
          THE PROBLEM
      ══════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,100px)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <SectionLabel>× The Problem</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.1 }}>
            The 3 <span style={{ color: GOLD, fontStyle: 'italic' }}>Hidden</span> Career Killers
          </h2>
          <GoldDivider />
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 56px', lineHeight: 1.75, maxWidth: 640 }}>
            Every time you open your mouth in a meeting or a presentation, people judge your competence in{' '}
            <span style={{ color: GOLD }}>less than 3 seconds</span>. You are likely losing your audience because:
          </p>

          {/* 3 cards */}
          {/* 3 cards */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24 }}>
  {/* Card 1 */}
  <div style={{ background: "#16161C", border: `1px solid ${CARD_BORDER}`, padding: '40px 32px 36px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
    <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: G, fontSize: '3.5rem', fontWeight: 700, color: 'rgba(201,169,110,0.12)', lineHeight: 1, userSelect: 'none' }}>01</div>
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Bar chart waveform */}
      <svg width="120" height="48" viewBox="0 0 120 48" style={{ display: 'block', margin: '0 auto 20px' }}>
        {[
          [0,28],[6,18],[12,32],[18,14],[24,36],[30,20],[36,38],[42,16],[48,30],[54,12],[60,34],[66,22],[72,40],[78,18],[84,32],[90,14],[96,28],[102,10],[108,24],[114,16]
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="4" height={48 - y} fill={GOLD} opacity="0.85" rx="1"/>
        ))}
      </svg>
      <div style={{ width: 32, height: 2, background: GOLD, margin: '0 auto 20px' }} />
      <h3 style={{ fontFamily: G, fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>You Speak Too Fast</h3>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.75 }}>
        This signals anxiety and a complete lack of authority. Listeners disengage before you finish your first sentence.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div style={{ background: "#16161C", border: `1px solid ${CARD_BORDER}`, padding: '40px 32px 36px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
    <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: G, fontSize: '3.5rem', fontWeight: 700, color: 'rgba(201,169,110,0.12)', lineHeight: 1, userSelect: 'none' }}>02</div>
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Hz wave */}
      <div style={{ position: 'relative', margin: '0 auto 20px', width: 140, height: 48 }}>
        <span style={{ position: 'absolute', top: 0, left: 0, fontFamily: J, fontSize: '9px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>Hz</span>
        <svg width="140" height="48" viewBox="0 0 140 48" style={{ display: 'block' }}>
          <path d="M0,18 C8,8 16,8 24,18 C32,28 40,28 48,18 C56,8 64,8 72,18 C80,28 88,28 96,18 C104,8 112,8 120,18 C128,28 136,28 140,22" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M0,30 C8,22 16,22 24,30 C32,38 40,38 48,30 C56,22 64,22 72,30 C80,38 88,38 96,30 C104,22 112,22 120,30 C128,38 136,38 140,34" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
          <line x1="0" y1="44" x2="140" y2="44" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8"/>
        </svg>
      </div>
      <div style={{ width: 32, height: 2, background: GOLD, margin: '0 auto 20px' }} />
      <h3 style={{ fontFamily: G, fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>Your Voice Lacks Contrast</h3>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.75 }}>
        Flat, monotone speech causes people to immediately check their phones. Without pitch variety, your message disappears.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div style={{ background: "#16161C", border: `1px solid ${CARD_BORDER}`, padding: '40px 32px 36px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
    <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: G, fontSize: '3.5rem', fontWeight: 700, color: 'rgba(201,169,110,0.12)', lineHeight: 1, userSelect: 'none' }}>03</div>
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Pause wave */}
      <svg width="140" height="48" viewBox="0 0 140 48" style={{ display: 'block', margin: '0 auto 20px' }}>
        <path d="M0,26 C6,18 12,18 18,26 C24,34 30,34 36,26" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
        <text x="44" y="22" fill={GOLD} fontSize="8" fontFamily="'Jost',sans-serif" letterSpacing="0.08em" opacity="0.9">PAUSE</text>
        <line x1="44" y1="26" x2="82" y2="26" stroke={GOLD} strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        <path d="M84,26 C90,18 96,18 102,26 C108,34 114,34 120,26 C126,18 132,18 138,26" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="0" y1="42" x2="140" y2="42" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8"/>
      </svg>
      <div style={{ width: 32, height: 2, background: GOLD, margin: '0 auto 20px' }} />
      <h3 style={{ fontFamily: G, fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>You Skip the Pauses</h3>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.75 }}>
        Weak speakers rush; powerful leaders control the room with silence. Strategic pauses signal authority.
      </p>
    </div>
  </div>
</div>

          {/* Bottom bar */}
          <div style={{ background: "#16161C", border: `1px solid ${CARD_BORDER}`, padding: '22px 32px', display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Three circles icon */}
            <svg width="56" height="20" viewBox="0 0 56 20" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="10" cy="10" r="8.5" stroke={GOLD} strokeWidth="1.4"/>
              <circle cx="28" cy="10" r="8.5" stroke={GOLD} strokeWidth="1.4"/>
              <circle cx="46" cy="10" r="8.5" stroke={GOLD} strokeWidth="1.4"/>
            </svg>
            <p style={{ fontFamily: G, fontSize: '1.05rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
              If people interrupt you or ignore your ideas,{' '}
              <span style={{ color: GOLD }}>it is not your content — it is your voice.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE REALITY
      ══════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(100px,12vw,160px) clamp(40px,6vw,100px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionLabel center>The Reality</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', fontWeight: 700, color: '#fff', margin: '0', lineHeight: 1.1 }}>
            If People Ignore You, Interrupt You,
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', fontWeight: 700, color: '#fff', margin: '0', lineHeight: 1.1 }}>
            or Forget Your Ideas...
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', fontWeight: 700, color: GOLD, fontStyle: 'italic', margin: '0 0 0', lineHeight: 1.1 }}>
            It May Be Your Voice.
          </h2>
          <GoldDividerCenter />
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 auto 52px', lineHeight: 1.8, maxWidth: 580 }}>
            Your ideas might be brilliant. Your strategy might be sound. But if your voice signals uncertainty, the room will not follow you — no matter what you say.
          </p>

          {/* 3 icons: Voice Signal, Pitch Range, Pause Control */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 60, marginBottom: 52 }}>
            {/* Voice Signal */}
            <div style={{ textAlign: 'center' }}>
              <svg width="52" height="36" viewBox="0 0 52 36" style={{ display: 'block', margin: '0 auto 10px' }}>
                {[0,6,12,18,24,30,36,42,48].map((x, i) => {
                  const heights = [10,20,8,26,14,22,10,18,12];
                  const h = heights[i];
                  return <rect key={i} x={x} y={36-h} width="4" height={h} fill={GOLD} opacity="0.85" rx="1"/>;
                })}
              </svg>
              <p style={{ fontFamily: J, fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Voice Signal</p>
            </div>
            {/* Pitch Range */}
            <div style={{ textAlign: 'center' }}>
              <svg width="52" height="36" viewBox="0 0 52 36" style={{ display: 'block', margin: '0 auto 10px' }}>
                <path d="M0,26 C8,14 16,14 24,26 C32,38 40,4 52,18" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <p style={{ fontFamily: J, fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Pitch Range</p>
            </div>
            {/* Pause Control */}
            <div style={{ textAlign: 'center' }}>
              <svg width="72" height="36" viewBox="0 0 72 36" style={{ display: 'block', margin: '0 auto 10px' }}>
                <path d="M0,22 C4,14 8,14 12,22" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="16" y1="22" x2="30" y2="22" stroke={GOLD} strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
                <text x="18" y="18" fill={GOLD} fontSize="7" fontFamily="'Jost',sans-serif" letterSpacing="0.06em">PAUSE</text>
                <path d="M34,22 C38,14 42,14 46,22 C50,30 54,30 58,22 C62,14 66,14 70,22" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <p style={{ fontFamily: J, fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Pause Control</p>
            </div>
          </div>

          {/* Quote block */}
          <div style={{ background: '#0e0e1a', border: `1px solid rgba(201,168,76,0.15)`, padding: '36px 40px', textAlign: 'left', borderLeft: `4px solid ${GOLD}` }}>
            <p style={{ fontFamily: G, fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', margin: '0 0 16px', lineHeight: 1.75 }}>
              "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
            </p>
            <p style={{ fontFamily: J, fontSize: '11px', color: GOLD, margin: 0, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              — Sevil Velsha, Voice Control
            </p>
          </div>
        </div>

        {/* CTA strip */}
        <div style={{ marginTop: 60 }}>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 24px' }}>
            Discover How Your Voice Is Affecting Your Authority
          </p>
          <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE PROCESS
      ══════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,100px)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <SectionLabel>The Process</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.1 }}>
            The <span style={{ color: GOLD, fontStyle: 'italic' }}>24-Hour Fix:</span> How It Works
          </h2>
          <GoldDivider />
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: '0 0 60px', lineHeight: 1.75, maxWidth: 560 }}>
            Stop guessing how you sound. Get the exact vocal frameworks used by world leaders like{' '}
            <span style={{ color: GOLD }}>Steve Jobs</span> and elite <span style={{ color: GOLD }}>Shakespearean actors.</span>
          </p>

          {/* Big numbers above cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {/* Step 1 */}
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: G, fontSize: '5.5rem', fontWeight: 700, color: 'rgba(201,169,110,0.12)', lineHeight: 1, paddingLeft: 16, marginBottom: -20, zIndex: 0 }}>01</div>
              <div style={{ background: "#16161C", border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '0 0 24px', textAlign: 'center' }}>Step 1</p>
                {/* Waveform */}
                <svg width="100%" height="50" viewBox="0 0 220 50" style={{ display: 'block', marginBottom: 20 }}>
                  {[0,7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133,140,147,154,161,168,175,182,189,196,203].map((x, i) => {
                    const hs = [12,22,8,30,16,26,10,28,18,32,14,24,20,30,12,26,18,28,10,22,16,30,8,24,14,28,20,18,26,12];
                    const h = hs[i] || 16;
                    return <rect key={i} x={x} y={50-h} width="5" height={h} fill={GOLD} opacity="0.8" rx="1"/>;
                  })}
                </svg>
                <div style={{ width: 32, height: 2, background: GOLD, margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: G, fontSize: '1.35rem', fontWeight: 700, color: '#fff', margin: '0 0 14px', textAlign: 'center' }}>Send Your Recording</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.75, textAlign: 'center' }}>
                  Upload a <span style={{ color: GOLD, fontWeight: 600 }}>2-minute</span> audio or video of you speaking in a meeting, presentation, or conversation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: G, fontSize: '5.5rem', fontWeight: 700, color: 'rgba(201,169,110,0.12)', lineHeight: 1, paddingLeft: 16, marginBottom: -20, zIndex: 0 }}>02</div>
              <div style={{ background: "#16161C", border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '0 0 24px', textAlign: 'center' }}>Step 2</p>
                {/* Pitch line chart */}
                <svg width="100%" height="70" viewBox="0 0 220 70" style={{ display: 'block', marginBottom: 4 }}>
                  {/* Grid lines */}
                  <line x1="24" y1="10" x2="220" y2="10" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
                  <line x1="24" y1="25" x2="220" y2="25" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
                  <line x1="24" y1="40" x2="220" y2="40" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
                  <line x1="24" y1="55" x2="220" y2="55" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
                  <line x1="24" y1="65" x2="220" y2="65" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
                  {/* Y labels */}
                  <text x="0" y="13" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">350</text>
                  <text x="0" y="28" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">250</text>
                  <text x="0" y="43" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">150</text>
                  <text x="0" y="58" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">100</text>
                  <text x="2" y="68" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">75</text>
                  {/* Line */}
                  <polyline points="24,58 60,48 95,38 130,44 165,28 200,36 220,34" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 24px', marginBottom: 16 }}>
                  {['0','1','2'].map(n => <span key={n} style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>{n}</span>)}
                </div>
                <div style={{ width: 32, height: 2, background: GOLD, margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: G, fontSize: '1.35rem', fontWeight: 700, color: '#fff', margin: '0 0 14px', textAlign: 'center' }}>Personal Expert Analysis</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0 0 16px', lineHeight: 1.75, textAlign: 'center' }}>
                  I <span style={{ color: GOLD }}>personally analyze</span> your pitch, speed, pauses, and enunciation using acoustic voice research methods.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 8px' }}>
                  {['PITCH VARIETY','SPEAKING SPEED','PAUSE PLACEMENT','VOCAL AUTHORITY','CLARITY','VOCAL PRESENCE'].map((d,i) => (
                    <span key={i} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <CheckIcon />{'  '}{d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: G, fontSize: '5.5rem', fontWeight: 700, color: 'rgba(201,169,110,0.12)', lineHeight: 1, paddingLeft: 16, marginBottom: -20, zIndex: 0 }}>03</div>
              <div style={{ background: "#16161C", border: `1px solid ${CARD_BORDER}`, padding: '36px 28px', position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '0 0 24px', textAlign: 'center' }}>Step 3</p>
                <h3 style={{ fontFamily: G, fontSize: '1.35rem', fontWeight: 700, color: '#fff', margin: '0 0 14px', textAlign: 'center' }}>Your Voice Audit Report</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0 0 20px', lineHeight: 1.75, textAlign: 'center' }}>
                  Within <span style={{ color: GOLD, fontWeight: 600 }}>24 hours</span>, you get a custom video breakdown detailing your top 3 vocal flaws and 3 exact exercises to fix them.
                </p>
                {/* Report card */}
                <div style={{ background: 'rgba(201,168,76,0.07)', border: `1px solid rgba(201,168,76,0.2)`, padding: '16px', marginBottom: 14 }}>
                  <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, color: GOLD, margin: '0 0 14px', letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center' }}>
                    Voice Analysis Report
                  </p>
                  {[
                    { label: 'Authority Score', pct: 78 },
                    { label: 'Pitch Variety',   pct: 62 },
                    { label: 'Speaking Pace',   pct: 45 },
                    { label: 'Pause Control',   pct: 38 },
                    { label: 'Clarity',         pct: 85 },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', flex: 1 }}>{item.label}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 54, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                          <div style={{ width: `${item.pct}%`, height: 3, background: GOLD, borderRadius: 2 }} />
                        </div>
                        <span style={{ fontSize: '10px', color: GOLD, fontWeight: 700, minWidth: 26, textAlign: 'right' }}>{item.pct}%</span>
                      </div>
                    </div>
                  ))}
                  <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', margin: '10px 0 0', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Top 3 Improvements + Custom Exercises Included
                  </p>
                </div>
                {/* Delivered badge */}
                <div style={{ background: 'rgba(201,168,76,0.07)', border: `1px solid rgba(201,168,76,0.2)`, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  {/* Circle spinner-like icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke={GOLD} strokeWidth="1.5" strokeDasharray="4 2"/>
                  </svg>
                  <span style={{ fontSize: '10px', color: GOLD, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Delivered Within 24 Hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: '#ffff', margin: '0 0 6px', fontStyle: 'italic' }}>
              Based on acoustic speech analysis and decades of communication research.
            </p>
            <p style={{ fontSize: '12px', color: '#ffff', margin: '0 0 36px', fontStyle: 'italic' }}>
              Inspired by techniques observed in world-class communicators, leaders, and Shakespearean actors.
            </p>
            <h3 style={{ fontFamily: G, fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', margin: '0 0 28px' }}>
              Ready to Discover What Your Voice Is Communicating?
            </h3>
            <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SCIENTIFIC METHOD
      ══════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,100px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
          {/* Left — analysis card */}
          <div style={{ background: "#16161C", border: `1px solid rgba(201,168,76,0.15)`, padding: '28px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', color: GOLD, margin: 0, textTransform: 'uppercase' }}>
                Waveform + Pitch Analysis
              </p>
              <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', margin: 0, fontStyle: 'italic' }}>Praat Phonetic Analysis</p>
            </div>

            <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px' }}>Amplitude</p>
            <svg width="100%" height="44" viewBox="0 0 300 44" style={{ display: 'block', marginBottom: 20 }}>
              <polyline
                points="0,22 8,16 16,28 24,10 32,30 40,14 48,32 56,18 64,28 72,12 80,26 88,16 96,24 104,10 112,30 120,18 128,28 136,14 144,24 152,16 160,26 168,12 176,30 184,18 192,28 200,14 208,24 216,16 224,28 232,20 240,26 248,14 256,22 264,16 272,24 280,18 288,22 300,20"
                fill="none" stroke={GOLD} strokeWidth="1.2" strokeLinejoin="round"
              />
            </svg>

            <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', margin: '0 0 6px' }}>Pitch Frequency (Hz)</p>
            <svg width="100%" height="90" viewBox="0 0 300 90" style={{ display: 'block', marginBottom: 12 }}>
              {[10,25,40,55,70,82].map(y => (
                <line key={y} x1="22" y1={y} x2="298" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
              ))}
              <text x="0" y="13" fill="rgba(255,255,255,0.3)" fontSize="7">Hz</text>
              <text x="0" y="28" fill="rgba(255,255,255,0.3)" fontSize="7">350</text>
              <text x="0" y="43" fill="rgba(255,255,255,0.3)" fontSize="7">250</text>
              <text x="0" y="58" fill="rgba(255,255,255,0.3)" fontSize="7">150</text>
              <text x="0" y="73" fill="rgba(255,255,255,0.3)" fontSize="7">100</text>
              <text x="2" y="85" fill="rgba(255,255,255,0.3)" fontSize="7">75</text>
              {/* X axis ticks */}
              <text x="22" y="90" fill="rgba(255,255,255,0.3)" fontSize="7">0</text>
              <text x="118" y="90" fill="rgba(255,255,255,0.3)" fontSize="7">1</text>
              <text x="210" y="90" fill="rgba(255,255,255,0.3)" fontSize="7">2</text>
              <text x="290" y="90" fill="rgba(255,255,255,0.3)" fontSize="7">3</text>
              {/* Dashed baseline */}
              <line x1="22" y1="72" x2="298" y2="72" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8" strokeDasharray="4 3"/>
              <polyline points="22,70 60,58 100,46 138,52 176,36 214,42 252,32 290,40" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', marginBottom: 12 }}>
              {['PITCH RANGE','SPEAKING RATE','PAUSE DENSITY','VOICE DYNAMICS','AUTHORITY INDICATORS','ACOUSTIC ANALYSIS'].map((label,i) => (
                <span key={i} style={{ fontSize: '8px', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: GOLD, display: 'inline-block' }}/>{label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', margin: 0, fontStyle: 'italic' }}>Praat Phonetic Analysis</p>
              <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', margin: 0, fontStyle: 'italic' }}>Speech Rhythm & Prosody</p>
            </div>
          </div>

          {/* Right */}
          <div>
            <SectionLabel>Scientific Method</SectionLabel>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, color: '#fff', margin: '0 0 0', lineHeight: 1.1 }}>
              The Science Behind
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, color: GOLD, fontStyle: 'italic', margin: '0 0 0', lineHeight: 1.1 }}>
              Vocal Authority
            </h2>
            <GoldDivider />
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', lineHeight: 1.8 }}>
              Using professional vocal analysis grounded in phonetics and acoustic research, I examine the same prosodic dimensions that define the most commanding voices in history.
            </p>

            {/* Research Foundation box */}
            <div style={{ background: "#16161C", border: `1px solid rgba(201,168,76,0.2)`, padding: '20px 22px', marginBottom: 20 }}>
              <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 12px' }}>
                Research Foundation
              </p>
              <p style={{ fontFamily: G, fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>Sevil Velsha</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: '0 0 3px' }}>MA Linguistics • Phonetics Researcher</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: '0 0 3px' }}>Author of Voice Control</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>Specialist in Acoustic Voice Analysis</p>
            </div>

            {/* 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { name: 'Steve Jobs',          desc: 'Pause Structure • Speech Rhythm' },
                { name: 'Barack Obama',         desc: 'Cadence • Pitch Control' },
                { name: 'Globe Theatre Actors', desc: 'Projection • Vocal Presence' },
                { name: 'Christine Lagarde',    desc: 'Executive Authority • Strategic Pace' },
              ].map((s,i) => (
                <div key={i} style={{ background: "#16161C", border: `1px solid rgba(201,169,110,0.1)`, padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD, flexShrink: 0 }}/>
                    <p style={{ fontFamily: J, fontSize: '13px', fontWeight: 600, color: '#fff', margin: 0 }}>{s.name}</p>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: '0 0 0 14px', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div style={{ maxWidth: 1100, margin: '60px auto 0', textAlign: 'center', paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 14px' }}>
            Your Voice Can Be Analyzed Too
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
            {['Pitch Variety','Speech Rate','Pause Control','Vocal Presence','Authority Indicators'].map((item,i) => (
              <span key={i} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }}/>{item}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: G, fontSize: 'clamp(1rem,2vw,1.25rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px' }}>
            Get Your Personal Voice Audit Within 24 Hours
          </p>
          <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FROM IGNORED TO UNIGNORABLE
      ══════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,100px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel center>The Reality</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.1 }}>
            From Ignored
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 700, color: GOLD, fontStyle: 'italic', margin: 0, lineHeight: 1.1 }}>
            to Unignorable
          </h2>
          <GoldDividerCenter />
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 auto 52px', lineHeight: 1.8, maxWidth: 660 }}>
            Your ideas might be brilliant. Your strategy might be sound. But if your voice signals uncertainty, the room will not follow you — no matter what you say.
          </p>

          {/* 2-column grid — 4 rows */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { num: '01', title: 'People Stop Interrupting You', desc: 'Speak without being interrupted.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
              { num: '02', title: 'Command Attention', desc: 'People listen when you speak.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg> },
              { num: '03', title: 'Sound More Credible', desc: 'Project expertise and authority.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><circle cx="12" cy="8" r="6"/><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"/></svg> },
              { num: '04', title: 'Become More Memorable', desc: 'Make your words stick.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 014.96-7.28z"/><path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-4.96-7.28z"/></svg> },
              { num: '05', title: 'Executive Presence', desc: 'Sound like a leader.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
              { num: '06', title: 'Stronger First Impressions', desc: 'Be taken seriously immediately.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
              { num: '07', title: 'Calm Confidence', desc: 'Speak without sounding nervous.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
              { num: '08', title: 'Master Silence', desc: 'Use pauses like powerful speakers.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            ].map((item,i) => (
              <div key={i} style={{ background: "#16161C", border: `1px solid rgba(201,168,76,0.1)`, padding: '28px 28px', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
                {/* Faded number bottom-right */}
                <div style={{ position: 'absolute', bottom: -10, right: 10, fontFamily: G, fontSize: '5.5rem', fontWeight: 700, color: 'rgba(201,169,110,0.06)', lineHeight: 1, userSelect: 'none' }}>{item.num}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ marginBottom: 14 }}>{item.icon}</div>
                  <p style={{ fontFamily: G, fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>{item.title}</p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{ background: '#0e0e1a', border: `1px solid rgba(201,168,76,0.15)`, padding: '36px 40px', textAlign: 'left', borderLeft: `4px solid ${GOLD}`, marginTop: 40 }}>
            <p style={{ fontFamily: G, fontSize: 'clamp(1rem,2vw,1.25rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', margin: '0 0 16px', lineHeight: 1.75 }}>
              "The voice is an instrument of leadership. Those who master it control the room before they speak a single word."
            </p>
            <p style={{ fontFamily: J, fontSize: '11px', color: GOLD, margin: 0, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              — Sevil Velsha, Voice Control
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 24px' }}>
              Discover How Your Voice Is Affecting Your Authority
            </p>
            <CtaButton>GET MY $49 VOICE AUDIT →</CtaButton>
          </div>
        </div>
      </section>
      <PricingSection />

      {/* ══════════════════════════════════════
          URGENCY — Only 10 Slots
      ══════════════════════════════════════ */}
     <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,100px)', textAlign: 'center' }}>
  <div style={{ maxWidth: 720, margin: '0 auto' }}>
    {/* Triangle icon - now centered */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
      <svg width="36" height="34" viewBox="0 0 36 34" fill="none">
        <path d="M18 2L1 31h34L18 2z" stroke={GOLD} strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M18 13v8M18 24v2" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>

    <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.1 }}>
      Only <span style={{ color: GOLD, fontStyle: 'italic' }}>10 Slots</span>
    </h2>
    <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', fontWeight: 700, color: '#fff', margin: '0 0 0', lineHeight: 1.1 }}>
      Available at <span style={{ color: GOLD }}>$49</span>
    </h2>
    <GoldDividerCenter />

    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: '0 0 44px', lineHeight: 1.75 }}>
      Because this is a personalized, manual review by a{' '}
      <span style={{ color: GOLD }}>voice researcher and author</span>, slots are <span style={{ color: GOLD }}>strictly limited.</span>
    </p>

    {/* Sevil card — full photo */}
    <div style={{
      background: CARD, border: `1px solid rgba(201,168,76,0.25)`,
      marginBottom: 28, overflow: 'hidden',
      display: 'grid', gridTemplateColumns: '340px 1fr',
    }}>
      {/* Photo — large, prominent */}
      <div style={{ position: 'relative', minHeight: 380, background: '#0a0a12', overflow: 'hidden' }}>
        <img
          src="/images/audit-hero2.png"
          alt="Sevil Velsha"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
        {/* subtle gold gradient overlay at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, rgba(10,10,18,0.7), transparent)' }}/>
      </div>

      {/* Content */}
      <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: GOLD, margin: '0 0 16px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Personally Reviewed By
        </p>
        <p style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#fff', margin: '0 0 6px', lineHeight: 1.1 }}>
          Sevil Velsha
        </p>
        <div style={{ width: 36, height: 2, background: GOLD, margin: '0 0 20px' }}/>

        {/* Credentials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            'MA Linguistics',
            'Voice Researcher',
            'Author of The Voice Control Method',
            'Personal Voice Analysis within 24 Hours',
          ].map((item, i) => (
            <span key={i} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }}/>
              {item}
            </span>
          ))}
        </div>

        {/* Quote */}
        <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16 }}>
          <p style={{ fontFamily: G, fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.7 }}>
            "Your voice is your most powerful leadership tool. Let me show you how to use it."
          </p>
        </div>
      </div>
    </div>
    {/* Slots + Investment */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
      <div style={{ background: "#16161C", border: `1px solid rgba(201,168,76,0.2)`, padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.16em' }}>
          Weekly Capacity
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontFamily: G, fontSize: '3.2rem', fontWeight: 700, color: GOLD }}>{slots}</span>
          <span style={{ fontFamily: J, fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Voice Audits</span>
        </div>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: '0 0 18px' }}>This week's available slots</p>
        {/* Gold dots */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
          {Array(10).fill(0).map((_,i) => (
            <div key={i} style={{ width: 18, height: 18, borderRadius: '50%', background: i < slots ? GOLD : 'rgba(201,168,76,0.15)' }}/>
          ))}
        </div>
      </div>

      <div style={{ background: "#16161C", border: `1px solid rgba(201,168,76,0.2)`, padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.16em' }}>
          Investment
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 6px', textDecoration: 'line-through' }}>Regular Price: $99</p>
        <p style={{ fontFamily: G, fontSize: '2.8rem', fontWeight: 700, color: GOLD, margin: '0 0 14px', lineHeight: 1 }}>Today: $49</p>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.65 }}>
          Once this week's 10 spots are gone,<br/>the price returns to $99
        </p>
      </div>
    </div>

    {/* Check items */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 20, flexWrap: 'wrap' }}>
      {['Personal Review','24-Hour Delivery','Custom Exercises','100% Confidential'].map((item,i) => (
        <span key={i} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <CheckIcon />{item}
        </span>
      ))}
    </div>

    {/* Security line */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 28 }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
        Secure your $49 Voice Audit now before the slots are gone.
      </span>
    </div>

    <CtaButton style={{ marginBottom: 14 }}>GET MY $49 VOICE AUDIT →</CtaButton>
    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>100% Secure & Confidential</p>
  </div>
</section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,100px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <SectionLabel center>Take Action Now</SectionLabel>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,6vw,5rem)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.05 }}>
            Your Voice Changes
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.4rem,6vw,5rem)', fontWeight: 700, color: GOLD, margin: '0 0 0', lineHeight: 1.05 }}>
            How People Treat You.
          </h2>

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', margin: '28px 0 40px', lineHeight: 1.7 }}>
            One investment. One conversation. Permanent transformation.
          </p>

          <CtaButton style={{ padding: '20px 56px', marginBottom: 28 }}>
            GET MY $49 VOICE AUDIT →
          </CtaButton>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 52, flexWrap: 'wrap' }}>
            {['Personally Reviewed','Delivered Within 24 Hours','Personalized Exercises Included','100% Confidential'].map((item,i) => (
              <span key={i} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckIcon />{item}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: 1, height: 60, background: 'rgba(255,255,255,0.1)', margin: '0 auto 44px' }}/>

          <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, color: GOLD, margin: '0 0 16px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Personally Analyzed By
          </p>
          <p style={{ fontFamily: G, fontSize: '2rem', fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>Sevil Velsha</p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>MA Linguistics</p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>Voice Researcher</p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0, fontStyle: 'italic' }}>Author of <em>Voice Control</em></p>
        </div>
      </section>

    </div>
    <VoiceAuditFooter />
    </>
  );
}