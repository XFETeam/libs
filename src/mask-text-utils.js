/** @module mask-text-utils */

/**
 * 对字符串取前后3位中间进行星号加密
 * @param {string} text 进行星号加密的字符串
 * @return {void | string | never|*}
 */
export default function maskText(text) {
  if (text) {
    return text.replace(/(.{3})(.*)(.{3})/, function(substring, group1, group2, group3) {
      return `${group1}******${group3}`;
    });
  }
  return text;
}
