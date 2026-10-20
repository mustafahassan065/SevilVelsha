import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function LookInside() {
  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          
          {/* Left Column: Page 31 Open-Book Image */}
          <div className={styles.imageCol}>
            <img 
              src="/images/page31.jpeg" 
              alt="Voice Control Book - Acoustic Diagram Page 31" 
              className={styles.openBookImg} 
            />
          </div>

          {/* Right Column: Text & CTA with Spacing */}
          <div className={styles.textCol}>
            <h1 className={styles.heroTitle}>See the Science Behind a Powerful Voice.</h1>
            
            <p className={styles.heroSubtitle}>
              Explore real speech analysis, hear the difference and learn techniques you can practise immediately.
            </p>
            
            <div className={styles.ctaWrapper}>
              <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
                $29 — Get the Book →
              </a>
            </div>

            <p className={styles.bigSubText}>
              Voice diagrams · 70+ audio demonstrations · Practical exercises
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}