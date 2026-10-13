import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./LookInside.module.css";

const BUY_URL = "https://buy.stripe.com/9B67sK95d23n7HM0gogIo04";

// Put the exported real PDF pages in /public/images/look-inside/
const pages = [
  {
    src: "/images/qrpage.jpeg",
    alt: "Praat speech diagram with QR code to an audio demonstration",
    
  },
  {
    src: "/images/page1.jpeg",
    alt: "Complete Audio Companion QR code page",
    
  },
  {
    src: "/images/page2.jpeg",
    alt: "Practical voice exercise, two-page spread",
    
  },
  {
    src: "/images/page3.jpeg",
    alt: "Professional speaking exercises, two-page spread",
    
  },
  {
    src: "/images/page4.jpeg",
    alt: "Classroom Calm Drill page",
    
  },
];

export default function LookInside() {
  const [open, setOpen] = useState(null); // index or null
  const touchX = useRef(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % pages.length)),
    []
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + pages.length) % pages.length)),
    []
  );

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
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Look Inside the Book</h2>
        <p className={styles.subtitle}>
          Explore real speech diagrams, listen to audio demonstrations, and
          practise techniques you can use in everyday communication.
        </p>
      </div>

      <div className={styles.gallery} role="list">
        {pages.map((p, i) => (
          <button
            key={p.src}
            type="button"
            role="listitem"
            className={styles.slide}
            onClick={() => setOpen(i)}
            aria-label={`Enlarge: ${p.caption}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              className={styles.pageImg}
            />
            
          </button>
        ))}
      </div>

      <p className={styles.hint}>Swipe to browse · Tap a page to enlarge</p>

      <div className={styles.ctaRow}>
        <a
          href={BUY_URL}
          className={styles.buyButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now — $29
        </a>
      </div>

      {open !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className={styles.close} onClick={close} aria-label="Close">
            ×
          </button>
          <button
            className={`${styles.nav} ${styles.navPrev}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous page"
          >
            ‹
          </button>
          <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
            <img src={pages[open].src} alt={pages[open].alt} className={styles.bigImg} />
            <figcaption className={styles.bigCaption}>
              {pages[open].caption} ({open + 1}/{pages.length})
            </figcaption>
          </figure>
          <button
            className={`${styles.nav} ${styles.navNext}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}