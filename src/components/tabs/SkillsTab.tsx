import { Carousel } from "./skillsTab/Carousel";
import { skillData } from "./skillsTab/skillData";
import { useState } from "react";
import { List } from "../utilityComponents/List";
import { SkillDetail } from "./skillsTab/SkillDetail";
import "./home/home.css";

export const SkillsTab = () => {
  const [activeSkill, setActiveSkill] = useState("ReactJs");

  return (
    <div className="h-full flex flex-col ">
      <div className="flex flex-row justify-center p-4">
        <Carousel
          data={skillData}
          onSelect={setActiveSkill}
          selectedItem={activeSkill}
          key={activeSkill}
        />
      </div>
      <div className="flex flex-row justify-strech gap-5">
        <div className="basis-1/2 max-h-[350px] shadow-lg p-3 rounded">
          <List
            classes="max-h-[350px] flex flex-col flex-wrap"
            items={skillData}
            ListItem={({ item }) => {
              let titleClasses =
                "text-base p-2 hover:bg-slate-700 hover:text-white cursor-pointer ";

              if (item.title === activeSkill) {
                titleClasses +=
                  "bg-slate-700 text-white shadow-inner shadow-inner";
              }

              return (
                <div className="flex flex-row gap-x-3 items-center">
                  <img className="h-7 w-7" src={item.src} />
                  <h2
                    className={titleClasses}
                    onClick={() => setActiveSkill(item.title)}
                  >
                    {item.title}
                  </h2>
                </div>
              );
            }}
          />
        </div>

        <div className="basis-1/2 shadow-lg rounded p-3 ">
          <SkillDetail
            skillData={skillData.find((skill) => skill.title === activeSkill)}
            key={activeSkill}
          />
        </div>
      </div>
    </div>
  );
};
