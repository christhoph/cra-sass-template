import styled from "styled-components";

import { colors } from "../../styles";
import { breakpoints } from "../../constants";

const { white } = colors;

export const HeaderContainer = styled.div`
  height: 40px;
  width: 100%;
  background: ${white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  position: sticky;
  top: 0;
  z-index: 10;

  .menu-icon-container {
    height: 20px;
    min-width: 20px;
    display: none;
    cursor: pointer;

    @media (max-width: ${breakpoints.md}px) {
      display: block;
      margin-left: 1rem;
    }

    .menu-icon {
      height: 20px;
      width: 20px;
    }
  }
`;

export const HeaderMenuBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.md}px) {
    height: max-content;
    width: 100%;
    background: ${white};
    flex-direction: column;
    position: absolute;
    top: 40px;
    left: ${({ showMenu }) => (showMenu ? "0" : "-100%")};
    transition: all 0.75s ease;
  }
`;

export const HeaderMenuItem = styled.div`
  height: 100%;
  padding: 0 1rem;
  margin: 0 1rem;
  border-bottom: 2px solid transparent;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    white-space: nowrap;
  }

  ${({ css }) => css}
`;
