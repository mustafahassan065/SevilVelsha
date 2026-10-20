import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function LookInside() {
  const containerRef = useRef(null);

  // Scroll Progress Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth Spring Physics lagayi hai taake fast ya jerky na lage, bilkul smooth open ho
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  // Scroll ke sath Smooth 3D Transformations
  const bookRotateY = useTransform(smoothProgress, [0, 0.7], [-30, 0]);
  const coverRotateY = useTransform(smoothProgress, [0.1, 0.8], [0, -180]); // Aaram se 180 degree open hoga
  const bookScale = useTransform(smoothProgress, [0.1, 0.6], [0.9, 1]);
  const diagramOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        
        <h2 className={styles.sectionHeadline}>
          Open the Book. Discover the Power of Your Voice.
        </h2>

        <div className={styles.heroGrid}>
          
          {/* 3D Scroll-Driven Book Animation Stage */}
          <div className={styles.animationStage}>
            <motion.div 
              className={styles.book3DContainer}
              style={{ rotateY: bookRotateY, scale: bookScale }}
            >
              {/* Inside Page (Page 31 Speech Diagram) */}
              <div className={styles.bookInsidePage}>
                <motion.img 
                  src="/images/page31.jpeg" 
                  alt="Voice Diagram Page 31" 
                  className={styles.diagramImg}
                  style={{ opacity: diagramOpacity }}
                />
              </div>

              {/* Front Brown Cover with Text */}
              <motion.div 
                className={styles.bookFrontCover}
                style={{ rotateY: coverRotateY }}
              >
                <div className={styles.coverContent}>
                  <span className={styles.coverBadge}>DIGITAL BOOK</span>
                  <h3 className={styles.coverTitle}>VOICE CONTROL</h3>
                  <p className={styles.coverAuthor}>Sevil Velsha</p>
                  <span className={styles.coverHint}>Scroll to open ↓</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className={styles.textCol}>
            <h1 className={styles.heroTitle}>See What Makes a Voice Powerful.</h1>
            
            <p className={styles.heroSubtitle}>
              Your voice leaves a visible pattern. Discover how pitch, pauses, and emphasis influence the way your words are heard.
            </p>
            
            <div className={styles.ctaWrapper}>
              <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
                Get Voice Control — $29 →
              </a>
            </div>

            <p className={styles.bigSubText}>
              Voice diagrams · 70+ audio demonstrations · Practical exercises
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}