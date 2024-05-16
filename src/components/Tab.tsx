import { TABS } from "../App";
import { HomeTab } from "./tabs/HomeTab";
import { SkillsTab } from "./tabs/SkillsTab";
import { ProfessionalExperienceTab } from "./tabs/ProfessionalExperinceTab";
import { AchievementsTab } from "./tabs/AchievementsTab";
import { ProjectsTab } from "./tabs/ProjectsTab";

type T_TabProps = {
  tab: TABS;
};

export const Tab = ({ tab }: T_TabProps) => {
  switch (tab) {
    case "home":
      return <HomeTab />;
    case "skills":
      return <SkillsTab />;
    case "professional experience":
      return <ProfessionalExperienceTab />;
    case "achievements":
      return <AchievementsTab />;
    case "projects":
      return <ProjectsTab />;
    default:
      return <HomeTab />;
  }
};
