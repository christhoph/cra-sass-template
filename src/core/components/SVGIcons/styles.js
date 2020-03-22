import styled from "styled-components";

export const SVGIconsContainer = styled.div`
  background: transparent;
  border: none;
  outline: none;

  svg {
    fill: ${({ iconColor }) => iconColor};
  }
`;
