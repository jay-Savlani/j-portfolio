import { ReactNode } from "react";

type T_RightPanelProps = {
  children: ReactNode;
};

const RightPanel = ({ children }: T_RightPanelProps) => {
  return <div className="h-full">{children}</div>;
};

export default RightPanel;
