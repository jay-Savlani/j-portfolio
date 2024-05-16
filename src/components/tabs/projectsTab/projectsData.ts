type T_image = {
  title: string;
  imgSrc: string;
};

type T_title = {
  projectName: string;
  imgSrc: string;
};

type T_solution = {
  solution: string;
  description: string;
};

type T_TechStack = {
  techStack: string;
  imgSrg: string;
};

export type T_ProjectsData = {
  title: T_title;
  problemStatement: string[];
  solution: T_solution[];
  techStacks: T_TechStack[];
  flowDiagram?: T_image[];
  images: T_image[];
  summary: string;
  points: string[];
};

export const projectsData: T_ProjectsData[] = [
  {
    title: {
      projectName: "code companion",
      imgSrc: "",
    },
    summary:
      "Code and unit test generation tool also driven by ChatGPT with code analysis, inbuilt code editor, generation history, file save functionality.",
    problemStatement: [],
  },
];
