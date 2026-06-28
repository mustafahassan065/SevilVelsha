// src/routes/Home_New.jsx
// Sevil Velsha — Home Page — pixel-perfect match of screenshots

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home_New() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const G  = "'Cormorant Garamond', Georgia, serif";
  const J  = "'Jost', 'Segoe UI', Arial, sans-serif";
  const GOLD  = '#C9A84C';
  const NAVY  = '#0d1b2a';
  const CREAM = '#f5f2eb';
  const WHITE = '#ffffff';
  const DARK  = '#111827';

  const GoldDash = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ width: 28, height: 1.5, background: GOLD }} />
    </div>
  );

  const Label = ({ children, center }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: center ? 'center' : 'flex-start', marginBottom: 16 }}>
      <div style={{ width: 28, height: 1.5, background: GOLD }} />
      <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, margin: 0 }}>{children}</p>
    </div>
  );

  return (
    <div style={{ fontFamily: J, background: WHITE, color: DARK, overflowX: 'hidden' }}>

      {/* ═══════════════════════════
          NAVBAR
      ═══════════════════════════ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(13,27,42,0.97)' : 'rgba(13,27,42,0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
        padding: '0 clamp(24px,4vw,60px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70,
        transition: 'background 0.3s',
      }}>
        <span style={{ fontFamily: G, fontSize: '22px', fontWeight: 500, color: WHITE, letterSpacing: '0.03em', cursor: 'pointer' }}
          onClick={() => navigate('/')}>
          Sevil <span style={{ fontStyle: 'italic' }}>Velsha</span>
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['About', 'Keynote', 'Book', 'Speaking'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: J, fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
            }}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
            >{l}</a>
          ))}
          <a href="#contact" style={{
            background: GOLD, color: '#111',
            fontFamily: J, fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '10px 22px', textDecoration: 'none',
          }}>Book Sevil</a>
        </div>
      </nav>

      {/* ═══════════════════════════
          HERO — full width bg image
      ═══════════════════════════ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <img src="/images/HomeHero.png" alt="Sevil Velsha"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        {/* Dark overlay — left heavy */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,15,25,0.88) 0%, rgba(10,15,25,0.65) 55%, rgba(10,15,25,0.25) 100%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(100px,12vw,140px) clamp(32px,6vw,80px) clamp(80px,10vw,120px)', maxWidth: 640 }}>
          <Label>PhD Researcher & International Keynote Speaker</Label>

          <h1 style={{ fontFamily: G, fontWeight: 600, margin: '0 0 0', lineHeight: 1.05 }}>
            <span style={{ display: 'block', fontSize: 'clamp(3rem,6vw,5.2rem)', color: WHITE }}>Mesmerizing.</span>
            <span style={{ display: 'block', fontSize: 'clamp(3rem,6vw,5.2rem)', color: GOLD, fontStyle: 'italic' }}>Commanding.</span>
            <span style={{ display: 'block', fontSize: 'clamp(3rem,6vw,5.2rem)', color: WHITE }}>Unforgettable.</span>
          </h1>

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', margin: '28px 0 40px', lineHeight: 1.85, maxWidth: 460 }}>
            Your voice shapes how people see you before they evaluate your ideas. Sevil Velsha helps professionals develop the presence, authority, and vocal power to command every room they enter.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: GOLD, color: '#111',
              fontFamily: J, fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '16px 32px', textDecoration: 'none',
            }}>Book Sevil</a>
            <a href="#keynote" style={{
              background: 'rgba(255,255,255,0.1)', color: WHITE,
              fontFamily: J, fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '16px 32px', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
            }}>View Keynote</a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{
        background: NAVY,
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
      }}>
        {[
          { val: 'PhD', label: 'Stage Speech & Voice Authority' },
          { val: '1', label: 'Flagship Keynote Program' },
          { val: '7+', label: 'Audience Types & Formats' },
          { val: '∞', label: 'Immediate Real-World Impact' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '28px 24px', textAlign: 'center',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}>
            <p style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: GOLD, margin: '0 0 6px', lineHeight: 1 }}>{s.val}</p>
            <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════
          WHY VOICE MATTERS
      ═══════════════════════════ */}
      <section id="about" style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,7vw,100px)', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <Label>Why Voice Matters</Label>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 600, color: DARK, margin: '0', lineHeight: 1.12 }}>
              Give your audience
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 600, color: DARK, margin: '0', lineHeight: 1.12 }}>
              more than
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 400, fontStyle: 'italic', color: DARK, margin: '0 0 28px', lineHeight: 1.12 }}>
              inspiration...
            </h2>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 16px', lineHeight: 1.9 }}>
              Every day, talented professionals are overlooked — not because they lack expertise, but because they struggle to communicate with confidence, authority, and presence.
            </p>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 28px', lineHeight: 1.9 }}>
              Great speakers don't just inform. They move people. They shift energy in a room. Sevil combines years of academic research with high-impact delivery to give your audience tools they can use the moment they leave the stage.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Research-backed communication methodology',
                'Customized content aligned with your organizational goals',
                'Practical tools that create immediate impact',
                'Engaging delivery style that commands attention',
                'Insights drawn from voice science and stage speech research',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: GOLD, fontSize: '14px', flexShrink: 0, marginTop: 1 }}>✦</span>
                  <p style={{ fontSize: '13px', color: '#444', margin: 0, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait on blue bg, full image shown */}
          <div style={{ position: 'relative', alignSelf: 'stretch', minHeight: 480 }}>
            <img src="/images/HomeSec.png" alt="Sevil Velsha portrait"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          SCIENCE OF VOICE
      ═══════════════════════════ */}
      <section style={{ background: NAVY, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,7vw,100px)', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <Label>The Science of Voice</Label>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: WHITE, margin: '0 0 4px', lineHeight: 1.12 }}>
              How powerful
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: WHITE, margin: '0 0 28px', lineHeight: 1.12 }}>
              speakers <span style={{ fontStyle: 'italic', color: GOLD }}>use sound</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: '0 0 14px', lineHeight: 1.9 }}>
              Sevil's academic research uncovered the exact vocal tools the world's most influential speakers use — consciously or not. Pitch variation, strategic pauses, controlled rhythm, precise emphasis.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: '0 0 36px', lineHeight: 1.9 }}>
              These are learnable skills. And in one keynote, your audience will start applying them.
            </p>

            {/* List items with icons — exact match screenshot */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Pitch & Vocal Variation — wave icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ width: 32, height: 32, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="10" viewBox="0 0 32 12" fill="none">
                    <path d="M0,6 C4,1 8,1 12,6 C16,11 20,11 24,6 C28,1 30,1 32,4" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{ fontFamily: G, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Pitch &amp; Vocal Variation</p>
              </div>
              {/* Rhythm & Pacing — bars icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ width: 32, height: 32, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="14" viewBox="0 0 20 16" fill="none">
                    <rect x="0" y="4" width="3" height="12" fill="#C9A84C"/>
                    <rect x="5" y="0" width="3" height="16" fill="#C9A84C"/>
                    <rect x="10" y="6" width="3" height="10" fill="#C9A84C"/>
                    <rect x="15" y="2" width="3" height="14" fill="#C9A84C"/>
                  </svg>
                </div>
                <p style={{ fontFamily: G, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Rhythm &amp; Pacing</p>
              </div>
              {/* Strategic Silence & Pauses — clock/circle icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ width: 32, height: 32, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M12 7v5l3 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{ fontFamily: G, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Strategic Silence &amp; Pauses</p>
              </div>
              {/* Emphasis & Authority — A letter icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ width: 32, height: 32, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: G, fontSize: '16px', fontWeight: 700, color: '#C9A84C', lineHeight: 1 }}>A</span>
                </div>
                <p style={{ fontFamily: G, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Emphasis &amp; Authority</p>
              </div>
            </div>
          </div>

          {/* Right — wave graphic + text */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', margin: '0 0 32px', alignSelf: 'flex-end' }}>
              Vocal Authority
            </p>
            {/* Wave SVG */}
            <svg width="100%" height="120" viewBox="0 0 380 120" style={{ display: 'block', marginBottom: 20 }}>
              {/* Main wave */}
              <path d="M0,60 C30,20 60,20 90,60 C120,100 150,100 180,60 C210,20 240,20 270,60 C300,100 330,100 360,60 C370,50 375,48 380,50"
                fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
              {/* Second wave slightly offset */}
              <path d="M20,70 C50,35 80,35 110,70 C140,105 170,105 200,70 C230,35 260,35 290,70 C320,105 350,90 380,70"
                fill="none" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
              {/* Dot on wave */}
              <circle cx="190" cy="60" r="5" fill={GOLD}/>
            </svg>
            <p style={{ fontFamily: G, fontSize: '13px', fontStyle: 'italic', color: 'rgba(255,255,255,0.25)', margin: '16px 0 0', letterSpacing: '0.06em' }}>
              the voice control method
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          ABOUT SEVIL
      ═══════════════════════════ */}
      <section style={{ background: WHITE, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,7vw,100px)', alignItems: 'center' }}>
          {/* Left — portrait full, uncropped */}
          <div style={{ alignSelf: 'stretch', minHeight: 480, position: 'relative' }}>
            <img src="/images/HomeThird.png" alt="Sevil Velsha"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          </div>

          {/* Right */}
          <div>
            <Label>About Sevil</Label>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 600, color: DARK, margin: '0 0 24px', lineHeight: 1.15 }}>
              Hi, I'm Sevil <span style={{ fontStyle: 'italic', color: GOLD }}>Velsha.</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 14px', lineHeight: 1.9 }}>
              I'm a speaker, educator, and researcher specializing in voice, communication, executive presence, and stage speech. For years I've studied what makes certain voices cut through the noise — and what keeps talented people invisible.
            </p>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 14px', lineHeight: 1.9 }}>
              My academic research explored how powerful speakers use pitch, pauses, rhythm, emphasis, and vocal control to influence audiences. Today, I help professionals apply these same principles in meetings, presentations, interviews, and leadership roles.
            </p>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 28px', lineHeight: 1.9 }}>
              Whether you're on a global stage or in a boardroom with 10 executives, I will not only teach you how to speak — I'll teach you how to be heard.
            </p>

            <div style={{ height: 1, background: '#e8e4dc', margin: '0 0 24px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                "Master's Degree in English & Linguistics",
                'PhD Research in Stage Speech & Voice Authority',
                'Author of The Voice Control Method',
                'Communication Educator, Coach & International Speaker',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: GOLD, flexShrink: 0, marginTop: 6 }} />
                  <p style={{ fontSize: '13px', color: '#444', margin: 0, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          SIGNATURE KEYNOTE
      ═══════════════════════════ */}
      <section id="keynote" style={{ background: NAVY, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,6vw,80px)', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Left */}
          <div>
            <Label>Signature Keynote</Label>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', fontWeight: 600, color: WHITE, margin: '0 0 0', lineHeight: 1.08 }}>
              From Invisible
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', fontWeight: 600, color: WHITE, margin: '0 0 14px', lineHeight: 1.08 }}>
              to Unignorable
            </h2>
            <p style={{ fontFamily: G, fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', margin: '0 0 20px' }}>
              How Your Voice Shapes Authority Before Your Words Do
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: '0 0 28px', lineHeight: 1.9 }}>
              This practical, research-backed keynote reveals the communication habits that influence confidence, credibility, and leadership presence. Your audience leaves with tools they can apply immediately to communicate more effectively and make a stronger impact.
            </p>
            {/* 3x2 bullet grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px', marginBottom: 32 }}>
              {['Sound more confident', 'Create executive presence', 'Use silence strategically', 'Communicate with authority', 'Increase influence & credibility', 'Deliver presentations effectively'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: GOLD, flexShrink: 0, fontSize: '12px', marginTop: 1 }}>✦</span>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>
            <a href="#contact" style={{
              display: 'inline-block', background: GOLD, color: '#111',
              fontFamily: J, fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '16px 32px', textDecoration: 'none',
            }}>Book This Keynote</a>
          </div>

          {/* Right — keynote stage image */}
          <div style={{ position: 'relative' }}>
            {/* "FLAGSHIP KEYNOTE" badge */}
            <div style={{
              position: 'absolute', top: 16, left: 16, zIndex: 2,
              background: GOLD, color: '#111',
              fontFamily: J, fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '7px 14px',
            }}>Flagship Keynote</div>
            <img src="/images/HomeFourth.png" alt="Sevil Velsha keynote on stage"
              style={{ width: '100%', height: 'clamp(380px,50vw,520px)', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          5 REASONS
      ═══════════════════════════ */}
      <section style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40, alignItems: 'end' }}>
            <div>
              <Label>Why Book Sevil</Label>
              <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4.5vw,3.4rem)', fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
                5 Reasons to Book <span style={{ fontStyle: 'italic', color: GOLD }}>Sevil</span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: 1.85 }}>
                High-energy delivery that captivates audiences through dynamic storytelling, interaction, and research-backed messages that stick. Sevil's presentations are never off-the-shelf — they're tailored to your audience and your goals.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { title: 'Research-Based Insights', body: "Every strategy Sevil shares is grounded in academic research on voice, stage speech, and executive communication — not generic motivational advice." },
              { title: 'Tools & Take-Aways', body: 'Sevil focuses on "The How." Audience members leave with straightforward, actionable approaches to change how they sound and show up — immediately.' },
              { title: 'Fully Customized', body: "Every presentation is tailored to your audience's specific needs. Sevil takes time to understand your organization and adapts her content to deliver maximum relevance." },
              { title: 'Super Relatable', body: "Sevil brings authentic authority and conviction on stage, making even complex ideas accessible and actionable for any audience — from C-suite to rising leaders." },
            ].map((item, i) => (
              <div key={i} style={{
                background: WHITE,
                borderTop: `2px solid ${GOLD}`,
                padding: '28px 28px 32px',
              }}>
                {/* Gold + icon */}
                <div style={{
                  width: 32, height: 32, border: `1.5px solid ${GOLD}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <span style={{ color: GOLD, fontSize: '18px', lineHeight: 1, fontWeight: 300 }}>+</span>
                </div>
                <h3 style={{ fontFamily: G, fontSize: '1.2rem', fontWeight: 700, color: DARK, margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}

            {/* 5th full width */}
            <div style={{
              gridColumn: '1 / -1', background: WHITE,
              borderTop: `2px solid ${GOLD}`,
              padding: '28px 28px 32px',
            }}>
              <div style={{ width: 32, height: 32, border: `1.5px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <span style={{ color: GOLD, fontSize: '18px', lineHeight: 1, fontWeight: 300 }}>+</span>
              </div>
              <h3 style={{ fontFamily: G, fontSize: '1.2rem', fontWeight: 700, color: DARK, margin: '0 0 12px' }}>Engaging & Interactive Presentations</h3>
              <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: 1.8, maxWidth: 700 }}>
                Sevil is a pleasure to work with — a true professional who makes the entire process seamless and enjoyable. From first conversation to final bow, she ensures everyone involved feels supported, prepared, and excited for what's ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          QUOTE
      ═══════════════════════════ */}
      <section style={{ background: NAVY, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Faint silhouette bg */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'url(/images/HomeFourth.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: G, fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', fontStyle: 'italic', fontWeight: 400, color: WHITE, margin: '0 0 0', lineHeight: 1.65 }}>
            "The most powerful tool you have in any room isn't your slide deck. It isn't your résumé.
          </p>
          <p style={{ fontFamily: G, fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', fontStyle: 'italic', fontWeight: 400, color: GOLD, margin: '0 0 28px', lineHeight: 1.65 }}>
            It's the sound of your voice."
          </p>
          <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            — Sevil Velsha, The Voice Control Method
          </p>
        </div>
      </section>

      {/* ═══════════════════════════
          BOOK SECTION
      ═══════════════════════════ */}
      <section style={{ background: WHITE, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,7vw,100px)', alignItems: 'center' }}>
          {/* Left — book */}
          <div>
            <img src="/images/HomeFifth.png" alt="The Voice Control Method book"
              style={{ width: '100%', maxWidth: 380, height: 'auto', objectFit: 'cover', display: 'block', borderRadius: 8 }} />
          </div>

          {/* Right */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 1.5, background: GOLD }} />
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: 0 }}>Featured Author</p>
            </div>
            <div style={{ display: 'inline-block', border: `1px solid ${GOLD}`, color: GOLD, fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '6px 16px', marginBottom: 20 }}>
              Now Available
            </div>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 600, color: DARK, margin: '0 0 20px', lineHeight: 1.1 }}>
              The Voice Control <span style={{ fontStyle: 'italic' }}>Method</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 14px', lineHeight: 1.9 }}>
              Author of <em>The Voice Control Method</em> — a research-based communication framework that helps professionals develop executive presence, influence, and vocal authority.
            </p>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 14px', lineHeight: 1.9 }}>
              Built on years of academic research in stage speech and voice science, this book gives you the exact tools used by the world's most commanding communicators — distilled into a practical system you can apply today.
            </p>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 32px', lineHeight: 1.9 }}>
              Whether you're preparing for a board presentation, a job interview, or a keynote, The Voice Control Method gives you the structure, the strategies, and the science to show up with undeniable authority.
            </p>
            <a href="/voice-control-book" style={{
              display: 'inline-block', background: GOLD, color: '#111',
              fontFamily: J, fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '16px 32px', textDecoration: 'none',
            }}>Learn More About the Book</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          WHO BOOKS SEVIL
      ═══════════════════════════ */}
      <section style={{ background: NAVY, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Label>Perfect For</Label>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: WHITE, margin: '0 0 48px', lineHeight: 1.1 }}>
            Who Books <span style={{ fontStyle: 'italic', color: GOLD }}>Sevil</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
            {[
              'Corporate Conferences', 'Leadership Events', 'Professional Associations',
              'Educational Institutions', 'Entrepreneur Communities', "Women's Leadership Programs",
              'Podcasts & Summits', 'Keynotes & Workshops', 'Executive Retreats',
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '18px 20px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                <p style={{ fontFamily: G, fontSize: '1rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          CONTACT
      ═══════════════════════════ */}
      <section id="contact" style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(32px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>Contact</p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 600, color: DARK, margin: '0', lineHeight: 1.1 }}>
            To find out more,
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, fontStyle: 'italic', color: DARK, margin: '0 0 20px', lineHeight: 1.1 }}>
            book Sevil.
          </h2>
          <p style={{ fontSize: '14px', color: '#666', margin: '0 0 40px', lineHeight: 1.85 }}>
            Bring research-backed communication strategies to your audience. Whether it's a keynote, workshop, podcast, or summit, Sevil delivers an experience your attendees will remember.
          </p>

          {/* Email + Website boxes */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
            <div style={{ border: '1px solid #d8d3cc', padding: '18px 28px', minWidth: 180, textAlign: 'left' }}>
              <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>Email</p>
              <a href="mailto:sevilvelsha@gmail.com" style={{ fontFamily: G, fontSize: '1rem', color: DARK, textDecoration: 'none' }}>sevilvelsha@gmail.com</a>
            </div>
            <div style={{ border: '1px solid #d8d3cc', padding: '18px 28px', minWidth: 180, textAlign: 'left' }}>
              <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>Website</p>
              <a href="https://sevilvelsha.com" style={{ fontFamily: G, fontSize: '1rem', color: DARK, textDecoration: 'none' }}>sevilvelsha.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            {/* WhatsApp button */}
            <a href="https://wa.me/17786366633" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#25D366', color: WHITE,
              fontFamily: J, fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '17px 32px', textDecoration: 'none',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.999 2C6.478 2 2 6.478 2 12c0 1.895.524 3.668 1.434 5.184L2 22l4.978-1.404A9.935 9.935 0 0012 22c5.522 0 10-4.478 10-10S17.521 2 11.999 2z" fillRule="evenodd" clipRule="evenodd"/>
              </svg>
              WhatsApp
            </a>
            {/* Email button */}
            <a href="mailto:sevilvelsha@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: DARK, color: WHITE,
              fontFamily: J, fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '17px 32px', textDecoration: 'none',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5"/>
                <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.5"/>
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          FOOTER
      ═══════════════════════════ */}
      <footer style={{
        background: NAVY,
        padding: '28px clamp(32px,4vw,60px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{ fontFamily: G, fontSize: '20px', fontWeight: 500, color: WHITE, letterSpacing: '0.03em' }}>
          Sevil <span style={{ fontStyle: 'italic', color: GOLD }}>Velsha</span>
        </span>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {['About', 'Keynote', 'Book', 'Contact', 'Website'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: J, fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <p style={{ fontFamily: J, fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2026 Sevil Velsha. All rights reserved.</p>
      </footer>

    </div>
  );
}