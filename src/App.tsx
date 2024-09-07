import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./main.css";

import { routeConstants } from "./components/constants";
import Root from "./components/Root";
import { HomeTab } from "./components/tabs/HomeTab";
import { SkillsTab } from "./components/tabs/SkillsTab";
import { ProfessionalExperienceTab } from "./components/tabs/ProfessionalExperinceTab";
import { ProjectsTab } from "./components/tabs/ProjectsTab";
import { AchievementsTab } from "./components/tabs/AchievementsTab";

const router = createHashRouter([
  {
    path: routeConstants.HOME,
    element: <Root />,
    children: [
      { index: true, element: <HomeTab /> },
      { path: routeConstants.SKILLS, element: <SkillsTab /> },
      {
        path: routeConstants.PROFESSIONAL_EXPERIENCE,
        element: <ProfessionalExperienceTab />,
      },
      { path: routeConstants.PROJECTS, element: <ProjectsTab /> },
      { path: routeConstants.ACHIEVEMENTS, element: <AchievementsTab /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
