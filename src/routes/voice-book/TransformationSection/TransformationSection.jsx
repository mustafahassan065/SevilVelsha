import styles from "./TransformationSection.module.css";

const features = [
  "Have Warm, Powerful, Attractive Tone",
  "Influence How People Think & Feel",
  "Stop Shrinking Your Voice",
  "Finally Trust Your Own Sound",
  "Sound More Grounded And Mature",
  "Speak So People Take You Seriously",
  "Feel Calm In Your Chest And Body",
  "Breathe Slowly And Confidently"
];

export const TransformationSection = () => {
  return (
    <section className={styles.section}>
      <img
        src="/images/image.png"
        alt="Background"
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.headerArea}>
          <h2 className={styles.title}>The Transformation You Will Feel</h2>
          <p className={styles.subtitle}>
            After reading this book, your voice becomes a tool — not an accident.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((text, index) => (
            <div key={index} className={styles.item}>
              <svg
                className={styles.heartIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className={styles.itemText}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};