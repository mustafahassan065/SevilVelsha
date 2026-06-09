// components/VoiceAuditNav.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX, HiChevronDown } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router";

// Voice Audit Theme Colors
const GOLD = '#C9A84C';
const DARK_BG = '#0a0a0a';
const DARK_CARD = '#111111';
const TEXT_LIGHT = '#ffffff';
const TEXT_MUTED = 'rgba(255,255,255,0.55)';

const MENU_ITEMS = [
  { label: "About me", sectionId: "about", path: "/#about" },
  { label: "My Story", sectionId: "story", path: "/#story" },
  { label: "What I Do", sectionId: "services", path: "/#services" },
  { label: "Testimonial", sectionId: "testimonial", path: "/#testimonial" },
  { label: "Contact", path: "/contact" },
  { label: "Blogs", path: "/blogs" },
];

const VOICE_CONTROL_ITEMS = [
  { label: "Voice Control Video Course", path: "/voice-control-course" },
  { label: "Voice Control Book", path: "/voice-control-book" },
  { label: "Voice Control Coaching", path: "/voice-control-coaching" },
];

function VoiceAuditNav() {
  const [isFixed, setIsFixed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileVoiceOpen, setIsMobileVoiceOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Handle scroll to section when coming from other pages with hash
  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      
      if (section) {
        setTimeout(() => {
          const fixedNavOffset = window.innerWidth >= 1024 ? 88 : 72;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ 
            top: sectionTop - fixedNavOffset, 
            behavior: "smooth" 
          });
          setActiveSection(sectionId);
        }, 100);
      }
    }
  }, [isHomePage, location.hash]);

  // Handle scroll spy for active section (only on home page)
  useEffect(() => {
    if (!isHomePage) return;
    
    const handleActiveSection = () => {
      const scrollAnchor = 140;
      let currentSection = "";
      MENU_ITEMS.forEach((item) => {
        if (!item.sectionId) return;
        const section = document.getElementById(item.sectionId);
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const currentY = window.scrollY + scrollAnchor;
        if (currentY >= sectionTop && currentY < sectionBottom) {
          currentSection = item.sectionId;
        }
      });
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleActiveSection);
    handleActiveSection();
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, [isHomePage]);

  // Other scroll and resize effects
  useEffect(() => {
    const handleScroll = () => {
      const fixedThreshold = window.innerWidth >= 768 ? 57 : 0;
      setIsFixed(window.scrollY >= fixedThreshold);
      setHasScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (item) => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    if (item.path && !item.sectionId) {
      navigate(item.path);
      return;
    }

    if (item.sectionId) {
      if (isHomePage) {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const fixedNavOffset = window.innerWidth >= 1024 ? 88 : 72;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ 
            top: sectionTop - fixedNavOffset, 
            behavior: "smooth" 
          });
          setActiveSection(item.sectionId);
        }
      } else {
        navigate(`/#${item.sectionId}`);
      }
    }
  };

  const liStyle = "cursor-pointer font-semibold transition-all duration-150";
  const activeStyle = `text-[${GOLD}]`;
  const inactiveStyle = `text-[${TEXT_MUTED}] hover:text-[${GOLD}]`;

  const isItemActive = (item) => {
    if (item.path === "/blogs") return location.pathname.startsWith("/blogs");
    if (item.path === "/book-session") return location.pathname === "/book-session";
    if (item.path) return location.pathname === item.path;
    return isHomePage && activeSection === item.sectionId;
  };

  const isVoiceActive = VOICE_CONTROL_ITEMS.some(
    (item) => location.pathname === item.path
  );

  return (
    <header style={{ backgroundColor: DARK_BG }}>
      {/* Top bar */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between border-b px-5 py-4 text-sm md:flex" style={{ borderColor: `${GOLD}20` }}>
        <a href="mailto:sevilvelsha.com" className="flex items-center gap-1" style={{ color: TEXT_MUTED }}>
          <MdEmail style={{ color: GOLD }} />
          sevilvelsha.com
        </a>
        <div style={{ color: TEXT_MUTED }}>Voice & Communication Expert | Speaker | Author | Coach</div>
      </div>

      {isFixed && <div className="h-[72px] lg:h-[88px]" />}

      <nav
        style={{
          backgroundColor: DARK_BG,
          borderBottom: `1px solid ${GOLD}15`,
        }}
        className={
          isFixed
            ? `fixed left-0 right-0 top-0 z-50 ${hasScrolled ? "shadow-md" : ""}`
            : ""
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 lg:py-5">
          <div className="cursor-pointer select-none text-2xl font-bold sm:text-3xl" style={{ color: TEXT_LIGHT }}>
            <NavLink to="/" style={{ color: TEXT_LIGHT }}>Sevil Velsha</NavLink>
          </div>

          <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`${liStyle} ${isItemActive(item) ? activeStyle : inactiveStyle}`}
                  onClick={() => handleMenuClick(item)}
                  style={{ color: isItemActive(item) ? GOLD : TEXT_MUTED }}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                className={`${liStyle} flex items-center gap-1`}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                style={{ color: isVoiceActive ? GOLD : TEXT_MUTED }}
              >
                Voice Control
                <HiChevronDown
                  className={`mt-0.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  style={{ color: isVoiceActive ? GOLD : TEXT_MUTED }}
                />
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-md border py-1 shadow-lg" style={{ backgroundColor: DARK_CARD, borderColor: `${GOLD}20` }}>
                  {VOICE_CONTROL_ITEMS.map((item, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className={`w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors`}
                        style={{
                          color: location.pathname === item.path ? GOLD : TEXT_MUTED,
                          backgroundColor: location.pathname === item.path ? `${GOLD}10` : 'transparent'
                        }}
                        onClick={() => {
                          navigate(item.path);
                          setIsDropdownOpen(false);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${GOLD}15`;
                          e.currentTarget.style.color = GOLD;
                        }}
                        onMouseLeave={(e) => {
                          if (location.pathname !== item.path) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = TEXT_MUTED;
                          }
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <a
            href="https://www.instagram.com/sevilvelsha?igsh=MXVoN29zNWIza2NzdQ%3D%3D"
            className="hidden items-center gap-1 font-semibold xl:flex"
            style={{ color: GOLD }}
          >
            <FaInstagram style={{ color: GOLD }} /> @sevil.Velsha
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 transition lg:hidden"
            style={{ color: TEXT_MUTED }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          aria-hidden={!isMenuOpen}
          className={`overflow-hidden px-4 transition-[clip-path,opacity,max-height,padding] duration-300 ease-out lg:hidden sm:px-5 ${
            isMenuOpen
              ? "max-h-[600px] pb-4 opacity-100"
              : "pointer-events-none max-h-0 pb-0 opacity-0"
          }`}
          style={{
            backgroundColor: DARK_BG,
            borderTop: `1px solid ${GOLD}15`,
            clipPath: isMenuOpen
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
        >
          <ul className="flex flex-col gap-2 pt-3">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`w-full rounded-md px-3 py-2 text-left ${liStyle}`}
                  style={{
                    color: isItemActive(item) ? GOLD : TEXT_MUTED,
                    backgroundColor: isItemActive(item) ? `${GOLD}10` : 'transparent'
                  }}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <li>
              <button
                type="button"
                className={`w-full rounded-md px-3 py-2 text-left ${liStyle} flex items-center justify-between`}
                style={{ color: isVoiceActive ? GOLD : TEXT_MUTED }}
                onClick={() => setIsMobileVoiceOpen((prev) => !prev)}
              >
                <span>Voice Control</span>
                <HiChevronDown
                  className={`transition-transform duration-200 ${isMobileVoiceOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileVoiceOpen && (
                <ul className="ml-3 mt-1 flex flex-col gap-1 border-l-2 pl-3" style={{ borderColor: `${GOLD}30` }}>
                  {VOICE_CONTROL_ITEMS.map((item, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className={`w-full rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors`}
                        style={{
                          color: location.pathname === item.path ? GOLD : TEXT_MUTED,
                          backgroundColor: location.pathname === item.path ? `${GOLD}10` : 'transparent'
                        }}
                        onClick={() => {
                          navigate(item.path);
                          setIsMenuOpen(false);
                          setIsMobileVoiceOpen(false);
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <a
            href="https://www.instagram.com/sevilvelsha"
            className="mt-3 inline-flex items-center gap-1 px-3 font-semibold"
            style={{ color: GOLD }}
          >
            <FaInstagram /> @sevil.Velsha
          </a>

          <a
            href="mailto:sevilvelsha.com"
            className="mt-3 inline-flex items-center gap-1 px-3 font-semibold md:hidden"
            style={{ color: TEXT_MUTED }}
          >
            <MdEmail style={{ color: GOLD }} />
            sevilvelsha.com
          </a>
        </div>
      </nav>
    </header>
  );
}

export default VoiceAuditNav;