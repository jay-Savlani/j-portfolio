type T_HorizontalDividerProps = {
  borderColor?: string;
};

export const HorizontalDivider = ({
  borderColor,
}: T_HorizontalDividerProps) => {
  let classes = "w-full border-t-2 ";

  if (borderColor) classes += borderColor;
  else classes += "border-slate-200";

  return <hr className={classes} />;
};
