// src/routes/voice-course/CourseDashboard.jsx
// Route: /voice-control-dashboard
// Layout per lesson: Topic → About → Video (Google Drive embed) → PDF download

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CourseDashboard.module.css';

const LESSONS = [
  {
    num: '01',
    topic: 'Breathing & Vocal Foundation',
    title: 'The One Breathing Technique That Calms & Empowers',
    duration: '4–5 min',
    about: 'Discover diaphragmatic breathing — the single most powerful technique used by TED speakers, actors, and confident communicators worldwide. Learn why shallow chest breathing weakens your voice and how belly breathing instantly makes you sound calmer, stronger, and more grounded. Includes two guided exercises and a 7-day morning practice.',
    outcome: 'A simple daily breathing practice that fuels confidence, vocal clarity, and authentic power — anytime, anywhere.',
    videoUrl: 'https://drive.google.com/file/d/1rs8qVhVz23WQlZQ7NFfsq93tB0pDBYbE/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1LDGTUt9LijOtN7XipfrnToIaGghIFME7',
    pdfName: 'Lesson-1-Breathing-Workbook.pdf',
  },
  {
    num: '02',
    topic: 'Diaphragmatic Breathing — Deep Dive',
    title: 'The One Breathing Technique That Calms & Empowers',
    duration: '5–7 min',
    about: 'Go deeper into the difference between shallow chest breathing and deep belly breathing, and why the latter creates a stronger, steadier, and more grounded voice. Through guided exercises, practice belly breathing to calm your nervous system and voiced exhales to strengthen breath support. Includes a practical tip for high-stakes moments and a 7-day morning routine.',
    outcome: 'A daily breathing routine that fuels vocal clarity, confidence, and authentic power in any situation.',
    videoUrl: 'https://drive.google.com/file/d/1QPzt_S9Tbmo2ra3djjyvJ13HxT2MUGht/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1iIlcIdFTClexktoMoyAZTzObxklkcnI9',
    pdfName: 'Lesson-2-Deep-Dive-Workbook.pdf',
  },
  {
    num: '03',
    topic: 'Daily Warm-Up Routine',
    title: 'Daily Voice Warm-Up: 5 Minutes to Power, Clarity & Confidence',
    duration: '5 min',
    about: 'Learn how to prepare your voice for clear, confident speaking — just like professional actors and speakers do. This daily 5-minute routine helps you breathe deeply, wake up your voice with humming and resonance exercises, improve clarity with tongue twisters, and speak with energy and presence. Use it every morning or before any big speaking moment.',
    outcome: 'A ready-to-use warm-up routine for presentations, meetings, videos, or interviews.',
    videoUrl: 'https://drive.google.com/file/d/1T0oZC9UdtPocCX8eNzZHYawfOMWGN/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1U9rRdx1zUcYkvDdaFS601zXipVJ0SOLK',
    pdfName: 'Lesson-3-Warmup-Workbook.pdf',
  },
  {
    num: '04',
    topic: 'Pitch, Pause & Pace',
    title: 'Pitch, Pause & Pace — The 3 Tools of Vocal Expression',
    duration: '6–8 min',
    about: 'Master the three essential tools that shape not just how your words are heard — but how they are felt. Pitch gives your speech melody and avoids monotone delivery. Pause is your secret weapon for adding impact and confidence. Pace controls how you are perceived — too fast sounds nervous, too slow loses attention. Finish with a guided practice integrating all three.',
    outcome: 'The ability to speak with clarity, confidence, and persuasive energy in any situation.',
    videoUrl: 'https://drive.google.com/file/d/1VG7YlxV0VBjv1J3Un-2KTcWECWsIyRcD/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1s9FxAlP_N9tzeob4T2qTG_evjLFA2rEU',
    pdfName: 'Lesson-4-Pitch-Pause-Pace-Workbook.pdf',
  },
  {
    num: '05',
    topic: 'Clarity & Articulation',
    title: 'Stop Mumbling — Speak With Clarity and Precision',
    duration: '6–7 min',
    about: 'Eliminate mumbling and speak with precision in any situation. Discover why we mumble and how to fix it with simple daily exercises that activate your lips, tongue, and jaw. Practice clarity sentences and tongue twisters that sharpen your speech and make you sound crisp, confident, and easy to understand — no matter who you are talking to.',
    outcome: 'Greater control, presence, and impact in every conversation.',
    videoUrl: 'https://drive.google.com/file/d/1grCVs-kE_qa67ujNy2cwFTAQ2th48eme/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=13kxip93a3hPmdXM6gPLxtXIBya90L5Xu',
    pdfName: 'Lesson-5-Clarity-Workbook.pdf',
  },
  {
    num: '06',
    topic: 'Vocal Emotion & Authenticity',
    title: 'Vocal Emotion — Speak With Feeling and Authenticity',
    duration: '6–8 min',
    about: 'Learn how to bring your words to life using tone, breath, and emphasis to express real emotion. Explore why emotional expression builds trust and connection, the 3 vocal elements that shape how people feel your message, and the Emotion Line Game — one sentence delivered with multiple different feelings. Practice using the phrase "Your voice matters."',
    outcome: 'The ability to deliver any line with confidence, warmth, or excitement — on command.',
    videoUrl: 'https://drive.google.com/file/d/1wmvDMMRY2jIShwZ-Ynr-Rs4h7HtBNbmd/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=115h7qVhEdsJo8UYSJj7u9vJ61JMdf_-T',
    pdfName: 'Lesson-6-Vocal-Emotion-Workbook.pdf',
  },
  {
    num: '07',
    topic: 'Performance & Presence',
    title: 'Performance & Presence — Think Like an Actor',
    duration: '7–9 min',
    about: 'Step into the world of performance and presence. Discover how actors and public speakers use their voices to captivate audiences — and how you can train the same vocal tools. Learn how breath, pacing, silence, and emphasis create charisma that people feel instantly. Whether preparing for a big moment or wanting to speak with more impact, this lesson gives you the techniques to become magnetic, calm, and unforgettable.',
    outcome: 'The presence and charisma to captivate any audience.',
    videoUrl: 'https://drive.google.com/file/d/1ZGKftrvVEA2xPJ08_C0M_ORFNFdN4qSs/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=115h7qVhEdsJo8UYSJj7u9vJ61JMdf_-T',
    pdfName: 'Lesson-7-Performance-Workbook.pdf',
  },
  {
    num: '08',
    topic: 'Final Challenge & Certification',
    title: 'Final Challenge — Your Voice, Then & Now',
    duration: '8–10 min',
    about: 'Your moment to reflect, celebrate, and commit. You will be guided through a powerful before vs after voice challenge — re-record your voice and hear just how far you have come in confidence, clarity, and presence. Receive your 30-Day Voice Power Plan to continue building your vocal strength beyond this course. Complete the process and receive your credential.',
    outcome: 'A celebration of your personal growth and the launch of a new chapter with your voice.',
    videoUrl: 'https://drive.google.com/file/d/150CwynaPYLn-nEYS9xWI-70urmd54A42/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1LW8-McmYoxe_znD1SaJ67n_iKJIEQDW7',
    pdfName: 'Lesson-8-Final-Challenge-Workbook.pdf',
  },
];

export default function CourseDashboard() {
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('vc_progress');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });

  const toggleComplete = (index) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      localStorage.setItem('vc_progress', JSON.stringify([...next]));
      return next;
    });
  };

  const progressPercent = Math.round((completed.size / LESSONS.length) * 100);
  const lesson = LESSONS[activeLesson];

  return (
    <div className={styles.page}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
       <span
  onClick={() => navigate('/')}
  style={{
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    color: '#f5f4f0',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }}
>
  Sevil Velsha
</span>
        <p className={styles.navTitle}>Voice Control™ Course</p>
        <p className={styles.navProgress}>{completed.size}/{LESSONS.length} complete</p>
      </nav>

      {/* ── PROGRESS BAR ── */}
      <div className={styles.progressBarOuter}>
        <div className={styles.progressBarInner} style={{ width: `${progressPercent}%` }}/>
      </div>

      <div className={styles.layout}>

        {/* ── SIDEBAR ── */}
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Course Lessons</p>
          <div className={styles.lessonList}>
            {LESSONS.map((l, i) => (
              <button
                key={i}
                className={[
                  styles.lessonItem,
                  activeLesson === i ? styles.lessonItemActive : '',
                  completed.has(i) ? styles.lessonItemDone : '',
                ].filter(Boolean).join(' ')}
                onClick={() => { setActiveLesson(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <div className={styles.lessonCheck}>
                  {completed.has(i) ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <span className={styles.lessonNum}>{l.num}</span>
                  )}
                </div>
                <div className={styles.lessonInfo}>
                  <p className={styles.lessonTopic}>{l.topic}</p>
                  <p className={styles.lessonDuration}>{l.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {progressPercent === 100 && (
            <div className={styles.certBlock}>
              <p className={styles.certLabel}>🏆 Congratulations!</p>
              <p className={styles.certText}>You have completed the Voice Control Course.</p>
              <a
                href="/pdfs/voice-control-certificate.pdf"
                download="Voice-Control-Certificate.pdf"
                className={styles.certBtn}
                style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
              >
                Download Certificate
              </a>
            </div>
          )}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className={styles.main}>

          {/* ── 1. TOPIC ── */}
          <div className={styles.topicBadge}>
            <span className={styles.lessonNumBig}>Lesson {lesson.num}</span>
            <span className={styles.topicText}>{lesson.topic}</span>
          </div>

          {/* ── 2. TITLE ── */}
          <h1 className={styles.lessonHeading}>{lesson.title}</h1>

          {/* ── 3. ABOUT ── */}
          <div className={styles.aboutBox}>
            <p className={styles.aboutLabel}>About This Lesson</p>
            <p className={styles.aboutText}>{lesson.about}</p>
            <div className={styles.outcomeRow}>
              <span className={styles.outcomeIcon}>🎯</span>
              <p className={styles.outcomeText}><strong>Outcome:</strong> {lesson.outcome}</p>
            </div>
          </div>

          {/* ── 4. VIDEO — Google Drive embed, click opens in Drive ── */}
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Lesson Video</p>
            <div className={styles.videoWrapper}>
              <iframe
                src={lesson.videoUrl}
                title={lesson.title}
                className={styles.videoFrame}
                allow="autoplay"
                allowFullScreen
              />
            </div>
            <p className={styles.videoNote}>
              💡 Click the video to play. Opens in Google Drive for best quality.
            </p>
          </div>

          {/* ── 5. PDF DOWNLOAD ── */}
          <div className={styles.downloadSection}>
            <p className={styles.downloadLabel}>Downloadable Material</p>
            <a
              href={lesson.pdfUrl}
              download={lesson.pdfName}
              target="_blank"
              rel="noreferrer"
              className={styles.pdfBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" fill="currentColor"/>
                <path d="M4 18h16v2H4v-2z" fill="currentColor"/>
              </svg>
              Download Lesson Workbook (PDF)
            </a>
          </div>

          {/* ── ACTIONS ── */}
          <div className={styles.actions}>
            <button
              className={[styles.completeBtn, completed.has(activeLesson) ? styles.completeBtnDone : ''].filter(Boolean).join(' ')}
              onClick={() => toggleComplete(activeLesson)}
            >
              {completed.has(activeLesson) ? '✓ Lesson Complete' : 'Mark as Complete'}
            </button>

            {activeLesson < LESSONS.length - 1 && (
              <button
                className={styles.nextBtn}
                onClick={() => {
                  toggleComplete(activeLesson);
                  setActiveLesson(activeLesson + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Next Lesson →
              </button>
            )}
          </div>

          {/* ── CERTIFICATION SECTION — shown on last lesson ── */}
          {activeLesson === LESSONS.length - 1 && (
            <div style={{
              marginTop: 52, background: 'linear-gradient(135deg,#1a1a1a,#2d2d2d)',
              padding: 'clamp(32px,5vw,48px)', textAlign: 'center',
            }}>
              <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#c9a96e', margin:'0 0 12px' }}>
                🎓 Certification
              </p>
              <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.3rem,3vw,1.8rem)', fontWeight:700, color:'#fff', margin:'0 0 16px', lineHeight:1.3 }}>
                Earn a Professional Voice Control Certification
              </h2>
              <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.65)', margin:'0 0 24px', lineHeight:1.7, maxWidth:420, marginLeft:'auto', marginRight:'auto' }}>
                Upon completion, you will receive a <strong style={{ color:'#c9a96e' }}>Certified Voice Control Practitioner</strong> credential.
              </p>
              <div style={{ display:'flex', justifyContent:'center', gap:24, flexWrap:'wrap', marginBottom:28 }}>
                {['✔ Downloadable certificate', '✔ Share on LinkedIn', '✔ Demonstrate communication authority'].map((item,i) => (
                  <span key={i} style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', fontWeight:500 }}>{item}</span>
                ))}
              </div>
              {progressPercent === 100 ? (
                <a
                  href="/pdfs/voice-control-certificate.pdf"
                  download="Voice-Control-Certificate.pdf"
                  style={{
                    display:'inline-block', background:'linear-gradient(135deg,#c9a96e,#e8d5a3)',
                    color:'#1a1a1a', fontFamily:'inherit', fontSize:'12px', fontWeight:700,
                    letterSpacing:'0.18em', textTransform:'uppercase',
                    padding:'16px 40px', textDecoration:'none',
                  }}
                >
                  Download Your Certificate
                </a>
              ) : (
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.45)' }}>
                  Complete all {LESSONS.length} lessons to unlock your certificate.
                </p>
              )}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}