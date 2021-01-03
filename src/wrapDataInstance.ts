import update from 'immutability-helper';

import { getIn, setIn, deleteIn, compose } from './index';
import { isArray, isString } from './is';

export default function(instance: any = {}, context) {
  instance.getIn = function(path, initial) {
    const ctx = context ? context.data : this;
    const pathArray = isString(path) ? [path] : path;
    return getIn(ctx, pathArray, initial);
  };
  instance.setIn = function(path, initial) {
    const ctx = context ? context.data : this;
    const pathArray = isString(path) ? [path] : path;
    return setIn(ctx, pathArray, initial);
  };
  instance.deleteIn = function(path) {
    const ctx = context ? context.data : this;
    const pathArray = isString(path) ? [path] : path;
    return deleteIn(ctx, pathArray);
  };
  // use immutablity helper
  instance.$update = function(manipulate) {
    const ctx = context ? context.data : this;
    return update(ctx, manipulate);
  };

  instance.compose = function(...args) {
    const ctx = context ? context.data : this;
    let composeArray = isArray(args[0]) ? args[0] : args;
    composeArray.unshift(ctx);
    return compose(composeArray);
  };
  return instance;
}
