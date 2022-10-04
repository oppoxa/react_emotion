import React from "react";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles, darkTheme, lightTheme } from "./themes";
import {useTheme} from "./hooks/useTheme"

import Home from "./screens/Home";

const App = () => {
  const {theme, toggleTheme, componentMounted} = useTheme()

  if (!componentMounted) {
    return null
  }
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Home isDarkTheme={theme === "dark"} toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
};

export default App;