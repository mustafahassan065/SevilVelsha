import React, { useState } from 'react';
import styles from './Course.module.css';

const Course = () => {
  const [activeModule, setActiveModule] = useState(1);

  const modules = [
    { id: 1, title: "Foundations of Vocal Power", desc: "Build a calm, confident voice that instantly sounds credible and authoritative." },
    { id: 2, title: "Breath Control & Support", desc: "Master breath techniques that keep your voice steady, strong, and calm under pressure." },
    { id: 3, title: "Resonance & Tone Shaping", desc: "Shape a richer, warmer tone that makes people listen and trust you." },
    { id: 4, title: "Articulation & Dynamics", desc: "Speak clearly and powerfully so every word lands with impact." },
    { id: 5, title: "Emotional Expression & Presence", desc: "Sound confident, authentic, and emotionally compelling without forcing expression." },
    { id: 6, title: "Vocal Strategy for Real-World Success", desc: "Apply your voice strategically in interviews, leadership, negotiations, and public speaking." },
  ];

  return (
    <section className={styles.courseSection}>
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.headerEmoji}>📚</span>
            <h2 className={styles.title}>Course Curriculum</h2>
          </div>
          <p className={styles.subtitle}>
            Each module includes video lessons, guided drills, feedback prompts, and warmups used
            by stage performers and professional speakers.
          </p>
        </div>

        <div className={styles.accordionContainer}>
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
              className={`${styles.accordionItem} ${activeModule === module.id ? styles.activeItem : ''}`}
            >
              <div className={styles.moduleContent}>
                <span className={styles.moduleTitle}>
                  Module {module.id} — {module.title}
                </span>
                <div className={styles.arrowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className={`${styles.descriptionWrapper} ${activeModule === module.id ? styles.show : ''}`}>
                <p className={styles.descriptionText}>{module.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CERTIFICATION SECTION ── */}
        <div style={{
          marginTop: 48,
          background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
          padding: 'clamp(28px, 4vw, 44px)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a96e', margin: '0 0 12px' }}>
            🎓 Certification
          </p>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 700, color: '#fff', margin: '0 0 12px', lineHeight: 1.3 }}>
            Earn a Professional Voice Control Certification
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', margin: '0 0 24px', lineHeight: 1.7 }}>
            Upon completion, you will receive a{' '}
            <strong style={{ color: '#c9a96e' }}>Certified Voice Control Practitioner</strong> credential.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
            {[
              '✔ Downloadable certificate',
              '✔ Share on LinkedIn',
              '✔ Demonstrate communication authority',
            ].map((item, i) => (
              <span key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Course;