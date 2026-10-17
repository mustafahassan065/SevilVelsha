import styles from "./FinalCTA.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function FinalCTA() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container} style={{ maxWidth: 800 }}>
        <h2 className={styles.title}>
          You Know What to Say. But Does Your Voice Deliver It?
        </h2>
        <p className={styles.subtitle}>
          Stop rushing, sounding uncertain, or losing your listener's attention. Learn to use your voice with confidence and authority.
        </p>
        
        <div className={styles.badge} style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#a8802c', marginBottom: 20, textTransform: 'uppercase' }}>
          VOICE CONTROL · DIGITAL BOOK · $29
        </div>

        <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
          Start Training Your Voice
        </a>
        
        <p className={styles.miniRow} style={{ marginTop: 14, fontStyle: 'italic', fontSize: 14, color: '#4b4a42' }}>
          Instant access · Audio demonstrations · Practical exercises
        </p>
      </div>
    </section>
  );
}