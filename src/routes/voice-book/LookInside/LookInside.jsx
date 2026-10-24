import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

const bookSpreads = [
  {
    id: 1,
    leftImg: "/images/page33.jpeg",
    rightImg: "/images/page34.jpeg",
    leftAlt: "Voice Control Book - Left Page",
    rightAlt: "Voice Control Book - Right Page",
  },
  {
    id: 2,
    leftImg: "/images/page34.jpeg",
    rightImg: "/images/page33.jpeg",
    leftAlt: "Voice Control Book - Exercises Left Page",
    rightAlt: "Voice Control Book - Exercises Right Page",
  }
];

export default function LookInside() {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const currentSpread = bookSpreads[currentSpreadIndex];

  // Simple click to toggle spread smoothly like Apple's interactive cards
  const handleToggleSpread = () => {
    setCurrentSpreadIndex((prev) => (prev + 1) % bookSpreads.length);
  };

  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        
        {/* Simple Heading */}
        <h2 className={styles.mainHeading}>Book Preview</h2>

        {/* Apple-Style Clean Interactive Open Book Showcase */}
        <div className={styles.showcaseWrapper} onClick={handleToggleSpread} title="Click to flip pages">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.openBookContainer}
          >
            <div className={styles.openBook}>
              
              {/* Left Page */}
              <div className={styles.pageContainer}>
                <img 
                  src={currentSpread.leftImg} 
                  alt={currentSpread.leftAlt} 
                  className={styles.bookPageImg} 
                />
              </div>

              <div className={styles.bookSpine}></div>

              {/* Right Page */}
              <div className={styles.pageContainer}>
                <img 
                  src={currentSpread.rightImg} 
                  alt={currentSpread.rightAlt} 
                  className={styles.bookPageImg} 
                />
              </div>

            </div>
          </motion.div>

          {/* Subtle click hint instead of distracting arrows */}
          <div className={styles.interactionHint}>
            Tap / Click book to explore next pages ({currentSpreadIndex + 1} of {bookSpreads.length})
          </div>
        </div>

        {/* Description with Breathing Space */}
        <p className={styles.description}>
          Acoustic diagrams, 70+ audio demonstrations, and practical exercises designed to train your vocal delivery.
        </p>

        {/* Gold Purchase Button */}
        <div className={styles.ctaWrapper}>
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Get the Complete Book — $29 →
          </a>
        </div>

      </div>
    </section>
  );
}