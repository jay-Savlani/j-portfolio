import { Carousel } from "../utilityComponents/Carousel";
import { skillData } from "./skillsTab/skillData";
import { HorizontalDivider } from "../utilityComponents/HorizontalDivider";
import { useState } from "react";
import { List } from "../utilityComponents/List";
import { SkillDetail } from "./skillsTab/SkillDetail";

export const SkillsTab = () => {
  const [activeSkill, setActiveSkill] = useState("ReactJs");

  console.log("active skill", activeSkill);

  return (
    <div className="h-full flex flex-col ">
      <div className="mt-10 flex flex-row justify-center p-4">
        <Carousel
          data={skillData}
          onSelect={setActiveSkill}
          selectedItem={activeSkill}
          key={activeSkill}
        />
      </div>
      {/* <p className="text-xs text-center mt-8">
        Click icons to view more details
      </p>
      <HorizontalDivider borderColor="border-slate-400 mb-3" /> */}
      <div className="flex flex-row justify-strech gap-5">
        <div className="basis-1/2 max-h-[350px] shadow-lg p-3 rounded">
          <List
            classes="max-h-[350px]"
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

        {/* <div className="border-e border-slate-800" /> */}

        <div className="basis-1/2 shadow-lg rounded p-3">
          <SkillDetail
            skillData={skillData.find((skill) => skill.title === activeSkill)}
          />
        </div>
      </div>
    </div>
  );
};
