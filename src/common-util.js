/** @module commonUtil */
import { Base64 } from 'js-base64';
import * as type from './type-utils';

/**
 * 空函数, 用于默认赋值
*/
export function noop() {}

/**
 * @example
 * 延迟, 用于 async await 等待
 * 用例:
 * (async ()=>{
 *   console.log('等待1s');
 *   await delay(1000);
 *   console.log('完成');
 * })();
 * @param ms {number} 延迟的时间单位毫秒
 * @returns {Promise<any>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 移除空白spaces
 * @example
 * 输入: 137 2700 3240
 * 输出: 13727003240
 * @param text {string} 要移除空白spaces的文本
 * @return {*}
 */
export function removeSpaces(text) {
  if (!text) {
    return text;
  }
  return text.replace(/\D+/g, '');
}

/**
 * 创建数组分组
 * @example
 * var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
 * var groupedArr = createGroupedArray(arr, 4);
 * var result = JSON.stringify(groupedArr);
 * // result: "[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14]]"
 * @param arr {Array} 要分组的数组
 * @param chunkSize {number} 每个组的数目
 * @return {Array}
 */
export function createGroupedArray(arr, chunkSize) {
  let groups = [],
    i = 0,
    arrLength = arr.length;
  for (; i < arrLength; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
}

/**
 * 仿 C# String.Format 实现
 * @example
 * 输入: stringFormat('{0} is dead, but {1} is alive!', 'ASP', 'ASP.NET');
 * 输出: ASP is dead, but ASP.NET is alive!
 * @param format {stringFormat} 字符串模板
 * @return {*}
 */
export function stringFormat(format) {
  const args = Array.prototype.slice.call(arguments, 1);
  return format.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] !== 'undefined' ? args[number] : match;
  });
}

/**
 * 对象转换成 json string
 * @param input {object} 要转换成string的对象
 * @returns {*|string}
 */
function object2JSONString(input) {
  if (!type.isNullOrUndefined(input)) {
    let str = input;
    if (type.isObjectLike(str)) {
      str = JSON.stringify(str);
    }
    if (type.isString(str)) {
      return str;
    }
  }
  throw new Error('the type of input should be {object} or {string}');
}

/**
 * base 64 url 编码
 * @param input {object | string} base64编码的字符串或者对象
 */
export function base64UrlEncode(input) {
  const str = object2JSONString(input);
  return Base64.toBase64(str, true);
}

/**
 * base 64 url 解码
 * @param str {string} 进行base64解码的字符串
 * @param jsonParse {boolean} 是否需要解析成成对象
 * @return {*}
 */
export function base64UrlDecode(str, jsonParse = true) {
  const result = Base64.fromBase64(str);
  if (jsonParse) {
    return JSON.parse(result);
  }
  return result;
}
