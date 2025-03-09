import { createContext, ReactNode, useContext, useState } from "react";

export interface IThemeProviderValue {
  themeState: "dark" | "light";
  toggleTheme: () => void;
}

type T_ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<IThemeProviderValue>({
  themeState: "dark",
  toggleTheme: () => {},
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

  const toggleTheme = () => document.documentElement.classList.toggle("dark");

  return (
    <ThemeContext.Provider value={{ themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
