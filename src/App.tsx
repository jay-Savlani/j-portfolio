import { useState } from "react";
import "./App.css";
import "./main.css";
import Navigation from "./components/Navigation";
import TabContainer from "./components/TabContainer";
import { Tab } from "./components/Tab";

export type TABS =
  | "home"
  | "skills"
  | "professional experience"
  | "achievements"
  | "projects";

function App() {
  let [selectedTab, setSelectedTab] = useState<TABS>("home");

  return (
    <>
      <Navigation setActiveTab={setSelectedTab} activeTab={selectedTab} />
      <div className=" sm:px-6 md:px-8 lg:px-12 h-full pt-24">
        <TabContainer>
          <Tab tab={selectedTab} />
        </TabContainer>
      </div>
    </>
  );
}

export default App;
