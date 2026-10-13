import styles from "./WhatYouGet.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function WhatYouGet() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What You Get</h2>

        <div className={styles.grid}>
          <div className={styles.block}>
            <h3>Format</h3>
            <p>
              Digital book (PDF) with an Audio Companion, instant download, read
              on phone, tablet or computer.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Exercises &amp; Audio</h3>
            <p>
              Practical voice exercises, professional speaking drills, and QR
              codes linking to audio demonstrations.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Bonuses</h3>
            <p>
              30-Day Voice Confidence Challenge, Intonation Masterclass, Warm-Up
              Audio Series and the "Magnetic Tone" Cheat Sheet.
            </p>
          </div>
          <div className={styles.block}>
            <h3>How You Access It</h3>
            {/* TODO: confirm delivery method with client (email link / download page) */}
            <p>
              After checkout you receive your download link right away. Questions?
              info@sevilvelsha.com
            </p>
          </div>
        </div>

        <a
          href={BUY_URL}
          className={styles.buyButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now — $29
        </a>
      </div>
    </section>
  );
}