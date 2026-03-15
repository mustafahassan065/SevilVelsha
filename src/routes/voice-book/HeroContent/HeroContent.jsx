import styles from "./HeroContent.module.css";

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <p className={styles.tagline}>
        A proven voice method used by speakers, educators &amp; leaders
      </p>

      <h1 className={styles.mainTitle}>
        VOICE<br />CONTROL<span className={styles.trademark}>™</span>
      </h1>

      <h2 className={styles.subtitle}>
        How to speak with power, calm and<br />magnetic presence
      </h2>

      <p className={styles.highlightText}>
        Respect. Attraction. Authority.
      </p>

      <p className={styles.description}>
        Transform your voice into your most powerful leadership tool. Learn the secrets of magnetic communication that commands attention and inspires action.
      </p>

      <p className={styles.secondaryTitle}>
        How to Speak With Power, Calm &amp; Magnetic Presence
      </p>

      <div className={styles.buttons}>
        <a
          href="https://buy.stripe.com/8x24gA8Ve14SfDMenb14405"
          className={styles.buyButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now— 97$
        </a>
        <button className={styles.samplesButton}>Read Samples</button>
      </div>

      <p className={styles.guarantee}>30-Day Voice Transformation Guarantee</p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          <span>Instant Download</span>
        </div>
        <div className={styles.feature}>
          <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>Bonus Materials</span>
        </div>
      </div>
    </div>
  );
}
