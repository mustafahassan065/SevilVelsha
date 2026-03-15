import BookCover from "../BookCover/BookCover";
import HeroContent from "../HeroContent/HeroContent";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <BookCover />
      <HeroContent />
    </section>
  );
}
