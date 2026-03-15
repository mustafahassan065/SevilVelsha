import styles from "./WhoIsFor.module.css";

export default function FeatureCard({ image, label }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={label} className={styles.cardIcon} />
      <p className={styles.cardLabel}>{label}</p>
    </div>
  );
}
