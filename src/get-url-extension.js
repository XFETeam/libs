/** @module get-url-extension */
/**
 * 获取 url 后缀
 * @param {string} url 地址
 * @example
 *  xxx.png => png
 * @returns {string|string[]}
 */
export default function getUrlExtension(url) {
  if (!url) {
    return '';
  } else {
    const splits = url.split('.');
    if (splits.length === 1) {
      return '';
    }
    return splits.slice(-1)[0];
  }
}
