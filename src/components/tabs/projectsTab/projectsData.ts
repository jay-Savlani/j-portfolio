import ELECTRON_LOGO from "../../../assets/electronjs-icon.svg";
import NODE_LOGO from "../../../assets/nodejs.svg";
import REACT_LOGO from "../../../assets/react.svg";
import TYPESCRIPT_LOGO from "../../../assets/typescript-design-assets/ts-logo-256.svg";
import AWS_LAMBDA_LOGO from "../../../assets/AWS_lambda.png";
import PYTHON_LOGO from "../../../assets/python_logo.png";
import YARN_LOGO from "../../../assets/yarn_logo.png";
import BOOTSTRAP_LOGO from "../../../assets/bootstrap-logo.svg";
import VITE_LOGO from "../../../assets/vite.png";
import CODE_COMPANION_GENERATE from "../../../assets/projects/code_companion/generate.png";
import CODE_COMPANION_ANALYSE from "../../../assets/projects/code_companion/analyse_code.png";
import CODE_COMPANION_GENERATE_TEST from "../../../assets/projects/code_companion/generate_test.png";
import CODE_COMPANION_SETTINGS from "../../../assets/projects/code_companion/settings.png";
import CODE_COMPANION_SAVE_OPEN from "../../../assets/projects/code_companion/save_open.png";
import CODE_COMPANION_VIEW_EDITOR from "../../../assets/projects/code_companion/view_input_editor.png";
import CODE_COMPANION_OPTIONS from "../../../assets/projects/code_companion/options.png";

export type T_image = {
  title: string;
  imgSrc: string;
};

export type T_title = {
  projectName: string;
  imgSrc: string;
};

export type T_solution = {
  solution: string;
  description: string;
};

export type T_TechStack = {
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

export const projectsData: Partial<T_ProjectsData>[] = [
  {
    title: {
      projectName: "Code Companion",
      imgSrc: "",
    },
    summary:
      "Code and unit test generation desktop tool driven by ChatGPT with code analysis, inbuilt code editor, generation histor and file save functionality with servelerss AWS lambda api.",
    problemStatement: [
      "Generating unit tests takes lots of time as developers first need to devise a strategy and identify the various tests required, and post that developer needs to consult the testing library to get familiar with syntax and synopsis. ",
      "Code generated by developers is not always efficient and performance optimized.",
      "Dependency on other developers and architects to figure out the purpose and working of a code",
      "Difficult to remember code analysis. Putting it as comments is not always feasible, as the file grows longer in length.",
      "Conventional chat based assistants require code to be drafted in the code editor before providing it as an input.",
      "Keeping a dedicated server for server implementation with pre-decided load balancers, containers and log file sizes.",
      "Non dedicated environment.",
    ],
    solution: [
      {
        solution: "In built code editor",
        description:
          "Code companion comes with a code editor by default, allowing developers to directly start writing in code with syntax highlighting features supported for different programming languages and make it ready for analysis or test generation.",
      },
      {
        solution: "Local persistence",
        description:
          "Code companion supports local persistence of code generation , analysis and or unit test case generation in the computer system.",
      },
      {
        solution: "OS Interaction",
        description:
          "Code companion supports OS interaction that allows developers to open an existing file for analysis or test generation or to save a file for generated code.",
      },
      {
        solution: "Response modification",
        description:
          "Code generation analysis , test generation or code generation response can be tweaked by controlling the temperature for variance setting and max token limit for controlling API response limit.",
      },
      {
        solution: "Viewer flexibility",
        description:
          "Developers can choose to keep the input code editor or output code editor, providing a streamlined distraction free user experience. Loved by devs the most.",
      },
      {
        solution: "AWS Lambda integration",
        description:
          "API implementation for code companion resides in serverless AWS lambda , removing the overhead of monitoring load balancers, memory consumption and scalability issues. Important API KEYS are stored in AWS resulting in improved security.",
      },
      {
        solution: "Dedicated environment",
        description:
          "Code companion is shipped as a desktop application (.deb and .exe) providing a dedicated environment to developers for local history persistence and OS interaction",
      },
      {
        solution: "History Filter Capability",
        description:
          "Developers can search through their previous code companion requests and get the generated data which is locally persisted.",
      },
    ],
    techStacks: [
      {
        techStack: "ElectronJs",
        imgSrg: ELECTRON_LOGO,
      },
      {
        techStack: "ReactJs",
        imgSrg: REACT_LOGO,
      },
      {
        techStack: "Serverless AWS Lamda",
        imgSrg: AWS_LAMBDA_LOGO,
      },
      {
        techStack: "Electron Forge",
        imgSrg: ELECTRON_LOGO,
      },
      {
        techStack: "NodeJs",
        imgSrg: NODE_LOGO,
      },
      {
        techStack: "Typescript",
        imgSrg: TYPESCRIPT_LOGO,
      },
      {
        techStack: "Bootstrap",
        imgSrg: BOOTSTRAP_LOGO,
      },
      {
        techStack: "Yarn package manager",
        imgSrg: YARN_LOGO,
      },
      {
        techStack: "VITE",
        imgSrg: VITE_LOGO,
      },
      {
        techStack: "python",
        imgSrg: PYTHON_LOGO,
      },
    ],
    images: [
      { title: "Generate Code", imgSrc: CODE_COMPANION_GENERATE },
      { title: "Analyse Code", imgSrc: CODE_COMPANION_ANALYSE },
      { title: "Generate Test", imgSrc: CODE_COMPANION_GENERATE_TEST },
      { title: "Settings", imgSrc: CODE_COMPANION_SETTINGS },
      { title: "Save / Open Files", imgSrc: CODE_COMPANION_SAVE_OPEN },
      { title: "View / Hide Editor", imgSrc: CODE_COMPANION_VIEW_EDITOR },
      { title: "Options", imgSrc: CODE_COMPANION_OPTIONS },
    ],
  },
];