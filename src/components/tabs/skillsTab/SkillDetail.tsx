import { T_SKillData } from "./skillData";

type T_SkillDetailProps = {
  skillData: T_SKillData | undefined;
};

export const SkillDetail = ({ skillData }: T_SkillDetailProps) => {
  return (
    <div className="flex flex-col gap-3 p-4 ">
      <div className="flex flex-row gap-x-3 items-center">
        <img className="h-16 w-16" src={skillData?.src} />
        <h3 className="font-semibold">{skillData?.title}</h3>
      </div>
      <p className="text-md overflow-y-auto max-h-[200px] p-2">
        {skillData?.summary}
      </p>
    </div>
  );
};
