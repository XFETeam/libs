/**
 * @module data-utils
 * @example
 * const obj = {aa: 123, bb: 456}
 * withoutProps(obj, ['aa']);
 * // {bb: 456}
 */
export { default as withoutProps } from 'without-props';

/**
 * 判断是否是 base64 图片字符串,
 * @example
 * 输入: data:image/png;base64,iVBORw0KGgoA
 * 输出: true
 * @param {string} base64ImageString - base64 图片字符串
 * @return {boolean}
 */
export function isBase64ImageString(base64ImageString) {
  return /^data:image\/([a-zA-Z]*);base64,([^"]*)/.test(base64ImageString);
}

/**
 * 如果是 undefined, 返回默认值
 * @param val 出入的值
 * @param defaultValue 默认的值
 * @returns {*}
 */
export function defaults(val, defaultValue) {
  return val === undefined ? defaultValue : val;
}
