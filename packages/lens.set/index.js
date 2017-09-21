import update from 'immutability-helper';
import pathToQuery from '../utils/path-to-query';

const set = (lens, value, data) =>
  update(data, pathToQuery(lens, '$set', value));

export default set;
