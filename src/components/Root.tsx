import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <div className=" sm:px-6 md:px-8 lg:px-12 h-full pt-16 md:pt-20">
        <div className="h-full -z-0">
          <Outlet />
        </div>
      </div>
    </>
  );
}
