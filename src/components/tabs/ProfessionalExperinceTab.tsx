import { List } from "../utilityComponents/List";
import { CompanyItem } from "./professionalExperienceTab/CompanyItem";
import { data } from "./professionalExperienceTab/data";

export const ProfessionalExperienceTab = () => {
  return (
    <div className="flex flex-col items-center p-5 px-0 overflow-hidden">
      <List
        items={data}
        classes="flex flex-col gap-18 lg:gap-20 justify-stretch w-full lg:w-4/5"
        ListItem={({ item }) => {
          return (
            <li>
              <CompanyItem item={item} />
            </li>
          );
        }}
      />
    </div>
  );
};
