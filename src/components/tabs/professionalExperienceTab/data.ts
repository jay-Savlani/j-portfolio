import PEOPLE10_LOGO from "../../../assets/people10.png";
import ET_LOGO from "../../../assets/ET_logo.png";
import UPGRAD_LOGO from "../../../assets/upgrad_logo.svg";
import ABELLON_LOGO from "../../../assets/Abellon-Logo.png";

export type T_ProfessionalExperienceData = {
  title: string;
  designation: string;
  skills: string[];
  address: string;
  workDurationRange: string;
  src: string;
  points: string[];
};

export const data: T_ProfessionalExperienceData[] = [
  {
    title: "People10 Technosoft Private Limited",
    skills: [
      "ReactJs",
      "NextJs",
      "GraphQL",
      "Typescript",
      "mobX",
      "Jest",
      "React Testing Library",
      "JSDoc",
      "Bash scripting",
      "python scripting",
    ],
    designation: "Front End Developer",
    address: "Banglore",
    workDurationRange: "Mar 2022 - Present",
    src: PEOPLE10_LOGO,
    points: [
      "Developed GRAPHQL Api driven responsive and user friendly applications in React and Next.js with unit tests added using jest/React Testing Library for code maintainability.",
      "Implemented React context api’s, native state management in a mono repository.",
      "Implemented Google analytics in applications.",
      "Collaborated closely with client and UI/UX designers to implement matching Wireframe designs.",
      "Developed RESTful API driven Next.js application utilizing mobx state management library with observer subscription pattern for JSX and logic abstraction and implemented typescript for better developer experience and prevention of code bugs.",
      "Developed wrapper libraries in javascript with JSDoc for auto function usage prompts.",
      "Conducted code reviews and provided constructive and code optimization feedback to team members.",
      "Developed bash scripts, curl automation python scripts, productive python scripts for mono repositories for data extraction and productivity enhancement.",
    ],
  },
  {
    title: "upGrad",
    designation: "Student",
    skills: ["Java", "MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
    address: "online",
    workDurationRange: "Aug 2021 - Feb 2022",
    src: UPGRAD_LOGO,
    points: [
      "Enrolled in Java, MongoDb , Express , React , Node (MERN) course in upGrad.",
      "Created multiple end to end projects using Node.js Express.js for backend, React.js for frontend and mongodb for database.",
      "Successfully cleared all the exams and received certificate of completion.",
    ],
  },
  {
    title: "Engineering Technique",
    designation: "Application Engineer",
    skills: ["Solidwords", "VBA"],
    address: "Vadodara",
    workDurationRange: "Dec 2019 - Feb 2021",
    src: ET_LOGO,
    points: [
      "Worked as an application engineer in SOLIDWORKD 3D Designing software.",
      "Developed user interactive macros using VBA in SOLIDWORKS.",
    ],
  },
  {
    title: "Abellon Clean Energy",
    designation: "Graduate Engineer Trainee",
    skills: ["Mechanical Design", "Excel automation", "VBA"],
    address: "Ahmedabad",
    workDurationRange: "Dec 2018 - July 2019",
    src: ABELLON_LOGO,
    points: [
      "Creating and maintaining Power plant daily reports in Excel.",
      "Automated excel sheets using vlookups and VBA in excel.",
      "MIS CAPEX Operations.",
    ],
  },
];
