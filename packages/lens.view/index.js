import invariant from 'invariant';

const view = (lens, value) => {
  invariant(lens instanceof Array, 'lens must be an array.');

  switch (true) {
    // [], value = value
    case lens.length === 0:
      return value;
    // [...], null = undefined
    case value === null:
      return undefined;
    // [...], undefined = undefined
    case typeof value === 'undefined':
      return undefined;
    // [...], non-object = ERROR
    case typeof value !== 'object':
      throw new Error(`path error at ${lens} for value ${value}`);
    // x|xs, val = view(xs, val[x])
    default:
      const copy = lens.slice();
      const head = copy.shift();

      return view(copy, value[head]);
  }
};
export default view;
