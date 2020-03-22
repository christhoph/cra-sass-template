import React from "react";
import PropTypes from "prop-types";

import { MenuContextProvider } from "./menuContext";

export * from "./menuContext";

const ContextProviders = ({ children }) => (
  <MenuContextProvider>{children}</MenuContextProvider>
);
ContextProviders.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContextProviders;
