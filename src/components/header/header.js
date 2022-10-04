import React from "react";
import { Container, ContainerImg, Lune, Soleil } from "./styles";

function Header({ isDarkTheme }) {
  const themeMode =
  !isDarkTheme ? (
      <Soleil isDarkTheme={isDarkTheme} />
    ) : (
      <>
        <Soleil isDarkTheme={isDarkTheme} />
        <Lune />
      </>
    );

  return (
    <Container>
      <ContainerImg>{themeMode}</ContainerImg>
      <h2>Choose a style</h2>
      <p>
        Pop or subtle. Day or night.
        <br />
        Customize your interface.
      </p>
    </Container>
  );
}

export default Header;
