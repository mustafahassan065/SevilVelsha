import { useState, useEffect } from "react";
import styles from "./TestimonialsCrousels.module.css";

const testimonials = [
  {
    id: 1,
    quote: "Clear, grounded, and practical. It explains voice authority without exaggeration.",
    author: "Daniel Morgan",
    role: "Leadership Coach",
    image: "/images/Testimonial-Crousel-Image.webp",
    position: "center",
  },
  {
    id: 2,
    quote: "Finally, a serious explanation of how voice affects trust.",
    author: "Elena Petrova",
    role: "Speech Coach",
    image: "/images/Testimonial-Crousel-Image-2.jpg",
    position: "top",
  },
  {
    id: 3,
    quote: "Useful for anyone who teaches, leads, or speaks for a living.",
    author: "Mark Thompson",
    role: "Educator",
    image: "/images/Testimonial-Crousel-Image-3.jpg",
    position: "center",
  },
  {
    id: 4,
    quote: "This connects voice technique with real psychological impact.",
    author: "Sofia Reynolds",
    role: "Corporate Trainer",
    image: "/images/Testimonial-Crousel-Image-4.jpg",
    position: "center",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={testimonials[currentIndex].image}
          alt="Testimonials Background"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: testimonials[currentIndex].position,
            opacity: 0.85,
            transition: "opacity 1s",
          }}
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.testimonialContent} key={currentIndex}>
          <p className={styles.quote}>"{testimonials[currentIndex].quote}"</p>
          <div className={styles.author}>
            <p className={styles.authorName}>— {testimonials[currentIndex].author}</p>
            <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
          </div>
        </div>

        <div className={styles.pagination}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
