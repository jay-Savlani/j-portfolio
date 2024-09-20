import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQueryContext } from "../contexts/MediaQueryProvider";
import { List } from "./utilityComponents/List";
import PROFILE_IMG from "../assets/profile.jpg";
import { Button } from "./utilityComponents/Button";
import { PlainLink } from "./utilityComponents/PlainLink";
import { HorizontalDivider } from "./utilityComponents/HorizontalDivider";
import { routeConstants } from "./constants";
import "./common.css";

type ROUTE_NAME =
  | "home"
  | "skills"
  | "professional experience"
  | "projects"
  | "achievements";

const listItems: ROUTE_NAME[] = [
  "home",
  "skills",
  "professional experience",
  "projects",
  "achievements",
];

const routeMap: Record<ROUTE_NAME, string> = {
  home: routeConstants.HOME,
  skills: routeConstants.SKILLS,
  "professional experience": routeConstants.PROFESSIONAL_EXPERIENCE,
  projects: routeConstants.PROJECTS,
  achievements: routeConstants.ACHIEVEMENTS,
};

const BurgerMenuIcon = () => {
  return (
    <div className="h-full flex flex-col gap-1.5 items-center justify-center">
      <span className="block h-0.5 w-full bg-orange-500"></span>
      <span className="block h-0.5 w-full bg-orange-500"></span>
      <span className="block h-0.5 w-full bg-orange-500"></span>
    </div>
  );
};

const BurgerMenuCloseIcon = () => {
  return (
    <div className="relative h-full flex items-center justify-center animation-fade-in-quick">
      <span className="block absolute h-0.5 w-full bg-white transform rotate-45  transition-transform duration-300 ease-in-out"></span>
      <span className="block absolute h-0.5 w-full bg-white transform -rotate-45"></span>
    </div>
  );
};

const NavResponsive = () => {
  const [burgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  const overlayClasses = `absolute flex flex-col justify-center ${
    burgerMenuOpen ? "translate-x-0" : "translate-x-full"
  } top-0 left-0 w-[100vw] h-[100vh] p-6 bg-gradient-to-r from-orange-600 to-orange-500 transition-all duration-200`;

  return (
    <nav className="fixed top-0 left-0 px-6 py-2 w-full z-50 bg-slate-900">
      <div className={overlayClasses}>
        <List
          items={listItems}
          classes="text-center justify-center items-center"
          ListItem={({ item }) => {
            if (item === "home") {
              return null;
            }

            const classes =
              "font-semibold hover:opacity-70 cursor-pointer capitalize flex flex-col justify-center transition-all duration-300 text-white text-xl tracking-wider my-10 w-max tracking-wider ";

            return (
              <li className={classes} key={item}>
                <NavLink to={routeMap[item]} onClick={handleToggle}>
                  {item}
                </NavLink>
              </li>
            );
          }}
        />

        <HorizontalDivider borderColor="border-slate-400" />

        <div className="mt-3">
          <PlainLink
            classes="text-white text-xl font-semibold tracking-wider my-3 block hover:opacity-70"
            href="https://github.com/jay-Savlani/"
            target="_blank"
          >
            Github
          </PlainLink>

          <PlainLink
            classes="text-white text-xl font-semibold tracking-wider block hover:opacity-70"
            href="https://www.linkedin.com/in/jay-savlani/"
            target="_blank"
          >
            LinkedIn
          </PlainLink>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <NavLink to={routeConstants.HOME} className="py-3 border-none">
          <img
            src={PROFILE_IMG}
            className="h-12 w-14 rounded-full cursor-pointer me-[-8px]  ring-4 ring-orange-600"
          />
        </NavLink>

        {!burgerMenuOpen && (
          <button className="block h-8 w-8" onClick={handleToggle}>
            <BurgerMenuIcon />
          </button>
        )}
        {burgerMenuOpen && (
          <button className="block h-8 w-8" onClick={handleToggle}>
            <BurgerMenuCloseIcon />
          </button>
        )}
      </div>
    </nav>
  );
};

const Navigation = () => {
  const { windowSize, tailwindBreakpoints } = useMediaQueryContext();

  if (windowSize <= tailwindBreakpoints["md"]) {
    return <NavResponsive />;
  }

  return (
    <nav className="fixed top-0 left-0 py-6 px-12 w-full  z-50 text-white bg-slate-900">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <List
            items={listItems}
            classes="flex flex-row gap-8 items-stretch"
            ListItem={({ item }) => {
              if (item === "home") {
                return (
                  <li key={item}>
                    <NavLink to={routeConstants.HOME}>
                      <img
                        src={PROFILE_IMG}
                        className="h-12 w-14 rounded-full cursor-pointer me-[-8px] ring-4 ring-orange-600"
                      />
                    </NavLink>
                  </li>
                );
              }

              const classes =
                "h-full text-sm lg:text-base font-semibold hover:opacity-70 cursor-pointer capitalize flex flex-col justify-center transition-all duration-300 tracking-wider ";

              return (
                <li key={item}>
                  <NavLink
                    to={routeMap[item]}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b border-orange-600 " + classes
                        : classes
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              );
            }}
          />
        </div>
        <div className="flex flex-row gap-5 tracking-wider text-white">
          <Button classes="bg-orange-600 text-slate-100 py-2.5 px-2.5 rounded hover:opacity-75  transition-all duration-300">
            <PlainLink
              classes="text-inherit"
              href="https://github.com/jay-Savlani/"
              target="_blank"
            >
              GitHub
            </PlainLink>
          </Button>
          <Button classes="py-2.5 px-2.5 rounded border border-orange-400 hover:bg-slate-700  hover:text-white transition-all duration-300">
            <PlainLink
              classes="text-inherit"
              href="https://www.linkedin.com/in/jay-savlani/"
              target="_blank"
            >
              LinkedIn
            </PlainLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
