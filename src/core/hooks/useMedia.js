import { breakpoints } from "../constants";

export const useMedia = breakpoint =>
  window.matchMedia(`(max-width: ${breakpoint || breakpoints.md}px)`).matches;
