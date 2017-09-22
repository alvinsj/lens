import set from '../index';

describe('lens.set', () => {
  describe('when value is changed', () => {
    var source, res;
    beforeAll(() => {
      source = { foo: 'bar' };
      res = set(['foo'], 'baz', source);
    });

    test('mutates copy of the source', () => {
      expect(res).not.toBe(source);
      expect(res.foo).toEqual('baz');
    });

    test('does not change the source', () => {
      expect(source.foo).toBe('bar');
    });
  });

  describe('when value is not changed', () => {
    var source, res;
    beforeAll(() => {
      source = { foo: 'bar' };
      res = set(['foo'], 'bar', source);
    });

    test('returns source', () => {
      expect(res).toBe(source);
      expect(res.foo).toBe('bar');
    });
  });

  describe('when path/lens is non-exists in data', () => {
    var source;
    beforeAll(() => {
      source = { foo: 'bar' };
    });

    test('throws error', () => {
      expect(() => {
        set(['hello', 'hello'], 'world', source);
      }).toThrow("Cannot read property 'hello' of undefined");
    });
  });

  describe('when value is a nested structure', () => {
    var source, res;
    beforeAll(() => {
      source = { foo: { bar: [{ a: 1 }, { b: 2 }] } };
      res = set(['foo', 'bar', 1, 'b'], 3, source);
    });

    test('changes the value according to the lens', () => {
      expect(res).not.toBe(source);
      expect(res.foo.bar[1].b).toEqual(3);
    });
  });
});
