import styles from "./pricing-section.module.css"

export default function PricingSection() {
  return (
    <section className={styles.container} id="Pricing-section">
      <h1 className={styles.heading}>Pricing & Tiers</h1>

      <div className={styles.tiersContainer}>
        {/* Updated First Card */}
        <div className={styles.card}>
          <div className={styles.price}>$99</div>
          <p className={styles.description}>Perfect for independent learners.</p>

          <ul className={styles.featureList}>
            <li className={styles.feature}>
              <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              All modules
            </li>
            <li className={styles.feature}>
              <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Workbook
            </li>
            <li className={styles.feature}>
              <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Certificate
            </li>
            <li className={styles.feature}>
              <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Lifetime access
            </li>
          </ul>

          <a
            href="https://buy.stripe.com/14AdRagnGdREbnw1Ap14407"
            className={styles.button}
            style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
          >
            Choose Plan
          </a>
        </div>

        {/* Pro Card */}
        <div className={`${styles.card} ${styles.proCard}`}>
          <div className={styles.badge}>Most Popular</div>
          <div className={styles.tierLabel}>PRO TIER</div>
          <div className={styles.price}>$299</div>
          <p className={styles.description}>For learners who want personalized guidance.</p>

          <ul className={styles.featureList}>
            <li className={styles.feature}>
              <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Everything in Self-Paced
            </li>
            <li className={styles.feature}>
              <span className={styles.plusIcon}>+</span>
              Feedback on your final video
            </li>
            <li className={styles.feature}>
              <span className={styles.plusIcon}>+</span>
              Correction notes & suggestions
            </li>
          </ul>

          <a
            href="https://buy.stripe.com/7sY3cw5J27tgdvE92R14404"
            className={`${styles.button} ${styles.proButton}`}
            style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
          >
            Choose Pro Tier
          </a>
        </div>

        {/* Premium Card */}
        <div className={styles.card}>
          <div className={styles.price}>$599</div>
          <p className={styles.description}>The highest transformation + direct access.</p>

          <ul className={styles.featureList}>
            <li className={styles.feature}>
              <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Everything in PRO
            </li>
            <li className={styles.feature}>
              <span className={styles.plusIcon}>+</span>2 private coaching calls
            </li>
            <li className={styles.feature}>
              <span className={styles.plusIcon}>+</span>
              Personalized voice analysis
            </li>
            <li className={styles.feature}>
              <span className={styles.plusIcon}>+</span>
              Final certification
            </li>
          </ul>

          <a
            href="https://buy.stripe.com/fZu4gA7RaaFs2R0baZ14406"
            className={styles.button}
            style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
          >
            Choose Premium
          </a>
        </div>
      </div>

      <div className={styles.guarantee}>
        <h2 className={styles.guaranteeHeading}>30-Day Voice Transformation Guarantee</h2>
        <p className={styles.guaranteeText}>
          Try the Voice Control Method risk-free. If you don't feel a real difference in how you sound, speak, and are
          perceived — you may request a refund according to our policy.
        </p>
      </div>
    </section>
  )
}