import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { useMenuContext } from "../../context";
import { ROOT_ROUTE } from "../../constants";

import SVGIcons from "../SVGIcons";
import "./index.scss";

const MenuItem = ({ action, title }) => (
  <div className="menu-box_item" onClick={action}>
    {title}
  </div>
);
MenuItem.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string
};
MenuItem.defaultProps = {
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
    <div className="header-container">
      <h2>CRA Template</h2>
      <div className="header-menu_box">
        <div className="menu-box_container" style={{ left: showMenu ? 0 : "-100%"}}>
          <MenuItem action={handleGoToRoute(ROOT_ROUTE)} />
        </div>
        <SVGIcons
          wrapperClass="menu-icon-container"
          iconClass="menu-icon"
          iconName="bars_icon"
          iconAction={toggleShowMenu}
        />
      </div>
    </div>
  );
};

export default Header;
