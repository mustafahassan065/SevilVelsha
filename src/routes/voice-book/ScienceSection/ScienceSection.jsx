import styles from "./ScienceSection.module.css";

export default function ScienceSection() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <p className={styles.eyebrow}>The Science Behind the Voice</p>
          <h2 className={styles.title}>Not Another Book of Public Speaking Tips.</h2>
          <p className={styles.body}>
            Voice Control grew out of years of linguistic research, English theatrical speech analysis, and teaching.
          </p>
          <p className={styles.body}>
            Instead of telling you to “just be confident,” it shows you how to understand and train the vocal patterns that influence your delivery.
          </p>
          <div className={styles.authorBox}>
            <h3 className={styles.authorName}>Sevil Velsha</h3>
            <p className={styles.role}>Voice Researcher · Linguist · Communication Coach</p>
          </div>
        </div>
      </div>
    </section>
  );
}