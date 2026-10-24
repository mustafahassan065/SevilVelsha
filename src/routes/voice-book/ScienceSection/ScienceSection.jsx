import styles from "./ScienceSection.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function ScienceSection() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container}>
        
        <p className={styles.eyebrow}>Expertise & Background</p>
        <h2 className={styles.title}>Meet the Researcher Behind the Method</h2>

        <div className={styles.authorGrid}>
          
          {/* Author Photo Column - Seamless Natural Integration (No Frame/No Shadow) */}
          <div className={styles.imageCol}>
            <img 
              src="/images/audit-hero.png" 
              alt="Sevil Velsha - Voice Researcher" 
              className={styles.authorImg} 
            />
          </div>

          {/* Author Bio Column */}
          <div className={styles.bioCol}>
            <h3 className={styles.authorName}>Sevil Velsha</h3>
            <p className={styles.role}>Linguist | Voice Researcher | Author</p>
            
            <p className={styles.body}>
              My research into English stage speech explored how pitch, pauses, rhythm, and emphasis influence the way we communicate and lead.
            </p>
            <p className={styles.body}>
              Instead of telling you to just "be confident," this method gives you concrete acoustic tools to understand and train your voice.
            </p>

            <div className={styles.authorCta}>
              <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
                Discover the Method — Get the Book for $29 →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}