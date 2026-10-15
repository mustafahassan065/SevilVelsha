import styles from "./SameWords.module.css";

export default function SameWords() {
  return (
    <section className={`${styles.section} ${styles.bgTeal}`}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Same words. Different impact.</p>
        <h2 className={`${styles.title} ${styles.titleLight}`}>Hear the Power of Voice Control</h2>
        <p className={styles.quote}>"I believe this is the right decision."</p>

        <div className={styles.versus}>
          <div className={`${styles.vCard} ${styles.before}`}>
            <p className={styles.vLabel}>▶ Before</p>
            <p className={styles.vText}>Rushed, hesitant, uncertain.</p>
          </div>
          <div className={`${styles.vCard} ${styles.after}`}>
            <p className={styles.vLabel}>▶ After</p>
            <p className={styles.vText}>Calm, controlled, authoritative.</p>
          </div>
        </div>

        {/* Audio is delivered through the book's QR code. Save the QR image as /public/images/audio-qr.png */}
        <div className={styles.qrBox}>
          <img src="/images/audio-qr.png" alt="QR code to the audio examples" className={styles.qrImg} loading="lazy" />
          <p className={styles.qrNote}>Scan to listen</p>
          <p className={styles.qrSub}>Open your phone camera and scan to hear the Before and After audio.</p>
        </div>

        <p className={styles.tagline}>
          Same words. Different delivery.<br />
          Your voice is an instrument. Learn to control it.
        </p>
      </div>
    </section>
  );
}