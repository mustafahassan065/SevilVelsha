import styles from "./AvailableSection.module.css";

const retailers = [
  { name: "Amazon", logo: "/images/amazon (2).png" },
  { name: "Audible", logo: "/images/audible (2).png" },
  { name: "Apple Books", logo: "/images/barnsandnoble.png" },
  { name: "Barnes & Noble", logo: "/images//barnsandnoble.png" },
  { name: "Walmart", logo: "/images/walmart.png" },
  { name: "Target", logo: "/images/target.png" },
];

const testimonials = [
  {
    name: "Michael B.",
    avatar: "/images/testimonial1.png",
    text: '"I finally feel heard in meetings. My confidence has skyrocketed."',
  },
  {
    name: "Emily R.",
    avatar: "/images/testimonial2.png",
    text: '"The feedback exercises were a game-changer. Highly recommend this."',
  },
  {
    name: "Daniel G.",
    avatar: "/images/testimonial3.png",
    text: '"My vocal strain is gone, and my delivery is so much more impactful."',
  },
  {
    name: "Christina M.",
    avatar: "/images/testimonial4.png",
    text: '"A truly transformative experience. My voice is now my strongest asset."',
  },
];

export default function AvailableSection() {
  return (
    <div className={styles.main}>
      <section className={styles.availableSection}>
        <div className={styles.container}>
          <h2 className={styles.mainHeading}>Available Everywhere</h2>
          <p className={styles.subheading}>Choose your preferred format and retailer</p>
          <div className={styles.retailersGrid}>
            {retailers.map((retailer, index) => (
              <div key={index} className={styles.retailerCard}>
                <img src={retailer.logo || "/placeholder.svg"} alt={retailer.name} className={styles.retailerLogo} />
                <span className={styles.retailerName}>{retailer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.mainHeading}>
            Transforming Lives <span className={styles.worldwide}>Worldwide</span>
          </h2>
          <p className={styles.subheading}>Real stories from readers who found freedom</p>
        </div>

        <div className={styles.scrollContainer}>
          <div
            className={styles.scrollTrack}
            style={{
              display: "flex",
              animation: "scrollLeft 30s linear infinite",
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                    <div className={styles.rating}>
                      <span className={styles.star}>
                        <img src="/images/stars.png" alt="stars" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
