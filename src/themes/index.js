import React from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { theme } from "./theme";
import { GlobalStyles } from "./global";

const Main = styled.main`
  min-height: 100vh;
`;

const AppTheme = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Navbar />
    <Main>{props.children}</Main>
    <Footer />
  </ThemeProvider>
);

export default AppTheme;
