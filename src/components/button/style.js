import styled from "@emotion/styled";

export const Container = styled.button`
  border-radius: 40px;
  background-color: ${(props) => (props.theme.colors.button)};
  width: 340px;
  height: 70px;
  padding: 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: none;
  margin-left: auto;
  margin-right: auto;
`;

export const LabelOne = styled.span`
  font-size: 24px;
  color: ${(props) => (props.isDarkTheme ? "#67666D": props.theme.colors.text )};
`;

export const LabelTwo = styled.span`
  font-size: 24px;
color: ${(props) => (props.isDarkTheme ? props.theme.colors.text : "#67666D")};`;

export const SelectedOne = styled.div`
  border-radius: 30px;
  background-color: ${(props) => (props.isDarkTheme ? props.theme.colors.button : props.theme.colors.buttonSelected )};
  width: 145px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectedTwo = styled.div`
  border-radius: 30px;
  background-color: ${(props) => (props.isDarkTheme ? props.theme.colors.buttonSelected : props.theme.colors.button )};
  width: 145px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
