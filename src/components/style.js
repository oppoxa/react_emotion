import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.bg};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typos.small};
  font-weight: 600;
`;
