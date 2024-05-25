import { HorizontalDivider } from "../../utilityComponents/HorizontalDivider";
import { T_ProfessionalExperienceData } from "./data";

type T_CompanyItemProps = {
  item: T_ProfessionalExperienceData;
  options?: Record<string, any>;
};

export const CompanyItem = ({ item }: T_CompanyItemProps) => {
  return (
    // <div className="pe-[300px]">
    //   <div className="flex flex-row justify-between items-center">
    //     <img className="h-[250px] w-[400px]" src={item.src} />
    //     <div className="flex flex-col gap-1.5">
    //       <p className="text-[30px]">{item.title}</p>
    //       <p className=" text-[40px] tracking-widest font-bold">
    //         {item.designation}
    //       </p>
    //       <p className="text-base">{item.address}</p>
    //       <p className="text-base">{item.workDurationRange}</p>
    //     </div>
    //   </div>

    //   <div className="flex flex-row">
    //     <ul className="flex flex-col max-h-[300px] flex-wrap gap-3">
    //       {item.skills.map((skill) => (
    //         <li
    //           key={skill}
    //           className="font-semibold rounded bg-slate-700 text-white px-2 py-1"
    //         >
    //           {skill}
    //         </li>
    //       ))}
    //     </ul>
    //     <ul className="list-disc">
    //       {item.points.map((point, index) => (
    //         <li key={index}>{point}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    <div className="animation-fade-in">
      <div className="p-8 grid grid-cols-5 grid-row-2 grid-flow-row gap-10">
        <div className="col-span-2">
          <img className="h-[250px] w-[400px]" src={item.src} />
        </div>
        <div className="col-span-3">
          <div className="flex flex-col text-right gap-3">
            <p className="text-[30px]">{item.title}</p>
            <p className=" text-[40px] tracking-widest font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
              {item.designation}
            </p>
            <p className="text-base">{item.address}</p>
            <p className="text-base">{item.workDurationRange}</p>
          </div>
        </div>

        <div className="col-span-2">
          <ul className="flex flex-row max-h-[300px] text-[20px] flex-wrap gap-4">
            {item.skills.map((skill) => (
              <li
                key={skill}
                className=" rounded text-slate-900 px-2 py-1 text-wrap tracking-wider"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-3 text-black p-6 pt-0 rounded-lg">
          <ul className="flex flex-col gap-4 justify-self-end">
            {item.points.map((point, index) => (
              <div className="flex flex-row gap-6 items-center hover:tracking-wider hover:-translate-y-1.5 transition-all hover:font-semibold">
                <span className="font-bold text-lg text-green-500">
                  &#10003;
                </span>
                <li key={index} className="">
                  {point}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
