import styled from "@emotion/styled";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 20px;
  width: 75px;
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
`;

export const Smallpoint = styled.div`
  height: 7px;
  width: 7px;
  background-color: ${(props) => props.theme.colors.footerPoint};
  border-radius: 15px;
`;

export const Horizondiv = styled.div`
  height: 7px;
  width: 20px;
  background-color: ${(props) => props.theme.colors.footerLine};
  border-radius: 15px;
`;
