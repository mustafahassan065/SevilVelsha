
import React from 'react';
import styles from './Meeting.module.css';
import { FaGraduationCap, FaTheaterMasks, FaMicrophone, FaPenNib } from 'react-icons/fa';
// Ya phir Lucide icons: import { GraduationCap, Smile, Mic, PenTool } from 'lucide-react';

const Meeting = () => {
  const driveLink = "https://drive.google.com/file/d/1kEG8qrTpTThTGxQnxBFJ0Z12BY8gha-C/view?usp=sharing ";

  // Gold color define karo
  const iconColor = "#B68A4C";
  const iconSize = 24;

  const listItems = [
    { icon: <FaGraduationCap size={iconSize} color={iconColor} />, text: "Researcher in intonation & speech science" },
    { icon: <FaTheaterMasks size={iconSize} color={iconColor} />, text: "Actor-based vocal techniques" },
    { icon: <FaMicrophone size={iconSize} color={iconColor} />, text: "Used by speakers, educators & leaders" },
    { icon: <FaPenNib size={iconSize} color={iconColor} />, text: "Author of Voice Control" },
  ];

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
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.iconWrapper}>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
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