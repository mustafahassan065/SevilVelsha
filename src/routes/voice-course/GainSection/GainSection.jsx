"use client"

import styles from "./GainSection.module.css"

const benefits = [
  {
    left: "Speak with natural authority — without force or tension",
    right: "Remove shaking, nervousness, shallow breathing",
  },
  {
    left: "Build a warm, attractive, charismatic tone people love",
    right: "Replace weak, airy, nasal or muffled voice habits",
  },
  {
    left: "Sound clear, crisp, and confident in ANY situation",
    right: "Speak so people listen, engage, and remember",
  },
  {
    left: "Express emotion intentionally — not accidentally",
    right: "Hold attention in conversations, meetings, interviews, and videos",
  },
]

export default function GainSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.sparkle}>✨WHAT YOU WILL GAIN</span>
        </h2>
        <p className={styles.subtitle}>By the end of this program, you will:</p>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitRow}>
              <div className={styles.benefitItem}>
                <div className={styles.checkmark}>
                  <img
                    src="/images/tick.png"
                    alt="Tick"
                    className={styles.tickImage}
                  />
                </div>
                <p className={styles.benefitText}>{benefit.left}</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.checkmark}>
                  <img
                    src="/images/tick.png"
                    alt="Tick"
                    className={styles.tickImage}
                  />
                </div>
                <p className={styles.benefitText}>{benefit.right}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.divider}></div>

        <p className={styles.footer}>This is a full transformation, not just "tips."</p>
      </div>
    </section>
  )
}