import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line page ko ekdum upar bhej degi
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi path badlega, ye chalega

  return null;
};

export default ScrollToTop;