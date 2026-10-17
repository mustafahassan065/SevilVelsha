import styles from "./TrainingSystem.module.css";
import { BookIcon, HeadphonesIcon, DocIcon } from "../shared/Icons";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function TrainingSystem() {
  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        {/* 3 Icons in a Horizontal Row */}
        <div className={styles.iconRow}>
          <div className={styles.iconCard}>
            <div className={styles.iconWrap}><BookIcon /></div>
            <h3 className={styles.iconTitle}>Digital Book</h3>
            <p className={styles.iconDesc}>Research & diagrams</p>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrap}><HeadphonesIcon /></div>
            <h3 className={styles.iconTitle}>Audio Training</h3>
            <p className={styles.iconDesc}>Listen & practise</p>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrap}><DocIcon /></div>
            <h3 className={styles.iconTitle}>Voice Exercises</h3>
            <p className={styles.iconDesc}>Develop your delivery</p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className={styles.pricingCard}>
          <div className={styles.price}>$29</div>
          <p className={styles.priceMeta}>One-time purchase · Instant digital access · Bonuses included</p>
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Get Your Copy
          </a>
        </div>
      </div>
    </section>
  );
}