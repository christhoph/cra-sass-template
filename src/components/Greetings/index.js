import React from "react";

import { convertHexToRgba, colors } from "../../core";

const { primary } = colors;

const Greetings = () => <h2 style={{ color: convertHexToRgba(primary, 0.8) }}>Hello World!</h2>;

export default Greetings;
