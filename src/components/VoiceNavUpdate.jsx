import React, { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX, HiChevronDown } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Updated to react-router-dom

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

// Coaching Page wali theme (White aur Blue)
const THEME = {
  bg: "#f8f7f4",
  text: "#1E1B18",
  accent: "#B68A4C", // Blue ki jagah Gold color
  hoverBg: "#F9F9F9",
  border: "#E5E7EB"
};

function VoiceNavUpdate() {
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
    if (item.path && !item.sectionId) {
      navigate(item.path);
      setIsMenuOpen(false);
      return;
    }
    if (item.sectionId && !isHomePage) {
      navigate(`/#${item.sectionId}`);
      setIsMenuOpen(false);
      return;
    }
    if (item.sectionId && isHomePage) {
      const section = document.getElementById(item.sectionId);
      if (!section) return;
      const fixedNavOffset = window.innerWidth >= 1024 ? 88 : 72;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - fixedNavOffset, behavior: "smooth" });
      setActiveSection(item.sectionId);
      setIsMenuOpen(false);
    }
  };

  const liStyle = `cursor-pointer font-semibold transition-all duration-150 hover:text-[#2563EB]`;

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
    <header style={{ backgroundColor: THEME.bg }}>
      <div 
        className="mx-auto hidden max-w-7xl items-center justify-between border-b px-5 py-4 text-sm md:flex"
        style={{ borderColor: THEME.border, color: THEME.text }}
      >
        <a 
          href="mailto:sevilvelsha.com" 
          className="flex items-center gap-1 transition-colors hover:text-[#2563EB]"
          style={{ color: THEME.text }}
        >
          <MdEmail className="mt-0.5" style={{ color: THEME.accent }} />
          sevilvelsha.com
        </a>
        <div>Voice & Communication Expert | Speaker | Author | Coach</div>
      </div>

      {isFixed && <div className="h-[72px] lg:h-[88px]" />}

      <nav
        className={isFixed ? `fixed left-0 right-0 top-0 z-50 shadow-md` : ""}
        style={{ 
          backgroundColor: isFixed ? THEME.bg : THEME.bg,
          boxShadow: hasScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
        }}
      >
        <div 
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 lg:py-5"
          style={{ color: THEME.text }}
        >
          <div 
            className="cursor-pointer select-none text-2xl font-bold sm:text-3xl"
            style={{ color: THEME.text }}
          >
            <NavLink to="/">Sevil Velsha</NavLink>
          </div>

          <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`${liStyle} ${isItemActive(item) ? "text-[#2563EB]" : ""}`}
                  style={{ color: isItemActive(item) ? THEME.accent : THEME.text }}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                className={`${liStyle} flex items-center gap-1`}
                style={{ color: isVoiceActive ? THEME.accent : THEME.text }}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                Voice Control
                <HiChevronDown className={`mt-0.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <ul 
                  className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-md border py-1 shadow-lg"
                  style={{ backgroundColor: THEME.bg, borderColor: THEME.border }}
                >
                  {VOICE_CONTROL_ITEMS.map((item, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className="w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors"
                        style={{
                          color: location.pathname === item.path ? THEME.accent : THEME.text,
                          backgroundColor: location.pathname === item.path ? THEME.hoverBg : "transparent"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = THEME.hoverBg;
                          e.target.style.color = THEME.accent;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = location.pathname === item.path ? THEME.hoverBg : "transparent";
                          e.target.style.color = location.pathname === item.path ? THEME.accent : THEME.text;
                        }}
                        onClick={() => {
                          navigate(item.path);
                          setIsDropdownOpen(false);
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
            className="hidden items-center gap-1 font-semibold xl:flex transition-colors hover:text-[#2563EB]"
            style={{ color: THEME.accent }}
          >
            <FaInstagram className="mt-1" /> @sevil.Velsha
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 transition lg:hidden"
            style={{ color: THEME.text }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </button>
        </div>

        <div
          aria-hidden={!isMenuOpen}
          className={`overflow-hidden px-4 transition-[clip-path,opacity,max-height,padding] duration-300 ease-out lg:hidden sm:px-5 ${
            isMenuOpen ? "max-h-[600px] border-t pb-4 opacity-100" : "pointer-events-none max-h-0 pb-0 opacity-0"
          }`}
          style={{
            clipPath: isMenuOpen ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)",
            backgroundColor: THEME.bg,
            borderColor: THEME.border
          }}
        >
          <ul className="flex flex-col gap-2 pt-3">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="w-full rounded-md px-3 py-2 text-left font-semibold transition-colors"
                  style={{
                    color: isItemActive(item) ? THEME.accent : THEME.text,
                    backgroundColor: isItemActive(item) ? THEME.hoverBg : "transparent"
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
                className="w-full rounded-md px-3 py-2 text-left font-semibold flex items-center justify-between transition-colors"
                style={{
                  color: isVoiceActive ? THEME.accent : THEME.text,
                  backgroundColor: isVoiceActive ? THEME.hoverBg : "transparent"
                }}
                onClick={() => setIsMobileVoiceOpen((prev) => !prev)}
              >
                <span>Voice Control</span>
                <HiChevronDown className={`transition-transform duration-200 ${isMobileVoiceOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileVoiceOpen && (
                <ul className="ml-3 mt-1 flex flex-col gap-1 border-l-2 pl-3" style={{ borderColor: THEME.accent }}>
                  {VOICE_CONTROL_ITEMS.map((item, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className="w-full rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors"
                        style={{
                          color: location.pathname === item.path ? THEME.accent : THEME.text,
                          backgroundColor: location.pathname === item.path ? THEME.hoverBg : "transparent"
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
            href="https://www.instagram.com/sevilvelsha?igsh=MXVoN29zNWIza2NzdQ%3D%3D"
            className="mt-3 inline-flex items-center gap-1 px-3 font-semibold transition-colors hover:text-[#2563EB]"
            style={{ color: THEME.accent }}
          >
            <FaInstagram className="mt-1" /> @sevil.Velsha
          </a>
          <a
            href="mailto:sevilvelsha.com"
            className="mt-3 inline-flex items-center gap-1 px-3 font-semibold md:hidden transition-colors hover:text-[#2563EB]"
            style={{ color: THEME.accent }}
          >
            <MdEmail className="mt-0.5" /> sevilvelsha.com
          </a>
        </div>
      </nav>
    </header>
  );
}

export default VoiceNavUpdate;