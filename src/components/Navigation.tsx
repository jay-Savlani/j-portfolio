import { Dispatch, SetStateAction, useState } from "react";
import { List } from "./utilityComponents/List";
import PROFILE_IMG from "../assets/profile.jpg";
import { TABS } from "../App";
import { Button } from "./utilityComponents/Button";
import { PlainLink } from "./utilityComponents/PlainLink";
import { useMediaQueryContext } from "../contexts/MediaQueryProvider";
import { HorizontalDivider } from "./utilityComponents/HorizontalDivider";
import "./common.css";

const listItems: TABS[] = [
  "home",
  "skills",
  "professional experience",
  "projects",
  "achievements",
];

type T_NavigationProps = {
  setActiveTab: Dispatch<SetStateAction<TABS>>;
  activeTab: TABS;
};

const BurgerMenuIcon = () => {
  return (
    <div className="h-full flex flex-col gap-1.5 items-center justify-center">
      <span className="block h-0.5 w-full bg-slate-700"></span>
      <span className="block h-0.5 w-full bg-slate-700"></span>
      <span className="block h-0.5 w-full bg-slate-700"></span>
    </div>
  );
};

const BurgerMenuCloseIcon = () => {
  return (
    <div className="relative h-full flex items-center justify-center animation-fade-in-quick">
      <span className="block absolute h-0.5 w-full bg-white transform rotate-45 transform transition-transform duration-300 ease-in-out"></span>
      <span className="block absolute h-0.5 w-full bg-white transform -rotate-45"></span>
    </div>
  );
};

const NavResponsive = ({ activeTab, setActiveTab }: T_NavigationProps) => {
  const [burgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  let overlayClasses = `absolute flex flex-col justify-center ${
    burgerMenuOpen ? "translate-x-0" : "translate-x-full"
  } top-0 left-0 w-[100vw] h-[100vh] p-6 bg-gradient-to-r from-indigo-600 to-indigo-950 transition-all duration-200`;

  return (
    <nav className="fixed top-0 left-0 p-6 w-full bg-white z-50">
      <div className={overlayClasses}>
        <List
          items={listItems}
          classes="text-center justify-center items-center"
          onSelect={setActiveTab}
          selectedItem={activeTab}
          ListItem={({ item, selectedItem, onSelect }) => {
            const clickHandler = (item: TABS) => {
              if (onSelect) {
                handleToggle();
                onSelect(item);
              }
            };

            if (item === "home") {
              return null;
            }

            let classes =
              "font-semibold hover:opacity-70 cursor-pointer capitalize flex flex-col justify-center transition-all duration-300 text-white text-xl tracking-wider my-10 w-max ";

            if (selectedItem === item) {
              classes += "border-b border-slate-50";
            }

            return (
              <li
                className={classes}
                key={item}
                onClick={() => clickHandler(item)}
              >
                {item}
              </li>
            );
          }}
        />

        <HorizontalDivider borderColor="border-slate-400" />

        <div className="mt-3">
          <PlainLink
            classes="text-white text-xl font-semibold tracking-wider my-3 block"
            href="https://github.com/jay-Savlani/"
            target="_blank"
          >
            <span className="me-2"> &#x2197;</span>
            Github
          </PlainLink>

          <PlainLink
            classes="text-white text-xl font-semibold tracking-wider block"
            href="https://www.linkedin.com/in/jay-savlani/"
            target="_blank"
          >
            <span className="me-2"> &#x2197;</span>
            LinkedIn
          </PlainLink>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <button
          className="p-0 border-none"
          onClick={() => setActiveTab("home")}
        >
          <img
            src={PROFILE_IMG}
            className="h-12 w-14 rounded-full me-6 cursor-pointer me-[-8px]"
          />
        </button>

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

const Navigation = ({ activeTab, setActiveTab }: T_NavigationProps) => {
  const { windowSize, tailwindBreakpoints } = useMediaQueryContext();

  if (windowSize <= tailwindBreakpoints["md"]) {
    return <NavResponsive activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  return (
    <nav className="fixed top-0 left-0 py-6 px-12 w-full bg-white ">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <List
            items={listItems}
            classes="flex flex-row gap-8 items-stretch"
            onSelect={setActiveTab}
            selectedItem={activeTab}
            ListItem={({ item, selectedItem, onSelect }) => {
              const clickHandler = (item: TABS) => {
                if (onSelect) {
                  onSelect(item);
                }
              };

              if (item === "home") {
                return (
                  <li key={item} onClick={() => clickHandler(item)}>
                    <img
                      src={PROFILE_IMG}
                      className="h-12 w-14 rounded-full me-6 cursor-pointer me-[-8px]"
                    />
                  </li>
                );
              }

              let classes =
                "text-sm lg:text-base font-semibold hover:opacity-70 cursor-pointer capitalize flex flex-col justify-center transition-all duration-300 ";

              if (selectedItem === item) {
                classes += "border-b border-slate-900";
              }

              return (
                <li
                  className={classes}
                  key={item}
                  onClick={() => clickHandler(item)}
                >
                  {item}
                </li>
              );
            }}
          />
        </div>
        <div className="flex flex-row gap-5">
          <Button classes="bg-slate-900 text-white py-2.5 px-2.5 rounded hover:opacity-75 transition-all duration-300">
            <PlainLink
              classes="text-inherit"
              href="https://github.com/jay-Savlani/"
              target="_blank"
            >
              Github
            </PlainLink>
          </Button>
          <Button classes="py-2.5 px-2.5 rounded border border-slate-900 hover:bg-slate-900 text-slate-900 hover:text-white transition-all duration-300">
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
