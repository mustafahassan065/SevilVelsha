import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function LookInside() {
  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        
        {/* HERO / TOP ARRANGEMENT */}
        <div className={styles.heroGrid}>
          <div className={styles.imageCol}>
            {/* IMAGE PLACEHOLDER 2: Open Book Image (Pages 31 & 32 with Acoustic Diagram) */}
            {/* Image Path: /public/images/open-book-diagram.png */}
            <img 
              src="/images/open-book-diagram.png" 
              alt="Voice Control Open Book showing acoustic diagram" 
              className={styles.openBookImg} 
            />
          </div>

          <div className={styles.textCol}>
            <h1 className={styles.heroTitle}>See the Science Behind a Powerful Voice.</h1>
            <p className={styles.heroSubtitle}>
              Explore real speech analysis, hear the difference and learn techniques you can practise immediately.
            </p>
            
            <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
              $29 — Get the Book →
            </a>

            {/* BIG FONT Sub-text as requested in Doc */}
            <p className={styles.bigSubText}>
              Voice diagrams · 70+ audio demonstrations · Practical exercises
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION / FOOTER CTA */}
        <div className={styles.bottomCtaBox}>
          <h2 className={styles.bottomHeading}>
            You Know What to Say. But Does Your Voice Deliver It?
          </h2>
          <p className={styles.bottomDesc}>
            Stop rushing, sounding uncertain, or losing your listener's attention. Learn to use your voice with confidence and authority.
          </p>
          <div className={styles.badge}>VOICE CONTROL · DIGITAL BOOK · $29</div>
          
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Start Training Your Voice
          </a>
          <p className={styles.bottomFeatures}>
            Instant access · Audio demonstrations · Practical exercises
          </p>
        </div>

      </div>
    </section>
  );
}