import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function LookInside() {
  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          
          {/* Left Column: Two Images for Page 31 & Page 32 */}
          <div className={styles.imageCol}>
            {/* IMAGE PLACEHOLDER 1: Page 31 Image */}
            {/* Path: /public/images/page-31.png */}
            <img 
              src="/images/page31.jpeg" 
              alt="Voice Control Book - Page 31" 
              className={styles.bookImg} 
            />
            
            {/* IMAGE PLACEHOLDER 2: Page 32 Image */}
            {/* Path: /public/images/page-32.png */}
            <img 
              src="/images/page32.jpeg" 
              alt="Voice Control Book - Page 32" 
              className={styles.bookImg} 
            />
          </div>

          {/* Right Column: Text & CTA */}
          <div className={styles.textCol}>
            <h1 className={styles.heroTitle}>See the Science Behind a Powerful Voice.</h1>
            <p className={styles.heroSubtitle}>
              Explore real speech analysis, hear the difference and learn techniques you can practise immediately.
            </p>
            
            <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
              $29 — Get the Book →
            </a>

            <p className={styles.bigSubText}>
              Voice diagrams · 70+ audio demonstrations · Practical exercises
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}