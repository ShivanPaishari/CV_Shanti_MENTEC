import {createGlobalStyle} from "styled-components";



export const GlobalStyle = createGlobalStyle`
body {
  background: ${({ theme }) => theme.background};
  opacity: 0.1;
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
}

`