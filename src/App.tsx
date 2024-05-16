import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "./main.css";
import LeftPlanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { Tab } from "./components/Tab";

export type TABS =
  | "home"
  | "skills"
  | "professional experience"
  | "achievements"
  | "projects"
  | "hobbies";

function App() {
  let [selectedTab, setSelectedTab] = useState<TABS>("skills");

  console.log("selected tab", selectedTab);

  return (
    <div className="containers mx-auto h-full bg-white">
      <div className="flex flex-row h-full">
        <div className="basis-1/4 bg-gradient-to-br from-stone-900 to-stone-700">
          <LeftPlanel setActiveTab={setSelectedTab} activeTab={selectedTab} />
        </div>
        <div className="basis-3/4">
          <RightPanel>
            <Tab tab={selectedTab} />
          </RightPanel>
        </div>
      </div>
    </div>
  );
}

export default App;
