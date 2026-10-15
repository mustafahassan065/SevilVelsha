import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./LookInside.module.css";
import { ChartIcon, HeadphonesIcon, DocIcon, BookIcon, UserIcon } from "../shared/Icons";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

// Card artwork lives in /public/images/look-inside/ (cropped from the client's design)
const cards = [
  { src: "/images/look-inside/card-1.webp", alt: "Voice analysis diagram", Icon: ChartIcon, title: "Voice Analysis Diagrams", text: "See what confident speech looks like in real acoustic analysis." },
  { src: "/images/look-inside/card-2.webp", alt: "Audio demonstrations with QR codes", Icon: HeadphonesIcon, title: "QR Audio Demonstrations", text: "Hear the difference. Then practise it yourself." },
  { src: "/images/look-inside/card-3.webp", alt: "Practical voice exercise", Icon: DocIcon, title: "Step-by-Step Exercises", text: "Turn voice science into practical speaking skills." },
  { src: "/images/look-inside/card-4.webp", alt: "Real-world speech example", Icon: UserIcon, title: "Real-World Speech Examples", text: "Learn from great speakers like Barack Obama, Steve Jobs and more." },
];

export default function LookInside() {
  const [open, setOpen] = useState(null);
  const touchX = useRef(null);
  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % cards.length)), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + cards.length) % cards.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Don't Just Read About Confidence.<br />See How Your Voice Works.
        </h2>
        <p className={styles.subtitle}>
          Explore real voice diagrams, listen to speech demonstrations, and practise
          techniques designed to help you speak with greater authority in work,
          interviews and everyday life.
        </p>

        <div className={styles.gallery}>
          {cards.map((c, i) => (
            <button key={c.src} type="button" className={styles.slide} onClick={() => setOpen(i)} aria-label={`Enlarge: ${c.title}`}>
              <img src={c.src} alt={c.alt} loading="lazy" decoding="async" className={styles.pageImg} />
              <div className={styles.cap}>
                <span className={styles.capIcon}><c.Icon /></span>
                <span>
                  <span className={styles.capTitle}>{c.title}</span>
                  <span className={styles.capText}>{c.text}</span>
                </span>
              </div>
            </button>
          ))}
        </div>
        <p className={styles.hint}>Swipe to browse · Tap to enlarge</p>

        <div className={styles.banner}>
          <img src="/images/heroBookImage.png" alt="Voice Control book" className={styles.cover} loading="lazy" />
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 className={styles.bannerTitle}>This Isn't Just a Book.<br />It's a Voice Training System.</h3>
            <p className={styles.bannerText}>
              Speech analysis · Audio demonstrations · Practical exercises ·
              Real-world examples · Techniques you can use immediately
            </p>
          </div>
          <div className={styles.bannerCta}>
          <a href={BUY_URL} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
            Get Your Copy — $29 →
          </a>
          <div className={styles.miniRow}>
            <span><BookIcon /> Instant access</span>
            <span><HeadphonesIcon /> Audio examples</span>
            <span><DocIcon /> Practical exercises</span>
          </div>
          </div>
        </div>
      </div>

      {open !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={close} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <button className={styles.close} onClick={close} aria-label="Close">×</button>
          <button className={`${styles.nav} ${styles.navPrev}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
          <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
            <img src={cards[open].src} alt={cards[open].alt} className={styles.bigImg} />
            <figcaption className={styles.bigCaption}>{cards[open].title} ({open + 1}/{cards.length})</figcaption>
          </figure>
          <button className={`${styles.nav} ${styles.navNext}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
        </div>
      )}
    </section>
  );
}