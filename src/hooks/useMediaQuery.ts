import { useEffect, useState } from "react";

export const tailwindBreakpoints = {
  md: 768,
  sm: 640,
};

export const useMediaQuery = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize };
};
