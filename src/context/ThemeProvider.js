import {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from "react";

export const themeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("THEME_KEY") || "light"
  );

  const toggleTheme = useCallback(() => {
    let colourChoice = theme === "light" ? "dark" : "light";
    setTheme(colourChoice);
    localStorage.setItem("THEME_KEY", colourChoice);
  });

  return (
    <>
      <themeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
      </themeContext.Provider>
    </>
  );
};

export default ThemeProvider;
