

import React from 'react';
import styles from './Meeting.module.css';

const Meeting = () => {
  const driveLink = "https://drive.google.com/file/d/1kEG8qrTpTThTGxQnxBFJ0Z12BY8gha-C/view?usp=sharing";

  return (
    <section className={styles.meetingSection}>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.thumbnailWrapper}
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              <img
                src="/images/video.png"
                alt="Watch Meeting Video"
                className={styles.thumbnailImage}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
              />
            </a>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Meet the Voice Behind the Method</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <img src="/images/degree.png" alt="Education" className={styles.listIcon} />
              <span>Researcher in intonation & speech science</span>
            </li>
            <li className={styles.listItem}>
              <img src="/images/face.png" alt="Vocal" className={styles.listIcon} />
              <span>Actor-based vocal techniques</span>
            </li>
            <li className={styles.listItem}>
              <img src="/images/mic (2).png" alt="Microphone" className={styles.listIcon} />
              <span>Used by speakers, educators & leaders</span>
            </li>
            <li className={styles.listItem}>
              <img src="/images/pen (2).png" alt="Author" className={styles.listIcon} />
              <span>Author of Voice Control</span>
            </li>
          </ul>

          <div className={styles.bioText}>
            <p>
              Sevil Velsha is a voice coach, PhD, and educator dedicated to helping people unlock authority, calm, and presence through their voice. With a background in linguistics, intonation research, and stage performance, she bridges science and art to teach voice control that feels natural, grounded, and powerful.
            </p>
            <div className={styles.quoteWrapper}>
              <span className={styles.quote}>
                "Her work proves one truth: your voice is not just sound — it is presence made audible."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;