import styled from "styled-components";

export const ScrollableContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  ${({ css }) => css}
`;
