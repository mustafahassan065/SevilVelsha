import { useState, useEffect, useRef } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";
const COVER_IMG = "/images/pages/book-cover.png";

const BEFORE_AUDIO_SRC = "/audios/audioafter.mp3";
const AFTER_AUDIO_SRC = "/audios/audiobefore.mp3";
const SAME_WORDS = true;

const bookPages = [
  { id: 1, img: "/images/pages/page1.jpeg", alt: "Voice Control Book - Page 1" },
  { id: 2, img: "/images/pages/page22.jpeg", alt: "Voice Control Book - Page 2" },
  { id: 3, img: "/images/pages/pageimage2.jpeg", alt: "Voice Control Book - Page 3" },
  { id: 4, img: "/images/pages/page33.jpeg", alt: "Voice Control Book - Page 4" },
  { id: 5, img: "/images/pages/pageimage4.jpeg", alt: "Voice Control Book - Page 5" },
  { id: 6, img: "/images/pages/pageimage5.jpeg", alt: "Voice Control Book - Page 6" },
  { id: 7, img: "/images/pages/pagelast.jpeg", alt: "Voice Control Book - Page 7" },
];

const N = bookPages.length;

const desktopLeaves = Array.from({ length: Math.ceil((N - 1) / 2) }, (_, k) => ({
  front: bookPages[2 * k + 1],
  back: bookPages[2 * k + 2],
}));

const mobileLeaves = [
  ...bookPages.map((p) => ({ front: p, back: p })),
  { front: { sales: true }, back: null },
];

const PITCH_PATHS = {
  uncertain: "M15 70 C 60 75, 90 60, 130 65 C 170 70, 200 55, 265 45",
  confident: "M15 75 C 60 70, 100 45, 140 35 C 180 25, 220 20, 265 15",
};

const cardMotion = (i) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } },
  whileHover: { y: -6, transition: { duration: 0.2 } },
  viewport: { once: true, amount: 0.2 },
});

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

function PitchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15c2.5 0 2.5-8 5-8s2.5 10 5 10 2.5-6 5-6c1 0 1.6.4 3 1.5" />
    </svg>
  );
}

function PausesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9v6M14 9v6" />
    </svg>
  );
}

function EmphasisIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18 12 5l6 13" />
      <path d="M8.3 13.5h7.4" />
      <path d="M5 21h14" />
    </svg>
  );
}

function SpeakIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  );
}

function InfluenceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="6.5" r="2.6" />
      <circle cx="5" cy="9.5" r="2.1" />
      <circle cx="19" cy="9.5" r="2.1" />
      <path d="M7.5 19.5c0-3 2-5 4.5-5s4.5 2 4.5 5" />
      <path d="M1.8 18c0-2.2 1.3-3.7 3.2-3.7" />
      <path d="M22.2 18c0-2.2-1.3-3.7-3.2-3.7" />
    </svg>
  );
}

function HeardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="3" width="6" height="10" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4M8.5 21h7" />
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="13" r="8" />
      <circle cx="11" cy="13" r="4.5" />
      <circle cx="11" cy="13" r="1.4" />
      <path d="M11 13 20 4" />
      <path d="M16.5 4H20v3.5" />
    </svg>
  );
}

const SALES_BENEFITS = [
  { Icon: SpeakIcon, label: "Speak Confidently" },
  { Icon: InfluenceIcon, label: "Influence Others" },
  { Icon: HeardIcon, label: "Be Heard" },
  { Icon: ImpactIcon, label: "Make an Impact" },
];

const salesContainer = {
  hide: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
};

const salesItem = {
  hide: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

function SalesPanel({ active }) {
  return (
    <motion.div
      className={styles.sales}
      aria-hidden={!active}
      variants={salesContainer}
      initial="hide"
      animate={active ? "show" : "hide"}
    >
      {/* soft golden waves at the bottom */}
      <svg className={styles.salesWaves} viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
        <path className={styles.waveLine1} d="M0 80 C 100 40, 200 120, 300 80 S 500 40, 600 70" />
        <path className={styles.waveLine2} d="M0 95 C 120 60, 220 125, 320 92 S 510 62, 600 88" />
        <path className={styles.waveLine3} d="M0 108 C 130 80, 240 128, 340 104 S 520 84, 600 104" />
      </svg>

      <div className={styles.salesInner}>
        <div className={styles.salesTop}>
          {/* 3D book */}
          <motion.div variants={salesItem} className={styles.book3dWrap}>
            <motion.div
              className={styles.book3d}
              animate={{ rotateY: [24, 30, 24], rotateX: [3, 5, 3], y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={COVER_IMG} alt="Voice Control book cover" className={styles.book3dFront} />
              <span className={styles.book3dSpine} aria-hidden="true">
                <em>VOICE CONTROL</em>
              </span>
              <span className={styles.book3dGloss} aria-hidden="true" />
            </motion.div>
            <span className={styles.book3dShadow} aria-hidden="true" />
          </motion.div>

          <div className={styles.salesHead}>
            <motion.p variants={salesItem} className={styles.salesKicker}>
              You’ve Heard the Difference.
            </motion.p>

            <motion.span
              className={styles.salesBrush}
              variants={{ hide: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
            />

            <motion.h3 variants={salesItem} className={styles.salesTitle}>
              Now Imagine What Your Voice Could Do.
            </motion.h3>
          </div>
        </div>

        <motion.p variants={salesItem} className={styles.salesText}>
          Learn to make <strong>every word count</strong> — in meetings, interviews, presentations, and everyday conversations.
        </motion.p>

        <motion.ul variants={salesItem} className={styles.salesBenefits}>
          {SALES_BENEFITS.map(({ Icon, label }) => (
            <li key={label} className={styles.salesBenefit}>
              <span className={styles.salesBenefitIcon}><Icon /></span>
              <span className={styles.salesBenefitLabel}>{label}</span>
            </li>
          ))}
        </motion.ul>

        <motion.a
          variants={salesItem}
          href={BUY_URL}
          className={styles.salesBtn}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={active ? 0 : -1}
        >
          Get Voice Control — $29 <span className={styles.salesBtnArrow}>→</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

/* Pitch graph: big dot that travels UP along the curve */
function PitchGraph({ state }) {
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return undefined;

    const place = (t) => {
      const total = path.getTotalLength();
      const p = path.getPointAtLength(total * t);
      const fade = Math.max(0, Math.min(1, t * 6, (1 - t) * 6));
      [dotRef, ringRef, glowRef].forEach((r) => {
        if (r.current) {
          r.current.setAttribute("cx", p.x);
          r.current.setAttribute("cy", p.y);
          r.current.setAttribute("opacity", fade);
        }
      });
    };

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      place(1);
      return undefined;
    }

    place(0);
    const controls = animate(0, 1, {
      duration: state === "confident" ? 2.4 : 3.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
      onUpdate: place,
    });
    return () => controls.stop();
  }, [state]);

  return (
    <svg className={styles.pitchSvg} viewBox="0 0 280 90" fill="none" overflow="visible">
      <defs>
        <linearGradient id="pitchGradient" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#133d41" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#e6b54e" />
          <stop offset="100%" stopColor="#133d41" />
        </linearGradient>
      </defs>
      <motion.path
        ref={pathRef}
        stroke="url(#pitchGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0, d: PITCH_PATHS[state] }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        animate={{ d: PITCH_PATHS[state] }}
        transition={{
          d: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          pathLength: { duration: 1.4, ease: "easeOut" },
          opacity: { duration: 0.5 },
        }}
      />
      <circle ref={glowRef} r="15" fill="rgba(230, 181, 78, 0.28)" />
      <circle ref={ringRef} className={styles.ringNode} r="10" fill="#e6b54e" />
      <circle ref={dotRef} r="9" fill="#e6b54e" stroke="#ffffff" strokeWidth="2.5" />
    </svg>
  );
}

function Leaf({ frontPage, backPage, index, total, turned, isMobile, salesActive }) {
  const rot = useMotionValue(0);
  const turnedAngle = isMobile ? -120 : -180;

  useEffect(() => {
    const controls = animate(rot, turned ? turnedAngle : 0, {
      duration: 1.1,
      ease: [0.645, 0.045, 0.355, 1],
    });
    return () => controls.stop();
  }, [turned, turnedAngle, rot]);

  const zIndex = useTransform(rot, (v) => (v < -90 ? index + 1 : total + 5 - index));
  const frontShade = useTransform(rot, [-180, -90, 0], [0, 0.45, 0]);
  const backShade = useTransform(rot, [-180, -90, 0], [0.25, 0.5, 0]);

  return (
    <motion.div
      className={styles.leaf}
      style={{ rotateY: rot, zIndex }}
      animate={{ opacity: isMobile && turned ? 0 : 1 }}
      transition={{ duration: 0.4, delay: isMobile && turned ? 0.7 : 0 }}
    >
      <div className={`${styles.face} ${styles.front}`}>
        {frontPage && frontPage.sales ? (
          <SalesPanel active={salesActive} />
        ) : frontPage ? (
          <img src={frontPage.img} alt={frontPage.alt} className={styles.bookPageImg} />
        ) : null}
        <motion.div className={styles.shade} style={{ opacity: frontShade }} />
      </div>
      <div className={`${styles.face} ${styles.back}`}>
        {backPage && <img src={backPage.img} alt={backPage.alt} className={styles.bookPageImg} />}
        <motion.div className={styles.shade} style={{ opacity: backShade }} />
      </div>
    </motion.div>
  );
}

export default function LookInside() {
  const [current, setCurrent] = useState(0);
  const [pitchState, setPitchState] = useState("confident"); // 'uncertain' | 'confident'
  const [pauseState, setPauseState] = useState("with"); // 'no' | 'with'
  const [emphasisState, setEmphasisState] = useState("emphasized"); // 'normal' | 'emphasized'

  const isMobile = useIsMobile();
  const leaves = isMobile ? mobileLeaves : desktopLeaves;
  const states = isMobile ? mobileLeaves.length : leaves.length + 1;
  const cur = Math.min(current, states - 1);
  const atEnd = cur === states - 1;

  const goNext = () => setCurrent(Math.min(cur + 1, states - 1));
  const goPrev = () => setCurrent(Math.max(cur - 1, 0));

  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Book Preview</h2>

        {/* 3D Book Preview */}
        <div className={styles.showcaseWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.openBookContainer}
          >
            <div className={styles.bookRow}>
              <button type="button" className={styles.arrowBtn} onClick={goPrev} disabled={cur === 0} aria-label="Previous page">‹</button>
              <div className={styles.bookStage}>
                <div className={styles.book}>
                  <div className={styles.leftBase}>
                    <img src={bookPages[0].img} alt={bookPages[0].alt} className={styles.bookPageImg} />
                  </div>
                  <div className={styles.rightBase}>
                    <SalesPanel active={!isMobile && atEnd} />
                  </div>
                  <div className={styles.bookSpine} />
                  {leaves.map((leaf, i) => (
                    <Leaf
                      key={i}
                      index={i}
                      total={leaves.length}
                      frontPage={leaf.front}
                      backPage={leaf.back}
                      turned={i < cur}
                      isMobile={isMobile}
                      salesActive={isMobile && atEnd}
                    />
                  ))}
                </div>
              </div>
              <button type="button" className={styles.arrowBtn} onClick={goNext} disabled={atEnd} aria-label="Next page">›</button>
            </div>
          </motion.div>
          <div className={styles.interactionHint}>Use the arrows to turn pages ({cur + 1} of {states})</div>
        </div>

        {/* Audio Demonstration Section */}
        <div className={styles.audioBlock}>
          <h3 className={styles.audioHeading}>Hear How a Voice Can Transform</h3>
          <p className={styles.audioSubtitle}>
            {SAME_WORDS ? "Same words. " : ""}Different delivery. Discover how pitch, pauses, and emphasis can change the impact of your voice.
          </p>

          <div className={styles.audioGrid}>
            <div className={styles.audioItem}>
              <p className={styles.audioLabel}>Original Delivery</p>
              <p className={styles.audioDesc}>Listen to the original vocal delivery.</p>
              <audio key={BEFORE_AUDIO_SRC} controls preload="metadata" src={BEFORE_AUDIO_SRC || undefined} className={styles.audioPlayer} aria-label="Original Delivery audio">
                Your browser does not support audio playback.
              </audio>
            </div>

            <div className={`${styles.audioItem} ${styles.audioItemAfter}`}>
              <p className={styles.audioLabel}>Trained Delivery</p>
              <p className={styles.audioDesc}>Notice how vocal techniques change the delivery.</p>
              <audio key={AFTER_AUDIO_SRC} controls preload="metadata" src={AFTER_AUDIO_SRC || undefined} className={styles.audioPlayer} aria-label="Trained Delivery audio">
                Your browser does not support audio playback.
              </audio>
            </div>
          </div>
        </div>

        {/* REDESIGNED "WHAT TO LISTEN FOR" SECTION */}
        <div className={styles.listenSection}>
          <div className={styles.listenHeaderWrapper}>
            <span className={styles.listenEyebrow}>WHAT TO LISTEN FOR</span>
            <h2 className={styles.listenMainTitle}>
              Hear How 3 Simple Tools <span className={styles.listenTitleItalic}>Transform Your Voice</span>
            </h2>
            <div className={styles.listenTagsRow}>
              <span>PITCH</span>
              <span className={styles.dot}>•</span>
              <span>PAUSES</span>
              <span className={styles.dot}>•</span>
              <span>EMPHASIS</span>
            </div>
          </div>

          <div className={styles.wowCardsGrid}>
            {/* 1. PITCH CARD */}
            <motion.div className={styles.wowCard} {...cardMotion(0)}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBox}><PitchIcon /></span>
                <h3 className={styles.cardTitle}>Pitch</h3>
              </div>
              <p className={styles.cardDesc}>Change the pitch and feel the mood shift.</p>

              <div className={styles.cardVisualArea}>
                <div className={styles.pitchCanvas}>
                  <div className={`${styles.moodBadge} ${pitchState === 'uncertain' ? styles.badgeActiveUncertain : ''}`}>Uncertain</div>
                  <div className={`${styles.moodBadge} ${pitchState === 'confident' ? styles.badgeActiveConfident : ''}`}>Confident</div>
                  <PitchGraph state={pitchState} />
                </div>
              </div>

              <div className={styles.cardToggleBtns}>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${pitchState === 'uncertain' ? styles.toggleActive : ''}`}
                  onClick={() => setPitchState('uncertain')}
                >
                  <span className={styles.playMiniIcon}>▶</span> Uncertain
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${pitchState === 'confident' ? styles.toggleActive : ''}`}
                  onClick={() => setPitchState('confident')}
                >
                  <span className={styles.playMiniIcon}>▶</span> Confident
                </button>
              </div>
            </motion.div>

            {/* 2. PAUSES CARD */}
            <motion.div className={styles.wowCard} {...cardMotion(1)}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBox}><PausesIcon /></span>
                <h3 className={styles.cardTitle}>Pauses</h3>
              </div>
              <p className={styles.cardDesc}>See how a short pause adds power.</p>

              <div className={styles.cardVisualArea}>
                <div className={styles.sentenceDisplay}>
                  <i>I believe</i>
                  <span className={`${styles.pauseDotsContainer} ${pauseState === 'with' ? styles.pauseActive : ''}`}>
                    <span className={styles.pDot}></span><span className={styles.pDot}></span><span className={styles.pDot}></span>
                  </span>
                  <i>we can do this.</i>
                </div>
                <div className={`${styles.miniWaveformRow} ${pauseState === 'with' ? styles.pauseCycle : ''}`}>
                  <div className={`${styles.waveGroup} ${styles.waveLeft}`}>
                    {[12, 18, 24, 16, 22, 14, 20].map((h, i) => (
                      <span key={i} style={{ height: `${h}px`, '--i': i }} className={styles.wBar}></span>
                    ))}
                  </div>
                  <div className={`${styles.pauseIndicatorBlock} ${pauseState === 'with' ? styles.pauseBlockActive : ''}`}>⏸</div>
                  <div className={`${styles.waveGroup} ${styles.waveRight}`}>
                    {[14, 22, 18, 26, 20, 16, 22, 15].map((h, i) => (
                      <span key={i} style={{ height: `${h}px`, '--i': i + 3 }} className={styles.wBar}></span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.cardToggleBtns}>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${pauseState === 'no' ? styles.toggleActive : ''}`}
                  onClick={() => setPauseState('no')}
                >
                  <span className={styles.playMiniIcon}>▶</span> No pause
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${pauseState === 'with' ? styles.toggleActive : ''}`}
                  onClick={() => setPauseState('with')}
                >
                  <span className={styles.playMiniIcon}>▶</span> With pause
                </button>
              </div>
            </motion.div>

            {/* 3. EMPHASIS CARD */}
            <motion.div className={styles.wowCard} {...cardMotion(2)}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBox}><EmphasisIcon /></span>
                <h3 className={styles.cardTitle}>Emphasis</h3>
              </div>
              <p className={styles.cardDesc}>Change the focus and see how meaning shifts.</p>

              <div className={styles.cardVisualArea}>
                <div className={styles.sentenceDisplay}>
                  <span>I believe we </span>
                  <span className={`${styles.emphasizedWord} ${emphasisState === 'emphasized' ? styles.wordActive : ''}`}>CAN</span>
                  <span> do this.</span>
                </div>
                <div className={styles.miniWaveformCenter}>
                  {[10, 14, 18, 24, 32, 44, 58, 44, 32, 24, 18, 14, 10].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${emphasisState === 'emphasized' && i >= 4 && i <= 8 ? h * 1.3 : h}px`, '--i': i }}
                      className={`${styles.wBar} ${emphasisState === 'emphasized' && i >= 5 && i <= 7 ? styles.wBarGold : ''}`}
                    ></span>
                  ))}
                </div>
              </div>

              <div className={styles.cardToggleBtns}>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${emphasisState === 'normal' ? styles.toggleActive : ''}`}
                  onClick={() => setEmphasisState('normal')}
                >
                  <span className={styles.playMiniIcon}>▶</span> Normal
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${emphasisState === 'emphasized' ? styles.toggleActive : ''}`}
                  onClick={() => setEmphasisState('emphasized')}
                >
                  <span className={styles.playMiniIcon}>▶</span> Emphasized
                </button>
              </div>
            </motion.div>
          </div>

          {/* Cinematic Discovery Subtitle replacing Try It Yourself */}
          <div className={styles.cinematicBanner}>
            <motion.div
              className={styles.bannerBrushBg}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            />
            <motion.h3
              className={styles.bannerText}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              The Same Words. A Completely Different Impact.
            </motion.h3>
          </div>
        </div>

        {/* Closing & CTA */}
        <h3 className={styles.closingHeading}>You Heard the Difference. Now Learn How to Create It.</h3>
        <p className={styles.closingText}>
          Discover 70+ audio demonstrations, acoustic diagrams, and practical exercises to develop a more confident, expressive, and authoritative voice.
        </p>

        <div className={styles.ctaWrapper}>
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Get the Complete Book — $29 →
          </a>
        </div>
      </div>
    </section>
  );
}