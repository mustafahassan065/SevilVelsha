

import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Do I need experience?",
      answer: "No — this course works for beginners to advanced speakers. We start with the fundamentals and build up gradually."
    },
    {
      question: "Will my voice really change?",
      answer: "Yes. Students often hear results in 7–10 days. This is a proven method used by professional actors and speakers."
    },
    {
      question: "Is it useful for accents, anxiety, or public speaking?",
      answer: "Absolutely — these techniques strengthen clarity, confidence, and breath control, which helps with all speaking challenges."
    },
    {
      question: "How long do I keep access?",
      answer: "Lifetime access. You can return and practice anytime, at your own pace."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.questionIcon}>❓</span>
          <h2 className={styles.mainTitle}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.questionRow}>
                <h3 className={styles.questionText}>{item.question}</h3>
                <span className={styles.arrowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              
              <div className={styles.answerWrapper}>
                <div className={styles.answerContent}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;