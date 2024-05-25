import { useState } from "react";
import "./App.css";
import "./main.css";
import LeftPlanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { Tab } from "./components/Tab";

export type TABS =
  | "home"
  | "skills"
  | "professional experience"
  | "achievements"
  | "projects";

function App() {
  let [selectedTab, setSelectedTab] = useState<TABS>("home");

  console.log("selected tab", selectedTab);

  return (
    <>
      <LeftPlanel setActiveTab={setSelectedTab} activeTab={selectedTab} />
      <div className=" sm:px-6 md:px-8 lg:px-12 h-full pt-24">
        <RightPanel>
          <Tab tab={selectedTab} />
        </RightPanel>
      </div>
    </>
  );
}

export default App;
