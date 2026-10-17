import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function LookInside() {
  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.imageCol}>
            {/* IMAGE PLACEHOLDER: Yahan Pages 31 & 32 ki open-book acoustic diagram image lagani hai */}
            {/* Path: /public/images/open-book-diagram.png */}
            <img 
              src="/images/open-book-diagram.png" 
              alt="Acoustic Voice Diagram Open Book" 
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

            {/* Client requirement: Big font sub text */}
            <p className={styles.bigSubText}>
              Voice diagrams · 70+ audio demonstrations · Practical exercises
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}