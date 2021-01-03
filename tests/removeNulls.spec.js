import { removeNulls } from '../lib/index';

test('移除对象空属性: ', () => {
  const a = { x: 1, y: 2, z: '', a: null, b: undefined};
  const newA = removeNulls(a);
  expect('a' in newA).toBe(false);
  expect('z' in newA).toBe(true);
  expect('b' in newA).toBe(false);
});