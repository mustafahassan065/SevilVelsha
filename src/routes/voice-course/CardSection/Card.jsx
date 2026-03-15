

import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  const bonuses = [
    {
      icon: "/images/headphones (2).png", 
      title: "5-Minute Morning Warmups",
      description: "Professional MP3 audio guides for daily voice preparation"
    },
    {
      icon: "/images/workbook.png",
      title: "Full Workbook + Practice Journal",
      description: "Complete written guide with exercises and progress tracking"
    },
    {
      icon: "/images/speaker.png",
      title: "\"Find Your Voice Type\" Quiz",
      description: "Personalized diagnostic to identify your unique vocal characteristics"
    },
    {
      icon: "/images/svg.png",
      title: "Professional Certificate",
      description: "LinkedIn, Resume & Portfolio ready completion certificate"
    }
  ];

  return (
    <section className={styles.bonusSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.giftEmoji}>🎁</span>
          <h2 className={styles.mainTitle}>Holiday Bonuses</h2>
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
          <p>🎄 <strong>Christmas Bonus:</strong> Instant digital gift card for friends/family</p>
        </div>
      </div>
    </section>
  );
};

export default Card;