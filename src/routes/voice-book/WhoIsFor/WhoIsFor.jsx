import styles from "./WhoIsFor.module.css";
import FeatureCard from "./FeatureCard";

const features = [
  { image: "/images/people.png", label: "Sound More Confident" },
  { image: "/images/rocket.png", label: "Speak Clearly At Work" },
  { image: "/images/graduation.png", label: 'Remove "Childish" Tone' },
  { image: "/images/heart.png", label: "Stop Sounding Nervous" },
  { image: "/images/community.png", label: "Become Unforgettable" },
];

export default function WhoIsFor() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Who This Book Is For</h2>
      <div className={styles.cards}>
        {features.map((feature, index) => (
          <FeatureCard key={index} image={feature.image} label={feature.label} />
        ))}
      </div>
    </section>
  );
}
