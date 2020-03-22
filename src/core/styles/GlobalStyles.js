import { createGlobalStyle } from "styled-components";

import { SFProFontFace } from "./fonts";
import { colors } from "./colors";

const { white, primary, black } = colors;

export const GlobalStyles = createGlobalStyle`
  ${SFProFontFace}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background: ${white};
    font-family:  "SF Pro Text", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-display: auto;
    overflow: hidden auto;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${primary};
    border: 0 none transparent;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${primary};
  }

  ::-webkit-scrollbar-track {
    background: ${white};
    border: 0 none transparent;
  }

  ::-webkit-scrollbar-track:hover {
    background: ${white};
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  a {
    color: ${black};
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
  }

  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
