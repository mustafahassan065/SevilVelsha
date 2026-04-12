
import { useState } from "react";
import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote: '"This book is a game-changer. I always felt my ideas were overlooked in meetings — after applying the Voice Control method, my team actually listens now."',
    name: "Mark Chen",
    role: "Senior Project Manager",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote: '"The techniques in Voice Control are truly transformational. My presentation confidence went from a 3 to a 10. Highly recommended for any professional."',
    name: "Sarah Jenkins",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: '"I finally have the confidence to speak up in executive meetings. The breathing techniques alone were worth every penny. Game changer!"',
    name: "James Wilson",
    role: "VP of Operations",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    quote: '"Simple, actionable, and effective. Within two weeks I noticed a real difference in how colleagues respond to me. Best professional investment I\'ve made."',
    name: "Priya Sharma",
    role: "Software Lead",
    image: "https://i.pravatar.cc/150?img=47",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // Agar last slide par ho toh wapis first par le jaye
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    // Agar first slide par ho toh last par le jaye
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={styles.section}>
      <div className={styles.sliderWrapper}>

        {/* Left Arrow */}
        <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <div className={styles.viewPort}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div className={styles.slide} key={index}>
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>

      </div>

      {/* Dots Index indicator */}
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}