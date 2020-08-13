import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { SVGS } from "./icons";
import "./index.scss";

const SVGIcons = ({
  wrapperClass,
  iconClass,
  iconAction,
  iconName,
  iconColor
}) => {
  const SVG = SVGS[iconName];
  const { x, y, height, width, paths } = SVG;

  return (
    <div
      className={cn("icon-container", { [wrapperClass]: !!wrapperClass })}
      onClick={iconAction}
      tabIndex={0}
      role="button"
    >
      <svg
        className={iconClass}
        height={height}
        width={width}
        style={{ fill: iconColor }}
        viewBox={`${x || 0} ${y || 0} ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths && !paths.length ? paths.map(path => path) : paths}
      </svg>
    </div>
  );
};
SVGIcons.propTypes = {
  wrapperClass: PropTypes.string,
  iconClass: PropTypes.string,
  iconAction: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string
};
SVGIcons.defaultProps = {
  wrapperClass: "",
  iconClass: "",
  iconAction: null,
  iconColor: "#000"
};

export default SVGIcons;
