import { T_SKillData } from "./skillData";

type T_SkillDetailProps = {
  skillData: T_SKillData | undefined;
};

export const SkillDetail = ({ skillData }: T_SkillDetailProps) => {
  return (
    <div className="flex flex-col gap-3 py-4 lg:px-4 dark:text-slate-600">
      <div className="flex flex-row gap-x-3 items-center animation-fade-in px-2">
        <img className="h-16 w-16" src={skillData?.src} />
        <h3 className="font-semibold">{skillData?.title}</h3>
      </div>
      <p className="text-md overflow-y-auto h-auto md:max-h-[200px] p-2">
        {skillData?.summary}
      </p>
    </div>
  );
};
