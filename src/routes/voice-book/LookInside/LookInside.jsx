import { useState, useEffect } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

// Apni audio files ka path yahan daalo (e.g. "/audio/before.mp3")
const BEFORE_AUDIO_SRC = "/audios/audioafter.mp3";
const AFTER_AUDIO_SRC = "/audios/audiobefore.mp3";

// 5 pages. Extension agar .jpeg nahi hai to yahan badal do.
const bookPages = [
  { id: 1, img: "/images/pageimage1.jpeg", alt: "Voice Control Book - Page 1" },
  { id: 2, img: "/images/pageimage2.jpeg", alt: "Voice Control Book - Page 2" },
  { id: 3, img: "/images/pageimage3.jpeg", alt: "Voice Control Book - Page 3" },
  { id: 4, img: "/images/pageimage4.jpeg", alt: "Voice Control Book - Page 4" },
  { id: 5, img: "/images/pageimage5.jpeg", alt: "Voice Control Book - Page 5" },
];

const TOTAL = bookPages.length;

// Desktop spreads (left | right):
// 1|2 -> 3|4 -> 5|1 -> 2|3 -> 4|5
// Har leaf ke front/back pe kaunsa page aayega (index into bookPages)
const leafFaces = bookPages.map((_, k) => ({
  front: (2 * k + 1) % TOTAL,
  back: (2 * k + 2) % TOTAL,
}));

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isMobile;
}

/* A single 3D page (leaf). It hinges on the spine and turns with perspective. */
function Leaf({ frontPage, backPage, index, turned, isMobile }) {
  const rot = useMotionValue(0);
  const turnedAngle = isMobile ? -120 : -180;

  useEffect(() => {
    const controls = animate(rot, turned ? turnedAngle : 0, {
      duration: 1.1,
      ease: [0.645, 0.045, 0.355, 1],
    });
    return () => controls.stop();
  }, [turned, turnedAngle, rot]);

  // Layering: switch stacking order halfway through the turn
  const zIndex = useTransform(rot, (v) =>
    v < -90 ? index + 1 : TOTAL + 5 - index
  );
  // Soft shadow that darkens the page as it passes through the middle of the turn
  const frontShade = useTransform(rot, [-180, -90, 0], [0, 0.45, 0]);
  const backShade = useTransform(rot, [-180, -90, 0], [0.25, 0.5, 0]);

  return (
    <motion.div
      className={styles.leaf}
      style={{ rotateY: rot, zIndex }}
      animate={{ opacity: isMobile && turned ? 0 : 1 }}
      transition={{
        duration: 0.4,
        delay: isMobile && turned ? 0.7 : 0,
      }}
    >
      {/* Front face */}
      <div className={`${styles.face} ${styles.front}`}>
        <img
          src={frontPage.img}
          alt={frontPage.alt}
          className={styles.bookPageImg}
        />
        <motion.div className={styles.shade} style={{ opacity: frontShade }} />
      </div>

      {/* Back face */}
      <div className={`${styles.face} ${styles.back}`}>
        <img
          src={backPage.img}
          alt={backPage.alt}
          className={styles.bookPageImg}
        />
        <motion.div className={styles.shade} style={{ opacity: backShade }} />
      </div>
    </motion.div>
  );
}

export default function LookInside() {
  const [current, setCurrent] = useState(0); // 0..4
  const isMobile = useIsMobile();

  const goNext = () => setCurrent((p) => Math.min(p + 1, TOTAL - 1));
  const goPrev = () => setCurrent((p) => Math.max(p - 1, 0));

  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        {/* Simple Heading */}
        <h2 className={styles.mainHeading}>Book Preview</h2>

        {/* 3D Book with arrow controls */}
        <div className={styles.showcaseWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.openBookContainer}
          >
            <div className={styles.bookRow}>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={goPrev}
                disabled={current === 0}
                aria-label="Previous page"
              >
                ‹
              </button>

              <div className={styles.bookStage}>
                <div className={styles.book}>
                  <div className={styles.leftBase}>
                    <img
                      src={bookPages[0].img}
                      alt={bookPages[0].alt}
                      className={styles.bookPageImg}
                    />
                  </div>
                  <div className={styles.bookSpine} />
                  {leafFaces.map((faces, i) => (
                    <Leaf
                      key={i}
                      index={i}
                      frontPage={bookPages[isMobile ? i : faces.front]}
                      backPage={bookPages[faces.back]}
                      turned={i < current}
                      isMobile={isMobile}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className={styles.arrowBtn}
                onClick={goNext}
                disabled={current === TOTAL - 1}
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          </motion.div>

          <div className={styles.interactionHint}>
            Use the arrows to turn pages ({current + 1} of {TOTAL})
          </div>
        </div>

        {/* Before / After audio demonstration (directly under the book) */}
        <div className={styles.audioBlock}>
          <h3 className={styles.audioHeading}>
            Before and After Audio Demonstration
          </h3>
          <div className={styles.audioGrid}>
            <div className={styles.audioItem}>
              <p className={styles.audioLabel}>Before</p>
              <audio
                key={BEFORE_AUDIO_SRC}
                controls
                preload="metadata"
                src={BEFORE_AUDIO_SRC || undefined}
                className={styles.audioPlayer}
              >
                Your browser does not support audio playback.
              </audio>
            </div>
            <div className={styles.audioItem}>
              <p className={styles.audioLabel}>After</p>
              <audio
                key={AFTER_AUDIO_SRC}
                controls
                preload="metadata"
                src={AFTER_AUDIO_SRC || undefined}
                className={styles.audioPlayer}
              >
                Your browser does not support audio playback.
              </audio>
            </div>
          </div>
        </div>

        {/* Description with Breathing Space */}
        <p className={styles.description}>
          Acoustic diagrams, 70+ audio demonstrations, and practical exercises designed to train your vocal delivery.
        </p>

        {/* Gold Purchase Button */}
        <div className={styles.ctaWrapper}>
          <a
            href={BUY_URL}
            className={styles.buyButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the Complete Book — $29 →
          </a>
        </div>
      </div>
    </section>
  );
}