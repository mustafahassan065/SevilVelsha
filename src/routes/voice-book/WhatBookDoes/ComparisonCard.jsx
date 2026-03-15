import styles from "./ComparisonCard.module.css";

export default function ComparisonCard({ text, type }) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div className={`${styles.iconWrapper} ${styles[type]}`}>
        {type === "before" ? (
          <svg
            className={`${styles.icon} ${styles.before}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className={`${styles.icon} ${styles.after}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
