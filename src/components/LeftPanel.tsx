import { Dispatch, SetStateAction } from "react";
import { HorizontalDivider } from "./utilityComponents/HorizontalDivider";
import { List } from "./utilityComponents/List";
import PROFILE_IMG from "../assets/profile.jpg";
import { TABS } from "../App";

const listItems: TABS[] = [
  "home",
  "skills",
  "professional experience",
  "achievements",
  "projects",
  "hobbies",
];

type T_LeftPanelProps = {
  setActiveTab: Dispatch<SetStateAction<TABS>>;
  activeTab: TABS;
};

const LeftPlanel = ({ activeTab, setActiveTab }: T_LeftPanelProps) => {
  return (
    <div className="h-full p-5 border-r-2 border-gray-50">
      <div className="flex flex-row justify-center">
        <div className="rounded-full truncate shadow shadow-sm shadow-white">
          <img className=" h-52 w-52 hover:opacity-70" src={PROFILE_IMG} />
        </div>
      </div>
      <h1 className="text-slate-100 text-3xl  tracking-[8px] my-3.5 text-center">
        <span className="shadow-sm font-medium">JAY SAVLANI</span>
      </h1>
      <HorizontalDivider />
      <List
        items={listItems}
        classes="my-7"
        onSelect={setActiveTab}
        selectedItem={activeTab}
      />
    </div>
  );
};

export default LeftPlanel;
