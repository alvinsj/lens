import invariant from 'invariant';

const pathToQuery = (lens, method, value) => {
  invariant(lens instanceof Array, 'lens must be an array.');

  if (lens.length === 0) return { [method]: value };

  const copy = lens.slice();
  const head = copy.shift();

  return { [head]: pathToQuery(copy, method, value) };
};
export default pathToQuery;
