// Импорты
import { createGlobalStyle } from "styled-components";

// Переменные
import { variablesStyles } from "../variables/variables.styles";
import { indexStyles } from "../index.styles";

console.log(indexStyles("dark"));

/**
 * Глобальные стили приложения
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
export const GlobalStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    width: 100vw;
    height: 100vh;
    font-family: ${variablesStyles.font.family},
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.theme.color};
    background-color: ${(props) => props.theme.theme.colorBgBody};
    background-repeat: no-repeat;
    margin: 0;
  }
`;
