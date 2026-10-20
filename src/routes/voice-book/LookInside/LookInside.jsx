import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

export default function LookInside() {
  const containerRef = useRef(null);

  // Scroll Progress Track karna (Section ke scroll ke sath)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 3D Transforms (Scroll ke sath Book Open hone ka effect)
  const bookRotateY = useTransform(scrollYProgress, [0.1, 0.5], [-60, 0]); // 3D Tilt se Straight
  const coverRotateY = useTransform(scrollYProgress, [0.2, 0.6], [0, -180]); // Cover ka Open hona
  const bookScale = useTransform(scrollYProgress, [0.1, 0.5], [0.85, 1]); // Zoom-in effect
  const diagramOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]); // Diagram ka emerge hona

  return (
    <section ref={containerRef} className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        
        {/* Header Title */}
        <h2 className={styles.sectionHeadline}>
          Open the Book. Discover the Power of Your Voice.
        </h2>

        <div className={styles.heroGrid}>
          
          {/* 3D Scroll-Driven Book Animation Container */}
          <div className={styles.animationStage}>
            <motion.div 
              className={styles.book3DContainer}
              style={{ rotateY: bookRotateY, scale: bookScale }}
            >
              {/* Back Page / Inside Pages (Page 31 Speech Diagram) */}
              <div className={styles.bookInsidePage}>
                <motion.img 
                  src="/images/page31.jpeg" 
                  alt="Voice Diagram Page 31" 
                  className={styles.diagramImg}
                  style={{ opacity: diagramOpacity }}
                />
              </div>

              {/* Front Cover (3D Opening Door) */}
              <motion.div 
                className={styles.bookFrontCover}
                style={{ rotateY: coverRotateY }}
              >
                <div className={styles.coverContent}>
                  <h3>VOICE CONTROL</h3>
                  <p>Sevil Velsha</p>
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