import React, { useState, useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const MenuContext = React.createContext();

const useMenuContext = () => useContext(MenuContext) || null;

function MenuContextProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = useCallback(() => setShowMenu(val => !val), []);
  const handleChangeShowMenu = useCallback(val => setShowMenu(val), []);

  const value = useMemo(
    () => ({ showMenu, toggleShowMenu, handleChangeShowMenu }),
    [showMenu, toggleShowMenu, handleChangeShowMenu]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
MenuContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { MenuContextProvider, useMenuContext };
