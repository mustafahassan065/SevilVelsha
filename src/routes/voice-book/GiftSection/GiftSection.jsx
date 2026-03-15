import styles from "./GiftSection.module.css";

export const GiftSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/Book2.png"
            alt="Voice Control Book"
            className={styles.bookImage}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>The Perfect Gift</h2>

          <p className={styles.subtitle}>
            A gift that arrives in seconds — a powerful transformation someone will remember for life.
          </p>

          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              Instant digital delivery
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              Premium illustrated format
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              Perfect for Christmas, New Year, and birthdays
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              No shipping delays
            </li>
          </ul>

          <div className={styles.divider}></div>

          <p className={styles.footerText}>Beautiful gift card included</p>
        </div>
      </div>
    </section>
  );
};
