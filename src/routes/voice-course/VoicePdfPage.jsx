// src/routes/voice-course/VoicePdfPage.jsx
// Route: /voice-control-pdf
// PDF lead capture — name + email → download PDF + Resend email
// Added: email typo detection + domain suggestion

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PDF_EMBED    = 'https://drive.google.com/file/d/1UNZw12zVLbOyymp5KE-v5_-Qy5RHI1Hr/preview';
const PDF_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=1UNZw12zVLbOyymp5KE-v5_-Qy5RHI1Hr';
const LEAD_API = 'https://sevil-velsha-backend-main.vercel.app/api/voice-free-lead';
const COURSE_URL  = '/voice-control-course';

const DARK  = '#1a1a1a';
const GOLD  = '#c9a96e';
const LIGHT = '#f9f7f3';
const WHITE = '#ffffff';
const MUTED = '#777777';

const G = { fontFamily: "Georgia, 'Times New Roman', serif" };
const J = { fontFamily: "'Segoe UI', Arial, sans-serif" };

// ── Email typo detection ──────────────────────────────────────────
const DOMAIN_TYPOS = {
  'gmail.cem':'gmail.com','gmail.con':'gmail.com','gmail.cmo':'gmail.com',
  'gmail.cm':'gmail.com','gmail.co':'gmail.com','gmail.om':'gmail.com',
  'gmial.com':'gmail.com','gmai.com':'gmail.com','gmil.com':'gmail.com',
  'gmal.com':'gmail.com','gnail.com':'gmail.com','gmaill.com':'gmail.com',
  'gamil.com':'gmail.com','gemail.com':'gmail.com','gmaio.com':'gmail.com',
  'yahoo.cem':'yahoo.com','yahoo.con':'yahoo.com','yaho.com':'yahoo.com',
  'yahooo.com':'yahoo.com','yhoo.com':'yahoo.com','yaoo.com':'yahoo.com',
  'hotmail.cem':'hotmail.com','hotmail.con':'hotmail.com','hotmial.com':'hotmail.com',
  'hotmai.com':'hotmail.com','hotmall.com':'hotmail.com','hotmal.com':'hotmail.com',
  'outlook.cem':'outlook.com','outlook.con':'outlook.com','outlok.com':'outlook.com',
  'outloook.com':'outlook.com','outllook.com':'outlook.com',
  'icloud.cem':'icloud.com','icloud.con':'icloud.com','iclod.com':'icloud.com',
};

function detectTypo(email) {
  const parts = email.trim().toLowerCase().split('@');
  if (parts.length !== 2) return null;
  const domain = parts[1];
  if (DOMAIN_TYPOS[domain]) return `${parts[0]}@${DOMAIN_TYPOS[domain]}`;
  return null;
}
// ─────────────────────────────────────────────────────────────────

export default function VoicePdfPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName]     = useState('');
  const [email, setEmail]             = useState('');
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState('');
  const [done, setDone]               = useState(false);
  const [suggestion, setSuggestion]   = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleEmailBlur = () => {
    if (!email.trim()) return;
    const fix = detectTypo(email);
    setSuggestion(fix || '');
  };

  const applySuggestion = () => {
    setEmail(suggestion);
    setSuggestion('');
    setError('');
  };

  const handleSubmit = async () => {
    if (!firstName.trim() || !email.trim()) { setError('Please enter your name and email.'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Please enter a valid email address.'); return; }
    const fix = detectTypo(email);
    if (fix) { setSuggestion(fix); setError('Please check your email address before submitting.'); return; }
    setLoading(true); setError(''); setSuggestion('');
    try {
      await fetch(LEAD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: firstName.trim(), email: email.trim(), source: 'pdf_lead' }),
      });
      localStorage.setItem('vc_free_name', firstName.trim());
      setDone(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── THANK YOU STATE ───────────────────────────────────────────
  if (done) {
    return (
      <div style={{ ...J, background: LIGHT, minHeight: '100vh' }}>
        <nav style={{ background: DARK, padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span onClick={() => navigate('/')} style={{ ...G, fontSize: '18px', fontWeight: 700, letterSpacing: '0.15em', color: '#f5f4f0', cursor: 'pointer' }}>
            Sevil Velsha
          </span>
        </nav>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: 'clamp(60px,10vw,100px) 24px', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5 9-10" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '0 0 12px' }}>Your PDF Is Ready</p>
          <h1 style={{ ...G, fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 700, color: DARK, margin: '0 0 16px', lineHeight: 1.2 }}>
            Thank you, {firstName}.
          </h1>
          <p style={{ fontSize: '15px', color: MUTED, margin: '0 0 40px', lineHeight: 1.7 }}>
            Thank you for downloading the Voice Control guide. Your PDF is ready below.
          </p>
          <div style={{ width:'100%', height:'clamp(600px, 85vh, 1000px)', border:'1px solid #e8e4dc', marginBottom:24, borderRadius:4, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,0,0,0.08)' }}>
            <iframe src={PDF_EMBED} title="Voice Control PDF" style={{ width:'100%', height:'100%', border:'none' }} allowFullScreen/>
          </div>
          <a href={PDF_DOWNLOAD} target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: GOLD, color: DARK, fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none', marginBottom: 40 }}>
            ↓ Download PDF
          </a>
          <div style={{ width: 40, height: 1, background: GOLD, margin: '0 auto 36px' }}/>
          <p style={{ ...G, fontSize: '1.1rem', color: DARK, marginBottom: 12 }}>Want deeper training?</p>
          <p style={{ fontSize: '14px', color: MUTED, marginBottom: 24, lineHeight: 1.7 }}>Explore the full Voice Control course and book.</p>
          <button onClick={() => navigate(COURSE_URL)}
            style={{ background: DARK, color: WHITE, border: 'none', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '14px 40px', cursor: 'pointer' }}>
            Explore Voice Control →
          </button>
        </div>
      </div>
    );
  }

  // ── EMAIL FIELD with typo UI (reusable block) ─────────────────

  // ── MAIN PAGE ─────────────────────────────────────────────────
  return (
    <div style={{ ...J, background: LIGHT, minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: DARK, padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span onClick={() => navigate('/')} style={{ ...G, fontSize: '18px', fontWeight: 700, letterSpacing: '0.15em', color: '#f5f4f0', cursor: 'pointer' }}>
          Sevil Velsha
        </span>
        <button onClick={() => navigate(COURSE_URL)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '8px 20px', cursor: 'pointer' }}>
          View Full Course
        </button>
      </nav>

      {/* HERO */}
      <div style={{ background: DARK, padding: 'clamp(48px,8vw,80px) 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>Free Download</p>
        <h1 style={{ ...G, fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: WHITE, margin: '0 0 16px', lineHeight: 1.2, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          Download the Free Voice Control PDF
        </h1>
        <p style={{ ...G, fontSize: 'clamp(1rem,2.2vw,1.3rem)', fontStyle: 'italic', fontWeight: 400, color: GOLD, margin: '0 0 20px' }}>
          5 Voice Mistakes That Make People Ignore You
        </p>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', margin: '0 auto', maxWidth: 520, lineHeight: 1.8 }}>
          Learn how pauses, pitch, rhythm, and sentence endings affect confidence, authority, interviews, meetings, and leadership presence.
        </p>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(48px,6vw,72px) 24px' }}>

        {/* PDF PREVIEW */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>
            Preview — 5 Voice Mistakes That Make People Ignore You
          </p>
          <div style={{ width:'100%', height:'650px', border:'1px solid #e8e4dc', borderRadius:4, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,0,0,0.08)', position:'relative' }}>
            <iframe src={`${PDF_EMBED}#view=FitH&scrollbar=0`} title="Voice Control PDF Preview"
              style={{ width:'100%', height:'650px', border:'none', pointerEvents:'none' }}
              allowFullScreen={false} scrolling="no"/>
          </div>
          <p style={{ fontSize:'12px', color:'#aaa', marginTop:10 }}>
            💡 First page preview. Enter your email below to access the full PDF.
          </p>
        </div>

        {/* MAIN GRID */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:40, marginBottom:72, alignItems:'start' }}>

          {/* LEFT — FORM */}
          <div style={{ background:WHITE, padding:'clamp(28px,4vw,44px)', border:'1px solid #e8e4dc' }}>
            <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 12px' }}>Get Instant Access</p>
            <h2 style={{ ...G, fontSize:'clamp(1.2rem,2.5vw,1.6rem)', fontWeight:700, color:DARK, margin:'0 0 28px', lineHeight:1.3 }}>
              Get the Free PDF Now
            </h2>

            {/* PDF mockup */}
            <div style={{ background:'#f0ede8', border:'1px solid #d8d3cc', padding:'28px', marginBottom:28, textAlign:'center' }}>
              <div style={{ width:64, height:80, background:DARK, margin:'0 auto 12px', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:2 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={GOLD} strokeWidth="1.5"/>
                  <path d="M14 2v6h6M9 13h6M9 17h4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p style={{ fontSize:'12px', fontWeight:700, color:DARK, margin:'0 0 4px', letterSpacing:'0.05em' }}>VOICE CONTROL</p>
              <p style={{ fontSize:'11px', color:MUTED, margin:0 }}>5 Voice Mistakes That Make People Ignore You</p>
            </div>

            {/* Name */}
            <div style={{ marginBottom:14 }}>
              <label style={{ display:'block', fontSize:'12px', fontWeight:600, color:'#555', marginBottom:6 }}>First Name</label>
              <input
                type="text" placeholder="Your first name" value={firstName}
                onChange={e => setFirstName(e.target.value)}
                style={{ width:'100%', padding:'12px 16px', border:'1px solid #ddd', fontSize:'14px', color:DARK, fontFamily:'inherit', outline:'none', boxSizing:'border-box' }}
              />
            </div>

            {/* Email with typo detection */}
            <EmailField />
{/* Email with typo detection */}
<div style={{ marginBottom: suggestion ? 8 : 20 }}>
  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#555', marginBottom: 6 }}>Email Address</label>
  <input
    type="email"
    placeholder="your@email.com"
    value={email}
    onChange={e => { setEmail(e.target.value); setSuggestion(''); setError(''); }}
    onBlur={handleEmailBlur}
    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
    style={{
      width: '100%', padding: '12px 16px', boxSizing: 'border-box',
      border: `1px solid ${suggestion ? '#e67e22' : error ? '#c0392b' : '#ddd'}`,
      fontSize: '14px', color: DARK, fontFamily: 'inherit', outline: 'none',
    }}
  />
  {suggestion && (
    <div style={{ background: '#fff8ee', border: '1px solid #e67e22', padding: '10px 14px', marginTop: 8, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
      <p style={{ fontSize: '13px', color: '#c0392b', margin: 0 }}>Did you mean <strong>{suggestion}</strong>?</p>
      <button onClick={applySuggestion} style={{ background: '#e67e22', color: '#fff', border: 'none', padding: '6px 14px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Yes, fix it</button>
    </div>
  )}
  {error && <p style={{ fontSize: '13px', color: '#c0392b', margin: '8px 0 0' }}>{error}</p>}
</div>
            <button onClick={handleSubmit} disabled={loading}
              style={{ width:'100%', padding:'16px', background:loading?'#888':DARK, color:WHITE, border:'none', fontSize:'12px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', cursor:loading?'not-allowed':'pointer', marginBottom:10, marginTop: suggestion ? 8 : 0 }}>
              {loading ? 'Getting your PDF...' : '↓ Download Free PDF'}
            </button>
            <p style={{ fontSize:'11px', color:'#bbb', textAlign:'center', margin:0 }}>No spam. Instant access.</p>
          </div>

          {/* RIGHT — WHAT YOU LEARN */}
          <div>
            <div style={{ marginBottom:36 }}>
              <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>What You'll Learn</p>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {['Why speaking fast sounds nervous','Why people interrupt certain speakers','How powerful speakers use pauses','How sentence endings change perception','How to sound calmer and more confident instantly'].map((item,i) => (
                  <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'12px 16px', background:WHITE, border:'1px solid #e8e4dc' }}>
                    <span style={{ color:GOLD, fontWeight:700, flexShrink:0, marginTop:1 }}>✓</span>
                    <p style={{ fontSize:'14px', color:DARK, margin:0, lineHeight:1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:WHITE, border:'1px solid #e8e4dc', padding:'28px' }}>
              <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>Who This Is For</p>
              {['Professionals','Non-native English speakers','Students preparing for interviews','Leaders and founders','Anyone who feels ignored when speaking'].map((item,i) => (
                <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', marginBottom:10 }}>
                  <span style={{ color:GOLD, fontWeight:700, flexShrink:0 }}>→</span>
                  <p style={{ fontSize:'14px', color:DARK, margin:0, lineHeight:1.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT SEVIL */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:32, marginBottom:72, alignItems:'center', borderTop:'1px solid #e8e4dc', paddingTop:56 }}>
          <div>
            <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>About Sevil Velsha</p>
            <p style={{ ...G, fontSize:'clamp(1.1rem,2.2vw,1.4rem)', fontWeight:700, color:DARK, margin:'0 0 16px', lineHeight:1.3 }}>Voice Researcher & Speech Coach</p>
            <p style={{ fontSize:'14px', color:MUTED, lineHeight:1.8, marginBottom:12 }}>
              Sevil Velsha is a voice and speech researcher specializing in intonation, articulation, and vocal authority. Her work explores how pauses, pitch, rhythm, and delivery affect confidence, leadership presence, and public perception.
            </p>
            <p style={{ fontSize:'14px', color:MUTED, lineHeight:1.8 }}>
              Through Voice Control, she teaches practical speaking techniques used in public speaking, interviews, meetings, and high-pressure communication.
            </p>
          </div>
          <div style={{ background:DARK, padding:'clamp(28px,4vw,44px)' }}>
            <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>Why Voice Matters</p>
            <p style={{ ...G, fontSize:'clamp(1rem,2vw,1.2rem)', fontWeight:400, color:WHITE, margin:'0 0 20px', lineHeight:1.7, fontStyle:'italic' }}>
              People form impressions of confidence and authority within seconds.
            </p>
            <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.65)', marginBottom:20, lineHeight:1.7 }}>Before they evaluate your ideas, they react to:</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:24 }}>
              {['pace','pauses','vocal control','tone','certainty'].map((item,i) => (
                <span key={i} style={{ background:'rgba(201,169,110,0.15)', border:'1px solid rgba(201,169,110,0.4)', color:GOLD, fontSize:'12px', fontWeight:600, padding:'6px 14px', borderRadius:2 }}>{item}</span>
              ))}
            </div>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, margin:0, fontStyle:'italic' }}>
              Small changes in delivery can completely change how people perceive you.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div style={{ borderTop:'1px solid #e8e4dc', paddingTop:56, textAlign:'center' }}>
          <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>Download the Free PDF</p>
          <h2 style={{ ...G, fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:700, color:DARK, margin:'0 0 16px', lineHeight:1.3 }}>
            Learn the voice patterns that make speakers sound:
          </h2>
          <div style={{ display:'flex', justifyContent:'center', gap:16, flexWrap:'wrap', marginBottom:36 }}>
            {['calm','respected','authoritative','confident'].map((item,i) => (
              <span key={i} style={{ ...G, fontSize:'clamp(1rem,2vw,1.2rem)', fontStyle:'italic', color:GOLD }}>{item}{i<3?' ·':''}</span>
            ))}
          </div>
          <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            style={{ background:DARK, color:WHITE, border:'none', fontSize:'12px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'16px 48px', cursor:'pointer' }}>
            ↓ Download Free PDF
          </button>
          <p style={{ fontSize:'12px', color:'#bbb', marginTop:12 }}>No spam. Instant access.</p>
        </div>

      </div>
    </div>
  );
}