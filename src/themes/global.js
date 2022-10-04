import { css, useTheme, Global } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          background: ${theme.colors.bg};
          transition: all 0.25s linear;
          h2 {
            font-size: ${theme.typos.big};
            color: ${theme.colors.text};
          }
          p {
            font-size: ${theme.typos.medium};
            color: ${theme.colors.text};
          }
        }
        h2 {
          font-size: ${theme.typos.big};
          color: ${theme.colors.text};
          font-family: "Anek Malayalam", sans-serif;
        }
      `}
    />
  );
};
