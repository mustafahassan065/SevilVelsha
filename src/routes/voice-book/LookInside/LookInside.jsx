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

// true = dono recordings mein alfaaz same hain ("Same words." subtitle dikhegi)
const SAME_WORDS = true;

// 9 pages. Nayi images (6-9) purani last 2 (4, 5) se pehle hain.
// Extension agar .jpeg nahi hai to yahan badal do.
const bookPages = [
  { id: 1, img: "/images/pageimage1.jpeg", alt: "Voice Control Book - Page 1" },
  { id: 2, img: "/images/pageimage2.jpeg", alt: "Voice Control Book - Page 2" },
  { id: 3, img: "/images/pageimage3.jpeg", alt: "Voice Control Book - Page 3" },
  { id: 4, img: "/images/pageimage6.jpeg", alt: "Voice Control Book - Page 4" },
  { id: 5, img: "/images/pageimage7.jpeg", alt: "Voice Control Book - Page 5" },
  { id: 6, img: "/images/pageimage8.jpeg", alt: "Voice Control Book - Page 6" },
  { id: 7, img: "/images/pageimage9.jpeg", alt: "Voice Control Book - Page 7" },
  { id: 8, img: "/images/pageimage4.jpeg", alt: "Voice Control Book - Page 8" },
  { id: 9, img: "/images/pageimage5.jpeg", alt: "Voice Control Book - Page 9" },
];

const TOTAL = bookPages.length;

// Desktop spreads (left | right): 1|2 -> 3|4 -> 5|6 -> 7|8 -> 9|1 -> 2|3 -> 4|5 -> 6|7 -> 8|9
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

/* Simple line icons for "What to Listen For" */
function PitchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15c2.5 0 2.5-8 5-8s2.5 10 5 10 2.5-6 5-6c1 0 1.6.4 3 1.5" />
    </svg>
  );
}

function PausesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9v6M14 9v6" />
    </svg>
  );
}

function EmphasisIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18 12 5l6 13" />
      <path d="M8.3 13.5h7.4" />
      <path d="M5 21h14" />
    </svg>
  );
}

const listenItems = [
  { key: "pitch", title: "PITCH", text: "How the voice rises and falls.", Icon: PitchIcon },
  { key: "pauses", title: "PAUSES", text: "How silence gives words greater impact.", Icon: PausesIcon },
  { key: "emphasis", title: "EMPHASIS", text: "How stressing words changes meaning.", Icon: EmphasisIcon },
];

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
  const [current, setCurrent] = useState(0); // 0..8
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
          <h3 className={styles.audioHeading}>Hear How a Voice Can Transform</h3>
          <p className={styles.audioSubtitle}>
            {SAME_WORDS ? "Same words. " : ""}Different delivery. Discover how
            pitch, pauses, and emphasis can change the impact of your voice.
          </p>

          <div className={styles.audioGrid}>
            <div className={styles.audioItem}>
              <p className={styles.audioLabel}>Original Delivery</p>
              <p className={styles.audioDesc}>
                Listen to the original vocal delivery.
              </p>
              <audio
                key={BEFORE_AUDIO_SRC}
                controls
                preload="metadata"
                src={BEFORE_AUDIO_SRC || undefined}
                className={styles.audioPlayer}
                aria-label="Original Delivery audio"
              >
                Your browser does not support audio playback.
              </audio>
            </div>

            <div className={`${styles.audioItem} ${styles.audioItemAfter}`}>
              <p className={styles.audioLabel}>Trained Delivery</p>
              <p className={styles.audioDesc}>
                Notice how vocal techniques change the delivery.
              </p>
              <audio
                key={AFTER_AUDIO_SRC}
                controls
                preload="metadata"
                src={AFTER_AUDIO_SRC || undefined}
                className={styles.audioPlayer}
                aria-label="Trained Delivery audio"
              >
                Your browser does not support audio playback.
              </audio>
            </div>
          </div>

          {/* What to Listen For */}
          <p className={styles.listenHeading}>What to Listen For</p>
          <ul className={styles.listenList}>
            {listenItems.map(({ key, title, text, Icon }) => (
              <li key={key} className={styles.listenItem}>
                <span className={styles.listenIcon}>
                  <Icon />
                </span>
                <span className={styles.listenText}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Mini Voice Exercise (text only) */}
          <div className={styles.tryBox}>
            <p className={styles.tryTitle}>Try It Yourself</p>
            <p className={styles.trySay}>“Say: I believe we can do this.”</p>
            <p className={styles.tryText}>
              “Now pause after ‘believe’ and emphasize ‘CAN.’ Notice how your
              message changes.”
            </p>
          </div>

          {/* Closing message */}
          <h3 className={styles.closingHeading}>
            You Heard the Difference. Now Learn How to Create It.
          </h3>
          <p className={styles.closingText}>
            Discover 70+ audio demonstrations, acoustic diagrams, and practical
            exercises to develop a more confident, expressive, and authoritative
            voice.
          </p>
        </div>

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