import { List } from "../utilityComponents/List";
import { CompanyItem } from "./professionalExperienceTab/CompanyItem";
import { data } from "./professionalExperienceTab/data";
import { TabHeading } from "../utilityComponents/TabHeading";

export const ProfessionalExperienceTab = () => {
  return (
    <div className="flex flex-col p-5 gap-4 overflow-y-scroll">
      <TabHeading>PROFESSIONAL EXPERIENCE</TabHeading>
      <List
        items={data}
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
