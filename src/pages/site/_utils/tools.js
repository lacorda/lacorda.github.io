export const isObject = (value) => typeof value === 'object' && value.constructor === Object;

export const isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';

export const array2object = (arr, key) => {
  const result = {};
  arr.forEach(item => {
    if (item[key] === undefined) return;
    result[item[key]] = item;
  })
  return result;
}