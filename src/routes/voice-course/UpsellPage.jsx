// src/routes/voice-course/UpsellPage.jsx
// Route: /voice-control-coaching-offer
// Shown BEFORE dashboard — after thank you page

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UpsellPage.module.css';

const DASHBOARD_URL  = '/voice-control-dashboard';
// ── Replace with actual Stripe coaching link ──
const COACHING_STRIPE_URL = 'https://buy.stripe.com/YOUR_COACHING_LINK';

export default function UpsellPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>

      {/* NAV */}
      <nav className={styles.nav}>
      <span
  onClick={() => navigate('/')}
  style={{
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    color: '#f5f4f0',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }}
>
  Sevil Velsha
</span>

      </nav>

      <div className={styles.container}>

        {/* Badge */}
        <div className={styles.badge}>⚡ One-Time Offer — Only for New Students</div>

        <h1 className={styles.heading}>
          Wait — One More Step
        </h1>

        <p className={styles.subheading}>
          You just joined Voice Control.<br/>
          Now take it further with private coaching.
        </p>

        <div className={styles.divider}/>

        {/* Offer Card */}
        <div className={styles.offerCard}>

          <p className={styles.offerLabel}>Exclusive Add-On</p>
          <h2 className={styles.offerTitle}>
            1:1 Private Voice Coaching<br/>with Sevil Velsha, PhD
          </h2>
          <p className={styles.offerDescription}>
            Get a private coaching session where Sevil personally analyzes
            your voice, identifies your specific weaknesses, and gives you
            a customized action plan for faster transformation.
          </p>

          {/* What's included */}
          <div className={styles.includesList}>
            {[
              '60-minute private Zoom session with Sevil',
              'Personal voice analysis & feedback',
              'Custom improvement plan for your voice',
              'Recording of the session for review',
              'Follow-up notes & exercises',
              'Priority email support for 30 days',
            ].map((item, i) => (
              <div key={i} className={styles.includesItem}>
                <span className={styles.check}>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className={styles.priceBlock}>
            <span className={styles.originalPrice}>$500</span>
            <span className={styles.price}>$197</span>
            <span className={styles.priceSub}>one-time, today only</span>
          </div>

          {/* CTA */}
          <a
            href={COACHING_STRIPE_URL}
            className={styles.primaryBtn}
          >
            Yes — Add Coaching for $197 →
          </a>

          <p className={styles.spotsLeft}>
            ⚠️ Limited spots available — Sevil only accepts 4 new coaching clients per month
          </p>

        </div>

        {/* Skip */}
        <button
          className={styles.skipBtn}
          onClick={() => navigate(DASHBOARD_URL)}
        >
          No thanks, take me to my course →
        </button>

        <p className={styles.guarantee}>
          🔒 Secure payment · 30-Day satisfaction guarantee
        </p>

      </div>
    </div>
  );
}