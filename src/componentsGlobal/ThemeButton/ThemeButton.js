import { useContext } from "react";
import { themeContext } from "../../context/ThemeProvider";
import styles from "./ThemeButton.module.css";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div className={styles.button_container}>
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </div>
  );
};

export default ThemeButton;
