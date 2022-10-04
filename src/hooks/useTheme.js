import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);
  
  const saveTheme = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !localTheme
      ? saveTheme("dark")
      : localTheme
      ? setTheme(localTheme)
      : saveTheme("light");
    setComponentMounted(true);
  }, []);

  return { theme, toggleTheme, componentMounted };
};