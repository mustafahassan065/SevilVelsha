import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

// Book spreads (Left page + Right page pairs)
const bookSpreads = [
  {
    id: 1,
    leftImg: "/images/page31.jpeg",
    rightImg: "/images/page-32.png",
    leftAlt: "Voice Control Book - Left Page",
    rightAlt: "Voice Control Book - Right Page",
  },
  {
    id: 2,
    leftImg: "/images/page32.jpeg",
    rightImg: "/images/page31.jpeg",
    leftAlt: "Voice Control Book - Exercises Left Page",
    rightAlt: "Voice Control Book - Exercises Right Page",
  }
];

export default function LookInside() {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeZoomImg, setActiveZoomImg] = useState(null);

  const currentSpread = bookSpreads[currentSpreadIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentSpreadIndex((prev) => (prev + 1) % bookSpreads.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSpreadIndex((prev) => (prev - 1 + bookSpreads.length) % bookSpreads.length);
  };

  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        
        {/* Top Simple Heading */}
        <h2 className={styles.mainHeading}>Book Preview</h2>

        {/* Physical Open Book Spread + Page Turning Animation */}
        <div className={styles.bookSpreadWrapper}>
          
          <button 
            onClick={handlePrev} 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            aria-label="Previous Pages"
          >
            ‹
          </button>

          <div className={styles.openBookOuter}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentSpreadIndex}
                custom={direction}
                initial={{ opacity: 0, rotateY: direction * 15, scale: 0.98 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: direction * -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.openBook}
              >
                {/* Left Page */}
                <div 
                  className={styles.pageContainer} 
                  onClick={() => setActiveZoomImg(currentSpread.leftImg)}
                  title="Click to zoom page"
                >
                  <img 
                    src={currentSpread.leftImg} 
                    alt={currentSpread.leftAlt} 
                    className={styles.bookPageImg} 
                  />
                  <span className={styles.zoomBadge}>🔍 Click to zoom</span>
                </div>

                <div className={styles.bookSpine}></div>

                {/* Right Page */}
                <div 
                  className={styles.pageContainer} 
                  onClick={() => setActiveZoomImg(currentSpread.rightImg)}
                  title="Click to zoom page"
                >
                  <img 
                    src={currentSpread.rightImg} 
                    alt={currentSpread.rightAlt} 
                    className={styles.bookPageImg} 
                  />
                  <span className={styles.zoomBadge}>🔍 Click to zoom</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={handleNext} 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            aria-label="Next Pages"
          >
            ›
          </button>

        </div>

        {/* Page Number Indicator */}
        <div className={styles.pageIndicator}>
          Spread {currentSpreadIndex + 1} of {bookSpreads.length}
        </div>

        {/* Description with Doubled Breathing Space */}
        <p className={styles.description}>
          Acoustic diagrams, 70+ audio demonstrations, and practical exercises designed to train your vocal delivery.
        </p>

        {/* Gold Purchase Button with Extra Breathing Margin */}
        <div className={styles.ctaWrapper}>
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Get the Complete Book — $29 →
          </a>
        </div>

      </div>

      {/* Click-to-Zoom Modal */}
      {activeZoomImg && (
        <div className={styles.modalOverlay} onClick={() => setActiveZoomImg(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveZoomImg(null)}>✕</button>
            <img src={activeZoomImg} alt="Enlarged Book Page" className={styles.zoomedImg} />
          </div>
        </div>
      )}
    </section>
  );
}