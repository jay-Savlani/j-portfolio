import { Carousel } from "./skillsTab/Carousel";
import { skillData } from "./skillsTab/skillData";
import { useState } from "react";
import { List } from "../utilityComponents/List";
import { SkillDetail } from "./skillsTab/SkillDetail";
import "../common.css";

export const SkillsTab = () => {
  const [activeSkill, setActiveSkill] = useState("ReactJs");

  return (
    <div className="h-full flex flex-col items-center gap-3 lg:gap-0">
      <div className="p-4">
        <Carousel
          data={skillData}
          onSelect={setActiveSkill}
          selectedItem={activeSkill}
          key={activeSkill}
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-strech gap-5 p-3">
        <div className="basis-1/2 lg:shadow-lg lg:max-h-[350px] p-3 dark:bg-slate-200">
          <List
            classes="h-full lg:p-0 grid grid-rows-1 grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col lg:flex-wrap gap-3 lg:gap-0"
            items={skillData}
            ListItem={({ item }) => {
              let titleClasses =
                "text-base p-2 dark:text-slate-600 hover:bg-orange-700 hover:text-white dark:hover:text-white cursor-pointer ";

              if (item.title === activeSkill) {
                titleClasses += "bg-orange-700 dark:text-white shadow-inner";
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

        <div className="basis-1/2 lg:shadow-lg rounded dark:bg-slate-200">
          <SkillDetail
            skillData={skillData.find((skill) => skill.title === activeSkill)}
            key={activeSkill}
          />
        </div>
      </div>
    </div>
  );
};
