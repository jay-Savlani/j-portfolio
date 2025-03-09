import { T_ProfessionalExperienceData } from "./data";

type T_CompanyItemProps = {
  item: T_ProfessionalExperienceData;
  options?: Record<string, any>;
};

export const CompanyItem = ({ item }: T_CompanyItemProps) => {
  return (
    <div className="animation-fade-in">
      <div className="p-4 lg:p-8 flex flex-col lg:grid lg:grid-cols-5 lg:grid-row-2 lg:grid-flow-row gap-10 ">
        <div className="col-span-5">
          <div className="flex flex-col text-center items-center  gap-3">
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-building text-white dark:text-slate-600 text-[30px]" />
              <p className="text-[30px] dark:text-slate-600">{item.title}</p>
            </div>

            <p className=" text-3xl lg:text-[40px] dark:text-slate-600 tracking-widest font-bold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text p-2">
              {item.designation}
            </p>
            <p className="text-base dark:text-slate-600">{item.address}</p>
            <p className="text-base dark:text-slate-600">
              {item.workDurationRange}
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <ul className="flex flex-row lg:max-h-[300px] text-[20px] flex-wrap gap-4 justify-center lg:justify-normal">
            {item.skills.map((skill) => (
              <li
                key={skill}
                className="rounded px-2 py-1 text-wrap tracking-wider dark:text-slate-600"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-3 p-6 pt-0 rounded-lg">
          <ul className="flex flex-col gap-4 justify-self-end">
            {item.points.map((point, index) => (
              <div className="flex flex-row gap-6 items-center hover:tracking-wider hover:-translate-y-1.5 transition-all hover:font-semibold dark:text-slate-600">
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
