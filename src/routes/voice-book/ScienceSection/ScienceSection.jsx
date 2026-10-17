import styles from "./ScienceSection.module.css";

export default function ScienceSection() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <p className={styles.eyebrow}>The Science Behind the Voice</p>
          <h2 className={styles.title}>Created by Sevil Velsha</h2>
          <p className={styles.role}>Voice Researcher · Linguist · Communication Coach</p>
          <p className={styles.body}>
            Built on years of linguistic research, English theatrical speech analysis, and teaching experience.
          </p>
          <p className={styles.strong}>
            Not just advice to "sound confident."<br />
            A practical method to understand, hear, and train your voice.
          </p>
        </div>
      </div>
    </section>
  );
}