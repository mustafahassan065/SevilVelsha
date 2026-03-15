

import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  const bonuses = [
    {
      icon: "/images/headphones.png",
      title: "30-Day Voice Confidence Challenge",
      description: "Daily exercises to strengthen your voice."
    },
    {
      icon: "/images/book.png",
      title: "Intonation Masterclass",
      description: "Learn how actors shape emotion with tiny pitch changes."
    },
    {
      icon: "/images/Microphone.png",
      title: "Warm-Up Audio Series",
      description: "Guided exercises you can do in the car or at home."
    },
    {
      icon: "/images/star.png",
      title: "The \"Magnetic Tone\" Cheat Sheet",
      description: "Remove weak speech habits in 5 minutes."
    }
  ];

  return (
    <section className={styles.bonusSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Bonus: Voice Mastery Training</h2>
        </div>

        <div className={styles.gridContainer}>
          {bonuses.map((item, index) => (
            <div key={index} className={styles.cardItem}>
              <div className={styles.iconWrapper}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
              </div>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerText}>
          When you order today, you also get these exclusive bonuses:
        </div>
      </div>
    </section>
  );
};

export default Card;