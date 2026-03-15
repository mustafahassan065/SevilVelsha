import styles from "./WhatBookDoes.module.css";
import ComparisonCard from "./ComparisonCard";

const beforeItems = [
  "Your voice shakes under pressure",
  "People interrupt or ignore you",
  "Tight throat, shallow breath",
  "You overexplain to be heard",
  "You leave conversations wishing you sounded stronger",
];

const afterItems = [
  "Calm, grounded authority",
  "People lean in and listen",
  "Resonant, warm, confident tone",
  "You speak less — and say more",
  "Your presence is felt before you finish a sentence",
];
const images = [
  "/images/sundayTimes.png",
  "/images/amazon.png",
  "/images/newYork.png",
  "/images/audible.png",
];
export default function WhatBookDoes() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What This Book Will Do For You</h2>
          <p className={styles.subtitle}>
            Inside these pages, you will discover powerful techniques that will transform how you speak forever.
          </p>
        </div>
        <div className={styles.imageGrid}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageBox}>
              <img src={src} alt={`Feature ${index + 1}`} className={styles.img} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.comparison}>
        <div className={styles.column}>
          <h3 className={`${styles.columnHeader} ${styles.before}`}>Before Voice Control</h3>
          <div className={styles.cards}>
            {beforeItems.map((item) => (
              <ComparisonCard key={item} text={item} type="before" />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={`${styles.columnHeader} ${styles.after}`}>After Voice Control</h3>
          <div className={styles.cards}>
            {afterItems.map((item) => (
              <ComparisonCard key={item} text={item} type="after" />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>Your journey to a more confident voice starts here</p>
      </div>
    </section>

  );
}
