import styled from "styled-components";

import { convertHexToRgba, colors } from "../../core";

const { primary } = colors;

export const GreetingsText = styled.h2`
  color: ${convertHexToRgba(primary, 0.8)};
`;
