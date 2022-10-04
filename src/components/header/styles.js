import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const ContainerImg = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const Soleil = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background: ${(props) =>
    !props.isDarkTheme
      ? "rgb(255, 0, 0) linear-gradient(90deg, rgba(255, 0, 0, 0.711922268907563) 0%, rgba(255, 77, 1, 0.8323704481792717) 47%, rgba(255, 141, 0, 0.9248074229691877) 100% );"
      : "rgb(0, 95, 255) linear-gradient(90deg, rgba(0, 95, 255, 0.8379726890756303) 0%, rgba(1, 138, 255, 0.6643032212885154) 47%, rgba(0, 125, 255, 0.2189250700280112) 100% );"};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  position: relative;
  top: 0;
  left: 0;
`;

export const Lune = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background-color: #262431;
  position: absolute;
  top: -15%;
  left: 47%;
`;
