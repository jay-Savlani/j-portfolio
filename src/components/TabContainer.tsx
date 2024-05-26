import { ReactNode } from "react";

type T_TabContainerProps = {
  children: ReactNode;
};

const TabContainer = ({ children }: T_TabContainerProps) => {
  return <div className="h-full">{children}</div>;
};

export default TabContainer;
