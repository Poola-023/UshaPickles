import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This force-scrolls the window to the very top (x=0, y=0)
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the path changes

  return null;
};

export default ScrollToTop;