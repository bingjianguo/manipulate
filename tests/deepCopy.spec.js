import { deepEqual, deepCopy } from '../lib/index';

test('对象深copy:', () => {
  const a = { x: 1, y: 2};
  const b = deepCopy(a);
  expect(deepEqual(a, b)).toBe(true);
});

test('数组深copy: ', () => {
  const a = [
    {
      name: '元旦',
      range: ['2016-01-01', '2016-01-03'],
      type: 'holiday',
    },
  
    {
      name: '春节',
      range: ['2016-02-06'],
      type: 'workingday',
    },
    {
      name: '春节',
      range: ['2016-02-07', '2016-02-13'],
      type: 'holiday',
    },
    {
      name: '春节',
      range: ['2016-02-14'],
      type: 'workingday',
    },
  
    {
      name: '清明节',
      range: ['2016-04-02', '2016-04-04'],
      type: 'holiday',
    },
  
    {
      name: '劳动节',
      range: ['2016-04-30', '2016-05-02'],
      type: 'holiday',
    },
  
  
    {
      name: '端午节',
      range: ['2016-06-09', '2016-06-11'],
      type: 'holiday',
    },
    {
      name: '端午节',
      range: ['2016-06-12'],
      type: 'workingday',
    },
  
    {
      name: '中秋节',
      range: ['2016-09-15', '2016-09-17'],
      type: 'holiday',
    },
    {
      name: '中秋节',
      range: ['2016-09-18'],
      type: 'workingday',
    },
  
    {
      name: '国庆节',
      range: ['2016-10-01', '2016-10-07'],
      type: 'holiday',
    },
    {
      name: '国庆节',
      range: ['2016-10-08', '2016-10-09'],
      type: 'workingday',
    },
  ];
  const b = deepCopy(a);
  expect(deepEqual(a, b)).toBe(true);
})