import { ReactNode } from "react";

type T_RightPanelProps = {
  children: ReactNode;
};

const RightPanel = ({ children }: T_RightPanelProps) => {
  return (
    <div className="px-7 flex flex-col h-full overflow-hidden bg-gray">
      {children}
    </div>
  );
};

export default RightPanel;
