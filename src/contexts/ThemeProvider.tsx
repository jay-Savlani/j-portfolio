import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeProviderValue {
  themeState: "dark" | "light";
}

type T_ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<IThemeProviderValue>({
  themeState: "dark",
});

export const ThemeProvider = ({ children }: T_ThemeProviderProps) => {
  const [themeState, setThemeState] = useState<"dark" | "light">("dark");

  // setup new mutation observer to check if dark class is added to the html element or not

  const mutationObserver = new MutationObserver(() => {
    !document.documentElement.classList.contains("dark")
      ? setThemeState("dark")
      : setThemeState("light");
  });

  // observer HTML element

  mutationObserver.observe(document.documentElement, {
    attributeFilter: ["class"],
  });

  return (
    <ThemeContext.Provider value={{ themeState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
