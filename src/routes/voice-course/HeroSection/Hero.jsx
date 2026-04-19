import React, { useState } from 'react';
import styles from './Hero.module.css';
import FreeAccessModal from '../FreeAccessModal/FreeAccessModal';

const STRIPE_99 = `https://buy.stripe.com/test_8x228q4OXbDX5zE6EMgIo02`;

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const trailerLink = "https://drive.google.com/file/d/1kEG8qrTpTThTGxQnxBFJ0Z12BY8gha-C/view?usp=sharing";

  const scrollToPricing = () => {
    const el = document.getElementById('Pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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
            {/* Button 1 — opens email capture modal */}
            <button
              className={styles.heroPrimaryBtn}
              onClick={() => setShowModal(true)}
            >
              Get Free Voice Training
            </button>

            {/* Button 2 — scrolls to pricing */}
            <button
              className={styles.heroSecondaryBtn}
              onClick={scrollToPricing}
            >
              View Full Program
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

      {/* Email capture modal */}
      {showModal && <FreeAccessModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Hero;