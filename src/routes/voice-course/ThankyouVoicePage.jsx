// src/routes/voice-course/ThankYouVoicePage.jsx
// Route: /voice-control-success
// Stripe redirects here after successful payment

import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './ThankyouVoicePage.module.css';

const DASHBOARD_URL = '/voice-control-dashboard';
const UPSELL_URL    = '/voice-control-coaching-offer';

export default function ThankYouVoicePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // GA4 purchase event
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: searchParams.get('session_id') || 'direct',
        value: 99,
        currency: 'USD',
        items: [{ item_name: 'Voice Control Course' }],
      });
    }
    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Purchase', { value: 99, currency: 'USD' });
    }
  }, []);

  return (
    <div className={styles.page}>

      {/* ── MINIMAL NAV ── */}
      <nav className={styles.nav}>
        <img
          src="/images/logo.png"
          alt="Sevil Velsha"
          className={styles.logo}
          onClick={() => navigate('/')}
        />
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div className={styles.container}>

        {/* Checkmark */}
        <div className={styles.checkCircle}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5 9-10" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className={styles.label}>Payment Confirmed</p>

        <h1 className={styles.heading}>
          Welcome to<br/>Voice Control 🎤
        </h1>

        <p className={styles.subheading}>
          Your access is ready. Your transformation begins now.
        </p>

        <p className={styles.body}>
          We've sent your course access link to your email.
          You can also go directly to your dashboard below.
        </p>

        <div className={styles.divider}/>

        {/* Primary CTA */}
        <button
          className={styles.primaryBtn}
          onClick={() => navigate(DASHBOARD_URL)}
        >
          Go to Dashboard →
        </button>

        <p className={styles.small}>
          Check your email for your access link as well.
        </p>

        {/* What's next */}
        <div className={styles.nextSteps}>
          <p className={styles.nextStepsLabel}>What Happens Next</p>
          <div className={styles.stepsList}>
            {[
              { num: '01', text: 'Check your email — your welcome message and access link are waiting.' },
              { num: '02', text: 'Open your dashboard and start with Lesson 1.' },
              { num: '03', text: 'Complete all 8 lessons at your own pace.' },
              { num: '04', text: 'Submit your final recording and receive your certificate.' },
            ].map((item) => (
              <div key={item.num} className={styles.step}>
                <span className={styles.stepNum}>{item.num}</span>
                <p className={styles.stepText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upsell teaser */}
        <div className={styles.upsellTeaser}>
          <p className={styles.upsellLabel}>Want Faster Results?</p>
          <p className={styles.upsellText}>
            Add a private 1:1 coaching session with Sevil — limited spots available.
          </p>
          <button
            className={styles.upsellBtn}
            onClick={() => navigate(UPSELL_URL)}
          >
            See Coaching Offer →
          </button>
        </div>

        <p className={styles.footer}>
          Questions?{' '}
          <a href="mailto:info@sevilvelsha.com" className={styles.link}>
            info@sevilvelsha.com
          </a>
        </p>

      </div>
    </div>
  );
}