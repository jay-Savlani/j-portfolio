import { List } from "../utilityComponents/List";
import { achievementsData } from "./achievementsTab/achievementsData";

export const AchievementsTab = () => {
  return (
    <List
      items={achievementsData}
      classes="animation-fade-in pt-3"
      ListItem={({ item }) => {
        return (
          <li key={item.achievement}>
            <div className="p-4 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
              <img className="h-60 w-60" src={item.imgSrc} />

              <h2 className="text-[24px] text-center lg:text-left text-wrap dark:text-slate-600">
                {item.achievement}
              </h2>

              <button className="bg-gradient-to-r from-orange-500 to-orange-700 p-5 rounded hover:opacity-70 lg:ms-auto tracking-wider">
                <a
                  className="no-underline text-white hover:text-slate-100"
                  href={item.certificateLink}
                  target="_blank"
                >
                  View Certificate
                </a>
              </button>
            </div>
          </li>
        );
      }}
    />
  );
};
