import { useState } from 'react';
import styles from "./Meet.module.css";

export const Meet = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = "https://drive.google.com/file/d/1EB8zdVKi9PB758TbJGwlBl_Hue26fbcI/preview";

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.videoWrapper}>
          {!isPlaying ? (
            // ── THUMBNAIL + PLAY BUTTON ──
            <div 
              onClick={() => setIsPlaying(true)}
              style={{ 
                position: 'relative', 
                width: '100%', 
                aspectRatio: '16/9', 
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/thumbnails/meet-sevil.png"
                alt="Meet Sevil Velsha"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Play Button Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.3)',
                transition: 'background 0.3s',
              }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#2d4a47">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            // ── VIDEO IFRAME ──
            <iframe
              src={embedUrl}
              title="Meet Sevil Velsha"
              style={{ 
                border: 'none', 
                width: '100%', 
                aspectRatio: '16/9', 
                display: 'block',
                borderRadius: '8px',
              }}
              allow="autoplay"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Meet the Author Behind the Book
            </h2>
          </div>

          <div className={styles.rightCol}>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <img src="/images/Education.png" alt="icon" className={styles.icon} />
                Researcher in intonation & speech science
              </li>
              <li className={styles.featureItem}>
                <img src="/images/faceMask.png" alt="icon" className={styles.icon} />
                Actor-based vocal techniques
              </li>
              <li className={styles.featureItem}>
                <img src="/images/Mic.png" alt="icon" className={styles.icon} />
                Used by speakers, educators & leaders
              </li>
              <li className={styles.featureItem}>
                <img src="/images/Pen.png" alt="icon" className={styles.icon} />
                Author of Voice Control
              </li>
            </ul>

            <p className={styles.bioText}>
              Sevil Velsha is a voice coach, PhD, and educator dedicated to helping
              people unlock authority, calm, and presence through their voice.
              With a background in linguistics, intonation research, and stage
              performance, she bridges science and art to teach voice control
              that feels natural, grounded, and powerful.
            </p>
            <p className={styles.bioText} style={{ fontStyle: 'italic', color: '#212529', marginTop: "23px" }}>
              Her work proves one truth: your voice is not just sound — it is presence made audible.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};