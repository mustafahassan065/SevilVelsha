

import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "Podcast", hasDropdown: false },
  { label: "Topics", hasDropdown: true },
  { label: "Books", hasDropdown: true },
  { label: "About", hasDropdown: true },
  { label: "Tour", hasDropdown: false },
  { label: "Shop", hasDropdown: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>SEVIL VELSHA</div>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button key={item.label} className={styles.navItem}>
              {item.label}
              {item.hasDropdown && (
                <svg
                  className={styles.chevron}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>
          ))}
          <button className={styles.searchBtn}>
            <svg
              className={styles.searchIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </nav>
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className={styles.menuIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </header>

      <nav className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileNavHeader}>
          <span className={styles.mobileNavLogo}>SEVIL VELSHA</span>
          <button
            className={styles.closeBtn}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className={styles.closeIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={styles.mobileNavItems}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={styles.mobileNavItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  className={styles.chevron}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
