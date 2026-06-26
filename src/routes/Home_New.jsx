// src/routes/Home.jsx
// Sevil Velsha — Home / Landing Page
// Exact match of PDF design

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const G = "'Cormorant Garamond', Georgia, serif";
  const J = "'Jost', 'Segoe UI', Arial, sans-serif";
  const GOLD   = '#C9A84C';
  const DARK   = '#0f0e0c';
  const DARK2  = '#13120f';
  const NAVY   = '#0d1117';
  const CREAM  = '#f5f2ec';
  const MUTED  = 'rgba(255,255,255,0.5)';

  const GoldLine = ({ width = 40, my = 24 }) => (
    <div style={{ width, height: 2, background: GOLD, margin: `${my}px 0` }} />
  );

  const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={GOLD}>
      <path d="M12 2l2.09 6.26L21 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const WaveIcon = () => (
    <svg width="280" height="48" viewBox="0 0 280 48" fill="none" style={{ display: 'block' }}>
      <path d="M0,24 C14,8 28,8 42,24 C56,40 70,40 84,24 C98,8 112,8 126,24 C140,40 154,40 168,24 C182,8 196,8 210,24 C224,40 238,40 252,24 C266,8 274,8 280,20"
        stroke={GOLD} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M0,32 C14,20 28,20 42,32 C56,44 70,44 84,32 C98,20 112,20 126,32 C140,44 154,44 168,32 C182,20 196,20 210,32 C224,44 238,44 252,32 C266,20 274,20 280,28"
        stroke={GOLD} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );

  const navLinks = ['About', 'Keynote', 'Book', 'Speaking'];

  return (
    <div style={{ fontFamily: J, background: DARK, color: '#fff', overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════════ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(15,14,12,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
        transition: 'background 0.4s, border 0.4s',
        padding: '0 clamp(24px,4vw,60px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72,
      }}>
        {/* Logo */}
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: G, fontSize: '22px', fontWeight: 600, color: '#fff', letterSpacing: '0.04em' }}>
            Sevil Velsha
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontFamily: J, fontSize: '12px', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >{link}</a>
          ))}
          <a href="#contact" style={{
            background: GOLD, color: '#111',
            fontFamily: J, fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '11px 24px', textDecoration: 'none',
          }}>Book Sevil</a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh', background: DARK2,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Left */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(100px,12vw,160px) clamp(24px,5vw,80px) clamp(60px,8vw,100px) clamp(40px,6vw,80px)',
        }}>
          <p style={{
            fontFamily: J, fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: GOLD, margin: '0 0 32px',
          }}>
            PhD Researcher & International Keynote Speaker
          </p>

          <h1 style={{ fontFamily: G, fontWeight: 600, margin: 0, lineHeight: 1.05 }}>
            <span style={{ display: 'block', fontSize: 'clamp(3rem,6.5vw,5.5rem)', color: '#fff' }}>Mesmerizing.</span>
            <span style={{ display: 'block', fontSize: 'clamp(3rem,6.5vw,5.5rem)', color: '#fff' }}>Commanding.</span>
            <span style={{ display: 'block', fontSize: 'clamp(3rem,6.5vw,5.5rem)', color: GOLD, fontStyle: 'italic' }}>Unforgettable.</span>
          </h1>

          <p style={{
            fontSize: '15px', color: 'rgba(255,255,255,0.55)',
            margin: '32px 0 48px', lineHeight: 1.8, maxWidth: 440,
          }}>
            Your voice shapes how people see you before they evaluate your ideas. Sevil Velsha helps professionals develop the presence, authority, and vocal power to command every room they enter.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: GOLD, color: '#111',
              fontFamily: J, fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '18px 36px', textDecoration: 'none',
            }}>Book Sevil</a>
            <a href="#keynote" style={{
              background: 'transparent', color: '#fff',
              fontFamily: J, fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '18px 36px', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.25)',
            }}>View Keynote</a>
          </div>

          {/* Scroll indicator */}
          <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.2)' }} />
            <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: 0 }}>Scroll</p>
          </div>
        </div>

        {/* Right — hero image */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#0a0a0d' }}>
          <img src="/images/hero-sevil.jpg" alt="Sevil Velsha on stage"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.5) 0%, transparent 50%)' }} />
        </div>

        {/* Stats bar — bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(15,14,12,0.92)',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          backdropFilter: 'blur(8px)',
        }}>
          {[
            { val: 'PhD', label: 'Stage Speech & Voice Authority' },
            { val: '1', label: 'Flagship Keynote Program' },
            { val: '7+', label: 'Audience Types & Formats' },
            { val: '∞', label: 'Immediate Real-World Impact' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '24px 28px',
              borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: G, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, color: GOLD, margin: '0 0 4px' }}>{s.val}</p>
              <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY VOICE MATTERS
      ═══════════════════════════════════════════ */}
      <section id="about" style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,100px)', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
              Why Voice Matters
            </p>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: DARK, margin: '0 0 0', lineHeight: 1.15 }}>
              Give your audience
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: DARK, margin: '0 0 0', lineHeight: 1.15 }}>
              more than
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, fontStyle: 'italic', color: DARK, margin: '0 0 32px', lineHeight: 1.15 }}>
              inspiration…
            </h2>
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 16px', lineHeight: 1.85 }}>
              Every day, talented professionals are overlooked — not because they lack expertise, but because they struggle to communicate with confidence, authority, and presence.
            </p>
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 32px', lineHeight: 1.85 }}>
              Great speakers don't just inform. They move people. They shift energy in a room. Sevil combines years of academic research with high-impact delivery to give your audience tools they can use the moment they leave the stage.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Research-backed communication methodology',
                'Customized content aligned with your organizational goals',
                'Practical tools that create immediate impact',
                'Engaging delivery style that commands attention',
                'Insights drawn from voice science and stage speech research',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: GOLD, marginTop: 2, flexShrink: 0 }}>✦</span>
                  <p style={{ fontSize: '14px', color: '#444', margin: 0, lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div style={{ position: 'relative' }}>
            <img src="/images/sevil-speaking.jpg" alt="Sevil Velsha speaking"
              style={{ width: '100%', height: 'clamp(400px,50vw,600px)', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: -20, left: -20, width: 80, height: 80, background: GOLD, opacity: 0.15 }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SCIENCE OF VOICE
      ═══════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,100px)', alignItems: 'center' }}>
          {/* Left — image */}
          <div style={{ position: 'relative' }}>
            <img src="/images/sevil-stage.jpg" alt="Sevil on stage"
              style={{ width: '100%', height: 'clamp(400px,50vw,580px)', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          </div>

          {/* Right */}
          <div>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
              The Science of Voice
            </p>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 600, color: '#fff', margin: '0 0 8px', lineHeight: 1.15 }}>
              How powerful
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 600, color: '#fff', margin: '0 0 8px', lineHeight: 1.15 }}>
              speakers <span style={{ fontStyle: 'italic', color: GOLD }}>use sound</span>
            </h2>
            <GoldLine />
            <p style={{ fontSize: '15px', color: MUTED, margin: '0 0 28px', lineHeight: 1.85 }}>
              Sevil's academic research uncovered the exact vocal tools the world's most influential speakers use — consciously or not. Pitch variation, strategic pauses, controlled rhythm, precise emphasis.
            </p>
            <p style={{ fontSize: '15px', color: MUTED, margin: '0 0 36px', lineHeight: 1.85 }}>
              These are learnable skills. And in one keynote, your audience will start applying them.
            </p>

            {/* Wave graphic */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 12px' }}>
                Vocal Authority
              </p>
              <WaveIcon />
            </div>

            {/* Method list */}
            <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', padding: '24px' }}>
              <p style={{ fontFamily: J, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
                The Voice Control Method
              </p>
              {['Pitch & Vocal Variation', 'Rhythm & Pacing', 'Strategic Silence & Pauses', 'Emphasis & Authority'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: i < 3 ? 10 : 0 }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT SEVIL
      ═══════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,100px)', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
              About Sevil
            </p>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: DARK, margin: '0 0 4px', lineHeight: 1.15 }}>
              Hi, I'm Sevil <span style={{ fontStyle: 'italic', color: GOLD }}>Velsha.</span>
            </h2>
            <GoldLine />
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 16px', lineHeight: 1.85 }}>
              I'm a speaker, educator, and researcher specializing in voice, communication, executive presence, and stage speech. For years I've studied what makes certain voices cut through the noise — and what keeps talented people invisible.
            </p>
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 16px', lineHeight: 1.85 }}>
              My academic research explored how powerful speakers use pitch, pauses, rhythm, emphasis, and vocal control to influence audiences. Today, I help professionals apply these same principles in meetings, presentations, interviews, and leadership roles.
            </p>
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 36px', lineHeight: 1.85 }}>
              Whether you're on a global stage or in a boardroom with 10 executives, I will not only teach you how to speak — I'll teach you how to be heard.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                "Master's Degree in English & Linguistics",
                'PhD Research in Stage Speech & Voice Authority',
                'Author of The Voice Control Method',
                'Communication Educator, Coach & International Speaker',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: GOLD, marginTop: 2, flexShrink: 0, fontSize: '10px' }}>✦</span>
                  <p style={{ fontSize: '14px', color: '#444', margin: 0, lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div>
            <img src="/images/sevil-portrait.jpg" alt="Sevil Velsha"
              style={{ width: '100%', height: 'clamp(420px,55vw,640px)', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SIGNATURE KEYNOTE
      ═══════════════════════════════════════════ */}
      <section id="keynote" style={{ background: NAVY, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
              Signature Keynote
            </p>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 600, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 }}>
              From Invisible
            </h2>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 600, fontStyle: 'italic', color: GOLD, margin: '0 0 4px', lineHeight: 1.1 }}>
              to Unignorable
            </h2>
            <GoldLine />
            <p style={{ fontFamily: G, fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', margin: '0 0 24px' }}>
              How Your Voice Shapes Authority Before Your Words Do
            </p>
            <p style={{ fontSize: '15px', color: MUTED, margin: '0 0 32px', lineHeight: 1.85 }}>
              This practical, research-backed keynote reveals the communication habits that influence confidence, credibility, and leadership presence. Your audience leaves with tools they can apply immediately to communicate more effectively and make a stronger impact.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: 36 }}>
              {['Sound more confident', 'Create executive presence', 'Use silence strategically', 'Communicate with authority', 'Increase influence & credibility', 'Deliver presentations effectively'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: GOLD, flexShrink: 0 }}>✦</span>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', color: GOLD, fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 14px' }}>
                Flagship Keynote
              </span>
            </div>
            <div style={{ marginTop: 28 }}>
              <a href="#contact" style={{
                display: 'inline-block', background: GOLD, color: '#111',
                fontFamily: J, fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '16px 36px', textDecoration: 'none',
              }}>Book This Keynote</a>
            </div>
          </div>

          {/* Right — keynote image */}
          <div>
            <img src="/images/sevil-keynote.jpg" alt="Sevil Velsha keynote"
              style={{ width: '100%', height: 'clamp(380px,50vw,560px)', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5 REASONS TO BOOK SEVIL
      ═══════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: DARK, margin: '0 0 16px', lineHeight: 1.15 }}>
            5 Reasons to Book <span style={{ fontStyle: 'italic', color: GOLD }}>Sevil</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#666', margin: '0 0 56px', lineHeight: 1.8, maxWidth: 580 }}>
            High-energy delivery that captivates audiences through dynamic storytelling, interaction, and research-backed messages that stick. Sevil's presentations are never off-the-shelf — they're tailored to your audience and your goals.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { num: '01', title: 'Research-Based Insights', body: "Every strategy Sevil shares is grounded in academic research on voice, stage speech, and executive communication — not generic motivational advice." },
              { num: '02', title: 'Tools & Take Aways', body: "Sevil focuses on The How. Audience members leave with straightforward, actionable approaches to change how they sound and show up — immediately." },
              { num: '03', title: 'Fully Customized', body: "Every presentation is tailored to your audience's specific needs. Sevil takes time to understand your organization and adapts her content to deliver maximum relevance." },
              { num: '04', title: 'Super Relatable', body: "Sevil brings authentic authority and conviction on stage, making even complex ideas accessible and actionable for any audience — from C-suite to rising leaders." },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e8e4dc', padding: '32px 28px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 16, right: 20, fontFamily: G, fontSize: '3.5rem', fontWeight: 700, color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}>{item.num}</div>
                <div style={{ marginBottom: 12 }}><StarIcon /></div>
                <h3 style={{ fontFamily: G, fontSize: '1.25rem', fontWeight: 700, color: DARK, margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}

            {/* Full width 5th */}
            <div style={{ gridColumn: '1 / -1', background: '#fff', border: '1px solid #e8e4dc', padding: '32px 28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 16, right: 20, fontFamily: G, fontSize: '3.5rem', fontWeight: 700, color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}>05</div>
              <div style={{ marginBottom: 12 }}><StarIcon /></div>
              <h3 style={{ fontFamily: G, fontSize: '1.25rem', fontWeight: 700, color: DARK, margin: '0 0 12px' }}>Engaging & Interactive Presentations</h3>
              <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: 1.75, maxWidth: 680 }}>
                Sevil is a pleasure to work with — a true professional who makes the entire process seamless and enjoyable. From first conversation to final bow, she ensures everyone involved feels supported, prepared, and excited for what's ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          QUOTE
      ═══════════════════════════════════════════ */}
      <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: G, fontSize: 'clamp(1.4rem,3.5vw,2.4rem)', fontStyle: 'italic', fontWeight: 400, color: '#fff', margin: '0 0 28px', lineHeight: 1.6 }}>
            "The most powerful tool you have in any room isn't your slide deck. It isn't your résumé.
          </p>
          <p style={{ fontFamily: G, fontSize: 'clamp(1.4rem,3.5vw,2.4rem)', fontStyle: 'italic', fontWeight: 400, color: GOLD, margin: '0 0 32px', lineHeight: 1.6 }}>
            It's the sound of your voice."
          </p>
          <p style={{ fontFamily: J, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            — Sevil Velsha, The Voice Control Method
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOOK SECTION
      ═══════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
          {/* Book cover */}
          <div style={{ position: 'relative' }}>
            <img src="/images/book-cover.jpg" alt="The Voice Control Method"
              style={{ width: '100%', maxWidth: 320, height: 'auto', objectFit: 'cover', display: 'block', boxShadow: '0 24px 60px rgba(0,0,0,0.2)' }} />
          </div>

          {/* Content */}
          <div>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 6px' }}>
              Featured Author
            </p>
            <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', margin: '0 0 20px' }}>
              Now Available
            </p>
            <h2 style={{ fontFamily: G, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 600, color: DARK, margin: '0 0 0', lineHeight: 1.15 }}>
              The Voice <span style={{ fontStyle: 'italic' }}>Control</span> Method
            </h2>
            <GoldLine />
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 16px', lineHeight: 1.85 }}>
              Author of The Voice Control Method — a research-based communication framework that helps professionals develop executive presence, influence, and vocal authority.
            </p>
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 16px', lineHeight: 1.85 }}>
              Built on years of academic research in stage speech and voice science, this book gives you the exact tools used by the world's most commanding communicators — distilled into a practical system you can apply today.
            </p>
            <p style={{ fontSize: '15px', color: '#555', margin: '0 0 36px', lineHeight: 1.85 }}>
              Whether you're preparing for a board presentation, a job interview, or a keynote, The Voice Control Method gives you the structure, the strategies, and the science to show up with undeniable authority.
            </p>
            <a href="/voice-control-book" style={{
              display: 'inline-block', background: DARK, color: '#fff',
              fontFamily: J, fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '16px 36px', textDecoration: 'none',
            }}>Learn More About the Book</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO BOOKS SEVIL
      ═══════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
            Perfect For
          </p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#fff', margin: '0 0 48px', lineHeight: 1.15 }}>
            Who Books <span style={{ fontStyle: 'italic', color: GOLD }}>Sevil</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              'Corporate Conferences', 'Leadership Events', 'Professional Associations',
              'Educational Institutions', 'Entrepreneur Communities', "Women's Leadership Programs",
              'Podcasts & Summits', 'Keynotes & Workshops', 'Executive Retreats',
            ].map((item, i) => (
              <div key={i} style={{
                border: '1px solid rgba(201,168,76,0.2)',
                padding: '20px 24px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ color: GOLD, flexShrink: 0 }}>✦</span>
                <p style={{ fontFamily: G, fontSize: '1rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════ */}
      <section id="contact" style={{ background: CREAM, padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
            Contact
          </p>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 600, color: DARK, margin: '0 0 4px', lineHeight: 1.1 }}>
            To find out more,
          </h2>
          <h2 style={{ fontFamily: G, fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 600, fontStyle: 'italic', color: DARK, margin: '0 0 20px', lineHeight: 1.1 }}>
            book Sevil.
          </h2>
          <GoldLine width={40} />
          <p style={{ fontSize: '15px', color: '#666', margin: '0 0 48px', lineHeight: 1.85 }}>
            Bring research-backed communication strategies to your audience. Whether it's a keynote, workshop, podcast, or summit, Sevil delivers an experience your attendees will remember.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 40, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>Email</p>
              <a href="mailto:sevilvelsha@gmail.com" style={{ fontFamily: G, fontSize: '1.1rem', color: DARK, textDecoration: 'none' }}>sevilvelsha@gmail.com</a>
            </div>
            <div>
              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>Website</p>
              <a href="https://sevilvelsha.com" style={{ fontFamily: G, fontSize: '1.1rem', color: DARK, textDecoration: 'none' }}>sevilvelsha.com</a>
            </div>
          </div>

          <a href="mailto:sevilvelsha@gmail.com" style={{
            display: 'inline-block', background: DARK, color: '#fff',
            fontFamily: J, fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '18px 48px', textDecoration: 'none',
          }}>Send an Email</a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer style={{
        background: DARK2,
        borderTop: '1px solid rgba(201,168,76,0.1)',
        padding: '28px clamp(24px,4vw,60px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{ fontFamily: G, fontSize: '18px', fontWeight: 600, color: '#fff', letterSpacing: '0.04em' }}>Sevil Velsha</span>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {['About', 'Keynote', 'Book', 'Contact', 'Website'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ fontFamily: J, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{link}</a>
          ))}
        </div>
        <p style={{ fontFamily: J, fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2026 Sevil Velsha. All rights reserved.</p>
      </footer>

    </div>
  );
}