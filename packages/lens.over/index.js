import update from 'immutability-helper';
import pathToQuery from '../utils/path-to-query';

const over = (lens, fn, data) => update(data, pathToQuery(lens, '$apply', fn));

export default over;
