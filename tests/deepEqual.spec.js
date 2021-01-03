import { deepEqual } from '../lib/index';

test('对象深比较: 交换property属性顺序', () => {
  const a = { x: 1, y: 2};
  const b = { y: 2, x: 1};
  expect(deepEqual(a, b)).toBe(true);
});

test('对象深比较: function', () => {
  const a = { x: 1, y: 2, z: function() { console.log('d') }};
  const b = { y: 2, x: 1, z: function() { console.log('d') }};
  expect(deepEqual(a, b)).toBe(true);
})