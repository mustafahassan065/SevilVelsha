import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router";

const MENU_ITEMS = [
  { label: "About me", sectionId: "about" },
  { label: "My Story", sectionId: "story" },
  { label: "What I Do", sectionId: "services" },
  { label: "Testimonial", sectionId: "testimonial" },
  { label: "Contact", path: "/contact" },
  { label: "Blogs", path: "/blogs" },
];

function Nav() {
  const [isFixed, setIsFixed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setIsMenuOpen(false);
      return;
    }

    if (item.sectionId) {
      const section = document.getElementById(item.sectionId);
      if (!section) return;

      const fixedNavOffset = window.innerWidth >= 1024 ? 88 : 72;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - fixedNavOffset,
        behavior: "smooth",
      });

      setActiveSection(item.sectionId);
      setIsMenuOpen(false);
    }
  };

  const liStyle =
    "cursor-pointer font-semibold transition-all duration-150 hover:text-green-600";

  const isItemActive = (item) => {
    if (item.path === "/blogs") return location.pathname.startsWith("/blogs");
    if (item.path === "/book-session") return location.pathname === "/book-session";
    if (item.path) return location.pathname === item.path;
    return activeSection === item.sectionId;
  };

  return (
    <header className="bg-bgColor">
      <div className="mx-auto hidden max-w-7xl items-center justify-between border-b border-gray-200 px-5 py-4 text-sm md:flex">
        <a href="mailto:sevilvelsha.com" className="flex items-center gap-1">
          <MdEmail className="mt-0.5 text-green-600" />
          sevilvelsha.com
        </a>
        <div>Voice & Communication Expert | Speaker | Author | Coach</div>
      </div>

      {isFixed && <div className="h-[72px] lg:h-[88px]" />}

      <nav
        className={
          isFixed
            ? `fixed left-0 right-0 top-0 z-50 bg-bgColor ${
                hasScrolled ? "shadow-md" : ""
              }`
            : "bg-bgColor"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 lg:py-5">
          <div className="cursor-pointer select-none text-2xl font-bold sm:text-3xl">
            <NavLink to="/">Sevil Velsha</NavLink>
          </div>

          <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`${liStyle} ${
                    isItemActive(item) ? "text-green-600" : "text-gray-700"
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="https://www.instagram.com/sevilvelsha?igsh=MXVoN29zNWIza2NzdQ%3D%3D"
            className="hidden items-center gap-1 font-semibold text-green-600 xl:flex"
          >
            <FaInstagram className="mt-1" /> @sevil.Velsha
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600 lg:hidden"
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

        <div
          aria-hidden={!isMenuOpen}
          className={`overflow-hidden bg-bgColor px-4 transition-[clip-path,opacity,max-height,padding] duration-300 ease-out lg:hidden sm:px-5 ${
            isMenuOpen
              ? "max-h-[460px] border-t border-gray-200 pb-4 opacity-100"
              : "pointer-events-none max-h-0 pb-0 opacity-0"
          }`}
          style={{
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
                    className={`w-full rounded-md px-3 py-2 text-left ${liStyle} ${
                      isItemActive(item)
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700"
                    }`}
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1 px-3 font-semibold text-green-600"
            >
              <FaInstagram className="mt-1" /> @sevil.Velsha
            </a>

            <a
              href="mailto:sevilvelsha.com"
              className="mt-3 inline-flex items-center gap-1 px-3 font-semibold text-green-600 md:hidden"
            >
              <MdEmail className="mt-0.5 text-green-600" />
              sevilvelsha.com
            </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
