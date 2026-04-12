import React from 'react';
import styles from './Hero.module.css';

// ── Direct $99 Stripe link — success redirects to /voice-control-success

const STRIPE_99   = `https://buy.stripe.com/test_7sYbJ00yHdM59PUaV2gIo01`;

const Hero = () => {
  const trailerLink = "https://drive.google.com/file/d/1kEG8qrTpTThTGxQnxBFJ0Z12BY8gha-C/view?usp=sharing";

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContentWrapper}>
        <p className={styles.heroSubTitle}>
          A Proven Voice Method Used by Speakers, Educators & Leaders
        </p>

        <h1 className={styles.heroMainTitle}>
          VOICE <br /> CONTROL<span>™</span>
        </h1>

        <h2 className={styles.heroTagline}>
          How to Speak With Power, Calm & Magnetic Presence
        </h2>

        <p className={styles.heroDescription}>
          A weak or tense voice silently costs you authority, trust, and opportunity
        </p>

        <div className={styles.heroButtonGroup}>

          {/* Primary CTA — seedha $99 Stripe checkout */}
          <a
            href={STRIPE_99}
            className={styles.heroPrimaryBtn}
            style={{ textDecoration:'none', display:'inline-block', textAlign:'center' }}
          >
            Start My Voice Transformation —{' '}
            <span className={styles.btnSmallText}>Holiday Edition</span>
          </a>

          <button
            className={styles.heroSecondaryBtn}
            onClick={() => window.open(trailerLink, '_blank')}
          >
            Watch Trailer
          </button>
        </div>

        <p className={styles.heroGuaranteeText}>30-Day Voice Transformation Guarantee</p>

        <div className={styles.heroStatsBar}>
          <div className={styles.statItem}>
            <img src="/images/gift.png" alt="gift" className={styles.icon} />
            <span>Holiday access ends soon</span>
          </div>
          <div className={styles.statItem}>
            <img src="/images/lock.png" alt="lock" className={styles.icon} />
            <span>Lifetime access</span>
          </div>
          <div className={styles.statItem}>
            <img src="/images/star (2).png" alt="star" className={styles.icon} />
            <span>9,000+ students transformed</span>
          </div>
        </div>
      </div>

      <div className={styles.heroRightContainer}>
        <div className={styles.heroImageWrapper}>
          <img
            src="/images/herogirl.png"
            alt="Sevil Velsha"
            className={styles.heroImage}
          />
          <div className={styles.authorBio}>
            <h3 className={styles.authorName}>Sevil Velsha, PhD</h3>
            <p className={styles.authorTitle}>Voice Researcher & Speech Coach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;