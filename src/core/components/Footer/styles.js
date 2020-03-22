import styled from "styled-components";

import { colors } from "../../styles";
import { breakpoints } from "../../constants";

const { primary, white } = colors;

export const FooterContainer = styled.div`
  height: 50px;
  width: 100%;
  background: ${primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  position: relative;

  @media (max-width: ${breakpoints.md}px) {
    height: max-content;
    flex-direction: column-reverse;
    padding: 0.5rem 0;
  }
`;

export const FooterText = styled.p`
  color: ${white};

  @media (max-width: ${breakpoints.md}px) {
    padding: 0.5rem;
  }
`;
