import { ReactNode } from "react";
// React syntax highlighter do not have d.ts (type declration files)
/* @ts-ignore */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* @ts-ignore */
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type T_CodeProps = {
  children: ReactNode;
  language: string;
  classes?: string;
  rest?: { [k: string]: any };
};

export const Code = ({ children, language, classes, rest }: T_CodeProps) => {
  return (
    <div className={classes}>
      <SyntaxHighlighter language={language} style={oneDark} {...rest}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
