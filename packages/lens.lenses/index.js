import invariant from 'invariant';

export const lensPath = pathInArray => {
  invariant(pathInArray instanceof Array, 'argument must be an array');
  return pathInArray;
};

export const lensProp = propName => {
  invariant(typeof propName === 'string', 'argument must be a string');
  return [propName];
};

export const lensIndex = index => {
  invariant(typeof index === 'number', 'argument must be a number');
  return [index];
};

export const lens = (...typedLens) =>
  typedLens.reduce((all, l) => all.concat(l), []);
