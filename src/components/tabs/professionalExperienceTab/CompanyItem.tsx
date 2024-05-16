import { HorizontalDivider } from "../../utilityComponents/HorizontalDivider";
import { T_ProfessionalExperienceData } from "./data";

type T_CompanyItemProps = {
  item: T_ProfessionalExperienceData;
  options?: Record<string, any>;
};

export const CompanyItem = ({ item }: T_CompanyItemProps) => {
  return (
    <div>
      <div className="flex flex-row gap-3 p-8 items-strech shadow-lg">
        <div className="w-1/4 text-sm">
          <img className="h-24 w-36" src={item.src} />
          <p className="text-base mt-1">{item.title}</p>
          <p className="font-bold text-base">{item.designation}</p>
          <p>{item.address}</p>
          <p>{item.workDurationRange}</p>
          <div className="mt-2 ">
            <div className="mb-2 font-bold  bg-slate-300 p-1">Skills: </div>
            <ul className="flex flex-row gap-2 flex-wrap">
              {item.skills.map((skill) => (
                <li
                  key={skill}
                  className="font-semibold px-1.5 py-1 rounded text-slate-100 block bg-gradient-to-br from-green-600 to-green-500"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-r-2 border-slate-300" />
        <div className="w-3/4 ms-5 flex flex-col justify-center">
          <ul className="list-disc">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
