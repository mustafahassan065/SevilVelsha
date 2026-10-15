import styles from "./TrainingSystem.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

const cards = [
  { n: 1, t: "Digital Book (PDF)", d: "The VOICE CONTROL book with voice diagrams, explanations and exercises. Read on any device." },
  { n: 2, t: "Exercises & Audio", d: "Practical voice training exercises, real-world speech analyses and QR-linked audio demonstrations." },
  { n: 3, t: "Bonuses", d: "30-Day Voice Confidence Challenge, Intonation Masterclass and bonus resources." },
  { n: 4, t: "Instant Access", d: "Instant digital download. Practise at your own pace. Questions? info@sevilvelsha.com" },
];

export default function TrainingSystem() {
  return (
    <section className={`${styles.section} ${styles.bgGold}`}>
      <div className={styles.container}>
        <p className={styles.eyebrow} style={{ color: "#6b4d10" }}>Your Complete Voice Training System</p>
        <h2 className={styles.title}>Everything You Need — $29</h2>
        <p className={styles.subtitle}>A complete, ready-to-use voice training system, all in one purchase.</p>

        <div className={styles.cards}>
          {cards.map((c) => (
            <div key={c.n} className={styles.sCard}>
              <div className={styles.num}>{c.n}</div>
              <h3 className={styles.sTitle}>{c.t}</h3>
              <p className={styles.sText}>{c.d}</p>
            </div>
          ))}
        </div>

        <ul className={styles.list}>
          <li>Digital VOICE CONTROL book (PDF)</li>
          <li>QR-linked audio demonstrations</li>
          <li>Practical voice training exercises</li>
          <li>Real-world speech analyses</li>
          <li>30-Day Voice Confidence Challenge</li>
          <li>Intonation Masterclass and bonus resources</li>
        </ul>

        <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
          Get Your Copy — $29 →
        </a>
        <p className={styles.note}>Instant access. Practise at your own pace.</p>
      </div>
    </section>
  );
}