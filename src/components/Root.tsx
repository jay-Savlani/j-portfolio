import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { useEffect } from "react";

const Grid = () => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="inset-0 absolute pointer-events-none"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="0.15" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
};

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    !hash && window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-slate-950 min-h-[100vh] relative text-white selection:bg-orange-600">
      <Grid />
      <Navigation />
      <div className=" sm:px-6 md:px-8 lg:px-12 h-full pt-24 md:pt-28">
        <div className="h-ful">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
