
import { useState } from "react";
import styles from "./ChapterSection.module.css";

const chaptersData = [
  { id: "01", title: "The Psychology of Voice Confidence", desc: "How trauma, fear, and past experiences shape the sound of your voice — and how to change it.", img: "/images/Book2.png" },
  { id: "02", title: "The Actor's Breath", desc: "The exact breathing technique used on stage to create calmness, charisma, and control.", img: "/images/Book2.png" },
  { id: "03", title: "Resonance: The Secret of Attractive Voices", desc: "How to move your sound from the throat into the chest and face — instantly.", img: "/images/Book2.png" },
  { id: "04", title: "Vocal Power & Range", desc: "Mastering pitch and projection to command attention in any room.", img: "/images/Book2.png" },
  { id: "05", title: "The Art of Articulation", desc: "Clear speech techniques that ensure every word you say carries weight.", img: "/images/Book2.png" },
  { id: "06", title: "Emotional Connection", desc: "Learning how to infuse your voice with genuine empathy and authority.", img: "/images/Book2.png" }
];

export const ChapterSection = () => {
  const [index, setIndex] = useState(0);
  const currentChapters = chaptersData.slice(index, index + 3);

  const nextSlide = () => {
    if (index + 3 < chaptersData.length) setIndex(index + 3);
    else setIndex(0);
  };

  const prevSlide = () => {
    if (index - 3 >= 0) setIndex(index - 3);
    else setIndex(Math.floor((chaptersData.length - 1) / 3) * 3);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Claim Your Chapters Now!</h2>
        <p className={styles.subtitle}>A comprehensive journey from understanding your voice to mastering it.</p>
      </div>

      <div className={styles.grid}>
        {currentChapters.map((chapter) => (
          <div key={chapter.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={chapter.img} alt={chapter.title} className={styles.bookImage} />
            </div>
            <div className={styles.infoBox}>
              <span className={styles.number}>{chapter.id}</span>
              <div className={styles.textGroup}>
                <h4 className={styles.cardTitle}>{chapter.title}</h4>
                <p className={styles.cardDescription}>{chapter.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.navBtn}>←</button>
        <button onClick={nextSlide} className={styles.navBtn}>→</button>
      </div>
    </section>
  );
};