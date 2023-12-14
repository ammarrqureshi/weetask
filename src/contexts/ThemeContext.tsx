import { createContext, ReactNode, useState } from "react";
import { ThemeContextType } from "../types/types.tasks";
export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("Dark");
  const changeTheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
    } else setTheme("Dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
