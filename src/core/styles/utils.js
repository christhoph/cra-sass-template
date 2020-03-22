export const convertHexToRgba = (hex, alpha = 1) =>
  `rgba(${hex.match(/\w\w/g).map(x => parseInt(x, 16))}, ${alpha})`;
