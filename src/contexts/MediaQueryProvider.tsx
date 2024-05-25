import { ReactNode, createContext, useContext } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { tailwindBreakpoints } from "../hooks/useMediaQuery";

const MediaQueryContext = createContext({
  windowSize: 0,
  tailwindBreakpoints: { md: 0, sm: 0 },
});

type T_MediaQueryProviderProps = {
  children: ReactNode;
};

export const MediaQueryProvider = ({ children }: T_MediaQueryProviderProps) => {
  const { windowSize } = useMediaQuery();

  return (
    <MediaQueryContext.Provider value={{ windowSize, tailwindBreakpoints }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = () => {
  return useContext(MediaQueryContext);
};
