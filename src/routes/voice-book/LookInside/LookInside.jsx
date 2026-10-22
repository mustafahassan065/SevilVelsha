import { useState } from "react";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

// Sample book pages / diagrams list for interactive preview
const bookPages = [
  { id: 1, title: "Page 31: Acoustic Speech Diagram", img: "/images/page31.jpeg", desc: "Visible sound patterns, pitch contours, and emphasis." },
  { id: 2, title: "Page 32: Delivery Analysis", img: "/images/page-32.jpeg", desc: "Pauses and rhythm structure for executive presence." },
  { id: 3, title: "Voice Exercises & Practice", img: "/images/page4.jpeg", desc: "Practical drills to train your vocal delivery immediately." }
];

export default function LookInside() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % bookPages.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + bookPages.length) % bookPages.length);
  };

  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        
        <h2 className={styles.sectionHeadline}>
          Preview — Look Inside the Book
        </h2>
        <p className={styles.sectionSub}>
          Explore real acoustic diagrams and training pages directly from the book.
        </p>

        <div className={styles.previewWrapper}>
          
          {/* Interactive Book Display / Viewer */}
          <div className={styles.bookViewer}>
            <div className={styles.pageCard}>
              <img 
                src={bookPages[currentPage].img} 
                alt={bookPages[currentPage].title} 
                className={styles.pageImg} 
              />
              <div className={styles.pageInfo}>
                <h4>{bookPages[currentPage].title}</h4>
                <p>{bookPages[currentPage].desc}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className={styles.navControls}>
              <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous Page">
                ← Prev
              </button>
              <span className={styles.pageCounter}>
                Page {currentPage + 1} of {bookPages.length}
              </span>
              <button onClick={handleNext} className={styles.navBtn} aria-label="Next Page">
                Next →
              </button>
            </div>
          </div>

          {/* Right Column: CTA & Summary */}
          <div className={styles.textCol}>
            <h3 className={styles.boxTitle}>Open the Book. Discover the Power of Your Voice.</h3>
            <p className={styles.boxDesc}>
              Your voice leaves a visible pattern. Use these exact diagrams and exercises to transform how your speech is delivered and heard.
            </p>
            
            <div className={styles.ctaWrapper}>
              <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
                Get the Complete Book — $29 →
              </a>
            </div>

            <p className={styles.featuresList}>
              ✓ Voice diagrams &nbsp;·&nbsp; ✓ 70+ audio demos &nbsp;·&nbsp; ✓ Practical exercises
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}