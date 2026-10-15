import styles from "./FinalCTA.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function FinalCTA() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Your next conversation<br />could sound different.</h2>
        <p className={styles.subtitle}>
          Stop leaving your vocal impact to chance.<br />
          Learn to speak with intention, presence, and authority.
        </p>
        <p className={styles.sTitle} style={{ fontSize: 24 }}>VOICE CONTROL — $29</p>
        <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
          Get Your Copy Now →
        </a>
        <div className={styles.miniRow}>
          <span>Instant digital download</span>
          <span>Audio examples</span>
          <span>Practical exercises</span>
        </div>
      </div>
    </section>
  );
}