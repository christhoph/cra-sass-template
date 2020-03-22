import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { useMenuContext } from "../../context";
import { ROOT_ROUTE } from "../../constants";

import {
  HeaderContainer,
  HeaderMenuBox,
  HeaderMenuContainer,
  HeaderMenuItem
} from "./styles";

import SVGIcons from "../SVGIcons";

const MenuItem = ({ css, action, title }) => (
  <HeaderMenuItem css={css} onClick={action}>
    {title}
  </HeaderMenuItem>
);
MenuItem.propTypes = {
  css: PropTypes.string,
  action: PropTypes.func.isRequired,
  title: PropTypes.string
};
MenuItem.defaultProps = {
  css: "",
  title: "Home"
};

const Header = () => {
  const history = useHistory();
  const { showMenu, handleChangeShowMenu, toggleShowMenu } = useMenuContext();

  const handleGoToRoute = useCallback(
    route => () => {
      history.push(route);
      handleChangeShowMenu(false);
    },
    [history, handleChangeShowMenu]
  );

  return (
    <HeaderContainer>
      <h2>CRA Template</h2>
      <HeaderMenuBox>
        <HeaderMenuContainer showMenu={showMenu}>
          <MenuItem action={handleGoToRoute(ROOT_ROUTE)} />
        </HeaderMenuContainer>
        <SVGIcons
          wrapperClass="menu-icon-container"
          iconClass="menu-icon"
          iconName="bars_icon"
          iconAction={toggleShowMenu}
        />
      </HeaderMenuBox>
    </HeaderContainer>
  );
};

export default Header;
