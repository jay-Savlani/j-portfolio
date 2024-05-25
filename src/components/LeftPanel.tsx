import { Dispatch, SetStateAction } from "react";
import { List } from "./utilityComponents/List";
import PROFILE_IMG from "../assets/profile.jpg";
import { TABS } from "../App";
import { Button } from "./utilityComponents/Button";
import { PlainLink } from "./utilityComponents/PlainLink";

const listItems: TABS[] = [
  "home",
  "skills",
  "professional experience",
  "projects",
  "achievements",
];

type T_LeftPanelProps = {
  setActiveTab: Dispatch<SetStateAction<TABS>>;
  activeTab: TABS;
};

const LeftPlanel = ({ activeTab, setActiveTab }: T_LeftPanelProps) => {
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
                console.log("click handler called", item);
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
                "font-semibold hover:opacity-70 cursor-pointer capitalize flex flex-col justify-center transition-all duration-300 ";

              if (selectedItem === item) {
                console.log("inside");
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

export default LeftPlanel;
