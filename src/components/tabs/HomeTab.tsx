import GITHUB_LOGO from "../../assets/github-mark.png";
import AWS_BADGE from "../../assets/aws_certified.png";
import { Code } from "../utilityComponents/Code";
import { Button } from "../utilityComponents/Button";
import { PlainLink } from "../utilityComponents/PlainLink";
import { HorizontalDivider } from "../utilityComponents/HorizontalDivider";

const init_life = `const init_life = (breathing: "programming" | "other") => {
  while (breathing === "programming") {
    console.log("Fulfilled life");
  }
};

init_life("programming");
`;

export const HomeTab = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-xl font-bold mb-3 bg-slate-400 p-2">
          PROFESSIONAL SUMMARY
        </h1>
        <q className="text-slate-800 italic text-lg">
          Passionate and detail-oriented Front-End Developer with 2+ years of
          experience in building user friendly customer facing and internal
          business applications. Proficient in HTML, CSS, Typescript,
          Javascript, React. Experienced in detailing the code with React
          optimizations, Typescript, JSDoc and writing unit tests for code
          maintainability. Being Linux enthusiast, I am always eager to reduce
          daily redundant tasks with bash scripting with a touch of python and
          increase productivity.
        </q>
        <HorizontalDivider borderColor="border-slate-700 mt-2" />
        <Code language="javascript" classes="py-5">
          {init_life}
        </Code>
      </div>
      <HorizontalDivider borderColor="border-slate-700" />

      <div className=" flex flex-row mt-5 items-center">
        <img src={GITHUB_LOGO} className="h-24 w-24" />
        <div className="ms-8">
          <Button>
            <PlainLink href="https://github.com/jay-Savlani/" target="_blank">
              Go to Github
            </PlainLink>
          </Button>
        </div>
      </div>

      <div className=" flex flex-row mt-5 items-center">
        <img src={AWS_BADGE} className="h-24 w-24" />
        <div className="ms-8">
          <Button>
            <PlainLink
              href="https://www.credly.com/badges/d0b077a7-ebfa-4148-8047-4cd0d3392e2c/public_url"
              target="_blank"
            >
              View Certificate
            </PlainLink>
          </Button>
        </div>
      </div>
    </>
  );
};
