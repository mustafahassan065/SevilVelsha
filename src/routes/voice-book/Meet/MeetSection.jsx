import styles from "./Meet.module.css"

export const Meet = () => {
  const driveVideoLink = "https://drive.google.com/file/d/1kEG8qrTpTThTGxQnxBFJ0Z12BY8gha-C/view";

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.videoWrapper}>
          <a
            href={driveVideoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoLink}
          >
            <img
              src="/images/VideoImage.png"
              alt="Author Introduction"
              className={styles.videoImage}
            />
            <div className={styles.playButton}>
              <div className={styles.playIcon}></div>
            </div>
          </a>
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