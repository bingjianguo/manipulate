
/**
 * 删除对象中的空值
 * @param {*} data
 */
export function removeNulls(paramData: any) {
  const data = paramData;
  let d;
  Object.keys(data).forEach((key) => {
    d = data[key];
    if (d instanceof Object) d = removeNulls(d);
    if (
      d === 'null' ||
      d === 'undefined' ||
      d === null ||
      typeof d === 'undefined' ||
      (d instanceof Object && Object.keys(d).length === 0)
    ) {
      delete data[key];
    }
  })

  return data;
}
/**
 * 在data域中取出keys的对象，
 * 并且过滤掉其中的空值内容
 * @param data
 * @param keys
 */
export function filterEmptyKeys(data: any, keys = []) {
  const newData: any = {};
  keys.forEach(key => {
    newData[key] = data[key];
  });
  return removeNulls(newData);
}
