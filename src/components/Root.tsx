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
          <circle cx="5" cy="5" r="0.2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
};

interface ContactItemProps {
  iconClass: string;
  contactName: string;
  Contact: string | React.ComponentType<any>;
}

const ContactItem = ({ iconClass, contactName, Contact }: ContactItemProps) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 md:items-center tracking-wider mb-3 last:mb-0">
      <div className="flex gap-4 items-center">
        <i className={`w-2 ${iconClass} text-orange-600`} />
        <h4 className="text-base w-28">{`${contactName} :`}</h4>
      </div>

      {typeof Contact === "string" ? <p>{Contact}</p> : <Contact />}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="pt-2 pb-8 px-6 md:px-0 dark:text-slate-700">
      <h3 className="border-b-2 border-b-orange-600 inline-block py-1 mb-4">
        Contact Info
      </h3>
      <ContactItem
        iconClass="fa fa-envelope"
        contactName="Email"
        Contact="jaysavlani2608@gmail"
      />
      <ContactItem
        iconClass="fa-brands fa-linkedin"
        contactName="LinkedIn"
        Contact={() => (
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jay-savlani/"
            rel="noopener noreferrer"
            className="no-underline cursor-pointer"
          >
            https://www.linkedin.com/in/jay-savlani/
          </a>
        )}
      />
      <ContactItem
        iconClass="fa-brands fa-github"
        contactName="GitHub"
        Contact={() => (
          <a
            target="_blank"
            href="https://github.com/jay-Savlani/"
            className="no-underline cursor-pointer"
            rel="noopener noreferrer"
          >
            https://github.com/jay-Savlani/
          </a>
        )}
      />
    </footer>
  );
};

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    !hash && window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-slate-950 dark:bg-slate-100 min-h-[100vh] relative text-white selection:bg-orange-600 dark:selection:bg-orange-400">
      <Grid />
      <Navigation />
      <div className=" sm:px-6 md:px-8 lg:px-12 h-full pt-24 md:pt-28">
        <div className="h-ful divide-y-2 divide-slate-700">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
