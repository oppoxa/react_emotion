import React from "react";
import styled from "@emotion/styled";

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  height: 70px;
`;

const Container = styled.nav`
  display: table;
  margin: 0 auto;
`;

const Li = styled.li`
  list-style-type: none;
  display: inline;
  padding: 0px 10px;
`;

const NavText = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typos.default};
`;

const Navbar = () => {
  return (
    <Background>
      <Container>
        <ul>
          <Li>
            <NavText>Accueil</NavText>
          </Li>
          <Li>
            <NavText>À propos</NavText>
          </Li>
          <Li>
            <NavText>Contact</NavText>
          </Li>
        </ul>
      </Container>
    </Background>
  );
};

export default Navbar;
