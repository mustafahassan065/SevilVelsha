// src/routes/voice-course/CourseDashboard.jsx
// Route: /voice-control-dashboard
// Native HTML5 video player — videos from /public/videos/
// PDF download button — PDFs from /public/pdfs/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CourseDashboard.module.css';

// ══════════════════════════════════════════════════════════════════
// SETUP INSTRUCTIONS:
//
// Step 1 — Download videos from Google Drive, rename them:
//   lesson-01.mp4, lesson-02.mp4 ... lesson-08.mp4
//   Put in: public/videos/
//
// Step 2 — Download PDFs from Google Drive, rename them:
//   lesson-01.pdf, lesson-02.pdf ... lesson-08.pdf
//   Put in: public/pdfs/
//
// That's it — videos will play and PDFs will download automatically.
// ══════════════════════════════════════════════════════════════════

const LESSONS = [
  {
    num: '01',
    title: 'The One Breathing Technique That Calms & Empowers',
    duration: '4–5 min',
    description: 'Discover diaphragmatic breathing — the foundation used by TED speakers and actors worldwide. Learn belly breathing and voiced exhales to instantly sound calmer and more grounded.',
    videoUrl: '/videos/lesson-01.mp4',
    pdfUrl:   '/pdfs/lesson-01.pdf',
    pdfName:  'Lesson-1-Breathing-Workbook.pdf',
    outcome:  'A simple daily breathing practice that fuels confidence, vocal clarity, and authentic power.',
  },
  {
    num: '02',
    title: 'Diaphragmatic Breathing — Deep Dive',
    duration: '5–7 min',
    description: 'Go deeper into belly breathing vs chest breathing. Guided exercises to strengthen breath support and vocal control. Includes a 7-day morning practice to rewire your voice.',
    videoUrl: '/videos/lesson-02.mp4',
    pdfUrl:   '/pdfs/lesson-02.pdf',
    pdfName:  'Lesson-2-Deep-Dive-Workbook.pdf',
    outcome:  'A daily breathing routine that fuels vocal clarity, confidence, and authentic power.',
  },
  {
    num: '03',
    title: 'Daily Voice Warm-Up: 5 Minutes to Power, Clarity & Confidence',
    duration: '5 min',
    description: 'A quick daily warm-up used by professional actors and speakers. Humming, resonance exercises, and tongue twisters to prepare your voice for clear, confident speaking.',
    videoUrl: '/videos/lesson-03.mp4',
    pdfUrl:   '/pdfs/lesson-03.pdf',
    pdfName:  'Lesson-3-Warmup-Workbook.pdf',
    outcome:  'Use this warm-up every morning or before any big speaking moment.',
  },
  {
    num: '04',
    title: 'Pitch, Pause & Pace — The 3 Tools of Vocal Expression',
    duration: '6–8 min',
    description: 'Master the three essential tools that shape how your words are heard AND felt. Learn to avoid monotone delivery, use silence as a power tool, and control your speaking speed.',
    videoUrl: '/videos/lesson-04.mp4',
    pdfUrl:   '/pdfs/lesson-04.pdf',
    pdfName:  'Lesson-4-Pitch-Pause-Pace-Workbook.pdf',
    outcome:  'Speak with clarity, confidence, and persuasive energy in any situation.',
  },
  {
    num: '05',
    title: 'Stop Mumbling — Speak With Clarity and Precision',
    duration: '6–7 min',
    description: 'Eliminate mumbling forever. Daily exercises to activate your lips, tongue, and jaw. Clarity sentences and tongue twisters that sharpen your speech instantly.',
    videoUrl: '/videos/lesson-05.mp4',
    pdfUrl:   '/pdfs/lesson-05.pdf',
    pdfName:  'Lesson-5-Clarity-Workbook.pdf',
    outcome:  'Sound crisp, confident, and easy to understand — no matter who you are talking to.',
  },
  {
    num: '06',
    title: 'Vocal Emotion — Speak With Feeling and Authenticity',
    duration: '6–8 min',
    description: 'Bring your words to life using tone, breath, and emphasis. The Emotion Line Game — one sentence, multiple feelings. Control your vocal emotion and sound more engaging.',
    videoUrl: '/videos/lesson-06.mp4',
    pdfUrl:   '/pdfs/lesson-06.pdf',
    pdfName:  'Lesson-6-Vocal-Emotion-Workbook.pdf',
    outcome:  'Deliver any line with confidence, warmth, or excitement — on command.',
  },
  {
    num: '07',
    title: 'Performance & Presence — Think Like an Actor',
    duration: '7–9 min',
    description: 'Step into the world of performance. Learn how actors and public speakers use breath, pacing, silence, and emphasis to create charisma. Become magnetic, calm, and unforgettable.',
    videoUrl: '/videos/lesson-07.mp4',
    pdfUrl:   '/pdfs/lesson-07.pdf',
    pdfName:  'Lesson-7-Performance-Workbook.pdf',
    outcome:  'Speak with presence and charisma that people feel instantly.',
  },
  {
    num: '08',
    title: 'Final Challenge — Your Voice, Then & Now',
    duration: '8–10 min',
    description: 'Your moment to reflect, celebrate, and commit. Record your voice and hear how far you have come. Receive your 30-Day Voice Power Plan and complete your transformation.',
    videoUrl: '/videos/lesson-08.mp4',
    pdfUrl:   '/pdfs/lesson-08.pdf',
    pdfName:  'Lesson-8-Final-Challenge-Workbook.pdf',
    outcome:  'Celebrate your growth and launch into a new chapter with your voice.',
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
        <img
          src="/images/logo.png"
          alt="Sevil Velsha"
          className={styles.logo}
          onClick={() => navigate('/')}
        />
        <p className={styles.navTitle}>Voice Control Course</p>
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
                  completed.has(i)   ? styles.lessonItemDone  : '',
                ].filter(Boolean).join(' ')}
                onClick={() => setActiveLesson(i)}
              >
                <div className={styles.lessonCheck}>
                  {completed.has(i) ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <span className={styles.lessonNum}>{l.num}</span>
                  )}
                </div>
                <div className={styles.lessonInfo}>
                  <p className={styles.lessonTitle}>{l.title}</p>
                  <p className={styles.lessonDuration}>{l.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {progressPercent === 100 && (
            <div className={styles.certBlock}>
              <p className={styles.certLabel}>🏆 Congratulations!</p>
              <p className={styles.certText}>You have completed the Voice Control Course.</p>
              <button className={styles.certBtn}>Download Certificate</button>
            </div>
          )}
        </aside>

        {/* ── MAIN ── */}
        <main className={styles.main}>

          {/* Header */}
          <div className={styles.lessonHeader}>
            <span className={styles.lessonNumBig}>{lesson.num}</span>
            <div>
              <h1 className={styles.lessonHeading}>{lesson.title}</h1>
              <p className={styles.lessonDurationBig}>⏱ {lesson.duration}</p>
            </div>
          </div>

          {/* ── VIDEO — native HTML5, plays from /public/videos/ ── */}
          <div className={styles.videoWrapper}>
            <video
              key={lesson.videoUrl}
              controls
              className={styles.videoFrame}
              preload="metadata"
              controlsList="nodownload"
            >
              <source src={lesson.videoUrl} type="video/mp4"/>
              Your browser does not support video playback.
            </video>
          </div>

          {/* Body */}
          <div className={styles.lessonBody}>

            <p className={styles.description}>{lesson.description}</p>

            <div className={styles.outcomeBox}>
              <p className={styles.outcomeLabel}>🎯 Outcome</p>
              <p className={styles.outcomeText}>{lesson.outcome}</p>
            </div>

            {/* Actions */}
            <div className={styles.actions}>

              {/* ── PDF DOWNLOAD — triggers browser download directly ── */}
              <a
                href={lesson.pdfUrl}
                download={lesson.pdfName}
                className={styles.pdfBtn}
              >
                📄 Download Lesson Workbook (PDF)
              </a>

              {/* Mark complete */}
              <button
                className={[
                  styles.completeBtn,
                  completed.has(activeLesson) ? styles.completeBtnDone : '',
                ].filter(Boolean).join(' ')}
                onClick={() => toggleComplete(activeLesson)}
              >
                {completed.has(activeLesson) ? '✓ Marked as Complete' : 'Mark as Complete'}
              </button>

            </div>

            {/* Next lesson */}
            {activeLesson < LESSONS.length - 1 && (
              <div className={styles.nextLesson}>
                <p className={styles.nextLabel}>Next Lesson</p>
                <button
                  className={styles.nextBtn}
                  onClick={() => {
                    toggleComplete(activeLesson);
                    setActiveLesson(activeLesson + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {LESSONS[activeLesson + 1].num} · {LESSONS[activeLesson + 1].title} →
                </button>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}