import { css, useTheme, Global } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          p {
            color: ${theme.colors.secondary};
          }
          h1 {
            font-size: 24px;
            color: hotpink;
            font-weight: 600;
          }
          h2 {
            font-size: 20px;
            color: hotpink;
          }
        }
      `}
    />
  );
};
