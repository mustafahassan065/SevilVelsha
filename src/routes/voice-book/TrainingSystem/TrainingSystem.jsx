import styles from "./TrainingSystem.module.css";
import { DownloadIcon, DeviceIcon, HeadphonesIcon, DocIcon } from "../shared/Icons";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

// Card artwork lives in /public/images/what-you-get/ (cropped from the client's design)
const cards = [
  { n: 1, t: "Digital Book (PDF)", d: "A beautifully designed book with voice diagrams, explanations and exercises. Read on any device.", img: "/images/what-you-get/art-1.webp" },
  { n: 2, t: "Exercises & Audio", d: "Practical exercises, professional speaking drills, and QR codes linking to audio demonstrations.", img: "/images/what-you-get/art-2.webp" },
  { n: 3, t: "Bonuses", d: "30-Day Voice Confidence Challenge, Intonation Masterclass, Warm-Up Audio Series and the “Magnetic Tone” Cheat Sheet.", img: "/images/what-you-get/art-3.webp" },
  { n: 4, t: "Instant Access", d: "After checkout you receive your download link immediately. Questions? info@sevilvelsha.com", img: "/images/what-you-get/art-4.webp" },
];

export default function TrainingSystem() {
  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Everything you need to start today</p>
        <h2 className={styles.title}>What You Get</h2>
        <p className={styles.subtitle}>A complete, ready-to-use voice training system — all in one purchase.</p>

        <div className={styles.cards}>
          {cards.map((c) => (
            <div key={c.n} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.num}>{c.n}</span>
                <h3 className={styles.cardTitle}>{c.t}</h3>
              </div>
              <p className={styles.cardText}>{c.d}</p>
              <img src={c.img} alt={c.t} className={styles.art} loading="lazy" />
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.side}>
            <span><DownloadIcon /> Instant access</span>
            <span><DeviceIcon /> Read on phone, tablet or computer</span>
          </div>
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Get Your Copy — $29 →
          </a>
          <div className={styles.side}>
            <span><HeadphonesIcon /> Audio examples</span>
            <span><DocIcon /> Practical exercises</span>
          </div>
        </div>
      </div>
    </section>
  );
}