import { ReactNode } from "react";

type T_TabHeadingProps = {
  children: ReactNode;
};

export const TabHeading = ({ children }: T_TabHeadingProps) => {
  return <h2 className="p-2 bg-slate-700 text-slate-200">{children}</h2>;
};
