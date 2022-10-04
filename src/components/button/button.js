import React from "react";
import { Container, SelectedOne, SelectedTwo, LabelOne, LabelTwo } from "./style";

const Button = ({ isDarkTheme, toggleTheme }) => {
  return (
    <Container as="button" onClick={toggleTheme}>
      <SelectedOne isDarkTheme={isDarkTheme}>
        <LabelOne isDarkTheme={isDarkTheme}>Light</LabelOne>
      </SelectedOne>
      <SelectedTwo isDarkTheme={isDarkTheme}>
        <LabelTwo isDarkTheme={isDarkTheme}>Dark</LabelTwo>
      </SelectedTwo>
    </Container>
  );
};

export default Button;