import styles from "./FinalCTA.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function FinalCTA() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container} style={{ maxWidth: 820 }}>
        <h2 className={styles.title}>
          You Know What to Say. But Does Your Voice Deliver It?
        </h2>
        <p className={styles.subtitle}>
          Stop rushing, sounding uncertain, or losing your listener's attention. Learn to use your voice with confidence and authority.
        </p>
        
        <div className={styles.badge}>
          VOICE CONTROL · DIGITAL BOOK · $29
        </div>

        <div>
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Start Training Your Voice
          </a>
        </div>
        
        <p className={styles.miniRow}>
          Instant access · Audio demonstrations · Practical exercises
        </p>
      </div>
    </section>
  );
}