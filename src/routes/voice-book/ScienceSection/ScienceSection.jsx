import { useState } from "react";
import styles from "./ScienceSection.module.css";

const EMBED_URL = "https://drive.google.com/file/d/1EB8zdVKi9PB758TbJGwlBl_Hue26fbcI/preview";

export default function ScienceSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={`${styles.section} ${styles.bgCream}`}>
      <div className={styles.container}>
        <div className={styles.sciGrid}>
          <div className={styles.videoBox} onClick={() => !playing && setPlaying(true)}>
            {!playing ? (
              <>
                <img src="/thumbnails/thumbnailupdate.png" alt="Meet Sevil Velsha" loading="lazy" />
                <div className={styles.playWrap}>
                  <div className={styles.play}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#2a1f08"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </>
            ) : (
              <iframe src={EMBED_URL} title="Meet Sevil Velsha" allow="autoplay" allowFullScreen />
            )}
          </div>

          <div>
            <p className={styles.eyebrow}>The Science Behind the Voice</p>
            <h2 className={styles.title} style={{ fontSize: "clamp(26px,4vw,40px)" }}>Created by Sevil Velsha</h2>
            <p className={styles.role}>Voice Researcher · Linguist · Communication Coach</p>
            <p className={styles.body}>
              Built on years of linguistic research, English theatrical speech
              analysis, and teaching experience.
            </p>
            <p className={styles.strong}>
              Not just advice to "sound confident."<br />
              A practical method to understand, hear, and train your voice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}