import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector(".scrollable-content");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const pageContainer = document.querySelector(".page-transition");
    if (pageContainer) {
      pageContainer.classList.add("animate-pageFade");
      const timer = setTimeout(() => {
        pageContainer.classList.remove("animate-pageFade");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
