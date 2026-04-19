// src/routes/voice-course/VoiceFreeAccessPage.jsx
// Route: /voice-free-access
// Updated with all conversion blocks per client brief

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
    <div style={{ fontFamily:"'Segoe UI',Arial,sans-serif", background:LIGHT, minHeight:'100vh' }}>

      {/* NAV */}
      <nav style={{ background:DARK, padding:'16px 32px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span onClick={() => navigate('/')}
          style={{ fontFamily:'Georgia,serif', fontSize:'18px', fontWeight:700, letterSpacing:'0.15em', color:'#f5f4f0', cursor:'pointer' }}>
          Sevil Velsha
        </span>
        <a href={STRIPE_URL} style={{ background:GOLD, color:DARK, fontFamily:'inherit', fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'10px 24px', textDecoration:'none' }}>
          Unlock Full Course
        </a>
      </nav>

      <div style={{ maxWidth:720, margin:'0 auto', padding:'clamp(40px,6vw,72px) 24px' }}>

        {/* Welcome */}
        <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 12px' }}>Your Free Access</p>
        <h1 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.8rem,4vw,2.6rem)', fontWeight:700, color:DARK, margin:'0 0 12px', lineHeight:1.2 }}>
          {name ? `Welcome, ${name}.` : 'Welcome.'}
        </h1>
        <p style={{ fontSize:'15px', color:MUTED, margin:'0 0 48px', lineHeight:1.7 }}>
          Your first Voice Control training is ready. Watch the video below and download your free PDF guide.
        </p>

        {/* VIDEO */}
        <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:GOLD, margin:'0 0 14px' }}>Lesson 1 — Free Training Video</p>
        <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.1rem,2.5vw,1.4rem)', fontWeight:700, color:DARK, margin:'0 0 16px' }}>
          The One Breathing Technique That Calms & Empowers
        </p>
        <div style={{ width:'100%', aspectRatio:'16/9', background:DARK, borderRadius:4, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,0,0,0.12)', marginBottom:12 }}>
          <iframe src={FREE_VIDEO} title="Free Lesson 1" style={{ width:'100%', height:'100%', border:'none' }} allow="autoplay" allowFullScreen loading="lazy"/>
        </div>
        <p style={{ fontSize:'12px', color:'#aaa', margin:'0 0 40px' }}>💡 Click to play. Opens in Google Drive for full quality.</p>

        {/* 1. Text block under video */}
        <div style={{ textAlign:'center', margin:'0 0 40px', padding:'0 8px' }}>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.1rem,2.5vw,1.4rem)', fontWeight:700, color:DARK, margin:'0 0 20px', lineHeight:1.5 }}>Stop for a second.</p>
          <p style={{ fontSize:'15px', color:MUTED, margin:'0 0 12px' }}>If your voice:</p>
          <div style={{ display:'flex', flexDirection:'column', gap:6, alignItems:'center', marginBottom:24 }}>
            {['Sounds flat','Lacks authority','Gets ignored in meetings'].map((item,i) => (
              <p key={i} style={{ fontSize:'15px', color:DARK, margin:0, fontWeight:500 }}>— {item}</p>
            ))}
          </div>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1rem,2vw,1.2rem)', fontWeight:700, color:DARK, margin:'0 0 4px' }}>This is not confidence.</p>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1rem,2vw,1.2rem)', fontWeight:700, color:GOLD }}>This is technique. And it can be fixed.</p>
        </div>

        {/* 2. Realization line */}
        <div style={{ background:'#fff', border:'1px solid #e8e4dc', padding:'32px', marginBottom:40, textAlign:'center' }}>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1rem,2.2vw,1.2rem)', fontWeight:400, color:MUTED, margin:'0 0 12px', lineHeight:1.8 }}>
            Most people think they have a confidence problem.
          </p>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.1rem,2.5vw,1.5rem)', fontWeight:700, color:DARK, margin:0, lineHeight:1.5 }}>
            They don't.<br/>They have a <span style={{ color:GOLD }}>voice control problem.</span>
          </p>
        </div>

        {/* 3. Try this now */}
        <div style={{ background:DARK, padding:'32px', marginBottom:48, textAlign:'center' }}>
          <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>Try This Now</p>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1rem,2.2vw,1.3rem)', fontWeight:400, color:'#fff', margin:'0 0 16px', lineHeight:2 }}>
            Take a breath.<br/>Pause for 2 seconds before speaking.
          </p>
          <p style={{ fontSize:'15px', color:'rgba(255,255,255,0.65)', margin:'0 0 12px' }}>Notice the difference?</p>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.1rem,2.2vw,1.4rem)', fontWeight:700, color:GOLD, margin:0 }}>That's control.</p>
        </div>

        {/* FREE PDF */}
        <div style={{ background:'#fff', border:`1.5px solid ${GOLD}`, padding:'28px 32px', marginBottom:48, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
          <div>
            <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:GOLD, margin:'0 0 6px' }}>Free PDF Guide</p>
            <p style={{ fontFamily:'Georgia,serif', fontSize:'1.1rem', fontWeight:700, color:DARK, margin:0 }}>Breathing Workbook — Lesson 1</p>
          </div>
          <a href={FREE_PDF} download="Lesson-1-Breathing-Workbook.pdf" target="_blank" rel="noreferrer"
            style={{ background:DARK, color:'#fff', fontFamily:'inherit', fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'12px 28px', textDecoration:'none', whiteSpace:'nowrap' }}>
            ↓ Download PDF
          </a>
        </div>

        <div style={{ width:40, height:2, background:GOLD, margin:'0 auto 48px' }}/>

        {/* 4. Transformation section BEFORE sales */}
        <div style={{ marginBottom:48 }}>
          <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 20px', textAlign:'center' }}>After This Course, You Will</p>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {['Speak with calm authority','Control your breathing and tone','Be heard and taken seriously','Remove nervous voice patterns'].map((item,i) => (
              <div key={i} style={{ display:'flex', gap:12, alignItems:'center', padding:'14px 20px', background:'#fff', border:'1px solid #e8e4dc' }}>
                <span style={{ color:GOLD, fontWeight:700, fontSize:'16px', flexShrink:0 }}>✓</span>
                <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1rem,2vw,1.1rem)', color:DARK, margin:0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5+6+7. Updated sales block */}
        <div style={{ background:DARK, padding:'clamp(32px,5vw,52px)', textAlign:'center', marginBottom:32 }}>
          <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:GOLD, margin:'0 0 12px' }}>Ready to fix it?</p>
          <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:700, color:'#fff', margin:'0 0 12px', lineHeight:1.3 }}>
            Speak So People Listen — Every Time
          </h2>
          <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.65)', margin:'0 0 8px', lineHeight:1.7, maxWidth:420, marginLeft:'auto', marginRight:'auto' }}>
            Fix the exact voice patterns that make people ignore you.
          </p>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.4)', margin:'0 0 28px', lineHeight:1.7, maxWidth:420, marginLeft:'auto', marginRight:'auto' }}>
            8 focused lessons to fix your voice step-by-step
          </p>
          <a href={STRIPE_URL} style={{ display:'inline-block', background:GOLD, color:DARK, fontFamily:'inherit', fontSize:'12px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'16px 40px', textDecoration:'none', marginBottom:16 }}>
            Unlock Full Course — $99
          </a>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', fontWeight:600, margin:'0 0 8px' }}>
            First 20 students → $49 &nbsp;·&nbsp; Price increases soon
          </p>
          <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.35)', margin:0 }}>
            30-day guarantee &nbsp;·&nbsp; Instant access &nbsp;·&nbsp; Lifetime availability
          </p>
        </div>

        {/* 8. Who this is for */}
        <div style={{ background:'#fff', border:'1px solid #e8e4dc', padding:'32px', marginBottom:24 }}>
          <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:GOLD, margin:'0 0 16px' }}>Who This Is For</p>
          {['Professionals who feel ignored in meetings','Non-native speakers who want clarity and confidence','People who feel their voice sounds weak'].map((item,i) => (
            <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', marginBottom:10 }}>
              <span style={{ color:GOLD, fontWeight:700, flexShrink:0 }}>→</span>
              <p style={{ fontSize:'14px', color:DARK, margin:0, lineHeight:1.6 }}>{item}</p>
            </div>
          ))}
        </div>

        {/* 9. Micro trust line */}
        <div style={{ textAlign:'center', marginBottom:48, padding:'16px' }}>
          <p style={{ fontSize:'12px', color:'#aaa', margin:0, lineHeight:1.8 }}>
            Based on real acoustic analysis (Praat) &nbsp;·&nbsp; Used in professional voice training
          </p>
        </div>

      </div>
    </div>
  );
}