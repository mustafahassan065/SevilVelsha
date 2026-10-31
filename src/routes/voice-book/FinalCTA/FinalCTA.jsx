import styles from "./FinalCTA.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

/* Simple gold line icons */
function HeadphonesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3" y="14" width="4" height="6" rx="1.6" />
      <rect x="17" y="14" width="4" height="6" rx="1.6" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 6.5C10 5 7 4.6 3.5 5v13c3.5-.4 6.5 0 8.5 1.5 2-1.5 5-1.9 8.5-1.5V5c-3.5-.4-6.5 0-8.5 1.5Z" />
      <path d="M12 6.5v13" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="13" width="4" height="7" rx="0.8" />
      <rect x="10" y="9" width="4" height="11" rx="0.8" />
      <rect x="16" y="4" width="4" height="16" rx="0.8" />
    </svg>
  );
}

const features = [
  { key: "audio", label: "70+ Audio Demonstrations", Icon: HeadphonesIcon },
  { key: "diagrams", label: "Acoustic Diagrams", Icon: BookIcon },
  { key: "exercises", label: "Practical Exercises", Icon: ChartIcon },
];

export default function FinalCTA() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: photo (transparent, soft-faded edges) */}
          <div className={styles.imageCol}>
            <img
              src="/images/voice-control-people2.png"
              alt="Readers holding the Voice Control book"
              className={styles.heroImg}
              loading="lazy"
              draggable="false"
            />
          </div>

          {/* Right: content */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              You Know What to Say. But Does Your Voice Deliver It?
            </h2>
            <p className={styles.subtitle}>
              Stop rushing, sounding uncertain, or losing your listener's attention. Learn to use your voice with confidence and authority.
            </p>

            <ul className={styles.features}>
              {features.map(({ key, label, Icon }) => (
                <li key={key} className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <Icon />
                  </span>
                  <span className={styles.featureLabel}>{label}</span>
                </li>
              ))}
            </ul>

            <div>
              <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
                Get Voice Control — $29 →
              </a>
            </div>

            <p className={styles.miniRow}>
              Instant access · Digital book · Audio demonstrations · Practical exercises
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}