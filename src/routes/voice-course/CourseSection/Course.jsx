

import React, { useState } from 'react';
import styles from './Course.module.css';

const Course = () => {
  // Default pehla module open rahega, null karne par saare band rahenge
  const [activeModule, setActiveModule] = useState(1);

  const modules = [
    {
      id: 1,
      title: "Foundations of Vocal Power",
      desc: "Build a calm, confident voice that instantly sounds credible and authoritative."
    },
    {
      id: 2,
      title: "Breath Control & Support",
      desc: "Master breath techniques that keep your voice steady, strong, and calm under pressure."
    },
    {
      id: 3,
      title: "Resonance & Tone Shaping",
      desc: "Shape a richer, warmer tone that makes people listen and trust you."
    },
    {
      id: 4,
      title: "Articulation & Dynamics",
      desc: "Speak clearly and powerfully so every word lands with impact."
    },
    {
      id: 5,
      title: "Emotional Expression & Presence",
      desc: "Sound confident, authentic, and emotionally compelling without forcing expression."
    },
    {
      id: 6,
      title: "Vocal Strategy for Real-World Success",
      desc: "Apply your voice strategically in interviews, leadership, negotiations, and public speaking."
    },
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

              {/* Expandable Content Area */}
              <div className={`${styles.descriptionWrapper} ${activeModule === module.id ? styles.show : ''}`}>
                <p className={styles.descriptionText}>
                  {module.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Course;