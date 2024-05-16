import { List } from "../utilityComponents/List";
import { TabHeading } from "../utilityComponents/TabHeading";
import { achievementsData } from "./achievementsTab/achievementsData";

export const AchievementsTab = () => {
  return (
    <div className="flex flex-col p-5 gap-4 overflow-y-scroll">
      <TabHeading>ACHIEVEMENTS</TabHeading>
      <List
        items={achievementsData}
        ListItem={({ item }) => {
          return (
            <li key={item.achievement}>
              <div className="flex flex-row gap-10 shadow-lg p-8 mt-10">
                <img className="h-48 w-48" src={item.imgSrc} />
                <div className="flex flex-col grow px-10 gap-4 justify-center">
                  <h2 className="text-base font-semibold text-[18px] tracking-wider">
                    {item.achievement.toUpperCase()}
                  </h2>
                  <button className="bg-gradient-to-br from-green-600 to-green-500 shadow-lg p-5 rounded hover:opacity-70">
                    <a
                      className="no-underline text-white hover:text-slate-100"
                      href={item.certificateLink}
                      target="_blank"
                    >
                      View Certificate
                    </a>
                  </button>
                </div>
              </div>
            </li>
          );
        }}
      />
    </div>
  );
};
