import { useState } from "react";
import styles from "./SameWords.module.css";

// Google Drive Preview Video Link
const EMBED_URL = "https://drive.google.com/file/d/1EB8zdVKi9PB758TbJGwlBl_Hue26fbcI/preview";

export default function SameWords() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={`${styles.section} ${styles.bg}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Don't Just Read It. Hear It. Practise It.</h2>

        {/* Video Player Section */}
        <div className={styles.videoBox} onClick={() => !playing && setPlaying(true)}>
          {!playing ? (
            <>
              {/* IMAGE PLACEHOLDER 1: Video Thumbnail Image */}
              {/* Image Path: /public/thumbnails/thumbnailupdate.png */}
              <img 
                src="/thumbnails/thumbnailupdate.png" 
                alt="Voice Control Demo Video" 
                loading="lazy" 
              />
              <div className={styles.playWrap}>
                <div className={styles.play}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#2a1f08">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <iframe src={EMBED_URL} title="Voice Control Demo Video" allow="autoplay" allowFullScreen />
          )}
        </div>

        {/* Audio Controls for Visitors to Compare Voices */}
        <div className={styles.audioControlsContainer}>
          <p className={styles.audioGuideText}>Listen, practise, and improve your own speaking:</p>
          <div className={styles.audioRow}>
            <div className={styles.audioBox}>
              <span className={styles.audioLabel}>Original Delivery</span>
              <audio controls className={styles.audioPlayer}>
                {/* AUDIO PLACEHOLDER 1: Add path to original audio sample */}
                <source src="/audio/original-voice.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className={styles.audioBox}>
              <span className={styles.audioLabel}>Improved Delivery</span>
              <audio controls className={styles.audioPlayer}>
                {/* AUDIO PLACEHOLDER 2: Add path to improved audio sample */}
                <source src="/audio/improved-voice.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}