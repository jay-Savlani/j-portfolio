import { AnchorHTMLAttributes, ReactNode } from "react";

type T_LinkProps = {
  children: ReactNode;
  classes?: string;
} & Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const PlainLink = ({ children, classes, ...rest }: T_LinkProps) => {
  let linkClasses = classes ? classes : "no-underline text-slate-200 ";

  return (
    <a className={linkClasses} {...rest}>
      {children}
    </a>
  );
};
