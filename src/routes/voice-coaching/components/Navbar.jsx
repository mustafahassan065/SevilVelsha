import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const sectionIds = ["approach", "about", "program", "apply-now"];

  // Update 1: '/' ko hata kar ab hum inko current module ke routes pe rakh rahe hain
  // Empty string ("") ka matlab hai ke wo current route (yani /voice-control-coaching) par hi rahega
  const navItems = [
    { name: "Approach", href: "", section: "approach" },
    { name: "Program", href: "", section: "program" },
    { name: "About", href: "", section: "about" },
    { name: "Contact", href: "contact", section: null }, // contact ke aage se '/' hata diya
  ];

  useEffect(() => {
    // Update 2: Ab home page check karne ke liye base path (empty string ya endsWith /) use karenge
    if (location.pathname !== "/voice-control-coaching" && !location.pathname.endsWith("/")) {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const navbarHeight = 70;
      let currentSection = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarHeight + 100) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const isActive = (item) => {
    if (item.href === "contact") {
      return location.pathname.includes("contact");
    }
    // Agar hum main coaching page par hain aur scroll wala section active hai
    if ((location.pathname === "/voice-control-coaching" || location.pathname.endsWith("/")) && item.section) {
      return activeSection === item.section;
    }
    return false;
  };

  const handleNavClick = (e, item) => {
    const isHomePage = location.pathname === "/voice-control-coaching" || location.pathname.endsWith("/");

    if (item.section && isHomePage) {
      e.preventDefault();
      const el = document.getElementById(item.section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.section && !isHomePage) {
      e.preventDefault();
      navigate(""); // Naya fix: Ab ye relative path par wapis home page bhejega
      setTimeout(() => {
        const el = document.getElementById(item.section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
    setMenuOpen(false);
  };

  const handleApplyClick = () => {
    navigate("apply"); // apply ke aage se bhi '/' hata diya
  };

  return (
    <nav className="absolute top-[70px] md:top-[130px] left-0 w-full bg-white border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo click par usay usi page par rakhna hai, main home par nahi bhejna */}
        <Link to="" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <span className="tracking-wide">SEVIL VELSHA</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`relative text-sm transition py-1 ${
                isActive(item) ? "text-black font-medium" : "text-gray-700 hover:text-black"
              }`}
            >
              {item.name}
              {isActive(item) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <button
            onClick={handleApplyClick}
            className="px-5 py-2 text-sm border rounded-full transition text-black border-gray-300 hover:bg-gray-100"
          >
            Apply Now
          </button>
        </div>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm ${
                    isActive(item) ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleApplyClick();
                }}
                className="w-fit px-5 py-2 text-black text-sm border border-gray-300 rounded-full"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}