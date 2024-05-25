import GITHUB_LOGO from "../../assets/github-mark.png";
import AWS_BADGE from "../../assets/aws_certified.png";
import { Code } from "../utilityComponents/Code";
import { Button } from "../utilityComponents/Button";
import { PlainLink } from "../utilityComponents/PlainLink";
import { HorizontalDivider } from "../utilityComponents/HorizontalDivider";
import "./home/home.css";

const init_life = `const init_life = (breathing: "programming" | "other") => {
  while (breathing === "programming") {
    console.log("Fulfilled life");
  }
};

init_life("programming");
`;

export const HomeTab = () => {
  return (
    <div className="pt-8">
      <div className="h-[70vh] home-bg rounded-lg">
        <div className="flex flex-col justify-center h-full w-1/2">
          <div className="px-8">
            <h1 className="animation-move-in-left font-bold text-[50px] text-transparent tracking-widest mb-4 bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text">
              JAY SAVLANI
            </h1>
            <h2 className="animation-fade-in font-semibold text-[22px] tracking-wider mb-6  text-transparent bg-gradient-to-r from-red-950 to-red-600 bg-clip-text">
              SOFTWARE DEVELOPER
            </h2>
            <p className="text-slate-800 tracking-wider animation-fade-in">
              Passionate and detail-oriented Front-End Developer with 2+ years
              of experience in building user friendly customer facing and
              internal business applications. Proficient in HTML, CSS,
              Typescript, Javascript, React. Experienced in detailing the code
              with React optimizations, Typescript, JSDoc and writing unit tests
              for code maintainability. Being Linux enthusiast, I am always
              eager to reduce daily redundant tasks with bash scripting with a
              touch of python and increase productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="py-24 flex flex-row items-center justify-center gap-14">
        <p className="text-[200px] text-transparent bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text animation-spin-slow">
          &lt;/&gt;
        </p>
        <code>
          <pre className="text-2xl text-transparent bg-gradient-to-r from-red-950 to-red-600 bg-clip-text">
            {init_life}
          </pre>
        </code>
      </div>
    </div>
  );
};
