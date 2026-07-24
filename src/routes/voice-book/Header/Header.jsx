import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "Who Is It For",   sectionId: "whoIsFor" },
  { label: "What It Does",    sectionId: "whatBookDoes" },
  { label: "Meet Sevil",      sectionId: "meet" },
  { label: "Chapters",        sectionId: "chapters" },
  { label: "Transformation",  sectionId: "transformation" },
  { label: "Get the Book",    href: "https://buy.stripe.com/test_cNi9AS5T16jD1jo8MUgIo00" },
];

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (item) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener noreferrer");
    } else {
      scrollToSection(item.sectionId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>SEVIL VELSHA</div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={styles.navItem}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className={styles.menuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </header>

      {/* Mobile Nav */}
      <nav className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileNavHeader}>
          <span className={styles.mobileNavLogo}>SEVIL VELSHA</span>
          <button
            className={styles.closeBtn}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className={styles.closeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={styles.mobileNavItems}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={styles.mobileNavItem}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}