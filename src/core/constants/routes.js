export const ROOT_ROUTE = "/";

export const placeParams = (pathRegex, params) =>
  Object.keys(params).reduce(
    (newPath, key) => newPath.replace(new RegExp(`:${key}`), params[key]),
    pathRegex
  );
