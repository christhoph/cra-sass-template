import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const ScrollableContainer = ({ refElement, className, children }) => (
  <div className={cn("scrollable-container", { [className]: className })} ref={refElement}>
    {children}
  </div>
);
ScrollableContainer.propTypes = {
  refElement: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
ScrollableContainer.defaultProps = {
  refElement: null,
  className: ""
};

export default ScrollableContainer;
