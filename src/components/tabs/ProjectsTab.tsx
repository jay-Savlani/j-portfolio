import { ReactNode } from "react";
import { projectsData } from "./projectsTab/projectsData";
import { List } from "../utilityComponents/List";
import { ProjectImageCarousel } from "./projectsTab/ProjectImageCarousel";
import "../common.css";
import { PlainLink } from "../utilityComponents/PlainLink";
import GITHUB_LOGO from "../../assets/github-mark.png";

type T_ContentProps = {
  title?: string;
  titleClasses?: string;
  children: ReactNode;
};

const Content = ({ children, title, titleClasses }: T_ContentProps) => {
  let backgroundClasses =
    "text-transparent bg-gradient-to-r from-red-700 to-red-600 bg-clip-text ";
  const headingClasses = (backgroundClasses += titleClasses
    ? titleClasses
    : "text-3xl mt-8");

  return (
    <>
      {title && <h3 className={headingClasses}>{title}</h3>}
      <p className="mt-5">{children}</p>
    </>
  );
};

export const ProjectsTab = () => {
  return (
    <div className="flex px-6 lg:px-28 mt-4 flex-col animation-fade-in-quick overflow-hidden">
      <List
        items={projectsData}
        ListItem={({ item }) => (
          <div>
            <div className="flex flex-row items-center justify-between mb-12">
              <h2 className="text-4xl lg:text-6xl text-transparent py-3 bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text animation-fade-in">
                {item.title?.projectName}
              </h2>

              <div className="shrink-0">
                <PlainLink href={item.githubLink} target="_blank">
                  <img
                    src={GITHUB_LOGO}
                    className="w-10 h-10 hover:opacity-70"
                  />
                </PlainLink>
              </div>
            </div>

            {item.appLink && (
              <div className="mb-4">
                <PlainLink href={item.appLink} target="_blank">
                  <button className="bg-gradient-to-r from-blue-200 to-cyan-200 px-1.5 py-2 lg:px-3 lg:py-2 rounded text-slate-800 text-sm lg:text-lg">
                    <div className="flex flex-row items-center gap-2">
                      <span className="tracking-wide">{item.appLinkName}</span>
                      <span>&#x2197;</span>
                    </div>
                  </button>
                </PlainLink>
              </div>
            )}

            <p className="mt-3">{item.summary}</p>
            <div className="flex flex-row justify-center mt-8 mb-14">
              <ProjectImageCarousel data={item.images || []} />
            </div>
            <Content title="Problem Statement">
              {item.problemStatement?.length && (
                <List
                  items={item.problemStatement}
                  ListItem={({ item }) => {
                    return (
                      <li key={item} className="flex flex-row gap-3 my-1">
                        <span className="font-semibold">&gt;</span>
                        <p>{item}</p>
                      </li>
                    );
                  }}
                />
              )}
            </Content>
            {item.solution?.length && (
              <Content title="Solutions">
                <List
                  items={item.solution}
                  ListItem={({ item }) => {
                    return (
                      <li key={item.solution} className="my-2">
                        <div className="flex flex-row gap-3">
                          <span>&gt;</span>

                          <h4 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
                            {item.solution}
                          </h4>
                        </div>
                        <p className="mt-1.5">{item.description}</p>
                      </li>
                    );
                  }}
                />
              </Content>
            )}
            <Content title="Tech Stacks">
              {item.techStacks?.length && (
                <List
                  items={item.techStacks}
                  classes="my-8 flex flex-col gap-8 lg:max-h-[300px] flex-wrap"
                  ListItem={({ item }) => (
                    <li key={item.techStack} className="flex flex-row gap-8">
                      <img src={item.imgSrc} className="h-10 w-10" />
                      <span className="text-lg">{item.techStack}</span>
                    </li>
                  )}
                />
              )}
            </Content>
          </div>
        )}
      />
    </div>
  );
};
