import { css } from "styled-components";

import SFProFont from "./SFProText-Regular.ttf";

export const SFProFontFace = css`
  @font-face {
    font-family: "SF Pro Text";
    src: url(${SFProFont}) format("truetype");
    font-weight: regular;
    font-style: normal;
  }
`;
