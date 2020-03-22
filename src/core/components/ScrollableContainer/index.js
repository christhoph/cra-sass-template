import React from "react";
import PropTypes from "prop-types";

import { ScrollableContainerWrapper } from "./styles";

const ScrollableContainer = ({ refElement, css, children }) => (
  <ScrollableContainerWrapper ref={refElement} css={css}>
    {children}
  </ScrollableContainerWrapper>
);
ScrollableContainer.propTypes = {
  refElement: PropTypes.object,
  css: PropTypes.string,
  children: PropTypes.node.isRequired
};
ScrollableContainer.defaultProps = {
  refElement: null,
  css: ""
};

export default ScrollableContainer;
