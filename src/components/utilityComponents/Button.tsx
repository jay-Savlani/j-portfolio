import { ReactNode, ButtonHTMLAttributes } from "react";

type T_ButtonProps = {
  children: ReactNode;
  classes?: string;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, classes, ...rest }: T_ButtonProps) => {
  let buttonClasses = classes ? classes : "bg-stone-900 p-3";

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
