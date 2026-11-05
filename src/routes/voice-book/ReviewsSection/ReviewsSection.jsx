import { motion } from "framer-motion";
import styles from "./ReviewsSection.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

/* ------------------------------------------------------------------
   IMPORTANT: The reviews below are PLACEHOLDER SAMPLES so you can see
   the design. Replace name / role / text with REAL client reviews
   (with their permission) before the site goes live.
------------------------------------------------------------------- */
const REVIEWS = [
  {
    name: "Client Name 1",
    role: "Marketing Manager",
    text: "I always rushed through presentations without realising it. After applying the pause and pitch exercises, my team noticed the difference in the very next meeting.",
  },
  {
    name: "Client Name 2",
    role: "Startup Founder",
    text: "The audio demonstrations make everything click. Hearing the same sentence delivered two ways taught me more than hours of generic speaking advice.",
  },
  {
    name: "Client Name 3",
    role: "University Lecturer",
    text: "Clear, practical and grounded in real research. I now plan where to pause and which word to stress, and my students are far more engaged.",
  },
  {
    name: "Client Name 4",
    role: "Sales Director",
    text: "The exercises are short and easy to repeat daily. My calls sound calmer and more confident, and clients listen differently.",
  },
  {
    name: "Client Name 5",
    role: "Job Seeker",
    text: "I used the method before my interviews. Speaking slower and landing my key points with emphasis made me feel in control for the first time.",
  },
  {
    name: "Client Name 6",
    role: "Public Speaker",
    text: "Finally a book that explains WHY a voice sounds authoritative, not just 'be confident'. The acoustic diagrams are brilliant.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

function Stars() {
  return (
    <div className={styles.stars} role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={styles.star} aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5 6.1 20.7l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 32 32" className={styles.quoteIcon} aria-hidden="true">
      <path d="M13 8H7.5C6.1 8 5 9.1 5 10.5V16c0 1.4 1.1 2.5 2.5 2.5H10c0 2.5-1.2 4-3.5 4.5v2.5c4.6-.5 7-3.4 7-8V10.5C13.5 9.1 13.9 8 13 8zm14 0h-5.5c-1.4 0-2.5 1.1-2.5 2.5V16c0 1.4 1.1 2.5 2.5 2.5H24c0 2.5-1.2 4-3.5 4.5v2.5c4.6-.5 7-3.4 7-8V10.5C27.5 9.1 27.9 8 27 8z" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.verified} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 12.4l3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const cardVariant = (i) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] },
  },
  whileHover: { y: -6, transition: { duration: 0.2 } },
  viewport: { once: true, amount: 0.2 },
});

export default function ReviewsSection() {
  return (
    <section className={`${styles.section} ${styles.bgCream}`} aria-labelledby="reviews-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Reader Reviews</p>
        <h2 id="reviews-title" className={styles.title}>
          What Readers Say About <span className={styles.titleItalic}>Voice Control</span>
        </h2>

        <div className={styles.summary}>
          <Stars />
          <span className={styles.summaryText}>
            <strong>5.0</strong> average · Trusted by readers worldwide
          </span>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, i) => (
            <motion.figure key={r.name} className={styles.card} {...cardVariant(i)}>
              <QuoteIcon />
              <Stars />
              <blockquote className={styles.text}>“{r.text}”</blockquote>

              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(r.name)}
                  <VerifiedIcon />
                </span>
                <span className={styles.authorInfo}>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.role}>{r.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          className={styles.ctaWrap}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Join Them — Get Voice Control for $29 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}