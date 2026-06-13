// src/routes/voice-audit/PricingSection.jsx
// Drop this <section> anywhere inside VoiceAuditPage.jsx (e.g. right after
// the "Only 10 Slots" section, or wherever the client wants pricing tiers).
// Uses the SAME color/font variables as VoiceAuditPage — keep them in sync.

import React from 'react';

export default function PricingSection() {
  const G = "'Cormorant Garamond', Georgia, serif";
  const J = "'Jost', 'Segoe UI', Arial, sans-serif";
  const GOLD = '#C9A84C';
  const DARK = '#0a0a0a';
  const DARK2 = '#111111';
  const CARD = '#161616';
  const CARD_BORDER = 'rgba(201,169,110,0.15)';

  // ⚠️ Replace these with your real Stripe Payment Link / Checkout URLs.
  // The "Free" tier doesn't need Stripe — link it to your free-submission form.
  const LINKS = {
    free:     '/free-voice-check',                                  // internal route or form
    quick:    'https://buy.stripe.com/YOUR_QUICK_AUDIT_LINK_19',     // $19
    complete: 'https://buy.stripe.com/YOUR_COMPLETE_AUDIT_LINK_49',  // $49
  };

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 12l5 5L20 7" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SectionLabel = ({ children }) => (
    <p style={{
      fontFamily: J, fontSize: '11px', fontWeight: 700,
      letterSpacing: '0.25em', textTransform: 'uppercase',
      color: GOLD, margin: '0 0 16px', textAlign: 'center'
    }}>
      {children}
    </p>
  );

  const PlanButton = ({ href, children, featured }) => (
    <a href={href} style={{
      display: 'block', textAlign: 'center',
      background: featured ? GOLD : 'transparent',
      color: featured ? '#111' : GOLD,
      border: `1px solid ${GOLD}`,
      fontFamily: J, fontSize: '12px', fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      padding: '16px 24px', textDecoration: 'none', marginTop: 24
    }}>
      {children}
    </a>
  );

  const plans = [
    {
      tag: 'Free',
      price: '$0',
      title: 'Quick Voice Check',
      subtitle: 'Submit a 30-second recording',
      features: ['1 Strength', '1 Key Issue', '1 Quick Improvement Tip'],
      note: "Perfect if you're curious about how your voice comes across.",
      cta: 'Get Free Voice Check',
      link: LINKS.free,
      featured: false,
    },
    {
      tag: 'Quick Audit',
      price: '$19',
      title: 'Quick Voice Audit',
      subtitle: null,
      features: [
        '3–5 Minute Expert Review',
        'Top 3 Voice Issues Identified',
        '3 Specific Improvement Recommendations',
        'Delivered within 24 Hours',
      ],
      note: 'Perfect for professionals, job seekers, and non-native English speakers who want focused feedback.',
      cta: 'Order Quick Voice Audit',
      link: LINKS.quick,
      featured: false,
    },
    {
      tag: 'Most Popular',
      price: '$49',
      title: 'Complete Voice Audit',
      subtitle: null,
      features: [
        'Detailed Video Analysis',
        'Authority Score',
        'Pace Analysis',
        'Pause Analysis',
        'Pitch & Vocal Variety Analysis',
        'Confidence Assessment',
        'Personalized Improvement Plan',
        'Delivered within 24 Hours',
      ],
      note: 'Perfect for executives, professionals, job seekers, presenters, entrepreneurs, and content creators.',
      cta: 'Order Complete Voice Audit',
      link: LINKS.complete,
      featured: true,
    },
  ];

  return (
    <section style={{ background: DARK2, padding: 'clamp(80px,10vw,120px) clamp(40px,6vw,100px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <SectionLabel>Choose Your Audit</SectionLabel>
        <h2 style={{ fontFamily: G, fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 700, color: '#fff', margin: '0 0 0', lineHeight: 1.1 }}>
          Find the <span style={{ color: GOLD, fontStyle: 'italic' }}>Right Fit</span> for Your Voice
        </h2>
        <div style={{ width: 48, height: 3, background: GOLD, margin: '20px auto 56px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'stretch' }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${plan.featured ? GOLD : CARD_BORDER}`,
                padding: '36px 28px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: -1, right: -1,
                  background: GOLD, color: '#111',
                  fontFamily: J, fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '6px 14px'
                }}>
                  Best Value
                </div>
              )}

              <p style={{ fontFamily: J, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 12px' }}>
                {plan.tag}
              </p>
              <p style={{ fontFamily: G, fontSize: '2.6rem', fontWeight: 700, color: '#fff', margin: '0 0 4px', lineHeight: 1 }}>
                {plan.price}
              </p>
              <h3 style={{ fontFamily: G, fontSize: '1.35rem', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
                {plan.title}
              </h3>
              {plan.subtitle && (
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: '0 0 16px', fontStyle: 'italic' }}>
                  {plan.subtitle}
                </p>
              )}

              <div style={{ width: 28, height: 2, background: GOLD, margin: plan.subtitle ? '0 0 20px' : '16px 0 20px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {plan.features.map((f, j) => (
                  <span key={j} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.4 }}>
                    <span style={{ marginTop: 2 }}><CheckIcon /></span>{f}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '0 0 0', lineHeight: 1.6, flexGrow: 1, fontStyle: 'italic' }}>
                {plan.note}
              </p>

              <PlanButton href={plan.link} featured={plan.featured}>{plan.cta}</PlanButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}